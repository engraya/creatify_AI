"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { logoIcon } from "@/public/_static";
import Image from "next/image";
import { Sparkles, History, BarChart3, Zap } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const menuList = [
  { name: "Generate Content", icon: Sparkles, path: "/dashboard" },
  { name: "Recent Contents", icon: History, path: "/dashboard/history" },
  { name: "Usage", icon: BarChart3, path: "/dashboard/usage" },
  { name: "Upgrade", icon: Zap, path: "/dashboard/upgrade" },
];

type CreditData = { availableCredit: number; totalUsage: number };

type Props = {
  creditData: CreditData;
  onNavClick?: () => void;
};

export const Sidebar = ({ creditData, onNavClick }: Props) => {
  const path = usePathname();
  const { availableCredit, totalUsage } = creditData;
  const remaining = Math.max(availableCredit - totalUsage, 0);
  const percentUsed = Math.min(
    (totalUsage / Math.max(availableCredit, 1)) * 100,
    100,
  );

  return (
    <div className="flex h-screen w-64 shrink-0 flex-col border-r border-border bg-card">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center gap-2.5 border-b border-border px-5">
        <Link
          href="/"
          onClick={onNavClick}
          className="flex items-center gap-2.5"
        >
          <Image
            src={logoIcon}
            height={32}
            width={32}
            alt="Creatify logo"
            className="rounded-lg"
          />
          <span className="brand-gradient-text font-urban text-lg font-extrabold">
            {siteConfig.name}
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
        {menuList.map((menu) => {
          const Icon = menu.icon;
          const isActive = path === menu.path;
          return (
            <Link
              href={menu.path}
              key={menu.name}
              onClick={onNavClick}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "border border-primary/20 bg-primary/10 font-semibold text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="size-4 shrink-0" />
              {menu.name}
            </Link>
          );
        })}
      </nav>

      {/* Credit meter */}
      <div className="border-t border-border px-4 py-3">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">
            Credits
          </span>
          <span className="font-mono text-xs text-foreground">
            {remaining.toLocaleString()} left
          </span>
        </div>
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500",
              percentUsed > 80 ? "bg-warning" : "bg-primary",
            )}
            style={{ width: `${percentUsed}%` }}
          />
        </div>
        <p className="mt-1 text-[11px] text-muted-foreground">
          {totalUsage.toLocaleString()} / {availableCredit.toLocaleString()}{" "}
          used
        </p>
        {percentUsed > 80 && (
          <Link href="/dashboard/upgrade" onClick={onNavClick}>
            <div className="mt-2 flex h-7 w-full cursor-pointer items-center justify-center gap-1 rounded-lg border border-warning/50 px-2 text-xs text-warning transition-colors hover:bg-warning/10">
              <Zap className="size-3" />
              Upgrade
            </div>
          </Link>
        )}
      </div>

      {/* User */}
      <div className="flex items-center justify-between border-t border-border px-4 py-3">
        <UserButton />
        <ThemeToggle />
      </div>
    </div>
  );
};
