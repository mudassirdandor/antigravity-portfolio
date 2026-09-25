# Agent Guardrails & Operational Restrictions

## Purpose

This document defines the hard operational restrictions for all agents working on the Mudassir Javed portfolio.

The purpose is to prevent:

* infinite debugging loops
* repeated failed fixes
* scope creep
* unnecessary refactoring
* dependency sprawl
* accidental destruction of working code
* path/file confusion
* premature optimization
* autonomous expansion into future milestones
* unsupported content changes
* excessive tool usage without progress

This document works together with:

```text
docs/personal-profile.md
docs/portfolio-brief.md
docs/design-system.md
docs/projects.md
docs/development-plan.md
docs/content.md
docs/agents.md
docs/agent-workflow.md
docs/progress-log.md
```

These documents remain the source of truth.

This document adds operational restrictions.

---

# 1. Absolute Scope Rule

An agent may implement only the task explicitly authorized for the current milestone.

Do not:

* start future milestones
* implement sections that were not requested
* refactor unrelated components
* redesign unrelated areas
* add "nice to have" features
* add speculative architecture
* create infrastructure for hypothetical future requirements

Example:

```text
AUTHORIZED:
Milestone 3 — Hero Section

NOT AUTHORIZED:
About
Projects
Experience
Certifications
Contact
```

Completing the current task does not automatically authorize the next task.

When the assigned scope is complete:

```text
STOP
→ VERIFY
→ REPORT
```

Do not continue.

---

# 2. No Autonomous Scope Expansion

Do not expand scope because:

* the next feature looks easy
* a related issue was noticed
* a component could be improved
* a dependency appears useful
* a design idea appears attractive
* a later milestone depends on the current component
* the agent believes "it would be better" to change something

Record the issue for a future milestone instead.

Use:

```text
Deferred:
Reason:
Recommended milestone:
```

---

# 3. Anti-Loop Rule

An agent must not repeatedly attempt the same repair without obtaining new evidence.

A repeated problem is considered the same problem when:

* the same symptom remains
* the same command fails for the same reason
* the same visual defect remains
* the same TypeScript/build error remains
* the implementation keeps reverting to the same failure state
* different superficial edits are being made without a changed diagnosis

## Retry Limit

For one root-cause problem:

```text
Attempt 1:
Diagnose and fix

Attempt 2:
Reassess evidence and try a materially different fix

Attempt 3:
Only allowed if new evidence materially changes the diagnosis
```

Do not perform unlimited attempts.

If the problem remains after two materially different repair attempts and there is no new evidence:

```text
STOP
```

Report the problem instead of continuing.

---

# 4. No Repetition Without Evidence

Do not:

* rerun the same failed command indefinitely
* recreate the same component repeatedly
* reinstall the same package repeatedly
* change the same CSS property again and again without inspecting the rendered result
* apply multiple arbitrary fixes hoping one works
* regenerate the same output without identifying why the previous output failed

Before another attempt, answer internally:

```text
What new evidence do I have?
What changed?
Why should this attempt behave differently?
```

If there is no meaningful answer:

```text
STOP
```

---

# 5. Debugging Discipline

When a defect appears:

```text
OBSERVE
→ REPRODUCE
→ ISOLATE
→ HYPOTHESIZE
→ CHANGE
→ VERIFY
```

Do not skip directly from:

```text
ERROR
→ RANDOM EDIT
```

Record the diagnosis mentally or in the task notes:

```text
Observed:
Expected:
Actual:
Likely cause:
Evidence:
Proposed change:
Verification:
```

Only one primary root-cause hypothesis should be pursued at a time unless the evidence clearly indicates multiple independent defects.

---

# 6. Preserve Known-Good State

Do not knowingly destroy working functionality while attempting to fix another issue.

Before a risky structural change:

* inspect the current implementation
* understand what is already working
* keep changes small
* prefer reversible changes

Do not replace a working architecture with a new architecture merely because the new architecture appears cleaner.

Prefer:

```text
small fix
```

over:

```text
large rewrite
```

unless the current architecture is demonstrably unsuitable.

---

# 7. No Blind Refactoring

Do not refactor simply because:

* code could be cleaner
* naming could be different
* files could be reorganized
* a different pattern is preferred
* another architecture looks more modern

