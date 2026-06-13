import Link from "next/link";
import { features } from "@/config/landing";
import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function Features() {
  return (
    <section>
      <div className="pb-6 pt-28">
        <MaxWidthWrapper>
          <HeaderSection
            label="Features"
            title="Discover all features."
            subtitle="Everything you need to create platform-perfect social media content at scale."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = Icons[feature.icon || "nextjs"];
              return (
                <div
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 md:p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                  key={feature.title}
                >
                  {/* Gradient glow blob */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-primary/50 to-transparent opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-15 dark:from-primary/30 dark:group-hover:opacity-20"
                  />
                  {/* Bottom accent line */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-0 brand-gradient opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"
                  />

                  <div className="relative">
                    <div className="flex justify-between">
                      <div className="relative flex size-12 items-center justify-center rounded-2xl border border-border bg-background shadow-sm ring-1 ring-border/50 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-md">
                        <Icon className="size-6" />
                      </div>
                      <div className="flex items-center justify-center text-sm font-semibold text-foreground max-w-[140px] text-center">
                        {feature.title}
                      </div>
                    </div>

                    <p className="mt-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="-mb-5 flex gap-3 border-t border-border py-4 md:-mb-7">
                      <Button
                        variant="secondary"
                        size="sm"
                        rounded="xl"
                        className="px-4 transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                      >
                        <Link href="/" className="flex items-center gap-2">
                          <span>Visit the site</span>
                          <Icons.arrowUpRight className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
