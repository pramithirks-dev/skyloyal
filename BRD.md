# Business Requirements Document

## SkyLoyal: Agentic AI Platform for Frequent-Flyer Retention

---

### Document control

| Field | Value |
|---|---|
| Document ID | SKY-BRD-0001 |
| Version | 1.0 (Draft for review) |
| Date issued | 2026-04-21 |
| Author | Pramithi Raroth Karimpanakkal, Product Manager |
| Module context | H9CEAI Customer Engagement & AI, MSCAIBUS1, National College of Ireland |
| Sponsor (fictional) | SkyJet Airways, Chief Customer Officer |
| Target audience | Loyalty P&L owner, Customer Success Leadership, Data Protection Officer, Marketing, Engineering |
| Related artefacts | `README.md` · `submission/process-log.md` · `.claude/agents/*.md` · `docs/` (prototype) |
| Repository | https://github.com/pramithirks-dev/skyloyal |
| Live prototype | https://pramithirks-dev.github.io/skyloyal/ |

### Revision history

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-04-21 | Pramithi | Initial structure, scaffolded from H9CEAI brief |
| 1.0 | 2026-04-21 | Pramithi | First complete draft for review, pivoted from SaaS (Churn-Busters proposal) to Airline (SkyLoyal) domain |

---

## 1. Executive summary

SkyJet Airways loses **23% of its Gold-tier and 17% of its Silver-tier frequent flyers** to silent disengagement every year, flyers who do not formally leave the programme but migrate spend to alliance partners, low-cost carriers, or competitor programmes. The commercial impact is estimated at **€42m annually in forgone premium-cabin and ancillary revenue**, dwarfing the cost of any retention intervention.

This document proposes **SkyLoyal**, an agentic AI platform that predicts loyalty lapse, designs ethically-grounded interventions anchored in the **Octalysis gamification framework**, produces the marketing collateral to execute those interventions, and reports commercially to the loyalty P&L. Five specialised AI agents collaborate in an unbroken pipeline to deliver a closed-loop system: Researcher → Designer → Maker → Communicator → Manager.

The platform is designed to meet **GDPR Article 22** requirements for automated decision-making affecting customers, and is classified as a **limited-risk system under Title IV of the EU AI Act**. A strict White-Hat / Black-Hat audit governs all flyer-facing gamification to protect trust.

**Recommendation:** Approve an 18-month pilot targeting 42,000 at-risk Gold flyers at a budget of €1.8m, with success criteria defined in §11.

---

## 2. Business context

### 2.1 Industry picture

The global airline loyalty market was worth approximately **€190bn in programme-earned revenue in 2025**, with the top-tier 5% of members driving 40–60% of loyalty revenue at most major carriers. Churn in FFP context is almost never expressed as cancellation, it is **silent disengagement**, where the member retains the account but migrates flying to a competitor, a partner, or a low-cost alternative.

Industry benchmarks:

- Active Member Ratio (≥ 1 segment in trailing 12 months) has declined from **67% pre-2020 to 54% in 2025**, partly as a hangover from the pandemic, partly as OTAs fragment booking journeys.
- The cost of acquiring a new Gold-equivalent flyer is **8–12× the cost of retaining an existing one** (IATA Global Passenger Survey 2024).
- Members who experience an IROP (delay > 3h, cancellation, denied boarding, baggage mishandling) are **3.1× more likely to silently churn within 90 days** if not contacted proactively.

### 2.2 SkyLoyal-specific situation

SkyJet Airways is a mid-sized European network carrier hubbed in Dublin (DUB) with focus cities at Amsterdam (AMS) and Madrid (MAD). The airline operates a tiered frequent flyer programme with four tiers: **Blue, Silver, Gold, Platinum**. Current programme metrics (synthetic baseline for this BRD):

| Metric | Current | Benchmark | Gap |
|---|---|---|---|
| Active Member Ratio | 51% | 58% (European network peer median) | −7pp |
| Gold retention (year-on-year) | 77% | 85% (peer median) | −8pp |
| Proactive save-rate | 6% of at-risk flyers contacted | 18% (IAG Loyalty 2025 public figures) | −12pp |
| Miles-liability write-off from expiry | €11m | €5m (target) | +€6m |

