import { clamp } from "./utils";
import type {
  BrandComponents,
  ConfidenceInputs,
  MovementMetrics,
  Opportunity,
  ResponseMode,
} from "./types";

export function computeTiming(m: MovementMetrics) {
  return 0.45 * m.M + 0.25 * m.A + 0.15 * m.P + 0.15 * m.N;
}

export function computeRelevance(b: BrandComponents) {
  return 0.25 * b.AR + 0.25 * b.PR + 0.2 * b.BC + 0.2 * b.SR + 0.1 * b.GR;
}

export function computePriority(m: MovementMetrics, b: BrandComponents) {
  const timing = computeTiming(m);
  const relevance = computeRelevance(b);
  const opportunity =
    0.35 * relevance + 0.2 * timing + 0.15 * b.CW + 0.15 * b.AC + 0.15 * b.SU;
  const riskMultiplier = 1 - 0.6 * (b.R / 100);
  return Math.round(clamp(opportunity * riskMultiplier, 0, 100));
}

export function computeConfidence(c: ConfidenceInputs) {
  const raw =
    0.22 * c.sourceReliability +
    0.18 * c.independentSupport +
    0.15 * c.crossSourceCoverage +
    0.12 * c.measurementCompleteness +
    0.12 * c.claimAgreement +
    0.11 * c.brandBrainReadiness +
    0.1 * c.modelCalibration;
  return Math.round(clamp(100 * raw * (1 - 0.5 * c.coordinationRisk), 0, 100));
}

export function priorityBand(priority: number) {
  if (priority >= 80) return "act_now" as const;
  if (priority >= 65) return "investigate" as const;
  if (priority >= 50) return "monitor_learn" as const;
  return "low" as const;
}

export function priorityLabel(priority: number) {
  const b = priorityBand(priority);
  if (b === "act_now") return "Act now";
  if (b === "investigate") return "Investigate";
  if (b === "monitor_learn") return "Monitor / learn";
  return "Low priority";
}

export function confidenceBand(confidence: number) {
  if (confidence >= 80) return "high" as const;
  if (confidence >= 60) return "medium" as const;
  if (confidence >= 40) return "low" as const;
  return "speculative" as const;
}

export function confidenceLabel(confidence: number) {
  const b = confidenceBand(confidence);
  if (b === "high") return "High";
  if (b === "medium") return "Medium";
  if (b === "low") return "Low";
  return "Speculative";
}

export function scoresOf(o: Opportunity) {
  const priority = computePriority(o.movement, o.brand);
  const confidence = computeConfidence(o.confidenceInputs);
  return {
    priority,
    confidence,
    timing: Math.round(computeTiming(o.movement)),
    relevance: Math.round(computeRelevance(o.brand)),
    band: priorityBand(priority),
    confBand: confidenceBand(confidence),
    speculative: confidence < 40,
  };
}

export const RESPONSE_COPY: Record<ResponseMode, { label: string; hint: string }> = {
  ignore: { label: "Ignore", hint: "Not credible, relevant, safe, or actionable" },
  monitor: { label: "Monitor", hint: "Interesting but premature or uncertain" },
  learn: { label: "Learn", hint: "Insight without public participation" },
  participate: { label: "Participate", hint: "Contribute credibly through existing channels" },
  partner: { label: "Partner", hint: "Credibility should come through a collaborator" },
  launch: { label: "Launch", hint: "Owned campaign, activation, or product action" },
};

export const LIFECYCLE_COPY: Record<string, string> = {
  weak_signal: "Weak signal",
  emerging: "Emerging",
  accelerating: "Accelerating",
  established: "Established",
  saturating: "Saturating",
  declining: "Declining",
  dormant: "Dormant",
  recurrent: "Recurrent",
};

export const DISMISS_REASONS = [
  { code: "irrelevant_audience", label: "Irrelevant audience" },
  { code: "off_brand", label: "Off-brand" },
  { code: "weak_evidence", label: "Weak evidence" },
  { code: "too_late", label: "Too late" },
  { code: "not_actionable", label: "Not actionable" },
  { code: "already_planned", label: "Already planned" },
  { code: "rights_risk", label: "Rights / risk" },
  { code: "duplicate", label: "Duplicate" },
  { code: "poor_interpretation", label: "Poor interpretation" },
  { code: "other", label: "Other" },
] as const;
