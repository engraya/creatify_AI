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
        "absolute bg-opacity-30 w-full h-full z-40"
      }`}
      onClick={() => setShowSideBar(false)}
        ></div>
      <DashboardHeader setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
      <div className="md:ml-64 mt-12 md:mt-0 bg-gray-50 h-fit pb-5">{children}</div>
    </div>
    </div>
  );
};

export default DashboardLayout;