# SkyLoyal — A 5-Agent Agentic Organisation

**Module:** H9CEAI — Customer Engagement and Artificial Intelligence
**Institution:** National College of Ireland, MSCAIBUS1
**Author:** Pramithi Raroth Karimpanakkal

## What this is

A working multi-agent organisation that predicts, diagnoses, and intervenes on frequent-flyer loyalty churn for a fictional carrier, **SkyLoyal Airways**. Five AI agents — Researcher, Designer, Maker, Communicator, Manager — collaborate in an unbroken pipeline to produce a live retention programme, from data analysis through to executive rollout plan, all grounded in Yu-kai Chou's **Octalysis** gamification framework.

## The pipeline

```
Researcher → Designer → Maker → Communicator → Manager
```

Each agent's markdown artefact is the next agent's sole input. The Manager runs quality gates between steps and maintains `outputs/manager-log.md` across multiple cycles.

## Live prototype

**GitHub Pages:** https://pramithirks-dev.github.io/skyloyal/

The Pages site renders three artefacts (all under `docs/`):

1. `docs/index.html` — agent organisation overview + pipeline diagram
2. `docs/dashboard.html` — Customer Success Manager view: at-risk flyer list, health scores, Octalysis-driven intervention suggestions
3. `docs/flyer-view.html` — customer-facing gamified retention UI demonstrating 6+ of the 8 Octalysis Core Drives

## Repo layout

```
SkyLoyal/
├── .claude/
│   ├── agents/              # 5 system-prompt definitions
│   └── commands/            # run-pipeline slash command
├── inputs/                  # mock loyalty dataset (500 synthetic flyers)
├── outputs/                 # artefacts 1, 2, 4, 5 + manager-log.md
├── docs/                    # artefact 3 — the prototype site GitHub Pages serves
├── submission/              # final PPTX + screenshots
└── README.md
```

## How to run it

1. Open this folder in Claude Code.
2. Invoke the researcher agent with the mock dataset as context.
3. Feed each agent's output into the next in order.
4. Manager appends to `outputs/manager-log.md` after every handoff.
5. Open `docs/index.html` locally, or visit the GitHub Pages URL above.

See the submission PPTX for full methodology, rubric mapping, and reflection.
