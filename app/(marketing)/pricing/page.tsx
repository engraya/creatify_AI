import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { PricingComparison } from "@/components/pricing/pricing-comparison";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { Icons } from "@/components/shared/icons";

export const metadata = {
  title: "Pricing — Creatify AI",
  description:
    "Simple, transparent pricing. Start free, upgrade when you're ready.",
};

export default function PricingPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="hero-dot-grid absolute inset-0 opacity-40 dark:opacity-20" />
          <div className="dark:bg-primary/8 absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-10 right-0 h-[300px] w-[400px] rounded-full bg-accent/15 blur-3xl dark:bg-accent/10" />
        </div>

        <div className="container flex max-w-4xl flex-col items-center gap-5 text-center">
          <div className="bg-primary/8 inline-flex items-center gap-2 rounded-full border border-primary/25 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm dark:border-primary/20 dark:bg-primary/10">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            Simple, transparent pricing
          </div>

          <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-[56px]">
            Start free.{" "}
            <span className="brand-gradient-text">Scale when ready.</span>
          </h1>

          <p className="max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            No hidden fees. No credit card required to get started. Upgrade or
            downgrade any time.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <PricingCards />

      {/* Plan comparison table */}
      <PricingComparison />

      {/* FAQ */}
      <div className="py-8">
        <PricingFaq />
      </div>

      {/* CTA strip */}
      <section className="py-16">
        <MaxWidthWrapper>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-10 text-center shadow-sm">
            {/* Glow blobs */}
            <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-20 size-[300px] rounded-full bg-primary/10 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-20 size-[300px] rounded-full bg-accent/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-5">
              <h2 className="text-balance font-heading text-3xl font-bold md:text-4xl">
                Ready to create better content,{" "}
                <span className="brand-gradient-text">faster?</span>
              </h2>
              <p className="max-w-lg text-balance text-base text-muted-foreground">
                Join 10,000+ creators who use Creatify AI to generate
                platform-perfect content every day.
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
                  href="/features"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg", rounded: "full" }),
                    "gap-2",
                  )}
                >
                  View Features
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
