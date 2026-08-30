import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CAMPAIGNS, NOTIFICATIONS, OPPORTUNITIES } from "@/lib/data";
import { FOOTBALL_BRIEF, FOOTBALL_STRATEGY, FOOTBALL_TERRITORIES } from "@/lib/data/work";
import type {
  Campaign,
  DecisionRecord,
  DecisionType,
  Monitor,
  NotificationItem,
  OpportunityStatus,
  ResponseMode,
} from "@/lib/types";

export interface OpportunityOverlay {
  status?: OpportunityStatus;
  recommendedResponse?: ResponseMode;
  viewed?: boolean;
}

interface RadarState {
  hydrated: boolean;
  setHydrated: (v: boolean) => void;
  overlays: Record<string, OpportunityOverlay>;
  decisions: DecisionRecord[];
  monitors: Monitor[];
  campaigns: Campaign[];
  notifications: NotificationItem[];
  factStatus: Record<string, "approved" | "rejected" | "proposed">;
  selectedTerritory: Record<string, string>;
  markViewed: (opportunityId: string) => void;
  recordDecision: (input: {
    opportunityId: string;
    type: DecisionType;
    reasonCode?: string;
    comment?: string;
    status: OpportunityStatus;
    response?: ResponseMode;
  }) => void;
  addMonitor: (opportunityId: string, conditions: string[], deadline: string) => void;
  cancelMonitor: (id: string) => void;
  markNotificationRead: (id: string) => void;
  setFactStatus: (id: string, status: "approved" | "rejected") => void;
  ensureCampaign: (opportunityId: string, name: string, mode: ResponseMode) => string;
  setCampaignStatus: (id: string, status: Campaign["status"]) => void;
  selectTerritory: (campaignId: string, territoryId: string) => void;
  approveStrategy: (campaignId: string) => void;
  approveBrief: (campaignId: string) => void;
  attachGenerated: (
    campaignId: string,
    payload: Partial<Pick<Campaign, "strategy" | "territories" | "brief" | "status">>,
  ) => void;
  reset: () => void;
}

const initialCampaigns: Campaign[] = CAMPAIGNS.map((c) => ({ ...c }));

