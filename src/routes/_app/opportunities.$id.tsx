import { useEffect, useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Quote } from "lucide-react";
import { DecisionBar } from "@/components/radar/decision-bar";
import { BarBreakdown, ScorePair, Sparkline } from "@/components/radar/scores";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AUDIENCES,
  COMPETITORS,
  MOVEMENTS,
  PRODUCTS,
  opportunityById,
} from "@/lib/data";
import {
  LIFECYCLE_COPY,
  RESPONSE_COPY,
  computeConfidence,
  computePriority,
  computeRelevance,
  computeTiming,
  confidenceLabel,
  scoresOf,
} from "@/lib/scoring";
import { useRadarStore } from "@/lib/store";
import type { ClaimType, EvidenceItem, Opportunity } from "@/lib/types";
import { cn, formatRelative } from "@/lib/utils";

export const Route = createFileRoute("/_app/opportunities/$id")({
  component: OpportunityPage,
});

const CLAIM_STYLE: Record<ClaimType, string> = {
  direct_observation: "Observation",
  quantitative_result: "Measured",
  observed_inference: "Inference",
  historical_analogy: "Analogy",
  brand_interpretation: "Brand reading",
  forecast: "Forecast",
  recommendation: "Recommendation",
};

function OpportunityPage() {
  const { id } = Route.useParams();
  const seed = opportunityById(id);
  const overlay = useRadarStore((s) => s.overlays[id]);
  const markViewed = useRadarStore((s) => s.markViewed);
  const campaigns = useRadarStore((s) => s.campaigns);

  useEffect(() => {
    if (seed) markViewed(id);
  }, [id, seed, markViewed]);

  if (!seed) {
    return (
      <div className="px-6 py-16 text-center">
        <p className="font-display text-2xl">Opportunity not found</p>
        <Link to="/" className="mt-4 inline-block text-sm text-muted underline">
          Back to Radar
        </Link>
      </div>
    );
  }

  const o: Opportunity = {
    ...seed,
    status: overlay?.status ?? seed.status,
    recommendedResponse: overlay?.recommendedResponse ?? seed.recommendedResponse,
  };
  const mv = MOVEMENTS.find((m) => m.id === o.movementId);
  const s = scoresOf(o);
  const campaign = campaigns.find((c) => c.opportunityId === o.id);

  return (
    <div>
      <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1 text-xs text-muted hover:text-fg">
          <ArrowLeft className="size-3.5" /> Inbox
        </Link>
        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <div className="mb-2 flex flex-wrap gap-2">
              <Badge variant="outline">{o.status.replaceAll("_", " ")}</Badge>
              <Badge variant="priority">{RESPONSE_COPY[o.recommendedResponse].label}</Badge>
              {mv && <Badge variant="default">{LIFECYCLE_COPY[mv.lifecycle]}</Badge>}
              {s.speculative && <Badge variant="warning">Speculative</Badge>}
            </div>
            <h1 className="font-display text-4xl tracking-tight md:text-5xl">{mv?.canonicalName}</h1>
            <p className="mt-2 text-sm text-muted">
              Window {o.window.label} · {o.markets.join(" / ")} · Surfaced {formatRelative(o.firstSurfacedAt)} · Brand Brain v17
            </p>
          </div>
          <ScorePair priority={s.priority} confidence={s.confidence} />
        </div>

        {campaign && (
          <div className="mt-4 rounded-lg border border-border bg-surface px-4 py-3 text-sm">
            Campaign in progress — {campaign.name}
            <Button asChild variant="ghost" size="sm" className="ml-2">
              <Link to="/campaigns/$id" params={{ id: campaign.id }}>
                Open studio
              </Link>
            </Button>
          </div>
        )}

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="evidence">Evidence</TabsTrigger>
            <TabsTrigger value="scores">Scores</TabsTrigger>
            <TabsTrigger value="movement">Movement</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8 py-6">
            <Section title="What changed">
              <p className="text-base leading-relaxed text-fg">{o.observableChange}</p>
              {o.claims[0] && <Citation claimId={o.claims[0].id} />}
            </Section>
            <Section title="Why this brand">
              <p className="text-base leading-relaxed text-fg">{o.whyThisBrand}</p>
            </Section>
            <Section title="Recommended response">
              <p className="font-display text-2xl">{RESPONSE_COPY[o.recommendedResponse].label}</p>
              <p className="mt-1 text-sm text-muted">{RESPONSE_COPY[o.recommendedResponse].hint}</p>
              <p className="mt-3 text-sm text-muted">
                Useful window {o.window.label} (forecast confidence {Math.round(o.window.confidence * 100)}). Alternatives:{" "}
                {o.alternativeResponses.map((r) => RESPONSE_COPY[r].label).join(", ") || "none"}.
              </p>
            </Section>
            <div className="grid gap-6 md:grid-cols-2">
              <Section title="Reasons to act">
                <ul className="space-y-2 text-sm leading-relaxed">
                  {o.reasonsToAct.map((r) => (
                    <li key={r} className="border-l-2 border-priority/50 pl-3">
                      {r}
                    </li>
                  ))}
                </ul>
              </Section>
              <Section title="Why not?">
                <ul className="space-y-2 text-sm leading-relaxed">
                  {o.reasonsNotToAct.map((r) => (
                    <li key={r} className="border-l-2 border-border pl-3 text-muted">
                      {r}
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
            <Section title="Product, audience, strategy">
              <div className="grid gap-4 sm:grid-cols-3">
                <MiniCard label="Products">
                  {o.productLinks.length === 0 && <p className="text-sm text-subtle">None linked</p>}
                  {o.productLinks.map((p) => {
                    const prod = PRODUCTS.find((x) => x.id === p.productId);
                    return (
                      <p key={p.productId} className="text-sm">
                        <span className="text-fg">{prod?.name}</span>
                        <span className="block text-muted">{p.note}</span>
                      </p>
                    );
                  })}
                </MiniCard>
                <MiniCard label="Audience">
                  {o.audienceLinks.map((a) => {
                    const aud = AUDIENCES.find((x) => x.id === a.segmentId);
                    return (
                      <p key={a.segmentId} className="text-sm">
                        <span className="text-fg">{aud?.name}</span>
                        <span className="block text-muted">{a.note}</span>
                      </p>
                    );
                  })}
                </MiniCard>
                <MiniCard label="Priorities">
                  {o.strategyLinks.map((t) => (
                    <p key={t} className="text-sm text-muted">
                      {t}
                    </p>
                  ))}
                </MiniCard>
              </div>
            </Section>
            <Section title="Competitor whitespace">
              <p className="text-sm leading-relaxed">{o.competitorWhitespace.statement}</p>
              <p className="mt-2 text-xs text-subtle">{o.competitorWhitespace.coverage}</p>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {o.competitorWhitespace.observations.map((ob) => {
                  const c = COMPETITORS.find((x) => x.id === ob.competitorId);
                  return (
                    <li key={ob.competitorId}>
                      <span className="text-fg">{c?.name}</span> — {ob.note}
                    </li>
                  );
                })}
              </ul>
            </Section>
            <Section title="Risks">
              <ul className="space-y-2">
                {o.risks.map((r) => (
                  <li key={r.text} className="flex gap-2 text-sm">
                    <Badge
                      variant={
                        r.severity === "high" || r.severity === "critical"
                          ? "danger"
                          : r.severity === "medium"
                            ? "warning"
                            : "default"
                      }
                    >
                      {r.severity}
                    </Badge>
                    <span>{r.text}</span>
                  </li>
                ))}
              </ul>
            </Section>
            <Section title="Unknowns">
              <ul className="list-disc space-y-1 pl-4 text-sm text-muted">
                {o.unknowns.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </Section>
          </TabsContent>

          <TabsContent value="evidence" className="py-6">
            <EvidencePanel opportunity={o} />
          </TabsContent>

          <TabsContent value="scores" className="py-6">
            <ScoresPanel opportunity={o} />
          </TabsContent>

          <TabsContent value="movement" className="py-6">
            {mv && (
              <div className="space-y-6">
                <p className="text-sm text-muted">
                  Shared cultural object — no other customer's brand, decisions, or outcomes are shown.
                </p>
                <p className="text-base leading-relaxed">{mv.description}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <MiniCard label="Dominant meaning">{mv.meanings.dominant}</MiniCard>
                  <MiniCard label="Opposing meaning">{mv.meanings.opposing}</MiniCard>
                </div>
                <MiniCard label="Origin (hypothesis)">{mv.originHypothesis}</MiniCard>
                <MiniCard label="Forecast">{mv.forecast}</MiniCard>
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-wide text-subtle">Visual codes</p>
                  <ul className="flex flex-wrap gap-2">
                    {mv.visualCodes.map((v) => (
                      <Badge key={v} variant="outline">
                        {v}
                      </Badge>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-subtle">{mv.lifecycleUncertainty}</p>
                <p className="text-xs text-subtle">Blind spots: {mv.blindSpots.join(" · ")}</p>
                <Button asChild variant="secondary" size="sm">
                  <Link to="/movements/$id" params={{ id: mv.id }}>
                    Open movement
                  </Link>
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      <DecisionBar opportunity={o} />
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-[11px] uppercase tracking-[0.16em] text-subtle">{title}</h2>
      {children}
    </section>
  );
}

function MiniCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <p className="mb-2 text-[11px] uppercase tracking-wide text-subtle">{label}</p>
      {children}
    </div>
  );
}

function Citation({ claimId }: { claimId: string }) {
  return (
    <p className="mt-2 font-mono text-[11px] text-subtle">
      <Quote className="mr-1 inline size-3" />
      {claimId}
    </p>
  );
}

function EvidencePanel({ opportunity: o }: { opportunity: Opportunity }) {
  const [role, setRole] = useState<"all" | EvidenceItem["role"]>("all");
  const items = o.evidence.filter((e) => role === "all" || e.role === role);
  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {(["all", "representative", "supporting", "contradicting", "contextual"] as const).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            className={cn(
              "h-8 rounded-full px-3 text-xs capitalize",
              role === r ? "bg-fg text-bg" : "border border-border text-muted",
            )}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="mb-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-surface text-xs uppercase tracking-wide text-subtle">
            <tr>
              <th className="px-3 py-2">Source</th>
              <th className="px-3 py-2">Tier</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Note</th>
            </tr>
          </thead>
          <tbody>
            {o.coverage.map((c) => (
              <tr key={c.source} className="border-t border-border">
                <td className="px-3 py-2">{c.source}</td>
                <td className="px-3 py-2 font-mono text-xs">{c.status}</td>
                <td className="px-3 py-2">
                  <Badge variant={c.status === "missing" ? "warning" : c.status === "partial" ? "outline" : "success"}>
                    {c.status}
                  </Badge>
                </td>
                <td className="px-3 py-2 text-muted">{c.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-3">
        {items.map((e) => (
          <article key={e.id} className="rounded-lg border border-border bg-surface p-4">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Badge variant={e.role === "contradicting" ? "warning" : "outline"}>{e.role}</Badge>
              <span className="text-xs text-subtle">
                {e.sourceName} · Tier {e.sourceTier} · {e.market}
              </span>
              {e.independentOrigin && <Badge variant="confidence">Independent origin</Badge>}
            </div>
            {e.title && <h3 className="text-sm font-medium">{e.title}</h3>}
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {e.handle && <span className="mr-2 text-fg">{e.handle}</span>}
              {e.excerpt}
            </p>
            <p className="mt-2 text-xs text-subtle">
              {formatRelative(e.publishedAt)} · {e.whyItMatters}
            </p>
          </article>
        ))}
      </div>
      <Separator className="my-6" />
      <h3 className="mb-3 text-[11px] uppercase tracking-wide text-subtle">Claims</h3>
      <div className="space-y-3">
        {o.claims.map((c) => (
          <div key={c.id} className="rounded-lg border border-border p-4">
            <div className="mb-1 flex gap-2">
              <Badge variant={c.type === "forecast" ? "warning" : "outline"}>{CLAIM_STYLE[c.type]}</Badge>
              <span className="font-mono text-xs text-subtle">{c.id}</span>
            </div>
            <p className="text-sm">{c.text}</p>
            <p className="mt-2 text-xs text-subtle">
              Confidence {Math.round(c.confidence * 100)} · {c.scope}
              {c.limitations.length ? ` · ${c.limitations.join("; ")}` : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoresPanel({ opportunity: o }: { opportunity: Opportunity }) {
  const priority = computePriority(o.movement, o.brand);
  const confidence = computeConfidence(o.confidenceInputs);
  const timing = Math.round(computeTiming(o.movement));
  const relevance = Math.round(computeRelevance(o.brand));
  const mv = MOVEMENTS.find((m) => m.id === o.movementId);
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <h3 className="mb-1 font-display text-2xl">Priority {priority}</h3>
        <p className="mb-4 text-sm text-muted">
          Attention warranted now. Warm scale. Formula v1 · fashion/lifestyle weights.
        </p>
        <BarBreakdown
          items={[
            { key: "t", label: "Timing", value: timing },
            { key: "r", label: "Relevance", value: relevance },
            { key: "cw", label: "Whitespace", value: o.brand.CW },
            { key: "ac", label: "Actionability", value: o.brand.AC },
            { key: "su", label: "Strategic upside", value: o.brand.SU },
            { key: "risk", label: "Brand risk (penalty)", value: o.brand.R, tone: "danger" },
          ]}
        />
        <p className="mt-3 text-xs text-subtle">
          Priority = Opportunity × (1 − 0.60 × risk/100). Hard gates: prohibited topics, missing rights, low
          confidence label.
        </p>
      </div>
      <div>
        <h3 className="mb-1 font-display text-2xl">
          Confidence {confidence} · {confidenceLabel(confidence)}
        </h3>
        <p className="mb-4 text-sm text-muted">
          Strength of evidence, not importance. Cool badge — never the same colour as priority.
        </p>
        <BarBreakdown
          items={[
            { key: "sr", label: "Source reliability", value: Math.round(o.confidenceInputs.sourceReliability * 100), tone: "confidence" },
            { key: "is", label: "Independent support", value: Math.round(o.confidenceInputs.independentSupport * 100), tone: "confidence" },
            { key: "xs", label: "Cross-source coverage", value: Math.round(o.confidenceInputs.crossSourceCoverage * 100), tone: "confidence" },
            { key: "mc", label: "Measurement completeness", value: Math.round(o.confidenceInputs.measurementCompleteness * 100), tone: "confidence" },
            { key: "ca", label: "Claim agreement", value: Math.round(o.confidenceInputs.claimAgreement * 100), tone: "confidence" },
            { key: "bb", label: "Brand Brain readiness", value: Math.round(o.confidenceInputs.brandBrainReadiness * 100), tone: "confidence" },
          ]}
        />
      </div>
      {mv && (
        <div className="lg:col-span-2">
          <h3 className="mb-3 text-[11px] uppercase tracking-wide text-subtle">Momentum (14 days)</h3>
          <Sparkline values={mv.sparkline.map((p) => p.value)} className="h-16 w-full text-priority" />
        </div>
      )}
      <div className="lg:col-span-2 grid gap-3 sm:grid-cols-3">
        {Object.entries(o.scoreExplain).map(([k, ex]) => (
          <div key={k} className="rounded-lg border border-border p-4">
            <p className="font-mono text-xs text-priority">{k}</p>
            <p className="mt-1 text-sm">{ex.definition}</p>
            <p className="mt-2 text-xs text-success">{ex.positives.join(" · ")}</p>
            <p className="mt-1 text-xs text-warning">{ex.penalties.join(" · ")}</p>
            <p className="mt-2 text-xs text-subtle">{ex.wouldChange}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
