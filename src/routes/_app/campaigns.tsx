import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { MOVEMENTS, OPPORTUNITIES } from "@/lib/data";
import { useRadarStore } from "@/lib/store";
import { formatRelative } from "@/lib/utils";

export const Route = createFileRoute("/_app/campaigns")({
  component: CampaignsPage,
});

export function CampaignsPage() {
  const campaigns = useRadarStore((s) => s.campaigns);
  return (
    <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8 lg:py-8">
      <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">Studio</p>
      <h1 className="mt-1 font-display text-4xl tracking-tight">Campaigns</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Strategy before generation. Human approval at every consequential step.
      </p>
      <ul className="mt-8 space-y-3">
        {campaigns.map((c) => {
          const opp = OPPORTUNITIES.find((o) => o.id === c.opportunityId);
          const mv = MOVEMENTS.find((m) => m.id === opp?.movementId);
          return (
            <li key={c.id}>
              <Link
                to="/campaigns/$id"
                params={{ id: c.id }}
                className="block rounded-xl border border-border bg-surface p-5 hover:border-border-strong"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="mb-2 flex gap-2">
                      <Badge variant="outline">{c.status.replaceAll("_", " ")}</Badge>
                      <Badge variant="priority">{c.responseMode}</Badge>
                    </div>
                    <h2 className="font-display text-2xl">{c.name}</h2>
                    <p className="mt-1 text-sm text-muted">
                      {mv?.canonicalName} · {c.owner} · {formatRelative(c.createdAt)}
                    </p>
                  </div>
                  {c.outcomes && (
                    <Badge variant={c.outcomes.thesis === "mixed" ? "warning" : "success"}>
                      Thesis {c.outcomes.thesis.replaceAll("_", " ")}
                    </Badge>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
