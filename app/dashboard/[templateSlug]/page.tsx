"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contentTemplates } from "@/lib/content-template";
import { Loader } from "lucide-react";
import { useState } from "react";
import { Editor } from "./_components/editor";
import { chatSession } from "@/lib/gemini-ai";
import axios from "axios";
import Link from "next/link";
import { createContentAction } from "@/actions/save-content-action";

interface templateSlugProps {
  templateSlug: string;
}

const TemplatePage = ({ params }: { params: templateSlugProps }) => {
  const [isLoading, setisLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );

  const generateAIContent = async (formData: FormData) => {
    setisLoading(true);
    try {
      let dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt;

      const result = await chatSession.sendMessage(finalAIPrompt);
      setAIOutput(result?.response?.text());
      console.log("Response from GEMINI", result)

      const response = await createContentAction({
        title: dataSet.title,
        description: result?.response?.text(),
        templateUsed: selectedTemplate?.name,
      });
      console.log("response: " + response);
    } catch (error) {
      console.log("Generating Content Error",error);
      setisLoading(false);
    }
  };
  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData);
  };
  return (
    <div className="mx-5 py-2">
      <Link href="/dashboard">
      <div className="mt-3 w-10 cursor-pointer rounded-lg bg-slate-300 p-2">
      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
      </div>
      </Link>
      <div className="mt-5 rounded bg-white px-4 py-6">
        <h2 className="font-medium">{selectedTemplate?.name}</h2>
      </div>
      <form action={onSubmit}>
        <div className="mt-3 flex flex-col gap-4 bg-white p-5">
          {selectedTemplate?.form?.map((form) => (
            <div key={selectedTemplate.id}>
              <label>{form.label}</label>
              {form.field === "input" ? (
                <div className="mt-3">
                  <Input name="title"></Input>
                </div>
              ) : (
                <div className="mt-3">
                  <Textarea name="description" />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button className="mt-5" type="submit">
          {isLoading ? (
            <Loader className="animate-spin"></Loader>
          ) : (
            "Generate Content"
          )}
        </Button>
      </form>
      <div className="my-10">
        <Editor value={isLoading ? "Generating Content, Please wait a moment!!!!!🤸🤸🤸🤸🤸🤸🤸..." : aiOutput} />
      </div>
    </div>
  );
};

export default TemplatePage;