import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: string;
  icon: ReactNode;
  trend?: string;
  variant?: "default" | "warning";
};

function StatCard({
  title,
  value,
  icon,
  trend,
  variant = "default",
}: StatCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl border-border",
        variant === "warning" && "border-warning/40 bg-warning/5",
      )}
    >
      <CardContent className="pt-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {title}
            </p>
            <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
            {trend && (
              <p className="text-xs text-muted-foreground mt-0.5">{trend}</p>
            )}
          </div>
          <div
            className={cn(
              "size-8 rounded-lg flex items-center justify-center",
              variant === "warning"
                ? "bg-warning/20 text-warning"
                : "bg-primary/10 text-primary",
            )}
          >
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const UsagePage = async () => {
  const user = await currentUser();
  if (!user?.id) redirect("/");

  const [userAIOutputs, userCredit] = await Promise.all([
    db.aIOutput.findMany({ where: { userId: user.id } }),
    db.user.findUnique({ where: { userId: user.id } }),
  ]);

  const totalUsage = userAIOutputs.reduce(
    (sum, o) => sum + (o.description?.length ?? 0),
    0,
  );
  const availableCredit = userCredit ? Number(userCredit.totalCredit) : 10000;
  const remaining = Math.max(availableCredit - totalUsage, 0);
  const percentUsed = Math.min(
    (totalUsage / Math.max(availableCredit, 1)) * 100,
    100,
  );

  return (
    <div className="p-5 space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Credit Usage</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Your AI generation activity and credit balance
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          title="Total Credits"
          value={availableCredit.toLocaleString()}
          icon={<CreditCard className="size-4" />}
          trend="lifetime allocation"
        />
        <StatCard
          title="Credits Used"
          value={totalUsage.toLocaleString()}
          icon={<Zap className="size-4" />}
          trend={`${percentUsed.toFixed(1)}% consumed`}
        />
        <StatCard
          title="Credits Remaining"
          value={remaining.toLocaleString()}
          icon={<BarChart3 className="size-4" />}
          variant={percentUsed > 80 ? "warning" : "default"}
          trend={percentUsed > 80 ? "Running low" : "Healthy balance"}
        />
      </div>

      {/* Credit meter card */}
      <Card className="rounded-2xl border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">
            Credit Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Used</span>
              <span className="font-medium">
                {totalUsage.toLocaleString()} / {availableCredit.toLocaleString()}
              </span>
            </div>
            <div className="relative h-3 w-full rounded-full bg-muted overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-700",
                  percentUsed > 80 ? "bg-warning" : "bg-primary",
                )}
                style={{ width: `${percentUsed}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground text-right">
              {percentUsed.toFixed(1)}% used
            </p>
          </div>
        </CardContent>
        {percentUsed > 70 && (
          <CardFooter className="border-t border-border pt-3">
            <div className="flex items-center justify-between w-full">
              <p className="text-xs text-muted-foreground">
                {percentUsed > 80
                  ? "Running low on credits"
                  : "Consider upgrading soon"}
              </p>
              <Link href="/dashboard/upgrade">
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-xl text-xs"
                >
                  <Zap className="size-3 mr-1" />
                  Get More Credits
                </Button>
              </Link>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default UsagePage;
