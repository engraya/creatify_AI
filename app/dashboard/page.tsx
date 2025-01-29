"use client";

import { useState } from "react";
import { SearchDashboard } from "./_components/serach-dashboard";
import { TemplateList } from "./_components/template-list";
import { Suspense } from "react";


const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput} />
      <Suspense>
        <TemplateList searchInput={searchInput as string} />
      </Suspense>
    </div>
  );
};

export default Dashboard;