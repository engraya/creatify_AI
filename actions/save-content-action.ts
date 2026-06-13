"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

type CreateContentInput = {
  title: string;
  description: string;
  templateUsed: string;
};

export async function createContentAction({
  title,
  description,
  templateUsed,
}: CreateContentInput) {
  const user = await currentUser();
  if (!user?.id) {
    throw new Error("Not authenticated");
  }

  return db.aIOutput.create({
    data: {
      userId: user.id,
      title,
      description,
      templateUsed,
    },
  });
}
