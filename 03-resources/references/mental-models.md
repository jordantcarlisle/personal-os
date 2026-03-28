# Mental Models Reference

A curated set of thinking tools — organized by where they're most useful. Each model includes a one-sentence definition and a one-sentence application example. The goal is to be scannable, not exhaustive.

Use this during decisions, planning sessions, and reflection. The point is not to memorize them — it's to have a vocabulary for patterns you're already experiencing.

---

## Thinking

**First Principles**
Break a problem down to its fundamental truths, then reason up from there rather than from analogy. *Instead of asking "how do other companies handle pricing?" ask "what value are we actually delivering and what would someone pay for that?"*

**Second-Order Thinking**
Consider not just the immediate consequence of a decision, but the consequences of those consequences. *Cutting the engineering team might reduce burn, but second-order: slower shipping → lost deals → worse burn in Q3.*

**Inversion**
Instead of asking how to achieve a goal, ask what would guarantee failure — then avoid those things. *Instead of "how do I build a great morning routine?" ask "what would destroy my mornings?" and eliminate those things.*

**Occam's Razor**
When multiple explanations fit the evidence, prefer the simplest one. *If a metric suddenly dropped, check for a tracking bug before assuming a product problem.*

**Map Is Not the Territory**
The model of reality is not reality itself — every framework, metric, or org chart simplifies and therefore distorts. *A sprint velocity number tells you something, but not everything, about team capacity — don't manage to the metric as if it's the thing itself.*

**Circle of Competence**
Know the boundaries of what you actually understand well, and operate inside them. *Before making a call on infrastructure architecture, know whether you're inside or outside your circle — and if outside, find someone who isn't.*

---

## Deciding

**Opportunity Cost**
Choosing one thing means not choosing something else — the value of the best alternative foregone is the real cost. *Spending six months on feature X means not spending six months on feature Y — evaluate both, not just X.*

**Reversible vs. Irreversible Decisions**
Reversible decisions should be made fast; irreversible ones deserve more process. *Hiring a contractor is reversible. Architectural decisions that get baked into production are not — spend your deliberation budget accordingly.*

**Regret Minimization**
When choosing between options, ask which choice you'll regret more at 80. *Jeff Bezos used this to decide to start Amazon: "I knew that if I didn't try, I'd regret it forever."*

**Sunk Cost Fallacy**
Past investment — time, money, effort — is not a reason to continue a failing path. *The fact that you've spent two quarters on a feature doesn't make it worth a third quarter if the signal is bad.*

**Satisficing vs. Maximizing**
Sometimes "good enough" is the optimal choice — finding the best possible option has real costs in time and energy. *For low-stakes, reversible decisions, pick the first option that clears the bar rather than searching for the perfect one.*

**Premortems**
Before launching a plan, imagine it failed and ask what caused it. *Run a 15-minute premortem on any new initiative: "It's six months from now and this went badly. What happened?"*

---

## Systems

**Feedback Loops**
Systems amplify themselves through reinforcing loops (more → more) or correct themselves through balancing loops (more → less). *A product that users love gets word-of-mouth referrals that bring more users who love it more — identify and invest in your reinforcing loops.*

**Leverage**
Small inputs that produce outsized outputs. *A well-written playbook (small input) that trains everyone on a process repeatedly (large output) is high leverage. Doing the thing yourself once is low leverage.*

**Compounding**
Growth that builds on itself over time — linear input, exponential output. *Writing publicly every day compounds: each post builds an audience that makes the next post reach more people.*

**Bottleneck Theory (Theory of Constraints)**
A system's output is limited by its slowest constraint — improving anything other than the bottleneck doesn't improve the system. *If the bottleneck is sales, hiring more engineers won't help. Find and fix the constraint.*

**Margin of Safety**
Build in buffer beyond what you think you need — for time, resources, or risk tolerance. *If you think a project takes 6 weeks, plan for 8. If you need $500k in runway, target $700k.*

**Redundancy**
Critical systems should have backups — single points of failure eventually fail. *If only one person knows how a key system works, that person's absence creates a crisis. Document or cross-train.*

---

## People

**Hanlon's Razor**
Never attribute to malice what can be adequately explained by ignorance or carelessness. *When someone sends a confusing message that feels passive-aggressive, assume miscommunication before bad intent.*

**Incentives**
People respond to what they're rewarded for, not always what they're told. *If you say "quality matters" but only celebrate shipping speed, you're incentivizing shipping speed.*

**Fundamental Attribution Error**
We over-attribute others' behavior to character and under-attribute it to situation. *When a team member delivers late, the first hypothesis should be "they hit an obstacle" not "they're unreliable."*

**Dunning-Kruger Effect**
People with limited knowledge in a domain overestimate their competence; experts underestimate it. *The people most certain about a complex topic are often the ones who know the least about its complexity.*

**Social Proof**
People look to others' behavior as information about what to do — especially under uncertainty. *Early testimonials and case studies matter more than they seem — they reduce perceived risk through social proof.*

---

## Time

**Parkinson's Law**
Work expands to fill the time available for it. *If a task has no deadline, it takes forever. Set aggressive time constraints — they force prioritization and eliminate perfectionism.*

**Eisenhower Matrix**
Sort tasks by urgent/important. Do urgent+important now, schedule important+not urgent, delegate urgent+not important, eliminate neither. *Most high-leverage work is important but not urgent — protect time for it before the urgent crowds it out.*

**Pareto Principle (80/20)**
Roughly 80% of outcomes come from 20% of causes. *Identify which 20% of customers drive 80% of revenue before building features — your priorities shift dramatically.*

**Law of Diminishing Returns**
Additional input eventually yields progressively smaller output — there's an optimal stopping point. *The 5th hour of editing an essay adds less value than the 1st. Know when you've hit diminishing returns and ship.*

---

## Source Credits

Farnam Street (fs.blog) mental models compilation — the most comprehensive organized source for these frameworks. *Thinking in Bets* (Annie Duke), *The Great Mental Models* series (Parrish & Beaubien), Charlie Munger's latticework of mental models.
