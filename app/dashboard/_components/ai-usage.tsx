import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import AIChart from "./ai-chart";
import { currentUser } from "@clerk/nextjs/server";

export const AIUsage = async () => {
  const user = await currentUser();
  const userId  = user?.id

  if (!userId) {
    redirect("/");
  }

  let availableCredit;
  let totalUsage: number = 0;

  const userAIOutputs = await db.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
  });

  if (userAIOutputs.length > 0) {
    userAIOutputs.forEach((output) => {
      totalUsage = totalUsage + Number(output.description?.length);
    });

    revalidatePath("/");
  }

  const userCredit = await db.user.findUnique({
    where: { userId: userId as string },
  });

  availableCredit = userCredit ? Number(userCredit?.totalCredit) : 10000;

  return (
    <div className="">
      <AIChart availableCredit={availableCredit} totalUsage={totalUsage} />
    </div>
  );
}