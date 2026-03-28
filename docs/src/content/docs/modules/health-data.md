---
title: Health Data Integration
description: Connect wearable data, get morning health briefings, and track experiments.
---

## What

The Health Data module connects your wearable devices and health data sources to your Personal OS. Once activated, a dedicated health analyst agent pulls data from connected sources — Oura Ring, Apple Health, Garmin, and others — and delivers structured morning briefings, tracks active experiments, and synthesizes weekly health summaries. The module adds a `/health` command that surfaces your current readiness, sleep quality, HRV trends, and any active experiments, all without leaving your work session.

## Why

Health data is only useful when it informs decisions. Most people glance at their wearable app in the morning, note a score, and move on. The Health Data module turns passive monitoring into active guidance: if your readiness is low, your agent adjusts the day's expectations and suggests lower-intensity cognitive work. If an experiment you're running (cold exposure, protein timing, sleep restriction) is showing a signal, the agent surfaces it before you plan your week. The domain benefits from agent support because the data is continuous, the patterns are non-obvious, and the connection to your daily decisions is rarely made explicit.

## What Gets Added

| Item | Path | Purpose |
|------|------|---------|
| Health area folder | `02-areas/health-data/` | Container for all health tracking files |
| Integration status | `02-areas/health-data/integration-status.md` | Tracks which data sources are connected |
| Experiment log | `02-areas/health-data/experiments.md` | Active and completed health experiments |
| Agent definition | `02-areas/health-data/agent.md` | Health analyst agent configuration |
| Wellness framework | `03-resources/playbooks/wellness-data-framework.md` | How to interpret and act on health data |

**Agent:** health-analyst — queries connected data sources, generates briefings, tracks experiments, and synthesizes trends.

**Command:** `/health` — runs a morning health briefing covering sleep, readiness, HRV, and any active experiments.

## Integration Points

The health module plugs into your daily loop in two places. First, during `/reflection`, the health analyst automatically runs a morning briefing before you set your Top 3 objectives — low readiness scores become inputs to your planning, not afterthoughts. Second, during weekly review, the agent produces a health synthesis covering the week's trends, any notable patterns, and experiment progress. Both touchpoints are additive: you can skip or skim the health section on days when it's not relevant.

The module also connects to your calendar awareness. If the agent detects a recovery deficit heading into a demanding week, it can suggest protecting certain time blocks or flagging that the planned cognitive load may be too high.

## Example Session

```
You: /health

Agent: Morning briefing — 2026-03-27

Sleep: 7h 12m | 84 score | REM 22%, Deep 18%
HRV: 58ms (7-day avg: 54ms) — trending up
Readiness: 82 — solid recovery

Active experiment: Time-restricted eating (16:8), Day 11
Last 7 days: HRV avg up 4ms vs. baseline week. Too early for signal, but direction is good.

No flags. You're well-recovered for a demanding day. Recommend scheduling your hardest cognitive work in the first 3 hours.
```