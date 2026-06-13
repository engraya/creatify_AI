"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function deleteHistoryItem(id: string) {
  const user = await currentUser();
  if (!user?.id) throw new Error("Unauthorized");

  await db.aIOutput.delete({
    where: { id, userId: user.id },
  });

  revalidatePath("/dashboard/history");
}
