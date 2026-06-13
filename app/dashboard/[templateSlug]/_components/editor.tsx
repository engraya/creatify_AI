"use client";

import { Sparkles, Share2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/shared/copy-button";
import { useShareModal } from "@/components/modals/share-modal";

interface EditorProps {
  value: string;
  isLoading?: boolean;
}

export const Editor = ({ value, isLoading }: EditorProps) => {
  const { setShowShareModal, ShareModal } = useShareModal({ content: value });

  if (isLoading) {
    return (
      <Card className="rounded-2xl border-border">
        <CardHeader className="flex-row items-center justify-between pb-3">
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
          <p className="mt-4 animate-pulse text-center text-xs text-muted-foreground">
            AI is generating your content…
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!value) {
    return (
      <Card className="rounded-2xl border-dashed border-border">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-muted">
            <Sparkles className="size-5 text-muted-foreground" />
          </div>
          <p className="text-sm font-medium text-foreground">
            Ready to generate
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Fill in the form and click Generate Content
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <ShareModal />
      <Card className="rounded-2xl border-border">
        <CardHeader className="flex-row items-center justify-between pb-3">
          <CardTitle className="text-sm font-semibold">Generated Output</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-muted-foreground">
              {value.length.toLocaleString()} chars
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="size-8 rounded-lg"
              onClick={() => setShowShareModal(true)}
              type="button"
              title="Share content"
            >
              <Share2 className="size-3.5 text-muted-foreground" />
            </Button>
            <CopyButton value={value} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="max-h-[480px] overflow-y-auto rounded-xl bg-muted/40 p-4">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground">
              {value}
            </pre>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
