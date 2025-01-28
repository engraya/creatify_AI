"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CategoryProps } from "./categories";
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
        query: {
          category: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  return (
    <button
      onClick={handleOnClick}
      className={`group relative overflow-hidden rounded-lg border-2 px-2 py-1 ${
        isSelected ? "border-emerald-300 text-gray-100" : "border-transparent text-gray-700"
      } ${
        isSelected
          ? "bg-gradient-to-r from-green-400 to-blue-100 text-white group-hover:bg-transparent "
          : "bg-white hover:bg-emerald-500"
      } transition-all duration-300`}
    >
      <span
        className={`absolute inset-0${
          isSelected ? "-translate-x-full" : "translate-x-0"
        } transition duration-300 group-hover:translate-x-0`}
      ></span>
      <span
        className={`relative z-10 text-sm ${
          isSelected ? "group-hover:text-white" : "group-hover:text-white"
        }`}
      >
        {name}
      </span>
    </button>
  );
};
