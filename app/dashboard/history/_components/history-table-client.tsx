"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { HistoryRowActions } from "@/app/dashboard/_components/history-row-actions";

const ITEMS_PER_PAGE = 10;

type HistoryItem = {
  id: string;
  templateUsed: string;
  title: string | null;
  description: string | null;
  createdAt: Date;
};

export function HistoryTableClient({
  initialData,
}: {
  initialData: HistoryItem[];
}) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(initialData.length / ITEMS_PER_PAGE);
  const paginatedData = initialData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[160px]">Template</TableHead>
            <TableHead>Content</TableHead>
            <TableHead className="w-[90px]">Credits</TableHead>
            <TableHead className="w-[110px]">Date</TableHead>
            <TableHead className="w-[60px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Badge variant="secondary" className="text-[11px] capitalize">
                  {item.templateUsed}
                </Badge>
              </TableCell>
              <TableCell>
                <p className="text-sm font-medium text-foreground truncate max-w-[200px]">
                  {item.title ?? "—"}
                </p>
                <p className="text-xs text-muted-foreground truncate max-w-[300px] mt-0.5">
                  {item.description
                    ? item.description.length > 120
                      ? `${item.description.slice(0, 120)}…`
                      : item.description
                    : "—"}
                </p>
              </TableCell>
              <TableCell className="text-xs text-muted-foreground">
                {item.description?.length.toLocaleString() ?? 0}
              </TableCell>
              <TableCell className="whitespace-nowrap text-xs text-muted-foreground">
                {format(item.createdAt, "MMM d, yyyy")}
              </TableCell>
              <TableCell className="text-right">
                <HistoryRowActions
                  id={item.id}
                  description={item.description ?? ""}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-border">
          <span className="text-xs text-muted-foreground">
            Showing {(page - 1) * ITEMS_PER_PAGE + 1}–
            {Math.min(page * ITEMS_PER_PAGE, initialData.length)} of{" "}
            {initialData.length}
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-lg text-xs h-7"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-lg text-xs h-7"
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
