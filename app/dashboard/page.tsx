"use client";

import { useState } from "react";
import { SearchDashboard } from "./_components/serach-dashboard";
import { TemplateList } from "./_components/template-list";
import { Suspense } from "react";


const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <Suspense fallback={<div>Loading templates...</div>}>
      <SearchDashboard onSearchInput={setSearchInput} />
      <TemplateList searchInput={searchInput as string} />
    </Suspense>
  );
};

export default Dashboard;