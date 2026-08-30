import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Sparkline } from "@/components/radar/scores";
import { MOVEMENTS, OPPORTUNITIES } from "@/lib/data";
import { LIFECYCLE_COPY, scoresOf } from "@/lib/scoring";

export const Route = createFileRoute("/_app/movements/$id")({
  component: MovementPage,
});

export function MovementPage() {
  const { id } = Route.useParams();
  const mv = MOVEMENTS.find((m) => m.id === id);
  if (!mv) {
    return (
      <div className="px-6 py-16 text-center">
        <p className="font-display text-2xl">Movement not found</p>
      </div>
    );
  }
  const linked = OPPORTUNITIES.filter((o) => o.movementId === mv.id);
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8 lg:py-8">
      <Link to="/map" className="text-xs text-muted hover:text-fg">
        Map
      </Link>
      <div className="mt-3 flex flex-wrap gap-2">
        <Badge variant="priority">{LIFECYCLE_COPY[mv.lifecycle]}</Badge>
        {mv.markets.map((m) => (
          <Badge key={m} variant="outline">
            {m}
          </Badge>
        ))}
      </div>
      <h1 className="mt-3 font-display text-4xl tracking-tight">{mv.canonicalName}</h1>
      <p className="mt-2 text-sm text-muted">Also {mv.aliases.join(", ")}</p>
      <p className="mt-6 text-base leading-relaxed">{mv.description}</p>
      <Sparkline values={mv.sparkline.map((p) => p.value)} className="mt-6 h-16 w-full" />
      <dl className="mt-8 space-y-5">
        <Item k="What changed" v={mv.whatChanged} />
        <Item k="Origin (hypothesis)" v={mv.originHypothesis} />
        <Item k="Dominant meaning" v={mv.meanings.dominant} />
        <Item k="Opposing meaning" v={mv.meanings.opposing} />
        <Item k="Forecast" v={mv.forecast} />
        <Item k="Uncertainty" v={mv.lifecycleUncertainty} />
      </dl>
      <h2 className="mt-8 text-[11px] uppercase tracking-wide text-subtle">Communities</h2>
      <p className="mt-1 text-sm">{mv.communities.join(" · ")}</p>
      <h2 className="mt-6 text-[11px] uppercase tracking-wide text-subtle">Terms</h2>
      <p className="mt-1 text-sm">{mv.terms.join(" · ")}</p>
      <h2 className="mt-6 text-[11px] uppercase tracking-wide text-subtle">Blind spots</h2>
      <ul className="mt-1 list-disc pl-4 text-sm text-muted">
        {mv.blindSpots.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <h2 className="mt-8 font-display text-2xl">This brand's opportunities</h2>
      <ul className="mt-3 space-y-2">
        {linked.map((o) => {
          const s = scoresOf(o);
          return (
            <li key={o.id}>
              <Link to="/opportunities/$id" params={{ id: o.id }} className="text-sm hover:underline">
                {o.recommendedResponse} · P{s.priority} C{s.confidence} · {o.status}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Item({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wide text-subtle">{k}</dt>
      <dd className="mt-1 text-sm leading-relaxed">{v}</dd>
    </div>
  );
}