Current customer-success practice is **reactive**, CSMs engage a flyer only after a cancellation, complaint, or explicit call. By the time a status-slipper declines their tier, alternative flying patterns are often entrenched.

### 2.3 Problem statement

> SkyLoyal lacks a systematic, proactive, ethically-governed capability to identify flyers at risk of silent loyalty lapse and intervene with personalised, non-manipulative gamified experiences before the flyer's behaviour is entrenched with a competitor.

---

## 3. Business objectives

The platform must achieve the following business objectives within 18 months of pilot launch:

| # | Objective | Measure | Target |
|---|---|---|---|
| BO-01 | Reduce silent churn in the Gold tier | Year-on-year Gold retention | +5pp (from 77% to 82%) |
| BO-02 | Lift proactive save-rate | % of at-risk flyers contacted with intervention within 30 days | 18% (3× current) |
| BO-03 | Reduce miles-liability write-off | €m of expired miles annually | −€4m |
| BO-04 | Preserve flyer trust | Post-intervention NPS delta | +10 points vs no-contact control |
| BO-05 | Operate within regulatory envelope | Zero GDPR or EU AI Act material findings | 0 findings, 0 regulator contacts |

**Non-objectives (explicitly out of scope for the pilot):**

- Replacing the existing CRM or booking system.
- Acquiring new members (this is a retention, not acquisition, programme).
- Cargo, corporate accounts, or ad-hoc charter.
- B2B partner programmes beyond oneworld-style alliance interline.

---

## 4. Stakeholders

| Role | Name (fictional) | Responsibility | Engagement mode |
|---|---|---|---|
| Executive Sponsor | Claire Dubois, CCO | Approves budget, owns the P&L | Monthly steering |
| Product Manager | Pramithi Raroth | Owns scope, backlog, delivery | Day-to-day |
| Loyalty P&L Lead | Fionnuala Kelly | Defines KPIs, approves rollout phases | Bi-weekly |
| Head of Customer Intelligence | Dr. Aiko Tanaka | Data strategy, model governance | Weekly |
| Lead Experience Designer | Leo Marín | Journey design, ethics audit | Weekly |
| Staff Engineer | Priya Shah | Prototype + production build | Daily |
| VP Brand & Retention | Dara Okafor | Marketing execution, tone of voice | Weekly |
| Data Protection Officer | (TBC) | GDPR compliance sign-off | Milestones |
| Chief Information Security Officer | (TBC) | Security review | Milestones |

A RACI matrix for each workstream is maintained in a separate operational document and will be appended as Annex A in v1.1.

---

## 5. Proposed solution: agentic organisation

### 5.1 Architecture

SkyLoyal is delivered by **five specialised AI agents** collaborating in a linear pipeline, each producing a typed markdown artefact that is the sole input to the next agent. A Manager agent runs quality gates between every handoff.

```
Researcher → Designer → Maker → Communicator → Manager
    ↓           ↓         ↓          ↓             ↓
   01-       02-       docs/     04-gtm-     05-executive-
 research- design-   (prototype  pack.md      summary.md
 brief.md   spec.md    site)                  + manager-log.md
```

### 5.2 Why an agentic architecture

| Alternative considered | Why rejected |
|---|---|
| Single monolithic LLM prompt | Cannot separate analytical rigour from creative design from ethical governance; context bleeds; no audit trail |
| Traditional BI dashboard + human team | Slow, expensive, doesn't produce end-to-end output; no structured handoffs |
| Vendor churn-prediction SaaS | Generic models, no Octalysis integration, data residency concerns, no gamification layer |
| Multi-agent with orchestration framework (LangGraph, etc.) | Over-engineered for a pilot; handoff markdown files are easier to audit for GDPR and rubric transparency |

The five-agent markdown-artefact approach was chosen because **every handoff is a file a human can read, audit, and version-control**. This is essential for regulatory defensibility and for passing the H9CEAI rubric's Handoff criterion.

