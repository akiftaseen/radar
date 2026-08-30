import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AUDIENCES, BRAND, COMPETITORS, FACTS, PRODUCTS } from "@/lib/data";
import { useRadarStore } from "@/lib/store";
import { cn, formatRelative } from "@/lib/utils";

export const Route = createFileRoute("/_app/brand")({
  component: BrandPage,
});

const DOMAIN_WEIGHT: Record<string, number> = {
  identity: 15,
  audience: 15,
  voice: 10,
  visual: 10,
  products: 15,
  constraints: 20,
  competitors: 5,
  strategic_priorities: 5,
  cultural_permission: 5,
};

export function BrandPage() {
  const factStatus = useRadarStore((s) => s.factStatus);
  const setFactStatus = useRadarStore((s) => s.setFactStatus);
  const facts = FACTS.map((f) => ({ ...f, status: factStatus[f.id] ?? f.status }));
  const proposed = facts.filter((f) => f.status === "proposed");

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8 lg:py-8">
      <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">Persistent brand context</p>
      <h1 className="mt-1 font-display text-4xl tracking-tight">{BRAND.name}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">{BRAND.positioning}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-4">
        <Stat label="Readiness" value={`${BRAND.readiness}/100`} />
        <Stat label="Brain version" value={`v${BRAND.brainVersion}`} />
        <Stat label="Safety owner" value={BRAND.safetyOwner} />
        <Stat label="Proposed facts" value={String(proposed.length)} />
      </div>
      <p className="mt-3 text-xs text-subtle">
        Readiness is coverage, not quality. Ready requires ≥75 and approved constraints. Unapproved facts cannot govern campaign output.
      </p>

      <Tabs defaultValue="facts" className="mt-8">
        <TabsList>
          <TabsTrigger value="facts">Facts</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="competitors">Competitors</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>
        <TabsContent value="facts" className="space-y-3 py-6">
          {facts.map((f) => (
            <article key={f.id} className="rounded-lg border border-border bg-surface p-4">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <Badge variant="outline">{f.domain.replaceAll("_", " ")}</Badge>
                <Badge
                  variant={
                    f.status === "approved" ? "success" : f.status === "proposed" ? "warning" : "danger"
                  }
                >
                  {f.status}
                </Badge>
                {f.sensitivity === "restricted" && <Badge variant="danger">Restricted</Badge>}
                <span className="font-mono text-[11px] text-subtle">{f.id}</span>
              </div>
              <h2 className="text-sm font-medium">{f.label}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">{f.value}</p>
              <p className="mt-2 text-xs text-subtle">
                {f.source} · confidence {Math.round(f.confidence * 100)} · from {f.effectiveFrom}
              </p>
              {f.status === "proposed" && (
                <div className="mt-3 flex gap-2">
                  <Button size="sm" onClick={() => setFactStatus(f.id, "approved")}>
                    Approve
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => setFactStatus(f.id, "rejected")}>
                    Reject
                  </Button>
                </div>
              )}
            </article>
          ))}
        </TabsContent>
        <TabsContent value="products" className="grid gap-3 py-6 sm:grid-cols-2">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="rounded-lg border border-border bg-surface p-4">
              <div className="mb-2 flex gap-2">
                <Badge variant={p.priority === "capsule" ? "priority" : "outline"}>{p.priority}</Badge>
                <Badge variant="default">{p.availability.replaceAll("_", " ")}</Badge>
              </div>
              <h2 className="font-display text-xl">{p.name}</h2>
              <p className="mt-1 text-sm text-muted">{p.description}</p>
              <p className="mt-2 text-xs text-subtle">
                {p.priceBand} · {p.markets.join(" / ")}
                {p.launchAt ? ` · launch ${p.launchAt}` : ""}
              </p>
            </article>
          ))}
        </TabsContent>
        <TabsContent value="competitors" className="space-y-3 py-6">
          {COMPETITORS.map((c) => (
            <article key={c.id} className="rounded-lg border border-border bg-surface p-4">
              <h2 className="font-display text-xl">{c.name}</h2>
              <p className="text-sm text-muted">{c.positioning}</p>
              <p className="mt-2 text-sm">{c.observed}</p>
              <p className="mt-2 text-xs text-subtle">
                Last scan {formatRelative(c.lastScanAt)} · {c.handles.join(" ")} · No observed action is not proof of inaction.
              </p>
            </article>
          ))}
        </TabsContent>
        <TabsContent value="audience" className="grid gap-3 py-6 md:grid-cols-2">
          {AUDIENCES.map((a) => (
            <article key={a.id} className="rounded-lg border border-border bg-surface p-4">
              <h2 className="font-display text-xl">{a.name}</h2>
              <p className="mt-1 text-sm text-muted">{a.description}</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-subtle">Needs</p>
              <ul className="mt-1 list-disc pl-4 text-sm">
                {a.needs.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </article>
          ))}
        </TabsContent>
      </Tabs>
      <p className={cn("mt-6 hidden text-xs text-subtle")}>
        Domain weights {Object.values(DOMAIN_WEIGHT).reduce((a, b) => a + b, 0)}
      </p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface px-4 py-3">
      <p className="text-[11px] uppercase tracking-wide text-subtle">{label}</p>
      <p className="mt-1 font-mono text-lg tabular">{value}</p>
    </div>
  );
}
