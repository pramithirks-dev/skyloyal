# Design Specification: SkyLoyal Loyalty Rescue

**Author:** Leo Marín, Lead Experience Designer, SkyLoyal Airways
**Date:** 2026-04-29
**Status:** Cycle 2 (revised after Manager return on segment merge, CD8 tagging, and measurement framework)
**Source brief:** `outputs/01-research-brief.md`
**Manager return reference:** `outputs/manager-log.md` (Cycle 1 Designer entry)

---

## 1. Design Principles

Six principles that govern every screen and every touchpoint in this spec.

- **Transparency over urgency.** A flyer who understands why we are reaching out is a flyer who stays. Every contact opens with the reason.
- **Acknowledge first, offer second.** Especially for the Complaint-Scarred segment, never lead with a value pitch when there is unresolved trust.
- **Progress visible at every surface.** The flyer should never have to ask where they stand on tier, miles, benefits.
- **Optionality in every touchpoint.** Every email, push, and dashboard alert offers an opt-out or a cadence-adjust in the same surface.
- **White-Hat is the default; Black-Hat earns its place.** CD6 Scarcity, CD7 Curiosity, and CD8 Loss are powerful and corrosive. Use sparingly, audit explicitly.
- **CSM is the safety net.** No automated decision lands on a flyer without a human review point, per `01-research-brief.md` §5 (GDPR Art. 22).

## 2. User Archetypes

**Cycle 2 revision note.** The Manager's return correctly challenged a Cycle 1 collapse of Status-Slippers and Miles-Hoarders into a single archetype. I re-ran the intersection: of the 18 Status-Slippers, 9 also hold expiring miles, the other 9 do not; of the 23 Miles-Hoarders, 14 are not at imminent tier-downgrade risk. The overlap is partial, not total. CLV per save also differs (Gold tier-retention is worth ~3x a single miles-redemption nudge). I am therefore keeping them as **two distinct archetypes** with two distinct journeys (Nuala and Marcus below), plus Theo for Drifters and Rashida for Complaint-Scarred. Four archetypes, four journeys.

**Nuala, the Slipping Gold (Status-Slippers).** 47, marketing director in Dublin, flies twice a year to Boston for a North-American account. Six segments year-to-date, needs three more by 31 December to retain Gold. Frustration: tier feels like a treadmill. Hoped-for moment: feeling that her loyalty is recognised, not exploited. Trip pattern: 2 long-haul, 4 short-haul Dublin-London a year. Primary risk lever: tier-downgrade exposure.

**Marcus, the Dormant Hoarder (Miles-Hoarders).** 61, retired engineer in Amsterdam. 138,000 miles in the bank, 12,400 expiring in 88 days. Last flew SkyLoyal 14 months ago. Frustration: programme feels frozen, miles feel like a lapsed gym membership. Hoped-for moment: a tangible use for the miles he forgot he had. Trip pattern: 1-2 leisure trips a year, mostly Mediterranean. Primary risk lever: dormant-value redemption.

**Theo, the Drifter (Alliance-Drifters).** 38, consultant based in Madrid, flies SkyLoyal Madrid-Frankfurt monthly but takes Lufthansa to anywhere else in Germany because schedules are tighter. 14 SkyLoyal segments and 11 partner segments in 12 months. Frustration: SkyLoyal feels less convenient than its alliance. Hoped-for moment: a reason to choose metal over partner. Trip pattern: heavy intra-European business.

**Rashida, the Wronged Loyalist (Complaint-Scarred).** 53, academic from Edinburgh, flew SkyLoyal Edinburgh-Madrid for a conference, baggage delayed 4 days, NPS rated -50. Has flown twice since but reluctantly. Frustration: feels invisible to the airline. Hoped-for moment: someone at SkyLoyal saying "we know what happened, here is what we did about it". Trip pattern: 2-3 conference trips a year, family visits to Lagos via Lisbon.

## 3. Intervention Journeys

One sub-section per archetype. Each table column carries the Octalysis Core Drive in the format `CD<n>`, a White-Hat (W) / Black-Hat (B) tag, and a **success metric** (Cycle 2 addition per Manager return).

### 3.1 Nuala's journey: "Gold Retention Story"

Nuala needs three more segments and her miles need not expire. Six touchpoints over 76 days, anchored on Ownership (CD4) and Development (CD2), with a single explicit Loss-Avoidance moment (CD8) framed as opportunity, not threat.