Refactoring is allowed only when it is:

* required by the current milestone
* necessary to fix a verified defect
* necessary to preserve maintainability after an approved feature
* explicitly authorized

Do not combine:

```text
feature implementation
+
large refactor
+
architecture rewrite
```

unless explicitly authorized.

---

# 8. No Path Guessing

Never guess where a file exists.

Before modifying a file:

1. Inspect the repository.
2. Confirm the path.
3. Confirm the file exists.
4. Confirm the file is the intended file.

Use repository inspection commands when appropriate:

```bash
pwd
git rev-parse --show-toplevel
find src -maxdepth 3 -type f
```

or equivalent tooling available in the environment.

Do not assume that documentation paths exactly match the current implementation.

The repository state is authoritative for source-code paths.

If a referenced file does not exist:

```text
STOP
```

Inspect the repository and report the discrepancy.

Do not create a replacement file merely because the expected path is missing.

---

# 9. No Duplicate Implementations

Before creating a component, utility, hook, style, data file, or service:

Check whether an equivalent implementation already exists.

Do not create:

```text
Button.tsx
ButtonNew.tsx
ButtonV2.tsx
ButtonReusable.tsx
```

merely because the first implementation does not immediately fit the new requirement.

Prefer modifying or extending the existing implementation when appropriate.

---

# 10. No Dependency Sprawl

Do not install a dependency because:

* it is trending
* another portfolio uses it
* it looks impressive
* it solves a very small problem
* it saves a few lines of code
* the agent happens to know the library

Before adding a dependency, verify:

```text
Can CSS solve it?
Can the browser solve it?
Can React solve it?
Can the existing project dependency solve it?
```

Only add a new dependency when the benefit clearly justifies:

```text
bundle cost
runtime cost
maintenance cost
complexity
```

Do not install multiple libraries that solve the same problem.

Preferred baseline:

```text
React
TypeScript
Vite
Tailwind CSS
Motion
Lucide React
```

Do not introduce another animation library when Motion or CSS is sufficient.

---

# 11. No Package Reinstallation Loops

If installation or package management fails:

Do not repeatedly run installation commands without understanding the failure.

First identify whether the problem is:

```text
application code
package configuration
lockfile
package-manager cache
network
permissions
environment
tooling
```

If the failure is environmental rather than application-related:

```text
STOP
```

Report:

```text
Command:
Error:
Classification:
Likely cause:
Attempts:
Recommended next action:
```

Do not spend unlimited iterations trying to repair an external environment problem.

---

# 12. No Tooling Confusion

Do not treat a tool failure as proof that the application is broken.

Examples:

```text
package-manager cache failure
browser tool failure
terminal permission failure
network issue
missing executable
environment-specific path problem
```

These must be distinguished from:

```text
TypeScript error
runtime error
React rendering error
CSS/layout defect
accessibility defect
application logic defect
```

Do not rewrite application code to compensate for an unrelated environment failure without evidence.

---

# 13. Verification Must Be Evidence-Based

Never claim:

```text
PASS
FIXED
WORKING
RESPONSIVE
ACCESSIBLE
OPTIMIZED
```

without actually verifying the relevant result.

If verification was not performed, write:

```text
NOT RUN
```

If verification failed, write:

```text
FAIL
```

If verification is incomplete:

```text
PARTIAL
```

Do not convert uncertainty into a PASS.

---

# 14. Do Not Over-Test One Failure

If a verification method repeatedly fails because of the environment, do not spend unlimited effort forcing that same verification method to work.

After reasonable diagnosis:

```text
STOP
```

Use the available valid evidence and document the limitation.

Example:

```text
Browser verification unavailable in current environment.

Build verification:
PASS

TypeScript:
PASS

Static inspection:
PASS

Browser verification:
NOT RUN — environment limitation
```

Do not claim browser verification passed.

---

# 15. No Endless Optimization

Optimization requires evidence.

Do not repeatedly optimize a page because:

* the code could be smaller
* a metric could theoretically improve
* another implementation appears faster
* the agent assumes something is inefficient

First identify:

```text
Issue
Evidence
Likely cause
```

Then make a targeted change.

After the change:

```text
Measure
Compare
Decide
Stop
```

Do not optimize indefinitely after the issue is acceptably resolved.

