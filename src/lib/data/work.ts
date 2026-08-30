import type { Brief, Campaign, NotificationItem, StrategyFoundation, Territory } from "@/lib/types";

const CRITIC = (scores: Record<string, [number, string]>) =>
  Object.fromEntries(
    Object.entries(scores).map(([k, [score, note]]) => [k, { score, note }]),
  );

export const FOOTBALL_STRATEGY: StrategyFoundation = {
  objective: "Make the September jersey capsule feel inevitable for existing customers — a civilian second kit, not a replica and not a costume.",
  culturalInsight:
    "The interesting change is not 'football is fashionable'. It is that the wash and the unmarked silhouette have become weekday clothing. Fandom is optional; the feeling of a second kit is not.",
  humanTension:
    "People want to belong to a side without joining a club — and they can smell it when a brand borrows the chant without the history.",
  brandPermission:
    "Product permission is real (unmarked oversized jersey, merino bridge). Cultural permission is thin. Aether may speak as a maker of civilian kits, not as a terrace voice.",
  brandRole: "Furnish the second kit. Do not narrate the match.",
  proposition: "A second kit for days that are not a match.",
  desiredResponse: "Existing customers recognise the capsule as theirs. They do not need a glossary. They do not feel dressed up.",
  reasonsToBelieve: [
    "The product has no club marks — the constraint is the idea.",
    "Merino crew already lives in the same silhouette family.",
    "Voice is dry enough to refuse slang.",
  ],
  nonGoals: [
    "Do not acquire a football fanbase.",
    "Do not use terrace slang, chants, or club colourways.",
    "Do not make the graphic tee the hero.",
    "Do not explain quiet luxury again on the way past.",
  ],
  successMetrics: [
    "Capsule full-price mix held",
    "Share of existing customers in jersey orders",
    "Qualitative: 'this is ours' vs 'this is a kit'",
    "Zero rights flags in comments",
  ],
  assumptions: [
    "TikTok saturation is not already past the useful window.",
    "US customers will accept a GB-led civilian reading.",
  ],
};

