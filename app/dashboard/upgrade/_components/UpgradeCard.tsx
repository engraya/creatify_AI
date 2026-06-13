import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Zap } from "lucide-react";

const features = [
  "10,000 credits added to your account instantly",
  "Credits never expire",
  "Access to all 6 platform templates",
  "Instant activation after payment",
];

function UpgradeCard({
  handleOnClick,
  isLoading,
}: {
  handleOnClick: () => void;
  isLoading: boolean;
}) {
  return (
    <Card className="relative overflow-hidden rounded-2xl border-primary/30 shadow-lg">
      {/* Top accent bar */}
      <div className="brand-gradient absolute inset-x-0 top-0 h-1" />

      <CardHeader className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <Badge className="mb-2 border-primary/20 bg-primary/10 text-primary">
              One-Time Purchase
            </Badge>
            <CardTitle className="text-3xl font-bold">
              $10
              <span className="ml-1.5 text-sm font-normal text-muted-foreground">
                one-time
              </span>
            </CardTitle>
            <CardDescription className="mt-1">
              10,000 additional credits added instantly
            </CardDescription>
          </div>
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
            <Zap className="size-5 text-primary" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {features.map((text) => (
          <div key={text} className="flex items-center gap-2.5">
            <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-green-500/15">
              <Check className="size-3 text-green-500" />
            </div>
            <span className="text-sm text-foreground">{text}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter className="flex flex-col gap-3 border-t border-border pt-4">
        <Button
          onClick={handleOnClick}
          disabled={isLoading}
          className="brand-gradient h-11 w-full rounded-xl font-semibold text-white hover:opacity-90 disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Processing…
            </>
          ) : (
            <>
              <Zap className="mr-2 size-4" />
              Purchase Credits — $10
            </>
          )}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Secured by Stripe. No subscription required.
        </p>
      </CardFooter>
    </Card>
  );
}

export default UpgradeCard;
