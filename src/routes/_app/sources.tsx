import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { ARENAS, CONNECTORS } from "@/lib/data";
import { formatRelative } from "@/lib/utils";

export const Route = createFileRoute("/_app/sources")({
  component: SourcesPage,
});

export function SourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8 lg:py-8">
      <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">Coverage you can trust</p>
      <h1 className="mt-1 font-display text-4xl tracking-tight">Sources</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        No data rights, no ingestion. Gaps are shown, never filled with invented activity.
      </p>
      <div className="mt-8 space-y-3">
        {CONNECTORS.map((c) => (
          <article key={c.id} className="rounded-xl border border-border bg-surface p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="mb-2 flex gap-2">
                  <Badge
                    variant={
                      c.status === "healthy" ? "success" : c.status === "not_connected" ? "warning" : "outline"
                    }
                  >
                    {c.status.replaceAll("_", " ")}
                  </Badge>
                  <Badge variant="outline">Tier {c.tier}</Badge>
                </div>
                <h2 className="font-display text-2xl">{c.name}</h2>
                <p className="text-sm text-muted">{c.type}</p>
              </div>
              <div className="text-right text-xs text-subtle">
                <p>{c.records.toLocaleString()} records</p>
                <p>{c.spendLabel}</p>
              </div>
            </div>
            <p className="mt-3 text-sm">{c.note}</p>
            <p className="mt-2 text-xs text-subtle">{c.rights}</p>
            <p className="mt-2 text-xs text-subtle">
              Last sync {c.lastSyncAt ? formatRelative(c.lastSyncAt) : "never"}
              {c.nextSyncAt ? ` · next ${formatRelative(c.nextSyncAt)}` : ""}
            </p>
          </article>
        ))}
      </div>
      <h2 className="mt-10 font-display text-2xl">Monitored arenas</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {ARENAS.map((a) => (
          <li key={a.id} className="rounded-lg border border-border p-4">
            <div className="mb-2 flex gap-2">
              <Badge variant={a.active ? "success" : "outline"}>{a.active ? "Active" : "Paused"}</Badge>
              {a.sensitivity === "elevated" && <Badge variant="warning">Elevated</Badge>}
            </div>
            <h3 className="text-sm font-medium">{a.name}</h3>
            <p className="mt-1 text-xs text-muted">{a.topics.join(" · ")}</p>
            <p className="mt-2 text-xs text-subtle">
              {a.markets.join(" / ")} · {a.cadence}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
