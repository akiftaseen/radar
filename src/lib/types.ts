export type ResponseMode =
  | "ignore"
  | "monitor"
  | "learn"
  | "participate"
  | "partner"
  | "launch";

export type OpportunityStatus =
  | "candidate"
  | "surfaced"
  | "viewed"
  | "monitoring"
  | "investigating"
  | "approved"
  | "dismissed"
  | "snoozed"
  | "brief_in_progress"
  | "brief_approved"
  | "activated"
  | "measured"
  | "archived";

export type LifecycleStage =
  | "weak_signal"
  | "emerging"
  | "accelerating"
  | "established"
  | "saturating"
  | "declining"
  | "dormant"
  | "recurrent";

export type ClaimType =
  | "direct_observation"
  | "quantitative_result"
  | "observed_inference"
  | "historical_analogy"
  | "brand_interpretation"
  | "forecast"
  | "recommendation";

export type SourceTier = "A" | "B" | "C";

export type FactDomain =
  | "identity"
  | "voice"
  | "visual"
  | "audience"
  | "products"
  | "campaign_history"
  | "constraints"
  | "competitors"
  | "strategic_priorities"
  | "cultural_permission";

export type FactStatus = "proposed" | "approved" | "rejected" | "superseded" | "expired";

export type DecisionType =
  | "approve"
  | "monitor"
  | "learn"
  | "dismiss"
  | "snooze"
  | "investigate"
  | "request_research";

export interface MovementMetrics {
  M: number;
  A: number;
  P: number;
  N: number;
  S: number;
  X: number;
}

export interface BrandComponents {
  AR: number;
  PR: number;
  BC: number;
  SR: number;
  GR: number;
  CW: number;
  AC: number;
  SU: number;
  R: number;
}

export interface ConfidenceInputs {
  sourceReliability: number;
  independentSupport: number;
  crossSourceCoverage: number;
  measurementCompleteness: number;
  claimAgreement: number;
  brandBrainReadiness: number;
  modelCalibration: number;
  coordinationRisk: number;
}

export interface ScoreExplain {
  definition: string;
  positives: string[];
  penalties: string[];
  coverage: string;
  wouldChange: string;
}

export interface SparkPoint {
  day: string;
  value: number;
}

export interface EvidenceItem {
  id: string;
  role: "representative" | "supporting" | "contradicting" | "contextual";
  sourceType: "x_post" | "article" | "rss" | "brand_site" | "competitor_site" | "manual";
  sourceTier: SourceTier;
  sourceName: string;
  author?: string;
  handle?: string;
  title?: string;
  excerpt: string;
  url: string;
  publishedAt: string;
  observedAt: string;
  independentOrigin: boolean;
  displayAllowed: boolean;
  market?: string;
  whyItMatters: string;
}

export interface Claim {
  id: string;
  text: string;
  type: ClaimType;
  confidence: number;
  supportingIds: string[];
  contradictingIds: string[];
  scope: string;
  limitations: string[];
}

export interface Movement {
  id: string;
  canonicalName: string;
  aliases: string[];
  description: string;
  whatChanged: string;
  originHypothesis: string;
  meanings: { dominant: string; opposing: string };
  communities: string[];
  markets: string[];
  visualCodes: string[];
  terms: string[];
  lifecycle: LifecycleStage;
  lifecycleUncertainty: string;
  metrics: MovementMetrics;
  sparkline: SparkPoint[];
  relatedIds: string[];
  forecast: string;
  blindSpots: string[];
  sensitivity?: string;
}

export interface Opportunity {
  id: string;
  movementId: string;
  status: OpportunityStatus;
  owner: string;
  firstSurfacedAt: string;
  lastMaterialChangeAt: string;
  observableChange: string;
  whyThisBrand: string;
  recommendedResponse: ResponseMode;
  alternativeResponses: ResponseMode[];
  window: { minDays: number; maxDays: number; label: string; confidence: number };
  movement: MovementMetrics;
  brand: BrandComponents;
  confidenceInputs: ConfidenceInputs;
  scoreExplain: Record<string, ScoreExplain>;
  reasonsToAct: string[];
  reasonsNotToAct: string[];
  unknowns: string[];
  productLinks: { productId: string; note: string }[];
  audienceLinks: { segmentId: string; note: string }[];
  strategyLinks: string[];
  competitorWhitespace: {
    score: number;
    statement: string;
    coverage: string;
    observations: { competitorId: string; note: string }[];
  };
  risks: { severity: "info" | "low" | "medium" | "high" | "critical"; text: string }[];
  claims: Claim[];
  evidence: EvidenceItem[];
  coverage: { source: string; status: "healthy" | "partial" | "missing"; note: string }[];
  markets: string[];
  badge?: "new" | "changed" | "triggered";
  watchConditions?: string[];
}

