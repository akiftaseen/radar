# Radar — Full Product Specification

**Version:** 1.0  
**Status:** Build-ready product specification  
**Date:** 29 August 2026  
**Initial market:** Fashion and lifestyle brands and small creative/social agencies  
**Initial geography:** English-language, configurable by market  
**Document owner:** Founding product team

---

## Document purpose

This specification defines Radar as a production-grade, AI-native cultural intelligence and creative strategy product. It is intended to align founders, product, design, engineering, data, AI, legal, marketing, sales, and pilot customers around one implementation.

It deliberately separates what must be built for the first commercial product from the larger vision. Where the seed concept was too broad, this document narrows it; where it implied false precision or unsafe autonomy, this document adds evidence, confidence, and approval controls.

---

# 1. Executive summary

## 1.1 Product definition

Radar is a **cultural opportunity system for brands**.

It continuously observes permitted public and first-party signals, groups them into evolving cultural movements, evaluates each movement against a persistent model of a specific brand, and converts the few that matter into evidence-backed strategic and creative responses.

Radar's transformation is:

> **signal → movement → brand opportunity → strategic response → creative campaign → measured learning**

The product does not merely report that a topic is growing. It answers five decision questions:

1. What is changing?
2. Is the change real, and how certain are we?
3. Why, if at all, does it matter to this brand now?
4. What is the most appropriate response—ignore, monitor, participate, partner, launch, or create?
5. What evidence, strategy, creative direction, and execution plan support that response?

## 1.2 Core promise

> Radar finds the small number of cultural changes a brand can credibly act on and turns them into distinctive, defensible creative action before the opportunity becomes obvious.

## 1.3 The wedge

The first product is **Radar for fashion and lifestyle**, sold to digitally native brands and small agencies. It uses a deliberately narrow mix of sources:

- X through approved, paid access;
- public news, RSS, and permitted web sources;
- brand and competitor websites;
- customer-provided brand, campaign, product, and performance data;
- optional sources only where Radar or the customer has the necessary commercial rights.

The MVP is not a universal social firehose. It is a high-quality decision system in a constrained cultural domain.

## 1.4 Primary output

The primary unit of value is a **Decision-Ready Opportunity**, not a dashboard and not a generated post. Each opportunity contains:

- an evidence-backed cultural movement;
- lifecycle and momentum analysis;
- separate **priority** and **confidence** scores;
- brand, audience, product, market, and competitor relevance;
- reasons to act and reasons not to act;
- recommended response mode and timing window;
- risks, sensitivities, unknowns, and disconfirming evidence;
- a route into Campaign Studio when creative action is justified.

## 1.5 Commercial hypothesis

For small brand and agency teams, Radar should replace part of three fragmented activities:

- manual cultural research and weekly trend reporting;
- the strategic translation from trend to brand action;
- the first one to three days of campaign briefing and concept development.

Radar will not initially replace social listening suites, schedulers, asset production tools, media buying, or senior creative judgment.

## 1.6 North-star metric

**Qualified Opportunity Adoption Rate (QOAR):** the percentage of high-confidence opportunities reviewed by a customer that are saved, investigated, briefed, or deliberately monitored within seven days.

This is paired with a guardrail:

**Low-Value Alert Rate:** the percentage of surfaced opportunities dismissed as irrelevant, stale, duplicate, unsupported, or off-brand.

An MVP that produces many alerts but a high low-value rate has failed.

## 1.7 Founding decisions

| Decision | Specification |
| --- | --- |
| Product category | Cultural Opportunity Intelligence |
| Initial ICP | Fashion/lifestyle brands and small agencies with 3–30 person marketing/creative teams |
| Core object | Brand-specific Opportunity linked to a global Cultural Movement |
| Core experience | Curated opportunity inbox plus evidence and action workflow |
| Scoring | Priority and confidence remain separate; no unexplained magic score |
| Creative scope | Excellent strategy, territories, briefs, and channel concepts before final asset generation |
| Automation | Human approval at every consequential transition in MVP |
| Data policy | Official, licensed, customer-provided, or clearly permitted sources only |
| Model policy | Provider-agnostic routing; Grok may be preferred for X-grounded research but is not the product moat |
| Pilot approach | Analyst-assisted design-partner pilots before fully autonomous detection |

---

# 2. Category definition and positioning

## 2.1 Category

**Cultural Opportunity Intelligence** is the software category between social listening, trend forecasting, brand strategy, and creative development.

It is defined by four requirements:

1. **Continuous external sensing:** observes cultural and market change, rather than waiting for a prompt.
2. **Persistent brand context:** evaluates every movement against a living model of a specific brand.
3. **Decision intelligence:** recommends whether and how to respond, with evidence and uncertainty.
4. **Creative activation:** converts an approved opportunity into structured strategy and execution-ready creative briefs.

Radar may describe its technology as “Autonomous Cultural Intelligence & Creative Strategy,” but external positioning should prefer the clearer outcome-oriented category above. “Autonomous” must never imply unsupervised publishing or unreviewed cultural judgment.

## 2.2 Positioning statement

For culture-sensitive consumer brands and agencies that need to decide what matters before it becomes obvious, Radar is a cultural opportunity system that detects emerging movements, explains their relevance to a specific brand, and turns approved opportunities into evidence-backed creative strategy. Unlike social listening dashboards and generic marketing AI, Radar joins live culture, persistent brand memory, strategic judgment, creative development, and outcome learning in one traceable workflow.

## 2.3 What Radar is not

| Adjacent category | What it primarily does | Why Radar is different |
| --- | --- | --- |
| Social listening | Retrieves mentions, topics, sentiment, volume, and alerts | Radar starts from movements, maps them to a brand and product portfolio, recommends a response, and continues into strategy |
| Trend dashboard/forecaster | Catalogues or forecasts category and consumer trends | Radar personalizes relevance, timing, risk, and action for one brand; it is operational rather than report-only |
| Generic AI content generator | Produces text or images after a prompt | Radar discovers the opportunity, grounds it in evidence, decides whether creation is warranted, and builds strategy before content |
| Social scheduler | Plans and publishes approved content | Radar ends at export/handoff in MVP; scheduling is an integration, not the wedge |
| Marketing copilot | Answers marketer questions inside a chat interface | Radar is event-driven and proactive, maintains temporal graphs, and creates durable decision artifacts rather than transient answers |
| Agency strategy service | Provides high-context human judgment and bespoke creative thinking | Radar makes the repeated research and first-draft strategy workflow faster and more measurable; it does not claim to replace senior judgment |

## 2.4 Product boundaries

Radar owns:

- detection of relevant cultural movements;
- evidence quality and provenance;
- brand-specific interpretation;
- opportunity prioritization;
- strategic response selection;
- campaign territory and brief creation;
- learning from user decisions and campaign outcomes.

Radar integrates with, but does not initially own:

- social publishing;
- paid media buying;
- final design production;
- digital asset management;
- project management;
- CRM/CDP;
- full enterprise media monitoring.

## 2.5 Strategic response ladder

A flaw in most trend products is the assumption that every relevant movement should become a branded post. Radar must recommend one of six explicit response modes:

| Mode | Meaning | Typical output |
| --- | --- | --- |
| Ignore | Not credible, relevant, safe, or actionable | Dismissal rationale |
| Monitor | Interesting but premature or uncertain | Watch conditions and next review time |
| Learn | Valuable audience/category insight without public participation | Research memo, product or positioning implication |
| Participate | Brand can contribute credibly through existing channels | Reactive content or community interaction brief |
| Partner | Credibility should come through a creator, community, or rights holder | Partner profile and collaboration brief |
| Launch | Opportunity warrants an owned campaign, activation, offer, or product action | Full Campaign Studio workflow |

This response ladder prevents indiscriminate trend-chasing and makes non-campaign insight commercially valuable.

---

# 3. Market research and competitive landscape

## 3.1 Market condition

The market is converging from both directions:

- Social-listening vendors are adding generative summaries, anomaly detection, narrative clustering, and conversational analysis.
- Marketing-generation vendors are adding persistent brand context, agentic workflows, approvals, campaign objects, activation, and performance feedback.
- Trend-forecasting vendors are becoming more data-driven and real-time.

This means “AI-powered social listening” and “on-brand campaign generation” are not durable differentiators. Radar must win at the seam competitors still treat as a handoff: **the reasoned translation from emerging culture to a brand-specific strategic decision**.

## 3.2 Representative competitors

| Product | Strength | Primary buyer | Closest overlap | Gap Radar exploits |
| --- | --- | --- | --- | --- |
| Brandwatch / Iris AI | Large-scale consumer intelligence, search, summaries, established data access | Enterprise insights/social teams | Distilling signals and explaining trends | Heavy listening orientation; Radar is opinionated around opportunity decisions and creative activation for smaller teams |
| Sprinklr Social Listening / AI+ | Broad channels, enterprise scale, topics, anomaly and crisis workflows | Large enterprises | Trend/theme discovery and action workflows | Complex enterprise suite; Radar offers fast brand modeling and a purpose-built culture-to-brief path |
| Talkwalker Blue Silk AI | Multilingual listening, visual/audio recognition, prediction, semantic clustering | Enterprise brand/PR teams | Trend and narrative analysis | Radar competes on brand-specific action design and creative strategy rather than coverage breadth |
| Meltwater / Mira | Media and social monitoring, alerts, summaries, reporting | PR, comms, social teams | Prioritized insights and competitive monitoring | Radar treats product relevance, cultural permission, creative whitespace, and response design as first-class objects |
| Pulsar TRAC / Narratives | Audience and narrative intelligence; cultural trend analysis | Insight, research, agency teams | Cultural narratives, communities, momentum | The closest intelligence-side analogue; Radar differentiates through the Brand Brain, opportunity scoring, and structured Campaign Studio |
| Black Swan Data Trendscope | Predictive trend clustering and consumer/category insight | CPG innovation and insights | Emerging trend clusters and forecasts | Radar is campaign- and brand-response-oriented, faster-cycle, and initially fashion/lifestyle focused |
| Trendalytics | Fashion/retail trend forecasting and market intelligence | Merchandising, retail, fashion brands | Fashion trend detection | Radar emphasizes cultural meaning, brand action, creative response, and evidence workflow rather than assortment forecasting |
| WGSN | Expert-led long-range consumer and design forecasting | Fashion, design, innovation teams | Cultural/design direction | Radar operates at a shorter reaction horizon and is personalized, continuous, and executable |
| Exploding Topics / Glimpse | Accessible trend and search discovery | Founders, marketers, SEO | Emerging topic discovery | Little persistent brand judgment or campaign strategy |
| Jasper | Brand-aware marketing agents and campaign/content creation | Marketing teams | Brand memory and campaign workflow | User initiates a known marketing job; Radar discovers and validates the cultural reason to act |
| Typeface | Enterprise agent orchestration, brand intelligence, campaign lifecycle | Enterprise marketing | Persistent brand context and end-to-end content operations | Radar's wedge is external cultural sensing and opportunity selection, not high-volume personalized production |
| Adobe GenStudio | Brand-governed content generation, approvals, activation, performance | Adobe enterprise customers | Campaign object, content supply chain, learning | Radar sits upstream of the campaign object and can hand off approved strategy into GenStudio or similar systems |

## 3.3 Competitive conclusion

Radar should not market itself around any single feature in the matrix. Most can be copied. Its defensible product system is the combined loop:

1. a time-aware Cultural Graph;
2. a customer-specific Brand Brain;
3. evidence-backed opportunity judgment;
4. a structured culture-to-creative workflow;
5. feedback linking recommendations, decisions, executions, and outcomes.

## 3.4 Replacement and complement strategy

For the initial ICP, Radar may replace manual weekly research, spreadsheets, trend newsletters, saved-post collections, ad hoc ChatGPT prompts, and first-draft briefs.

For larger customers, Radar should position as an intelligence and orchestration layer above existing listening and production systems. It should ingest permitted aggregates or exports from Brandwatch/Sprinklr/Talkwalker and hand approved briefs to Workfront, Asana, Adobe GenStudio, Figma, or a DAM.

## 3.5 Research references

Current product and access assumptions were checked against primary or official materials:

