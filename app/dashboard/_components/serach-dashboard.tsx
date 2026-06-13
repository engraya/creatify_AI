import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Categories } from "./categories";

const categories = [
  { name: "All", value: "All" },
  { name: "Facebook", value: "Facebook" },
  { name: "Instagram", value: "Instagram" },
  { name: "TikTok", value: "Tiktok" },
  { name: "LinkedIn", value: "Linkedin" },
  { name: "Twitter / X", value: "Tweet" },
  { name: "YouTube", value: "Youtube" },
];

export const SearchDashboard = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="mx-5 flex flex-col gap-3 py-4">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          onChange={(e) => onSearchInput(e.target.value)}
          className="h-10 rounded-xl border-border bg-background pl-9"
          placeholder="Search templates…"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Categories items={categories} />
      </div>
    </div>
  );
};
