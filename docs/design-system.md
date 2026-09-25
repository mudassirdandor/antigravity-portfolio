# Mudassir Javed — Portfolio Design System

## 1. Purpose

This document defines the visual design, interaction design, typography, color system, layout, animation, responsive behavior, accessibility, and performance principles for the Mudassir Javed personal portfolio.

The website must feel:

* Modern
* Premium
* Professional
* Analytical
* Technical
* Clean
* Human
* Fast

The design should communicate the quality of a modern Data Analyst without becoming a SaaS dashboard or an animation showcase.

---

# 2. Core Design Principle

> **Modern design + purposeful motion + restrained visual effects + excellent performance.**

The website should look sophisticated because of:

* typography
* spacing
* composition
* hierarchy
* visual consistency
* project presentation
* subtle interaction
* high-quality content

—not because of excessive effects.

---

# 3. Design Personality

The visual personality should combine:

**Professional**

The website must be credible to recruiters and hiring managers.

**Analytical**

Visual language should subtly suggest data, structure, precision, and information.

**Technical**

The design can contain subtle technical details without looking like a developer-only portfolio.

**Editorial**

Typography and whitespace should give the site a refined editorial feel.

**Human**

The portfolio should feel like a person presenting their work, not a corporate software product.

**Confident**

The design should be visually confident without becoming flashy.

---

# 4. Visual References

Use these only as references for design quality and principles:

* Stripe
* Linear
* Bloomberg
* Premium editorial websites
* Modern data visualization interfaces
* High-end developer/data portfolios

Do not copy layouts, branding, illustrations, or visual identity from any reference.

The final design must have its own identity for Mudassir Javed.

---

# 5. Overall Visual Direction

Preferred aesthetic:

**Dark analytical editorial**

with:

* deep dark background
* off-white typography
* muted secondary text
* blue accent
* subtle borders
* controlled contrast
* generous whitespace
* refined cards
* restrained gradients
* subtle motion

Avoid a cyberpunk aesthetic.

Avoid neon-heavy design.

Avoid excessive glassmorphism.

Avoid making the site look like an AI startup landing page.

---

# 6. Color System

Use CSS variables/design tokens.

Suggested base palette:

```text
Background:
Near-black / deep charcoal

Surface:
Slightly lighter charcoal

Surface Elevated:
Subtle lighter surface

Primary Text:
Off-white

Secondary Text:
Muted gray

Tertiary Text:
Low-contrast gray

Border:
Subtle neutral border

Accent:
Professional blue

Accent Hover:
Slightly brighter blue
```

Suggested starting values:

```text
--background: #0A0A0B
--surface: #111113
--surface-elevated: #17171A

--text-primary: #F5F5F5
--text-secondary: #A1A1AA
--text-tertiary: #71717A

--border: rgba(255,255,255,0.10)

--accent: #3B82F6
--accent-hover: #60A5FA
```

These values are starting points, not immutable requirements.

Adjust them during visual testing while preserving the overall direction.

---

# 7. Color Usage

Blue should be used as an accent, not as the dominant page color.

Good uses:

* Primary CTA
* Links
* Active navigation
* Small highlights
* Data visualization accents
* Interactive states
* Selected project details

Avoid:

* Blue backgrounds across large areas
* Excessive glowing blue effects
* Blue text everywhere
* Multiple competing accent colors

The visual hierarchy should remain primarily neutral with controlled blue accents.

---

# 8. Typography

## Display / Headings

Preferred font:

**Space Grotesk**

Use for:

* Hero title
* Major section headings
* Project titles
* Important numerical/data highlights

## Body

Preferred font:

**Inter**

Use for:

* Paragraphs
* Descriptions
* Navigation
* Buttons
* Supporting content

## Technical / Metadata

Preferred font:

**JetBrains Mono**

Use sparingly for:

* Tags
* Technical metadata
* Small labels
* Numbers
* Data-related visual details
* Code/technical references

Do not overuse monospace typography.

---

# 9. Typography Hierarchy

Use a responsive type scale.

Suggested hierarchy:

```text
Hero eyebrow:
Small / uppercase / tracked

Hero title:
Very large
Strong weight
Tight line-height

Hero subtitle:
Medium-large
Readable
Secondary emphasis

Section heading:
Large
Strong

Project heading:
Medium-large

Body:
Comfortable reading size

Metadata:
Small
Muted

Technical labels:
Small monospace
```

