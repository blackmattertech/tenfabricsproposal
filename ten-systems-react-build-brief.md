# TEN SYSTEMS — React Build Brief
### Paste this whole document into Cursor as your build prompt. It's written to be self-contained — Cursor shouldn't need to guess anything.

---

## 0. What you're building

A single-page, scrollable React site presenting the "Ten Systems" platform proposal to the client (Ten Fabrics). It replaces a static HTML prototype. Same visual system, but now with proper componentization, scroll-driven text/reveal animation, and production-quality motion — the kind of site that itself demonstrates the studio's craft.

**Tone of the finished product:** industrial-editorial, confident, unshowy. Motion should feel *engineered*, not decorative — like a control panel coming online, not a marketing confetti cannon.

---

## 1. Tech stack

```
- React 18 + Vite
- Tailwind CSS (utility layer) + a small set of CSS custom properties for brand tokens
- Framer Motion — component-level animation, page transitions, hover/tap states
- GSAP + ScrollTrigger — scroll-driven effects (pin, scrub, parallax, split-text reveals)
- Lenis (studio-freight/lenis) — smooth scroll, required for GSAP ScrollTrigger to feel right
- react-intersection-observer — lightweight viewport triggers where GSAP is overkill
- No CMS. Content lives in a single /src/content/copy.js file as structured JS objects (see Section 6) — this makes future copy edits trivial without touching components.
```

Install:
```bash
npm create vite@latest ten-systems -- --template react
cd ten-systems
npm install framer-motion gsap @studio-freight/lenis react-intersection-observer
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 2. Brand guidelines

### 2.1 Color tokens
Define these as CSS custom properties in `:root` AND as Tailwind theme extensions (keep both in sync).

| Token | Hex | Usage |
|---|---|---|
| `--cream` | `#F2F0E9` | Primary background (light sections) |
| `--cream-2` | `#EAE7DC` | Hover/alt background on light sections |
| `--ink` | `#111110` | Primary text on light, near-black |
| `--ink-soft` | `#6B6A63` | Secondary/muted text on light |
| `--line` | `#D8D4C6` | Hairline borders on light sections |
| `--orange` | `#FF4A17` | Sole accent color. Used sparingly and deliberately — CTAs, eyebrows, highlights, one hero accent per section max |
| `--dark` | `#0A0A0A` | Dark section background |
| `--dark-2` | `#151513` | Card/panel background on dark sections |
| `--line-dark` | `rgba(255,255,255,0.14)` | Hairline borders on dark sections |
| `--white` | `#F7F6F2` | Primary text on dark sections |

**Rule:** Orange never appears as a background fill larger than a button or the single dedicated quote section. It is a *pointer*, not a wash. If you find yourself reaching for orange a third time in one viewport, stop and reconsider.

### 2.2 Typography
| Role | Typeface | Source | Weight | Usage |
|---|---|---|---|---|
| Display / Headlines | **Archivo Black** | Google Fonts | 400 (only weight) | All H1/H2, always uppercase, tight tracking (`-0.01em`), line-height `0.98` |
| Body | **Inter** | Google Fonts | 400/500/600/700 | Paragraphs, list items, buttons' visible label text (buttons use mono, see below) |
| Mono / Labels | **IBM Plex Mono** | Google Fonts | 400/500/600 | Eyebrows, nav, meta rows, buttons, numbered tags — always uppercase, letter-spacing `0.08em`, ~12.5px |

**Type scale (fluid, use `clamp()`):**
```css
--fs-hero:   clamp(2.75rem, 6.4vw, 6rem);     /* hero H1 */
--fs-h2:     clamp(2.1rem, 4.2vw, 3.6rem);    /* section headlines */
--fs-h3:     clamp(1.3rem, 2vw, 1.8rem);      /* card/role titles */
--fs-body:   1.0625rem;                        /* 17px paragraphs */
--fs-small:  0.875rem;                         /* 14px card copy */
--fs-mono:   0.78rem;                          /* 12.5px labels */
```

### 2.3 Spacing & grid
- Max content width: `1440px`, side padding `64px` desktop / `32px` tablet / `20px` mobile.
- Section vertical rhythm: `120px` top/bottom padding desktop, `80px` mobile.
- Grid: CSS Grid throughout, never flexbox for layout structure (flexbox only for inline clusters like button groups, nav links). Card grids sit on hairline borders — border-top + border-left on the grid container, border-right + border-bottom on each cell, so lines don't double up.

