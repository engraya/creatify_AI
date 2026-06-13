"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CategoryProps } from "./categories";
import { cn } from "@/lib/utils";
import qs from "query-string";

export const CategoryItem = ({ name, value }: CategoryProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");
  const isSelected = currentCategory === value;

  const handleOnClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: { category: isSelected ? null : value },
      },
      { skipNull: true, skipEmptyString: true },
    );
    router.push(url);
  };

  return (
    <button
      onClick={handleOnClick}
      className={cn(
        "inline-flex cursor-pointer select-none items-center rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        isSelected
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {name}
    </button>
  );
};
