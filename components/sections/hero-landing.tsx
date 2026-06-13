import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function HeroLanding() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Background decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* Dot grid */}
        <div className="hero-dot-grid absolute inset-0 opacity-40 dark:opacity-20" />
        {/* Primary glow — top center */}
        <div className="dark:bg-primary/8 absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/10 blur-3xl" />
        {/* Accent glow — bottom right */}
        <div className="absolute -bottom-20 right-0 h-[400px] w-[500px] rounded-full bg-accent/15 blur-3xl dark:bg-accent/10" />
        {/* Secondary accent — top left */}
        <div className="bg-primary/8 absolute -left-20 top-1/4 h-[300px] w-[400px] rounded-full blur-3xl dark:bg-primary/5" />
      </div>

      <div className="container flex max-w-5xl flex-col items-center gap-6 text-center">
        {/* Animated badge */}
        <div className="bg-primary/8 inline-flex items-center gap-2 rounded-full border border-primary/25 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm dark:border-primary/20 dark:bg-primary/10">
          <span className="size-1.5 animate-pulse rounded-full bg-primary" />
          AI-Powered Social Media Content Generation
        </div>

        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          Effortlessly Create Stunning Content with{" "}
          <span className="brand-gradient-text font-extrabold">
            {siteConfig.name}
          </span>
        </h1>

        <p className="max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
          Say goodbye to writer&apos;s block. Creatify_AI generates
          platform-perfect content for Facebook, Instagram, TikTok, LinkedIn,
          YouTube, and Twitter in seconds.
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <SignedIn>
            <Link
              href="/dashboard"
              prefetch={true}
              className={cn(
                buttonVariants({ size: "lg", rounded: "full" }),
                "gap-2 shadow-md shadow-primary/20",
              )}
            >
              <span>Go to Dashboard</span>
              <Icons.arrowRight className="size-4" />
            </Link>
          </SignedIn>
          <SignedOut>
            <Link
              href="/sign-in"
              prefetch={true}
              className={cn(
                buttonVariants({ size: "lg", rounded: "full" }),
                "gap-2 shadow-md shadow-primary/20",
              )}
            >
              <span>Get Started Free</span>
              <Icons.arrowRight className="size-4" />
            </Link>
          </SignedOut>

          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                rounded: "full",
              }),
              "gap-2 px-5 backdrop-blur-sm",
            )}
          >
            <Icons.gitHub className="size-4" />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub
            </p>
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="text-yellow-500">★</span> 4.9/5 from 200+ reviews
          </span>
          <span className="hidden text-border sm:block">•</span>
          <span className="hidden sm:block">10,000+ creators</span>
          <span className="hidden text-border sm:block">•</span>
          <span className="hidden sm:block">6 platform templates</span>
          <span className="hidden text-border sm:block">•</span>
          <span className="hidden sm:block">Free to start</span>
        </div>
      </div>
    </section>
  );
}
