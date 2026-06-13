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
    <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="size-9 rounded-xl">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
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
        <span className="brand-gradient-text font-urban text-base font-extrabold">
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