| # | Day | Channel | Message essence | CD(s) | W/B | Success metric |
|---|---|---|---|---|---|---|
| 1 | 0 | Email | "Your year so far in numbers": personalised stats, miles earned, distance flown, hubs visited | CD4, CD2 | W | Open rate ≥ 38% |
| 2 | 14 | App push | "3 segments to retain Gold": tier-progress ring, 3 suggested routes that fit her travel pattern | CD2 | W | Click-through ≥ 22% |
| 3 | 30 | Email | "7,800 miles expire in 46 days": frame as redemption opportunities, not as loss | CD4, CD8 | W (CD8 framed as opportunity) | Redemption-search start ≥ 18% |
| 4 | 45 | Concierge call (CSM) | Personal call, offers a tier-anniversary gesture | CD3, CD7 | W | Call-accepted ≥ 60% |
| 5 | 60 | Email | Tier-retention preview: "you are 1 segment from re-qualification", with bookable options | CD2, CD8 | W | Booking conversion ≥ 9% |
| 6 | 76 | Email | Outcome: tier retained, OR consolation if not, with explicit pathway to soft-landing | CD3, CD1 | W | NPS delta vs control ≥ +5 |

### 3.2 Marcus's journey: "Wake the Miles"

Marcus's miles are dormant. The intervention is redemption-led, not flight-led. Four touchpoints over 60 days. Primary CD lever: CD4 Ownership ("your miles, your story"). CD8 appears once, framed as opportunity not threat.

| # | Day | Channel | Message essence | CD(s) | W/B | Success metric |
|---|---|---|---|---|---|---|
| 1 | 0 | Email | "138,000 miles in your account: 6 trip ideas you can fly tomorrow" | CD4 | W | Open rate ≥ 35% |
| 2 | 14 | Email | "Travel with someone for free": companion-fare partner-pool offer | CD3, CD5 | W | Click-through ≥ 18% |
| 3 | 35 | App push | "12,400 miles expire in 53 days": framed as "use them on a long-weekend", not "you'll lose them" | CD4, CD8 | W (CD8 framed as opportunity) | Redemption-search start ≥ 22% |
| 4 | 60 | Email | Outcome: redemption made OR personalised "what would unlock you" survey | CD3 | W | Redemption rate ≥ 15% |

### 3.3 Theo's journey: "Reasons to Choose Metal"

Theo is not unhappy, he is optimising. Loss-framing will fail, Epic Meaning (CD1) and Social Influence (CD5) will work. Four touchpoints over 60 days.

| # | Day | Channel | Message essence | CD(s) | W/B | Success metric |
|---|---|---|---|---|---|---|
| 1 | 0 | Email | "Where SkyLoyal beats partners on your routes": real route-by-route comparison | CD1, CD3 | W | Open rate ≥ 32% |
| 2 | 15 | App push | Sustainable Aviation Fuel update: contribution attribution | CD1 | W | Click-through ≥ 12% |
| 3 | 30 | Email | Alliance-pool benefits currently unused (companion fare for partner family member) | CD3, CD5 | W | Click-through ≥ 16% |
| 4 | 60 | Email | Quarterly route update + opt-in alerts | CD3, CD7 | W | Booking on metal ≥ +10pp share-of-wallet vs control |

### 3.4 Rashida's journey: "Acknowledgement First"

Rashida's first contact must not be a value pitch. Five touchpoints over 90 days, opening with explicit acknowledgement.

| # | Day | Channel | Message essence | CD(s) | W/B | Success metric |
|---|---|---|---|---|---|---|
| 1 | 0 | Email | "We know your bag was 4 days late in Madrid. Here is what we did about it": 80-word factual account, no apology theatre | CD3 | W | Open rate ≥ 55% |
| 2 | 7 | Email | Choice gesture: 5,000 bonus miles, a lounge voucher, OR a £40 charity donation in her name | CD3, CD4 | W | Choice-made ≥ 70% |
| 3 | 30 | Email | Year-in-review: her flying year, with "one thing we got right and one we got wrong" | CD4, CD1 | W | Open rate ≥ 48% |
| 4 | 60 | App push | Surprise complimentary upgrade on next Edinburgh-Madrid booking | CD7 | B (bounded, real benefit only) | Upgrade-redeemed ≥ 30% |
| 5 | 90 | Survey | Optional NPS resurvey, transparent about prior score | CD3 | W | NPS delta ≥ +20 |

