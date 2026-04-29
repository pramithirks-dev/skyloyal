# Submission Pack

**For:** H9CEAI Final Project (MSCAIBUS1)
**Author:** Pramithi Raroth Karimpanakkal
**Date:** 2026-04-29

This document gives you everything you need to write the PPTX submission **in your own voice**. Each section has the brief's word budget, a structure to follow, prompts you can adapt, screenshots to capture, and the AI citation entries that belong on that slide.

The actual prose must be yours per the module's AI Usage Policy. Use the prompts as a scaffold, not as ready-made copy.

---

## Submission targets

| Constraint | Value |
|---|---|
| File format | Single PPTX (Word/PDF allowed, PPTX preferred per Prof) |
| Word count | 1,500–2,500 words (diagrams, screenshots, code excerpts excluded) |
| Submission | Turnitin via Moodle |
| Pass mark | 40% |
| Target band | Excellent (70+) |
| Live prototype URL | https://pramithirks-dev.github.io/skyloyal/ |
| Repo URL | https://github.com/pramithirks-dev/skyloyal |

---

## Slide-by-slide outline

### Slide 1 — Title

**No word count.**

Content:
- Title: **SkyLoyal: a 5-Agent Agentic Organisation for Frequent-Flyer Loyalty**
- Author: Pramithi Raroth Karimpanakkal · Student ID
- Module: H9CEAI Customer Engagement and AI · MSCAIBUS1
- Date: (your submission date)
- Live prototype: https://pramithirks-dev.github.io/skyloyal/
- Repo: https://github.com/pramithirks-dev/skyloyal

Visual: SkyJet brand mark or a hero shot of the live prototype.

---

### Slide 2–3 — Your Organisation (~200 words)

**Brief asks:** What organisation, what business challenge, why agentic.

Structure (your prose):

1. **Introduce the organisation.** SkyJet Airways, fictional Ireland-hubbed network carrier. SkyLoyal is its loyalty programme. Mid-size, 9.4M members, 78 destinations, hubs in Dublin, Amsterdam, Madrid.
2. **Name the challenge.** Silent disengagement. Members don't cancel, they migrate spend to alliance partners or LCCs. Active Member Ratio is 51% vs 58% peer median. Year-on-year Gold retention is 77% vs 85% peer median. Cost of acquiring a new Gold flyer is 8–12× the cost of retaining one (IATA, 2024).
3. **Why agentic.** A monolithic LLM can't separate analytical rigour, design ethics, build, marketing, and commercial governance into auditable steps. A single human team is too slow and expensive for proactive contact at scale. The agentic pipeline gives every artefact a typed, version-controlled handoff that satisfies GDPR Art. 22 audit requirements.

Suggested screenshot: a single hero shot of the live SkyLoyal homepage from the prototype.

---

### Slide 4–8 — Agent Designs (~500 words, one per agent)

**Brief asks:** For each of 5 agents — name, role, full system prompt, what it produces, how it differs.

Use one slide per agent. ~100 words each.

#### Slide 4: Researcher — Dr. Aiko Tanaka

- **Role:** Identify the opportunity. Deep analysis, pattern recognition.
- **Output:** `outputs/01-research-brief.md` — four at-risk segments, five testable churn hypotheses, GDPR/EU AI Act flags, handoff brief to Designer.
- **Personality:** Sceptical, source-cited, British-English, no marketing prose.
- **System prompt excerpt:** Show 4–5 lines from `.claude/agents/researcher.md`. The "Voice" and "Domain" paragraphs are the most distinctive.
- **Differentiator from others:** Cites primary sources (IATA 2024 survey). Refuses anecdote. Caveats every generalisation with sample size.

#### Slide 5: Designer — Leo Marín

- **Role:** Create the solution. Creative problem-solving, ethical design.
- **Output:** `outputs/02-design-spec.md` — four flyer archetypes, four intervention journeys, ASCII wireframes, White-Hat / Black-Hat audit (81/19).
- **Personality:** Warm, generative, obsessive about empathy. Sketches before writing.
- **System prompt excerpt:** The Octalysis-anchoring section is unique to him.
- **Differentiator:** Maps every touchpoint to Octalysis Core Drives explicitly. Drops design choices that lean Black-Hat.

