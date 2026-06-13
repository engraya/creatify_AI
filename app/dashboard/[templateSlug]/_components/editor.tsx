"use client";

import { Sparkles } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CopyButton } from "@/components/shared/copy-button";

interface EditorProps {
  value: string;
  isLoading?: boolean;
}

export const Editor = ({ value, isLoading }: EditorProps) => {
  if (isLoading) {
    return (
      <Card className="rounded-2xl border-border">
        <CardHeader className="pb-3 flex-row items-center justify-between">
          <CardTitle className="text-sm font-semibold">
            Generated Output
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2.5">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center animate-pulse">
            AI is generating your content…
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!value) {
    return (
      <Card className="rounded-2xl border-border border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="size-12 rounded-2xl bg-muted flex items-center justify-center mb-3">
            <Sparkles className="size-5 text-muted-foreground" />
          </div>
          <p className="text-sm font-medium text-foreground">
            Ready to generate
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Fill in the form and click Generate Content
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl border-border">
      <CardHeader className="pb-3 flex-row items-center justify-between">
        <CardTitle className="text-sm font-semibold">Generated Output</CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-muted-foreground">
            {value.length.toLocaleString()} chars
          </span>
          <CopyButton value={value} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-xl bg-muted/40 p-4 max-h-[480px] overflow-y-auto">
          <pre className="whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed">
            {value}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};
