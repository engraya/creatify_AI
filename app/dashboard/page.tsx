"use client";

import { useState } from "react";
import { SearchDashboard } from "./_components/serach-dashboard";
import { TemplateList } from "./_components/template-list";
import { Suspense } from "react";


const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <>
      <SearchDashboard onSearchInput={setSearchInput} />
      <Suspense fallback={<div>Loading templates...</div>}>
        <TemplateList searchInput={searchInput as string} />
      </Suspense>
    </>
  );
};

export default Dashboard;