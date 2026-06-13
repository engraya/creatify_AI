"use client";

import { useContext } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { docsConfig } from "@/config/docs";
import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { ModalContext } from "@/components/modals/providers";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from "next/image";
import { logoIcon } from "@/public/_static";
import { ThemeToggle } from "@/components/layout/theme-toggle";



interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const { setShowSignInModal } = useContext(ModalContext);

  const selectedLayout = useSelectedLayoutSegment();
  const documentation = selectedLayout === "docs";

  const configMap = {
    docs: docsConfig.mainNav,
  };

  const links =
    (selectedLayout && configMap[selectedLayout]) || marketingConfig.mainNav;

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <MaxWidthWrapper
        className="flex h-14 items-center justify-between py-4"
        large={documentation}
      >
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-1.5">
           <Image src={logoIcon} height={40} width={40} alt="logo"/>
            <span className="brand-gradient-text font-urban text-xl font-extrabold">
              {siteConfig.name}
            </span>
          </Link>

          {links && links.length > 0 ? (
            <nav className="hidden gap-6 md:flex">
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  prefetch={true}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${selectedLayout}`)
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>

        <div className="flex items-center space-x-3">
            <div className="hidden flex-1 items-center space-x-4 sm:justify-end lg:flex">
               <div className="flex items-center space-x-1">
                <Link
                  href="https://github.com/engraya/creatify_AI"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-full p-2 text-foreground/60 transition-colors hover:text-foreground"
                >
                  <Icons.gitHub className="size-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <ThemeToggle />
              </div>
            </div>
   
            <SignedIn>
            <Link
              href={"/dashboard"}
              className="hidden md:block"
            >
              <Button
                className="gap-2 px-5"
                variant="default"
                size="sm"
                rounded="full"
              >
                <span>Dashboard</span>
              </Button>
            </Link>
            </SignedIn>
  
            <SignedOut>
            <Button
              className="hidden gap-2 px-5 md:flex"
              variant="default"
              size="sm"
              rounded="full"
            >
              <SignInButton />
              <Icons.arrowRight className="size-4" />
            </Button>
            </SignedOut>
    
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
