import { createFileRoute } from "@tanstack/react-router";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
} from "recharts";
import { ANALYTICS } from "@/lib/data";

export const Route = createFileRoute("/_app/analytics")({
  component: AnalyticsPage,
});

export function AnalyticsPage() {
  const k = ANALYTICS.kpis;
  return (
    <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8 lg:py-8">
      <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">Product quality</p>
      <h1 className="mt-1 font-display text-4xl tracking-tight">Analytics</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Raw signal volume is not the headline. Adoption, low-value rate, and time-to-decision are.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Kpi label="QOAR (W6)" value={`${k.qoar}%`} hint="Target ≥30%" />
        <Kpi label="Low-value rate" value={`${k.lowValue}%`} hint="Guardrail <25%" />
        <Kpi label="Median decision" value={`${k.decisionMin}m`} hint="Target <15m" />
        <Kpi label="Adopted / month" value={String(k.adoptedPerMonth)} hint="Per active brand" />
        <Kpi label="Briefs useful" value={`${k.briefsRated}%`} hint="Minor edits or better" />
        <Kpi label="Scan lag" value={k.scanLag} hint="MVP <6h" />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-4">
          <h2 className="mb-4 text-sm">QOAR vs low-value</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ANALYTICS.weeks}>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="week" stroke="var(--color-subtle)" fontSize={11} />
                <YAxis stroke="var(--color-subtle)" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 8,
                  }}
                />
                <Line type="monotone" dataKey="qoar" stroke="var(--color-priority)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="lowValue" stroke="var(--color-confidence)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4">
          <h2 className="mb-4 text-sm">Response modes</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ANALYTICS.responses}>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="var(--color-subtle)" fontSize={11} />
                <YAxis stroke="var(--color-subtle)" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 8,
                  }}
                />
                <Bar dataKey="value" fill="var(--color-fg)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface px-4 py-3">
      <p className="text-[11px] uppercase tracking-wide text-subtle">{label}</p>
      <p className="mt-1 font-mono text-2xl tabular">{value}</p>
      <p className="text-xs text-subtle">{hint}</p>
    </div>
  );
}
