"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Copy, Trash2, Share2 } from "lucide-react";
import { toast } from "sonner";
import { deleteHistoryItem } from "@/app/dashboard/history/_actions/delete-history-action";
import { useShareModal } from "@/components/modals/share-modal";

export function HistoryRowActions({
  id,
  description,
  title,
}: {
  id: string;
  description: string;
  title?: string;
}) {
  const { setShowShareModal, ShareModal } = useShareModal({ content: description, title });

  const handleCopy = async () => {
    await navigator.clipboard.writeText(description);
    toast.success("Content copied!");
  };

  const handleDelete = async () => {
    try {
      await deleteHistoryItem(id);
      toast.success("Item deleted");
    } catch {
      toast.error("Failed to delete item");
    }
  };

  return (
    <>
      <ShareModal />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-lg"
            type="button"
          >
            <MoreHorizontal className="size-4" />
            <span className="sr-only">Open actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem
            className="cursor-pointer gap-2"
            onClick={handleCopy}
          >
            <Copy className="size-3.5" />
            Copy content
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer gap-2"
            onClick={() => setShowShareModal(true)}
          >
            <Share2 className="size-3.5" />
            Share
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer gap-2 text-destructive focus:text-destructive"
            onClick={handleDelete}
          >
            <Trash2 className="size-3.5" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
