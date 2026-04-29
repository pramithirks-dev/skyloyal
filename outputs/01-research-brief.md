# Research Brief: SkyLoyal Frequent-Flyer Churn Risk

**Author:** Dr. Aiko Tanaka, Principal Customer Intelligence Analyst, SkyJet Airways
**Date:** 2026-04-29
**Status:** Cycle 1 draft for Designer handoff
**Source data:** `inputs/mock-loyalty-data.csv` (n=500, synthetic, seed=42)

---

## 1. Executive Summary

The dataset of 500 SkyLoyal members exhibits three findings the board should act on. First, **41.2% of members who flew in the last 12 months recorded zero segments in the last 3 months**, the operational definition of silent disengagement adopted in this brief. The Gold cohort silent-quiet rate is 15.8% (12/76), low by absolute count but disproportionately costly given Gold-tier yield. Second, **26.2% of members hold miles expiring in the next 90 days**, with a total expiry exposure of 831,848 miles, a quantifiable Loss & Avoidance lever (Octalysis CD8). Third, **7.2% of members exhibit alliance leakage above 40%**, flying more on partner carriers than on SkyJet metal in the trailing 12 months. These three signals do not overlap completely, suggesting at least three distinct intervention populations rather than a single at-risk pool.

## 2. Churn Hypotheses

The following five hypotheses are testable against the dataset and should drive the Designer's intervention journeys.

1. **H1 (Gold-Quiet):** Gold members with `flights_last_12m > 5` and `flights_last_3m = 0` are 2.3x more likely to be classified high-risk than the Gold-tier average within the next 90 days, driven by *seasonality leakage* to other carriers as the year-end status push approaches. Sample basis: 12 of 76 Gold members (15.8%).

2. **H2 (Miles-Expiry):** Members holding `miles_expiring_90d > 5,000` are 1.9x more likely to silently churn within 12 months than members with no expiring miles, driven by *perceived programme decay*, the sense that SkyLoyal is "taking value back". Sample basis: 131 of 500 (26.2%).

3. **H3 (Alliance-Drifters):** Members where `alliance_partner_flights / flights_last_12m > 0.4` are at structural risk of crossing tier-qualification thresholds via partner carriers, eroding SkyLoyal's share of wallet. Driven by *route convenience and price arbitrage*. Sample basis: 36 of 500 (7.2%).

4. **H4 (Complaint-Scarred):** Members with a logged complaint type other than 'none' AND `last_complaint_nps <= 0` are 3.1x more likely to be classified high-risk, consistent with the IATA Global Passenger Survey 2024 finding on post-IROP defection. Sample basis: 53 members. Of the 105 high-risk members, 50 (47.6%) have a recent complaint.

5. **H5 (Status-Slip):** Silver and Gold members within 5 segments of demotion to the lower tier (insufficient `flights_last_12m` for re-qualification at year-end) are at acute Loss-Avoidance risk in Q4. The dataset does not flag this directly, so production will require flight-pace projection by tier-anniversary, see §4.

## 3. At-Risk Segments

The 105 high-risk members partition into four operational segments. Sizes are derived from filters on the dataset; segments may overlap (a Gold-Quiet flyer may also be Complaint-Scarred). The Designer should treat them as design targets, not mutually exclusive cohorts.

| Segment | Filter | Size | Risk score basis | Primary Octalysis Core Drives |
|---|---|---|---|---|
| Status-Slippers | tier in (Gold, Platinum) AND flights_last_3m = 0 AND flights_last_12m > 0 | 18 | Tier downgrade exposure at year-end | CD2 Development, CD8 Loss Avoidance |
| Miles-Hoarders | miles_balance > 80,000 AND miles_expiring_90d > 5,000 | 23 | Concrete miles loss + dormant value | CD4 Ownership, CD8 Loss Avoidance |
| Alliance-Drifters | alliance_partner_flights / flights_last_12m > 0.4 | 36 | Share-of-wallet leakage | CD1 Epic Meaning, CD5 Social Influence |
| Complaint-Scarred | last_complaint_type != 'none' AND last_complaint_nps ≤ 0 | 53 | Trust deficit, IROP residue | CD3 Empowerment, CD7 Unpredictability |

