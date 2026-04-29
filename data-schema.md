# Data Schema

**Project:** SkyLoyal Loyalty Rescue
**Version:** 1.0
**Date:** 2026-04-29

This document defines every dataset used in the SkyLoyal Loyalty Rescue project, the fields each carries, how they relate, and the canonical character records that the BRD, design spec, GTM pack, and prototype site all reference.

---

## 1. Datasets at a glance

| File | Rows | Purpose | Audience |
|---|---|---|---|
| `inputs/mock-loyalty-data.csv` | 500 | Source-of-truth synthetic dataset, used by the Researcher agent for analysis and hypothesis generation | Researcher, Designer (read-only) |
| `docs/mock-data.json` | 31 | Dashboard slice. 30 representative records plus 1 canonical character (Nuala) at top. Loaded client-side by `dashboard.html`. | Maker, CSM dashboard, marker |

The CSV is generated deterministically from a Python script with `seed=42`. The JSON is a curated slice that includes the four canonical characters with profiles matching the design spec.

---

## 2. CSV schema: `inputs/mock-loyalty-data.csv`

500 rows, 12 columns. Each row is one synthetic SkyLoyal member.

| Column | Type | Range / Values | Description |
|---|---|---|---|
| `member_id` | string | `SKY000001`..`SKY000500` | Unique member identifier |
| `tier` | enum | Blue, Silver, Gold, Platinum | Frequent flyer tier |
| `miles_balance` | int | 500..400,262 | Total miles currently in the account |
| `miles_expiring_90d` | int | 0..14,932 | Miles reaching the inactivity window in the next 90 days |
| `flights_last_12m` | int | 0..80 | Segments flown on SkyJet metal in the trailing 12 months |
| `flights_last_3m` | int | 0..30 | Segments flown on SkyJet metal in the trailing 3 months |
| `last_complaint_nps` | int | -100..90 | NPS rating from the most recent contact (no complaint = neutral) |
| `last_complaint_type` | enum | none, delay, baggage, downgrade, service, cancellation | Reason category for last logged complaint |
| `alliance_partner_flights` | int | 0..27 | Segments flown on alliance partner carriers in trailing 12 months |
| `tenure_years` | int | 1..22 | Years since enrolment |
| `home_hub` | enum | DUB, LHR, AMS, JFK, BOS, MAD, CDG, FRA, LIS, EDI | Primary departure airport (3-letter IATA) |
| `churn_risk_label` | enum | low, medium, high | Heuristic risk classification (~49 / 30 / 21 split) |

### CSV distributions (verified)

| Tier | Count | Share |
|---|---|---|
| Blue | 261 | 52.2% |
| Silver | 140 | 28.0% |
| Gold | 76 | 15.2% |
| Platinum | 23 | 4.6% |

| Risk label | Count | Share |
|---|---|---|
| Low | 245 | 49.0% |
| Medium | 150 | 30.0% |
| High | 105 | 21.0% |

### CSV headline statistics (cited in the research brief)

These numbers are referenced in `outputs/01-research-brief.md` and the live BRD. They are recomputable from the CSV at any time and verified consistent.

| Statistic | Value | Filter |
|---|---|---|
| Silent quiet rate | **41.2%** (206/500) | `flights_last_12m > 0 AND flights_last_3m == 0` |
| Members with miles expiring | **26.2%** (131/500) | `miles_expiring_90d > 0` |
| Alliance leakage rate | **7.2%** (36/500) | `alliance_partner_flights / flights_last_12m > 0.4` |
| High-risk total | **105** members | `churn_risk_label == 'high'` |
| Total miles expiring next 90d | **831,848** miles | sum of `miles_expiring_90d` |
| Gold-quiet count | **12 of 76** (15.8%) | `tier == 'Gold' AND flights_last_3m == 0 AND flights_last_12m > 0` |

---

## 3. JSON schema: `docs/mock-data.json`

31 records. Every CSV column is preserved, plus three derived fields used by the dashboard: `name`, `archetypes`, `risk_score`. Loaded client-side by `docs/assets/app.js`.

