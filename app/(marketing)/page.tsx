import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { infos } from "@/config/landing";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import InfoLanding from "@/components/sections/info-landing";
import PreviewLanding from "@/components/sections/preview-landing";
import Testimonials from "@/components/sections/testimonials";
import BentoGrid from "@/components/sections/bentogrid";
import { PricingFaq } from "@/components/pricing/pricing-faq";

function StatsBar() {
  const stats = [
    { icon: "user", label: "Active Creators", value: "10,000+" },
    { icon: "star", label: "Average Rating", value: "4.9 / 5" },
    { icon: "laptop", label: "Platforms Supported", value: "6" },
    { icon: "copy", label: "Free to Start", value: "10K credits" },
  ] as const;

  return (
    <section className="border-y border-border bg-muted/30 backdrop-blur-sm">
      <MaxWidthWrapper>
        <div className="grid grid-cols-2 gap-px sm:grid-cols-4">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 px-6 py-7 text-center"
            >
              <span className="brand-gradient-text font-urban text-2xl font-extrabold sm:text-3xl">
                {value}
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-16">
      <MaxWidthWrapper>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-10 text-center shadow-sm">
          <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-20 size-[300px] rounded-full bg-primary/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-20 size-[300px] rounded-full bg-accent/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-5">
            <h2 className="text-balance font-heading text-3xl font-bold md:text-4xl">
              Start creating better content{" "}
              <span className="brand-gradient-text">today.</span>
            </h2>
            <p className="max-w-lg text-balance text-base text-muted-foreground">
              Join thousands of creators who use Creatify AI to produce
              platform-perfect content in seconds — no writing experience needed.
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
  );
}

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <StatsBar />
      <PreviewLanding />
      <InfoLanding data={infos[0]} reverse={true} />
      <Features />
      <BentoGrid />
      <Testimonials />
      <CtaSection />
      <PricingFaq />
    </>
  );
}