- [Brandwatch Iris AI](https://www.brandwatch.com/products/iris-ai/)
- [Sprinklr Social Listening](https://www.sprinklr.com/products/consumer-intelligence/social-listening/)
- [Talkwalker Blue Silk AI](https://www.talkwalker.com/products/bluesilkai)
- [Meltwater Social Listening](https://www.meltwater.com/en/capabilities/social-listening)
- [Pulsar on cultural trend analysis](https://www.pulsarplatform.com/hubs/social-listening-use-case-guide/social-listening-for-trend-analysis)
- [Black Swan Data Trendscope dynamic clustering](https://blackswan.com/resources/our-thinking/trendscope-3-0-introducing-dynamic-trend-clustering)
- [Trendalytics](https://trendalytics.co/)
- [WGSN trend forecasting](https://www.wgsn.com/en/what-we-do/trend-forecasting)
- [Jasper Brand Voice](https://www.jasper.ai/brand-voice)
- [Typeface](https://www.typeface.ai/)
- [Adobe GenStudio Campaigns](https://experienceleague.adobe.com/en/docs/genstudio-for-performance-marketing/user-guide/campaigns/overview)

---

# 4. Users, personas, and jobs to be done

## 4.1 Initial ideal customer profile

### Brand ICP

- digitally native fashion, accessories, beauty, lifestyle, sportswear, consumer-tech, gaming, or entertainment brand;
- 3–30 people across marketing, social, brand, design, and e-commerce;
- launches or refreshes content at least weekly;
- sells to culture-sensitive audiences aged roughly 16–35;
- operates in one to five priority markets;
- lacks a dedicated consumer-insights team;
- can act within days or weeks rather than quarters;
- already spends money on creators, campaigns, agencies, or content production.

### Agency ICP

- independent creative, brand, or social agency with 5–50 employees;
- manages 3–20 active consumer-brand clients;
- repeatedly produces trend scans, strategy decks, pitches, or reactive campaign ideas;
- wants faster research without exposing clients to generic AI output;
- values client-specific workspaces, provenance, exports, and permissions.

### Anti-ICP for MVP

- regulated healthcare, financial, political, or public-sector communications;
- brands requiring full firehose coverage or crisis monitoring SLAs;
- brands whose only need is scheduling or high-volume content variants;
- teams that cannot legally supply or connect the necessary brand data;
- customers expecting autonomous publishing or guaranteed trend prediction.

## 4.2 Personas

### Persona A — Brand/Marketing Lead

**Context:** Owns positioning, calendar, launches, and budget.  
**Pain:** Receives many trends and ideas but little defensible prioritization.  
**Needs:** A short list, commercial relevance, product tie-in, timing, downside, and a brief the team can act on.  
**Success:** Makes a confident go/no-go decision in under 15 minutes.  
**Fear:** An embarrassing “hello fellow kids” campaign or a tool that produces noise.

### Persona B — Social/Culture Strategist

**Context:** Lives across platforms, creators, communities, and client asks.  
**Pain:** Manual research is fragmented and difficult to prove; insights arrive as screenshots and intuition.  
**Needs:** Evidence, narrative history, community context, terminology, counter-signals, and alerts before saturation.  
**Success:** Turns a movement into a credible point of view and watches its evolution.  
**Fear:** AI flattening context, misreading irony, or inventing cultural explanations.

### Persona C — Creative Director / Designer

**Context:** Converts strategy into distinctive work.  
**Pain:** Generic briefs produce generic visual tropes; trend references are copied rather than interpreted.  
**Needs:** A precise human tension, brand permission, creative whitespace, original territories, and traceable—not copyable—references.  
**Success:** Reaches a strong, brand-ownable territory faster.  
**Fear:** Moodboard plagiarism and average AI aesthetics.

### Persona D — Agency Strategist / Account Lead

**Context:** Serves several brands and must demonstrate rigor.  
**Pain:** Repeats the same scanning and briefing process; insights are hard to separate by client.  
**Needs:** Multi-brand workspaces, reusable methods, client-ready exports, source citations, and controlled sharing.  
**Success:** Produces better weekly opportunities and pitch material in hours rather than days.  
**Fear:** Cross-client data leakage and undifferentiated outputs.

### Persona E — Founder / Growth Lead

**Context:** Small team; owns brand and acquisition.  
**Pain:** Knows culture matters but cannot afford an insights team or senior agency retainer.  
**Needs:** Clear action, low setup effort, transparent cost, and rapid campaign direction.  
**Success:** Finds one commercially useful opportunity per month.  
**Fear:** Paying for a sophisticated dashboard nobody checks.

## 4.3 Jobs to be done

| Situation | Job | Desired outcome |
| --- | --- | --- |
| When culture is moving faster than our planning cycle | Help me identify the few changes that matter to our audience and category | I know what deserves attention without scanning every platform |
| When an interesting movement appears | Help me determine whether we have permission and a meaningful reason to participate | I avoid opportunistic, late, or off-brand reactions |
| When I recommend action internally | Give me evidence, uncertainty, risks, product relevance, and competitor context | I can defend the recommendation to creative, leadership, and legal |
| When an opportunity is approved | Convert it into a rigorous strategy and several distinctive creative territories | The creative team begins from a useful brief, not an AI brainstorm dump |
| When a campaign launches | Connect the original cultural thesis to execution and results | We learn which opportunities and responses work for our brand |
| When I reject an opportunity | Learn why without forcing me to configure a model | Future recommendations improve and the dismissal creates a useful record |
| When I manage several clients | Keep each brand model, evidence, output, and learning isolated | I can scale research without losing client specificity or confidentiality |

## 4.4 User outcome metrics

- median time from opening an opportunity to a recorded decision: **under 15 minutes**;
- median time from approved opportunity to first complete brief: **under 20 minutes of system time and under 60 minutes including review**;
- at least **30% QOAR** among high-confidence opportunities in a mature pilot workspace;
- low-value alert rate below **25%** by the end of a six-week pilot;
- at least **70% of generated briefs** rated “useful with minor edits” or better;
- at least **one adopted opportunity per active brand per month** for customers with sufficient source coverage.

---

# 5. Product principles and conceptual model

## 5.1 Principles

1. **Relevance over volume.** The feed is an inbox of decisions, not an infinite stream.
2. **Evidence before eloquence.** A polished explanation cannot exceed the quality of its sources.
3. **Confidence is not priority.** A well-supported movement can be irrelevant; an exciting opportunity can remain uncertain.
4. **Brand identity is a constraint and a creative advantage.** Radar should often recommend not participating.
5. **Strategy precedes generation.** The system must define the insight, tension, proposition, and response before producing creative output.
6. **Human authority is explicit.** Consequential transitions require a named approver.
7. **Every conclusion is inspectable.** Users can trace claims, scores, revisions, and model actions.
8. **Culture is temporal and contextual.** Meaning, community, language, geography, and lifecycle cannot be reduced to mention count.
9. **Models are replaceable; customer learning is durable.** Provider-specific capabilities live behind contracts.
10. **No data rights, no ingestion.** Coverage gaps are shown rather than hidden.

## 5.2 Core domain objects

| Object | Scope | Definition |
| --- | --- | --- |
| Signal | Source-level | A permitted observation: post, article, search index point, product change, creator event, or customer datum |
| Signal Cluster | Processing-level | A provisional group of near-duplicate or semantically related signals |
| Cultural Movement | Global or market-level | A time-evolving narrative, behavior, aesthetic, practice, or symbol supported by multiple signals |
| Opportunity | Brand-specific | A versioned judgment that a movement may matter to one brand, with priority, confidence, response, timing, and evidence |
| Evidence Claim | Claim-level | A statement linked to supporting, contradicting, or contextual sources and a confidence rating |
| Brand Brain | Workspace-specific | Structured, editable, versioned knowledge about the brand, products, audiences, history, constraints, and competitors |
| Decision | User-level | Monitor, learn, approve, dismiss, snooze, or escalate, with reason and actor |
| Campaign | Brand-specific | An approved strategic response derived from an opportunity |
| Territory | Campaign-level | A distinct creative interpretation with idea, narrative, visual/copy system, proof, risks, and channel potential |
| Outcome | Campaign-level | Execution, media, audience, commercial, and qualitative results linked back to the opportunity thesis |

## 5.3 Required separation of movement and opportunity

A Cultural Movement exists independently of a customer. “Distressed football aesthetics” may be one movement.

An Opportunity is a brand-specific interpretation. The same movement may be:

- high-priority for a streetwear brand with jerseys in stock;
- a monitor-only insight for a beauty brand;
- prohibited for a brand whose sponsorship rights conflict;
- irrelevant for a homeware brand.

This separation enables shared cultural detection without leaking one customer's private data or judgment into another customer's workspace.

## 5.4 Opportunity state machine

`candidate → surfaced → viewed → monitoring | investigating | approved | dismissed | snoozed → brief_in_progress → brief_approved → activated → measured → archived`

Rules:

- only promoted movement candidates can create surfaced opportunities;
- approving an opportunity freezes the evidence snapshot used for the decision;
- later evidence creates a new opportunity version, never silently rewrites the approved basis;
- dismissed opportunities remain searchable and suppress near-duplicates for a configurable period;
- campaign creation requires `approved` status and an approved response mode;
- an opportunity may return from `monitoring` to `surfaced` only when a watch condition changes materially.

---

# 6. Scope: MVP, V1, and out of scope

## 6.1 MVP objective

Prove that Radar can repeatedly produce decision-ready, brand-specific cultural opportunities and convert selected opportunities into useful creative briefs for fashion/lifestyle teams.

## 6.2 MVP capabilities

1. Workspace, brand, user, and role setup.
2. Guided Brand Brain creation from website, uploaded documents, product/catalog data, social handles, competitors, and explicit constraints.
3. User review and approval of extracted brand facts.
4. Source setup for X, RSS/news/web, competitor sites, and manually submitted links.
5. Daily and on-demand signal ingestion within source rights and budgets.
6. Deduplication, enrichment, clustering, movement candidate detection, lifecycle tracking, and analyst controls.
7. Brand-specific opportunity generation with momentum, relevance, novelty, whitespace, actionability, risk, priority, and confidence.
8. Opportunity feed, evidence dossier, score explanations, response recommendation, and decision workflow.
9. Watchlists, snooze, dismiss reasons, and weekly digest.
10. Campaign Studio generating three genuinely distinct territories.
11. Full creative brief for a selected territory, with channel concepts, creator brief, production plan, measures, risks, and citations.
12. Review, comment, edit, approve, export to PDF/Markdown/Google Docs-compatible format, and share by secure link.
13. Basic campaign outcome entry and recommendation feedback.
14. Operational admin for source health, cost, candidate review, false positives, and audit logs.

## 6.3 MVP source scope

- X official API/pay-per-use endpoints approved for the use case;
- customer-provided URLs and documents;
- RSS/Atom feeds;
- licensed or clearly permitted news/web APIs and public pages fetched in accordance with applicable terms and robots controls;
- brand and competitor websites, including customer-specified pages;
- optional Google Trends alpha only if access is granted and terms permit the product use;
- no commercial Reddit or TikTok data dependency without a specific agreement or licensed provider.

## 6.4 MVP exclusions

- TikTok, Instagram, Pinterest, YouTube, or Reddit firehose ingestion without licensed access;
- scraping behind authentication, bypassing technical controls, or evading platform restrictions;
- full social publishing or automated replies;
- autonomous campaign approval or public activation;
- final production-quality image/video generation as a core promise;
- ad buying, budget optimization, or audience targeting;
- crisis-management SLA;
- exhaustive global listening;
- influencer marketplace or contracting;
- DAM, PIM, CRM, CDP, or project-management replacement;
- automatic legal clearance, rights clearance, or guarantee of claim compliance;
- sentiment as a universal or decisive cultural metric;
- private-message ingestion;
- biometric, sensitive-personal-data, or individual-level profiling;
- deterministic predictions of a movement's future.

## 6.5 V1 expansion after MVP proof

- commercially licensed Reddit and selected visual/video social coverage;
- customer analytics connectors;
- campaign handoff integrations;
- multi-market/language analysis;
- image and visual-aesthetic clustering;
- outcome-informed score calibration;
- agency client portals and white-label reports;
- approved low-risk asset exploration;
- APIs for existing enterprise listening data.

---

# 7. Functional requirements

## 7.1 Functional requirement convention

- **P0:** required for MVP launch.
- **P1:** required for commercial V1, may follow pilot.
- **P2:** later enhancement.

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-001 | A user can create a workspace and one or more brands according to plan limits | P0 |
| FR-002 | The system extracts proposed Brand Brain facts from approved customer inputs and requires confirmation | P0 |
| FR-003 | Every Brand Brain fact retains provenance, confidence, status, version, and editor | P0 |
| FR-004 | Users can add topics, entities, creators, competitors, geographies, languages, and exclusions to monitored arenas | P0 |
| FR-005 | The ingestion service records source rights, permitted fields, retention rules, and connector health | P0 |
| FR-006 | Duplicate and syndicated signals are collapsed without losing provenance | P0 |
| FR-007 | The system can promote, merge, split, and retire Cultural Movements without corrupting history | P0 |
| FR-008 | Every surfaced Opportunity has separate Priority and Confidence values with component explanations | P0 |
| FR-009 | Users can inspect representative, supporting, contradictory, and contextual evidence | P0 |
| FR-010 | Users can approve, monitor, learn, dismiss, snooze, or request more research | P0 |
| FR-011 | Dismissal and edit feedback updates customer-specific ranking only after safe validation | P0 |
| FR-012 | Campaign Studio creates three structurally distinct territories from an approved Opportunity | P0 |
| FR-013 | A user can compare, combine, edit, reject, or select territories | P0 |
| FR-014 | The system creates a versioned strategic/creative brief with evidence and brand-risk checks | P0 |
| FR-015 | Named users can approve or reject strategy, territory, and brief stages | P0 |
| FR-016 | Users can export a brief and share a read-only link with expiry/revocation | P0 |
| FR-017 | Admins can view source failures, spend, queue state, model use, and candidate quality | P0 |
| FR-018 | All consequential AI and user actions are audit logged | P0 |
| FR-019 | Users can enter or import campaign results and qualitative learnings | P1 |
| FR-020 | The system recalibrates brand-specific ranking from aggregated decisions and outcomes | P1 |
| FR-021 | Agencies can isolate clients, invite client reviewers, and apply templates without sharing private knowledge | P1 |
| FR-022 | Users can connect approved listening, analytics, task, document, and DAM tools | P1 |
| FR-023 | Users can explore the Cultural Map and movement relationships visually | P1 |
| FR-024 | Customers can configure limited auto-monitor actions for low-risk cases | P2 |

---

# 8. Brand Brain specification

## 8.1 Purpose

The Brand Brain is the persistent, versioned, evidence-backed model used to judge relevance and generate work. It is not a single prompt, a vector store full of unverified documents, or an immutable “brand persona.”

It contains three distinct layers:

1. **Source layer:** customer-authorized documents, URLs, catalog data, campaign data, and explicit inputs.
2. **Fact layer:** normalized statements extracted from sources, each with provenance, confidence, status, owner, and effective dates.
3. **Policy/interpretation layer:** approved rules and computed representations used in ranking and generation.

Only approved facts and policies may govern externally usable creative output. Unapproved extracted facts may inform questions, but must be marked as provisional.

## 8.2 Brand Brain domains

| Domain | Required MVP fields | Later fields |
| --- | --- | --- |
| Identity | mission, positioning, values, personality traits, promise, origin, differentiators | architecture across sub-brands, market-specific identity |
| Voice | tone traits, preferred language, prohibited language, reading level, sample approved copy | channel-specific and market-specific voice |
| Visual | logo references, colors, typography, photography, illustration, composition, art-direction principles, avoidances | learned visual embeddings, asset performance attributes |
| Audience | named segments, needs, tensions, interests, communities, markets, evidence source | first-party segment mappings and outcome profiles |
| Products | SKU/product family, description, benefit, price band, availability, market, launch dates, imagery, claims | inventory, margin, sales velocity, lifecycle |
| Campaign history | name, dates, goal, audience, idea, channels, assets, outcome summary, lessons | asset-level performance and causal testing |
| Constraints | prohibited topics, sensitive topics, legal claims, rights, partnerships, category policies, escalation contacts | automated policy integrations |
| Competitors | brand, handles/domains, category, positioning, visual/copy traits, recent activity | response history and share-of-culture analysis |
| Strategic priorities | current goals, priority products, markets, audience, launch calendar, business constraints | budgets and scenario planning |
| Cultural permission | communities where the brand has history, credibility, partnerships, or explicit absence | learned permission and backlash patterns |

## 8.3 Fact model

Every fact includes:

```json
{
  "id": "bf_01J...",
  "brand_id": "br_01J...",
  "domain": "voice",
  "predicate": "prefers_tone",
  "value": {"trait": "witty", "qualification": "never sarcastic at a customer's expense"},
  "scope": {"market": ["GB", "US"], "channel": ["social"]},
  "source_ids": ["src_01J..."],
  "source_spans": [{"source_id": "src_01J...", "locator": "p. 4"}],
  "confidence": 0.92,
  "status": "approved",
  "sensitivity": "internal",
  "effective_from": "2026-08-01",
  "effective_to": null,
  "created_by": "ai:brand_extractor:v3",
  "approved_by": "usr_01J...",
  "version": 2
}
```

Allowed statuses: `proposed`, `approved`, `rejected`, `superseded`, `expired`.

## 8.4 Onboarding workflow

### Step 1 — Define the brand

User supplies brand name, URL, category, markets, social handles, and one-sentence positioning. Radar shows exactly what will be collected.

### Step 2 — Add material

User may connect or upload:

- brand guidelines;
- strategy documents;
- approved campaign decks;
- product feed/CSV;
- approved copy examples;
- audience research;
- policy/legal documents;
- optional performance summary.

### Step 3 — Extract

Radar parses, classifies, and proposes facts. It must not infer sensitive demographic characteristics or turn speculation into fact.

### Step 4 — Resolve conflicts

Contradictory facts are shown side by side. Newer material is not silently preferred; the user selects the active truth or scopes each fact by channel, market, product, or time.

### Step 5 — Confirm essentials

The user reviews a maximum of 20 high-impact facts:

- positioning;
- audience;
- voice;
- core visual direction;
- priorities;
- prohibited/sensitive areas;
- cultural permissions;
- competitors.

### Step 6 — Calibrate

Radar shows three example movement cards and asks the user to label each `relevant`, `monitor`, or `irrelevant` and explain one choice. This produces an initial preference profile without claiming statistical learning.

### Step 7 — Activate

Radar reports readiness by domain, missing evidence, source health, and the first scheduled scan. A workspace cannot enter production if mandatory safety constraints lack an approver.

## 8.5 Readiness score

Readiness is a coverage indicator, not a quality guarantee:

| Component | Weight |
| --- | ---: |
| Identity and positioning approved | 15% |
| Audience and markets approved | 15% |
| Voice approved | 10% |
| Visual direction approved | 10% |
| At least one product family active | 15% |
| Constraints and escalation owner approved | 20% |
| Competitors and strategic priorities configured | 10% |
| Example calibration completed | 5% |

`Ready` requires at least 75/100 and all constraints/escalation requirements. Low readiness reduces opportunity confidence and is disclosed on every output.

## 8.6 Editing and governance

- All edits create versions.
- Users can compare versions and restore earlier approved versions.
- Material strategy changes trigger selective rescoring of open opportunities.
- AI may propose changes but never approve them.
- A campaign records the exact Brand Brain version used.
- Agency templates may suggest fields but cannot copy client facts.
- Hard constraints override learned preferences.
- Deleted sources trigger deletion or revalidation of dependent facts according to retention policy.

## 8.7 Retrieval contract

Agents do not receive the entire Brand Brain. A policy-aware retrieval service returns only relevant approved facts, structured by domain and capped by token budget. The response includes IDs so outputs can cite the facts used.

```json
{
  "request_context": {"task": "opportunity_evaluation", "market": "GB"},
  "facts": [{"fact_id": "bf_...", "domain": "product", "value": {}, "priority": 0.94}],
  "hard_constraints": [{"fact_id": "bf_...", "rule": "do_not_associate_with_gambling"}],
  "unknowns": ["No approved creator-partnership policy"],
  "brand_brain_version": 17
}
```

---

# 9. Data-source and signal-ingestion strategy

## 9.1 Non-negotiable rule

Every connector has a machine-readable **Data Rights Profile** before it can run. A connector cannot be enabled merely because a technical endpoint exists.

The profile records:

- commercial-use basis;
- customer authorization basis;
- allowed data fields;
- allowed derived uses;
- display/attribution requirements;
- retention and deletion requirements;
- geographic restrictions;
- rate/cost limits;
- whether model training is prohibited;
- last legal review and owner.

## 9.2 Source strategy by phase

| Source | MVP decision | Method | Important constraint |
| --- | --- | --- | --- |
| X | Conditional P0 | Official X API with pay-per-use budgeting; optionally approved xAI/X retrieval features for bounded research | Endpoint prices are account-visible and usage-based; cache and retrieve only as terms allow |
| RSS/Atom | P0 | Feed polling with conditional requests | Respect publisher terms and retain minimal content when necessary |
| Public news/web | P0 | Licensed search/news provider, permitted pages, and customer-curated sources | No bypassing paywalls, authentication, robots controls, or rate limits |
| Brand websites | P0 | Customer-authorized crawl and structured ingestion | Treat unpublished/customer-only material separately |
| Competitor websites | P0, narrow | Public product/campaign pages with robots/terms controls; store changes and citations | Avoid exhaustive copying; retain factual metadata and bounded excerpts |
| Manual links | P0 | User-submitted URL snapshot/metadata subject to rights | User submission does not override source terms |
| Google Trends | Optional | Official API alpha if accepted; otherwise user-supplied exports or licensed substitute | The official API remains limited alpha; do not rely on unofficial scraping |
| Reddit | Not a dependency | Commercial agreement or licensed provider only | Reddit's current terms require approval/separate agreement for commercial monetized use |
| TikTok | Not a dependency | Future commercial/licensed access | Research API is not available to commercial users |
| Instagram/YouTube/Pinterest | Later | Official, licensed, or customer-owned analytics routes | Coverage and permitted uses vary by API/product |
| First-party analytics | P1 | Customer OAuth/API or CSV | Aggregate where possible; no unnecessary user-level data |
| Sales/catalog/inventory | P1 | Shopify/e-commerce connector or CSV | Purpose limitation and tenant isolation |

References: [X API pricing](https://docs.x.com/x-api/getting-started/pricing), [Reddit Data API Terms](https://redditinc.com/policies/data-api-terms), [Reddit Developer Terms](https://redditinc.com/policies/developer-terms), [TikTok Research API eligibility](https://developers.tiktok.com/products/research-api/), and [Google Trends API alpha](https://developers.google.com/search/apis/trends).

## 9.3 Source tiers

- **Tier A — deterministic:** official API, first-party/customer data, licensed feed. Can support quantitative trend metrics if coverage is understood.
- **Tier B — bounded public:** permitted RSS/web pages and curated sources. Supports qualitative and directional claims; cannot imply platform-wide volume.
- **Tier C — manual/contextual:** user-submitted examples, analyst notes, secondary references. Supports context, not population-level claims.

Source tier is carried into every metric and confidence calculation.

## 9.4 Normalized Signal object

```json
{
  "signal_id": "sig_01J...",
  "tenant_scope": "shared_public",
  "source_connector_id": "con_x_01J...",
  "source_type": "x_post",
  "source_tier": "A",
  "external_id_hash": "sha256:...",
  "canonical_url": "https://...",
  "observed_at": "2026-08-29T10:15:00Z",
  "published_at": "2026-08-29T09:54:00Z",
  "author": {
    "external_id_hash": "sha256:...",
    "display_name": "...",
    "account_type": "creator",
    "follower_band": "100k_1m"
  },
  "content": {
    "text": "...",
    "language": "en",
    "media_refs": [],
    "content_hash": "sha256:..."
  },
  "engagement": {
    "likes": 0,
    "replies": 0,
    "reposts": 0,
    "views": null,
    "captured_at": "2026-08-29T10:15:00Z"
  },
  "entities": [{"type": "aesthetic", "name": "distressed football"}],
  "topics": ["football-fashion"],
  "geo": {"country": "GB", "confidence": 0.41, "basis": "source_metadata"},
  "audience_clues": [{"community": "terrace-fashion", "confidence": 0.63}],
  "semantic_embedding_ref": "emb_...",
  "visual_embedding_ref": null,
  "quality": {
    "spam_probability": 0.04,
    "bot_probability": 0.11,
    "duplicate_group_id": null,
    "source_reliability": 0.82
  },
  "rights": {
    "profile_id": "drp_...",
    "display_allowed": true,
    "retention_until": "2026-09-28T00:00:00Z",
    "training_allowed": false
  },
  "processing": {"pipeline_version": "sig-v5", "status": "enriched"}
}
```

Nullable fields remain null; the system must never hallucinate missing engagement, geography, or demographic data.

## 9.5 Ingestion pipeline

1. Scheduler allocates connector budgets by workspace, topic, and source.
2. Connector retrieves permitted data and attaches its rights profile.
3. Raw payload is encrypted in a short-retention quarantine store.
4. Validator checks schema, signature, freshness, and permissions.
5. Normalizer creates the Signal object.
6. Deduplicator collapses exact, near-duplicate, syndicated, quoted, and cross-posted content.
7. Enrichment identifies language, entities, topics, media attributes, source quality, and embeddings.
8. Safety classifier marks sensitive or restricted content.
9. Signals enter time-windowed candidate detection.
10. Raw payload expires according to the connector profile; derived data is retained only if permitted.

## 9.6 Deduplication

Radar must distinguish independent corroboration from copied amplification.

Deduplication layers:

- exact external ID and URL;
- normalized text/media hash;
- MinHash/SimHash near-duplicate detection;
- semantic similarity within time window;
- quoted/reposted lineage;
- news syndication/source-family detection;
- same asset with changed captions using perceptual hashes.

Cluster metrics count both total reach/activity and **independent origins**. Cross-source confirmation requires distinct source families, not five articles syndicated from one wire.

## 9.7 Abuse, bot, and manipulation defenses

Inputs to a quality penalty include:

- synchronized posting;
- abnormal account-age and engagement patterns where lawfully available;
- repeated text/media;
- engagement-to-audience anomalies;
- known spam domains;
- sharp growth without independent community spread;
- suspected paid or coordinated promotion;
- source concentration.

Radar labels suspected manipulation and reduces confidence. It must not accuse named people of being bots or coordinated actors without adequate evidence; the product displays aggregate “coordination risk.”

## 9.8 Cost controls

- connector-specific daily and monthly hard caps;
- query reuse across eligible shared public movements;
- incremental retrieval instead of full-window polling;
- cheaper models/rules for filtering, expensive models only after promotion;
- token and API budgets per workflow;
- sampling disclosed in metrics;
- circuit breakers at 70%, 90%, and 100% budget;
- graceful degradation: pause breadth before compromising safety or inventing coverage.

---

# 10. Cultural Movement graph and clustering methodology

## 10.1 Definition

A Cultural Movement is a versioned, time-aware object representing a shared change in narrative, aesthetic, symbol, language, behavior, practice, or consumption. It is not synonymous with a keyword, hashtag, viral post, or static topic.

## 10.2 Graph model

Nodes:

- signals;
- movements;
- entities;
- terms/phrases;
- visual motifs;
- products/categories;
- creators/publications;
- communities;
- geographies;
- events;
- brands and competitors, kept tenant-private where appropriate.

Edges:

- `MENTIONS`, `DEPICTS`, `USES_TERM`, `PARTICIPATES_IN`;
- `AMPLIFIES`, `PRECEDES`, `DERIVES_FROM`, `OPPOSES`;
- `CO_OCCURS_WITH`, `VISUALLY_RESEMBLES`, `SEMANTICALLY_RELATED`;
- `SPREADS_TO`, `RESPONDS_TO`, `COMMERCIALIZES`;
- `RELEVANT_TO`, `CONFLICTS_WITH`, `USED_BY_COMPETITOR`.

Every edge has timestamps, confidence, evidence IDs, and model/rule version.

## 10.3 Detection pipeline

### Stage A — Candidate generation

Within source- and market-aware time windows, create provisional clusters using:

- dense semantic embeddings;
- named entities and co-occurrence;
- bursty term/phrase detection;
- shared URLs/media and creator interaction;
- optional visual embeddings;
- known movement anchors from the graph.

Use HDBSCAN or an incremental density-based method for unknown cluster counts, combined with deterministic rules for known monitored arenas. No cluster is user-visible yet.

### Stage B — Candidate validation

Calculate:

- unique independent authors/sources;
- duplicate-adjusted activity;
- baseline-normalized velocity;
- source and community diversity;
- coherence of meaning;
- age and persistence;
- coordination/spam risk;
- relationship to existing movements.

An LLM may label and summarize the candidate only after quantitative validation. The LLM does not decide whether the movement exists by itself.

### Stage C — Graph reconciliation

Compare each candidate with active, dormant, and historical movements:

- attach as new evidence;
- create a submovement;
- merge with an existing movement;
- revive a dormant movement;
- create a new movement;
- discard as noise.

Merge/split decisions above thresholds require an analyst queue during MVP. Historical IDs and redirect lineage are preserved.

### Stage D — Lifecycle update

Update movement metrics at least daily for active monitored arenas. Significant acceleration or risk changes may trigger more frequent updates within source limits.

## 10.4 Lifecycle

| Stage | Operational definition |
| --- | --- |
| Weak signal | Coherent but below independent-support threshold |
| Emerging | Passes minimum support and novelty; limited spread |
| Accelerating | Positive velocity and acceleration across more than one independent source/community |
| Established | Sustained activity and broader community/market penetration |
| Saturating | High visibility but falling novelty/whitespace; brand crowding increases |
| Declining | Sustained negative velocity and reduced new participation |
| Dormant | Insufficient recent activity but retains graph history |
| Recurrent | Returns with a new catalyst, meaning, market, or aesthetic form |

Lifecycle is a probability distribution, not a brittle label. The UI shows the leading stage plus uncertainty.

## 10.5 Promotion thresholds for MVP

A candidate becomes an internal Movement when all are true:

- semantic coherence ≥ 0.65;
- at least 10 duplicate-adjusted signals or a configured high-authority event exception;
- at least 5 independent originators;
- spam/coordination risk < 0.60;
- source quality weighted support ≥ minimum arena threshold;
- no near-duplicate active movement unless explicitly created as a submovement.

A Movement becomes eligible for brand Opportunity scoring when at least one is true:

- Tier A acceleration exceeds two baseline standard deviations and independent-source minimum is met;
- two source families corroborate the movement;
- an approved analyst promotes it with written rationale;
- it matches a high-priority watch condition configured by the brand.

Thresholds are calibrated per source and arena. They are not universal truth.

## 10.6 Naming and summaries

Each Movement stores:

- canonical neutral name;
- aliases and evolving terminology;
- one-sentence observable description;
- “what changed” summary;
- origin/catalyst hypotheses clearly labeled as hypotheses;
- dominant and opposing meanings;
- participating communities and markets;
- visual/linguistic codes;
- lifecycle and metrics history;
- representative and contradictory evidence;
- uncertainty and known blind spots.

Names must describe the movement without appropriating a community's own term inaccurately. Sensitive community terminology is reviewed before prominent display.

## 10.7 Trend prediction policy

Radar estimates horizons and scenarios; it does not claim certainty.

Allowed output:

> “Given current acceleration, cross-community spread, and comparable historical movements, the most likely useful response window is 1–3 weeks. Confidence: medium.”

Disallowed output:

> “This trend will peak in exactly 18 days.”

The system records forecast distributions and later scores calibration using Brier score or equivalent probabilistic metrics.

---

# 11. Opportunity scoring algorithm

## 11.1 Scoring architecture

Radar exposes four distinct score families:

1. **Movement metrics:** what is happening externally.
2. **Brand relevance:** why it matters to this brand.
3. **Opportunity priority:** whether attention/action is warranted now.
4. **Evidence confidence:** how strongly the claims and measurement support the judgment.

No overall number may hide risk or low confidence.

## 11.2 Component scores

All components are normalized to 0–100 with raw evidence available.

### Movement components

| Component | Meaning | Example inputs |
| --- | --- | --- |
| Momentum `M` | Current duplicate-adjusted activity relative to baseline | robust z-score, EWMA, unique origins |
| Acceleration `A` | Change in momentum over time | slope and second derivative over source-aware windows |
| Cross-source confirmation `X` | Independent evidence across source families | source entropy, corroborating tiers |
| Novelty `N` | Semantic/visual distance from recent historical movements | embedding distance, term emergence, recency |
| Persistence `P` | Likelihood of surviving a single spike | active-day ratio, repeat participation, source spread |
| Saturation `S` | Mainstream exposure and brand crowding | visibility, competitor participation, declining novelty |

### Brand components

| Component | Meaning | Evidence |
| --- | --- | --- |
| Audience relevance `AR` | Overlap with approved audience needs, interests, and communities | Brand facts and movement communities |
| Product relevance `PR` | Credible connection to active products or services | catalog facts, availability, claims |
| Brand compatibility `BC` | Fit with identity, voice, values, and cultural permission | approved Brand Brain facts |
| Strategic relevance `SR` | Fit with current goals, market, launches, and calendar | approved priorities |
| Competitive whitespace `CW` | Degree to which meaningful competitor action is absent | competitor evidence; distinguish absence from missing coverage |
| Geographic relevance `GR` | Evidence within priority markets | source geography and market facts |
| Actionability `AC` | Ability to respond within the useful window | lead time, resources, rights, channel access |
| Strategic upside `SU` | Plausible brand/audience/business value | objective fit and expected learning/value |
| Brand risk `R` | Reputational, legal, safety, rights, or identity downside | policy checks and cultural review |

## 11.3 Priority formula

Default MVP formula for fashion/lifestyle:

```text
Timing = 0.45M + 0.25A + 0.15P + 0.15N
Relevance = 0.25AR + 0.25PR + 0.20BC + 0.20SR + 0.10GR
Opportunity = 0.35Relevance + 0.20Timing + 0.15CW + 0.15AC + 0.15SU
RiskMultiplier = 1 - 0.60(R / 100)
PriorityRaw = Opportunity × RiskMultiplier
Priority = round(clamp(PriorityRaw, 0, 100))
```

Hard gates override the formula:

- critical prohibited-topic match → `Blocked`;
- missing required rights → `Blocked`;
- action lead time exceeds high-confidence response window → Priority capped at 55 and response cannot be `Launch`;
- Brand Brain readiness < 60 → Priority can be computed internally but not shown as high-confidence;
- Confidence < 40 → card label is `Speculative`, regardless of Priority.

Weights are versioned. They may later be calibrated per brand but cannot be silently customized in a way that makes scores incomparable over time.

## 11.4 Confidence formula

```text
Confidence = 100 × (
  0.22 SourceReliability +
  0.18 IndependentSupport +
  0.15 CrossSourceCoverage +
  0.12 MeasurementCompleteness +
  0.12 ClaimAgreement +
  0.11 BrandBrainReadiness +
  0.10 ModelCalibration
) × (1 - 0.50 CoordinationRisk)
```

Inputs are 0–1. `ClaimAgreement` considers contradictory evidence, not merely model agreement.

Confidence bands:

- **80–100 High:** strong, diverse evidence; still not certainty.
- **60–79 Medium:** useful with visible caveats.
- **40–59 Low:** investigate or monitor; do not present strong prescriptions.
- **0–39 Speculative:** internal/research queue by default.

## 11.5 Priority bands

- **80–100 Act now:** immediate review; response window likely narrow.
- **65–79 Investigate:** meaningful opportunity; verify unknowns and choose response.
- **50–64 Monitor/Learn:** strategically interesting, not yet launch-ready.
- **0–49 Low priority:** accessible in archive/search, not normally alerted.

## 11.6 Explainability UI

Every score opens a panel containing:

- plain-language definition;
- current value and change;
- top positive inputs;
- top penalties;
- source coverage and blind spots;
- comparison with brand baseline;
- formula/model version;
- “what would change this score” conditions;
- user feedback control.

Example:

> **Product relevance 92 — High.** The movement directly overlaps with two active oversized-jersey products and the September capsule. This score would fall if inventory becomes unavailable. Sources: approved catalog version 14 and launch calendar version 6.

## 11.7 Competitive whitespace caveat

Radar may say “no competitor response observed in monitored sources.” It must not say “competitors have not responded” unless coverage justifies that claim. Missing data is not whitespace.

---

# 12. Evidence, provenance, and confidence framework

## 12.1 Evidence packet

Every Opportunity has a frozen, versioned Evidence Packet containing:

- movement snapshot and metric series;
- representative signals selected for diversity, not only engagement;
- supporting evidence;
- contradictory/disconfirming evidence;
- source-coverage table;
- independent-origin analysis;
- brand facts used;
- competitor observations;
- claims and citations;
- unknowns and assumptions;
- analyst/model notes;
- rights/display state.

## 12.2 Claim schema

```json
{
  "claim_id": "clm_01J...",
  "opportunity_version_id": "ov_01J...",
  "text": "Interest is spreading from football-fashion accounts into broader streetwear communities.",
  "type": "observed_inference",
  "confidence": 0.76,
  "supporting_evidence_ids": ["ev_1", "ev_2", "ev_3"],
  "contradicting_evidence_ids": ["ev_9"],
  "scope": {"market": ["GB"], "time_range": ["2026-08-08", "2026-08-29"]},
  "limitations": ["No licensed TikTok coverage"],
  "generated_by": "model:research-synth:v4",
  "verified_by": null
}
```

Claim types:

- `direct_observation`;
- `quantitative_result`;
- `observed_inference`;
- `historical_analogy`;
- `brand_interpretation`;
- `forecast`;
- `recommendation`.

The UI styles them differently so a forecast never looks like a measured fact.

## 12.3 Evidence quality dimensions

| Dimension | Question |
| --- | --- |
| Reliability | Is the source appropriate and authentic enough for this claim? |
| Independence | Does this evidence originate independently or repeat another source? |
| Recency | Is it current enough for the decision? |
| Relevance | Does it directly address the claim and market? |
| Coverage | Which communities/sources are represented or missing? |
| Consistency | Do multiple forms of evidence agree? |
| Rights | May Radar process, retain, and display it for this purpose? |

## 12.4 Citation behavior

- Every factual paragraph in an Opportunity and brief must link to claim IDs.
- Clicking a citation opens the exact source or permitted excerpt, capture time, and why it supports the claim.
- When display rights expire, the claim remains only if permitted derived retention exists; otherwise it is revalidated or removed.
- Generated creative references cite source movements but do not invite direct copying of protected work.
- Exports include a Sources and Limitations appendix.

## 12.5 “Why not?” section

Every Opportunity must contain a deliberately adversarial section:

- alternative explanation for the spike;
- evidence that the movement may be smaller, older, or less relevant than it appears;
- identity/permission reason not to participate;
- timing or operational constraint;
- coverage gap;
- conditions under which the recommendation should change.

This section is generated before the final recommendation and reviewed by the Critic and Risk agents.

## 12.6 User corrections

Users can mark a claim:

- correct;
- partly correct;
- incorrect;
- outdated;
- unsupported;
- culturally misread;
- source inaccessible.

Corrections preserve the original, create an amended claim, and feed evaluation datasets. A single user's correction affects that workspace immediately but does not globally alter a movement until reviewed or corroborated.

---

# 13. Complete user workflows

## 13.1 Workflow A — First-run activation

**Actor:** Workspace Owner  
**Entry:** New account  
**Exit:** Ready workspace and scheduled first scan

1. Create workspace and choose Brand or Agency mode.
2. Select primary category, markets, language, and expected response cadence.
3. Add brand URL, social handles, and optional files/catalog.
4. Radar previews sources, permissions, expected coverage, and cost tier.
5. System extracts Brand Brain proposals.
6. User reviews critical identity, audience, product, constraint, and competitor facts.
7. User sets strategic priorities and cultural exclusions.
8. User names the brand-safety approver.
9. User calibrates three example opportunity judgments.
10. Radar displays readiness and missing coverage.
11. User enables sources and confirms budget.
12. System starts scan and sends an in-product/email completion notification.

Exceptions:

- inaccessible site → user uploads material or continues with lower readiness;
- conflicting constraints → activation blocked until resolved;
- source authorization fails → connector remains disabled; no fake sample data is mixed into production;
- no product data → product relevance displays “insufficient data.”

## 13.2 Workflow B — Review opportunity inbox

**Actor:** Brand Lead or Strategist  
**Entry:** New opportunity card or digest  
**Exit:** Recorded decision

1. User sees ranked cards with movement, recommended response, Priority, Confidence, window, and new/change badge.
2. User filters by market, product, response mode, lifecycle, score, status, or source coverage.
3. Opening a card marks it viewed but does not train preference.
4. User reads the executive case, score reasons, evidence, risks, “why not,” and competitors.
5. User chooses one:
   - approve opportunity;
   - monitor with watch condition;
   - create learning memo;
   - request more research;
   - snooze;
   - dismiss with reason.
6. Radar records decision, actor, evidence version, comment, and optional approver route.
7. Approved `Launch`, `Partner`, or substantial `Participate` responses can enter Campaign Studio.

## 13.3 Workflow C — Monitor an uncertain movement

1. User selects `Monitor`.
2. Radar suggests observable watch conditions, for example:
   - Confidence reaches 65;
   - a second independent source family confirms it;
   - competitor action appears;
   - movement enters a priority market;
   - acceleration exceeds a specified threshold;
   - product inventory/launch becomes available.
3. User accepts/edits conditions and review deadline.
4. System updates silently unless a material condition triggers.
5. Triggered opportunity returns with a delta summary: what changed, what did not, and whether the recommendation changed.

## 13.4 Workflow D — Generate campaign strategy

**Precondition:** Opportunity approved and rights/safety gates pass.

1. User chooses response mode, objective, target market, channels, timing, and available resources.
2. Researcher builds a frozen evidence dossier.
3. Strategist creates opportunity thesis, audience tension, role for brand, proposition, behavior goal, and non-goals.
4. Risk agent runs policy and cultural-permission precheck.
5. User approves or edits the strategic foundation.
6. Creative Director produces three territories from intentionally different strategic mechanisms.
7. Art Director, Copy, Channel, and Producer agents elaborate each territory within token/cost limits.
8. Critic scores distinctiveness, specificity, evidence use, feasibility, cultural sensitivity, and brand ownability.
9. Weak territories are revised once or marked weak; the system does not loop indefinitely.
10. User compares territories, edits, combines allowed elements, or requests one bounded regeneration.
11. User selects a territory.
12. System creates the full brief and review checklist.
13. Named reviewers comment and approve.
14. User exports or hands off the approved brief.

## 13.5 Workflow E — Dismiss with learning

1. User selects `Dismiss`.
2. One-tap reasons appear: irrelevant audience, off-brand, weak evidence, too late, not actionable, already planned, rights/risk, duplicate, poor interpretation, other.
3. Optional note allows nuance.
4. Radar asks no more than one follow-up when a high-value unknown can be resolved.
5. Duplicate suppression and customer ranking preferences update.
6. Hard brand facts are not created from dismissal; the system may propose a new fact for approval after repeated consistent feedback.

## 13.6 Workflow F — Capture campaign outcomes

1. Campaign owner marks execution status and actual launch dates.
2. User connects or enters metrics by objective and channel.
3. System normalizes results against the brand's own baseline where possible.
4. User adds qualitative outcome: audience response, team assessment, creator feedback, press, operational issues.
5. Radar separates:
   - opportunity-thesis accuracy;
   - strategy quality;
   - creative execution quality;
   - distribution/media effect;
   - business outcome.
6. Outcome Review proposes learnings and Brand Brain updates.
7. User approves/rejects learnings.

Radar must never conclude a recommendation caused an outcome when the data supports only correlation.

## 13.7 Workflow G — Analyst operations

1. Analyst opens candidate queue sorted by potential customer impact, uncertainty, and anomaly.
2. Reviews merge/split, label, source diversity, spam risk, and sensitive context.
3. May promote, merge, split, relabel, suppress, or request retrieval.
4. Every action requires reason and is audited.
5. Analyst cannot see private Brand Brain data unless explicitly assigned and authorized.
6. Corrections feed evaluation sets and pipeline calibration.

---

# 14. Information architecture and navigation

## 14.1 Primary navigation

1. **Radar** — brand-specific opportunity inbox.
2. **Map** — movement relationships and lifecycle exploration; P1 for customers, operational in MVP admin.
3. **Campaigns** — strategy, territories, briefs, approvals, and outcomes.
4. **Brand Brain** — brand, product, audience, policy, priority, competitor, and history knowledge.
5. **Sources** — connectors, monitored arenas, coverage, rights, health, and budget.
6. **Analytics** — Radar adoption/quality and campaign learning; lightweight MVP.
7. **Settings** — members, roles, notifications, billing, exports, security, audit.

Persistent header:

- workspace/brand switcher;
- global search/command;
- scan/source health indicator;
- notifications;
- help and evidence legend;
- user menu.

## 14.2 Object hierarchy

```text
Workspace
├── Brand(s)
│   ├── Brand Brain versions
│   ├── Opportunities
│   │   ├── Evidence Packet versions
│   │   ├── Decisions
│   │   └── Campaign(s)
│   │       ├── Strategy versions
│   │       ├── Territories
│   │       ├── Brief versions
│   │       ├── Approvals
│   │       └── Outcomes
│   ├── Competitors
│   └── Source configuration
└── Members, roles, billing, and audit

Shared/market layer
└── Cultural Movements
    ├── Signals and evidence
    ├── lifecycle/metrics history
    └── relationships
```

## 14.3 Global interaction rules

- Priority uses warm color intensity; Confidence uses label/badge and never shares the same color scale.
- Risk never relies on red alone; use icon, text, and severity.
- Any metric can be opened to reveal definition and source coverage.
- Any AI-generated field is editable and versioned.
- “Regenerate” always states what will change and preserves the current version.
- Empty states teach the next action and disclose why data may be absent.
- Skeletons show processing; fabricated sample insights are never shown in a live workspace.
- Destructive actions require confirmation and recovery when possible.

---

# 15. Every MVP screen

## S01 — Sign in / workspace creation

**Purpose:** Authentication and organization setup.  
**Core UI:** SSO/email, workspace name, Brand/Agency selector, privacy/terms links.  
**States:** new, invited, existing user, expired invite, SSO-required.  
**Acceptance:** User lands only in authorized tenants; invite token cannot be reused.

## S02 — Brand setup wizard

**Purpose:** Create initial Brand Brain.  
**Core UI:** seven-step progress, website/handles, uploads, catalog, markets, competitors, priorities, safety owner, review.  
**Key behaviors:** autosave; extraction progress; per-source permission; skip with consequence; conflict resolution.  
**Completion:** readiness summary and first-scan estimate.

## S03 — Radar / Opportunity inbox

**Purpose:** Daily decision surface.  
**Core UI:**

- summary bar: new, act-now, monitoring triggered, source caveats;
- ranked opportunity cards;
- saved filter views;
- card: movement name, observable change, recommended response, Priority, Confidence, lifecycle, time window, strongest brand reason, risk, evidence change, market;
- list/dense view toggle;
- weekly digest export.

**Card actions:** open, approve, monitor, snooze, dismiss, save/share.  
**Empty states:** scan running; insufficient Brand Brain; sources unavailable; genuinely no qualified opportunities.

## S04 — Opportunity overview

**Purpose:** Make go/no-go decision.  
**Sections:**

1. decision header and status;
2. “What changed”;
3. “Why this brand”;
4. recommended response and useful window;
5. Priority and Confidence breakdown;
6. product/audience/strategy connections;
7. competitor whitespace with coverage caveat;
8. risks and “Why not?”;
9. next actions and approver.

**Sticky actions:** Monitor, Learn, Approve, Dismiss, Request research.  
**Acceptance:** All major claims have citations; approving freezes evidence version.

## S05 — Opportunity evidence

**Purpose:** Inspect proof and limitations.  
**Views:** evidence timeline, source table, metric charts, communities/markets, representative signals, contradiction tab, coverage matrix.  
**Controls:** date/source/market filters, independent-only toggle, open citation, report bad evidence.  
**Guardrail:** unavailable sources show metadata/limitation rather than invented excerpt.

## S06 — Movement detail

**Purpose:** Understand the cultural object beyond one brand.  
**Sections:** lifecycle, aliases, catalysts, meanings/counter-meanings, communities, terms, visual codes, related movements, history, forecast scenarios.  
**Privacy:** Shared movement view never exposes other customers' brands, decisions, or outcomes.

## S07 — Monitor setup / research request modal

**Purpose:** Convert uncertainty into observable follow-up.  
**UI:** suggested watch conditions, custom threshold, deadline, notification channel, optional research question, estimated cost/time.  
**Acceptance:** User can see and cancel active monitors; duplicate monitors consolidate.

## S08 — Campaign Studio: setup

**Purpose:** Define the creative job.  
**Inputs:** approved opportunity, response mode, objective, audience, market, channels, desired action, timing, budget band, available assets, mandatory elements, exclusions.  
**Preflight:** Brand Brain facts, evidence version, rights, risk, missing decisions, cost estimate.  
**Blockers:** unapproved opportunity, critical risk, missing approver, unavailable rights.

## S09 — Campaign Studio: strategy

**Purpose:** Approve the strategic foundation before ideation.  
**Editable artifact:**

- cultural opportunity;
- audience insight and tension;
- brand role/permission;
- objective and behavior change;
- proposition;
- response mode;
- reasons to believe;
- non-goals;
- success measures;
- assumptions and risks.

**Actions:** comment, edit, request targeted revision, approve strategy.  
**Acceptance:** Territory generation disabled until approved.

## S10 — Campaign Studio: territory comparison

**Purpose:** Select a genuinely distinct creative direction.  
**Each column/card:** name, one-line idea, strategic mechanism, narrative, activation, visual system, copy system, hero execution, creator/community role, ownability, risk, feasibility, critic score.  
**Controls:** compare differences, pin elements, reject, targeted revision, combine with warning, select.  
**Guardrail:** Difference panel must explain how territories differ; cosmetic variations fail distinctiveness validation.

## S11 — Campaign Studio: brief editor

**Purpose:** Produce an execution-ready brief.  
**Structure:** strategy, territory, visual/copy direction, channel matrix, content concepts, creator brief, landing page, production plan, timeline, measurements, risk checklist, sources/limitations.  
**Editor:** block-based rich text, suggestions, comments, history, citations, locked approved fields, export preview.  
**Actions:** request review, approve, duplicate, export, share.

## S12 — Approval center

**Purpose:** Centralize pending reviews.  
**Rows:** artifact, stage, brand, owner, risk level, due date, version, changes since prior review.  
**Reviewer view:** diff, unresolved comments, checks, approve/reject with reason.  
**Acceptance:** Approval is bound to a version; any material edit invalidates it.

## S13 — Campaigns list/detail

**Purpose:** Track active and historical work.  
**Views:** list/card/timeline; status, opportunity, owner, objective, launch, approval, outcome completeness.  
**Detail tabs:** Overview, Strategy, Territories, Brief, Approvals, Execution Links, Outcomes, History.

## S14 — Brand Brain overview

**Purpose:** Inspect brand readiness and active context.  
**UI:** readiness by domain, current priorities, high-impact constraints, data freshness, unresolved proposals/conflicts, last updates.  
**Actions:** edit, upload/connect, review proposals, compare versions, preview “how Radar sees this brand.”

## S15 — Brand Brain domain editor

**Purpose:** Manage facts with provenance.  
**UI:** structured fields plus fact table; source, confidence, scope, status, effective date.  
**Controls:** approve, reject, edit, supersede, bulk review, filter proposed/expired/conflict.  
**Guardrail:** Hard constraint removal requires owner confirmation and audit reason.

## S16 — Products and competitors

**Purpose:** Manage product actionability and competitive context.  
**Products:** families/SKUs, market, status, launch, availability, claims, priority.  
**Competitors:** handles/domains, coverage, positioning notes, observed actions, last successful scan.  
**Acceptance:** “No observed competitor action” always carries coverage date/sources.

## S17 — Sources and monitored arenas

**Purpose:** Configure and trust coverage.  
**Sources:** connector, authorization, status, rights, last sync, next sync, records, spend, errors.  
**Arenas:** topics/entities/communities, market/language, inclusions/exclusions, source mix, sensitivity, scan cadence.  
**Actions:** connect, pause, reauthorize, test, edit budget, add manual source.  
**Guardrail:** source rights and coverage limitations are user-visible.

## S18 — Analytics

**Purpose:** Show product quality and customer learning.  
**MVP widgets:** opportunities surfaced/adopted/dismissed, QOAR, low-value rate, decision time, response modes, confidence calibration, briefs created/approved, user ratings, campaign outcome completeness.  
**No vanity default:** raw signal/post volume is operational detail, not the headline.

## S19 — Notifications/digest settings

**Purpose:** Prevent alert fatigue.  
**Controls:** in-app/email, immediate thresholds, daily/weekly digest, quiet hours, per-market/product filters, monitor triggers.  
**Default:** weekly digest plus immediate only for Priority ≥80, Confidence ≥60, no high risk.

## S20 — Workspace settings, team, billing, audit

**Purpose:** Administration.  
**Tabs:** members/roles, approval routes, billing/usage, data retention, exports, API keys P1, audit log, deletion.  
**Acceptance:** role changes and data exports/deletion are audited; agency users cannot cross client boundaries.

## S21 — Internal operations console

**Purpose:** Run safe, cost-controlled service.  
**Views:** connector health, budget, failed jobs, candidate queue, merge/split, sensitive review, model evaluation, customer-impact incidents.  
**Access:** internal least-privilege roles; private customer context shown only when required and authorized.

---

# 16. Campaign and creative pipeline

## 16.1 Strategic foundation schema

```json
{
  "campaign_id": "cam_01J...",
  "opportunity_version_id": "ov_01J...",
  "brand_brain_version": 17,
  "response_mode": "launch",
  "objective": {"type": "brand_relevance", "statement": "..."},
  "audience": {"segment_ids": ["aud_..."], "context": "..."},
  "cultural_insight": "...",
  "human_tension": "...",
  "brand_permission": "...",
  "brand_role": "...",
  "proposition": "...",
  "desired_response": "...",
  "reasons_to_believe": ["..."],
  "non_goals": ["..."],
  "mandatory_elements": [],
  "constraints": [],
  "success_metrics": [],
  "assumptions": [],
  "evidence_claim_ids": ["clm_..."],
  "status": "draft",
  "version": 1
}
```

## 16.2 Territory requirements

Three territories must differ in at least three of these dimensions:

- audience tension framing;
- role of the brand;
- creative mechanism;
- narrative perspective;
- cultural code used;
- participation model;
- hero execution;
- channel behavior;
- emotional register.

Each territory includes:

1. name and one-line organizing idea;
2. strategic bridge from insight to idea;
3. brand role and cultural give-back;
4. narrative arc;
5. visual principles—not a list of copied references;
6. copy/message hierarchy;
7. hero execution;
8. 3–5 channel expressions;
9. creator/community role if relevant;
10. feasibility and timing;
11. risks and required rights;
12. distinctiveness/ownability rationale;
13. evidence and assumptions.

## 16.3 Critic rubric

Each criterion scores 1–5 with rationale:

| Criterion | Failure condition |
| --- | --- |
| Evidence fidelity | Misstates or overextends the movement evidence |
| Brand specificity | Could be used unchanged by three competitors |
| Cultural permission | Brand takes attention without a credible role or value exchange |
| Strategic clarity | Execution does not logically follow the insight/tension |
| Distinctiveness | Relies on generic AI tropes or superficial trend styling |
| Feasibility | Cannot be executed in the response window/resources |
| Channel integrity | Same asset copied across channels without behavioral adaptation |
| Safety/rights | Requires unaddressed claims, rights, protected material, or sensitive association |

Any score of 1 blocks recommendation. Average below 3 triggers one targeted revision. The Critic cannot approve; it advises the human reviewer.

## 16.4 Full brief structure

1. Executive creative brief.
2. Cultural opportunity and evidence snapshot.
3. Audience and tension.
4. Brand role, permission, and proposition.
5. Objective, desired behavior, and non-goals.
6. Selected territory and organizing idea.
7. Narrative and messaging hierarchy.
8. Visual system: art direction, composition, color, type, image, texture, motion, accessibility.
9. Copy system: headline behavior, supporting messages, CTA, vocabulary, prohibited language.
10. Channel plan and format matrix.
11. Hero asset/activation brief.
12. Content concepts and scripts.
13. Creator/partner brief and selection criteria.
14. Landing/e-commerce experience brief if relevant.
15. Production requirements, dependencies, rights, and owner.
16. Timeline and approval gates.
17. Measurement plan and learning agenda.
18. Risk, policy, accessibility, and legal checklist.
19. Sources, assumptions, unknowns, and limitations.

## 16.5 Reference and copyright policy

- Radar may describe patterns, principles, eras, materials, compositions, and cultural codes.
- It must not instruct users to copy a living artist's exact style or reproduce a protected campaign.
- References are evidence/context, not a parts catalogue for imitation.
- User-uploaded assets retain access controls and are not used to train shared models without explicit opt-in rights.
- Generated moodboard prompts should target an original visual system and include exclusion/rights guidance.
- Named people, trademarks, music, sports marks, photography, and creator content trigger rights review where relevant.

## 16.6 Export formats

MVP:

- styled PDF;
- Markdown;
- DOCX/Google Docs-compatible document;
- secure read-only web link;
- JSON package for internal portability.

P1:

- Figma/FigJam board;
- project/task creation;
- Adobe GenStudio/Workfront handoff;
- presentation deck;
- webhook/API.

---

# 17. Agent architecture

## 17.1 Design rules

- Agents communicate through versioned structured artifacts, not a free-form group chat.
- Deterministic services compute metrics; language models interpret and explain.
- Every agent has least-privilege tool and data access.
- Agents cannot silently change approved upstream artifacts.
- Each run has bounded time, token, tool, and monetary budgets.
- Outputs are schema-validated before the next stage.
- All runs record model, prompt/template, input IDs, tool calls, output, latency, cost, and evaluation flags.
- Provider failures degrade gracefully or route to an approved fallback.
- A workflow may retry technical failures, not endlessly retry subjective quality.

## 17.2 Agents and responsibilities

| Agent/service | Input | Output | Cannot do |
| --- | --- | --- | --- |
| Source Planner | monitored arena, connector rights, budget | query/retrieval plan | exceed rights/budget |
| Signal Enricher | normalized signal | entities, topics, language, quality, embeddings | declare a movement alone |
| Movement Synthesizer | validated cluster and history | label, meanings, lifecycle interpretation, claims | fabricate missing metrics |
| Opportunity Evaluator | movement, relevant Brand Brain facts, competitor evidence | relevance components, response options, assumptions | approve opportunity |
| Cultural Researcher | approved opportunity/research request | Evidence Packet and claim graph | write final creative idea |
| Strategist | Evidence Packet, brand context, objective inputs | Strategic Foundation | invent factual support |
| Creative Director | approved strategy | three territory cores | alter approved proposition silently |
| Art Director | territory core, visual facts, rights rules | visual system and execution direction | copy protected work |
| Copy Agent | territory, voice facts, claim constraints | messaging hierarchy and copy concepts | publish or make unsupported claims |
| Channel Planner | territory, channel constraints, audience | channel matrix and format concepts | buy media |
| Producer | approved direction, timing/resources | deliverables, dependencies, owners, schedule | promise unavailable resources |
| Risk & Brand Guardian | artifact, constraints, evidence, jurisdiction | findings, severity, required reviewer, block status | provide legal guarantee |
| Critic | all structured outputs and rubric | scores, failure reasons, revision request | approve work |
| Brief Composer | approved components | canonical brief | introduce new unsupported strategy |
| Outcome Analyst | opportunity, execution, metrics, baseline | decomposed outcome assessment and proposed learning | claim causality without design |

## 17.3 Orchestration graph

```text
Ingestion → deterministic validation/enrichment → clustering → movement synthesis
          → opportunity evaluation → confidence/risk gates → human opportunity decision
          → research → strategy → risk gate → human strategy approval
          → territory generation → specialist elaboration → critic/risk review
          → human territory choice → brief composition → human approval/export
          → outcome capture → learning proposal → human learning approval
```

## 17.4 Common AgentRun envelope

```json
{
  "run_id": "run_01J...",
  "agent": "strategist",
  "contract_version": "2.1.0",
  "tenant_id": "ten_...",
  "brand_id": "br_...",
  "input_artifact_ids": ["ep_...", "bbv_17"],
  "policy_context_id": "pol_...",
  "budget": {"max_tokens": 24000, "max_tool_calls": 8, "max_cost_usd": 1.50},
  "deadline_ms": 120000,
  "model_route": "strategy_high_reasoning",
  "trace_level": "standard",
  "requested_by": "usr_..."
}
```

## 17.5 Model routing

Capability routes—not vendor names—are configured:

- `realtime_x_research`;
- `fast_classification`;
- `multilingual_embedding`;
- `visual_embedding`;
- `structured_reasoning`;
- `creative_divergence`;
- `brand_copy`;
- `safety_review`;
- `long_context_synthesis`.

Grok may back `realtime_x_research` when it delivers the best permitted X grounding. Another model may back schema-heavy strategy and critique. Embeddings and image models remain separately replaceable. Each route has primary/fallback, cost ceiling, data-processing policy, region, and evaluation threshold.

## 17.6 Failure handling

| Failure | Behavior |
| --- | --- |
| Source unavailable | mark stale/partial coverage; do not infer activity |
| Model timeout | retry once with same idempotency key, then fallback or surface delay |
| Schema failure | constrained repair once; then human/ops queue |
| Citation mismatch | block artifact stage and rerun claim verifier |
| Risk agent unavailable | block approval/export for consequential work |
| Cost cap reached | pause low-priority work and notify admin; never bypass cap |
| Conflicting agent outputs | preserve both, invoke Critic or human decision; no majority-vote fiction |

---

# 18. Agent contracts and schemas

## 18.1 Opportunity Evaluator

**Input:** movement version, selected approved Brand Brain facts, competitor observations, market/calendar context, component metrics.  
**Output:**

```json
{
  "movement_version_id": "mv_...",
  "brand_id": "br_...",
  "observable_change": "...",
  "brand_relevance": {
    "audience": {"score": 84, "fact_ids": ["bf_..."], "rationale": "..."},
    "product": {"score": 92, "fact_ids": ["bf_..."], "rationale": "..."},
    "compatibility": {"score": 73, "fact_ids": ["bf_..."], "rationale": "..."},
    "strategic": {"score": 88, "fact_ids": ["bf_..."], "rationale": "..."},
    "geographic": {"score": 61, "rationale": "..."}
  },
  "whitespace": {"score": 69, "coverage_statement": "...", "evidence_ids": []},
  "actionability": {"score": 76, "window": {"min_days": 7, "max_days": 21, "confidence": 0.58}},
  "strategic_upside": {"score": 80, "objective_links": []},
  "risk": {"score": 21, "flags": []},
  "recommended_response": "launch",
  "alternative_responses": ["partner", "monitor"],
  "reasons_to_act": [],
  "reasons_not_to_act": [],
  "unknowns": [],
  "claim_drafts": [],
  "self_check": {"unsupported_claims": [], "missing_inputs": []}
}
```

**Validation:** every non-metric rationale must reference facts or evidence; all scores 0–100; no approval field.

## 18.2 Cultural Researcher

**Input:** Opportunity version, explicit questions, accessible source catalog, retrieval budget.  
**Output:** Evidence Packet plus claim graph.  
**Required behaviors:** search for disconfirming evidence; distinguish origin from earliest observed; report inaccessible sources; cap source concentration; never treat engagement as representative sentiment.

## 18.3 Strategist

**Input:** frozen Evidence Packet, retrieved Brand Brain slice, user objective/resources.  
**Output:** Strategic Foundation schema from §16.1.  
**Required checks:** each insight follows from claim IDs; brand role adds value; proposition does not copy community language without reason; assumptions explicit; no creative territory yet.

## 18.4 Creative Director

**Input:** approved Strategic Foundation, creative constraints, historical campaign similarity summary.  
**Output:** exactly three Territory Core objects:

```json
{
  "territory_id": "ter_...",
  "name": "Away Is a State of Mind",
  "organizing_idea": "...",
  "strategic_mechanism": "identity_reframing",
  "audience_tension_used": "...",
  "brand_role": "...",
  "narrative": "...",
  "hero_execution": "...",
  "participation_model": "creator_collaboration",
  "visual_principles": [],
  "copy_principles": [],
  "channel_behaviors": [],
  "ownability": "...",
  "feasibility": {"level": "medium", "dependencies": []},
  "rights_dependencies": [],
  "risks": [],
  "difference_dimensions": ["strategic_mechanism", "brand_role", "hero_execution"]
}
```

**Validation:** pairwise semantic and structural difference threshold; no fake quotations, invented partners, or inaccessible rights.

## 18.5 Specialist output contract

Every specialist returns:

- `territory_id` and upstream version;
- recommendations;
- mandatory inputs used;
- assumptions;
- dependencies;
- policy/rights flags;
- confidence;
- open questions.

Specialists cannot introduce a new audience, objective, proposition, product, or factual claim without issuing an explicit change request.

## 18.6 Risk & Brand Guardian

**Output:**

```json
{
  "artifact_id": "brief_...",
  "overall": "review_required",
  "findings": [
    {
      "code": "RIGHTS_SPORTS_MARK",
      "severity": "high",
      "location": "territory.hero_execution",
      "explanation": "Use of club marks may require licensing.",
      "policy_fact_ids": ["bf_policy_..."],
      "required_action": "Replace marks or obtain rights review.",
      "blocks_stage": true,
      "reviewer_role": "legal"
    }
  ],
  "brand_alignment": {"score": 82, "conflicts": []},
  "unresolved_unknowns": [],
  "checked_at": "...",
  "policy_version": "..."
}
```

Severity: `info`, `low`, `medium`, `high`, `critical`. High/critical may block based on policy; critical always blocks.

## 18.7 Critic

**Input:** all artifacts, rubric version, historical similarity summaries.  
**Output:** criterion scores, quoted artifact locations, top failure, targeted revision instructions, and pass/revise recommendation.  
**Constraint:** must not rewrite the work in the same call; separation makes evaluation measurable.

## 18.8 Outcome Analyst

**Input:** movement/opportunity snapshots, approved strategy, execution record, results, baselines, external changes.  
**Output:**

- thesis outcome: supported/mixed/not supported/insufficient data;
- strategy assessment;
- execution assessment;
- distribution context;
- business result relative to baseline;
- confounders;
- proposed Brand Brain or scoring learnings;
- confidence and causal limitation.

No learning becomes active until human approval and minimum evidence thresholds.

---

# 19. Technical architecture

## 19.1 Architecture goals

- ship a credible MVP with a small team;
- preserve a clean separation between tenant-private brand data and shareable public movement data;
- support temporal analytics, semantic search, provenance, and durable AI workflows;
- make source and model providers replaceable;
- enforce rights, budget, and approval gates in code rather than prompt text;
- scale ingestion and workflow workers independently;
- produce complete auditability without storing unnecessary chain-of-thought.

## 19.2 Recommended MVP stack

| Layer | Recommendation | Rationale |
| --- | --- | --- |
| Web application | Next.js + TypeScript, accessible component system | Fast product iteration, SSR where useful, strong type sharing |
| Core API | TypeScript service using Fastify/NestJS-style modules | Consistent contracts, auth, tenant policy, transactional workflows |
| Data/ML workers | Python services | Mature clustering, statistics, embeddings, and evaluation ecosystem |
| Transactional database | PostgreSQL | Relational integrity, JSONB, row-level security support |
| Vector search | pgvector in MVP | Avoid separate vector infrastructure before scale demands it |
| Time-series/analytics | PostgreSQL partitions/materialized views in MVP; ClickHouse when volume requires | Lower initial complexity; clear migration path |
| Object storage | S3-compatible encrypted storage | Files, bounded raw payloads, exports, media derivatives |
| Cache/queues | Redis plus durable job/workflow engine | Idempotency, rate limits, short-lived state, background work |
| Durable orchestration | Temporal, Inngest, Trigger.dev, or equivalent selected by team | Approval waits, retries, timeouts, long-running agent workflows |
| Search | PostgreSQL full-text initially; OpenSearch later | Enough for MVP movement/brand search |
| Auth | Managed OIDC/SAML-capable provider | Secure onboarding and later enterprise SSO |
| Observability | OpenTelemetry + logs/metrics/traces + error tracking | End-to-end connector and agent visibility |
| Deployment | Managed containers/serverless workers in one primary region | Small-team operations and isolation |

The exact vendor can change. Domain interfaces and data contracts are the specification.

## 19.3 Logical services

1. **Web/BFF:** user interface, server-side rendering, secure file delivery.
2. **Identity & Tenant Policy:** auth, roles, brand/client isolation, entitlements.
3. **Brand Knowledge:** sources, facts, policies, retrieval, versions.
4. **Connector Gateway:** official/licensed source adapters and budgets.
5. **Signal Pipeline:** normalization, deduplication, enrichment, rights enforcement.
6. **Movement Engine:** clustering, graph reconciliation, metrics, lifecycle.
7. **Opportunity Engine:** brand matching, scoring, confidence, ranking, monitors.
8. **Evidence Service:** claims, provenance, source display, frozen packets.
9. **Campaign Service:** strategy, territories, briefs, versions, exports.
10. **Agent Orchestrator:** contracts, model routing, tools, budgets, evaluations.
11. **Policy & Approval:** safety checks, approval routes, artifact locks.
12. **Analytics & Learning:** product metrics, outcomes, calibration, approved learning.
13. **Notification Service:** in-app/email/digest/monitor triggers.
14. **Admin/Ops:** candidate review, source health, spend, incidents.

These may be modules in a modular monolith for MVP. Split only when load, fault isolation, or ownership justifies it.

## 19.4 Tenant and data separation

Data is classified into:

- **shared public-derived:** Cultural Movements and permitted source-derived features that can lawfully be shared;
- **tenant-private:** Brand Brain, source authorization, Opportunities, Campaigns, decisions, outcomes;
- **restricted:** unpublished documents, credentials, customer-specific raw data, legal policies;
- **operations-only:** cost, traces, evaluation labels, abuse indicators.

Every table includes or derives a tenant scope. Database access uses tenant context plus row-level policies; object keys are tenant-scoped; queue messages contain opaque IDs, not raw private content. Cross-tenant shared movement jobs receive no Brand Brain data.

## 19.5 Event model

Key immutable domain events:

- `signal.normalized`;
- `signal.rights_changed`;
- `movement.created|updated|merged|split|lifecycle_changed`;
- `opportunity.surfaced|rescored|decision_recorded|monitor_triggered`;
- `brand_brain.fact_proposed|approved|superseded`;
- `campaign.strategy_approved|territory_selected|brief_approved`;
- `risk.finding_created|resolved`;
- `outcome.recorded|learning_proposed|learning_approved`.

Events use an outbox pattern from transactional writes. Consumers are idempotent.

## 19.6 Data flow

1. Connector Gateway writes encrypted raw payload and normalized retrieval metadata.
2. Signal Pipeline validates rights, normalizes, deduplicates, enriches, and emits `signal.normalized`.
3. Movement Engine updates candidate windows and graph metrics.
4. A promoted movement emits an update; Opportunity Engine retrieves only eligible brands based on monitored arenas, then applies private context within each tenant.
5. Opportunity is stored with score version and draft claims; Evidence Service verifies and freezes a packet before surfacing.
6. User decision triggers Campaign workflow or Monitor workflow.
7. Agent Orchestrator writes only validated versioned artifacts through domain services.
8. Approved output can be exported; execution/outcome data later closes the loop.

## 19.7 Non-functional requirements

| ID | Requirement |
| --- | --- |
| NFR-001 | 99.5% monthly availability for customer application during paid beta; no crisis SLA |
| NFR-002 | p95 page/API response under 2 seconds for cached/list reads and under 4 seconds for complex detail reads, excluding declared background generation |
| NFR-003 | New qualifying opportunities surfaced within 6 hours of source retrieval in MVP; target under 60 minutes for configured priority scans later |
| NFR-004 | All write APIs idempotent where clients may retry |
| NFR-005 | Encryption in transit and at rest; managed secrets; no credentials in prompts/logs |
| NFR-006 | Tenant isolation tests run in CI and before deployment |
| NFR-007 | RPO ≤ 24 hours and RTO ≤ 8 hours during pilot; improve for enterprise |
| NFR-008 | Accessibility target WCAG 2.2 AA for customer UI |
| NFR-009 | Every displayed factual AI claim traceable to evidence or explicitly labeled assumption |
| NFR-010 | Model/provider outage cannot bypass risk or approval gates |
| NFR-011 | Source and model spend enforce hard per-tenant and global caps |
| NFR-012 | Customer deletion completes within documented period and includes dependent data where legally/contractually required |

## 19.8 Observability

Dashboards:

- connector success, lag, rate-limit, and spend;
- signals by source/tier and duplicate ratio;
- candidate promotion, merge, split, suppression, false-positive review;
- opportunity latency, priority/confidence distribution, evidence failures;
- agent latency, cost, schema failure, citation failure, critic score;
- approval bottlenecks and export failures;
- tenant isolation/access anomalies;
- QOAR and low-value rate by cohort without exposing client content.

Alerts:

- rights profile expired;
- connector error/rate-limit spike;
- budget threshold;
- queue delay;
- citation verifier failure spike;
- cross-tenant policy denial;
- critical risk-check failure;
- deletion/retention job failure.

## 19.9 Environments and release controls

- Local, development, staging, production.
- Synthetic/licensed fixtures only in automated tests.
- Production-like rights and tenant policies in staging.
- Feature flags by workspace, source, model route, and agent contract.
- Schema and prompt versions deployed independently but recorded together.
- Canary rollout for scoring/model changes.
- Rollback preserves artifact version history.
- No production customer data in developer laptops or general model-evaluation tools.

---

# 20. Database schema

## 20.1 Conventions

- IDs use sortable opaque UUIDv7/ULID-style identifiers.
- All mutable business objects include `created_at`, `updated_at`, `version`, and actor.
- Soft deletion is used only where recovery/audit is required; retention jobs later hard-delete.
- Evidence and approvals are append-only.
- Embeddings include model/version and are regenerable if rights permit.

## 20.2 Identity and tenancy

### `tenants`

`id`, `name`, `type (brand|agency)`, `plan`, `status`, `primary_region`, `retention_policy_id`, timestamps.

### `users`

`id`, identity-provider subject, email, display name, status, timestamps.

### `memberships`

`tenant_id`, `user_id`, `role`, `brand_scope[]`, invitation state, timestamps. Unique `(tenant_id,user_id)`.

### `brands`

`id`, `tenant_id`, `name`, `slug`, `category`, `default_market`, `status`, `current_brand_brain_version_id`, timestamps.

### `approval_routes`

`id`, `tenant_id`, `brand_id`, `artifact_type`, `risk_condition`, `ordered_steps JSONB`, active/version.

## 20.3 Brand knowledge

### `brand_sources`

`id`, `tenant_id`, `brand_id`, `type`, `title`, `uri/object_ref`, `checksum`, `sensitivity`, `authorization_basis`, `status`, `last_ingested_at`, `deleted_at`.

### `brand_brain_versions`

`id`, `tenant_id`, `brand_id`, `version_number`, `status`, `readiness_score`, `created_by`, `approved_by`, `approved_at`, `change_summary`.

### `brand_facts`

`id`, `tenant_id`, `brand_id`, `brain_version_id`, `domain`, `predicate`, `value JSONB`, `scope JSONB`, `confidence`, `status`, `sensitivity`, `effective_from`, `effective_to`, `created_by`, `approved_by`.

### `brand_fact_sources`

`fact_id`, `source_id`, `locator JSONB`, `relation (supports|contradicts|context)`.

### `audience_segments`

`id`, `tenant_id`, `brand_id`, `name`, `description`, `needs JSONB`, `interests JSONB`, `communities JSONB`, `markets[]`, `evidence_fact_ids[]`, `status`.

### `products`

`id`, `tenant_id`, `brand_id`, `external_id`, `family_id`, `name`, `description`, `attributes JSONB`, `markets[]`, `availability`, `launch_at`, `retire_at`, `priority`, `claims JSONB`, `asset_refs JSONB`, `source_id`.

### `competitors`

`id`, `tenant_id`, `brand_id`, `name`, `domains[]`, `handles JSONB`, `category`, `positioning`, `coverage_config JSONB`, `active`.

## 20.4 Connectors and signals

### `data_rights_profiles`

`id`, `source_type`, `version`, `commercial_basis`, `allowed_fields JSONB`, `allowed_uses JSONB`, `display_rules JSONB`, `retention_rules JSONB`, `training_allowed`, `geographies[]`, `reviewed_by`, `reviewed_at`, `expires_at`, `status`.

### `connectors`

`id`, `tenant_id nullable`, `brand_id nullable`, `type`, `credential_ref`, `rights_profile_id`, `config JSONB`, `status`, `budget_policy_id`, `last_success_at`, `last_error_code`, timestamps.

### `monitored_arenas`

`id`, `tenant_id`, `brand_id`, `name`, `topics JSONB`, `entities JSONB`, `markets[]`, `languages[]`, `include_rules`, `exclude_rules`, `connector_ids[]`, `cadence`, `sensitivity`, `active`.

### `signals`

`id`, `tenant_scope`, `connector_id`, `source_type`, `source_tier`, `external_id_hash`, `canonical_url`, `published_at`, `observed_at`, `author JSONB`, `content JSONB/object_ref`, `engagement JSONB`, `geo JSONB`, `quality JSONB`, `rights_profile_id`, `retention_until`, `processing_version`.

Indexes: `(source_type,published_at)`, `(content_hash)`, `(retention_until)`, GIN on relevant JSONB, partition by month after volume threshold.

### `signal_features`

`signal_id`, `entities JSONB`, `topics[]`, `audience_clues JSONB`, `sentiment JSONB nullable`, `semantic_embedding vector`, `visual_embedding vector nullable`, `embedding_model`, `feature_version`.

### `duplicate_groups`

`id`, `canonical_signal_id`, `method`, `confidence`, timestamps.

### `duplicate_group_members`

`group_id`, `signal_id`, `relationship`.

## 20.5 Cultural graph

### `movements`

`id`, `canonical_name`, `description`, `scope JSONB`, `created_at`, `status`, `current_version_id`, `sensitivity`.

### `movement_versions`

`id`, `movement_id`, `version_number`, `aliases[]`, `summary`, `meanings JSONB`, `visual_codes JSONB`, `communities JSONB`, `markets JSONB`, `lifecycle_distribution JSONB`, `quality JSONB`, `pipeline_version`, `valid_from`, `valid_to`.

### `movement_signals`

`movement_version_id`, `signal_id`, `relation`, `weight`, `independent_origin_id`, `evidence_role`.

### `movement_metrics`

`movement_id`, `bucket_start`, `bucket_size`, `source_type`, `market`, `unique_origins`, `activity_adjusted`, `momentum`, `acceleration`, `novelty`, `persistence`, `saturation`, `coordination_risk`, `coverage JSONB`, `metric_version`.

### `movement_edges`

`id`, `from_movement_id`, `to_movement_id`, `type`, `weight`, `confidence`, `evidence_ids[]`, `valid_from`, `valid_to`, `created_by`.

### `movement_lineage`

`from_movement_id`, `to_movement_id`, `operation (merge|split|submovement|revival)`, `reason`, `actor`, timestamp.

## 20.6 Opportunities and evidence

### `opportunities`

`id`, `tenant_id`, `brand_id`, `movement_id`, `status`, `current_version_id`, `owner_id`, `first_surfaced_at`, `last_material_change_at`.

Unique active constraint on `(brand_id,movement_id)` with lineage/version handling.

### `opportunity_versions`

`id`, `opportunity_id`, `version_number`, `movement_version_id`, `brand_brain_version_id`, `observable_change`, `recommended_response`, `useful_window JSONB`, `component_scores JSONB`, `priority`, `confidence`, `risk_level`, `reasons_to_act JSONB`, `reasons_not_to_act JSONB`, `unknowns JSONB`, `score_version`, `created_at`.

### `evidence_packets`

`id`, `opportunity_version_id`, `status`, `coverage JSONB`, `limitations JSONB`, `checksum`, `frozen_at`, `created_by`.

### `evidence_items`

`id`, `packet_id`, `signal_id nullable`, `brand_fact_id nullable`, `external_ref JSONB nullable`, `role`, `quality JSONB`, `display_snapshot JSONB`, `rights_state`.

### `claims`

`id`, `packet_id`, `type`, `text`, `confidence`, `scope JSONB`, `limitations JSONB`, `generated_by`, `verified_by`, timestamps.

### `claim_evidence`

`claim_id`, `evidence_item_id`, `relation (supports|contradicts|context)`, `weight`.

### `decisions`

`id`, `tenant_id`, `opportunity_id`, `opportunity_version_id`, `actor_id`, `decision_type`, `reason_code`, `comment`, `created_at`.

### `monitors`

`id`, `opportunity_id`, `owner_id`, `conditions JSONB`, `deadline`, `notification_policy`, `status`, `last_evaluated_at`, `triggered_at`.

## 20.7 Campaigns and approvals

### `campaigns`

`id`, `tenant_id`, `brand_id`, `opportunity_id`, `name`, `response_mode`, `objective JSONB`, `owner_id`, `status`, `planned_start`, `planned_end`, timestamps.

### `campaign_artifacts`

`id`, `campaign_id`, `type (strategy|territory|brief|channel_plan|production_plan)`, `version_number`, `content JSONB`, `upstream_artifact_ids[]`, `model_run_id nullable`, `status`, `created_by`, timestamps.

### `artifact_comments`

`id`, `artifact_id`, `artifact_version`, `author_id`, `anchor JSONB`, `text`, `status`, timestamps.

### `approvals`

`id`, `artifact_id`, `artifact_version`, `route_id`, `step`, `reviewer_id`, `decision`, `reason`, `decided_at`.

### `risk_findings`

`id`, `artifact_id`, `artifact_version`, `code`, `severity`, `location`, `explanation`, `required_action`, `blocks_stage`, `reviewer_role`, `policy_version`, `status`, `resolved_by`, `resolved_at`.

### `exports`

`id`, `artifact_id`, `artifact_version`, `format`, `object_ref`, `requested_by`, `expires_at`, `status`.

## 20.8 Outcomes, AI, and audit

### `campaign_executions`

`id`, `campaign_id`, `channel`, `external_ref`, `launched_at`, `ended_at`, `spend`, `currency`, `metadata JSONB`.

### `outcome_metrics`

`id`, `campaign_id`, `execution_id nullable`, `metric`, `value`, `unit`, `window`, `baseline_value`, `source`, `confidence`, `captured_at`.

### `campaign_learnings`

`id`, `campaign_id`, `type`, `statement`, `evidence JSONB`, `confidence`, `proposed_change JSONB`, `status`, `approved_by`.

### `agent_runs`

`id`, `tenant_id`, `agent`, `contract_version`, `model_route`, `provider_model`, `input_artifact_ids[]`, `output_artifact_ids[]`, `budget JSONB`, `usage JSONB`, `latency_ms`, `status`, `error_code`, `evaluation JSONB`, timestamps.

### `audit_events`

`id`, `tenant_id`, `actor_type`, `actor_id`, `action`, `object_type`, `object_id`, `object_version`, `metadata JSONB`, `ip_hash`, `created_at`.

### `feedback`

`id`, `tenant_id`, `user_id`, `object_type`, `object_id`, `label`, `reason_code`, `comment`, `created_at`.

---

# 21. API strategy

## 21.1 API principles

- REST/JSON for product APIs in MVP; asynchronous jobs for long operations.
- OpenAPI-generated contracts and typed clients.
- Opaque cursor pagination.
- Idempotency keys for creation and generation.
- ETags/version preconditions for edits.
- Webhooks P1 for approved domain events.
- No direct model-provider calls from the browser.
- All list/detail APIs enforce tenant/brand scope server-side.

## 21.2 Core endpoints

### Brands and Brand Brain

```text
POST   /v1/brands
GET    /v1/brands/{brandId}
POST   /v1/brands/{brandId}/sources
POST   /v1/brands/{brandId}/extractions
GET    /v1/brands/{brandId}/brain
GET    /v1/brands/{brandId}/brain/facts
PATCH  /v1/brands/{brandId}/brain/facts/{factId}
POST   /v1/brands/{brandId}/brain/approve
GET    /v1/brands/{brandId}/brain/versions
```

### Sources and arenas

```text
GET    /v1/connectors
POST   /v1/connectors
POST   /v1/connectors/{id}/authorize
POST   /v1/connectors/{id}/test
PATCH  /v1/connectors/{id}
GET    /v1/connectors/{id}/health
POST   /v1/brands/{brandId}/arenas
PATCH  /v1/arenas/{id}
POST   /v1/arenas/{id}/scan
```

### Radar

```text
GET    /v1/brands/{brandId}/opportunities
GET    /v1/opportunities/{id}
GET    /v1/opportunities/{id}/evidence
GET    /v1/movements/{id}
POST   /v1/opportunities/{id}/decisions
POST   /v1/opportunities/{id}/monitors
POST   /v1/opportunities/{id}/research
```

### Campaign Studio

```text
POST   /v1/opportunities/{id}/campaigns
GET    /v1/campaigns/{id}
POST   /v1/campaigns/{id}/strategy/generate
PATCH  /v1/campaigns/{id}/artifacts/{artifactId}
POST   /v1/campaigns/{id}/artifacts/{artifactId}/review
POST   /v1/campaigns/{id}/territories/generate
POST   /v1/campaigns/{id}/territories/{territoryId}/select
POST   /v1/campaigns/{id}/brief/generate
POST   /v1/artifacts/{id}/approvals
POST   /v1/artifacts/{id}/exports
```

### Feedback/outcomes

```text
POST   /v1/feedback
POST   /v1/campaigns/{id}/executions
POST   /v1/campaigns/{id}/outcomes
POST   /v1/campaigns/{id}/learnings/{learningId}/decision
GET    /v1/brands/{brandId}/analytics
```

## 21.3 Asynchronous job contract

Long operations return `202 Accepted`:

```json
{
  "job_id": "job_01J...",
  "type": "campaign.territories.generate",
  "status": "queued",
  "status_url": "/v1/jobs/job_01J...",
  "estimated_seconds": 90,
  "cost_estimate": {"unit": "credits", "max": 3}
}
```

Client may poll or use server-sent updates. Job terminal states: `succeeded`, `failed`, `cancelled`, `needs_input`, `blocked`.

## 21.4 Error format

```json
{
  "error": {
    "code": "EVIDENCE_CONFIDENCE_TOO_LOW",
    "message": "This opportunity needs more evidence before campaign generation.",
    "details": {"confidence": 34, "minimum": 40},
    "request_id": "req_...",
    "remediation": {"action": "create_monitor", "href": "/v1/opportunities/.../monitors"}
  }
}
```

Errors are safe for users; internal/provider details remain in traces.

## 21.5 Integration strategy

P1 inbound:

- approved social-listening exports/aggregates;
- Shopify/product and inventory;
- GA4 or privacy-safe web analytics;
- ad platform campaign aggregates;
- document/DAM references.

P1 outbound:

- Google Docs/Drive;
- Slack/Teams notifications;
- Asana/ClickUp/Linear/Jira tasks;
- Figma/FigJam board;
- Adobe/Workfront/GenStudio handoff;
- generic webhooks and signed export URLs.

Integrations transmit the minimum required artifact and respect user-selected scope.

---

# 22. Human approval, safety, and brand-risk architecture

## 22.1 Approval gates

| Gate | Required artifact | Default approver | Blocking checks |
| --- | --- | --- | --- |
| Opportunity | Evidence Packet + recommendation | Brand/Strategy Lead | confidence, rights, critical risk |
| Strategy | Strategic Foundation | Brand Lead | evidence fidelity, permission, objective, constraints |
| Territory | selected Territory | Creative Director | distinctiveness, feasibility, rights, brand alignment |
| Brief | complete brief | Campaign Owner + required specialists | unresolved comments/findings |
| Asset/handoff | external execution material | Creative/Legal as policy requires | claims, rights, accessibility, market policy |
| Publish P2 | channel-ready approved asset | Named publisher | immutable approved version and channel authorization |

## 22.2 Policy hierarchy

Checks apply in this order:

1. law and platform/source obligations;
2. Radar universal safety policy;
3. industry/category policy;
4. tenant policy;
5. brand policy and contractual rights;
6. campaign-specific constraints;
7. learned preferences.

Lower levels cannot override higher levels.

## 22.3 Risk taxonomy

- cultural appropriation/extraction;
- stereotyping, demeaning, hateful, or exclusionary content;
- political, religious, conflict, tragedy, and crisis sensitivity;
- minors and vulnerable groups;
- health, financial, environmental, performance, or comparative claims;
- intellectual property, trademark, publicity, music, sports, creator, and image rights;
- privacy and personal data;
- regulated products/markets;
- misinformation and unsupported factual claims;
- brand inconsistency or partnership conflict;
- accessibility and localization;
- manipulation, undisclosed sponsorship, or deceptive practices;
- operational infeasibility and unsafe activation.

## 22.4 Cultural permission assessment

The assessment asks:

1. Does the brand have history or credibility in this space?
2. Is there a relevant product, action, or contribution beyond attention capture?
3. Who originated or sustains the movement, and are they represented?
4. What value flows back to creators/community?
5. Is partnership more credible than brand ownership?
6. Could participation distort, commodify, or expose a vulnerable community?
7. Is the movement built on tragedy, political identity, or protected cultural expression?
8. What would a skeptical audience reasonably criticize?

Outputs: `credible`, `credible_with_conditions`, `partner_required`, `monitor_only`, `do_not_participate`, plus rationale and evidence.

## 22.5 Automated controls

- hard constraint retrieval before generation;
- safety classification at signal, movement, opportunity, and artifact levels;
- claim/citation verifier;
- named-entity/rightsholder checks;
- similarity checks against customer historical assets and known reference material where permitted;
- prompt-injection and malicious document isolation;
- output schema and policy validators;
- approval lock and artifact hash;
- export block on unresolved critical/high findings according to route;
- rate/cost/permission enforcement outside models.

## 22.6 Prompt-injection defense

External content is untrusted data, never instruction. The ingestion layer strips active content and scripts; source text is delimited and passed only to agents that need it. Agents receive explicit tool allowlists and cannot follow links or reveal secrets merely because a signal requests it. Retrieved text cannot alter system policy, source rights, budget, recipients, or approval status.

## 22.7 Privacy and data protection

- Purpose limitation and data minimization by connector.
- Avoid individual-level profiling; use aggregate communities and broad audience clues.
- Do not infer sensitive traits from usernames, images, or behavior.
- Tenant-private data is not used to train shared models without a separate explicit agreement and valid rights.
- Providers used for private context must offer appropriate data controls and contractual terms.
- Configurable retention and deletion; source-mandated deletion takes precedence.
- Customer exports and access requests are audited.
- Security roadmap includes threat modeling, penetration testing, incident response, vendor review, and SOC 2 readiness before enterprise claims.

## 22.8 Incident response

Severity examples:

- **SEV-1:** cross-tenant disclosure, credential exposure, unsafe public activation, or systematic rights breach;
- **SEV-2:** materially false high-risk opportunity sent to multiple customers, connector processing outside approved use;
- **SEV-3:** isolated bad citation, delayed scans, failed exports;
- **SEV-4:** cosmetic or low-impact defect.

SEV-1 response: stop affected flow, revoke access/connector, preserve logs, assess customer/legal notification, patch, verify deletion/containment, post-incident review. Customer-facing status must be factual and timely.

---

# 23. Analytics and learning system

## 23.1 Measurement layers

### Product quality

- qualified opportunities surfaced;
- QOAR;
- low-value alert rate;
- time to decision;
- monitor-trigger precision;
- duplicate/late opportunity rate;
- claim correction and citation failure rate;
- Priority/Confidence calibration;
- source coverage and freshness.

### Workflow value

- time from approval to strategy/brief;
- territory selection and regeneration rates;
- brief usefulness rating;
- edit distance by section;
- approval cycle count and duration;
- export/handoff rate.

### Customer value

- adopted opportunities per brand/month;
- percentage leading to Learn/Participate/Partner/Launch;
- hours saved self-reported and sampled;
- renewal/expansion;
- share of weekly planning meetings using Radar;
- campaign outcomes relative to customer baseline where available.

### System economics

- source cost per surfaced and adopted opportunity;
- AI cost per accepted brief;
- gross margin by plan/connector;
- analyst minutes per surfaced opportunity;
- failure/retry cost.

## 23.2 Campaign metrics by objective

Radar asks the user to select one primary objective and no more than three secondary metrics.

| Objective | Example measures |
| --- | --- |
| Cultural relevance/attention | qualified reach, share of relevant conversation, branded search lift, audience/creator qualitative response |
| Engagement/community | saves, meaningful comments, participation, creator/community uptake, sentiment with manual validation |
| Traffic/consideration | qualified sessions, product views, email signups, assisted conversions |
| Commercial | incremental sales where measurable, conversion, sell-through, new-customer rate, margin |
| Learning | hypothesis resolution, segment response difference, creative attribute learning |

Vanity engagement cannot be the default success criterion for every campaign.

## 23.3 Outcome decomposition

The system separately evaluates:

```text
Cultural thesis × Strategic response × Creative execution × Distribution × Market context
```

A weak result does not automatically mean the movement was false. A strong result does not prove the system caused it. Outcome records include confounders, baseline method, attribution limits, and completeness.

## 23.4 Learning policy

Allowed immediate customer-specific learning:

- dismissal suppression;
- saved filters and notification preferences;
- explicit approved facts;
- explicit artifact edits/preferences.

Learning requiring review/minimum sample:

- score-weight changes;
- assumed audience affinity;
- cultural permission expansion;
- preferred territory mechanism;
- outcome-performance association.

Hard policies and brand values never change through implicit behavioral learning.

## 23.5 Evaluation datasets

Maintain versioned, rights-cleared sets for:

- signal spam/duplicate classification;
- candidate coherence and merge/split;
- lifecycle labels;
- brand relevance with expert rationale;
- claim entailment and citation quality;
- cultural misinterpretation and risk;
- territory distinctiveness/brand specificity;
- brief usefulness;
- probabilistic forecast calibration.

Evaluation slices include source, market, language, category, movement type, confidence band, and sensitive-context status. Release gates require no severe regression on protected/sensitive slices.

---

# 24. Monetization and packaging

## 24.1 Pricing principle

Radar should charge for recurring decision value and brand coverage, not expose customers to raw API complexity. However, unbounded source retrieval and generation cannot be hidden inside a low flat price.

The original $39 entry concept is too low for a reliable live-data product unless it is a limited, report-only tier. Initial commercial plans should use monitored arenas, active brands, scan cadence, premium research runs, and campaign workflows as understandable limits.

## 24.2 Proposed launch packaging

| Plan | Monthly list price | Best for | Included |
| --- | ---: | --- | --- |
| Report | Free | Audience acquisition | Public non-personalized weekly report; no private Brand Brain |
| Explorer | $99 | Founder/solo strategist | 1 brand, 3 arenas, weekly scan, 2 seats, 3 active monitors, 3 campaign briefs/month, standard sources |
| Brand | $299 | Small brand team | 1 brand, 10 arenas, daily scan, 5 seats, 15 monitors, 10 briefs/month, competitor set, priority digests, outcome tracking |
| Agency | $799 | Small agency | 5 active client brands, pooled arenas and 30 briefs, 20 seats/reviewers, client links, templates, workspace isolation |
| Enterprise | Custom | Larger teams | negotiated sources/markets, SSO, audit/retention controls, integrations, SLA, security review, licensed data |

Annual plans may receive 15–20% discount after retention is understood. Founding design partners should use a separately documented fixed pilot price, not a permanent lifetime discount.

## 24.3 Usage model

Included allowance covers:

- scheduled scans at plan cadence;
- a defined number of monitored arenas and competitors;
- standard opportunity research;
- a number of full Campaign Studio runs.

Premium credits cover:

- unusually deep/on-demand research;
- premium licensed sources;
- additional brands/markets;
- large file or historical processing;
- extra campaign runs or visual exploration.

The user sees a cost estimate before discretionary premium work. Background system retries and safety checks never consume customer-visible credits.

## 24.4 Pricing metrics to avoid

- raw number of posts/signals: difficult to predict and rewards noise;
- tokens: implementation-centric and confusing;
- per opportunity surfaced: creates mistrust and perverse incentives;
- per seat as the main lever: discourages collaboration/approval.

## 24.5 Unit economics targets

By paid beta exit:

- direct data + model + infrastructure cost ≤ 25% of revenue for Brand plan under normal usage;
- analyst operations ≤ 30 minutes per active brand per week at stable pilot quality;
- total variable gross margin target ≥ 65%, with a path above 75%;
- source cost per adopted opportunity tracked weekly;
- premium sources sold with sufficient margin or pass-through structure.

## 24.6 Entitlement enforcement

Plan limits are enforced by a centralized entitlement service. If a source price changes or allowance is exhausted, Radar must not silently degrade a score. It pauses affected scans, shows the coverage change, and offers a clear plan/budget action.

---

# 25. Go-to-market strategy

## 25.1 Beachhead message

> “Your weekly cultural opportunity report—personalized to your brand, products, audience, and timing.”

Avoid opening with “AI agents,” “social listening,” or “generate campaigns.” The initial buyer pays to know what deserves action and to get to a defensible brief faster.

## 25.2 Public report growth loop

Publish a high-design weekly **Fashion & Lifestyle Cultural Radar** containing 5–10 movements:

- observable change;
- evidence and lifecycle;
- why brands should care;
- which kinds of brands have permission;
- examples of response modes;
- what not to do;
- transparent source/coverage note.

Each report ends with:

> “Public Radar tells you what is moving. Private Radar tells you which two of these movements matter to your brand and builds the brief.”

Reports must be genuinely useful and cited; they are also a live quality demonstration.

## 25.3 Design-partner program

Recruit 5–8 partners:

- 3 digitally native fashion/lifestyle brands;
- 2 social/creative agencies;
- 1 beauty or gaming adjacency;
- 1 intentionally skeptical/high-taste creative team.

Program:

1. 60-minute brand model workshop.
2. Six-week weekly opportunity delivery.
3. Analyst-assisted quality control invisible as automation theatre but disclosed as a managed beta.
4. Weekly 30-minute decision review.
5. At least one Campaign Studio brief.
6. Access to decision and output-use metrics.
7. End-of-pilot willingness-to-pay and replacement-budget interview.

Pilot exit criteria are in §29.

## 25.4 Ideal early use cases

- weekly brand/social planning;
- launch-adjacent cultural scan;
- reactive opportunity triage;
- agency pitch/new-business research;
- creator/partnership brief;
- product-catalog relevance discovery;
- post-campaign cultural learning.

Do not lead with crisis monitoring or long-range forecasting.

## 25.5 Acquisition channels

- founder-led X/LinkedIn posts showing the movement-to-opportunity reasoning;
- weekly report newsletter;
- downloadable sector snapshots;
- live teardown of an anonymized brand example;
- partnerships with small creative/social agencies;
- cultural strategists and trend researchers as credible collaborators;
- fashion/creative-tech communities and events;
- referral credit for agencies and strategists;
- highly targeted outbound containing one real, bounded opportunity hypothesis for the prospect.

## 25.6 Sales motion

### Explorer

Self-serve trial with a sample brand, then guided activation.

### Brand

Founder-led 30-minute demo using prospect inputs, followed by two-week paid or tightly scoped trial. Never promise unsupported platform coverage.

### Agency

One-client proof, then multi-client expansion. Lead with time saved, client specificity, and evidence-backed exports.

### Enterprise later

Land as an upstream cultural opportunity layer integrated with existing listening/production tools. Requires security, source licensing, procurement readiness, and references.

## 25.7 Activation and retention loops

Activation moment:

> The user opens an opportunity and says, “This is specifically useful for us, and I can see why.”

Retention loop:

```text
Weekly scan → decision → monitor/brief → planning meeting → execution/outcome → better brand context → higher-quality next scan
```

Lifecycle messaging:

- Day 0: readiness and first-scan expectation.
- First qualified opportunity: evidence-led notification.
- Weekly: concise decision digest, not activity recap.
- Monthly: “what Radar learned about your brand,” requiring approval.
- Quarterly P1: opportunity and campaign learning review.

## 25.8 GTM proof metrics

- ≥40% of qualified prospects complete Brand Brain activation;
- ≥60% of activated pilots review at least one opportunity weekly;
- ≥30% QOAR by week six;
- ≥50% of pilots create at least one brief;
- ≥60% of completed pilots willing to pay at least the proposed Brand equivalent or provide a concrete objection;
- at least 3 of 5 core design partners convert or extend;
- report-to-demo conversion and demo-to-pilot conversion tracked separately.

---

# 26. Defensibility and moat

## 26.1 What is not a moat

- access to one frontier model;
- prompts or a multi-agent diagram;
- basic embeddings/clustering;
- a dashboard of trends;
- generic Brand Voice fields;
- generated campaign copy;
- publicly retrievable signals alone.

## 26.2 Compounding assets

### Cultural Graph

A historical, time-aware record of movements, aliases, meanings, community spread, visual codes, catalysts, lifecycle, recurrence, and relationships. Its value grows through corrected lineage and longitudinal calibration, not raw scraped volume.

### Brand–Movement Relevance Graph

Structured evidence of why movements were relevant or irrelevant to different categories, products, strategic priorities, brand identities, markets, and cultural permissions. Cross-customer learning uses only lawful, privacy-preserving aggregates.

### Brand Response Graph

Links movement → opportunity → decision → response mode → strategy → territory → execution. This captures the part most listening products hand off to people.

### Outcome and Calibration Dataset

Records which forecasts, relevance judgments, strategic responses, and creative mechanisms were supported by later evidence, while separating execution/distribution confounders.

### Visual Culture Representation

Rights-aware embeddings and human-interpretable descriptions of evolving visual codes, relationships, and saturation—valuable if Radar builds a high-quality fashion/lifestyle wedge.

### Workflow and Trust

Radar becomes the durable record behind weekly planning and creative approval. Provenance, edits, approvals, and learning produce switching costs that are useful rather than coercive.

### Source and Expert Network

Over time, licensed sources, analyst calibration, cultural experts, and agency partnerships can improve coverage/quality that a generic model wrapper cannot reproduce.

## 26.3 Flywheel

```text
Better movement detection
→ more relevant opportunities
→ more explicit decisions and corrections
→ better brand relevance calibration
→ more adopted briefs
→ more outcomes and strategic learnings
→ better opportunity and response recommendations
```

The flywheel only compounds if evidence quality, privacy, and source rights remain intact.

## 26.4 Moat milestones

| Stage | Evidence of moat |
| --- | --- |
| 0–6 months | Repeated weekly use and high-quality corrections in one vertical |
| 6–18 months | Historical movement lineage plus customer-specific adoption data improves ranking measurably over generic baselines |
| 18–36 months | Outcome-linked response graph and integrations make Radar part of planning/approval; source/expert relationships improve coverage |
| 36+ months | Cross-market cultural graph and calibrated brand-action recommendations form proprietary infrastructure, subject to lawful data rights |

---

# 27. Risk register

Scale: Likelihood `L/M/H`; Impact `L/M/H/Critical`.

| ID | Risk | Likelihood | Impact | Early indicator | Mitigation | Contingency/owner |
| --- | --- | --- | --- | --- | --- | --- |
| R01 | Platform access or pricing changes | H | Critical | quota/cost/terms notice | provider abstraction, rights profiles, caps, source diversity, no single-source promise | pause affected connector, disclose coverage, switch licensed provider; Data Partnerships |
| R02 | Reddit/TikTok assumptions make product noncompliant | M | Critical | use case rejected or terms conflict | exclude from dependency; commercial agreements only | remove data/dependent claims; Legal/Product |
| R03 | Bot/coordinated activity creates false movement | H | H | concentration/synchronization spike | dedupe, origin diversity, coordination risk, analyst queue | retract/rescore opportunity and notify affected users; Data Science |
| R04 | Syndicated coverage looks like corroboration | H | H | many near-identical sources | lineage/source-family dedupe | recompute evidence and confidence; Data Engineering |
| R05 | Culturally wrong or offensive interpretation | M | Critical | user flags, expert disagreement, sensitive community | “why not,” permission assessment, expert review, confidence gates | suppress output, incident review, corrections; Trust/Product |
| R06 | Brand chases trends and loses identity | M | H | frequent Participate/Launch, low compatibility | response ladder, Brand Brain constraints, compatibility gate | recommend Learn/Monitor/Ignore; Strategy Lead |
| R07 | Generic creative output | H | H | low territory difference, heavy edits | approved strategy first, distinctiveness rubric, historical similarity, critic | human creative calibration and model/template replacement; Creative Product |
| R08 | Copyright/trademark/rights violation | M | Critical | named protected assets/people/marks | reference policy, rights checks, blocked findings, human legal review | remove/export block, notify customer, incident review; Legal/Trust |
| R09 | Unsupported factual claim/hallucination | M | H | citation mismatch/correction rate | claim graph, citation verifier, schema gates, evidence-first generation | block artifact and rerun/manual review; AI Lead |
| R10 | Source coverage is too narrow to detect real culture | H | H | low adoption, known movements missed | narrow vertical/market promise, curated sources, coverage UI, partnerships | reposition as selected-source opportunity system until licensing expands; CEO/Product |
| R11 | Ingestion/model costs exceed price | H | H | cost/adopted opportunity rises | budgets, staged models, caching, scan cadence, plan limits | reduce breadth, repricing/premium credits; Engineering/Finance |
| R12 | Analyst labor hides poor automation | H early | H | analyst minutes stay high | label every intervention, automate repeated steps, weekly labor metric | constrain markets/arenas or remain managed service deliberately; Ops |
| R13 | Campaign attribution is misleading | H | H | claims of causal lift without tests | outcome decomposition, baselines, confidence, causal language policy | report correlation/insufficient data; Analytics Lead |
| R14 | Enterprise incumbent copies features | H | H | listening suites add brief generation | vertical focus, decision workflow, outcome graph, SMB speed, integrations | partner/position above incumbents; CEO |
| R15 | Cross-tenant data leak | L/M | Critical | access anomaly or policy test failure | RLS, tenant-scoped storage, least privilege, isolation CI, audits | SEV-1 containment and notification; Security Lead |
| R16 | Customer data leaks to model provider | L/M | Critical | provider policy/config mismatch | approved providers, data controls, redaction, no secrets, vendor review | disable route, investigate/delete, notify as required; Security/Legal |
| R17 | Prompt injection from public content | H | H | abnormal tool/instruction attempts | untrusted-data boundary, tool allowlist, sanitization, policy outside model | quarantine source/run; AI Security |
| R18 | Model/provider regression changes scores/output | H | H | evaluation or user-quality drop | versioning, offline evals, canary, frozen approvals | rollback route/template; AI Lead |
| R19 | Alert fatigue | H | H | low open rate/high dismissals | qualification thresholds, digest default, watch conditions, caps | reduce cadence/surface only high confidence; Product |
| R20 | Brand Brain becomes stale/wrong | H | H | contradictions/outdated catalog | effective dates, freshness, source sync, review reminders | lower readiness/confidence and block affected claims; Customer Success |
| R21 | Customers do not change decisions despite liking reports | M/H | Critical | views high, QOAR low | test in real planning meetings; focus on next action | pivot output/workflow or managed strategy product; CEO/Product |
| R22 | Agencies fear replacement/confidentiality | M | H | low agency conversion | position as leverage, client isolation, audit, configurable exports | brand-direct motion or agency partner program; GTM |
| R23 | Forecast precision creates false trust | M | H | users quote lifespan as certainty | probability ranges, calibration, confidence, language controls | remove forecast feature until calibrated; Data Science |
| R24 | Regulatory/privacy burden from audience inference | M | Critical | sensitive-trait inference or request | aggregate only, prohibit sensitive inference, DPIA/vendor reviews | delete feature/data, legal response; Privacy Lead |
| R25 | Naming conflict or weak brand name | M | M | trademark/domain issue or confusion with radar products | trademark/domain search before launch, name architecture | rename before broad launch; CEO/Legal |

---

# 28. Development roadmap

## 28.1 Team assumption

Minimum credible team:

- 1 product/founder lead with cultural strategy ownership;
- 1 product designer/front-end engineer;
- 1 full-stack/platform engineer;
- 1 data/ML engineer;
- 1 AI/workflow engineer (may overlap with platform early);
- fractional cultural strategist/analyst;
- fractional legal/privacy/security review;
- 1 design-partner/customer lead (founder can cover).

A solo founder can prototype a narrower version, but should not claim production-grade continuous cultural coverage without data, legal, and expert support.

## 28.2 Phase 0 — Validation concierge (Weeks 1–4)

**Goal:** Prove the decision artifact before automating the pipeline.

- recruit 3–5 design partners;
- manually build Brand Brain minimums;
- define 5–10 monitored arenas;
- use permitted search/APIs plus analyst research;
- deliver weekly Decision-Ready Opportunities in a fixed template;
- create campaign briefs using structured agent prototypes;
- capture every decision, reason, edit, time spent, and willingness to pay;
- validate source commercial rights and costs;
- complete name/trademark review.

**Exit:** at least 20 reviewed opportunities, ≥25% adoption, evidence that brand specificity—not generic trend quality—drives value, and two customers willing to pay for continued use.

## 28.3 Phase 1 — Product foundation (Weeks 5–10)

**Goal:** Secure tenant, Brand Brain, sources, and evidence foundation.

- auth, tenant/brand/RBAC;
- Brand Brain onboarding, fact review, versioning;
- data rights registry;
- connector gateway with RSS/web/manual plus conditional X;
- normalized Signal schema and short-retention raw store;
- dedupe/enrichment pipeline;
- operational source health and cost controls;
- baseline audit/security/observability.

**Exit:** one brand can activate, ingest allowed sources, review facts, and inspect traceable normalized evidence with tenant-isolation tests passing.

## 28.4 Phase 2 — Movement and opportunity engine (Weeks 11–16)

**Goal:** Deliver a trustworthy Radar inbox.

- candidate clustering and analyst queue;
- Movement/version/lineage model;
- lifecycle and metric history;
- opportunity matching/scoring/confidence;
- claim/evidence packets and citation verifier;
- Radar feed, Opportunity, Evidence, Monitor, digest;
- feedback and dismissal learning;
- offline evaluation harness.

**Exit:** pilot users receive qualified opportunities through product; low-value rate trending below 35%; no unsupported headline claims in release test set.

## 28.5 Phase 3 — Campaign Studio (Weeks 17–21)

**Goal:** Close culture-to-brief workflow.

- campaign setup/preflight;
- strategy artifact and approval;
- territory generation and comparison;
- specialist agent contracts;
- critic/risk checks;
- brief editor, comments, approvals, exports;
- campaign list/history;
- basic outcome capture.

**Exit:** ≥70% of pilot briefs rated useful with minor edits or better; material changes invalidate approval; exports preserve citations/limitations.

## 28.6 Phase 4 — Paid beta (Weeks 22–28)

**Goal:** Prove retention and economics.

- billing/entitlements;
- agency isolation and reviewer links;
- weekly/monthly analytics;
- model/source routing and cost optimization;
- incident/deletion/export procedures;
- accessibility/performance/security remediation;
- 5–8 paid beta customers;
- public weekly report engine with human editorial approval.

**Exit:** criteria in §29.12.

## 28.7 Phase 5 — V1 expansion (Months 8–12)

- licensed additional sources based on buyer evidence;
- first-party product/analytics connectors;
- Cultural Map customer UI;
- outcome calibration;
- multi-market/language pilot;
- task/document/creative-tool integrations;
- SSO and stronger security controls;
- external API/webhooks;
- analyst operations below target.

## 28.8 Explicit sequencing rule

Do not build broad source coverage, final visual generation, autonomous publishing, or an elaborate graph UI before the product proves that customers repeatedly adopt the decision artifacts.

---

# 29. Acceptance criteria

## 29.1 Brand Brain

- [ ] User can create a brand from URL plus manual inputs.
- [ ] System proposes facts with source spans, confidence, status, and domain.
- [ ] User can approve/reject/edit facts and resolve conflicts.
- [ ] Only approved facts affect externally usable campaign work.
- [ ] A removed/superseded constraint is versioned and audited.
- [ ] A campaign records the exact Brand Brain version used.
- [ ] Readiness accurately reflects missing mandatory domains.
- [ ] Cross-brand retrieval tests return zero facts outside authorized scope.

## 29.2 Source ingestion and rights

- [ ] Every active connector references a valid Data Rights Profile.
- [ ] Expired/disabled rights profile prevents new retrieval.
- [ ] Connector cannot exceed configured hard spend/rate cap.
- [ ] Source failure is visible and reduces/discloses coverage; no zero-activity inference.
- [ ] Raw payload and derived retention follow profile policy in automated tests.
- [ ] Duplicate/syndicated items preserve provenance but count as one independent origin.
- [ ] Commercially unapproved Reddit/TikTok ingestion is absent from production MVP.

## 29.3 Movement engine

- [ ] A single viral post does not automatically create a Movement.
- [ ] Candidate promotion applies independent-origin, coherence, quality, and source criteria.
- [ ] Analyst can merge/split/suppress with reason and preserved lineage.
- [ ] Lifecycle history is versioned and can represent recurrence.
- [ ] Movement description distinguishes observation, hypothesis, and forecast.
- [ ] Shared movement records contain no tenant-private data.

## 29.4 Scoring

- [ ] Priority and Confidence are separately calculated and displayed.
- [ ] Every component has definition, top inputs, penalties, coverage, and score version.
- [ ] Critical brand/policy constraints override numerical Priority.
- [ ] Missing competitor coverage cannot produce an absolute whitespace claim.
- [ ] Low-confidence high-priority items are labeled speculative/monitor by default.
- [ ] Recalculation preserves the prior Opportunity version.

## 29.5 Evidence

- [ ] Every material factual paragraph links to one or more Claim records.
- [ ] Each Claim links to supporting/context/contradictory evidence.
- [ ] Citation verifier blocks a known unsupported test claim.
- [ ] “Why not?” includes at least one genuine alternative or limitation when evidence permits.
- [ ] Source display honors rights and expiry.
- [ ] User correction creates an amendment and does not erase original history.

## 29.6 Radar experience

- [ ] User can filter, open, monitor, learn, approve, snooze, and dismiss.
- [ ] Default immediate alert requires configured priority/confidence/risk thresholds.
- [ ] Monitor trigger returns a material-change summary.
- [ ] Dismissed near-duplicates are suppressed according to policy.
- [ ] Genuine no-opportunity, source-failure, and scan-running empty states are distinguishable.
- [ ] Median cached feed response meets NFR-002 under expected beta load.

## 29.7 Campaign Studio

- [ ] Campaign generation requires an approved Opportunity version.
- [ ] Strategy must be approved before territory generation.
- [ ] Three territories pass declared structural difference rules or are marked/revised.
- [ ] Each territory links to the approved strategic foundation and relevant evidence.
- [ ] Specialist cannot silently introduce a new objective/product/audience.
- [ ] Critic cites artifact locations and cannot approve.
- [ ] Brief includes all 19 sections or marks legitimately non-applicable sections.
- [ ] Export contains Sources and Limitations.

## 29.8 Approval and risk

- [ ] Approval is bound to exact artifact version/hash.
- [ ] Material edit invalidates downstream approval.
- [ ] Critical finding blocks approval/export.
- [ ] Required specialist reviewer is derived from policy and finding.
- [ ] Risk-service failure fails closed for campaign approval/export.
- [ ] Every decision, override, and resolution is audited.

## 29.9 Security/privacy

- [ ] RBAC and tenant-isolation test suites pass.
- [ ] Credentials never appear in client responses, model prompts, or standard logs.
- [ ] External content cannot change agent tools, policy, budget, or approval in prompt-injection tests.
- [ ] Customer data deletion workflow is tested end to end.
- [ ] Encryption and backup/restore checks pass.
- [ ] Production access uses named least-privilege roles and audit.

## 29.10 Accessibility/performance

- [ ] Keyboard-only completion for onboarding, opportunity decision, and brief approval.
- [ ] Screen-reader labels and logical focus order for scores, charts, dialogs, and editor.
- [ ] Color is not the only carrier of score/risk meaning.
- [ ] Core screens meet WCAG 2.2 AA automated checks plus manual review.
- [ ] Performance targets in NFR-002 pass at expected beta concurrency.

## 29.11 AI quality release gates

On a rights-cleared expert-labeled evaluation set:

- [ ] unsupported material claim rate < 2%; zero known critical-risk unsupported claims;
- [ ] citation entailment precision ≥ 95% for surfaced headline claims;
- [ ] movement duplicate/merge precision ≥ 85% on initial target arenas;
- [ ] expert-rated brand relevance precision ≥ 75% among top-priority items;
- [ ] ≥80% of territory sets judged meaningfully distinct by two reviewers;
- [ ] ≥70% of briefs judged useful with minor edits or better;
- [ ] no severe regression from prior release across sensitive-context slices.

These are starting gates to calibrate with real data, not marketing claims.

## 29.12 Paid beta exit

Across at least five active brand workspaces over six weeks:

- [ ] ≥60% weekly active review rate;
- [ ] ≥30% QOAR among high-confidence opportunities;
- [ ] <25% low-value alert rate in mature workspaces;
- [ ] median decision time <15 minutes;
- [ ] at least one adopted opportunity per active brand/month where coverage is adequate;
- [ ] ≥50% create a brief and ≥70% of those briefs meet usefulness target;
- [ ] direct variable cost within target and analyst time ≤30 minutes/brand/week;
- [ ] no unresolved SEV-1/SEV-2 privacy, rights, or safety incident;
- [ ] at least three design partners convert/extend at viable pricing.

---

# 30. Build backlog

Sizing: `S` ≤3 engineering days, `M` roughly 1 week, `L` 2–3 weeks, `XL` must be split. Estimates are directional and exclude discovery/legal procurement.

## Epic A — Foundation and tenancy

| ID | Story | Pri | Size | Dependency |
| --- | --- | --- | --- | --- |
| A01 | Set up repository, CI/CD, environments, feature flags, IaC baseline | P0 | M | — |
| A02 | Implement managed auth and session security | P0 | M | A01 |
| A03 | Tenant/brand/membership/RBAC model and middleware | P0 | L | A02 |
| A04 | PostgreSQL migrations, RLS, tenant-isolation tests | P0 | L | A03 |
| A05 | Object storage with tenant keys and signed delivery | P0 | M | A03 |
| A06 | Audit event service and admin viewer | P0 | M | A03 |
| A07 | Entitlement/budget policy skeleton | P0 | M | A03 |
| A08 | OpenTelemetry, error tracking, operational dashboards | P0 | M | A01 |

## Epic B — Brand Brain

| ID | Story | Pri | Size | Dependency |
| --- | --- | --- | --- | --- |
| B01 | Brand setup wizard and autosave | P0 | L | A03 |
| B02 | URL/file source ingestion and document parser | P0 | L | A05 |
| B03 | Product CSV/catalog importer with validation | P0 | M | B01 |
| B04 | Fact extraction contract and provenance spans | P0 | L | B02 |
| B05 | Fact review/edit/approve/reject UI | P0 | L | B04 |
| B06 | Conflict detection, scoping, supersession, versioning | P0 | L | B05 |
| B07 | Readiness calculation and activation gate | P0 | M | B05 |
| B08 | Policy-aware Brand Brain retrieval service | P0 | L | B06 |
| B09 | Calibration example workflow | P0 | M | B07 |
| B10 | Version comparison and restore | P1 | M | B06 |

## Epic C — Connector and signal platform

| ID | Story | Pri | Size | Dependency |
| --- | --- | --- | --- | --- |
| C01 | Data Rights Profile model/admin and enforcement middleware | P0 | L | A04 |
| C02 | Connector SDK with budgets, rate limits, health, idempotency | P0 | L | C01, A07 |
| C03 | RSS/Atom connector | P0 | M | C02 |
| C04 | Permitted web/manual URL connector | P0 | L | C02 |
| C05 | X official connector behind feature flag | P0 conditional | L | C02, commercial access |
| C06 | Normalized Signal store and schema validation | P0 | M | C02 |
| C07 | Short-retention quarantine/raw store and deletion jobs | P0 | M | C01, A05 |
| C08 | Exact/near/cross-post/syndication deduplication | P0 | L | C06 |
| C09 | Language/entity/topic/quality enrichment workers | P0 | L | C06 |
| C10 | Embedding service with model/version registry | P0 | M | C06 |
| C11 | Source/Arena configuration and health UI | P0 | L | C02 |
| C12 | Connector spend/circuit-breaker dashboards | P0 | M | C02, A08 |

## Epic D — Movement engine

| ID | Story | Pri | Size | Dependency |
| --- | --- | --- | --- | --- |
| D01 | Time-windowed candidate feature aggregation | P0 | L | C08–C10 |
| D02 | Incremental semantic cluster prototype and evaluation | P0 | L | D01 |
| D03 | Candidate validation metrics/threshold config | P0 | L | D02 |
| D04 | Movement/version/metrics/lineage data model | P0 | L | A04 |
| D05 | Graph reconciliation: attach/new/merge/split/revive | P0 | L | D03, D04 |
| D06 | Lifecycle probability and historical metric jobs | P0 | L | D04 |
| D07 | Movement Synthesizer contract and schema validation | P0 | M | D03 |
| D08 | Analyst candidate queue and merge/split/suppress tools | P0 | L | D05 |
| D09 | Bot/coordination risk features | P0 | L | C09, D01 |
| D10 | Customer Cultural Map | P1 | L | D04–D06 |

## Epic E — Opportunity and evidence

| ID | Story | Pri | Size | Dependency |
| --- | --- | --- | --- | --- |
| E01 | Brand-to-movement eligibility filter | P0 | M | B08, D04 |
| E02 | Deterministic component metric service | P0 | L | E01, D06 |
| E03 | Opportunity Evaluator agent contract | P0 | L | E01, Agent platform |
| E04 | Priority/Confidence formulas and hard gates | P0 | L | E02, E03 |
| E05 | Opportunity/version/state data model | P0 | M | A04 |
| E06 | Evidence Packet and Claim graph services | P0 | L | E03, E05 |
| E07 | Citation entailment verifier and block | P0 | L | E06 |
| E08 | Contradictory-evidence/“Why not?” workflow | P0 | M | E06 |
| E09 | Opportunity feed and filtering | P0 | L | E04–E06 |
| E10 | Opportunity overview and score explanation | P0 | L | E09 |
| E11 | Evidence/timeline/coverage screens | P0 | L | E06 |
| E12 | Decisions, dismissal reasons, suppression | P0 | M | E05 |
| E13 | Monitor conditions and trigger/delta logic | P0 | L | E05, D06 |
| E14 | Email/in-app digest and alert thresholds | P0 | M | E09, E13 |

## Epic F — Agent and Campaign Studio

| ID | Story | Pri | Size | Dependency |
| --- | --- | --- | --- | --- |
| F01 | AgentRun envelope, model route registry, budgets, traces | P0 | L | A07, A08 |
| F02 | Durable workflow orchestration and approval wait | P0 | L | F01 |
| F03 | Tool allowlists, private-context retrieval, injection defenses | P0 | L | B08, F01 |
| F04 | Researcher and Strategist contracts | P0 | L | E06, F01 |
| F05 | Campaign setup/preflight and Strategy editor | P0 | L | F04 |
| F06 | Strategy versioning/comments/approval | P0 | L | F05, Approval epic |
| F07 | Creative Director contract and distinctiveness validator | P0 | L | F06 |
| F08 | Art/Copy/Channel/Producer specialist contracts | P0 | L | F07 |
| F09 | Critic contract and one-revision loop | P0 | M | F08 |
| F10 | Territory comparison UI | P0 | L | F07–F09 |
| F11 | Brief Composer and 19-section schema | P0 | L | F10 |
| F12 | Block editor, citations, diff, comments, history | P0 | L | F11 |
| F13 | PDF/Markdown/DOCX/web-link export | P0 | L | F12 |
| F14 | Model fallback and failure UX | P0 | M | F01–F02 |

## Epic G — Safety, approvals, and security

| ID | Story | Pri | Size | Dependency |
| --- | --- | --- | --- | --- |
| G01 | Policy hierarchy and constraint evaluator | P0 | L | B08 |
| G02 | Risk taxonomy/finding model and Guardian contract | P0 | L | G01, F01 |
| G03 | Approval routes, version locks, invalidation | P0 | L | A03, G02 |
| G04 | Approval center and reviewer diff | P0 | L | G03 |
| G05 | Export block and finding resolution | P0 | M | G03, F13 |
| G06 | Prompt-injection/security test corpus | P0 | M | F03 |
| G07 | Data export/deletion/retention jobs | P0 | L | C07, A06 |
| G08 | Backup/restore and incident runbooks | P0 | M | A01 |
| G09 | Threat model and external penetration review | P0 beta | M | system complete |
| G10 | Accessibility audit/remediation | P0 beta | M | UI complete |

## Epic H — Analytics, outcomes, and commercial beta

| ID | Story | Pri | Size | Dependency |
| --- | --- | --- | --- | --- |
| H01 | Product event taxonomy and warehouse views | P0 | M | A08 |
| H02 | QOAR/low-value/time-to-decision dashboard | P0 | M | E12 |
| H03 | Brief usefulness/edit-distance instrumentation | P0 | M | F12 |
| H04 | Manual campaign execution/outcome entry | P0 | M | Campaign schema |
| H05 | Outcome Analyst and learning approval | P1 | L | H04, F01 |
| H06 | Billing, plans, usage and entitlement UI | P0 beta | L | A07 |
| H07 | Agency multi-brand/client-review controls | P0 Agency beta | L | A03, G03 |
| H08 | Public report editorial workflow | P0 GTM | L | D04, E06 |
| H09 | Model/source unit economics dashboard | P0 beta | M | C12, F01 |
| H10 | Customer analytics connectors | P1 | L each | H04 |

## 30.1 Backlog order for the first 12 weeks

1. A01–A08 security/tenant foundation.
2. B01–B09 Brand Brain minimum.
3. C01–C12 rights-aware ingestion.
4. F01–F03 basic agent platform in parallel with ingestion.
5. D01–D09 movement engine and analyst queue.
6. E01–E08 scoring/evidence foundation.
7. E09–E14 customer Radar workflow.
8. G01–G05 approval/risk before campaign generation.
9. F04–F14 Campaign Studio.
10. H01–H09 beta economics and outcomes.

---

# 31. Product experiments and validation plan

## 31.1 Riskiest assumptions

| Assumption | Test | Pass signal |
| --- | --- | --- |
| Teams value brand-specific opportunity judgment more than broad coverage | Concierge weekly Radar vs generic trend report | Personalized version changes a real decision at least twice per partner in six weeks |
| Users trust AI interpretation when evidence/uncertainty is visible | Compare evidence-first and summary-only prototypes | Evidence-first produces higher decision confidence without unacceptable time increase |
| Strategy/brief is more valuable than final asset generation | Offer both in interviews/prototype | Majority choose brief/territory quality as primary paid outcome |
| Narrow X+web/news coverage can still create value | Run target arenas and document misses | At least one adopted opportunity/brand/month with explicit coverage accepted |
| Agencies will pay for multi-client leverage | One-client then multi-client pilot | At least two agencies request additional client workspaces at viable price |
| Analyst assistance can fall to sustainable level | Instrument every intervention | ≤30 minutes/brand/week by paid beta exit |
| Priority/Confidence improve trust | A/B qualitative comparison, not hidden production scores | Users correctly distinguish speculative/high-priority cases and prefer split representation |

## 31.2 Baselines

Radar must outperform:

1. a keyword-volume spike detector;
2. an embedding cluster plus generic summary;
3. a frontier model prompted with movement + brand website;
4. a human analyst's unstructured weekly email;
5. a generic campaign generator given a one-line trend.

Evaluate time, relevance, citation quality, strategic specificity, distinctiveness, and decision adoption—not prose preference alone.

## 31.3 Research cadence

- weekly design-partner decision review;
- fortnightly movement/evidence error review;
- monthly pricing and replacement-budget interview;
- per-release AI evaluation;
- quarterly source-rights review or immediately on notice;
- continuous unit-economics dashboard.

---

# 32. Launch definition

## 32.1 Private alpha

Analyst-assisted, no public self-serve promise, 3–5 brands, limited arenas, explicit source limitations, free or research agreement. Focus: usefulness and safety.

## 32.2 Paid beta

5–15 customers, contractual source/data terms, billing, support process, production access control, rights registry, monitoring, export, deletion, approval, and incident capability. Focus: recurring use and economics.

## 32.3 General availability

Requires:

- repeatable self-serve or assisted onboarding;
- published source coverage and limitations;
- stable pricing and gross-margin model;
- paid beta exit criteria;
- accessible core experience;
- formal security/privacy documentation and vendor contracts;
- support/on-call ownership;
- no unresolved critical safety/rights defect;
- forecast language and calibration reviewed;
- trademark/name clearance.

---

# 33. Open decisions before implementation

These do not block concierge validation, but must be resolved before their dependent build:

1. Which initial market—US, UK, or another English-language market—has the best source access and design partners?
2. Can the company secure commercially appropriate X access at a viable unit cost?
3. Which licensed news/web provider permits the required storage, derivation, and customer display?
4. Will the MVP store bounded source text or only metadata/excerpts/derived features for each connector?
5. Which workflow engine best fits approval waits, tracing, and the team's operational skill?
6. Which provider routes meet customer-data and regional requirements?
7. Does the product launch under “Radar,” or is a more protectable name required?
8. What minimum product/catalog data is realistic for the first brands?
9. Which artifact format do early creative teams actually hand off—Doc, deck, Figma, task system?
10. What is the first response horizon: 24–72-hour reactive content, 1–3-week campaigns, or both with separate thresholds?
11. Who provides cultural expert review for sensitive or unfamiliar communities?
12. What does a viable “adopted opportunity” replace in customer budget: analyst time, agency work, listening tool, or incremental spend?

Each decision receives an owner, deadline, evidence, and recorded outcome in the product decision log.

---

# Appendix A — KPI dictionary

| KPI | Definition |
| --- | --- |
| Qualified Opportunity | Surfaced Opportunity meeting configured evidence, confidence, risk, and readiness gates |
| Opportunity Adoption | A recorded decision of Investigate, Monitor with condition, Learn, Participate, Partner, or Launch; simple view/save does not count |
| QOAR | Adopted qualified Opportunities ÷ reviewed qualified Opportunities within seven days |
| Low-Value Alert | Opportunity dismissed as irrelevant, stale, duplicate, unsupported, off-brand, or non-actionable |
| Low-Value Alert Rate | Low-value alerts ÷ reviewed surfaced Opportunities |
| Decision Time | Active time from first Opportunity open to recorded decision, excluding idle time |
| Brief Usefulness | User rating: unusable, major rewrite, useful with minor edits, ready to use |
| Source Cost per Adopted Opportunity | Allocated external data cost ÷ adopted Opportunities |
| Analyst Minutes per Brand | Human operations time attributable to movement/opportunity production per active brand/week |
| Confidence Calibration | Agreement between stated probability/confidence bands and later verified labels/outcomes |

---

# Appendix B — Glossary

- **Arena:** Configured cultural/category area Radar monitors for a brand.
- **Brand Brain:** Versioned approved knowledge and policy model for a brand.
- **Claim:** A typed statement linked to evidence and uncertainty.
- **Confidence:** Strength and completeness of evidence supporting a judgment.
- **Cultural Movement:** Evolving narrative, behavior, aesthetic, practice, or symbol supported by signals.
- **Cultural permission:** Credibility and conditions under which a brand may participate without extraction or inconsistency.
- **Decision-Ready Opportunity:** Brand-specific recommendation with evidence, scores, risks, timing, and response options.
- **Evidence Packet:** Frozen source/claim/coverage basis for an Opportunity version.
- **Independent origin:** Signal source not merely copying or syndicating another origin.
- **Monitored arena:** Customer-configured combination of topics, entities, market, language, sources, and exclusions.
- **Priority:** How much attention/action an Opportunity warrants now after relevance, timing, whitespace, actionability, upside, and risk.
- **Response mode:** Ignore, Monitor, Learn, Participate, Partner, or Launch.
- **Signal:** One permitted source-level observation.
- **Source family:** Origins considered dependent for corroboration, such as syndicated outlets or repost lineage.
- **Territory:** A distinct creative interpretation of an approved strategy.

---

# Appendix C — Summary of critical refinements from the seed

1. Reframed the category around **Cultural Opportunity Intelligence**, a customer outcome rather than autonomy.
2. Separated shared Cultural Movements from tenant-private brand Opportunities.
3. Made Decision-Ready Opportunity the primary product artifact.
4. Added a six-mode response ladder so Radar does not turn every movement into content.
5. Separated Priority from Confidence and added hard safety/rights gates.
6. Replaced a universal data ambition with a rights-aware, source-tiered MVP.
7. Made Google Trends optional, Reddit commercial access conditional, and TikTok Research API unsuitable for the commercial MVP.
8. Defined claim-level evidence, contradictory evidence, coverage statements, and frozen decision snapshots.
9. Made the Brand Brain structured, sourced, approved, scoped, and versioned rather than one opaque prompt.
10. Required strategy approval before creative generation and structural difference across territories.
11. Limited the initial creative promise to high-quality strategy and briefs, with integrations/final asset production later.
12. Bound agents to structured contracts, least privilege, budgets, and versioned artifacts.
13. Added operational architecture, database, APIs, approvals, security, privacy, and incident controls.
14. Raised initial pricing to reflect live-data economics and made the free product a public report.
15. Put an analyst-assisted concierge phase before a large automated build.
16. Defined measurable paid-beta exit criteria and a sequenced backlog.

---

# Appendix D — Final product thesis

Radar succeeds if it becomes the place where a brand records:

- what changed in culture;
- what evidence made it credible;
- why it mattered—or did not matter—to the brand;
- which response was chosen and approved;
- how that response became creative work;
- what happened afterward;
- what the brand learned.

The enduring product is not an alert feed and not a campaign generator. It is the **brand-specific decision and learning layer between culture and creative action**.
