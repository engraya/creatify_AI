"use client";

import { Check, List } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Drawer } from "vaul";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { BLOG_CATEGORIES } from "@/config/blog";
import { cn } from "@/lib/utils";

export function BlogHeaderLayout() {
  const [open, setOpen] = useState(false);
  const { slug } = useParams() as { slug?: string };
  const data = BLOG_CATEGORIES.find((category) => category.slug === slug);

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <MaxWidthWrapper className="py-6 md:pb-8 md:pt-10">
        <div className="max-w-screen-sm">
          <h1 className="font-heading text-3xl md:text-4xl">
            {"About"}
          </h1>
          <p className="mt-3.5 text-base text-muted-foreground md:text-lg">
            {data?.description ||
              "Empowering Your Words with Innovation"}
          </p>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

const CategoryLink = ({
  title,
  href,
  active,
  mobile = false,
  clickAction,
}: {
  title: string;
  href: string;
  active: boolean;
  mobile?: boolean;
  clickAction?: () => void;
}) => {
  return (
    <Link href={href} onClick={clickAction}>
      {mobile ? (
        <li className="rounded-lg text-foreground hover:bg-muted">
          <div className="flex items-center justify-between px-3 py-2 text-sm">
            <span>{title}</span>
            {active && <Check className="size-4" />}
          </div>
        </li>
      ) : (
        <li
          className={cn(
            "-mb-px border-b-2 border-transparent font-medium text-muted-foreground hover:text-foreground",
            {
              "border-purple-600 text-foreground dark:border-purple-400/80":
                active,
            },
          )}
        >
          <div className="px-3 pb-3">{title}</div>
        </li>
      )}
    </Link>
  );
};