Avoid making every heading huge.

Large typography should be reserved for important hierarchy.

---

# 10. Font Weight

Recommended hierarchy:

```text
Regular:
400

Medium:
500

Semibold:
600

Bold:
700
```

Use 600–700 for major headings.

Use 400–500 for body text.

Avoid excessive use of 700+ weights.

---

# 11. Line Height

Body text should be comfortable to read.

Recommended:

```text
Body:
1.5–1.7

Headings:
1.0–1.2

Hero:
0.95–1.1
```

Adjust based on actual typography.

---

# 12. Layout System

Use a consistent responsive container.

Suggested maximum content width:

```text
1200px–1280px
```

Use horizontal padding that scales responsively.

Suggested concept:

```text
Desktop:
32–48px horizontal padding

Tablet:
24–32px

Mobile:
20–24px
```

Do not allow content to stretch excessively on large displays.

---

# 13. Grid

Use a modern editorial grid.

Possible desktop structure:

```text
12-column grid
```

Use the grid to create:

* Hero composition
* Expertise layout
* Project cards
* Timeline
* Certification layout
* Contact composition

The grid should create visual structure without making the site look like a dashboard.

---

# 14. Spacing

Use a consistent spacing scale.

Suggested base:

```text
4
8
12
16
24
32
48
64
80
96
128
```

Large sections should have generous vertical spacing.

Avoid excessive compression.

Avoid excessive empty space that makes the site unnecessarily long.

---

# 15. Section Rhythm

Each section should have:

```text
Section label
↓
Heading
↓
Short introduction
↓
Main content
```

Not every section needs all four elements.

Use variation to maintain visual rhythm.

---

# 16. Navigation

Navigation should be minimal.

Suggested:

```text
MUDASSIR JAVED

About
Work
Experience
Contact

[Download CV]
```

On mobile:

* compact menu
* clear touch targets
* simple transition
* no complicated navigation system

Navigation should remain visible or easily accessible without dominating the page.

---

# 17. Hero Design

The Hero should be the strongest visual area.

It should contain:

* Data Analyst label
* Mudassir Javed
* Business Intelligence & Data Analytics
* concise positioning statement
* primary CTA
* secondary CTA

Potential visual elements:

* subtle data-inspired grid
* restrained gradient
* abstract analytical geometry
* subtle numerical/data motif

If using a decorative background, it must remain lightweight.

Avoid heavy canvas/WebGL effects.

---

# 18. Data-Inspired Visual Language

The site may use subtle visual references to analytics:

* grids
* coordinates
* small numerical labels
* chart-like lines
* structured columns
* subtle axis references
* data points
* minimal technical annotations

These should be decorative and supportive.

Do not turn the portfolio into a dashboard.

---

# 19. Cards

Cards should be used selectively.

Good uses:

* Project cards
* Expertise items
* Credential highlights
* Small information groups

Card design should be:

* restrained
* clean
* spacious
* consistent

Avoid:

* excessive shadows
* thick borders
* huge rounded corners
* excessive glass effects
* cards nested inside cards

Not everything needs to be inside a card.

---

# 20. Border Radius

Use restrained rounding.

Suggested range:

```text
Small elements:
6–8px

Cards:
10–14px

Large interactive elements:
12–16px
```

Avoid extremely rounded "pill everything" design.

Pills may be used for tags or compact metadata.

---

# 21. Borders

Use subtle borders to establish hierarchy.

Preferred:

```text
1px
low-opacity neutral border
```

Borders should define structure without becoming visually heavy.

---

# 22. Shadows

Use shadows sparingly.

Prefer:

* subtle elevation
* contrast
* borders
* surface differences

over large dramatic shadows.

Dark interfaces should not rely on heavy black shadows.

---

# 23. Gradients

Gradients may be used very subtly.

Good:

* subtle hero glow
* accent transition
* background depth

Avoid:

* large rainbow gradients
* excessive neon gradients
* gradient text everywhere
* gradients on every card

---

# 24. Buttons

Primary button:

* Blue accent
* High contrast
* Clear label
* Moderate radius
* Subtle hover transition

Secondary button:

* Neutral border
* Transparent/dark surface
* Clear hover state

Examples:

```text
View Selected Work
Download CV
Contact Me
View Case Study
```

Button labels should be action-oriented.

---

# 25. Links

