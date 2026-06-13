import Link from "next/link";
import { features } from "@/config/landing";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export const metadata = {
  title: "Features — Creatify AI",
  description:
    "Everything you need to create platform-perfect social media content at scale — powered by Google Gemini AI.",
};

const featureDetails: Record<
  string,
  { benefit: string; platforms?: string[] }
> = {
  "AI-Powered Creativity": {
    benefit:
      "Generate unique, on-brand content in seconds. Our Gemini 1.5 Flash model understands context, audience, and tone so every output lands perfectly.",
    platforms: ["YouTube", "Facebook", "Instagram", "LinkedIn", "Twitter", "TikTok"],
  },
  "Multi-Format Support": {
    benefit:
      "One platform for everything: blog intros, social captions, ad copy, email campaigns, video scripts, and more — all from the same dashboard.",
  },
  "SEO Optimization": {
    benefit:
      "Content that ranks. Every piece is generated with keyword density, readability, and semantic structure baked in so you climb search results faster.",
  },
  "Customizable Tone": {
    benefit:
      "From formal and authoritative to playful and witty — dial in your brand voice once and every generation reflects it automatically.",
  },
  "Collaborative Workspaces": {
    benefit:
      "Invite teammates, share drafts, and iterate together in real time. Built for agencies and growing content teams.",
  },
  "Multi-Language Support": {
    benefit:
      "Reach global audiences in 30+ languages. Switch languages per generation without leaving the editor.",
  },
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="hero-dot-grid absolute inset-0 opacity-40 dark:opacity-20" />
          <div className="dark:bg-primary/8 absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-10 left-0 h-[300px] w-[400px] rounded-full bg-accent/15 blur-3xl dark:bg-accent/10" />
        </div>

        <div className="container flex max-w-4xl flex-col items-center gap-5 text-center">
          <div className="bg-primary/8 inline-flex items-center gap-2 rounded-full border border-primary/25 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm dark:border-primary/20 dark:bg-primary/10">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            Everything in one place
          </div>

          <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-[56px]">
            Powerful features for{" "}
            <span className="brand-gradient-text">modern creators.</span>
          </h1>

          <p className="max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            From AI-powered content generation to multi-platform publishing —
            Creatify AI gives you everything you need to create, optimise, and
            scale your content strategy.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/sign-up"
              className={cn(
                buttonVariants({ size: "lg", rounded: "full" }),
                "gap-2 shadow-md shadow-primary/20",
              )}
            >
              <span>Start for Free</span>
              <Icons.arrowRight className="size-4" />
            </Link>
            <Link
              href="/pricing"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg", rounded: "full" }),
                "gap-2",
              )}
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-muted/30 backdrop-blur-sm">
        <MaxWidthWrapper>
          <div className="grid grid-cols-2 gap-px py-0 sm:grid-cols-4">
            {[
              { label: "Active Creators", value: "10,000+" },
              { label: "Content Generated", value: "500K+" },
              { label: "Platforms Supported", value: "6" },
              { label: "Languages Available", value: "30+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 px-6 py-8 text-center"
              >
                <span className="brand-gradient-text font-urban text-3xl font-extrabold">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Feature cards */}
      <section className="py-20 sm:py-28">
        <MaxWidthWrapper>
          <HeaderSection
            label="Features"
            title="Discover all features."
            subtitle="A closer look at what makes Creatify AI the go-to tool for content creators."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = Icons[feature.icon || "nextjs"];
              const detail = featureDetails[feature.title];

              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg md:p-8"
                >
                  {/* Gradient glow blob */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-primary/50 to-transparent opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-15 dark:from-primary/30 dark:group-hover:opacity-20"
                  />
                  {/* Bottom accent line */}
                  <div
                    aria-hidden="true"
                    className="brand-gradient absolute bottom-0 left-0 h-px w-0 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"
                  />

                  <div className="relative flex flex-col gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-background shadow-sm ring-1 ring-border/50 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-md">
                      <Icon className="size-6" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {detail?.benefit ?? feature.description}
                      </p>
                    </div>

                    {detail?.platforms && (
                      <div className="flex flex-wrap gap-1.5">
                        {detail.platforms.map((p) => (
                          <span
                            key={p}
                            className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA */}
      <section className="py-16">
        <MaxWidthWrapper>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-10 text-center shadow-sm">
            <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-20 size-[300px] rounded-full bg-primary/10 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-20 size-[300px] rounded-full bg-accent/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-5">
              <h2 className="text-balance font-heading text-3xl font-bold md:text-4xl">
                Try every feature{" "}
                <span className="brand-gradient-text">for free.</span>
              </h2>
              <p className="max-w-lg text-balance text-base text-muted-foreground">
                No credit card required. 10,000 free credits on sign-up — enough
                to explore every template and platform.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/sign-up"
                  className={cn(
                    buttonVariants({ size: "lg", rounded: "full" }),
                    "gap-2 shadow-md shadow-primary/20",
                  )}
                >
                  <span>Get Started Free</span>
                  <Icons.arrowRight className="size-4" />
                </Link>
                <Link
                  href="/pricing"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg", rounded: "full" }),
                    "gap-2",
                  )}
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