export const FOOTBALL_TERRITORIES: Territory[] = [
  {
    id: "ter_away",
    name: "Away Is a State of Mind",
    organizingIdea: "Away is not a fixture. It is how the clothes should feel on an ordinary Tuesday.",
    strategicMechanism: "identity_reframing",
    audienceTension: "Belonging without a membership.",
    brandRole: "Name the feeling, not the club.",
    narrative:
      "A day that is not a match, in a city that is not a stadium. The kit is washed, unmarked, and going to the shop.",
    heroExecution:
      "A short film of one person leaving the house in the washed knit — bus, rain, errand, late light. No crowd, no pitch, no chant. Title card: Away.",
    participationModel: "owned_content",
    visualPrinciples: [
      "Daylight and rain only",
      "No stadium geometry",
      "Clay and peat, faded primary as a stain not a stripe",
      "Unstyled posture, unfinished hem in frame",
    ],
    copyPrinciples: [
      "Short. No slang.",
      "Headline behaviour: one concrete sentence.",
      "Never 'community', never 'iconic', never a chant.",
    ],
    channelBehaviors: [
      "Site: film + capsule, merino as the bridge product",
      "X: stills with weather, not slogans",
      "Email: existing customers first, 48 hours before public",
    ],
    ownability: "The word 'away' as civilian, tied to unmarked product. Hard for a club-adjacent brand to take without looking like a fixture list.",
    feasibility: "high",
    rights: ["No club marks", "No crowd footage that implies a specific stadium"],
    risks: ["'Away' still reads as football to some — keep the images civilian enough to hold it."],
    differenceDimensions: ["strategic_mechanism", "hero_execution", "emotional_register"],
    palette: ["#c17f59", "#3f3a32", "#d8cfc2", "#1c1a17"],
    critic: CRITIC({
      evidence: [5, "Stays inside the civilian reading of the evidence."],
      brand: [5, "Could not be used unchanged by Represent or COS."],
      permission: [4, "Does not extract terrace voice."],
      strategy: [5, "Follows the approved proposition."],
      distinctiveness: [4, "Film-of-an-errand is familiar; the constraint makes it specific."],
      feasibility: [5, "Shootable in the window with existing art direction."],
      channel: [4, "Email-first is adapted; social stills must not become slogans."],
      safety: [5, "No marks, no players."],
    }),
  },
  {
    id: "ter_second",
    name: "Second Kit",
    organizingIdea: "Every life needs a second kit — the clothes that can take a second shift without becoming a costume.",
    strategicMechanism: "product_as_uniform",
    audienceTension: "One outfit that survives weather, transit, and evening.",
    brandRole: "Kit manufacturer for civilian days.",
    narrative:
      "A kit list with no club: washed jersey, merino if you won't wear a jersey, loafer that will scuff. Numbers optional. Names forbidden.",
    heroExecution:
      "A kit-list print piece and site module: exploded garment diagrams, care instructions, no lifestyle models. Feels like a technical sheet that wandered out of a changing room.",
    participationModel: "owned_content",
    visualPrinciples: [
      "Diagram, not lookbook",
      "Type as if for a kit sheet, not a fashion title",
      "Faded number as a texture, never a real squad number",
    ],
    copyPrinciples: ["Inventory language", "Sizes, cloth, wash", "No poetry"],
    channelBehaviors: [
      "Site: kit-list PDP",
      "Print: small run in-store and to existing customers",
      "X: one garment, one fact",
    ],
    ownability: "The kit-list format plus unmarked product. Represent cannot do 'no names' without dropping their whole register.",
    feasibility: "high",
    rights: ["Invented numbers only, never a real squad"],
    risks: ["Can look like a catalogue if the diagrams are too clean."],
    differenceDimensions: ["creative_mechanism", "narrative_perspective", "hero_execution"],
    palette: ["#e8e4dc", "#2a2722", "#7a9a7a", "#c17f59"],
    critic: CRITIC({
      evidence: [4, "Less cultural, more product — still faithful."],
      brand: [5, "Maker voice, not fan voice."],
      permission: [5, "No community extraction."],
      strategy: [4, "Serves the capsule; slightly thinner on belonging."],
      distinctiveness: [5, "Technical sheet as campaign is not the category default."],
      feasibility: [5, "Fast to produce."],
      channel: [5, "Format changes by channel."],
      safety: [4, "Fake numbers must stay fake."],
    }),
  },
  {
    id: "ter_whistle",
    name: "After the Whistle",
    organizingIdea: "The interesting clothes start when the match ends — give the microphone to the people who already dress this way.",
    strategicMechanism: "community_hosting",
    audienceTension: "Brands talking over the people who got there first.",
    brandRole: "Host and cloth, not narrator.",
    narrative:
      "Three independent football-fashion editors wear the unmarked kit after a match they attended as themselves. Aether does not explain terrace culture.",
    heroExecution:
      "Partnered portraits and notes by named editors. Aether's line is the cloth credit. Theirs is the caption.",
    participationModel: "creator_collaboration",
    visualPrinciples: [
      "Their locations, their light",
      "No brand studio",
      "Captions in their syntax, not rewritten into voice",
    ],
    copyPrinciples: ["Credit first", "Aether copy only on product and care", "Do not 'translate' them"],
    channelBehaviors: [
      "Their channels carry the work",
      "Aether site: hosted notes, not a campaign film",
      "No duet-style brand commentary",
    ],
    ownability: "The restraint. Most brands cannot resist the voiceover.",
    feasibility: "medium",
    rights: ["Named partners must be contracted", "No club IP in their frames either"],
    risks: [
      "Partners may refuse if the brand looks like it is buying terrace credibility.",
      "Lead time may eat the 1–3 week window.",
    ],
    differenceDimensions: ["participation_model", "brand_role", "channel_behavior"],
    palette: ["#1c1a17", "#9a9488", "#c17f59", "#f2efe8"],
    critic: CRITIC({
      evidence: [5, "Answers the permission gap in the dossier."],
      brand: [4, "Host role is on-brand; depends on partner choice."],
      permission: [5, "Value flows back."],
      strategy: [4, "May miss the existing-customer job if it lives only on their channels."],
      distinctiveness: [4, "Creator hosting is common; the no-voiceover rule is not."],
      feasibility: [3, "Window is tight for contracting."],
      channel: [4, "Genuinely different channel behaviour."],
      safety: [3, "Partners' frames may introduce marks — needs a stills review."],
    }),
  },
];

