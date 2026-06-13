"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";
import Image from "next/image";
import Link from "next/link";
import { logoIcon } from "@/public/_static";
import { siteConfig } from "@/config/site";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/layout/theme-toggle";

type CreditData = { availableCredit: number; totalUsage: number };

export function MobileSidebarSheet({
  creditData,
}: {
  creditData: CreditData;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-3 px-4 bg-background/80 backdrop-blur-md border-b border-border lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="size-9 rounded-xl">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar creditData={creditData} onNavClick={() => setOpen(false)} />
        </SheetContent>
      </Sheet>

      <Link href="/" className="flex items-center gap-2">
        <Image
          src={logoIcon}
          height={28}
          width={28}
          alt="Creatify"
          className="rounded-lg"
        />
        <span className="font-urban text-base font-extrabold brand-gradient-text">
          {siteConfig.name}
        </span>
      </Link>

      <div className="ml-auto flex items-center gap-1">
        <ThemeToggle />
        <UserButton />
      </div>
    </header>
  );
}