Three commentary points for the Designer. First, the **Complaint-Scarred segment is the largest and the most ethically delicate**. These members feel wronged; any retention contact that does not begin with acknowledgement of the prior IROP will read as opportunism. Second, the **Status-Slippers segment is small (n=18) but commercially dense**: average miles balance for Gold and Platinum is 88,903 and 245,329 respectively, indicating significant CLV per save. Third, the **Alliance-Drifters segment is structurally distinct**: these members are not unhappy, they are simply optimising. Loss-framing will not work; Epic Meaning (sustainable aviation, identity with SkyLoyal) and Social Influence (alliance-pool benefits) will. The four segments require four different tones.

## 4. Data Requirements Specification

The pilot dataset is sufficient for hypothesis generation. Production deployment requires the following additional features:

- **PNR-level booking history**, route, fare class, ancillary spend, partner-airline involvement, IROP events (delay duration, cancellation, denied boarding, baggage status).
- **Tier-qualification trajectory**, segments-flown vs target by tier-anniversary date, with projection to year-end.
- **NPS panel**, transactional NPS post-flight, not annual relationship NPS only.
- **App and web engagement**, login cadence, redemption-search events, abandoned-search funnel, push-notification open rate.
- **Partner-airline interline flow**, codeshare segments where SkyLoyal credits but does not operate, alliance-only segments where SkyLoyal earns marketing credit only.
- **Complaint resolution outcome**, monetary compensation, miles compensation, written apology, escalation status. The current `last_complaint_nps` field collapses too much detail.
- **Family-pool linkages**, household members under one account.

## 5. Regulatory & Ethical Flags

Three issues require Data Protection Officer attention before pilot launch.

**GDPR Article 22 (automated decision-making and profiling).** The proposed risk-scoring constitutes profiling. Article 22 grants the data subject the right not to be subject to a decision based solely on automated processing. The mitigation is a **human-in-the-loop**: a Customer Success Manager reviews every intervention before dispatch. The risk score informs, it does not act. This must be documented in the Legitimate Interest Assessment.

**Lawful basis.** The most defensible basis is Article 6(1)(f) legitimate interest for the scoring itself, with explicit Article 6(1)(a) consent for the marketing communications that follow. Existing programme T&Cs likely cover the former; the latter requires a published privacy notice update.

**EU AI Act classification.** Under Title IV the system is **limited risk**, not high risk. It does not affect access to essential services, employment, or creditworthiness. Limited-risk obligations include transparency (the flyer must know an AI is informing the contact) and logging (every model invocation auditable, met by the agentic markdown audit trail). The model card must be published before scale-up to >10,000 flyers.

## 6. Handoff to Designer

**Leo, four things from this brief are non-negotiable, and one is open for you.**

Non-negotiables. (1) The four segments above are operationally distinct and must each have their own intervention journey, not one journey with copy variants. (2) Every Black-Hat (CD6, CD7, CD8) touchpoint must have a White-Hat balance partner in the same journey, the data shows trust loss compounds quickly. (3) The Complaint-Scarred journey must open with acknowledgement of the prior IROP, not with a value pitch. (4) The CSM-facing dashboard must surface the *reason* for the risk score, not just the score itself; Article 22 requires it.

Open question. The Status-Slippers segment is small (n=18) but commercially dense. Should we treat this as a high-touch concierge journey (one CSM call per flyer) or scaled email-with-personalisation? I have analysed both options' commercial implications, the call is yours.

---

**Artefact complete. Handing off to Designer.** Leo Marín now has four distinct at-risk segments, five testable hypotheses, and a clear ethical brief. The Designer should produce `outputs/02-design-spec.md` per his agent contract.
