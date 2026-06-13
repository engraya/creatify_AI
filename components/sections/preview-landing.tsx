import Image from "next/image";
import { landingImage } from "@/public/_static/landing";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16">
      <MaxWidthWrapper>
        {/* Outer glow ring */}
        <div className="relative rounded-2xl p-px brand-gradient shadow-2xl shadow-primary/10">
          <div className="rounded-2xl bg-muted/30 p-3 ring-1 ring-inset ring-white/10 backdrop-blur-sm dark:bg-background/60">
            {/* Browser chrome mock */}
            <div className="overflow-hidden rounded-xl border border-border bg-muted">
              {/* URL bar */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2.5">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-400/70" />
                  <div className="size-3 rounded-full bg-yellow-400/70" />
                  <div className="size-3 rounded-full bg-green-400/70" />
                </div>
                <div className="flex h-6 flex-1 items-center rounded-md border border-border bg-background px-3">
                  <span className="text-[11px] text-muted-foreground">
                    creatify-ai.vercel.app/dashboard
                  </span>
                </div>
              </div>
              {/* Screenshot */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  className="size-full object-cover object-top"
                  src={landingImage}
                  alt="Creatify AI dashboard preview"
                  width={2000}
                  height={1000}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
