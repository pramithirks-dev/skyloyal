---
description: Run one full cycle of the SkyLoyal agentic pipeline (Researcher → Designer → Maker → Communicator → Manager), with Manager quality gates between every step.
---

# /run-pipeline

Orchestrate one full cycle of the five-agent pipeline for **SkyLoyal**.

## Steps

1. **Invoke the Researcher agent.** Give it access to `inputs/mock-loyalty-data.csv` and instruct it to produce `outputs/01-research-brief.md` strictly to its output contract.
2. **Invoke the Manager agent (quality gate).** Have it read `outputs/01-research-brief.md`, score it against Criterion 2 (Handoff) and Criterion 4 (Strategic Rationale), and append a block to `outputs/manager-log.md`. If the verdict is RETURNED, re-invoke the Researcher with the feedback and increment the cycle counter. Only proceed when APPROVED.
3. **Invoke the Designer agent.** Sole input: `outputs/01-research-brief.md`. Produces `outputs/02-design-spec.md`.
4. **Invoke the Manager (quality gate).** Score against Criterion 1 (Agent Architecture distinctiveness) and Criterion 2 (Handoff). Log, verdict, loop if returned.
5. **Invoke the Maker agent.** Sole input: `outputs/02-design-spec.md`. Produces `docs/` (index.html, dashboard.html, flyer-view.html, mock-data.json, assets/style.css, assets/app.js, README.md) — this folder is what GitHub Pages serves.
6. **Invoke the Manager (quality gate).** Verify the site opens, grep for `data-cd=` attributes across the three HTML files in `docs/` to confirm ≥6 Octalysis Core Drives are represented, check JSON is wired. Score Criterion 3 (Working Prototype). Log, verdict, loop if returned.
7. **Invoke the Communicator agent.** Inputs: `outputs/02-design-spec.md` + `docs/`. Produces `outputs/04-gtm-pack.md`.
8. **Invoke the Manager (quality gate).** Score Criterion 1 (voice distinctiveness) and Criterion 4 (Strategic Rationale). Log, verdict, loop if returned.
9. **Invoke the Manager as final synthesiser.** Reads all four approved artefacts and produces `outputs/05-executive-summary.md` per its output contract, with rubric self-assessment and cycle summary referencing `manager-log.md`.

## Cycle numbering

- First attempt of an agent in this run = Cycle 1 for that agent.
- Any RETURN increments that agent's cycle counter only — other agents' counters do not move.
- Log every cycle, approved or returned. Returns are evidence, not failures.

## Completion criteria

All five artefacts exist, all are APPROVED in the log, and `outputs/05-executive-summary.md` ends with the required pipeline-complete footer. At least one substantive RETURN should appear somewhere in the log — a clean first-pass is suspicious.