### 2.4 Iconography
Line icons only, `stroke-width: 1.6–2.5`, no fills except small checkmarks/dots. Keep a single consistent icon set — build custom inline SVGs (already spec'd in the section content below) rather than pulling in an icon library, so stroke weight stays perfectly consistent with the mono/hairline aesthetic.

### 2.5 Voice
Second person, direct, no exclamation points, no marketing fluff ("revolutionary," "seamless," "cutting-edge" — banned words). Present findings as a studio that understands the client's actual business, not a vendor pitching features. Sentences are short. Fragments are fine for headlines.

---

## 3. Motion language — the core of this build

This is the part that needs the most precision. Five motion primitives, used consistently. Don't invent new ones per-section.

### Primitive 1 — "Reveal on enter" (default for almost everything)
Every major block (section headline, paragraph, card grid, image) starts at `opacity: 0, y: 24px` and animates to `opacity: 1, y: 0` on scroll entry.
- Trigger: GSAP ScrollTrigger, `start: "top 85%"`, `once: true` (don't replay on scroll back up — replaying reveals on every scroll direction reads as cheap).
- Duration: `0.7s`, ease: `power2.out`.
- Stagger: when revealing a *group* of siblings (e.g. the 6 challenge cards, the 8 capability cards), stagger by `0.06s` per child, not all at once.

### Primitive 2 — "Split-text headline reveal" (hero + every major H2)
Headlines don't just fade — they reveal per-line (not per-character; per-character reads as gimmicky at this scale).
- Split each headline into its visual lines (use GSAP SplitText or a manual line-wrap split — SplitText is a paid GSAP plugin, so if not using GSAP Club membership, implement a manual split by wrapping each `<span>` per line in a container with `overflow: hidden`, and animate the inner span from `translateY(110%)` to `translateY(0)`).
- Stagger per line: `0.08s`.
- Duration per line: `0.8s`, ease: `power3.out`.
- This is the signature move of the site — use it on the hero H1 and every section H2, nowhere else (not on card titles — that would overuse it).

### Primitive 3 — "Magnetic button"
All `.btn` elements (solid and outline) get a subtle cursor-follow effect on desktop only (disable on touch):
- On mousemove within button bounds, translate the button up to `8px` toward the cursor position (dampened, use a spring: `stiffness: 150, damping: 15` via Framer Motion `useSpring`).
- On mouse leave, spring back to `0,0`.
- Arrow icon inside button moves independently, slightly more (translate `10px` max) for a layered parallax feel.

### Primitive 4 — "Counting numbers" (impact/stat sections)
Any large numeral (context stats: `3`, `1`, `0`; impact targets: `1`, `0`, `100%`, `EU`) counts up from `0` to its target value when it scrolls into view, not just fades in.
- Use a simple `requestAnimationFrame` counter or Framer Motion's `useMotionValue` + `animate()`.
- Duration: `1.1s`, ease: `easeOut`.
- For non-numeric targets like "EU", skip counting — just do Primitive 1 reveal.

### Primitive 5 — "Scroll-scrubbed diagram" (the sourcing-network SVG in the Context section)
The connecting lines in the world/network diagram (Own Floor → Admin → Bangladesh/Turkey → Europe) draw themselves as the user scrolls through that section, rather than appearing instantly.
- Use `stroke-dasharray`/`stroke-dashoffset` animated via GSAP ScrollTrigger with `scrub: 1` (tied directly to scroll position, not time-based) so it feels mechanical/diagrammatic, not like a generic entrance animation.
- The three destination nodes (dots) pop in with a small scale bounce (`scale: 0 → 1.15 → 1`) timed to when their connecting line finishes drawing.

### What NOT to do
- No parallax on body text (kills readability).
- No infinite/looping ambient animation anywhere except the single "scoping in progress" status pulse dot (already subtle, keep it).
- No scroll-jacking / full pinned sections — this is a proposal document people need to read and possibly print/share; respect natural scroll.
- Respect `prefers-reduced-motion: reduce` — disable all of the above (reveals become instant opacity swaps, split-text becomes a normal fade, counters become static final values, magnetic buttons disabled, SVG draws instantly).

---

## 4. Component architecture

```
src/
  content/
    copy.js              // all section copy as exported objects, see Section 6
  components/
    layout/
      Header.jsx          // sticky nav, mobile menu toggle
      Footer.jsx
    ui/
      Button.jsx           // variant: 'solid' | 'outline-light' | 'outline-dark', magnetic behavior built in
      Eyebrow.jsx           // small mono label + orange square, dark/light variant prop
      RevealText.jsx        // wraps children, applies Primitive 1 (fade/translate on scroll)
      SplitHeadline.jsx     // wraps a headline string/array of lines, applies Primitive 2
      CountUp.jsx           // applies Primitive 4 to a numeric target
      Highlight.jsx         // inline <mark>-style orange background wrapper for emphasized phrases in body copy
    sections/
      Hero.jsx
      Context.jsx           // the dark split section with the sourcing-network SVG (Primitive 5 lives here)
      Challenges.jsx        // 01 — six-card grid
      Solution.jsx           // 02 — dark section, 2x2 mini-grid
      Flow.jsx                // 03 — four-step row
      Capabilities.jsx        // 04 — eight-card grid
      DataIsolation.jsx        // 05 — split layout with paper-stack + relay panel mockup
      Roles.jsx                 // 06 — three-column role cards
      Impact.jsx                 // 07 — stat row + checklist (CountUp lives here)
      Quote.jsx                   // full-bleed orange quote section
      Decisions.jsx                // 08 — numbered alignment list
      FinalCTA.jsx                   // dark closing section
  hooks/
    useLenis.js            // initializes smooth scroll once at app root
    useMagnetic.js          // reusable magnetic-hover hook for Button.jsx
  App.jsx                    // mounts Header, all sections in order, Footer
  main.jsx
  index.css                    // Tailwind directives + CSS custom properties (Section 2.1/2.2 tokens)
```

**Build order for Cursor:** tokens/CSS variables → `Button`, `Eyebrow`, `RevealText`, `SplitHeadline`, `Highlight`, `CountUp` (the atoms) → `Header`/`Footer` → sections top to bottom → wire up `useLenis` at the App root last, then do a full scroll-through pass tuning trigger points.

---

## 5. Content structure & copy (section by section)

Store this as `src/content/copy.js`. Each section below includes **content** and its **animation notes** — apply the primitives from Section 3 exactly as annotated.

### Nav
```
brand: "TEN SYSTEMS / PROPOSAL"
links: ["The Problem", "The Model", "The Flow", "Capabilities", "Next Steps"]
cta: "Book a Walkthrough"
```
*Animation:* none on load beyond a simple `0.4s` fade-in of the whole header; nav underline draws left-to-right on link hover (`scaleX: 0 → 1`, transform-origin left).

---

### Hero
```
meta: {
  industry: "Apparel Sourcing & Production",
  engagement: "Custom Platform Build",
  stage: "Proposal, Pre-Development",
  status: "Scoping In Progress"   // pulsing dot, orange
}
headline: [
  "TEN SYSTEMS.",
  "FROM THREE FACTORIES",   // rendered in --ink-soft, not full black
  "TO ONE CONTROL",
  "ROOM."
]
eyebrow: "One-line value"
body: "From your own floor plus partners in {Bangladesh and Turkey}, to a {single command center} that runs every order the same way — for every customer across Europe."
  // {...} = <Highlight> wrapped phrases
buttons: ["See The Plan", "Book A Walkthrough"]
```
*Animation:* `SplitHeadline` (Primitive 2) on the four headline lines, staggered on page load (not scroll-triggered, since it's above the fold — trigger on mount with a `0.2s` initial delay so fonts have time to load). Meta row and hero-side content use Primitive 1, delayed to start after the headline finishes (~`0.9s` in).

---

### Context (dark, sourcing network diagram)
```
eyebrow: "The Context"
body: "Ten Fabrics sits between two worlds — a factory operator and a trusted sourcing partner. Some orders run through your own facility. Most are placed with manufacturing partners in Bangladesh and Turkey. Every one of them ships to a demanding customer base across Europe. None of that complexity should be visible to the people buying from you."
stats: [
  { num: 3, label: "Sourcing Channels To Unify" },
  { num: 1, label: "Point Of Control" },
  { num: 0, label: "Direct Customer–Factory Contact" }
]
tagRow: ["Customer", "Admin", "Factory Network", "Europe"]  // separated by orange ✳
diagram_nodes: ["Own Floor", "Bangladesh", "Admin — Ten Fabrics", "Europe"]
```
*Animation:* SVG diagram uses Primitive 5 (scroll-scrubbed line drawing) as the user scrolls through this section. Stats use `CountUp` (Primitive 4), triggered once the diagram's draw animation is ~60% complete (chain the trigger, don't fire independently — it should feel like one continuous sequence, network completes → numbers tally).

---

### 01 — Challenges
```
eyebrow: "01 — Where the friction is today"
headline: ["SIX GAPS. ONE", "COORDINATION", "PROBLEM."]
intro: "None of this is a people problem — it's a systems gap. Every one of these gets closed by routing all of it through a single, structured platform."
cards: [
  { n: "01", title: "Zero Order Visibility", body: "Customers have to ask you for status instead of seeing it live." },
  { n: "02", title: "Manual Factory Coordination", body: "Your own floor and two overseas partners get tracked differently, by hand." },
  { n: "03", title: "No Data Firewall", body: "Customer identity and factory identity aren't formally kept apart." },
  { n: "04", title: "Scattered Communication", body: "Delays, disputes, and change requests get handled ad hoc, wherever the message came in." },
  { n: "05", title: "Inconsistent Reporting", body: "Each sourcing channel reports progress in its own format, at its own pace." },
  { n: "06", title: "No Unified Timeline", body: "Approvals happen separately per order, per channel — with no single source of truth." }
]
```
*Animation:* `SplitHeadline` on headline. Cards use Primitive 1 with the 0.06s stagger, grid-order (left-to-right, top-to-bottom). On hover: card background shifts to `--cream-2` over `0.2s`, and the card number (top-left) nudges up `2px` — a small, quiet acknowledgment, not a bounce.

---

### 02 — Solution (dark)
```
eyebrow: "02 — The proposed model"
headline_line1: "ONE"
headline_accent: "CONTROL ROOM."   // orange
headline_rest: ["EVERY FACTORY", "ROUTES THROUGH", "IT THE SAME WAY."]
body: "We're proposing Ten Systems be built around one rule: Admin is the only party who talks to both sides. It won't matter if an order goes to your own floor or a partner in Dhaka or Istanbul — the same process, the same data protection, and the same one-click approval apply, every time."
miniGrid: [
  { tag: "Unified Ops", desc: "One system, three sourcing channels." },
  { tag: "Real-Time Status", desc: "Live across every factory." },
  { tag: "Zero Direct Contact", desc: "Customer and factory never meet." },
  { tag: "Built Across Borders", desc: "Same rules, Dhaka to Istanbul to your own floor." }
]
```
*Animation:* Standard split-headline + Primitive 1 stagger on mini-grid cells.

---

### 03 — Flow
```
eyebrow: "03 — The order flow"
headline: ["FOUR STEPS.", "ONE RAIL —", "WHOEVER'S", "PRODUCING."]
intro: "A straight line from browse to doorstep, with Admin as the only handoff point along the way."
steps: [
  { n: "01", title: "Design & Order", body: "Customer designs or customizes, previews live, pays, and submits." },
  { n: "02", title: "Assign & Confirm", body: "Admin selects the factory — own floor, Bangladesh, or Turkey — and it confirms availability." },
  { n: "03", title: "Produce", body: "Procurement → cutting → picking → QC, tracked stage by stage." },
  { n: "04", title: "Deliver", body: "Dispatch, with real-time tracking flowing back to the customer." }
]
```
*Animation:* Steps reveal left-to-right with Primitive 1 (stagger `0.1s`, slightly longer than card grids since there are only 4 and the left-to-right motion should read as a literal timeline/rail). Consider a thin horizontal line beneath the row that draws left-to-right (`scaleX`) as the steps reveal, reinforcing "one rail."

---

### 04 — Capabilities
```
eyebrow: "04 — What we're proposing to build"
headline: ["EIGHT", "CAPABILITIES.", "ONE PLATFORM."]
intro: "Every capability maps to a friction point from Section 01 — not a generic feature checklist."
cards: [
  { n: "01/08", title: "Real-Time Mockup Engine", body: "Live preview for AI prints and full custom builds." },
  { n: "02/08", title: "AI Design Generation", body: "Customer-generated artwork, applied straight to blank apparel." },
  { n: "03/08", title: "Factory Network Assignment", body: "Route orders to your floor or partner factories, manually, order by order." },
  { n: "04/08", title: "Availability Check Loop", body: "No promise reaches the customer until the factory confirms it." },
  { n: "05/08", title: "Granular Status Pipeline", body: "Intake → procurement → production → dispatch, tracked at every sub-step." },
  { n: "06/08", title: "Data Isolation Middleware", body: "Structural separation between customer and factory data." },
  { n: "07/08", title: "Ghost Relay Messaging", body: "All communication routed and mediated through Admin." },
  { n: "08/08", title: "Financial & Dispute Tags", body: "Payment status and disputes tracked against every order." }
]
```
*Animation:* Same as Challenges grid — Primitive 1, staggered.

---

### 05 — Data Isolation
```
eyebrow: "05 — Data isolation"
headline: ["TWO SIDES.", "NEVER ONE", "VIEW."]
intro: "Right now, sourcing complexity and customer detail can end up mixed in the same conversation. We're proposing a structural fix — not a policy, a middleware layer that strips identity before anything crosses sides."
checklist: [
  "Factory never sees price",
  "Factory never sees customer identity",
  "Customer never sees sourcing origin",
  "Customer never sees factory costs"
]
relayPanel: {
  title: "ADMIN / RELAY — ORDER #EU-1042",
  rows: [
    { n: "01", label: "Customer Details" },
    { n: "02", label: "Commercial Terms" },
    { n: "03", label: "Production Spec" },
    { n: "04", label: "Factory Response" }
  ]
}
footerLabels: ["Before · Mixed Data", "After · Structured Isolation"]
```
*Animation:* This is the second signature moment (after the hero split-text). Sequence on scroll-enter:
1. The "messy paper stack" (left visual) is visible at rest.
2. As the section scrolls into ~50% view, the relay panel (right, dark) slides/fades in (Primitive 1).
3. Each of the 4 relay rows reveals its checkmark one at a time, `0.15s` apart, *after* the panel itself has appeared — like a system processing a checklist, not all at once.
Use GSAP timeline for this sequencing rather than four independent ScrollTriggers, so the order is guaranteed.

---

### 06 — Roles
```
eyebrow: "06 — Three lenses, one platform"
headline: ["THREE ROLES.", "ONE SOURCE", "OF TRUTH."]
intro: "Each side gets a dashboard built for how they actually work — none of them see more than they need to."
roles: [
  { n: "01", name: "Customer", tagline: "Design. Order. Track.", bullets: ["Real-time mockup tool", "Live order tracking", "Never sees sourcing origin"] },
  { n: "02", name: "Admin", tagline: "Assign. Approve. Control.", bullets: ["Full visibility across all 3 channels", "One-click factory approval", "Owns every conversation"] },
  { n: "03", name: "Factory", tagline: "Receive. Produce. Update.", bullets: ["Production-only specs", "Structured status pipeline", "Zero customer contact"] }
]
```
*Animation:* Primitive 1, staggered left-to-right across the 3 columns (`0.1s` apart). Role name (large Archivo Black) gets its own `SplitHeadline`-style reveal since it's a headline-weight element even inside a card.

---

### 07 — Impact
```
eyebrow: "07 — What this is designed to unlock"
headline: ["WHAT WE'RE", "BUILDING", "TOWARD."]
intro: "These are the outcomes the platform is designed to produce — the real numbers will come from your first weeks running on it."
targets: [
  { n: "01", num: 1, suffix: "", label: "Control point across 3 sourcing channels" },
  { n: "02", num: 0, suffix: "", label: "Direct customer–factory contact" },
  { n: "03", num: 100, suffix: "%", label: "Data-isolated by design, not policy" },
  { n: "04", num: null, staticVal: "EU", label: "Grade experience, on every order" }
]
checks: [
  "Coordination overhead moves into the system, not onto more headcount.",
  "A consistent, premium experience for European customers, regardless of sourcing origin.",
  "Confidence to scale outsourced capacity without losing commercial control."
]
```
*Animation:* `CountUp` (Primitive 4) on the three numeric targets, staggered `0.15s` apart so they don't all tick simultaneously (feels more like a dashboard populating than a single event). "EU" fades in normally (Primitive 1) with no counting.

---

### Quote (orange, full-bleed)
```
eyebrow: "One-line value proposition"
quote: "One control room for every order — wherever it's made."
```
*Animation:* `SplitHeadline` in the reverse palette (ink-on-orange). This section is the visual "exhale" of the page — keep the motion identical to other headline reveals, don't add anything extra just because the background is different.

---

### 08 — Decisions
```
eyebrow: "08 — Before we build"
headline: ["FIVE THINGS", "WORTH LOCKING", "IN TOGETHER."]
intro: "Nothing below is a gap in the plan — it's a decision only you can make well, and we'd rather make it with you now than assume it later."
items: [
  { n: "01", title: "How granular should customer-facing status be?", body: "Top-level stages only (Pending, Processing, Production, Shipped), or more detail than that?" },
  { n: "02", title: "Mockup tool: 2D flat preview or 3D render?", body: "2D is faster to build and ship; 3D adds real engineering time before v1." },
  { n: "03", title: "Can a single order split across factories?", body: "Including a split between your own floor and a partner facility, on the same order." },
  { n: "04", title: "Combined or per-channel inventory view?", body: "One view across own floor, Bangladesh, and Turkey — or separated by channel." },
  { n: "05", title: "Any Europe-specific requirements from day one?", body: "Currency display, language, or labeling/compliance needs worth building in early." }
]
```
*Animation:* List rows reveal top-to-bottom, Primitive 1, `0.08s` stagger — deliberately calmer than the card grids, since this section is meant to read as a considered list, not a showcase grid.

---

### Final CTA (dark)
```
eyebrow: "Next steps"
headline_pre: ["LET'S BUILD THE"]
headline_accent: "CONTROL ROOM"   // orange
headline_post: ["YOUR SOURCING", "ACTUALLY RUNS ON."]
body: "Tell us which decisions in Section 08 you want to finalize first. We'll turn it into a build timeline your team can start against."
buttons: ["Start The Build", "View Open Questions"]
```
*Animation:* `SplitHeadline` + Primitive 1. This is the last motion moment on the page — let it be the calmest, most confident version of the reveal (no extra flourish, it should land like a closing statement).

---

### Footer
```
["BlackMatter Technologies", "Ten Systems — Platform Proposal", "Prepared for Ten Fabrics · 2026"]
```
*Animation:* none — footer should feel like it's already "there," not performing.

---

## 6. Responsive rules
- Breakpoints: `1080px` (tablet — grids drop from 3/4 columns to 2), `720px` (mobile — grids drop to 1 column, nav becomes slide-in drawer, magnetic button effect disabled entirely).
- On mobile, disable Primitive 5 (scroll-scrubbed SVG draw) and replace with a simple static reveal — scroll-scrubbing on small viewports with variable scroll speed feels janky.
- Split-text headline reveals still run on mobile but reduce stagger to `0.05s` per line (screens are narrower, lines wrap differently, keep total reveal time roughly constant).

## 7. Accessibility & performance
- Respect `prefers-reduced-motion: reduce` globally — wrap all GSAP/Framer Motion triggers in a check; when true, set all animated elements to their end-state instantly.
- All interactive elements (`Button`, nav links) need visible `:focus-visible` states — 2px orange outline, 3px offset, matching the static-HTML prototype.
- Lazy-init GSAP ScrollTrigger instances only after Lenis is ready to avoid scroll-position desync on load.
- Preload the three Google Fonts with `<link rel="preload">` for Archivo Black and IBM Plex Mono specifically (they're used in the very first paint — hero headline and eyebrow) to avoid a flash of unstyled text during the hero's on-mount split-text animation.
- Target Lighthouse performance ≥ 90 on mobile — this means: no unoptimized SVG (inline and minified), no motion library loaded for content that's never animated, code-split if the bundle grows past ~250kb gzipped.

## 8. Acceptance checklist (Cursor should self-verify against this before calling the build done)
- [ ] Every section headline uses `SplitHeadline`, no exceptions, no plain `<h2>` text
- [ ] Orange never fills more than a button or the dedicated Quote section background
- [ ] All numeric stats count up, not just fade in
- [ ] Magnetic button effect works on desktop, is fully disabled (not just visually inert — actually removed from the event listeners) on touch devices
- [ ] `prefers-reduced-motion` turns every animation into an instant end-state
- [ ] Mobile nav opens/closes via the toggle, closes on link click
- [ ] Data Isolation section's relay-panel checklist animates sequentially, not simultaneously
- [ ] No layout shift (CLS) caused by fonts loading late — reserve space, preload critical fonts
- [ ] Site scrolls at a native, un-hijacked pace (Lenis smoothing only, no pinned/scrubbed full sections)
