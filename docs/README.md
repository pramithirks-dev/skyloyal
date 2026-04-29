# SkyLoyal docs/, prototype site

**Author:** Priya Shah, Staff Front-end Engineer, SkyJet Airways
**Source spec:** `outputs/02-design-spec.md` (Cycle 2)
**Date:** 2026-04-29

## What's live

Three pages, vanilla HTML/CSS/JS, no build step, no CDN, no framework.

- `index.html`: landing page introducing the agentic organisation, pipeline diagram, the four archetypes, Octalysis at a glance, and how to read the submission. This is the entry point at https://pramithirks-dev.github.io/skyloyal/.
- `dashboard.html`: Customer Success Manager view per `02-design-spec.md` §4. Filterable at-risk table sortable by risk score; click any row to see profile, risk reasons, and a suggested next-best action labelled with Octalysis CDs. Reads `mock-data.json` client-side.
- `flyer-view.html`: Nuala's flyer-facing page per `02-design-spec.md` §5. Seven of the eight Octalysis Core Drives are visible on a single surface, each tagged via `data-cd="CD<n>"` and with a visible CD label. CD8 is white-hat-framed (the expiring-miles tile says "use them" not "lose them"). The transparency footer addresses Article 15 and Article 22 in plain English.

## How to demo

1. Open `index.html` in any modern browser (or visit the live Pages URL).
2. From there, click "Open the CSM dashboard" to see the filterable at-risk list, then click any flyer to see the right-hand panel populate with profile, risk reasons, and the suggested intervention.
3. Click "See the flyer view" to see Nuala's gamified retention page. Inspect any element with browser devtools to see its `data-cd` attribute.

## Octalysis coverage check

Run from the repo root:

```
grep -oE 'data-cd="CD[0-9]+"' docs/*.html | sort -u
```

Expected output: at least six distinct values in the range CD1 to CD8 (CD6 is deliberately absent in the pilot per the Designer's White-Hat audit).

## What screenshots to capture for the PPTX

For the "Pipeline in Action" slide(s):

- `index.html` hero with the pipeline diagram visible.
- `dashboard.html` with a high-risk flyer selected, both the list and the right-hand detail panel visible.
- `flyer-view.html` showing the tier card, the three middle tiles (miles, expiring, recognition), and the surprise gift block, ideally with at least three CD labels visible in one frame.
- `flyer-view.html` zoom-in on the "Why am I seeing this?" transparency block (this is the Regulatory & Ethical evidence).

## Notes for the Communicator

The campaign assets you write must reference these pages by name (`docs/dashboard.html`, `docs/flyer-view.html`) or by the live URL. Every email's lawful-basis disclosure should match the wording of the transparency block on `flyer-view.html` so the flyer experiences a consistent voice across email and self-serve.

---

**Artefact complete. Handing off to Communicator.** Dara Okafor now has a real, browseable retention experience to write the launch pack against. The flyer-view page is the visual North Star for the email tone.
