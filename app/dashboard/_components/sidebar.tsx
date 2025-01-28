"use client";

import { create, history, upgrade } from "@/public/_static/dashboard";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { usage } from "@/public/_static/dashboard";
import { logoIcon } from "@/public/_static";
const menuList = [
  {
    name: "Generate Content",
    icon: create,
    path: "/dashboard",
  },
  {
    name: "Recent Contents",
    icon: history,
    path: "/dashboard/history",
  },
  {
    name: "Usage",
    icon: usage,
    path: "/dashboard/usage",
  },
  {
    name: "Upgrade",
    icon: upgrade,
    path: "/dashboard/upgrade",
  },
];

type Props = {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};


export const Sidebar = ({ showSideBar }: Props) => {
  const path = usePathname();

  console.log("path", path);
  return (
    <div
    className={`fixed left-0 top-0 z-50 flex h-full flex-col justify-between overflow-y-auto transition-transform ${
      showSideBar ? "translate-x-0 " : "-translate-x-full lg:translate-x-0"
    }`}
  >
    <div className="flex h-[800px] flex-col bg-white p-5">
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
  
      <div className="mt-10 flex h-max flex-col justify-between">
        {menuList.map((menu) => (
          <Link
            href={menu.path}
            key={menu.name}
            className={cn(
              "mb-2 flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg p-3 font-bold hover:bg-slate-400 hover:text-white",
              path === menu.path && "bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500 text-white"
            )}
          >
            <Image src={menu.icon} width={30} height={30} alt="menu-icon"/>
            <h2 className="text-lg">{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
    </div>

  );
};