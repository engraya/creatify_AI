"use client";

import { useState, Suspense } from "react";
import { SearchDashboard } from "./_components/serach-dashboard";
import { TemplateList } from "./_components/template-list";
import { TemplateGridSkeleton } from "./_components/template-grid-skeleton";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>();

  return (
    <div>
      <div className="px-5 pb-2 pt-6">
        <h1 className="text-xl font-semibold text-foreground">
          Content Templates
        </h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Choose a template to generate social media content with AI
        </p>
      </div>

      <Suspense fallback={<TemplateGridSkeleton />}>
        <SearchDashboard onSearchInput={setSearchInput} />
        <TemplateList searchInput={searchInput ?? ""} />
      </Suspense>
    </div>
  );
};

export default Dashboard;