### 5.3 Agent specifications

| Agent | Persona | Domain expertise | Input | Output artefact | Superpower |
|---|---|---|---|---|---|
| **Researcher** | Dr. Aiko Tanaka | Behavioural economics, FFP analytics, churn modelling | `mock-loyalty-data.csv` | `outputs/01-research-brief.md` | Deep analysis, pattern recognition, source-cited rigour |
| **Designer** | Leo Marín | Experience design, service blueprinting, Octalysis framework | `01-research-brief.md` | `outputs/02-design-spec.md` | Creative problem-solving, ethical design thinking |
| **Maker** | Priya Shah | Front-end engineering, accessibility, data visualisation | `02-design-spec.md` | `docs/` (HTML/CSS/JS site) | Technical craftsmanship, rapid prototyping |
| **Communicator** | Dara Okafor | Loyalty marketing, CRM, transparent comms | `02-design-spec.md` + `docs/` | `outputs/04-gtm-pack.md` | Persuasion, storytelling, trust-first copy |
| **Manager** | Claire Dubois | P&L leadership, regulatory governance, executive narrative | All four prior artefacts | `outputs/05-executive-summary.md` + `manager-log.md` | Leadership, orchestration, rubric-level quality control |

The full system prompt for each agent is stored in `.claude/agents/<agent>.md` and forms part of the auditable configuration.

---

## 6. Scope

### 6.1 In scope (pilot)

- Churn prediction and risk-scoring for SkyLoyal members in Gold and Silver tiers, European hubs only.
- Intervention journey design anchored in the Octalysis framework, with explicit White-Hat / Black-Hat balance audit.
- A CSM-facing web dashboard showing at-risk flyers, health scores, and suggested next-best interventions.
- A flyer-facing gamified retention page demonstrating at least 6 of the 8 Octalysis Core Drives.
- GTM pack: positioning, email sequences, social copy, internal launch memo, press release, 60-second video script.
- Executive narrative: commercial case, KPI framework, rollout plan, risk register, regulatory posture.

### 6.2 Out of scope (pilot)

- Blue-tier members (volume too high for personalised interventions in pilot).
- Non-European hubs (data-residency complexity, different regulatory regimes).
- Cargo, corporate, charter, and interline-only accounts.
- Real-time intervention triggers during an active IROP event (future phase, requires integration with operations control).
- Mobile app push notifications (future phase, requires mobile SDK integration).
- Full production integration with the booking PSS / reservation system (pilot uses a data extract).

---

## 7. Functional requirements

Requirements are grouped by agent and tagged `FR-<agent>-<seq>` for traceability into test cases.

### 7.1 Researcher agent

| ID | Requirement | Acceptance criteria |
|---|---|---|
| FR-RES-01 | The Researcher shall ingest a loyalty-data CSV and produce descriptive statistics for each column | Output brief includes distribution summary for tier, miles balance, flights, NPS, complaint type |
| FR-RES-02 | The Researcher shall identify at least 4 at-risk flyer segments | Brief §3 contains a segment table with name, size, risk score, driving factors |
| FR-RES-03 | The Researcher shall produce 5 testable churn hypotheses | Brief §2 contains 5 numbered hypotheses in the form `H#: <segment> with <condition> is X% more likely to churn within <window>` |
| FR-RES-04 | The Researcher shall specify data requirements for production deployment | Brief §4 lists feature-engineering requirements beyond the pilot CSV |
| FR-RES-05 | The Researcher shall flag GDPR and EU AI Act considerations relevant to the data use | Brief §5 references Art. 22 profiling, lawful basis (legitimate interest + opt-out), and AI Act limited-risk classification |

### 7.2 Designer agent

