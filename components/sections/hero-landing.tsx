import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { SignedIn } from "@clerk/nextjs";

export default async function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
            "px-4",
          )}
          target="_blank"
        >
          <span className="mr-3">🎉</span>
          <span className="hidden md:flex">Trusted by 10,000+ users worldwide&nbsp;</span> ,
          Rated 5 Stars by Content Creators
        </Link>

        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
        Effortlessly Create Stunning Content with{" "}
          <span className="bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500 bg-clip-text font-extrabold text-transparent">
            Creatify_AI
          </span>
        </h1>

        <p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          Say goodbye to writer&lsquo;s block and hello to creativity. Creatify_AI empowers businesses, marketers, and creators with high-quality, SEO-friendly content in seconds
        </p>

        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <SignedIn>
            <Link
              href="/dashboard"
              prefetch={true}
              className={cn(
                buttonVariants({ size: "lg", rounded: "full" }),
                "gap-2",
              )}
            >
              <span>Go to Dashboard</span>
              <Icons.arrowRight className="size-4" />
            </Link>
          </SignedIn>

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
              "px-5",
            )}
          >
            <Icons.gitHub className="mr-2 size-4" />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              {/* <span className="font-semibold">{nFormatter(stars)}</span> */}
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