Links should have:

* obvious affordance
* subtle accent color
* hover state
* accessible focus state

Avoid decorative links that look like plain text.

---

# 26. Project Cards

Project cards should prioritize the project story.

Suggested structure:

```text
Project category
Project title

Short problem/solution description

Capabilities / technologies

View Case Study →
```

Hover interaction may include:

* subtle elevation
* border change
* small arrow movement
* image movement
* background shift

Keep it subtle.

---

# 27. Project Images

Use real project screenshots when available.

Image rules:

* optimize file size
* use modern formats where appropriate
* lazy-load below-the-fold images
* provide meaningful alt text
* use responsive image sizing

Do not use generic stock imagery unless genuinely useful.

---

# 28. Animation Philosophy

Animation should communicate:

* hierarchy
* continuity
* interaction
* feedback

Animation should not exist merely because it is technically possible.

---

# 29. Animation Intensity

Use three levels.

## Level 1 — Micro Interaction

Use frequently.

Examples:

* button hover
* link hover
* icon movement
* border transition

Duration:

```text
150–250ms
```

## Level 2 — Section / Component Motion

Use moderately.

Examples:

* section entrance
* project card reveal
* content fade/slide
* navigation transition

Duration:

```text
400–700ms
```

## Level 3 — Hero / Signature Motion

Use sparingly.

Examples:

* subtle hero visual
* data-inspired background
* major introductory transition

Only a few signature moments should use this level.

---

# 30. Preferred Animation Properties

Prefer animating:

* opacity
* transform
* scale
* translate
* rotate in small amounts

Avoid animating expensive layout properties whenever possible.

Prefer:

```text
transform
opacity
```

over frequent animation of:

```text
width
height
top
left
margin
padding
```

---

# 31. Animation Library

The project uses **Motion** for React animation when JavaScript-driven motion is justified.

Package:

```text
motion
```

React import:

```ts
import { motion } from "motion/react";
```

Use Motion selectively.

Use CSS transitions and CSS animations for simple effects such as:

- color changes
- opacity changes
- borders
- small transforms
- marquees
- simple hover states

Use Motion when it provides meaningful control for:

- orchestrated entrance sequences
- component-level interaction
- shared layout transitions
- controlled scroll-triggered reveals
- complex but lightweight UI transitions

Do not wrap every element in a Motion component.

Do not build an animation-heavy portfolio merely because Motion is available.

The objective is:

> **Purposeful motion with minimal runtime complexity.**

---

# 32. Reduced Motion

Support:

```text
prefers-reduced-motion
```

When enabled:

* reduce entrance animation
* disable large motion
* minimize parallax
* preserve usability
* retain necessary interaction feedback

---

# 33. Scroll Behavior

Use scroll-triggered animation sparingly.

Good:

* section fade/slide entrance
* project reveal
* timeline progression

Avoid:

* content that only appears after long scrolling
* excessive parallax
* forced scroll experiences
* scroll-jacking

Normal browser scrolling should remain intact.

---

# 34. Background Effects

Background effects should be lightweight.

Possible:

* subtle gradient glow
* grid
* noise texture
* radial light
* analytical geometry

Avoid:

* canvas particle systems
* WebGL backgrounds
* continuously animated backgrounds
* heavy shader effects

Any decorative background should never significantly affect page performance.

---


# 35. Modern UI Pattern Catalogue

The portfolio may use selected contemporary web interaction patterns when they improve communication, hierarchy, or visual identity.

These patterns are an approved design vocabulary, not a checklist.

The implementation must remain restrained.

## 35.1 CSS Marquee / Ticker

A marquee-style horizontal ticker may be used for:

- analytical tools
- technologies
- professional keywords
- short credential labels
- selected project capabilities

Preferred implementation:

```text
CSS animation
transform: translateX(...)
duplicated content for seamless looping
```

Do not use the deprecated HTML `<marquee>` element.

The marquee must:

- remain secondary to primary content
- use small or medium typography
- avoid excessive speed
- avoid large vertical space
- pause or reduce movement when appropriate
- support `prefers-reduced-motion`
- remain readable if animation is disabled

Recommended visual treatment:

```text
subtle border
muted text
small accent separators
monospace or compact typography where appropriate
```

A marquee should feel like a professional data/metadata rail, not a promotional banner.

## 35.2 Dynamic Text