| ID | Requirement | Acceptance criteria |
|---|---|---|
| FR-DSG-01 | The Designer shall produce intervention journeys for each segment identified by the Researcher | Design spec §3 contains one sub-section per archetype with 3–6 touchpoints |
| FR-DSG-02 | Every touchpoint shall be mapped to one or more Octalysis Core Drives | Each row in the touchpoint table carries a CD tag in the format `CD<n> <drive name>` |
| FR-DSG-03 | The Designer shall produce ASCII wireframes for the CSM dashboard and the flyer-facing view | Spec §4 and §5 contain wireframes, not prose-only descriptions |
| FR-DSG-04 | The Designer shall perform a White-Hat / Black-Hat audit on every touchpoint | Spec §6 contains a balance table; any touchpoint classed "dark pattern" must be replaced with a white-hat alternative |
| FR-DSG-05 | The flyer-facing view shall display at least 6 of the 8 Octalysis Core Drives on a single page | Spec §5 wireframe labels each UI element with its CD |

### 7.3 Maker agent

| ID | Requirement | Acceptance criteria |
|---|---|---|
| FR-MAK-01 | The Maker shall produce a static site under `docs/` with no build tooling | Opening `docs/index.html` in a browser renders the site end-to-end |
| FR-MAK-02 | The CSM dashboard shall render at-risk flyer data from `docs/mock-data.json` | Clicking a flyer row updates a profile panel with risk factors and suggested interventions |
| FR-MAK-03 | The flyer-facing view shall expose Octalysis Core Drives via `data-cd="CD<n>"` attributes | `grep -oP 'data-cd="CD\d+"' docs/flyer-view.html \| sort -u \| wc -l` returns ≥ 6 |
| FR-MAK-04 | The site shall meet a WCAG AA contrast baseline on body text | Lighthouse Accessibility score ≥ 90 |
| FR-MAK-05 | The site shall load with zero external CDN dependencies | Network tab shows zero third-party requests |
| FR-MAK-06 | The site shall be responsive down to 375px viewport | Layout remains usable at 375×667 in Chrome DevTools device mode |

### 7.4 Communicator agent

| ID | Requirement | Acceptance criteria |
|---|---|---|
| FR-COM-01 | The Communicator shall produce a positioning statement under 60 words | §1 of GTM pack contains exactly one paragraph ≤ 60 words |
| FR-COM-02 | The Communicator shall produce a customer email sequence of at least 3 emails, one per archetype | §4 contains 3 emails, each with subject, ~100-word body, CTA |
| FR-COM-03 | Every customer-facing piece shall declare its lawful basis in plain English | Each email/post contains a one-sentence "why you are receiving this" disclosure |
| FR-COM-04 | No campaign piece shall use anxiety-inducing dark patterns | Manager audit in `manager-log.md` confirms no CD8 Loss messaging exceeds the Designer's agreed balance |
| FR-COM-05 | Every campaign piece shall reference the live UI by page name or URL | At least one `docs/flyer-view.html` or live Pages URL reference per asset |

### 7.5 Manager agent

| ID | Requirement | Acceptance criteria |
|---|---|---|
| FR-MGR-01 | The Manager shall review every artefact after its producing agent finishes | `manager-log.md` contains one block per artefact per cycle |
| FR-MGR-02 | The Manager shall issue either APPROVED or RETURNED verdicts with specific feedback | RETURNED entries include ≤ 3 bullet points of actionable feedback |
| FR-MGR-03 | The Manager shall maintain cycle counters per agent | Log entries follow the format `## Cycle <N>, <Agent>, <timestamp>` |
| FR-MGR-04 | The Manager shall produce `outputs/05-executive-summary.md` after all prior artefacts are APPROVED | Summary contains sections 1–8 as per the agent output contract |
| FR-MGR-05 | The Manager shall self-score the output against the H9CEAI rubric | §7 of the executive summary contains a rubric self-assessment table |

---