export const FOOTBALL_BRIEF: Brief = {
  executive:
    "Launch the September jersey capsule as a civilian second kit. Do not narrate football. Do not use marks, slang, or stadiums. Existing customers first. Hero the washed knit, bridge with merino, hold the graphic tee back from the poster.",
  sections: [
    {
      title: "Cultural opportunity",
      body: "Distressed football aesthetics are moving from match-day into weekday clothing in GB. The useful reading for Aether is unmarked, washed, civilian — not fandom. Evidence packet frozen at opportunity version 1. Coverage gap: TikTok.",
    },
    {
      title: "Audience and tension",
      body: "City walkers 24–34 who already buy Aether. Tension: belonging without a membership; they can smell a borrowed chant.",
    },
    {
      title: "Brand role, permission, proposition",
      body: "Role: furnish the second kit. Permission: product yes, terrace history no. Proposition: a second kit for days that are not a match.",
    },
    {
      title: "Objective, behaviour, non-goals",
      body: "Objective: capsule feels inevitable for existing customers. Behaviour: they buy without feeling dressed up. Non-goals: fan acquisition, slang, graphic-tee hero, quiet-luxury manifesto.",
    },
    {
      title: "Selected territory",
      body: "Away Is a State of Mind. Away as a civilian feeling. Film of an errand in the rain. No pitch.",
    },
    {
      title: "Narrative and messaging",
      body: "Headline behaviour: one concrete sentence. Supporting: cloth, wash, care. CTA: existing-customer early access. Vocabulary: away, wash, second kit, unmarked. Prohibited: community, iconic, drop, chant, club names.",
    },
    {
      title: "Visual system",
      body: "Daylight and rain. Bone, peat, oxide, faded clay. Instrument of weather, not studio fog. No stadium geometry. Unstyled posture. Accessibility: captions on film, no colour-only meaning.",
    },
    {
      title: "Copy system",
      body: "Dry, precise, adult. Witty allowed; no sarcasm at the customer. Reading level: plain.",
    },
    {
      title: "Channel plan",
      body: "Email existing customers 48h early. Site film + kit module. X stills with weather. No paid until organic comments are clean of rights flags.",
    },
    {
      title: "Hero asset",
      body: "90–120s film, one protagonist, one washed knit, one city, rain preferred. Title card: Away. End card: cloth credit and repair note.",
    },
    {
      title: "Content concepts",
      body: "1) Film. 2) Still sequence of the wash in daylight. 3) Merino as the 'if not a jersey' bridge. 4) Care/repair coda.",
    },
    {
      title: "Creator / partner",
      body: "Optional later: After the Whistle partners. Not required for this territory. If used, they keep the caption.",
    },
    {
      title: "Landing / e-commerce",
      body: "Capsule PDP with kit-list facts. Merino cross-sell. Graphic tee not in the first viewport.",
    },
    {
      title: "Production",
      body: "One-day GB shoot. Existing art-direction rules. Owner: Maya. Repair note must be operationally true.",
    },
    {
      title: "Timeline",
      body: "Approve brief this week. Shoot within 7 days. Email 48h before 8 September launch.",
    },
    {
      title: "Measurement",
      body: "Full-price mix, existing-customer share, qualitative 'ours' vs 'kit', zero rights flags. Learning: did the civilian reading hold in comments?",
    },
    {
      title: "Risk checklist",
      body: "No crests, kits, players, league type, stadiums, chants. Stills review before publish. TikTok saturation remains an unknown — do not claim we are early on visual platforms.",
    },
    {
      title: "Sources and limitations",
      body: "Opportunity opp_football, movement mv_football, Brand Brain v17. Sources: X, Season Notes, High-Low Dispatch, competitor sites. Not covered: TikTok, Instagram, Google Trends. Forecasts are ranges, not dates.",
    },
  ],
};

