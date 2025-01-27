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
      <button onClick={handleOnClick} className="px-4 py-2 bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500 text-gray-100 font-semibold rounded-lg transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
      {name}
      </button>
  );
};