"use client";

import { useEffect, useState } from "react";
import { contentTemplates } from "@/lib/content-template";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import TemplateCard from "./TemplateCard";
export const TemplateList = ({ searchInput }: { searchInput: string }) => {
  const [templateList, setTemplateList] = useState(contentTemplates);

  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");

  useEffect(() => {
    if (searchCategory === "All") {
      setTemplateList(contentTemplates);
    } else if (searchCategory) {
      const filteredTemplates = contentTemplates.filter(
        (item) => item.category === searchCategory
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [searchCategory]);

  // Search Input
  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      const filteredTemplates = contentTemplates.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );

      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [searchInput]);

  return (
    <div className="mx-5 mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
      {templateList.map((template) => (
        <Link href={`/dashboard/${template.slug}`} key={template.id}>
        <TemplateCard key={template.id} name={template.name} icon={template.icon} desc={template.desc}/>
        </Link>
      ))}
    </div>
  );
};