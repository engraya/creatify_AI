"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Trash2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CopyButton } from "@/components/shared/copy-button";
import { useShareModal } from "@/components/modals/share-modal";
import { deleteHistoryItem } from "@/app/dashboard/history/_actions/delete-history-action";

interface ContentDetailClientProps {
  id: string;
  description: string;
  title?: string;
}

export function ContentDetailClient({
  id,
  description,
  title,
}: ContentDetailClientProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const { setShowShareModal, ShareModal } = useShareModal({
    content: description,
    title,
  });

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteHistoryItem(id);
      toast.success("Content deleted");
      router.push("/dashboard/history");
    } catch {
      toast.error("Failed to delete content");
      setIsDeleting(false);
    }
  };

  return (
    <>
      <ShareModal />
      <Card className="rounded-2xl border-border">
        <CardHeader className="flex-row items-center justify-between pb-3">
          <CardTitle className="text-sm font-semibold">
            Generated Output
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-muted-foreground">
              {description.length.toLocaleString()} chars
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
            <CopyButton value={description} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="max-h-[600px] overflow-y-auto rounded-xl bg-muted/40 p-4">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground">
              {description}
            </pre>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-xl border-destructive/40 text-destructive hover:bg-destructive/5 hover:text-destructive"
              type="button"
            >
              <Trash2 className="size-3.5" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this content?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete &ldquo;{title ?? "this content"}&rdquo;. This
                action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                disabled={isDeleting}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                {isDeleting ? "Deleting…" : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}