| Field | Type | Source | Description |
|---|---|---|---|
| `member_id` | string | CSV passthrough | Unique member identifier |
| `name` | string | Derived | Display name. Drawn from a curated pool, except for the four canonical characters (Nuala, Marcus, Theo, Rashida) whose names are fixed |
| `tier` | enum | CSV passthrough | Blue / Silver / Gold / Platinum |
| `home_hub` | string | CSV passthrough | 3-letter IATA hub code |
| `miles_balance` | int | CSV passthrough | |
| `miles_expiring_90d` | int | CSV passthrough | |
| `flights_last_12m` | int | CSV passthrough | |
| `flights_last_3m` | int | CSV passthrough | |
| `last_complaint_nps` | int | CSV passthrough | |
| `last_complaint_type` | enum | CSV passthrough | |
| `alliance_partner_flights` | int | CSV passthrough | |
| `tenure_years` | int | CSV passthrough | |
| `archetypes` | array of enum | Derived | One or more of: Status-Slipper, Miles-Hoarder, Alliance-Drifter, Complaint-Scarred, No-flag |
| `risk_label` | enum | CSV passthrough | low / medium / high |
| `risk_score` | int 0..5 | Derived | Composite risk score driving the dashboard sort order. Calculation rule below. |

### Derivation rules

**`archetypes`** is computed from CSV fields per the design spec §3.

| Archetype | Filter |
|---|---|
| Status-Slipper | `tier ∈ {Gold, Platinum} AND flights_last_3m == 0 AND flights_last_12m > 0` |
| Miles-Hoarder | `miles_balance > 80,000 AND miles_expiring_90d > 5,000` |
| Alliance-Drifter | `flights_last_12m > 0 AND alliance_partner_flights / flights_last_12m > 0.4` |
| Complaint-Scarred | `last_complaint_type != 'none' AND last_complaint_nps <= 0` |
| No-flag | none of the above match |

A member can carry multiple archetypes (e.g. Nuala is both Status-Slipper and Miles-Hoarder).

**`risk_score`** is a 0..5 composite, capped at 5:

```
risk_score =
  3 if 'Status-Slipper' in archetypes else 0
+ 2 if 'Miles-Hoarder' in archetypes else 0
+ 2 if 'Alliance-Drifter' in archetypes else 0
+ 3 if 'Complaint-Scarred' in archetypes else 0
+ 1 if miles_expiring_90d > 0 else 0
risk_score = min(risk_score, 5)
```

The dashboard sorts descending by `risk_score`, so the highest-risk members appear at the top of the queue.

---

## 4. Canonical characters

The BRD, design spec, GTM pack, executive summary, and the live prototype all reference four named characters. Their JSON records are fixed and authoritative. Any future regeneration of `mock-data.json` must preserve these exact profiles.

| Field | Nuala D. | Marcus V. | Theo R. | Rashida H. |
|---|---|---|---|---|
| `member_id` | SKY000234 | SKY000118 | SKY000307 | SKY000412 |
| `tier` | Gold | Silver | Silver | Gold |
| `home_hub` | DUB | AMS | MAD | EDI |
| `miles_balance` | 92,400 | 138,000 | 54,200 | 74,300 |
| `miles_expiring_90d` | 7,800 | 12,400 | 0 | 0 |
| `flights_last_12m` | 6 | 0 | 14 | 3 |
| `flights_last_3m` | 0 | 0 | 3 | 1 |
| `last_complaint_nps` | 50 | 40 | 30 | -50 |
| `last_complaint_type` | none | none | none | baggage |
| `alliance_partner_flights` | 3 | 0 | 11 | 0 |
| `tenure_years` | 11 | 17 | 7 | 9 |
| `archetypes` | Status-Slipper, Miles-Hoarder | Miles-Hoarder | Alliance-Drifter | Complaint-Scarred |
| `risk_label` | high | high | medium | high |
| `risk_score` | 5 | 4 | 3 | 4 |

### Character narratives (from `outputs/02-design-spec.md` §2)

