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
import { Check, Zap } from "lucide-react";

const features = [
  "10,000 credits added to your account instantly",
  "Credits never expire",
  "Access to all 6 platform templates",
  "Instant activation after payment",
];

function UpgradeCard({ handleOnClick }: { handleOnClick: () => void }) {
  return (
    <Card className="rounded-2xl border-primary/30 shadow-lg relative overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 inset-x-0 h-1 brand-gradient" />

      <CardHeader className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-2">
              One-Time Purchase
            </Badge>
            <CardTitle className="text-3xl font-bold">
              $10
              <span className="text-sm font-normal text-muted-foreground ml-1.5">
                one-time
              </span>
            </CardTitle>
            <CardDescription className="mt-1">
              10,000 additional credits added instantly
            </CardDescription>
          </div>
          <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Zap className="size-5 text-primary" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {features.map((text) => (
          <div key={text} className="flex items-center gap-2.5">
            <div className="size-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
              <Check className="size-3 text-green-500" />
            </div>
            <span className="text-sm text-foreground">{text}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter className="flex flex-col gap-3 border-t border-border pt-4">
        <Button
          onClick={handleOnClick}
          className="w-full h-11 rounded-xl brand-gradient text-white font-semibold hover:opacity-90"
        >
          <Zap className="size-4 mr-2" />
          Purchase Credits — $10
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          Secured by Stripe. No subscription required.
        </p>
      </CardFooter>
    </Card>
  );
}

export default UpgradeCard;