## 8. Non-functional requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-01 | Performance | The prototype site shall render the dashboard from 30 records in ≤ 500ms on a baseline laptop |
| NFR-02 | Accessibility | All UI surfaces shall meet WCAG 2.1 AA on contrast, keyboard navigation, and landmark structure |
| NFR-03 | Privacy | All processing during pilot shall use synthetic or pseudonymised data, no production PII in the prototype repo |
| NFR-04 | Security | The public repo shall contain no secrets, API keys, or credentials; `.gitignore` enforces this |
| NFR-05 | Auditability | Every agent artefact shall be a plain markdown file committed to the repo, enabling line-by-line diff review |
| NFR-06 | Reproducibility | The mock dataset shall be generated with a fixed random seed so analyses are repeatable |
| NFR-07 | Portability | The prototype site shall run without a build step, from any modern browser, served by GitHub Pages |
| NFR-08 | Documentation | Each agent's system prompt shall be versioned alongside its outputs so behaviour is traceable |

---

## 9. Octalysis gamification strategy

The platform's flyer-facing interventions are designed around **Yu-kai Chou's Octalysis framework**, which identifies 8 Core Drives of human motivation. The Designer agent anchors every touchpoint to one or more Core Drives, and performs a **White-Hat vs Black-Hat balance audit** (§9.3).

### 9.1 The 8 Core Drives applied to airline loyalty

| # | Core Drive | White/Black | Airline expression in SkyLoyal |
|---|---|---|---|
| CD1 | Epic Meaning & Calling | White | "Your tier funds our sustainable aviation fuel programme, your flying carries the whole airline's green commitment", identity + contribution framing |
| CD2 | Development & Accomplishment | White | Tier progress ring: "3 flights to retain Gold, 9 to unlock Platinum". Skill badges for first long-haul, first partner-airline booking, first lounge use |
| CD3 | Empowerment of Creativity & Feedback | White | Custom trip themes ("business-quick", "family-slow"), preferred-seat auto-selection, flyer-submitted route suggestions with public credit |
| CD4 | Ownership & Possession | White | "Your miles, your history", personalised year-in-review: "You flew 42,800 miles, Dublin to Sydney and back". Mile bank visualised as an owned asset, not a liability |
| CD5 | Social Influence & Relatedness | White | Optional alliance leaderboard (opt-in only), family-pooled miles, "people in your home hub also booked…" peer-based suggestions |
| CD6 | Scarcity & Impatience | Black, use sparingly | Limited award-seat windows, tier-anniversary bonus-mile windows, exclusive experiential offers (stadium tours, chef dinners) for Platinum |
| CD7 | Unpredictability & Curiosity | Black, use sparingly | Surprise upgrade drops for consistent flyers, mystery perks ("a gift at boarding on your next flight"), randomised double-miles days |
| CD8 | Loss & Avoidance | Black, strictly governed | "Your Gold tier expires in 63 days, here are three ways to retain it without a status run" (**frames the loss, but opens doors, not traps**) |

### 9.2 Mapping to at-risk segments

| Segment (illustrative) | Primary motivator | Primary CDs | Intervention example |
|---|---|---|---|
| **Status-Slippers** (Gold flown < 3 segments in last quarter) | Avoiding downgrade | CD8, CD2 | Personalised "here are your options to retain Gold" journey, 4 touchpoints over 60 days |
| **Miles-Hoarders** (balance > 80k, zero redemption in 18m) | Realising value | CD3, CD4 | "Your miles could fly your family to Lisbon" redemption wizard with 5 tailored trip ideas |
| **Alliance-Drifters** (partner-airline flights > 40% of trailing 12m) | Preference + convenience | CD5, CD1 | "Fly SkyJet metal for your next Dublin–London" with value-comparison + shared-identity framing |
| **Complaint-Scarred** (recent IROP + NPS ≤ 0) | Recognition + restitution | CD3, CD7 | Personal apology, gesture chosen by flyer (extra miles vs lounge pass vs charity donation) |

### 9.3 White-Hat / Black-Hat audit discipline

The framework explicitly warns that Black-Hat drives (CD6 Scarcity, CD7 Unpredictability, CD8 Loss Avoidance) are short-term effective but corrosive to trust if over-used. The Designer agent enforces:

