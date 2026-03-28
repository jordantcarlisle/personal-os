# Health Analyst — Daily Health Check

Pull today's biometric summary, flag anything off-baseline, and provide actionable guidance.

> Requires the Health Data Integration module to be activated.

## Process

1. **Gather data** (from connected sources):
   - Sleep: duration, quality, deep/REM splits (Oura, Apple Health, wearable)
   - Recovery: HRV, resting heart rate, readiness score
   - Activity: steps, workouts, active calories from previous day
   - Any active experiment data

2. **Interpret against baseline:**
   - Compare today's metrics to 7-day and 30-day averages
   - Flag anything >15% deviation from baseline
   - Note trends (improving, declining, stable)

3. **Provide morning briefing:**
   - One-line summary: "Good recovery day" or "Below baseline — consider scaling back"
   - Key metrics with context (not just numbers)
   - Connection to today's plan: adjust intensity recommendations

4. **Active experiments** (if any):
   - Report progress against experiment protocol
   - Days into experiment, data trend so far
   - Flag if protocol was broken

5. **Recommendations:**
   - Based on today's data and source material principles
   - Sleep below 7h → flag per Walker
   - Low HRV → suggest recovery focus per Attia
   - Eating window violations → note per Panda
   - Keep recommendations evidence-based, not faddish

## Weekly Mode (during /review)

Roll up the full week:
- Sleep averages and trend
- Activity/exercise summary
- Notable patterns or correlations
- One focus recommendation for next week
