import { cn } from "@/lib/utils";

export function RadarMark({ className, spinning = true }: { className?: string; spinning?: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("text-fg", className)}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />
      <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="16" cy="16" r="4" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="16" cy="16" r="1.4" fill="currentColor" />
      <g className={spinning ? "radar-sweep" : undefined} style={{ transformOrigin: "16px 16px" }}>
        <path d="M16 16 L16 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path
          d="M16 16 L26 8"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.35"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export function RadarWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <RadarMark className="size-7" />
      {!compact && (
        <span className="font-display text-xl leading-none tracking-tight text-fg">Radar</span>
      )}
    </div>
  );
}
