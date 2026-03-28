# Health Data Integration Status

> Living inventory of all health data sources. Update as you connect new devices.

## Connected Sources

| Source | Data Types | Connection Method | Status |
|--------|-----------|-------------------|--------|
| [e.g., Oura Ring] | Sleep, HRV, Readiness | [MCP / API / Manual export] | Connected |
| [e.g., Apple Health] | Activity, Workouts | [XML export] | Connected |

## Pending Sources

| Source | Data Types | Notes |
|--------|-----------|-------|
| | | |

## Connection Guide

### Easiest to Connect
1. **Oura Ring** — Native MCP server available. Provides sleep, readiness, HRV, resilience.
2. **Apple Health** — Export XML from Health app → import into your system.

### Intermediate
3. **Garmin / Polar / Suunto** — Via Open Wearables platform (self-hosted).
4. **Whoop** — API access available.

### Advanced
5. **CGM (Levels/Dexcom)** — API unstable, may require manual export.
6. **Blood panels (Function Health, etc.)** — PDF/manual entry, quarterly.
7. **Eight Sleep** — Limited API, check current status.

## Data Flow

```
Wearable Devices → APIs / MCP Servers → Health Analyst Agent → Daily Briefing
                                                              → Weekly Synthesis
                                                              → Experiment Tracking
```
