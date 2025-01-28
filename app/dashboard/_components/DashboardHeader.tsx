import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { logoIcon } from '@/public/_static';

type Props = {
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    showSideBar: boolean;
  };
function DashboardHeader({ setShowSideBar, showSideBar }: Props) {


  return (
    <nav className="w-full sm:hidden lg:w-[calc(100%-13.5rem)] fixed top-0 z-40 p-2 bg-gray-200">
    <div className="flex flex-wrap items-center justify-between">
    <Link href="/">
      <div className="flex flex-row gap-2 cursor-pointer">
       <Image src={logoIcon} height={40} width={40} alt="logo" className="flex justify-center items-center"/>
         <span className="font-urban flex justify-center items-center text-gray-900 text-xl font-bold">
         <h1
              className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500">
                {siteConfig.name}
            </h1>
          </span>
      </div>
      </Link>
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle for Mobile */}
    <div className="sm:hidden ustify-center items-center gap-2 inline-flex">
    <div onClick={() => setShowSideBar(!showSideBar)} className="h-10 p-2 bg-[#151929] rounded justify-center cursor-pointer items-center gap-2 inline-flex overflow-hidden">
        <div className="w-6 h-6 relative overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21 12H3" stroke="#C1C5E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 6H3" stroke="#C1C5E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 18H3" stroke="#C1C5E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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