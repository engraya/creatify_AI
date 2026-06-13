import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AIChart from "./ai-chart";

export const AIUsage = async () => {
  const user = await currentUser();
  if (!user?.id) {
    redirect("/");
  }

  const [userAIOutputs, userCredit] = await Promise.all([
    db.aIOutput.findMany({ where: { userId: user.id } }),
    db.user.findUnique({ where: { userId: user.id } }),
  ]);

  const totalUsage = userAIOutputs.reduce(
    (sum, output) => sum + (output.description?.length ?? 0),
    0
  );

  const availableCredit = userCredit ? Number(userCredit.totalCredit) : 10000;

  return <AIChart availableCredit={availableCredit} totalUsage={totalUsage} />;
};
