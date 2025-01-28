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
<div className="mx-5 flex flex-col gap-3 py-4">
<div className="relative">
  <input 
     type="text"
     onChange={(e) => onSearchInput(e.target.value)}
     className="h-12 w-full rounded-full border p-4 shadow dark:border-gray-700 dark:bg-gray-200 dark:text-gray-800"
     placeholder="Search Categories"
      />
  <svg 
    className="absolute right-3 top-3.5 size-5 fill-current text-teal-400 dark:text-teal-300" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlnsXlink="http://www.w3.org/1999/xlink" 
    version="1.1" 
    x="0px" 
    y="0px" 
    viewBox="0 0 56.966 56.966" 
    xmlSpace="preserve"
  >
    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"></path>
  </svg>
</div>
<div className="flex items-center justify-center gap-2">
      <Categories items={categories} />
    </div>
</div>

  );
};