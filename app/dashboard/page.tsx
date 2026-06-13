"use client";

import { useState, Suspense } from "react";
import { SearchDashboard } from "./_components/serach-dashboard";
import { TemplateList } from "./_components/template-list";
import { TemplateGridSkeleton } from "./_components/template-grid-skeleton";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>();

  return (
    <div>
      <div className="px-5 pt-6 pb-2">
        <h1 className="text-xl font-semibold text-foreground">
          Content Templates
        </h1>
        <p className="text-sm text-muted-foreground mt-0.5">
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
