import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { BRAND, WORKSPACE } from "@/lib/data";
import { useRadarStore } from "@/lib/store";

export const Route = createFileRoute("/_app/settings")({
  component: SettingsPage,
});

export function SettingsPage() {
  const reset = useRadarStore((s) => s.reset);
  const decisions = useRadarStore((s) => s.decisions);
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8 lg:py-8">
      <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">Workspace</p>
      <h1 className="mt-1 font-display text-4xl tracking-tight">Settings</h1>
      <section className="mt-8 space-y-6">
        <Block title="Organisation">
          <Row k="Workspace" v={WORKSPACE.name} />
          <Row k="Type" v={WORKSPACE.type} />
          <Row k="Plan" v={WORKSPACE.plan} />
          <Row k="You" v={`${WORKSPACE.member} · ${WORKSPACE.role}`} />
        </Block>
        <Block title="Brand">
          <Row k="Active brand" v={BRAND.name} />
          <Row k="Markets" v={BRAND.markets.join(", ")} />
          <Row k="Safety owner" v={BRAND.safetyOwner} />
        </Block>
        <Block title="Notifications">
          <p className="text-sm text-muted">
            Default: weekly digest, plus immediate only when Priority ≥ 80, Confidence ≥ 60, and risk is not high.
          </p>
        </Block>
        <Block title="Audit">
          <p className="text-sm text-muted">{decisions.length} recorded decisions in this browser workspace.</p>
          <ul className="mt-3 space-y-2 text-sm">
            {decisions.slice(0, 8).map((d) => (
              <li key={d.id} className="text-muted">
                <span className="text-fg">{d.type}</span> · {d.opportunityId} · {d.actor}
                {d.reasonCode ? ` · ${d.reasonCode}` : ""}
              </li>
            ))}
          </ul>
        </Block>
        <Block title="Demo data">
          <p className="text-sm text-muted">
            Decisions, monitors, and campaign progress persist in this browser. Reset restores the Aether Atelier pilot snapshot.
          </p>
          <Button
            className="mt-3"
            variant="secondary"
            onClick={() => {
              reset();
              toast.success("Workspace restored.");
            }}
          >
            Reset workspace
          </Button>
        </Block>
      </section>
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <h2 className="mb-3 font-display text-xl">{title}</h2>
      {children}
    </div>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border py-2 text-sm last:border-0">
      <span className="text-muted">{k}</span>
      <span>{v}</span>
    </div>
  );
}
