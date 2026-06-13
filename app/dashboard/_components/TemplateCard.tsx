import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

type TemplateCardProps = {
  name: string;
  icon: StaticImageData;
  desc: string;
  category?: string;
};

function TemplateCard({ name, icon, desc, category }: TemplateCardProps) {
  return (
    <div className="group relative flex cursor-pointer flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Image
            src={icon}
            width={22}
            height={22}
            alt={name}
            className="object-contain"
          />
        </div>
        {category && (
          <Badge
            variant="secondary"
            className="shrink-0 text-[11px] capitalize"
          >
            {category}
          </Badge>
        )}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground">{name}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {desc}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Generate <ArrowRight className="size-3" />
      </div>
    </div>
  );
}

export default TemplateCard;
