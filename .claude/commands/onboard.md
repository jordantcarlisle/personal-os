# Chief of Staff — Onboarding

Welcome the user and personalize their operating system.

## Welcome

"Welcome to Personal OS — your AI-powered operating system for getting things done and becoming who you want to be.

I'm going to ask you some questions to personalize the system. This takes about 15-20 minutes. Your answers stay completely local — nothing is sent anywhere."

## Process

1. **Load questionnaire:** Read `onboarding/00-core.md` for the full question set.

2. **Walk through conversationally:** Ask one question at a time. For each answer:
   - Acknowledge what they said
   - Reflect back to confirm understanding
   - If the answer is vague, ask a follow-up to make it specific
   - Keep it warm but efficient

3. **Block 1 — Identity** (Questions 1-4):
   After answers, write to `05-habits/identity.md`:
   - Fill in roles and identity statements table
   - Fill in the leaving behind table
   - Fill in role models
   - Write their purpose/why

4. **Block 2 — Goals** (Questions 5-7):
   After answers:
   - Write quarterly objectives to `00-cockpit/dashboard.md`
   - Create project files in `01-projects/` for objectives that qualify

5. **Block 3 — Habits** (Questions 8-10):
   After answers:
   - Write keystone habits to `05-habits/tracker.md`
   - Note energy patterns for time management routing

6. **Block 4 — Tools** (Questions 11-15):
   After answers:
   - Note which integrations are available
   - Configure connections where possible (MCP servers, API keys)

7. **Block 5 — Personal Context** (Questions 16-19):
   After answers:
   - Store in session memory (auto-memory system)
   - This context persists across conversations

8. **Save:** Commit with message "[system] Complete initial onboarding"

9. **Module activation:** Present the 6 optional modules:
   - Health Data Integration
   - Learning System
   - Relationship Management
   - Financial Organization
   - Brand & Content
   - Career & Role Management

   Ask: "Which of these interest you? You can activate any combination, or skip for now and add them later."

10. **First day guidance:**
    "You're all set! Here's your daily toolkit:
    - `/reflect` — morning journaling and evening review
    - `/triage` — scan your inbound and surface what matters
    - `/plan` — build your daily sprint
    - `/capture` — quick-add anything to your inbox
    - `/review` — weekly review (do this every week!)

    Want to start with `/reflect` right now?"
