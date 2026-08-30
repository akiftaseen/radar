import { useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Command } from "cmdk";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { MOVEMENTS, OPPORTUNITIES, PRODUCTS } from "@/lib/data";
import { scoresOf } from "@/lib/scoring";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const go = (href: string) => {
    onOpenChange(false);
    setQ("");
    void navigate({ to: href as never });
  };

  const opps = useMemo(() => OPPORTUNITIES.filter((o) => o.status !== "dismissed"), []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0">
        <DialogTitle className="sr-only">Search Radar</DialogTitle>
        <Command className="bg-transparent text-fg" shouldFilter>
          <Command.Input
            value={q}
            onValueChange={setQ}
            placeholder="Search opportunities, movements, products…"
            className="h-12 w-full border-b border-border bg-transparent px-4 text-sm outline-none placeholder:text-subtle"
          />
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
              Nothing matches.
            </Command.Empty>
            <Command.Group heading="Go" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-subtle">
              {[
                ["Radar inbox", "/"],
                ["Cultural map", "/map"],
                ["Campaigns", "/campaigns"],
                ["Brand Brain", "/brand"],
                ["Sources", "/sources"],
                ["Analytics", "/analytics"],
                ["Approvals", "/approvals"],
              ].map(([label, href]) => (
                <Command.Item
                  key={href}
                  value={label}
                  onSelect={() => go(href)}
                  className="flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-surface-2"
                >
                  {label}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group heading="Opportunities" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-subtle">
              {opps.map((o) => {
                const mv = MOVEMENTS.find((m) => m.id === o.movementId);
                const s = scoresOf(o);
                return (
                  <Command.Item
                    key={o.id}
                    value={`${mv?.canonicalName} ${o.observableChange}`}
                    onSelect={() => go(`/opportunities/${o.id}`)}
                    className="flex cursor-pointer items-center justify-between rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-surface-2"
                  >
                    <span>{mv?.canonicalName}</span>
                    <span className="font-mono text-xs text-muted">{s.priority}</span>
                  </Command.Item>
                );
              })}
            </Command.Group>
            <Command.Group heading="Products" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-subtle">
              {PRODUCTS.map((p) => (
                <Command.Item
                  key={p.id}
                  value={p.name}
                  onSelect={() => go("/brand")}
                  className="flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-surface-2"
                >
                  {p.name}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