---

# 16. No Design Overcorrection

Do not fix a small visual issue by redesigning the entire section.

Examples:

```text
Small spacing issue
→ do not redesign the grid

Button alignment issue
→ do not rewrite navigation

One mobile breakpoint issue
→ do not rewrite all responsive CSS

One typography issue
→ do not replace the entire type system
```

Use the smallest change that correctly resolves the problem.

---

# 17. No Animation Escalation

Do not add more animation merely because a section feels static.

Do not escalate:

```text
CSS transition
→ Motion
→ multiple libraries
→ continuous animation
→ scroll effects
→ canvas/WebGL
```

without a concrete design requirement.

Modern interaction must remain purposeful.

Do not add an effect merely because it is currently fashionable.

---

# 18. No Accessibility Regression

Never fix visual behavior by knowingly breaking:

* keyboard navigation
* focus visibility
* semantic structure
* accessible names
* reduced-motion support
* contrast
* touch usability

A visual improvement that causes an accessibility regression is not an accepted fix.

---

# 19. No Content Fabrication

Never invent:

* project outcomes
* project metrics
* clients
* testimonials
* employment claims
* certification claims
* statistics
* business results
* users
* downloads
* conversion rates
* performance numbers

Use only verified information from:

```text
personal-profile.md
projects.md
content.md
portfolio-brief.md
```

When uncertain:

```text
[TO VERIFY]
```

Do not silently remove the verification requirement.

---

# 20. No Professional Positioning Drift

The website must remain primarily:

```text
Data Analyst
Business Intelligence & Data Analytics
MSc Statistics
```

Do not allow supporting technical skills to replace the primary professional identity.

Do not turn the portfolio into:

```text
AI Engineer portfolio
Web Developer portfolio
SEO agency website
SaaS product
Dashboard application
Startup landing page
```

unless explicitly authorized by the source-of-truth documents.

---

# 21. No Unnecessary Backend

Do not introduce:

* databases
* authentication
* APIs
* server infrastructure
* CMS systems
* dashboards
* user accounts
* complex state management

unless a verified requirement requires them.

The portfolio is primarily a content-driven frontend.

---

# 22. No Destructive Commands Without Explicit Authorization

Do not use destructive operations such as:

```text
git reset --hard
git clean -fd
rm -rf
mass deletion
repository replacement
history rewriting
force push
```

unless explicitly authorized and the consequences are understood.

Do not delete documentation or source files simply because they appear unused.

---

# 23. No History Rewriting to Hide Problems

Do not rewrite:

```text
progress-log.md
```

to make the project appear cleaner than it actually is.

Record:

* failures
* changes of direction
* reverted approaches
* blockers
* verification limitations
* technical debt

The progress log is historical project evidence.

---

# 24. No Fake Completion

A task is not complete merely because code was generated.

Completion requires:

```text
Implementation
+
Verification
+
Scope compliance
+
Documentation
```

A task is NOT complete when:

* code compiles but does not visually work
* the requested interaction was not tested
* mobile behavior was not checked when relevant
* accessibility was not considered
* a known defect remains undocumented
* unrelated code was changed unnecessarily

---

# 25. No Self-Authorization

The agent must not interpret:

```text
"make it better"
"continue"
"finish this"
"clean it up"
```

as authorization to implement the entire remaining project.

The current milestone remains the boundary unless the user explicitly expands the scope.

---

# 26. Conflict Rule

When two requirements conflict:

Do not silently choose one.

Identify:

```text
Requirement A:
Requirement B:
Conflict:
Impact:
```

Then stop the affected work and report the conflict.

The documented source-of-truth hierarchy must be followed.

Do not invent a compromise that changes the project's professional positioning or architecture without authorization.

---

# 27. Missing Information Rule

When necessary information is missing:

Do not invent it.

Use:

```text
[TO VERIFY]
```

or:

```text
BLOCKED — required information missing
```

Continue only with independent work that does not depend on the missing information.

Do not fabricate placeholder facts that could later be mistaken for real information.

---

# 28. One Root Cause at a Time

When several symptoms appear, determine whether they share a common cause.

Do not immediately patch every symptom independently.

Prefer:

```text
Find root cause
→ fix root cause
→ retest
```

