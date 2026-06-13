import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { Sidebar } from "./_components/sidebar";
import { MobileSidebarSheet } from "./_components/mobile-sidebar-sheet";

const DashboardLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const user = await currentUser();

  let availableCredit = 10000;
  let totalUsage = 0;

  if (user?.id) {
    const [userAIOutputs, userCredit] = await Promise.all([
      db.aIOutput.findMany({ where: { userId: user.id } }),
      db.user.findUnique({ where: { userId: user.id } }),
    ]);
    totalUsage = userAIOutputs.reduce(
      (sum, o) => sum + (o.description?.length ?? 0),
      0,
    );
    availableCredit = userCredit ? Number(userCredit.totalCredit) : 10000;
  }

  const creditData = { availableCredit, totalUsage };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar — always visible on lg+ */}
      <aside className="hidden lg:flex">
        <Sidebar creditData={creditData} />
      </aside>

      {/* Main content area */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Mobile header + Sheet drawer */}
        <MobileSidebarSheet creditData={creditData} />

        {/* Page content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
