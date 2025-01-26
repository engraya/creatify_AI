import { Auth } from "@/components/auth";
import { SearchIcon } from "lucide-react";
import React from "react";
import { Categories } from "./categories";
const categories = [
  {
    name: "All Categories",
    value: "All",
  },
  {
    name: "Facebook",
    value: "Facebook",
  },
  {
    name: "Instagram",
    value: "Instagram",
  },
  {
    name: "Tiktok",
    value: "Tiktok",
  },
  {
    name: "Linkedin",
    value: "Linkedin",
  },
  {
    name: "Twitter",
    value: "Tweet",
  },
  {
    name: "Youtube",
    value: "Youtube",
  },

];

export const SearchDashboard = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="mx-5 py-2">
      <div className="flex  md:flew-row gap-2 mt-5 py-4 px-4 rounded">
        <div className="flex gap-2 items-center px-2 border rounded-xl w-full md:w-[25%]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search categories"
            className="bg-transparent outline-none text-black"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
        <Categories items={categories} />
        <div className="flex ml-auto">
          <Auth />
        </div>
      </div>
    </div>
  );
};