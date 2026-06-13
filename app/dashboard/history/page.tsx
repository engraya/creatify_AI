import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { History, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/shared/empty-state";
import { HistoryTableClient } from "./_components/history-table-client";

const HistoryPage = async () => {
  const user = await currentUser();
  if (!user?.id) return null;

  const userHistory = await db.aIOutput.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-5">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-foreground">
          Content History
        </h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          {userHistory.length} generation
          {userHistory.length !== 1 ? "s" : ""} total
        </p>
      </div>

      <Card className="rounded-2xl border-border shadow-sm overflow-hidden">
        {userHistory.length === 0 ? (
          <EmptyState
            icon={<History className="size-6 text-muted-foreground" />}
            title="No content yet"
            description="Generate content using any template and it will appear here."
            action={
              <Link href="/dashboard">
                <Button size="sm" className="rounded-xl">
                  <Sparkles className="size-3.5 mr-1.5" />
                  Try a template
                </Button>
              </Link>
            }
          />
        ) : (
          <HistoryTableClient initialData={userHistory} />
        )}
      </Card>
    </div>
  );
};

export default HistoryPage;
