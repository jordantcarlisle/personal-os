# Learning System — Onboarding

> These questions help your Learning Tutor agent understand your knowledge base and learning goals.

## Questions

1. **What's your educational background?**
   (Degrees, certifications, bootcamps, significant self-study)

2. **List 5-10 books that have shaped your thinking.**
   (These help the agent understand your intellectual foundations)

3. **What online courses or programs have you completed?**
   (Coursera, Udemy, bootcamps, corporate training — anything significant)

4. **What subjects are you actively studying or want to learn?**
   (Be specific: "machine learning" is better than "tech stuff")

5. **What are your strongest knowledge areas?**
   (Where could you teach someone else?)

6. **What are your biggest knowledge gaps?**
   (What do you wish you understood better?)

7. **How do you learn best?**
   - [ ] Reading (books, articles)
   - [ ] Watching (video courses, lectures)
   - [ ] Doing (projects, building things)
   - [ ] Discussing (conversation, teaching others)
   - [ ] Listening (podcasts, audiobooks)

8. **Do you have a regular study block?**
   (Day/time — or "no, I learn opportunistically")

9. **Are you interested in building a structured curriculum?**
   (A multi-domain learning roadmap with milestones)

10. **Do you want the agent to surface content opportunities from your learning?**
    (Turn insights into posts, threads, or articles)

## How Your Answers Are Used

- Questions 1-3 → `02-areas/learning/sources.md`
- Questions 4-6 → `02-areas/learning/curriculum.md`
- Questions 7-8 → Learning Tutor agent configuration
- Question 9 → Triggers curriculum building if yes
- All answers stay local in your repo