- **Default balance target:** ≥ 70% of touchpoints draw primarily on White-Hat drives (CD1–CD4).
- **Opt-in for intensity:** any campaign leaning > 30% Black-Hat must be explicitly approved by the Manager and logged in `manager-log.md`.
- **Hard bans:** no fake scarcity (false seat counts), no guilt framing, no countdown timers designed to induce purchase anxiety.

---

## 10. Regulatory & ethical considerations

### 10.1 GDPR

| Area | Treatment |
|---|---|
| **Lawful basis** | Legitimate interest (Art. 6(1)(f)) for the risk-scoring, with a published Legitimate Interest Assessment. Explicit consent (Art. 6(1)(a)) for marketing communications, existing consent captured at enrolment and re-confirmable in flyer profile settings. |
| **Automated decision-making (Art. 22)** | Risk scores inform human-reviewed interventions; no fully-automated decisions affecting the flyer (e.g., tier downgrades) are taken by the model. CSMs retain discretion on every outreach. |
| **Data minimisation (Art. 5(1)(c))** | Pilot uses only features with demonstrated predictive value (see FR-RES-04). No free-text complaint contents enter the model, only categorical tags. |
| **Retention (Art. 5(1)(e))** | Risk scores retained 90 days; source features follow programme's existing 7-year retention. |
| **Data subject rights** | Flyers can view their current risk factors in the flyer-facing view (Art. 15 Right of Access), object to profiling via account settings (Art. 21), and request erasure (Art. 17) per the existing loyalty terms. |

### 10.2 EU AI Act

| Area | Treatment |
|---|---|
| **Risk classification** | Limited-risk system under Title IV. It is a profiling tool used in a consumer-retention context; it is not a high-risk system under Annex III because it does not evaluate creditworthiness, access to essential services, or employment. |
| **Transparency obligations (Art. 52)** | Flyers are informed they are interacting with an AI-assisted system when they view their risk factors. Disclosures embedded in the flyer-facing view and in the privacy notice. |
| **Human oversight** | CSMs review every high-risk intervention before it is sent. Manager agent's log acts as a tertiary audit layer. |
| **Logging** | Every agent invocation, every artefact, every Manager verdict is version-controlled in git, providing tamper-evident logs for regulator inspection. |
| **Model cards** | A model card documenting the risk scorer's inputs, outputs, performance, and known limitations is to be published before the production rollout (Phase 3). |

### 10.3 Trust framing

The single most important ethical commitment of this platform is **transparency over urgency**. A flyer who understands *why* they received a retention offer is more likely to accept it, stay, and trust the airline with more data. A flyer who feels surveilled is a flyer lost, regardless of whether the intervention "saved" them in the current quarter.

---

## 11. Success metrics & KPIs

### 11.1 Commercial KPIs (reported to the loyalty P&L)

| KPI | Baseline | 12-month target | 18-month target | Measurement cadence |
|---|---|---|---|---|
| Active Member Ratio (Gold + Silver) | 51% | 55% | 58% | Monthly |
| Gold retention (year-on-year) | 77% | 81% | 82% | Annual + monthly cohort |
| Proactive save-rate (% at-risk contacted in 30d) | 6% | 14% | 18% | Weekly |
| Miles-liability write-off | €11m | €8m | €7m | Quarterly |
| Customer Lifetime Value uplift, treated cohort | 0 | +€48 per flyer | +€120 per flyer | Quarterly |
| Cost per Save | - | ≤ €42 | ≤ €35 | Monthly |

### 11.2 Trust KPIs (reported to DPO and CCO)

| KPI | Target | Cadence |
|---|---|---|
| Post-intervention NPS delta (vs no-contact control) | +10 points | Monthly |
| Unsubscribe rate on retention emails | ≤ 2.5% | Weekly |
| Complaint rate citing "feeling targeted" | 0 per 10k contacts | Monthly |
| GDPR-related access requests following interventions | ≤ baseline | Monthly |

### 11.3 Operational KPIs (reported to product + engineering)

| KPI | Target |
|---|---|
| Agent cycle completion time (Researcher → Manager final summary) | < 2 hours of active runtime |
| Manager return rate (% of artefacts RETURNED before approval) | 20–40% (too low = rubber-stamping; too high = prompt quality issues) |
| Prototype site uptime (GitHub Pages) | ≥ 99% |

