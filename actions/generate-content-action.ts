"use server";

import { db } from "@/lib/db";
import { createChatSession } from "@/lib/gemini-ai";
import { currentUser } from "@clerk/nextjs/server";
import { contentTemplates } from "@/lib/content-template";
import { revalidatePath } from "next/cache";

const DEFAULT_FREE_CREDITS = 10000;
const MIN_CREDITS_REQUIRED = 100;

type GenerateContentInput = {
  templateSlug: string;
  niche: string;
  outline?: string;
};

type GenerateContentResult =
  | { success: true; content: string }
  | { success: false; error: string };

export async function generateContentAction(
  input: GenerateContentInput
): Promise<GenerateContentResult> {
  const user = await currentUser();
  if (!user?.id) {
    return { success: false, error: "Not authenticated" };
  }

  const template = contentTemplates.find((t) => t.slug === input.templateSlug);
  if (!template) {
    return { success: false, error: "Template not found" };
  }

  // Ensure user credit record exists
  let userRecord = await db.user.findUnique({ where: { userId: user.id } });
  if (!userRecord) {
    userRecord = await db.user.create({
      data: { userId: user.id, totalCredit: DEFAULT_FREE_CREDITS },
    });
  }

  if (userRecord.totalCredit < MIN_CREDITS_REQUIRED) {
    return {
      success: false,
      error: "Insufficient credits. Please upgrade your plan to continue.",
    };
  }

  const prompt = `Niche: ${input.niche}${input.outline ? `, Outline: ${input.outline}` : ""}. ${template.aiPrompt}`;

  let content: string;
  try {
    const session = createChatSession();
    const result = await session.sendMessage(prompt);
    content = result.response.text();
  } catch (err) {
    console.error("[Gemini] generation failed:", err);
    return { success: false, error: "AI service unavailable. Please try again." };
  }

  const creditCost = Math.min(content.length, userRecord.totalCredit);

  await db.$transaction([
    db.user.update({
      where: { userId: user.id },
      data: { totalCredit: { decrement: creditCost } },
    }),
    db.aIOutput.create({
      data: {
        userId: user.id,
        title: input.niche,
        description: content,
        templateUsed: template.name,
      },
    }),
  ]);

  revalidatePath("/dashboard", "layout");
  revalidatePath("/dashboard/usage");
  revalidatePath("/dashboard/history");

  return { success: true, content };
}
