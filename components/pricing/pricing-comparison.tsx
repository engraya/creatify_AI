import { comparePlans, plansColumns } from "@/config/subscriptions";
import { Icons } from "@/components/shared/icons";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { cn } from "@/lib/utils";

type CellValue = boolean | null | string | undefined;

function Cell({ value }: { value: CellValue }) {
  if (value === true) {
    return <Icons.check className="mx-auto size-5 text-purple-500" />;
  }
  if (value === false || value === null || value === undefined) {
    return (
      <Icons.close className="mx-auto size-5 text-muted-foreground/40" />
    );
  }
  return (
    <span className="text-sm font-medium text-foreground">{value}</span>
  );
}

const planLabels: Record<string, string> = {
  starter: "Starter",
  pro: "Pro",
  business: "Business",
};

export function PricingComparison() {
  const displayedColumns = plansColumns.filter((c) => c !== "enterprise");

  return (
    <MaxWidthWrapper>
      <div className="py-16">
        <HeaderSection
          label="Compare plans"
          title="Everything you get, side by side."
          subtitle="Pick the plan that fits your workflow. Upgrade or downgrade any time."
        />

        <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="w-1/2 py-4 pl-6 pr-4 text-left font-semibold text-foreground">
                  Feature
                </th>
                {displayedColumns.map((col) => (
                  <th
                    key={col}
                    className={cn(
                      "p-4 text-center font-semibold",
                      col === "pro"
                        ? "text-purple-500"
                        : "text-foreground",
                    )}
                  >
                    {planLabels[col]}
                    {col === "pro" && (
                      <span className="ml-1.5 inline-flex items-center rounded-full bg-purple-500/10 px-2 py-0.5 text-[10px] font-medium text-purple-500">
                        Popular
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {comparePlans.map((row) => (
                <tr
                  key={row.feature}
                  className="transition-colors hover:bg-muted/20"
                >
                  <td className="py-3.5 pl-6 pr-4">
                    <span className="flex items-center gap-1.5 text-sm text-foreground/80">
                      {row.feature}
                      {row.tooltip && (
                        <span
                          title={row.tooltip}
                          className="cursor-help text-xs text-muted-foreground"
                        >
                          ⓘ
                        </span>
                      )}
                    </span>
                  </td>
                  {displayedColumns.map((col) => (
                    <td key={col} className="px-4 py-3.5 text-center">
                      <Cell value={row[col as keyof typeof row] as CellValue} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