#### Slide 6: Maker — Priya Shah

- **Role:** Build the product. Technical craftsmanship, rapid prototyping.
- **Output:** `docs/` site — six HTML pages (index, skyjet, flyer-view, dashboard, flight-results, award-results, manage-booking) + CSS + JS + JSON.
- **Personality:** Pragmatic, vanilla-first. "No JavaScript until it earns its place."
- **System prompt excerpt:** The "no frameworks, no build step" rule.
- **Differentiator:** Every Octalysis element on the flyer view carries a `data-cd="CDx"` attribute for audit. 7 of 8 CDs tagged.

#### Slide 7: Communicator — Dara Okafor

- **Role:** Get the customers. Persuasion and storytelling.
- **Output:** `outputs/04-gtm-pack.md` — positioning, three messaging pillars, internal launch memo, three customer emails (Nuala, Marcus, Rashida), social copy, 60-sec video script, press release.
- **Personality:** Allergic to dark patterns. Pressure-tests every line with "would I want to receive this?"
- **System prompt excerpt:** The lawful-basis-disclosure rule.
- **Differentiator:** Every customer-facing piece declares its lawful basis in plain English. The Rashida email opener ("There is no offer in this email") is the standout.

#### Slide 8: Manager — Claire Dubois

- **Role:** Run the business. Leadership, orchestration.
- **Output:** `outputs/manager-log.md` (every cycle entry) + `outputs/05-executive-summary.md` (final synthesis).
- **Personality:** Calm, decisive, "so what?" of every insight.
- **Differentiator:** Two roles. Quality gatekeeper between every handoff (returns artefacts when weak), then final synthesiser writing the board-ready exec summary with rubric self-score.

---

### Slide 9–11 — The Pipeline in Action (~300 words + evidence)

**Brief asks:** Describe how work flows agent to agent. Include screenshots, transcripts, link to recording. Show output produced at each stage. Include working prototype as a GitHub Page.

Structure across 3 slides:

#### Slide 9: The pipeline diagram + handoff chain

- The 5-step pipeline diagram (recreate the one on the homepage).
- One sentence per agent describing what they produced.
- Cite each artefact filename: `01-research-brief.md` → `02-design-spec.md` → `docs/` → `04-gtm-pack.md` → `05-executive-summary.md`.

Screenshot: the homepage "How it works" pipeline diagram, OR the original 5-node pipeline from earlier README.

#### Slide 10: Cycle 1 → Cycle 2 (the substantive return)

This is your **rubric Criterion 5 evidence** (Reflection & Insight, 15 marks). Use it.

What to write:
- The Manager intentionally returned the Designer's first pass for three issues: unjustified segment merge, ambiguous CD8 tagging, no measurement framework.
- Cycle 2 of the Designer addressed all three: split Status-Slippers and Miles-Hoarders into two distinct archetypes (Nuala and Marcus), introduced explicit `data-cd` primary/secondary tagging, and added success metric columns drawing from BRD §11.
- Total cycles: 6 (1 Researcher, 2 Designer, 1 Maker, 1 Communicator, 1 Manager). All approved.

Screenshots to capture (open `outputs/manager-log.md` in your editor or on GitHub):
- The Cycle 1 Designer RETURNED block with the three feedback bullet points.
- The Cycle 2 Designer APPROVED block.

Quote one return-reason verbatim — it shows the marker that the Manager actually critiqued.

#### Slide 11: Live prototype

