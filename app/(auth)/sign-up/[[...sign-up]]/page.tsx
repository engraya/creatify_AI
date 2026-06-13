import { Metadata } from "next";
import Image from "next/image";
import { SignUp } from "@clerk/nextjs";
import { logoIcon } from "@/public/_static";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign Up — Creatify AI",
  description: "Create your free Creatify AI account",
};

const platforms = [
  "Facebook post descriptions",
  "YouTube video ideas",
  "Instagram hashtags",
  "TikTok hashtags",
  "LinkedIn posts",
  "Twitter / X posts",
];

export default function SignUpPage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      {/* Left brand panel — hidden on mobile */}
      <div className="hidden lg:flex flex-col justify-between p-12 brand-gradient text-white">
        <div className="flex items-center gap-2.5">
          <Image
            src={logoIcon}
            height={36}
            width={36}
            alt="Creatify AI"
            className="rounded-lg"
          />
          <span className="font-urban text-xl font-extrabold">Creatify_AI</span>
        </div>

        <div className="space-y-2">
          <blockquote className="mb-8">
            <p className="text-lg font-medium leading-relaxed">
              &ldquo;Start generating platform-perfect social media content in
              under 60 seconds. Free to try.&rdquo;
            </p>
          </blockquote>
          {platforms.map((p) => (
            <div key={p} className="flex items-center gap-2.5 text-sm">
              <div className="size-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Check className="size-3" />
              </div>
              {p}
            </div>
          ))}
        </div>

        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Creatify AI. All rights reserved.
        </p>
      </div>

      {/* Right: Clerk form */}
      <div className="flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-sm space-y-6">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center">
            <Image
              src={logoIcon}
              height={40}
              width={40}
              alt="Creatify AI"
              className="rounded-xl"
            />
          </div>
          <SignUp />
        </div>
      </div>
    </div>
  );
}
