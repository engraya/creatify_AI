"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Copy, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { deleteHistoryItem } from "@/app/dashboard/history/_actions/delete-history-action";

export function HistoryRowActions({
  id,
  description,
}: {
  id: string;
  description: string;
}) {
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
          className="gap-2 cursor-pointer"
          onClick={handleCopy}
        >
          <Copy className="size-3.5" />
          Copy content
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2 cursor-pointer text-destructive focus:text-destructive"
          onClick={handleDelete}
        >
          <Trash2 className="size-3.5" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
