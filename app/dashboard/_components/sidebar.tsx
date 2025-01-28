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
    className={`flex flex-col justify-between fixed top-0 left-0 z-50 h-full overflow-y-auto transition-transform ${
      showSideBar ? "translate-x-0 " : "-translate-x-full lg:translate-x-0"
    }`}
  >
    <div className="p-5 bg-white h-[800px] flex flex-col">
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
  
      <div className="mt-10 h-max flex flex-col justify-between">
        {menuList.map((menu) => (
          <Link
            href={menu.path}
            key={menu.name}
            className={cn(
              "flex gap-2 mb-2 p-3 hover:bg-slate-400 whitespace-nowrap font-bold hover:text-white cursor-pointer rounded-lg items-center",
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