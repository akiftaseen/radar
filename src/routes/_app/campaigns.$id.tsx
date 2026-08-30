import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateStudio } from "@/lib/ai";
import { MOVEMENTS, OPPORTUNITIES } from "@/lib/data";
import { useRadarStore } from "@/lib/store";
import type { Territory } from "@/lib/types";
import { cn, downloadText } from "@/lib/utils";

export const Route = createFileRoute("/_app/campaigns/$id")({
  component: CampaignStudio,
});

export function CampaignStudio() {
  const { id } = Route.useParams();
  const campaign = useRadarStore((s) => s.campaigns.find((c) => c.id === id));
  const approveStrategy = useRadarStore((s) => s.approveStrategy);
  const selectTerritory = useRadarStore((s) => s.selectTerritory);
  const approveBrief = useRadarStore((s) => s.approveBrief);
  const attachGenerated = useRadarStore((s) => s.attachGenerated);
  const [busy, setBusy] = useState(false);
  const [aiText, setAiText] = useState<string | null>(null);

  if (!campaign) {
    return (
      <div className="px-6 py-16 text-center">
        <p className="font-display text-2xl">Campaign not found</p>
        <Link to="/campaigns" className="mt-3 inline-block text-sm text-muted underline">
          All campaigns
        </Link>
      </div>
    );
  }

  const opp = OPPORTUNITIES.find((o) => o.id === campaign.opportunityId);
  const mv = MOVEMENTS.find((m) => m.id === opp?.movementId);
  const selected = campaign.territories.find((t) => t.id === campaign.selectedTerritoryId);
  const strategyLocked = [
    "strategy_approved",
    "territories_ready",
    "territory_selected",
    "brief_draft",
    "brief_approved",
    "activated",
    "measured",
  ].includes(campaign.status);

  const runAi = async (kind: "strategy" | "territories" | "brief" | "research") => {
    setBusy(true);
    setAiText(null);
    const context = [
      `Brand: Aether Atelier. Voice: dry, precise. Constraint: no sports marks.`,
      `Movement: ${mv?.canonicalName}. ${opp?.observableChange}`,
      `Why brand: ${opp?.whyThisBrand}`,
      `Why not: ${opp?.reasonsNotToAct.join(" ")}`,
      `Objective: ${campaign.objective}`,
      campaign.strategy ? `Approved strategy proposition: ${campaign.strategy.proposition}` : "",
      selected ? `Selected territory: ${selected.name} — ${selected.organizingIdea}` : "",
    ].join("\n");
    const res = await generateStudio({ data: { kind, context } });
    setBusy(false);
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    setAiText(res.text);
    toast.success("Draft returned. Review before it becomes the artifact.");
    if (kind === "brief") {
      attachGenerated(campaign.id, {
        brief: {
          executive: res.text.slice(0, 280),
          sections: [{ title: "Generated draft", body: res.text }],
        },
        status: "brief_draft",
      });
    }
  };

  const exportBrief = () => {
    const b = campaign.brief;
    if (!b) return;
    const md = [`# ${campaign.name}`, "", b.executive, "", ...b.sections.map((s) => `## ${s.title}\n\n${s.body}`)].join(
      "\n",
    );
    downloadText(`${campaign.id}.md`, md);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 lg:px-8">
      <Link to="/campaigns" className="text-xs text-muted hover:text-fg">
        All campaigns
      </Link>
      <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="mb-2 flex gap-2">
            <Badge variant="outline">{campaign.status.replaceAll("_", " ")}</Badge>
            <Badge variant="priority">{campaign.responseMode}</Badge>
          </div>
          <h1 className="font-display text-4xl tracking-tight">{campaign.name}</h1>
          <p className="mt-2 text-sm text-muted">
            {mv?.canonicalName} · Brand Brain v17 · Evidence frozen at approval
          </p>
        </div>
        {opp && (
          <Button asChild variant="secondary" size="sm">
            <Link to="/opportunities/$id" params={{ id: opp.id }}>
              Opportunity
            </Link>
          </Button>
        )}
      </div>

      <Tabs defaultValue="strategy" className="mt-6">
        <TabsList>
          <TabsTrigger value="strategy">Strategy</TabsTrigger>
          <TabsTrigger value="territories">Territories</TabsTrigger>
          <TabsTrigger value="brief">Brief</TabsTrigger>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
        </TabsList>

        <TabsContent value="strategy" className="space-y-5 py-6">
          {campaign.strategy ? (
            <>
              <Field label="Objective" value={campaign.strategy.objective} />
              <Field label="Cultural insight" value={campaign.strategy.culturalInsight} />
              <Field label="Human tension" value={campaign.strategy.humanTension} />
              <Field label="Permission" value={campaign.strategy.brandPermission} />
              <Field label="Brand role" value={campaign.strategy.brandRole} />
              <Field label="Proposition" value={campaign.strategy.proposition} />
              <Field label="Desired response" value={campaign.strategy.desiredResponse} />
              <ListField label="Reasons to believe" items={campaign.strategy.reasonsToBelieve} />
              <ListField label="Non-goals" items={campaign.strategy.nonGoals} />
              <ListField label="Success measures" items={campaign.strategy.successMetrics} />
              <ListField label="Assumptions" items={campaign.strategy.assumptions} />
              <div className="flex flex-wrap gap-2">
                <Button disabled={strategyLocked} onClick={() => approveStrategy(campaign.id)}>
                  {strategyLocked ? "Strategy approved" : "Approve strategy"}
                </Button>
                <Button variant="secondary" disabled={busy} onClick={() => void runAi("strategy")}>
                  {busy ? "Requesting…" : "Revise with Radar"}
                </Button>
              </div>
            </>
          ) : (
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="font-display text-2xl">No strategy yet</p>
              <p className="mt-2 text-sm text-muted">
                Territory generation stays locked until a named person approves the foundation.
              </p>
              <Button className="mt-4" disabled={busy} onClick={() => void runAi("strategy")}>
                {busy ? "Drafting…" : "Draft strategy"}
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="territories" className="py-6">
          {!strategyLocked && campaign.territories.length === 0 ? (
            <p className="text-sm text-muted">Approve strategy before territories can be generated.</p>
          ) : campaign.territories.length === 0 ? (
            <Button disabled={busy} onClick={() => void runAi("territories")}>
              {busy ? "Generating…" : "Generate three territories"}
            </Button>
          ) : (
            <>
              <p className="mb-4 text-sm text-muted">
                Three territories must differ in mechanism, brand role, and hero execution. The critic advises; it cannot approve.
              </p>
              <div className="grid gap-4 lg:grid-cols-3">
                {campaign.territories.map((t) => (
                  <TerritoryCard
                    key={t.id}
                    territory={t}
                    selected={campaign.selectedTerritoryId === t.id}
                    onSelect={() => selectTerritory(campaign.id, t.id)}
                  />
                ))}
              </div>
            </>
          )}
        </TabsContent>

        <TabsContent value="brief" className="space-y-4 py-6">
          {!campaign.selectedTerritoryId ? (
            <p className="text-sm text-muted">Select a territory to compose the brief.</p>
          ) : campaign.brief ? (
            <>
              <p className="text-base leading-relaxed">{campaign.brief.executive}</p>
              {campaign.brief.sections.map((s) => (
                <section key={s.title}>
                  <h2 className="mb-2 text-[11px] uppercase tracking-wide text-subtle">{s.title}</h2>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted">{s.body}</p>
                </section>
              ))}
              <div className="flex flex-wrap gap-2">
                <Button
                  disabled={campaign.status === "brief_approved" || campaign.status === "measured"}
                  onClick={() => {
                    approveBrief(campaign.id);
                    toast.success("Brief approved. Material edits will invalidate this approval.");
                  }}
                >
                  Approve brief
                </Button>
                <Button variant="secondary" onClick={exportBrief}>
                  Export markdown
                </Button>
                <Button variant="ghost" disabled={busy} onClick={() => void runAi("brief")}>
                  Regenerate draft
                </Button>
              </div>
            </>
          ) : (
            <Button disabled={busy} onClick={() => void runAi("brief")}>
              Compose brief
            </Button>
          )}
        </TabsContent>

        <TabsContent value="outcomes" className="py-6">
          {campaign.outcomes ? (
            <div className="space-y-4">
              <Badge variant="warning">Thesis {campaign.outcomes.thesis.replaceAll("_", " ")}</Badge>
              <p className="text-sm leading-relaxed">{campaign.outcomes.qualitative}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {campaign.outcomes.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg border border-border p-4">
                    <p className="text-xs text-subtle">{m.label}</p>
                    <p className="font-mono text-lg">{m.value}</p>
                    {m.baseline && <p className="text-xs text-muted">Baseline {m.baseline}</p>}
                  </div>
                ))}
              </div>
              <p className="text-xs text-subtle">
                Radar does not claim the recommendation caused the result. Thesis, strategy, execution, and distribution are scored separately.
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted">No outcomes yet. Capture them after execution — never infer causality from a single campaign.</p>
          )}
        </TabsContent>
      </Tabs>

      {aiText && (
        <div className="mt-8 rounded-xl border border-border bg-surface p-5">
          <p className="mb-2 text-[11px] uppercase tracking-wide text-subtle">Radar draft — not approved</p>
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-muted">{aiText}</div>
        </div>
      )}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-subtle">{label}</p>
      <p className="mt-1 text-sm leading-relaxed">{value}</p>
    </div>
  );
}
function ListField({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-subtle">{label}</p>
      <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-muted">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function TerritoryCard({
  territory: t,
  selected,
  onSelect,
}: {
  territory: Territory;
  selected: boolean;
  onSelect: () => void;
}) {
  const avg =
    Object.values(t.critic).reduce((a, b) => a + b.score, 0) / Math.max(1, Object.values(t.critic).length);
  return (
    <article
      className={cn(
        "flex flex-col rounded-xl border bg-surface p-4",
        selected ? "border-fg" : "border-border",
      )}
    >
      <div className="mb-2 flex gap-1">
        {t.palette.map((c) => (
          <span key={c} className="h-2 flex-1 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <h3 className="font-display text-xl">{t.name}</h3>
      <p className="mt-2 text-sm text-muted">{t.organizingIdea}</p>
      <p className="mt-3 text-xs uppercase tracking-wide text-subtle">{t.strategicMechanism.replaceAll("_", " ")}</p>
      <p className="mt-2 text-sm">
        <span className="text-subtle">Hero · </span>
        {t.heroExecution}
      </p>
      <p className="mt-2 text-sm">
        <span className="text-subtle">Role · </span>
        {t.brandRole}
      </p>
      <p className="mt-3 text-xs text-muted">Critic average {avg.toFixed(1)} / 5 · Feasibility {t.feasibility}</p>
      <ul className="mt-2 space-y-1 text-xs text-subtle">
        {t.risks.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <Button className="mt-4" size="sm" variant={selected ? "default" : "secondary"} onClick={onSelect}>
        {selected ? "Selected" : "Select territory"}
      </Button>
    </article>
  );
}
