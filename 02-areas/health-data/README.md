# Health Data Integration

> Connect your wearable and health data for daily briefings, pattern detection, and experiment tracking.

**Status:** Not activated

To activate this module, run `/onboard` and select "Health Data Integration", or follow the manual setup guide in the docs.

---

## What Gets Set Up

- Integration tracker mapping your connected data sources (Oura, Apple Health, Garmin, CGM, Withings, Eight Sleep, etc.)
- Wellness framework defining your health pillars and target ranges
- Health Analyst agent (Cipher) with access to your data streams
- `/health` command for on-demand health briefings
- Morning health briefing baked into `/reflect` — sleep quality, HRV, readiness before you commit to the day
- Weekly health synthesis baked into `/review` — trends, experiment results, what to adjust

---

## What Your Agent Does For You

**Morning briefing before you plan your day:**
> "Last night: 7h 12m sleep, HRV 58 (your 30-day avg is 61). Readiness score 74. You're slightly under-recovered — I'd suggest protecting your afternoon and avoiding high-intensity today. Your 8pm sleep target was hit 5 of the last 7 nights."

**Pattern detection across weeks:**
> "Your HRV has trended down 15% over the past two weeks. This correlates with the stretch of back-to-back evening calls you've been running. Worth noting — your best HRV weeks historically align with no screens after 9pm."

**Experiment tracking with built-in accountability:**
> "You're on Day 9 of your cold exposure experiment. Data so far: average morning HRV on experiment days is 64 vs. 59 on non-experiment days. Statistically thin sample yet, but directionally positive. Keep going?"

**Weekly health synthesis:**
> "This week: sleep consistency was your strongest week in a month (6/7 nights in your target window). Zone 2 cardio: 2 sessions vs. your 3-session goal. Stress load (HRV variability) was elevated Tuesday–Thursday — matches your calendar. One flag: resting heart rate crept up Friday and Saturday."

---

## Source Materials

The Health Analyst agent draws principles from:

- *Outlive* — Peter Attia (longevity medicine framework, Zone 2, VO2 max, strength)
- *Why We Sleep* — Matthew Walker (sleep architecture, HRV, circadian optimization)
- *Core Performance* — Mark Verstegen (movement quality, recovery, performance pillars)
- *The Circadian Code* — Satchin Panda (time-restricted eating, light exposure, sleep timing)
- *Good Energy* — Casey Means (metabolic health, CGM interpretation, mitochondrial function)
- *Blue Zones* — Dan Buettner (lifestyle factors, longevity patterns, community and purpose)
- *Breath* — James Nestor (breathwork, nasal breathing, CO2 tolerance, HRV)
- *Altered Traits* — Daniel Goleman & Richard Davidson (meditation, neuroscience, stress response)
- *Dopamine Nation* — Anna Lembke (reward systems, dopamine balance, stimulus management)
- *The Body Keeps the Score* — Bessel van der Kolk (trauma, nervous system regulation, somatic awareness)
- *Mindset* — Carol Dweck (growth orientation, adaptation, learning from setbacks)
- *Man's Search for Meaning* — Viktor Frankl (purpose, resilience, meaning as a health variable)
- *Ikigai* — Héctor García & Francesc Miralles (purpose, engagement, longevity lifestyle)
- *The Four Agreements* — Don Miguel Ruiz (mental hygiene, cognitive patterns, inner dialogue)
- *The Hunger Code* — (appetite, satiety signals, eating behavior)