---

## 12. Assumptions & dependencies

### 12.1 Assumptions

- Mock loyalty data is representative of real data in structure and distribution (production rollout requires validation against a real extract).
- SkyLoyal's existing consent records cover marketing communications for the target cohorts.
- Anthropic Claude (Opus 4.7, 1M context) is the LLM used throughout the pilot, swapping model provider would require re-validation of system prompts.
- GitHub Pages remains available and free for public repos.
- The Octalysis framework, while proprietary in its naming, is usable for internal design work under fair dealing, no licence required for the pilot.

### 12.2 Dependencies

| Dependency | Owner | Needed by |
|---|---|---|
| Access to production loyalty data extract (pseudonymised) | CDO | Phase 2 (scale) |
| DPO sign-off on LIA and DPIA | DPO | Pilot launch |
| CSM tooling integration (read-only link from dashboard to the existing CSM console) | Engineering | Pilot launch |
| Email sending infrastructure (transactional + marketing) | MarTech | Pilot launch |
| Model card and public AI-use disclosure | Legal + Comms | Phase 3 (production) |

---

## 13. Risks & mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| R-01 | Risk model false-positives anger loyal flyers | Medium | High | Human-in-the-loop review; conservative contact thresholds in pilot; opt-out in every email |
| R-02 | Black-Hat gamification erodes trust | Low | High | Designer's White/Black audit, default ≥ 70% White-Hat, hard bans on fake scarcity |
| R-03 | GDPR regulator finding | Low | High | DPO sign-off on LIA + DPIA before launch, Art. 22 human review, model card published |
| R-04 | EU AI Act reclassification to high-risk | Low | Medium | Periodic review of Annex III scope; avoid features (e.g., access to essential services) that would trigger high-risk |
| R-05 | Handoff quality degrades between agents (context loss) | Medium | Medium | Strict output contracts, Manager gate returns on weak artefacts, filename-citation discipline |
| R-06 | Prototype shown publicly is mistaken for production | Low | Medium | Clear "pilot" / "synthetic data" watermarks on the flyer-view page; privacy notice links |
| R-07 | Turnitin flags text as AI-generated | Medium | Low | Reflection and narrative prose written in Pramithi's voice, not pasted; every AI excerpt cited |
| R-08 | Pilot ROI falls short of €1.8m budget | Low | High | Stage-gate structure (Phase 1 go/no-go at 6 months); cost-per-save cap; opt to narrow cohort before scaling |

---

## 14. Phased rollout plan

| Phase | Duration | Scope | Budget | Go / No-Go criteria |
|---|---|---|---|---|
| **Phase 0, Pilot design** | 2 months | This BRD approved, DPO sign-off, data extract specification | €80k | DPO green-lights LIA + DPIA |
| **Phase 1, Closed pilot** | 6 months | 4,200 Gold flyers, Dublin hub only, CSM-mediated every intervention | €520k | ≥ +3pp retention lift vs control, ≤ 2.5% unsubscribe, zero complaints citing "feeling targeted" |
| **Phase 2, Scaled pilot** | 6 months | 42,000 Gold + Silver flyers across DUB/AMS/MAD, partial automation of low-risk interventions | €750k | ≥ +5pp retention lift, €4m+ reduction in miles-liability write-off, NPS delta +10 |
| **Phase 3, Production rollout** | 6 months | Full European FFP base, mobile app integration, IROP real-time triggers | €450k ongoing + capex | Approved by CCO + CFO based on Phase 2 commercial outcomes |
| **Total 18-month programme** | | | **€1.8m** | |

---

## 15. Acceptance criteria (pilot)

The pilot will be deemed successful and production-ready if and only if **all** of the following hold after Phase 2:

