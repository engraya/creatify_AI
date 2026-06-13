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
    <div className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 cursor-pointer hover:border-primary/40 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
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
            className="text-[11px] capitalize shrink-0"
          >
            {category}
          </Badge>
        )}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground">{name}</h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-1.5 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Generate <ArrowRight className="size-3" />
      </div>
    </div>
  );
}

export default TemplateCard;
