import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MOVEMENTS, OPPORTUNITIES } from "@/lib/data";
import { LIFECYCLE_COPY, RESPONSE_COPY, scoresOf } from "@/lib/scoring";
import { useRadarStore } from "@/lib/store";
import type { Opportunity, OpportunityStatus, ResponseMode } from "@/lib/types";
import { cn, formatRelative } from "@/lib/utils";
import { ScorePair, Sparkline } from "./scores";

type FilterKey = "all" | "act_now" | "investigate" | "monitoring" | "approved" | "learn";

function resolved(o: Opportunity, overlay?: { status?: OpportunityStatus; recommendedResponse?: ResponseMode }) {
  return {
    ...o,
    status: overlay?.status ?? o.status,
    recommendedResponse: overlay?.recommendedResponse ?? o.recommendedResponse,
  };
}

export function Inbox() {
  const overlays = useRadarStore((s) => s.overlays);
  const [filter, setFilter] = useState<FilterKey>("all");
  const [dense, setDense] = useState(false);

  const items = useMemo(() => {
    const list = OPPORTUNITIES.map((o) => resolved(o, overlays[o.id])).filter((o) => o.status !== "archived");
    const ranked = [...list].sort((a, b) => {
      const order = (s: OpportunityStatus) =>
        s === "dismissed" ? 1 : s === "measured" ? 2 : 0;
      const d = order(a.status) - order(b.status);
      if (d !== 0) return d;
      return scoresOf(b).priority - scoresOf(a).priority;
    });
    return ranked.filter((o) => {
      const s = scoresOf(o);
      if (filter === "all") return o.status !== "dismissed";
      if (filter === "act_now") return s.band === "act_now" && o.status !== "dismissed";
      if (filter === "investigate") return s.band === "investigate" && o.status !== "dismissed";
      if (filter === "monitoring") return o.status === "monitoring" || o.badge === "triggered";
      if (filter === "approved") return o.status === "approved" || o.status === "brief_in_progress";
      if (filter === "learn") return o.recommendedResponse === "learn" || o.recommendedResponse === "ignore";
      return true;
    });
  }, [overlays, filter]);

  const live = OPPORTUNITIES.map((o) => resolved(o, overlays[o.id]));
  const newCount = live.filter((o) => o.badge === "new" && o.status === "surfaced").length;
  const actNow = live.filter((o) => scoresOf(o).band === "act_now" && o.status !== "dismissed").length;
  const triggered = live.filter((o) => o.badge === "triggered").length;

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: "All" },
    { key: "act_now", label: "Act now" },
    { key: "investigate", label: "Investigate" },
    { key: "monitoring", label: "Monitoring" },
    { key: "approved", label: "Approved" },
    { key: "learn", label: "Learn / ignore" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8 lg:py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">Opportunity inbox</p>
          <h1 className="mt-1 font-display text-4xl tracking-tight text-fg md:text-5xl">Radar</h1>
          <p className="mt-2 max-w-xl text-sm text-muted">
            The few cultural changes Aether can credibly act on. Priority is not confidence.
            Silence is sometimes the strategy.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <SummaryChip label="New" value={newCount} />
          <SummaryChip label="Act now" value={actNow} tone="priority" />
          <SummaryChip label="Triggered" value={triggered} />
          <SummaryChip label="Coverage" value="X · RSS · web" />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Filter className="size-3.5 text-subtle" />
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={cn(
              "h-8 rounded-full px-3 text-xs",
              filter === f.key ? "bg-fg text-bg" : "border border-border text-muted hover:text-fg",
            )}
          >
            {f.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setDense((d) => !d)}
          className="ml-auto h-8 text-xs text-muted hover:text-fg"
        >
          {dense ? "Cards" : "Dense"}
        </button>
      </div>

      {items.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface px-6 py-16 text-center">
          <p className="font-display text-2xl">No opportunities in this view</p>
          <p className="mt-2 text-sm text-muted">
            That can be a genuine empty inbox, a scan still running, or a filter hiding dismissed work.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {items.map((o, i) => (
            <li key={o.id} className="rise-in" style={{ animationDelay: `${i * 40}ms` }}>
              <OpportunityCard opportunity={o} dense={dense} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SummaryChip({
  label,
  value,
  tone,
}: {
  label: string;
  value: string | number;
  tone?: "priority";
}) {
  return (
    <div className="rounded-full border border-border bg-surface px-3 py-1.5">
      <span className="text-subtle">{label} </span>
      <span className={cn("tabular text-fg", tone === "priority" && "text-priority")}>{value}</span>
    </div>
  );
}

function OpportunityCard({ opportunity: o, dense }: { opportunity: Opportunity; dense: boolean }) {
  const mv = MOVEMENTS.find((m) => m.id === o.movementId);
  const s = scoresOf(o);
  const response = RESPONSE_COPY[o.recommendedResponse];

  return (
    <Link
      to="/opportunities/$id"
      params={{ id: o.id }}
      className={cn(
        "block rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-strong hover:bg-surface-2 sm:p-5",
        o.status === "dismissed" && "opacity-60",
      )}
    >
      <div className="flex flex-wrap items-start gap-4">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {o.badge === "new" && <Badge variant="priority">New</Badge>}
            {o.badge === "changed" && <Badge variant="warning">Changed</Badge>}
            {o.badge === "triggered" && <Badge variant="fg">Monitor triggered</Badge>}
            <Badge variant={s.band === "act_now" ? "priority" : "default"}>{s.band === "act_now" ? "Act now" : s.band === "investigate" ? "Investigate" : s.band === "monitor_learn" ? "Monitor / learn" : "Low"}</Badge>
            <Badge variant="outline">{response.label}</Badge>
            <span className="text-[11px] uppercase tracking-wide text-subtle">
              {LIFECYCLE_COPY[mv?.lifecycle ?? ""]}
            </span>
            {s.speculative && <Badge variant="warning">Speculative</Badge>}
          </div>
          <h2 className="font-display text-2xl leading-tight tracking-tight text-fg">
            {mv?.canonicalName}
          </h2>
          <p className={cn("mt-2 text-sm text-muted", dense && "line-clamp-2")}>{o.observableChange}</p>
          {!dense && (
            <p className="mt-2 text-sm text-fg/90">
              <span className="text-subtle">Why this brand · </span>
              {o.whyThisBrand}
            </p>
          )}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-subtle">
            <span>Window {o.window.label}</span>
            <span>{o.markets.join(" / ")}</span>
            <span>{formatRelative(o.lastMaterialChangeAt)}</span>
            {o.risks[0] && <span className="text-warning">Risk · {o.risks[0].text}</span>}
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2">
          <ScorePair priority={s.priority} confidence={s.confidence} compact={dense} />
          {!dense && mv && <Sparkline values={mv.sparkline.map((p) => p.value)} className="w-28" />}
          <span className="inline-flex items-center gap-1 text-xs text-muted">
            Open <ArrowUpRight className="size-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function InboxHint() {
  return (
    <div className="mt-8 flex justify-end">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/analytics">Quality this week</Link>
      </Button>
    </div>
  );
}
