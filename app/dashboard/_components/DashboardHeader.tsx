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
    <nav className="fixed top-0 z-40 w-full bg-gray-200 p-2 sm:hidden lg:w-[calc(100%-13.5rem)]">
    <div className="flex flex-wrap items-center justify-between">
    <Link href="/">
      <div className="flex cursor-pointer flex-row gap-2">
       <Image src={logoIcon} height={40} width={40} alt="logo" className="flex items-center justify-center"/>
         <span className="flex items-center justify-center font-urban text-xl font-bold text-gray-900">
         <h1
              className="bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500 bg-clip-text text-xl font-extrabold text-transparent">
                {siteConfig.name}
            </h1>
          </span>
      </div>
      </Link>
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle for Mobile */}
    <div className="ustify-center inline-flex items-center gap-2 sm:hidden">
    <div onClick={() => setShowSideBar(!showSideBar)} className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded bg-[#151929] p-2">
        <div className="relative size-6 overflow-hidden">
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