- [ ] Gold retention lift ≥ +5pp vs baseline, statistically significant at p < 0.05
- [ ] Cost per Save ≤ €42
- [ ] Trust KPIs all within tolerance (NPS delta ≥ +10, unsubscribe ≤ 2.5%, zero "feeling targeted" complaints)
- [ ] Regulatory: zero material GDPR findings, zero EU AI Act reclassification risk identified
- [ ] Operational: Manager return rate within 20–40% band; prototype site uptime ≥ 99%
- [ ] Executive summary (`outputs/05-executive-summary.md`) reviewed and signed off by CCO

---

## 16. Open questions (to resolve before Phase 1 kick-off)

| # | Question | Owner | Resolve by |
|---|---|---|---|
| Q-01 | Do we need a separate flyer-facing consent flow beyond the existing FFP T&Cs for the risk-scoring feature? | DPO | Pilot kick-off |
| Q-02 | What is the appropriate human-oversight SLA, CSM reviews every intervention within 48h? 24h? | CCO | Pilot kick-off |
| Q-03 | Should the alliance leaderboard (CD5) be opt-in or off-by-default? | Design + Legal | Phase 1 start |
| Q-04 | Which LLM provider will be used in production, Claude, an on-prem model, or a hybrid? | Engineering + CISO | Phase 2 start |
| Q-05 | Is miles-liability write-off reduction a proper KPI, or does accounting treat it differently? | CFO | Phase 1 start |

---

## 17. Glossary

| Term | Meaning |
|---|---|
| **Active Member Ratio (AMR)** | % of programme members flying ≥ 1 segment in trailing 12 months |
| **CD (Core Drive)** | One of the 8 motivational drives in Yu-kai Chou's Octalysis framework |
| **CSM** | Customer Success Manager, SkyLoyal staff who engage high-value flyers directly |
| **FFP** | Frequent Flyer Programme |
| **IROP** | Irregular Operations, delays > 3h, cancellations, denied boarding, baggage mishandling |
| **Mattress-running** | Booking unnecessary flights purely to preserve elite status |
| **Miles liability** | The balance-sheet provision airlines hold for unredeemed miles |
| **NPS** | Net Promoter Score |
| **PNR** | Passenger Name Record, booking identifier |
| **Silent churn / silent disengagement** | Member retains the account but stops flying with the carrier |
| **Status run** | A booking taken specifically to cross a tier-qualification threshold |
| **White Hat / Black Hat** | Octalysis classification: White Hat drives empower; Black Hat drives create urgency or fear |

---

## 18. References

1. Chou, Y. (2015). *Actionable Gamification: Beyond Points, Badges and Leaderboards*. Octalysis Media.
2. IATA. (2024). *Global Passenger Survey 2024*. International Air Transport Association.
3. IAG Loyalty. (2025). *Annual Review*. International Airlines Group.
4. European Parliament & Council. (2016). *Regulation (EU) 2016/679, General Data Protection Regulation*.
5. European Parliament & Council. (2024). *Regulation (EU) 2024/1689, Artificial Intelligence Act*.
6. McKinsey & Company. (2026). *State of AI Trust in 2026, Shifting to the Agentic Era*.
7. Tesseract Learning. (2025). *Gamification in 2026: Going Beyond Stars, Badges and Points*.
8. European Data Protection Board. (2023). *Guidelines on Automated Decision-Making and Profiling (updated)*.
9. Yu-kai Chou (n.d.). *The Octalysis Framework for Gamification*. https://yukaichou.com/gamification-examples/octalysis-gamification-framework/
10. National College of Ireland. (2026). *H9CEAI Customer Engagement & AI, Final Project Brief (MSCAIBUS1)*.

---

## 19. Annexes

- **Annex A (deferred to v1.1):** RACI matrix per workstream.
- **Annex B (deferred to v1.1):** Detailed data model for the production risk-scoring feature set.
- **Annex C (deferred to v1.1):** Draft Data Protection Impact Assessment (DPIA) template.
- **Annex D:** Agent system prompts are maintained as separate files under `.claude/agents/` in the project repository and are considered part of the configuration baseline for this BRD.

---

**End of Business Requirements Document, Version 1.0**

_Signed off by: (pending)_
_Approved for pilot funding: (pending)_