export const useRadarStore = create<RadarState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      setHydrated: (v) => set({ hydrated: v }),
      overlays: Object.fromEntries(
        OPPORTUNITIES.filter((o) => o.status === "dismissed" || o.status === "monitoring" || o.status === "viewed").map(
          (o) => [o.id, { status: o.status, viewed: o.status !== "surfaced" }],
        ),
      ),
      decisions: [
        {
          id: "dec_labubu",
          opportunityId: "opp_labubu",
          type: "dismiss",
          reasonCode: "off_brand",
          comment: "Saturating, child-coded IP, no product.",
          actor: "Maya Chen",
          createdAt: "2026-08-12T09:12:00Z",
        },
      ],
      monitors: [
        {
          id: "mon_office",
          opportunityId: "opp_office",
          conditions: [
            "A second independent source family confirms it",
            "Confidence reaches 65",
            "Evidence appears outside London",
          ],
          deadline: "2026-09-30",
          status: "active",
        },
        {
          id: "mon_workwear",
          opportunityId: "opp_workwear",
          conditions: ["A second independent publication confirms the pairing"],
          deadline: "2026-09-15",
          status: "triggered",
        },
      ],
      campaigns: initialCampaigns,
      notifications: NOTIFICATIONS,
      factStatus: {},
      selectedTerritory: {},
      markViewed: (opportunityId) =>
        set((s) => ({
          overlays: {
            ...s.overlays,
            [opportunityId]: { ...s.overlays[opportunityId], viewed: true },
          },
        })),
      recordDecision: ({ opportunityId, type, reasonCode, comment, status, response }) => {
        const rec: DecisionRecord = {
          id: `dec_${Date.now()}`,
          opportunityId,
          type,
          reasonCode,
          comment,
          actor: "Maya Chen",
          createdAt: new Date().toISOString(),
        };
        set((s) => ({
          decisions: [rec, ...s.decisions],
          overlays: {
            ...s.overlays,
            [opportunityId]: {
              ...s.overlays[opportunityId],
              status,
              recommendedResponse: response ?? s.overlays[opportunityId]?.recommendedResponse,
              viewed: true,
            },
          },
        }));
      },
      addMonitor: (opportunityId, conditions, deadline) => {
        const mon: Monitor = {
          id: `mon_${Date.now()}`,
          opportunityId,
          conditions,
          deadline,
          status: "active",
        };
        set((s) => ({
          monitors: [mon, ...s.monitors.filter((m) => m.opportunityId !== opportunityId)],
        }));
        get().recordDecision({
          opportunityId,
          type: "monitor",
          status: "monitoring",
          comment: conditions.join("; "),
        });
      },
      cancelMonitor: (id) =>
        set((s) => ({
          monitors: s.monitors.map((m) => (m.id === id ? { ...m, status: "cancelled" } : m)),
        })),
      markNotificationRead: (id) =>
        set((s) => ({
          notifications: s.notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
        })),
      setFactStatus: (id, status) =>
        set((s) => ({ factStatus: { ...s.factStatus, [id]: status } })),
      ensureCampaign: (opportunityId, name, mode) => {
        const existing = get().campaigns.find((c) => c.opportunityId === opportunityId);
        if (existing) return existing.id;
        const id = `cam_${opportunityId.replace("opp_", "")}`;
        const seeded =
          opportunityId === "opp_football"
            ? {
                strategy: FOOTBALL_STRATEGY,
                territories: FOOTBALL_TERRITORIES,
                status: "territories_ready" as const,
              }
            : { territories: [] as Campaign["territories"], status: "setup" as const };
        const campaign: Campaign = {
          id,
          opportunityId,
          name,
          responseMode: mode,
          owner: "Maya Chen",
          objective: name,
          createdAt: new Date().toISOString(),
          ...seeded,
        };
        set((s) => ({ campaigns: [campaign, ...s.campaigns] }));
        return id;
      },
      setCampaignStatus: (id, status) =>
        set((s) => ({
          campaigns: s.campaigns.map((c) => (c.id === id ? { ...c, status } : c)),
        })),
      selectTerritory: (campaignId, territoryId) =>
        set((s) => ({
          selectedTerritory: { ...s.selectedTerritory, [campaignId]: territoryId },
          campaigns: s.campaigns.map((c) =>
            c.id === campaignId
              ? {
                  ...c,
                  selectedTerritoryId: territoryId,
                  status: "territory_selected",
                  brief: c.opportunityId === "opp_football" ? FOOTBALL_BRIEF : c.brief,
                }
              : c,
          ),
        })),
      approveStrategy: (campaignId) =>
        set((s) => ({
          campaigns: s.campaigns.map((c) =>
            c.id === campaignId
              ? {
                  ...c,
                  status: c.territories.length ? "territories_ready" : "strategy_approved",
                }
              : c,
          ),
        })),
      approveBrief: (campaignId) =>
        set((s) => ({
          campaigns: s.campaigns.map((c) =>
            c.id === campaignId ? { ...c, status: "brief_approved" } : c,
          ),
        })),
      attachGenerated: (campaignId, payload) =>
        set((s) => ({
          campaigns: s.campaigns.map((c) => (c.id === campaignId ? { ...c, ...payload } : c)),
        })),
      reset: () =>
        set({
          overlays: Object.fromEntries(
            OPPORTUNITIES.filter(
              (o) => o.status === "dismissed" || o.status === "monitoring" || o.status === "viewed",
            ).map((o) => [o.id, { status: o.status, viewed: true }]),
          ),
          decisions: [
            {
              id: "dec_labubu",
              opportunityId: "opp_labubu",
              type: "dismiss",
              reasonCode: "off_brand",
              comment: "Saturating, child-coded IP, no product.",
              actor: "Maya Chen",
              createdAt: "2026-08-12T09:12:00Z",
            },
          ],
          monitors: [
            {
              id: "mon_office",
              opportunityId: "opp_office",
              conditions: [
                "A second independent source family confirms it",
                "Confidence reaches 65",
                "Evidence appears outside London",
              ],
              deadline: "2026-09-30",
              status: "active",
            },
          ],
          campaigns: CAMPAIGNS.map((c) => ({ ...c })),
          notifications: NOTIFICATIONS,
          factStatus: {},
          selectedTerritory: {},
        }),
    }),
    {
      name: "radar-aether-v1",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (s) => ({
        overlays: s.overlays,
        decisions: s.decisions,
        monitors: s.monitors,
        campaigns: s.campaigns,
        notifications: s.notifications,
        factStatus: s.factStatus,
        selectedTerritory: s.selectedTerritory,
      }),
    },
  ),
);

export function useOpportunityView(id: string) {
  const seed = OPPORTUNITIES.find((o) => o.id === id);
  const overlay = useRadarStore((s) => s.overlays[id]);
  if (!seed) return undefined;
  return {
    ...seed,
    status: overlay?.status ?? seed.status,
    recommendedResponse: overlay?.recommendedResponse ?? seed.recommendedResponse,
    viewed: overlay?.viewed ?? seed.status !== "surfaced",
  };
}