Dynamic text treatments may be used for important content such as:

- hero supporting phrases
- section labels
- selected keywords
- short analytical statements

Permitted treatments include:

- text reveal
- clip-path reveal
- staggered word/line entrance
- subtle emphasis
- controlled opacity transitions

Do not animate long paragraphs or continuously mutate important copy.

The static text must remain understandable without animation.

## 35.3 Editorial Grid

Use asymmetric but intentional grid compositions when they improve storytelling.

Possible patterns:

```text
large feature + supporting content
2/3 + 1/3 composition
wide visual + narrow metadata rail
large project + compact secondary projects
```

The grid must preserve alignment and visual rhythm.

Avoid random asymmetry.

## 35.4 Bento-Style Composition

Bento-style grouping may be used selectively for:

- expertise
- analytical toolkit
- credentials
- project capabilities
- compact professional facts

Bento layouts should not turn the portfolio into a SaaS dashboard.

Guidelines:

- use a small number of purposeful blocks
- maintain a shared visual system
- avoid excessive card nesting
- avoid every block becoming a separate floating panel
- preserve editorial whitespace

## 35.5 Horizontal Content Rails

Horizontal scrolling may be used for:

- technology lists
- certification groups
- project media
- compact metadata collections

On desktop, the content should remain comfortably scannable.

On mobile, horizontal rails must:

- indicate additional content clearly
- preserve touch usability
- avoid accidental page-level horizontal overflow
- include sufficient spacing between items

## 35.6 Guided Scrolling

A subtle scroll-progress or section-progress treatment may be used when it helps visitors understand their position in the portfolio.

Possible implementations:

- minimal top progress indicator
- section progress markers
- subtle active-section navigation state
- small vertical journey indicator

Do not create scroll-jacking.

Normal browser scrolling must remain intact.

## 35.7 Signature Visual Treatment

The portfolio should have one or two recognizable visual details that create its own identity.

Examples:

- analytical grid motif
- technical annotation system
- data-axis inspired labels
- recurring blue accent line
- custom metadata treatment
- restrained numerical markers
- distinctive project index treatment

The goal is a coherent visual language rather than generic "AI portfolio" effects.

## 35.8 Motion Budget

The page must maintain a deliberate motion budget.

Avoid having multiple continuous animations competing for attention.

A practical implementation target is:

```text
Primary continuous animation:
0–2 systems per viewport/section

Primary signature animations:
1–3 across the complete page

Micro-interactions:
available where they improve usability
```

This is a design heuristic, not a rigid technical limit.

## 35.9 Mobile Simplification

Modern visual treatments must simplify on smaller screens.

Possible mobile reductions:

- slower or disabled marquee
- reduced decorative geometry
- reduced blur
- fewer simultaneous reveals
- simplified grids
- fewer hover-dependent behaviors
- lower animation frequency

The mobile experience should prioritize:

```text
readability
navigation
content
touch interaction
performance
```

## 35.10 Trend Filter

Before adding a contemporary pattern, evaluate:

```text
Does it improve communication?
Does it reinforce the Data Analyst identity?
Does it improve hierarchy or wayfinding?
Is it lightweight?
Is it accessible?
Does it remain useful without motion?
```

If the answer is mostly "no", do not use the effect.

---

# Modern Design Principle

Contemporary design should come from:

```text
Typography
Composition
Editorial hierarchy
Selective motion
Distinctive micro-details
Controlled interaction
```

—not from adding the maximum number of visual effects.

---

# 36. Performance Requirements

Performance is a first-class design requirement.

Target:

* fast first contentful paint
* fast largest contentful paint
* low cumulative layout shift
* minimal blocking JavaScript
* optimized images
* small bundle size
* minimal dependencies

The website should feel fast on mid-range mobile devices, not just high-end desktops.

---

# 37. JavaScript Strategy

Use JavaScript only when necessary.

Prefer:

* semantic HTML
* CSS
* CSS transitions
* native browser capabilities

Use React for actual application/component needs.

Do not build complicated client-side state systems for a mostly static portfolio.

---

# 38. Dependencies

Every dependency should have a clear purpose.

Preferred core dependencies:

* React
* TypeScript
* Vite
* Tailwind CSS
* Motion
* Lucide React or another lightweight icon library if needed

Do not install multiple libraries that solve the same problem.

Avoid unnecessary animation libraries.

