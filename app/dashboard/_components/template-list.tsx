"use client";

import { useEffect, useState } from "react";
import { contentTemplates } from "@/lib/content-template";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import TemplateCard from "./TemplateCard";
import { EmptyState } from "@/components/shared/empty-state";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TemplateList = ({ searchInput }: { searchInput: string }) => {
  const [templateList, setTemplateList] = useState(contentTemplates);

  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");

  useEffect(() => {
    if (searchCategory === "All" || !searchCategory) {
      setTemplateList(contentTemplates);
    } else {
      setTemplateList(
        contentTemplates.filter((item) => item.category === searchCategory),
      );
    }
  }, [searchCategory]);

  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      setTemplateList(
        contentTemplates.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase()),
        ),
      );
    } else if (!searchInput) {
      setTemplateList(contentTemplates);
    }
  }, [searchInput]);

  if (templateList.length === 0) {
    return (
      <div className="mx-5 mt-5">
        <EmptyState
          icon={<Layers className="size-6 text-muted-foreground" />}
          title="No templates found"
          description="Try adjusting your search or clearing the filters."
          action={
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTemplateList(contentTemplates)}
            >
              Clear search
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div className="mx-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {templateList.map((template) => (
        <Link href={`/dashboard/${template.slug}`} key={template.id}>
          <TemplateCard
            name={template.name}
            icon={template.icon}
            desc={template.desc}
            category={template.category}
          />
        </Link>
      ))}
    </div>
  );
};
