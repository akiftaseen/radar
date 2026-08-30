import { createFileRoute, Link } from "@tanstack/react-router";
import { MOVEMENTS, OPPORTUNITIES } from "@/lib/data";
import { scoresOf } from "@/lib/scoring";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/map")({
  component: MapPage,
});

export function MapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 lg:px-8 lg:py-8">
      <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">Cultural graph</p>
      <h1 className="mt-1 font-display text-4xl tracking-tight">Map</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Horizontal is novelty versus saturation. Vertical is momentum. Size is brand priority. Shared movements never show another customer's judgement.
      </p>
      <div className="relative mt-8 h-[520px] overflow-hidden rounded-xl border border-border bg-surface">
        <div className="pointer-events-none absolute inset-x-6 top-4 flex justify-between text-[11px] uppercase tracking-wide text-subtle">
          <span>Novel</span>
          <span>Saturating</span>
        </div>
        <div className="pointer-events-none absolute bottom-4 left-4 text-[11px] uppercase tracking-wide text-subtle">
          Quiet
        </div>
        <div className="pointer-events-none absolute left-4 top-10 text-[11px] uppercase tracking-wide text-subtle">
          Fast
        </div>
        <svg className="absolute inset-0 size-full" aria-hidden="true">
          <line x1="8%" y1="50%" x2="92%" y2="50%" stroke="currentColor" className="text-border" />
          <line x1="50%" y1="8%" x2="50%" y2="92%" stroke="currentColor" className="text-border" />
        </svg>
        {MOVEMENTS.map((m) => {
          const opp = OPPORTUNITIES.find((o) => o.movementId === m.id && o.status !== "dismissed");
          const pr = opp ? scoresOf(opp).priority : 40;
          const x = 8 + (m.metrics.S / 100) * 80;
          const y = 88 - (m.metrics.M / 100) * 76;
          const size = 10 + pr / 8;
          return (
            <Link
              key={m.id}
              to="/movements/$id"
              params={{ id: m.id }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                className={cn(
                  "flex items-center justify-center rounded-full border border-priority/40 bg-priority/15 text-[10px] text-fg hover:bg-priority/30",
                )}
                style={{ width: size * 4, height: size * 4 }}
              >
                <span className="max-w-[7rem] px-1 text-center leading-tight">{m.canonicalName}</span>
              </span>
            </Link>
          );
        })}
      </div>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {MOVEMENTS.map((m) => (
          <li key={m.id}>
            <Link to="/movements/$id" params={{ id: m.id }} className="block rounded-md px-2 py-2 hover:bg-surface">
              <span className="text-sm">{m.canonicalName}</span>
              <span className="ml-2 text-xs text-subtle">{m.lifecycle.replaceAll("_", " ")}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
