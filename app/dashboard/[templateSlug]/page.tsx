"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contentTemplates } from "@/lib/content-template";
import { Loader, AlertCircle, ArrowLeft, Sparkles } from "lucide-react";
import { useState } from "react";
import { Editor } from "./_components/editor";
import { generateContentAction } from "@/actions/generate-content-action";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: { templateSlug: string };
}

const TemplatePage = ({ params }: PageProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [charCount, setCharCount] = useState(0);

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug,
  );

  const onSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setError("");
    setAiOutput("");

    const niche = (formData.get("niche") as string)?.trim();
    const outline = (formData.get("outline") as string)?.trim();

    if (!niche) {
      setError("Please fill in the required field.");
      setIsLoading(false);
      return;
    }

    const result = await generateContentAction({
      templateSlug: params.templateSlug,
      niche,
      outline: outline || undefined,
    });

    if (result.success) {
      setAiOutput(result.content);
    } else {
      setError(result.error);
    }

    setIsLoading(false);
  };

  if (!selectedTemplate) {
    return (
      <div className="p-5 text-center">
        <p className="text-muted-foreground">Template not found.</p>
        <Link
          href="/dashboard"
          className="text-primary underline text-sm mt-2 inline-block"
        >
          Go back to dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="p-5">
      {/* Page header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/dashboard">
          <Button
            variant="ghost"
            size="icon"
            className="size-9 rounded-xl shrink-0"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="size-4" />
          </Button>
        </Link>
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Image
              src={selectedTemplate.icon}
              width={20}
              height={20}
              alt={selectedTemplate.name}
              className="object-contain"
            />
          </div>
          <div className="min-w-0">
            <h1 className="text-sm font-semibold text-foreground truncate">
              {selectedTemplate.name}
            </h1>
            <p className="text-xs text-muted-foreground truncate">
              {selectedTemplate.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        {/* LEFT: Form */}
        <Card className="rounded-2xl border-border shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold">Configure</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={onSubmit} className="space-y-4">
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
                      name={field.name}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      required={field.required}
                      className="rounded-xl"
                    />
                  ) : (
                    <div className="space-y-1">
                      <Textarea
                        id={field.name}
                        name={field.name}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        rows={4}
                        maxLength={500}
                        className="resize-none rounded-xl text-sm"
                        onChange={(e) => setCharCount(e.target.value.length)}
                      />
                      <p className="text-right text-[11px] text-muted-foreground">
                        {charCount}/500
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
                type="submit"
                disabled={isLoading}
                className="w-full h-10 rounded-xl brand-gradient text-white font-semibold hover:opacity-90"
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
            </form>
          </CardContent>
        </Card>

        {/* RIGHT: Output */}
        <Editor value={aiOutput} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default TemplatePage;
