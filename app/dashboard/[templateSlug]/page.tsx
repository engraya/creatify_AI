"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contentTemplates } from "@/lib/content-template";
import { Loader, AlertCircle, ArrowLeft, Sparkles } from "lucide-react";
import { Editor } from "./_components/editor";
import { generateContentAction } from "@/actions/generate-content-action";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";

interface PageProps {
  params: { templateSlug: string };
}

const TemplatePage = ({ params }: PageProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState("");
  const [error, setError] = useState("");
  const [niche, setNiche] = useState("");
  const [outline, setOutline] = useState("");

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug,
  );

  const handleGenerate = async () => {
    if (!niche.trim()) {
      setError("Please fill in the required field.");
      return;
    }

    flushSync(() => {
      setIsLoading(true);
      setError("");
      setAiOutput("");
    });

    const toastId = toast.loading("Generating content…");

    const result = await generateContentAction({
      templateSlug: params.templateSlug,
      niche: niche.trim(),
      outline: outline.trim() || undefined,
    });

    if (result.success) {
      setAiOutput(result.content);
      toast.success("Content generated!", { id: toastId });
    } else {
      setError(result.error);
      toast.error(result.error, { id: toastId });
    }

    setIsLoading(false);
  };

  if (!selectedTemplate) {
    return (
      <div className="p-5 text-center">
        <p className="text-muted-foreground">Template not found.</p>
        <Link
          href="/dashboard"
          className="mt-2 inline-block text-sm text-primary underline"
        >
          Go back to dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="p-5">
      {/* Page header */}
      <div className="mb-6 flex items-center gap-3">
        <Link href="/dashboard">
          <Button
            variant="ghost"
            size="icon"
            className="size-9 shrink-0 rounded-xl"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="size-4" />
          </Button>
        </Link>
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Image
              src={selectedTemplate.icon}
              width={20}
              height={20}
              alt={selectedTemplate.name}
              className="object-contain"
            />
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold text-foreground">
              {selectedTemplate.name}
            </h1>
            <p className="truncate text-xs text-muted-foreground">
              {selectedTemplate.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
        {/* LEFT: Form */}
        <Card className="rounded-2xl border-border shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold">Configure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedTemplate.form.map((field) => (
              <div key={field.name} className="space-y-1.5">
                <Label
                  htmlFor={field.name}
                  className="text-xs font-medium text-foreground"
                >
                  {field.label}
                  {field.required && (
                    <span className="ml-1 text-destructive">*</span>
                  )}
                </Label>
                {field.field === "input" ? (
                  <Input
                    id={field.name}
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    className="rounded-xl"
                    disabled={isLoading}
                  />
                ) : (
                  <div className="space-y-1">
                    <Textarea
                      id={field.name}
                      value={outline}
                      onChange={(e) => setOutline(e.target.value)}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      rows={4}
                      maxLength={500}
                      className="resize-none rounded-xl text-sm"
                      disabled={isLoading}
                    />
                    <p className="text-right text-[11px] text-muted-foreground">
                      {outline.length}/500
                    </p>
                  </div>
                )}
              </div>
            ))}

            {error && (
              <div className="flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                <AlertCircle className="size-4 shrink-0" />
                {error}
              </div>
            )}

            <Button
              type="button"
              onClick={handleGenerate}
              disabled={isLoading}
              className="brand-gradient h-10 w-full rounded-xl font-semibold text-white"
            >
              {isLoading ? (
                <>
                  <Loader className="mr-2 size-4 animate-spin" />
                  Generating…
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 size-4" />
                  Generate Content
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* RIGHT: Output */}
        <Editor value={aiOutput} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default TemplatePage;
