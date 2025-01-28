"use client";

import React from "react";
import { Sidebar } from "./_components/sidebar";
import { useState } from "react"
import DashboardHeader from "./_components/DashboardHeader";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {

  const [showSideBar, setShowSideBar] = useState(false)


  return (
    <div className="flex min-h-screen">
    <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    <div className="relative w-full">
    <div
      className={`${
        showSideBar &&
        "bg-opacity/30 absolute z-40 size-full"
      }`}
      onClick={() => setShowSideBar(false)}
        ></div>
      <DashboardHeader setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
      <div className="mt-12 h-fit bg-gray-50 pb-5 md:ml-64 md:mt-0">{children}</div>
    </div>
    </div>
  );
};

export default DashboardLayout;