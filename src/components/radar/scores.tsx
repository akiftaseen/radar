import { cn } from "@/lib/utils";
import { confidenceLabel, priorityLabel } from "@/lib/scoring";

export function PriorityMeter({
  value,
  size = 56,
  className,
}: {
  value: number;
  size?: number;
  className?: string;
}) {
  const r = 18;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg viewBox="0 0 44 44" className="size-full -rotate-90" aria-hidden="true">
        <circle cx="22" cy="22" r={r} fill="none" stroke="currentColor" className="text-border" strokeWidth="3.5" />
        <circle
          cx="22"
          cy="22"
          r={r}
          fill="none"
          stroke="currentColor"
          className="text-priority"
          strokeWidth="3.5"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute font-mono text-sm tabular text-fg">{value}</span>
    </div>
  );
}

export function ScorePair({
  priority,
  confidence,
  compact = false,
}: {
  priority: number;
  confidence: number;
  compact?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-4", compact && "gap-3")}>
      <div className="flex items-center gap-2">
        <PriorityMeter value={priority} size={compact ? 44 : 56} />
        {!compact && (
          <div className="leading-tight">
            <div className="text-[11px] uppercase tracking-wide text-priority">Priority</div>
            <div className="text-xs text-muted">{priorityLabel(priority)}</div>
          </div>
        )}
      </div>
      <div className="leading-tight">
        <div className="text-[11px] uppercase tracking-wide text-confidence">Confidence</div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-mono text-sm tabular text-fg">{confidence}</span>
          <span className="text-xs text-muted">{confidenceLabel(confidence)}</span>
        </div>
      </div>
    </div>
  );
}

export function Sparkline({
  values,
  className,
}: {
  values: number[];
  className?: string;
}) {
  if (values.length < 2) return null;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = Math.max(1, max - min);
  const w = 120;
  const h = 28;
  const pts = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * w;
      const y = h - ((v - min) / span) * (h - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={cn("text-priority", className)} aria-hidden="true">
      <polyline fill="none" stroke="currentColor" strokeWidth="1.5" points={pts} />
    </svg>
  );
}

export function BarBreakdown({
  items,
}: {
  items: { key: string; label: string; value: number; tone?: "priority" | "confidence" | "danger" | "fg" }[];
}) {
  return (
    <div className="space-y-2">
      {items.map((it) => (
        <div key={it.key}>
          <div className="mb-1 flex justify-between text-xs">
            <span className="text-muted">{it.label}</span>
            <span className="font-mono tabular text-fg">{it.value}</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-surface-3">
            <div
              className={cn(
                "h-full rounded-full",
                it.tone === "danger"
                  ? "bg-danger"
                  : it.tone === "confidence"
                    ? "bg-confidence"
                    : it.tone === "fg"
                      ? "bg-fg"
                      : "bg-priority",
              )}
              style={{ width: `${it.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
