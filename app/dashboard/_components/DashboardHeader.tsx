import React from 'react'


type Props = {
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    showSideBar: boolean;
  };
function DashboardHeader({ setShowSideBar, showSideBar }: Props) {


  return (
    <nav className="w-full sm:hidden lg:w-[calc(100%-13.5rem)] fixed top-0 z-40 p-4 bg-gray-200">
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle for Mobile */}
    <div className="sm:hidden ustify-center items-center gap-2 inline-flex">
    <div onClick={() => setShowSideBar(!showSideBar)} className="h-10 p-2 bg-[#151929] rounded justify-center cursor-pointer items-center gap-2 inline-flex overflow-hidden">
        <div className="w-6 h-6 relative overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21 12H3" stroke="#C1C5E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 6H3" stroke="#C1C5E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 18H3" stroke="#C1C5E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
        </div>
    </div>
    </div>
      </div>
    </div>
  </nav>
  )
}

export default DashboardHeader