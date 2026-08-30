import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { useRadarStore } from "@/lib/store";

export const Route = createFileRoute("/_app/approvals")({
  component: ApprovalsPage,
});

export function ApprovalsPage() {
  const campaigns = useRadarStore((s) => s.campaigns);
  const pending = campaigns.filter((c) =>
    ["setup", "strategy_draft", "strategy_approved", "territories_ready", "territory_selected", "brief_draft"].includes(
      c.status,
    ),
  );
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8 lg:py-8">
      <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">Review</p>
      <h1 className="mt-1 font-display text-4xl tracking-tight">Approvals</h1>
      <p className="mt-2 text-sm text-muted">
        Approval is bound to an artifact version. A material edit invalidates it.
      </p>
      <ul className="mt-8 space-y-3">
        {pending.map((c) => (
          <li key={c.id}>
            <Link
              to="/campaigns/$id"
              params={{ id: c.id }}
              className="flex items-center justify-between rounded-xl border border-border bg-surface p-4 hover:border-border-strong"
            >
              <div>
                <p className="font-display text-xl">{c.name}</p>
                <p className="text-sm text-muted">{c.owner}</p>
              </div>
              <Badge variant="warning">{c.status.replaceAll("_", " ")}</Badge>
            </Link>
          </li>
        ))}
        {pending.length === 0 && <p className="text-sm text-muted">Nothing waiting.</p>}
      </ul>
    </div>
  );
}
