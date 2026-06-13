import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { contentTemplates } from "@/lib/content-template";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContentDetailClient } from "./_components/content-detail-client";

interface Props {
  params: { id: string };
}

const ContentDetailPage = async ({ params }: Props) => {
  const user = await currentUser();
  if (!user?.id) return null;

  const content = await db.aIOutput.findFirst({
    where: { id: params.id, userId: user.id },
  });

  if (!content) notFound();

  const template = contentTemplates.find((t) => t.slug === content.templateUsed);

  return (
    <div className="p-5">
      <div className="mb-6">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="gap-1.5 rounded-xl text-muted-foreground"
        >
          <Link href="/dashboard/history">
            <ArrowLeft className="size-3.5" />
            Back to History
          </Link>
        </Button>
      </div>

      <div className="mb-4">
        <div className="mb-1.5">
          <Badge variant="secondary" className="text-[11px] capitalize">
            {template?.category ?? content.templateUsed}
          </Badge>
        </div>
        <h1 className="text-xl font-semibold text-foreground">
          {content.title ?? "Untitled"}
        </h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {format(content.createdAt, "MMM d, yyyy 'at' h:mm a")}
        </p>
      </div>

      <ContentDetailClient
        id={content.id}
        description={content.description}
        title={content.title ?? undefined}
      />
    </div>
  );
};

export default ContentDetailPage;