Avoid unnecessary UI component libraries if they add bundle weight without meaningful benefit.

---

# 39. Images & Assets

Optimize all images.

Use:

* WebP
* AVIF where appropriate
* responsive image sizes
* lazy loading for below-the-fold images

Avoid loading oversized original images.

Use SVG for simple icons and vector graphics where appropriate.

---

# 40. Loading Strategy

The user should see meaningful content immediately.

Avoid:

* full-screen loading screens
* artificial delays
* long splash animations
* unnecessary preloaders

A portfolio should load directly into useful content.

---

# 41. Responsive Breakpoints

Use sensible breakpoints rather than device-specific hacks.

Suggested conceptual breakpoints:

```text
Mobile:
< 640px

Tablet:
640–1024px

Desktop:
1024–1280px

Large Desktop:
> 1280px
```

Adjust implementation according to actual layout needs.

Do not create excessive breakpoint-specific CSS.

---

# 42. Mobile Design

Mobile should be treated as a first-class experience.

Priorities:

* readable typography
* compact navigation
* clear CTA
* comfortable touch targets
* simple project cards
* reduced decorative effects
* reduced animation complexity
* fast loading

The mobile site should not feel like a compressed desktop site.

---

# 43. Accessibility

Implement:

* semantic HTML
* proper heading hierarchy
* accessible navigation
* keyboard navigation
* visible focus indicators
* accessible buttons
* accessible links
* meaningful alt text
* sufficient contrast
* reduced-motion support

Do not use color as the only way to communicate information.

---

# 44. Interaction States

Every interactive element should have appropriate:

* default
* hover
* focus
* active
* disabled where applicable

Focus states must remain visible for keyboard users.

---

# 45. Icons

Use one consistent icon family.

Prefer lightweight SVG icons.

Do not mix multiple icon styles.

Icons should support meaning rather than act as decoration.

---

# 46. Data Visualization

If charts or analytical visuals are included, they should serve a clear purpose.

They may demonstrate:

* analytical thinking
* statistical concepts
* project findings
* data storytelling

Charts must be:

* readable
* responsive
* lightweight
* accessible
* accurately labeled

Avoid decorative charts that imply real data when no verified data exists.

If illustrative or simulated data is used, label it clearly.

---

# Modern UI Pattern Catalogue

The portfolio may use selected contemporary web interaction patterns when they improve communication, hierarchy, or visual identity.

These patterns are an approved design vocabulary, not a checklist.

The implementation must remain restrained.

## 46.1 CSS Marquee / Ticker

A marquee-style horizontal ticker may be used for:

- analytical tools
- technologies
- professional keywords
- short credential labels
- selected project capabilities

Preferred implementation:

```text
CSS animation
transform: translateX(...)
duplicated content for seamless looping
Do not use the deprecated HTML <marquee> element.

The marquee must:

remain secondary to primary content
use small or medium typography
avoid excessive speed
avoid large vertical space
support prefers-reduced-motion
remain readable if animation is disabled

A marquee should feel like a professional data/metadata rail, not a promotional banner.

46.2 Dynamic Text

Dynamic text treatments may be used for important content such as:

hero supporting phrases
section labels
selected keywords
short analytical statements

Permitted treatments include:

text reveal
clip-path reveal
staggered word/line entrance
subtle emphasis
controlled opacity transitions

Do not animate long paragraphs or continuously mutate important copy.

The static text must remain understandable without animation.

46.3 Editorial Grid

Use asymmetric but intentional grid compositions when they improve storytelling.

Possible patterns:

large feature + supporting content
2/3 + 1/3 composition
wide visual + narrow metadata rail
large project + compact secondary projects

The grid must preserve alignment and visual rhythm.

Avoid random asymmetry.

46.4 Bento-Style Composition

Bento-style grouping may be used selectively for:

expertise
analytical toolkit
credentials
project capabilities
compact professional facts

Bento layouts should not turn the portfolio into a SaaS dashboard.

Guidelines:

use a small number of purposeful blocks
maintain a shared visual system
avoid excessive card nesting
avoid every block becoming a separate floating panel
preserve editorial whitespace
46.5 Horizontal Content Rails

Horizontal scrolling may be used for:

technology lists
certification groups
project media
compact metadata collections

On desktop, the content should remain comfortably scannable.

On mobile, horizontal rails must:

indicate additional content clearly
preserve touch usability
avoid accidental page-level horizontal overflow
include sufficient spacing between items
46.6 Guided Scrolling

A subtle scroll-progress or section-progress treatment may be used when it helps visitors understand their position in the portfolio.

Possible implementations:

minimal top progress indicator
section progress markers
subtle active-section navigation state
small vertical journey indicator

Do not create scroll-jacking.

Normal browser scrolling must remain intact.

46.7 Signature Visual Treatment

The portfolio should have one or two recognizable visual details that create its own identity.

Examples:

analytical grid motif
technical annotation system
data-axis inspired labels
recurring blue accent line
custom metadata treatment
restrained numerical markers
distinctive project index treatment

The goal is a coherent visual language rather than generic "AI portfolio" effects.

46.8 Motion Budget

The page must maintain a deliberate motion budget.

Avoid having multiple continuous animations competing for attention.

A practical implementation target is:

Primary continuous animation:
0–2 systems per viewport/section

Primary signature animations:
1–3 across the complete page

Micro-interactions:
available where they improve usability

This is a design heuristic, not a rigid technical limit.

46.9 Mobile Simplification

Modern visual treatments must simplify on smaller screens.

Possible mobile reductions:

slower or disabled marquee
reduced decorative geometry
reduced blur
fewer simultaneous reveals
simplified grids
fewer hover-dependent behaviors
lower animation frequency

The mobile experience should prioritize:

readability
navigation
content
touch interaction
performance
46.10 Trend Filter

Before adding a contemporary pattern, evaluate:

Does it improve communication?
Does it reinforce the Data Analyst identity?
Does it improve hierarchy or wayfinding?
Is it lightweight?
Is it accessible?
Does it remain useful without motion?

If the answer is mostly "no", do not use the effect.

Modern Design Principle

Contemporary design should come from:

Typography
Composition
Editorial hierarchy
Selective motion
Distinctive micro-details
Controlled interaction

—not from adding the maximum number of visual effects.

47. Performance Requirements

Performance is a first-class design requirement.

Target:

fast first contentful paint
fast largest contentful paint
low cumulative layout shift
minimal blocking JavaScript
optimized images
small bundle size
minimal dependencies

The website should feel fast on mid-range mobile devices, not just high-end desktops.

48. JavaScript Strategy

Use JavaScript only when necessary.

Prefer:

semantic HTML
CSS
CSS transitions
native browser capabilities

Use React for actual application/component needs.

Do not build complicated client-side state systems for a mostly static portfolio.

49. Dependencies

Every dependency should have a clear purpose.

Preferred core dependencies:

React
TypeScript
Vite
Tailwind CSS
Motion
Lucide React or another lightweight icon library if needed

Do not install multiple libraries that solve the same problem.

Avoid unnecessary animation libraries.

Avoid unnecessary UI component libraries if they add bundle weight without meaningful benefit.

50. Images & Assets

Optimize all images.

Use:

WebP
AVIF where appropriate
responsive image sizes
lazy loading for below-the-fold images

Avoid loading oversized original images.

Use SVG for simple icons and vector graphics where appropriate.

51. Loading Strategy

The user should see meaningful content immediately.

Avoid:

full-screen loading screens
artificial delays
long splash animations
unnecessary preloaders

A portfolio should load directly into useful content.

52. Responsive Breakpoints

Use sensible breakpoints rather than device-specific hacks.

Suggested conceptual breakpoints:

Mobile:
< 640px

Tablet:
640–1024px

Desktop:
1024–1280px

Large Desktop:
> 1280px

Adjust implementation according to actual layout needs.

Do not create excessive breakpoint-specific CSS.

53. Final Design Principle

The portfolio should feel:

Premium
Analytical
Editorial
Modern
Distinctive
Fast
Accessible

It should use contemporary interaction patterns selectively while preserving clarity and professional credibility.

The visual system must support the content rather than compete with it.


### One important note

The `development-plan.md` and `design-system.md` continuations above are **completion content I authored for this project**, not text that existed in the uploaded originals. I have separated that fact so we don't accidentally treat generated guidance as historical/source content.

So after you paste these:

**`agent-workflow.md` → complete**  
**`development-plan.md` → complete through #52**  
**`design-system.md` → complete through #53**

The factual source documents—`personal-profile.md`, `portfolio-brief.md`, `projects.md`, and `content.md`—were not part of this truncation issue.