instead of:

```text
patch symptom 1
→ patch symptom 2
→ patch symptom 3
→ create new regressions
```

If symptoms are independent, handle them as separate scoped defects.

---

# 29. Regression Rule

After fixing a defect, verify that the fix did not break:

* existing functionality
* layout
* responsiveness
* navigation
* accessibility
* content
* previously completed milestones

Do not consider a defect fixed if it merely moves the problem somewhere else.

---

# 30. Milestone Stop Gate

At the end of an authorized milestone:

```text
IMPLEMENT
→ VERIFY
→ LOG
→ REPORT
→ STOP
```

Do not continue into the next milestone.

The next milestone requires explicit authorization.

---

# 31. Blocked-State Protocol

When blocked, do not improvise endlessly.

Enter:

```text
BLOCKED
```

and report:

```text
Problem:
Observed behavior:
Expected behavior:
Attempts made:
Evidence:
Likely cause:
What remains unknown:
Recommended next action:
```

A blocked state is preferable to uncontrolled iteration.

---

# 32. Stagnation Detection

The agent must recognize when progress has stopped.

Signs of stagnation include:

* the same error reappears repeatedly
* multiple edits produce no meaningful change
* verification results remain unchanged
* the diagnosis keeps changing without evidence
* implementation becomes increasingly complex without improvement
* the agent is undoing and redoing the same changes
* files are being modified without a clear connection to the defect

When stagnation is detected:

```text
STOP
```

Do not continue generating changes merely to demonstrate activity.

---

# 33. Change Budget

For a small defect, prefer a small change.

Do not modify many unrelated files while fixing one isolated issue.

Before changing a file, ask:

```text
Is this file directly relevant to the current defect or milestone?
```

If not:

```text
Do not modify it.
```

---

# 34. Evidence Before Complexity

When choosing between two solutions:

Prefer the simpler solution unless evidence demonstrates that the more complex approach is necessary.

Priority:

```text
native browser behavior
→ CSS
→ existing React patterns
→ existing dependency
→ new dependency
```

This order is a guideline, not an absolute requirement.

---

# 35. Documentation Path Rule

The project documentation lives under:

```text
docs/
```

Known source-of-truth documents:

```text
docs/personal-profile.md
docs/portfolio-brief.md
docs/design-system.md
docs/projects.md
docs/development-plan.md
docs/content.md
docs/agents.md
docs/agent-workflow.md
docs/progress-log.md
docs/agent-guardrails.md
```

Do not invent alternative documentation directories.

Do not create duplicate versions such as:

```text
docs/final/
docs/latest/
docs/new/
docs/v2/
```

unless explicitly authorized.

---

# 36. Progress Log Rule

Meaningful implementation decisions must be recorded in:

```text
docs/progress-log.md
```

Do not log every tiny edit.

Do log:

* milestones
* significant changes
* architecture decisions
* failed approaches
* verification results
* blockers
* risks
* handoffs
* changes of direction

---

# 37. Handoff Rule

Before handing off work, state:

```text
Milestone:
Status:

Implemented:
Files changed:

Decisions:

Verification:
Build:
TypeScript:
Lint:
Responsive:
Accessibility:
Performance:

Known issues:

Next action:
```

Do not claim the next milestone has begun.

---

# 38. Review Boundary

The reviewer must be able to understand exactly what changed.

Do not submit a milestone for review containing unrelated experimental work.

A review should answer:

```text
What changed?
Why?
What was verified?
What remains?
```

---

# 39. Final Safety Principle

When uncertain between:

```text
continue changing
```

and:

```text
stop and report
```

prefer:

```text
stop and report
```

when:

* the same defect has already been attempted repeatedly
* evidence is insufficient
* the required information is missing
* the problem appears environmental
* the scope is unclear
* the implementation would require broad unrelated changes
* the fix would risk working functionality
* the agent is beginning to repeat itself

---

# 40. Core Rule

The agent must optimize for:

> **Progress with evidence, not activity without direction.**

A small verified improvement is better than a large speculative change.

A clear blocker is better than an endless debugging loop.

A scoped milestone is better than a complete but uncontrolled rewrite.

A truthful `NOT RUN` is better than a fabricated `PASS`.

A clean stop is better than hours of repetitive iteration.