export const CAMPAIGNS: Campaign[] = [
  {
    id: "cam_jersey",
    opportunityId: "opp_football",
    name: "Second kit — September jersey",
    responseMode: "launch",
    status: "territories_ready",
    owner: "Maya Chen",
    objective: FOOTBALL_STRATEGY.objective,
    strategy: FOOTBALL_STRATEGY,
    territories: FOOTBALL_TERRITORIES,
    createdAt: "2026-08-29T12:00:00Z",
  },
  {
    id: "cam_winter",
    opportunityId: "opp_quiet",
    name: "North Light — Winter 25",
    responseMode: "launch",
    status: "measured",
    owner: "Maya Chen",
    objective: "State a lived-in quiet against beige-core.",
    strategy: {
      objective: "State a lived-in quiet against beige-core.",
      culturalInsight: "Quiet luxury was becoming a catalogue.",
      humanTension: "Wanting understatement without looking like a moodboard.",
      brandPermission: "High — this is home ground.",
      brandRole: "Show weather, not wealth.",
      proposition: "Quiet, after the weather.",
      desiredResponse: "Recognition from existing customers.",
      reasonsToBelieve: ["Art direction already weather-first"],
      nonGoals: ["New-customer acquisition as primary"],
      successMetrics: ["Saves", "Existing-customer rate"],
      assumptions: ["The audience did not already believe us"],
    },
    territories: [],
    selectedTerritoryId: "ter_historic",
    brief: {
      executive: "Winter 25. Weather as the stylist. Measured.",
      sections: [],
    },
    outcomes: {
      thesis: "mixed",
      qualitative:
        "Existing customers already believed the thesis. Strong saves, weak new-customer. We explained ourselves to ourselves. Do not repeat as a manifesto; use weather as a given.",
      metrics: [
        { label: "Email save rate", value: "4.8%", baseline: "2.1%" },
        { label: "New-customer share", value: "11%", baseline: "19%" },
        { label: "Full-price mix", value: "held", baseline: "held" },
      ],
    },
    createdAt: "2025-11-02T00:00:00Z",
  },
];

export const NOTIFICATIONS: NotificationItem[] = [
  {
    id: "nt1",
    title: "Act now — Distressed football aesthetics",
    body: "Priority 82 · Confidence 69 · capsule launches 8 September",
    href: "/opportunities/opp_football",
    at: "2026-08-30T04:12:00Z",
    read: false,
    kind: "opportunity",
  },
  {
    id: "nt2",
    title: "Monitor triggered — Heritage workwear",
    body: "Second independent publication used 'city chore' this week.",
    href: "/opportunities/opp_workwear",
    at: "2026-08-30T05:00:00Z",
    read: false,
    kind: "monitor",
  },
  {
    id: "nt3",
    title: "Territories ready for review",
    body: "Second kit — September jersey. Three distinct territories.",
    href: "/campaigns/cam_jersey",
    at: "2026-08-29T16:40:00Z",
    read: true,
    kind: "approval",
  },
  {
    id: "nt4",
    title: "TikTok remains unlicensed",
    body: "Saturation claims on visual movements will stay caveated.",
    href: "/sources",
    at: "2026-08-29T08:00:00Z",
    read: true,
    kind: "source",
  },
];

export const ANALYTICS = {
  weeks: [
    { week: "W1", qoar: 18, lowValue: 41, decisionMin: 22 },
    { week: "W2", qoar: 24, lowValue: 36, decisionMin: 18 },
    { week: "W3", qoar: 29, lowValue: 31, decisionMin: 16 },
    { week: "W4", qoar: 34, lowValue: 27, decisionMin: 14 },
    { week: "W5", qoar: 31, lowValue: 24, decisionMin: 13 },
    { week: "W6", qoar: 38, lowValue: 22, decisionMin: 12 },
  ],
  responses: [
    { name: "Launch", value: 3 },
    { name: "Partner", value: 2 },
    { name: "Participate", value: 4 },
    { name: "Learn", value: 6 },
    { name: "Monitor", value: 8 },
    { name: "Ignore", value: 5 },
  ],
  kpis: {
    qoar: 38,
    lowValue: 22,
    decisionMin: 12,
    adoptedPerMonth: 2,
    briefsRated: 72,
    scanLag: "2h",
  },
};
