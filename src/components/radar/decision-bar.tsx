import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/input";
import { MOVEMENTS } from "@/lib/data";
import { DISMISS_REASONS } from "@/lib/scoring";
import { useRadarStore } from "@/lib/store";
import type { Opportunity, OpportunityStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

export function DecisionBar({ opportunity: o }: { opportunity: Opportunity }) {
  const navigate = useNavigate();
  const recordDecision = useRadarStore((s) => s.recordDecision);
  const ensureCampaign = useRadarStore((s) => s.ensureCampaign);
  const addMonitor = useRadarStore((s) => s.addMonitor);
  const [dismissOpen, setDismissOpen] = useState(false);
  const [monitorOpen, setMonitorOpen] = useState(false);
  const [reason, setReason] = useState<string>("off_brand");
  const [note, setNote] = useState("");
  const [conditions, setConditions] = useState<string[]>(
    o.watchConditions ?? [
      "Confidence reaches 65",
      "A second independent source family confirms it",
      "Competitor action appears in monitored sources",
    ],
  );
  const [deadline, setDeadline] = useState("2026-09-20");

  const mv = MOVEMENTS.find((m) => m.id === o.movementId);
  const locked = o.status === "dismissed" || o.status === "approved" || o.status === "brief_approved";

  const decide = (status: OpportunityStatus, type: "approve" | "learn" | "investigate" | "snooze") => {
    recordDecision({
      opportunityId: o.id,
      type,
      status,
      response: type === "approve" ? o.recommendedResponse : undefined,
    });
    if (type === "approve") {
      const id = ensureCampaign(
        o.id,
        mv ? `${mv.canonicalName}` : "Campaign",
        o.recommendedResponse,
      );
      toast.success("Opportunity approved. Evidence snapshot frozen.");
      if (["launch", "partner", "participate"].includes(o.recommendedResponse)) {
        void navigate({ to: "/campaigns/$id", params: { id } });
        return;
      }
    } else {
      toast.success("Decision recorded.");
    }
  };

  return (
    <>
      <div className="sticky bottom-14 z-20 border-t border-border bg-bg/95 p-3 lg:bottom-0">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-2">
          <Button
            size="sm"
            disabled={locked}
            onClick={() => decide("approved", "approve")}
          >
            Approve {o.recommendedResponse}
          </Button>
          <Button size="sm" variant="secondary" disabled={locked} onClick={() => setMonitorOpen(true)}>
            Monitor
          </Button>
          <Button
            size="sm"
            variant="secondary"
            disabled={locked}
            onClick={() => decide("investigating", "learn")}
          >
            Learn
          </Button>
          <Button
            size="sm"
            variant="ghost"
            disabled={locked}
            onClick={() => decide("investigating", "investigate")}
          >
            Investigate
          </Button>
          <Button
            size="sm"
            variant="ghost"
            disabled={locked}
            onClick={() => decide("snoozed", "snooze")}
          >
            Snooze
          </Button>
          <Button size="sm" variant="ghost" disabled={o.status === "dismissed"} onClick={() => setDismissOpen(true)}>
            Dismiss
          </Button>
        </div>
      </div>

      <Dialog open={dismissOpen} onOpenChange={setDismissOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dismiss with a reason</DialogTitle>
            <DialogDescription>
              This stays searchable and suppresses near-duplicates. Hard brand facts are not created from a single dismissal.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap gap-2">
            {DISMISS_REASONS.map((r) => (
              <button
                key={r.code}
                type="button"
                onClick={() => setReason(r.code)}
                className={cn(
                  "h-8 rounded-full px-3 text-xs",
                  reason === r.code ? "bg-fg text-bg" : "border border-border text-muted",
                )}
              >
                {r.label}
              </button>
            ))}
          </div>
          <Textarea
            placeholder="Optional nuance"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mt-3"
          />
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setDismissOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                recordDecision({
                  opportunityId: o.id,
                  type: "dismiss",
                  status: "dismissed",
                  reasonCode: reason,
                  comment: note,
                });
                setDismissOpen(false);
                toast.success("Dismissed. Ranking preference updated for this workspace.");
              }}
            >
              Confirm dismiss
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={monitorOpen} onOpenChange={setMonitorOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Watch conditions</DialogTitle>
            <DialogDescription>
              Radar stays quiet unless a condition changes materially. Triggered items return with a delta.
            </DialogDescription>
          </DialogHeader>
          <ul className="space-y-2">
            {conditions.map((c, i) => (
              <li key={i}>
                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="mt-1"
                    defaultChecked
                    onChange={(e) => {
                      if (!e.target.checked) setConditions((xs) => xs.filter((x) => x !== c));
                    }}
                  />
                  <span>{c}</span>
                </label>
              </li>
            ))}
          </ul>
          <label className="mt-3 block text-xs text-muted">
            Review by
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="mt-1 block h-10 w-full rounded-sm border border-border bg-surface px-3 text-sm text-fg"
            />
          </label>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setMonitorOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                addMonitor(o.id, conditions, deadline);
                setMonitorOpen(false);
                toast.success("Monitor set.");
              }}
            >
              Save monitor
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