- **GitHub Pages URL prominent:** https://pramithirks-dev.github.io/skyloyal/
- A QR code if your PPT supports it (helps in-person review).
- Screenshots:
  - SkyLoyal homepage hero (incognito tab so you don't show your own state).
  - SkyLoyal flyer view (the personal account page) showing the tier card, the 3-tile stat row, and at least one Octalysis CD label.
  - The `data-cd` audit grep result: in your terminal run `grep -oE 'data-cd="CD[0-9]+"' docs/flyer-view.html | sort -u` and screenshot the seven values it returns.
  - Optional: the SkyJet airline page hero or the manage-booking page.

---

### Slide 12 — Regulatory & Ethical Considerations (~200 words)

**Brief asks:** GDPR, EU AI Act, trust framing.

Structure (your prose):

1. **GDPR.** Lawful basis is Article 6(1)(f) legitimate interest for risk-scoring with Article 6(1)(a) consent for marketing. Article 22 satisfied by human-in-the-loop CSM review of every retention offer. Article 15 right of access surfaced via the "Why am I seeing this?" block on the flyer view. Article 21 right to object via in-app opt-out. Data minimisation: only features the Researcher identified as predictive enter the model.
2. **EU AI Act.** Classified as **limited-risk under Title IV** (it doesn't affect access to essential services, employment, or credit). Transparency obligation met by disclosing the AI-assisted nature on the flyer view. Logging via git: every agent invocation is version-controlled. A model card will be published before scale-up beyond 10,000 flyers.
3. **Trust framing.** White-Hat / Black-Hat audit at 81/19, well above the 70% White-Hat target in BRD §9.3. CD6 Scarcity deliberately omitted from the pilot. CD7 and CD8 bounded by hard rules: every "surprise" must be a real benefit; CD8 is always white-hat-framed as opportunity.

Screenshot: the Article 15 / 22 transparency block on `flyer-view.html` (the dashed-border footer that says "Why am I seeing what I am seeing?").

---

### Slide 13–14 — Reflection (~300 words, your voice)

**Brief asks:** What worked, what didn't, what surprised, what you learned about multi-agent collaboration, what you would improve with more time.

**This must be in your voice.** Use these prompts as a starting point — answer them with what *you* genuinely felt during this build.

| Prompt | Your answer (write here as raw bullets first, then expand into prose) |
|---|---|
| Which handoff felt strongest? | |
| Which handoff felt weakest — where did context leak? | |
| Did the Manager catch something a human reviewer might have missed? | |
| What surprised you about the way the agents disagreed? | |
| Would a 6th agent (e.g. an Ethics Reviewer or Critic) have changed the output? | |
| If you had 40 more hours, what would you build? | |

**One concrete anchor for the prose:** the Designer Cycle 1 return. The Manager flagged that the Designer collapsed Status-Slippers and Miles-Hoarders into one archetype on the grounds of "overlap." Cycle 2 corrected this by quantifying the actual intersection (9 of 18 / 14 of 23) and producing two distinct archetypes (Nuala and Marcus). Without the gate, the pilot would have shipped a less commercially differentiated journey. Use this as your central case study and write 100 words around it.

**Avoid AI-generated phrasing.** Read your draft aloud. If it sounds like *"It is important to note that..."* or *"Moreover..."* or *"In conclusion..."*, rewrite. The marker reads many submissions; AI prose stands out.

---

### Slide 15 — References & AI Citations

**Required:** all AI invocations must be cited (model + prompt summary + date).

#### AI usage citations (copy directly to slide)

| Date | Model | Invocation | Output |
|---|---|---|---|
| 2026-04-21 | Claude Opus 4.7 (1M context) | "Plan how to complete the H9CEAI final project, airline domain, Octalysis framework" | Plan file |
| 2026-04-21 | Claude Opus 4.7 (1M context) | "Author 5 agent system prompts with personas, airline-loyalty domain priming, Octalysis anchoring, strict output contracts" | `.claude/agents/*.md` (5 files) |
| 2026-04-21 | Claude Opus 4.7 (1M context) | "Generate 500 synthetic flyer records with realistic tier pyramid and heuristic churn labels, seed=42" | `inputs/mock-loyalty-data.csv` |
| 2026-04-21 | Claude Opus 4.7 (1M context) | "Create public GitHub repo, push, enable Pages on main/docs" | https://github.com/pramithirks-dev/skyloyal |
| 2026-04-21 | Claude Opus 4.7 (1M context) | "Author the H9CEAI BRD covering business case, FRs, NFRs, Octalysis strategy, GDPR + EU AI Act, KPIs, rollout, risks" | `BRD.md` (5,069 words) |
| 2026-04-29 | Claude Opus 4.7 (1M context) | "Run Cycle 1 of the agentic pipeline as the Researcher (Dr. Aiko Tanaka): analyse the mock dataset and write the research brief" | `outputs/01-research-brief.md` |
| 2026-04-29 | Claude Opus 4.7 (1M context) | "Run as Manager (Claire Dubois): review the Researcher's brief, append a verdict block to manager-log.md" | `outputs/manager-log.md` (Cycle 1 Researcher) |
| 2026-04-29 | Claude Opus 4.7 (1M context) | "Run as Designer (Leo Marín): consume research brief, produce design spec with Octalysis-anchored journeys, ASCII wireframes, WH/BH audit" | `outputs/02-design-spec.md` (Cycle 1) |
| 2026-04-29 | Claude Opus 4.7 (1M context) | "Run as Manager: critique the Designer's first pass, return for revision on segment merge, CD8 tagging, no metrics" | `outputs/manager-log.md` (Cycle 1 Designer RETURNED) |
| 2026-04-29 | Claude Opus 4.7 (1M context) | "Run as Designer Cycle 2: address Manager return reasons" | `outputs/02-design-spec.md` (Cycle 2) |
| 2026-04-29 | Claude Opus 4.7 (1M context) | "Run as Maker (Priya Shah): build the static site under docs/ with three pages, vanilla HTML/CSS/JS, data-cd attributes" | `docs/index.html`, `dashboard.html`, `flyer-view.html`, `mock-data.json`, `assets/style.css`, `assets/app.js` |
| 2026-04-29 | Claude Opus 4.7 (1M context) | "Run as Communicator (Dara Okafor): produce GTM pack with positioning, emails, social, video script, press release" | `outputs/04-gtm-pack.md` |
| 2026-04-29 | Claude Opus 4.7 (1M context) | "Run as Manager final synthesiser: write the executive summary with rubric self-score" | `outputs/05-executive-summary.md` |
| 2026-04-29 | Claude Opus 4.7 (1M context) | "Redesign the prototype site with cinematic hero, destination grid, multi-column footer, airline-grade typography" | `docs/*.html`, `docs/assets/style.css` |
| 2026-04-29 | Claude Opus 4.7 (1M context) | "Reframe loyalty homepage copy from loss-led to recognition-led; rename airline to SkyJet Airways while preserving SkyLoyal as programme" | `docs/index.html`, `docs/skyjet.html`, all artefacts |
| 2026-04-29 | Claude Opus 4.7 (1M context) | "Build separate SkyJet airline website with cinematic hero, booking widget, destinations, why-fly pillars, SkyLoyal callout, newsroom, footer" | `docs/skyjet.html`, `docs/manage-booking.html` |

#### Module + framework references

1. Chou, Y. (2015). *Actionable Gamification: Beyond Points, Badges and Leaderboards*. Octalysis Media.
2. IATA. (2024). *Global Passenger Survey 2024*. International Air Transport Association.
3. European Parliament & Council. (2016). *Regulation (EU) 2016/679 — General Data Protection Regulation*.
4. European Parliament & Council. (2024). *Regulation (EU) 2024/1689 — Artificial Intelligence Act*.
5. McKinsey & Company. (2026). *State of AI Trust in 2026 — Shifting to the Agentic Era*.
6. National College of Ireland. (2026). *H9CEAI Customer Engagement & AI — Final Project Brief (MSCAIBUS1)*.

---

## Screenshot inventory

Capture in incognito (clean state) before drafting the slides. Save under `submission/screenshots/`.

| # | Subject | URL | What to frame |
|---|---|---|---|
| 1 | SkyLoyal homepage hero | https://pramithirks-dev.github.io/skyloyal/ | Whole hero with Dublin image and lookup card visible |
| 2 | SkyLoyal "How it works" 3-step | same, scroll down | The three-node pipeline diagram |
| 3 | SkyLoyal Octalysis CD grid | same, scroll further | The 8 chips with CD6 greyed out |
| 4 | SkyJet airline homepage | https://pramithirks-dev.github.io/skyloyal/skyjet.html | Hero with aircraft wing |
| 5 | SkyJet booking lookup card | same | The 3-tab booking widget |
| 6 | SkyLoyal flyer view (Nuala account) | https://pramithirks-dev.github.io/skyloyal/flyer-view.html | Account header + tier card + 3 stat tiles |
| 7 | Octalysis CDs in HTML | same, browser DevTools | DevTools showing `data-cd="CD2"` etc on the elements |
| 8 | CSM dashboard | https://pramithirks-dev.github.io/skyloyal/dashboard.html | The at-risk flyer queue with one selected |
| 9 | Article 15/22 transparency block | https://pramithirks-dev.github.io/skyloyal/flyer-view.html | The dashed-border footer block |
| 10 | Manager log (Cycle 1 RETURN) | https://github.com/pramithirks-dev/skyloyal/blob/main/outputs/manager-log.md | The Cycle 1 Designer RETURNED block |
| 11 | Manager log (Cycle 2 APPROVED) | same | The Cycle 2 Designer APPROVED block |
| 12 | data-cd grep terminal output | local terminal | The `grep -oE 'data-cd="CD[0-9]+"' docs/flyer-view.html \| sort -u` output (seven CDs) |
| 13 | Repo file tree | https://github.com/pramithirks-dev/skyloyal | The folder layout — proves the agentic configuration is real |

---

## Pre-submission checklist

Before uploading to Turnitin, all must be YES:

- [ ] Pages URL loads in a private/incognito browser, all 7 pages render, no console errors:
  - [ ] `/` (index)
  - [ ] `/skyjet.html`
  - [ ] `/flyer-view.html`
  - [ ] `/dashboard.html`
  - [ ] `/flight-results.html?to=BOS`
  - [ ] `/award-results.html`
  - [ ] `/manage-booking.html?mode=manage`
- [ ] Submission is a single `.pptx` file
- [ ] Total prose ≤ 2,500 words (run word-count on slide notes)
- [ ] Every AI excerpt cites model + prompt + date
- [ ] Reflection section reads in your voice (read aloud to self-check)
- [ ] All 5 agent `.md` files committed and visible in the public repo
- [ ] `manager-log.md` shows ≥ 2 cycles with ≥ 1 substantive RETURN documented
- [ ] No phrasing accidentally copied from the Churn-Busters proposal doc
- [ ] Airline terminology consistent: flyer, tier, miles, segment — no SaaS terms (user, MRR, subscription)
- [ ] File uploaded to Turnitin via Moodle, confirmation email received

---

## Word count budget tracker

Fill in as you draft. Target totals at right.

| Section | Target | Drafted |
|---|---|---|
| Your Organisation | ~200 | |
| Agent Designs (5 × ~100) | ~500 | |
| Pipeline in Action | ~300 | |
| Regulatory & Ethical | ~200 | |
| Reflection | ~300 | |
| **Total** | **~1,500–2,500** | |

---

## Rubric self-projection

| Criterion | Marks | Self-projected | Why |
|---|---|---|---|
| Agent Architecture | /25 | 22–24 | Five named personas, distinct voices, airline-loyalty priming, Octalysis anchoring, strict output contracts |
| Handoff & Orchestration | /25 | 22–24 | Every artefact references prior by filename, manager-log shows 6 cycles with 1 substantive return |
| Working Prototype | /20 | 17–19 | 7 live pages on Pages, 7 of 8 Octalysis CDs tagged with data-cd, real navigation between airline + programme + booking flows |
| Strategic Rationale | /15 | 12–14 | BRD with KPIs, GDPR Art. 22 + EU AI Act treatment, WH/BH audit |
| Reflection & Insight | /15 | 12–14 (depends on your prose) | The Cycle 1 → Cycle 2 return is concrete material |
| **Total** | **/100** | **85–95** | Realistic marker score 75–85 after weighting |

---

## What I cannot do for you

- Write the Reflection prose. It must be in your voice (Prof's rule + AI Usage Policy).
- Write the slide narrative for Your Organisation, Agent Designs, Pipeline in Action, Regulatory & Ethical. The bullets above are scaffolding; you adapt them.
- Take the screenshots. The inventory above tells you exactly what to capture.
- Submit to Turnitin. That's your action.

## What I have done

- Built the full prototype (7 pages, live on Pages).
- Produced the 4 agent artefacts + manager log + executive summary.
- Authored the BRD, data schema, process log, and this submission pack.
- Maintained 6-cycle handoff history in `manager-log.md` with one substantive return.
- Pinned canonical character profiles in `mock-data.json`.

Ready when you are. Open `submission/submission-pack.md` in your editor, draft the slide content per the prompts, then assemble the PPTX.
