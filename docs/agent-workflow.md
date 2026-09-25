Agent Workflow

Purpose

This workflow keeps portfolio work sequential, scoped, and evidence-based. Agents coordinate through documented handoffs; they do not independently modify everything.

## Mandatory Guardrails

Before implementation begins, all agents must read:

```text
docs/agent-guardrails.md

Lifecycle

PLAN → INSPECT → DESIGN → IMPLEMENT → REVIEW → VERIFY → OPTIMIZE → QA → FINAL REVIEW → RELEASE

PLAN

Define the task, intended outcome, constraints, owner, acceptance criteria, and relevant source documents. The Lead Architect confirms scope and complexity is justified.

INSPECT

Read relevant documentation and inspect repository context before changing anything. Identify existing behavior, dependencies, related work, and conflicts.

DESIGN

The UI/UX Design Agent translates the brief and design system into implementable requirements. Content & Data Integrity confirms factual and positioning constraints where content is involved.

IMPLEMENT

The Frontend Engineer implements only the approved scope. Major features do not begin until architectural and design requirements are understood.

REVIEW

Relevant agents review the implementation against requirements: design, content integrity, accessibility/SEO, and architecture as applicable.

VERIFY

The implementation agent and QA Agent perform relevant direct checks. A claim is not accepted as proof; outcomes must be observed and recorded.

OPTIMIZE

The Performance Agent uses actual context or measurements to propose and, when assigned, make scoped improvements. Optimization must preserve required behavior and design.

QA

The QA & Testing Agent verifies functional behavior, responsive layouts, regressions, and the production build as relevant. Failures are documented for remediation and retest.

FINAL REVIEW

After technical QA, the Final Creative Director / Reviewer assesses the complete experience for design coherence, editorial quality, positioning, and professional standard.

RELEASE

Release occurs only when Definition of Done is satisfied, remaining risks are accepted explicitly, and meaningful work is recorded in progress-log.md.

Required task record

Every development task must include:

A task definition.

The relevant source documents.

Repository/context inspection.

An implementation plan.

Scoped implementation.

Verification.

Relevant review.

A progress-log entry.

A handoff to the next agent.

Handoff rules

A handoff must name the receiving agent, task state, files affected, decisions, verification performed, unperformed checks, risks, and requested next action.

The receiving agent must read the handoff and relevant documents before acting.

Frontend Engineering must not start a major feature until relevant architecture and design requirements are understood.

The Performance Agent must not optimize without a defined issue, context, or measurement.

QA verifies the implemented result rather than trusting a claim that it works.

Final Review occurs only after technical QA.

Conflicting requirements require a documented stop and escalation; no agent silently chooses a direction.

Agent coordination rules

Read relevant documentation before acting.

Never assume missing information or fabricate portfolio content.

Preserve Mudassir Javed's documented Data Analyst positioning.

Do not introduce dependencies without justification and approval.

Do not redesign unrelated sections while completing a task.

Do not overwrite another agent's work without understanding it.

Preserve working functionality and prefer small, reversible changes.

Verify changes before handoff and record meaningful work in progress-log.md.

Keep [TO VERIFY] information clearly marked until it is verified.

Treat performance and accessibility as implementation requirements, not final-stage extras.

Definition of Done

Functionality

Everything in the approved task works as intended.

Design

The implementation follows design-system.md and approved design guidance.

Content

Content matches content.md, respects the personal profile and projects documentation, and contains no fabricated information.

Responsiveness

Desktop, tablet, and mobile layouts work properly for the task scope.

Accessibility

Semantic structure, keyboard navigation, focus states, contrast, and reduced-motion behavior are addressed.

Performance

No unnecessary dependencies, excessive animations, oversized assets, or obvious performance problems are introduced.

SEO

Applicable titles, metadata, semantic structure, Open Graph information, and technical SEO are implemented.

Code quality

TypeScript is clean, components are maintainable, and architecture remains appropriately simple.

Verification

The production build succeeds and relevant tests and checks pass, or any unrun/failed checks are explicitly recorded and accepted.

Documentation

Meaningful work, decisions, verification, issues, and handoffs are recorded in progress-log.md.

Antigravity Milestone Execution Protocol

Antigravity is the implementation agent for this project.

The project must be developed as a sequence of small, reviewable milestones.

Core Rule

One user-authorized milestone = one controlled implementation cycle.

Antigravity must not attempt to implement multiple future milestones in the same task unless the user explicitly authorizes that scope.

Do not infer permission to continue from the fact that the current milestone is technically easy.

When the authorized milestone is complete, stop implementation and return a milestone report.

Milestone Input Contract

Every milestone instruction should define:

Milestone ID

Objective

Scope

Allowed files / areas

Relevant source documents

Acceptance criteria

Verification requirements

Explicit exclusions

If any requirement conflicts with the source-of-truth documentation, stop and report the conflict before implementation.

Required Execution Sequence

READ
→ INSPECT
→ PLAN
→ IMPLEMENT
→ VERIFY
→ REVIEW
→ REPORT
→ STOP

READ

Read only the documentation relevant to the milestone.

At minimum, inspect:

docs/personal-profile.md

docs/portfolio-brief.md

docs/design-system.md

docs/projects.md

docs/content.md

docs/development-plan.md

Also read:

docs/agents.md

docs/agent-workflow.md

docs/progress-log.md

when the task requires architectural, workflow, or historical context.

INSPECT

Inspect the current repository before changing files.

Check:

current file structure

existing component patterns

installed dependencies

current implementation

previous milestone changes

build status where useful

Do not assume that the progress log exactly matches the current repository state.

The repository itself is the implementation state of record.

PLAN

Before coding, produce a concise internal implementation plan.

The plan must identify:

components to create or modify

data sources

styles/tokens involved

interaction/motion requirements

accessibility implications

performance implications

verification commands

Do not create speculative architecture for future milestones.

IMPLEMENT

Implement only the authorized milestone.

Prefer:

semantic HTML

React components

TypeScript

Tailwind CSS

CSS transitions/animations for simple effects

Motion (motion/react) only when interaction complexity justifies it

reusable components for repeated patterns

data-driven content where appropriate

Do not:

rewrite unrelated sections

refactor the entire repository

add speculative features

install dependencies without justification

fabricate content

invent metrics or project outcomes

change professional positioning

redesign unrelated areas

overwrite work without inspection

VERIFY

Run the checks relevant to the milestone.

At minimum, use the appropriate available checks such as:

pnpm build
pnpm lint

If a check cannot be run, explicitly report:

NOT RUN — reason

Never report a successful verification without actually running or directly observing the result.

VISUAL VERIFICATION

For UI milestones, inspect the rendered application rather than relying only on source code.

Check at minimum:

desktop layout

mobile layout

spacing

typography

interaction states

overflow

focus visibility

motion behavior

section hierarchy

When possible, test at representative widths rather than a single viewport.

PERFORMANCE VERIFICATION

Do not optimize blindly.

Check for obvious problems such as:

unnecessary large assets

excessive DOM complexity

repeated animation loops

unnecessary React re-renders

oversized images

unnecessary dependencies

layout-triggering animations

expensive blur or filter effects

continuously running visual effects

Performance is part of implementation quality, not a final-stage extra.

MODERN UI CONTROL

Modern patterns may be introduced when they strengthen hierarchy or storytelling.

Examples:

CSS marquee / ticker

dynamic text treatment

restrained text reveal

horizontal content rail

editorial grid

bento-style composition

subtle reading/scroll progress indicator

technical metadata rail

hover-driven image or media movement

subtle spotlight or gradient depth

data-inspired visual motifs

These patterns are optional, not mandatory.

Do not add a pattern merely because it is trending.

The portfolio must remain:

Content-first
Fast
Readable
Professional
Accessible
Distinctive

STOP CONDITION

When the authorized milestone satisfies its acceptance criteria:

Stop coding.

Do not begin the next milestone.

Record the work in docs/progress-log.md.

Return a milestone report.

The milestone report must include:

Milestone:
Status:

Implemented:
- ...

Files changed:
- ...

Design decisions:
- ...

Verification:
- Build:
- Lint:
- Responsive:
- Accessibility:
- Performance:

Known issues:
- ...

Next milestone:
- NOT STARTED

The next milestone requires a new explicit user instruction.

Dependency Rule

Do not add a package solely because it is popular, visually impressive, or frequently used in showcase websites.

Before adding a dependency, determine:

Why native CSS/HTML/React cannot reasonably solve the requirement.

Whether an existing dependency already provides the capability.

Bundle/runtime implications.

Whether the dependency improves maintainability enough to justify its cost.

For this portfolio, the preferred baseline remains:

React
TypeScript
Vite
Tailwind CSS
Motion
Lucide React

Refactoring Rule

Refactoring is allowed only when it is:

required by the current milestone,

required to fix a verified defect,

or required to preserve maintainability after an approved feature.

Do not perform broad cleanup merely because the agent notices opportunities.

Content Safety Rule

Content implementation must remain grounded in:

personal-profile.md
portfolio-brief.md
projects.md
content.md

If information is uncertain, retain:

[TO VERIFY]

Do not convert uncertainty into a factual claim.

Final Principle

Antigravity should optimize for:

High-quality incremental delivery, not maximum code generated per request.