export interface BrandFact {
  id: string;
  domain: FactDomain;
  predicate: string;
  label: string;
  value: string;
  source: string;
  confidence: number;
  status: FactStatus;
  sensitivity: "internal" | "restricted";
  effectiveFrom: string;
}

export interface Product {
  id: string;
  name: string;
  family: string;
  description: string;
  priceBand: string;
  markets: string[];
  availability: "in_stock" | "limited" | "upcoming" | "retired";
  launchAt?: string;
  priority: "core" | "capsule" | "explore";
  claims: string[];
}

export interface Competitor {
  id: string;
  name: string;
  domains: string[];
  handles: string[];
  category: string;
  positioning: string;
  lastScanAt: string;
  observed: string;
}

export interface AudienceSegment {
  id: string;
  name: string;
  description: string;
  needs: string[];
  interests: string[];
  communities: string[];
  markets: string[];
}

export interface Connector {
  id: string;
  name: string;
  type: string;
  tier: SourceTier;
  status: "healthy" | "degraded" | "paused" | "not_connected";
  rights: string;
  lastSyncAt: string | null;
  nextSyncAt: string | null;
  records: number;
  spendLabel: string;
  note: string;
}

export interface Arena {
  id: string;
  name: string;
  topics: string[];
  markets: string[];
  cadence: string;
  sensitivity: "standard" | "elevated";
  active: boolean;
}

export interface Territory {
  id: string;
  name: string;
  organizingIdea: string;
  strategicMechanism: string;
  audienceTension: string;
  brandRole: string;
  narrative: string;
  heroExecution: string;
  participationModel: string;
  visualPrinciples: string[];
  copyPrinciples: string[];
  channelBehaviors: string[];
  ownability: string;
  feasibility: "high" | "medium" | "low";
  rights: string[];
  risks: string[];
  differenceDimensions: string[];
  critic: Record<string, { score: number; note: string }>;
  palette: string[];
}

export interface StrategyFoundation {
  culturalInsight: string;
  humanTension: string;
  brandPermission: string;
  brandRole: string;
  proposition: string;
  desiredResponse: string;
  reasonsToBelieve: string[];
  nonGoals: string[];
  successMetrics: string[];
  assumptions: string[];
  objective: string;
}

export interface Brief {
  executive: string;
  sections: { title: string; body: string }[];
}

export interface Campaign {
  id: string;
  opportunityId: string;
  name: string;
  responseMode: ResponseMode;
  status:
    | "setup"
    | "strategy_draft"
    | "strategy_approved"
    | "territories_ready"
    | "territory_selected"
    | "brief_draft"
    | "brief_approved"
    | "activated"
    | "measured";
  owner: string;
  objective: string;
  strategy?: StrategyFoundation;
  territories: Territory[];
  selectedTerritoryId?: string;
  brief?: Brief;
  outcomes?: {
    thesis: "supported" | "mixed" | "not_supported" | "insufficient_data";
    qualitative: string;
    metrics: { label: string; value: string; baseline?: string }[];
  };
  createdAt: string;
}

export interface DecisionRecord {
  id: string;
  opportunityId: string;
  type: DecisionType;
  reasonCode?: string;
  comment?: string;
  actor: string;
  createdAt: string;
}

export interface Monitor {
  id: string;
  opportunityId: string;
  conditions: string[];
  deadline: string;
  status: "active" | "triggered" | "cancelled";
}

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  href: string;
  at: string;
  read: boolean;
  kind: "opportunity" | "monitor" | "approval" | "source";
}