## 4. CSM Dashboard: IA & Wireframe

The Customer Success Manager logs in to one screen that summarises all at-risk flyers in their book. Density over decoration.

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SkyLoyal · Loyalty Rescue · CSM Dashboard               [Profile] [Out] │
├──────────────────────────────────────────────────────────────────────────┤
│  Filters: [Tier ▾] [Risk ▾] [Segment ▾] [Hub ▾]      Search: [_______]  │
├──────────────────────────────────────────────────────────────────────────┤
│  At-risk flyers (105)                                Sort: Risk score ▾  │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ ▼ SKY000234  Nuala D.   Gold   DUB   ●●●○○ 78    Status-Slip + Hoard│ │
│ │   SKY000189  Theo V.    Silver MAD   ●●●○○ 71    Alliance-Drifter   │ │
│ │   SKY000412  Rashida H. Gold   EDI   ●●●●○ 84    Complaint-Scarred  │ │
│ │   ...                                                                │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────┤
│  Selected: Nuala D.  (SKY000234)                                         │
│ ┌─ Risk reasons ─────────────────────┐ ┌─ Suggested next-best action ─┐ │
│ │ • flights_last_3m = 0  (-)         │ │ ① Send Touch 1 (year-recap)  │ │
│ │ • miles_expiring_90d = 7,800       │ │   CD4 + CD2 · est. 18% lift  │ │
│ │ • tier-anniversary in 76 days      │ │ ② Concierge call (Day 45)    │ │
│ │ • alliance_partner_flights = 3     │ │   CD3 + CD7 · high-touch     │ │
│ └────────────────────────────────────┘ └──────────────────────────────┘ │
│                                                                          │
│  [Approve & send] [Modify] [Defer 14 days] [Mark not-at-risk]            │
└──────────────────────────────────────────────────────────────────────────┘
```

What the CSM sees, in order of importance. Risk score, with composition expanded so the CSM can defend it to the flyer if asked (Article 22 requirement). Suggested next-best action with the Octalysis CD tag, a predicted lift, and a one-click approve. Override controls: Modify (edit copy), Defer, Mark-not-at-risk (with reason captured for model improvement).

## 5. Flyer-Facing Gamified View: IA & Wireframe

The flyer-facing page is what Nuala sees when she logs into her SkyLoyal account and clicks "My Loyalty". Six of the eight Core Drives are visible on a single page.

```
┌──────────────────────────────────────────────────────────────────────┐
│  SkyLoyal · My Loyalty                         Hello, Nuala. [Out]  │
├──────────────────────────────────────────────────────────────────────┤
│   ╔═══════════════════════╗     [CD1: Epic Meaning]                  │
│   ║   GOLD                ║     "Your flying contributed 1.2t of     │
│   ║                       ║      Sustainable Aviation Fuel this Q."  │
│   ║   ●●●●●●○○○ 6/9 segs  ║     [CD2: Development & Accomplishment]  │
│   ║   3 to Platinum       ║                                          │
│   ╚═══════════════════════╝                                          │
│                                                                      │
│ ┌─ Miles ─────────────┐  ┌─ Expiring ─────────┐  ┌─ Recognition ───┐│
│ │  92,400             │  │  7,800 in 76 days   │  │  47 hubs visited ││
│ │  My miles, my       │  │  → Use them: see    │  │  Top 12% of DUB  ││
│ │  history            │  │  3 ideas            │  │  flyers like you ││
│ │  [CD4: Ownership]   │  │  [CD8: Loss, white- │  │  [CD5: Social]   ││
│ │                     │  │   hat framed]       │  │                  ││
│ └─────────────────────┘  └────────────────────┘  └──────────────────┘│
│                                                                      │
│ ┌─ This month's surprise ─────────────────────────────────────────┐  │
│ │  🎁 A complimentary lounge pass on your next Dublin departure.  │  │
│ │  No expiry. No conditions. [CD7: Unpredictability]              │  │
│ └─────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│ ┌─ Your style ────────────────────────────────────────────────────┐  │
│ │  Pick your trip mode:                                            │  │
│ │  [ ◉ business-quick ]  [ ○ family-slow ]  [ ○ off-piste ]        │  │
│ │  [CD3: Empowerment & Feedback]                                   │  │
│ └─────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  Why am I seeing this? [info]   ·   Adjust contact frequency [link]  │
└──────────────────────────────────────────────────────────────────────┘
```

**Cycle 2 revision: explicit CD tagging.** The Maker contract requires `data-cd="CD<n>"` on every CD-bearing element. To remove the Cycle 1 ambiguity, every element below is tagged with its **primary** CD. A secondary CD may also be tagged via `data-cd-secondary="CDx"`. The expiring-miles tile is **primary CD8**, white-hat-framed (the framing is a copy choice, not a CD reassignment).

Seven Core Drives visible on the flyer view, exceeding the ≥6 minimum:

| Element | Primary `data-cd` | Secondary | Drive |
|---|---|---|---|
| Tier ring "GOLD: 6/9 segs" | CD2 | - | Development |
| SAF contribution panel | CD1 | - | Epic Meaning |
| Trip-mode picker | CD3 | - | Empowerment |
| Miles balance "92,400" | CD4 | - | Ownership |
| Peer recognition "Top 12%" | CD5 | - | Social Influence |
| Surprise lounge gift | CD7 | - | Unpredictability |
| Expiring miles "7,800 in 76 days" | CD8 | CD4 | Loss Avoidance, white-hat-framed |

The dashboard footer carries the transparency disclosure and cadence-adjust link, addressing the Article 22 explanation right and the consent-revocation right in one surface.

## 6. White-Hat / Black-Hat Audit

Across the four journeys (Cycle 2): 19 touchpoints total. CD distribution:

| CD | Drive | Touchpoints using it | W/B classification | Notes |
|---|---|---|---|---|
| CD1 | Epic Meaning | 3 | W | Sustainable aviation, identity |
| CD2 | Development | 4 | W | Tier rings, retention progress |
| CD3 | Empowerment | 9 | W | Choice gestures, trip-mode picker, opt-in alerts |
| CD4 | Ownership | 7 | W | Miles balance, year-in-review, redemption ideas |
| CD5 | Social | 3 | W | Peer cohort, alliance-pool, companion fare |
| CD6 | Scarcity | 0 | - | Deliberately not used in pilot |
| CD7 | Unpredictability | 3 | B (bounded) | Surprise upgrades, lounge gifts. Always a real benefit. |
| CD8 | Loss Avoidance | 3 | B (all white-hat-framed) | Miles expiry, framed as opportunity, never threat |

White-Hat to Black-Hat ratio: 26 to 6 (81% to 19%). Within the >70% White-Hat target set in BRD §9.3, with margin to spare. CD6 Scarcity is deliberately omitted from the pilot, no countdown timers, no fake seat counts, no "only 3 left at this fare" pressure. CD7 is bounded, every surprise must be a real benefit the airline will deliver, no bait-and-switch. CD8 appears three times across the four journeys and is reframed as opportunity in every case (the copy says "use them" not "lose them"). Pre-launch, every email and dashboard alert will be reviewed against this audit, and the Communicator's GTM pack must respect it.

## 7. Handoff to Maker

**Priya, three pages, plain HTML, no framework, lives in `docs/`.**

(1) `index.html`: landing page introducing the SkyLoyal Loyalty Rescue programme to a visitor (likely the marker). Hero, the five-agent pipeline diagram, four-archetype card row (Nuala, Marcus, Theo, Rashida), links to dashboard and flyer view, footer with NCI module credit. (2) `dashboard.html`: the CSM view per §4 wireframe, rendered from `docs/mock-data.json` (a 30-row slice of `inputs/mock-loyalty-data.csv`). (3) `flyer-view.html`: Nuala's page per §5 wireframe, with seven Octalysis CDs explicitly tagged via `data-cd="CDx"` attributes per the §5 table (one element per primary CD). Vanilla CSS, vanilla JS, no CDN. Acceptance: site opens by double-clicking `docs/index.html`, dashboard renders ≥10 flyers, flyer view's distinct `data-cd` value count ≥6. Tone: navy + brushed metallic, restrained, not Candy Crush.

---

**Artefact complete (Cycle 2). Handing off to Maker.** Priya Shah now has two wireframes, four intervention journeys (one per distinct archetype), explicit `data-cd` tagging per element, success metrics per touchpoint, and a White-Hat/Black-Hat audit at 81/19. The Maker should produce the `docs/` site per his agent contract.