- **Nuala D.** 47, marketing director in Dublin, flies twice a year to Boston for a North-American account. Six segments year-to-date, needs three more by 31 December to retain Gold. Trip pattern: 2 long-haul, 4 short-haul Dublin-London a year. Primary risk lever: tier-downgrade exposure.
- **Marcus V.** 61, retired engineer in Amsterdam. 138,000 dormant miles, 12,400 expiring in 88 days. Last flew SkyJet 14 months ago. Trip pattern: 1-2 leisure trips a year, mostly Mediterranean. Primary risk lever: dormant-value redemption.
- **Theo R.** 38, consultant based in Madrid. 14 SkyJet segments and 11 partner segments in 12 months. Trip pattern: heavy intra-European business. Primary risk lever: share-of-wallet leakage.
- **Rashida H.** 53, academic from Edinburgh. Flew SkyJet Edinburgh-Madrid for a conference, baggage delayed 4 days, NPS rated -50. Has flown twice since but reluctantly. Trip pattern: 2-3 conference trips a year. Primary risk lever: trust deficit after IROP.

---

## 5. Hard-coded HTML values

The flyer-facing page `docs/flyer-view.html` is built around **Nuala D.** and uses static HTML for the personalised UI. These values are intentionally fixed and must match her JSON record (verified consistent).

| HTML element | Value | Maps to |
|---|---|---|
| Tier badge | GOLD | `tier` |
| Tier ring | 6 of 9 segments | `flights_last_12m` (= 6, 9 needed for retention) |
| Miles balance tile | 92,400 | `miles_balance` |
| Miles expiring tile | 7,800 in 76 days | `miles_expiring_90d` (76 days is the narrative detail) |
| Recognition tile | Top 12% of Dublin flyers | `home_hub == 'DUB'` derived stat |
| Year-to-date narrative | 47 hubs visited, 184,000 km flown | Decorative narrative figures |

The homepage `docs/index.html` lookup card uses placeholders `SKY000234` (Nuala's ID) and `Doyle` (her surname implied by `Nuala D.`) so the "My status" tab pre-fills with a real, findable record.

---

## 6. Programme-scale numbers (homepage marketing copy)

The homepage stats strip displays programme-scale figures rather than per-flyer data. These are not derived from the CSV; they are airline-marketing values consistent with a mid-size European network carrier.

| Figure | Used on | Source |
|---|---|---|
| 9.4M members | `index.html` stats strip, CTA strip | Programme scale, plausible for a mid-size carrier |
| 78 destinations | `index.html` stats strip | Network scale |
| 12 months miles validity | `index.html` stats strip | Programme rule |
| 5x maximum miles earn (Gold/Platinum) | `index.html` stats strip | Programme rule |

Pilot-cohort numbers (4,200 Gold flyers, €520k pilot budget, +3pp retention target) live in `outputs/05-executive-summary.md` and `BRD.md` and are commercial-case figures, not displayed on the customer-facing site.

---

## 7. Data lineage

```
500-row synthetic CSV (deterministic, seed=42)
        │
        ├─→ Researcher agent reads it, cites headline stats in
        │    outputs/01-research-brief.md (§1, §2, §3, §4)
        │
        └─→ Curation script slices 30 records by risk band, adds
            derived fields (name, archetypes, risk_score), inserts
            4 canonical characters at top → docs/mock-data.json
                    │
                    └─→ docs/dashboard.html fetches it, renders
                        the at-risk queue. Click a row, see the
                        profile, risk reasons, suggested
                        intervention with Octalysis CD tags.

The flyer view (docs/flyer-view.html) does NOT read the JSON, it
hard-codes Nuala's profile because the page is a personalised
account view that always represents one member, the canonical Nuala.
```

---

## 8. Update protocol

If the CSV is ever regenerated:

1. Re-run the seed-42 generator to ensure determinism.
2. Re-curate the JSON slice and **explicitly preserve** the four canonical character records (Nuala, Marcus, Theo, Rashida) with the profiles in §4 above.
3. Re-verify the headline statistics in §2 against `outputs/01-research-brief.md` (§1).
4. Update `docs/flyer-view.html` only if Nuala's canonical profile changes.

The four canonical character profiles are the contract between agent narratives and prototype data. They are intentionally pinned, not regenerated.
