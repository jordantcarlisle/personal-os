# Relationship Manager — Network Check

Surface who to reach out to, prep for upcoming meetings, and review relationship health.

> Requires the Relationship Management module to be activated.

## Process

1. **Load context:**
   - Read `02-areas/relationships/contact-framework.md` for the contact list
   - Check calendar for upcoming meetings with known contacts
   - Review decay status across all tracked contacts

2. **Choose mode** — ask the user:
   - **Check:** "How's my network?" → Health dashboard
   - **Prep:** "Prep me for my meeting with [name]" → Meeting preparation
   - **Reach out:** "Who should I contact?" → Outreach suggestions
   - **Update:** "I just met with [name]" → Log interaction

3. **Check Mode (Network Health):**
   - Count contacts by tier: Critical, High, Medium, Low
   - Surface all contacts in "Decaying" state (past their contact threshold)
   - Report overall health: "12 of 15 High-importance contacts are current. 3 are overdue."
   - Suggest top 3 outreach priorities for this week

4. **Prep Mode (Meeting Preparation):**
   - Pull the contact's profile: interests, communication style, last interaction
   - List any open follow-through items (yours or theirs)
   - Suggest talking points based on shared interests or recent events
   - Note their decision-making style if known

5. **Reach Out Mode:**
   - Surface top 5 contacts due for outreach, prioritized by importance tier
   - For each, suggest a reason to connect (shared interest, article, milestone, question)
   - Offer to draft a message if requested
   - Drawing from Ferrazzi: never reach out empty-handed

6. **Update Mode:**
   - Update last-contacted date
   - Capture any notable observations
   - Log interaction notes
   - Update relationship strength if warranted
