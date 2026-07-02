export const nav = {
  brand: 'TEN SYSTEMS / PROPOSAL',
  links: [
    { label: 'The Problem', href: '#problem' },
    { label: 'The Model', href: '#model' },
    { label: 'The Flow', href: '#flow' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Commercial', href: '/commercial' },
  ],
  cta: 'Book a Walkthrough',
}

export const hero = {
  meta: {
    industry: 'Apparel Sourcing & Production',
    engagement: 'Custom Platform Build',
    stage: 'Proposal, Pre-Development',
    status: 'Scoping In Progress',
  },
  headline: [
    'TEN SYSTEMS.',
    'FROM THREE FACTORIES',
    'TO ONE CONTROL',
    'ROOM.',
  ],
  softLineIndex: 1,
  eyebrow: 'One-line value',
  body: {
    parts: [
      'From your own floor plus partners in ',
      { highlight: 'Bangladesh and Turkey' },
      ', to a ',
      { highlight: 'single command center' },
      ' that runs every order the same way — for every customer across Europe.',
    ],
  },
  buttons: [
    { label: 'See The Plan', variant: 'solid', href: '#capabilities' },
    { label: 'Book A Walkthrough', variant: 'outline-light', href: '#next' },
  ],
}

export const context = {
  eyebrow: 'The Context',
  body: 'Ten Fabrics sits between two worlds — a factory operator and a trusted sourcing partner. Some orders run through your own facility. Most are placed with manufacturing partners in Bangladesh and Turkey. Every one of them ships to a demanding customer base across Europe. None of that complexity should be visible to the people buying from you.',
  stats: [
    { num: 3, label: 'Sourcing Channels To Unify' },
    { num: 1, label: 'Point Of Control' },
    { num: 0, label: 'Direct Customer–Factory Contact' },
  ],
  tagRow: ['Customer', 'Admin', 'Factory Network', 'Europe'],
}

export const challenges = {
  id: 'problem',
  eyebrow: '01 — Where the friction is today',
  headline: ['SIX GAPS. ONE', 'COORDINATION', 'PROBLEM.'],
  intro:
    "None of this is a people problem — it's a systems gap. Every one of these gets closed by routing all of it through a single, structured platform.",
  cards: [
    { n: '01', title: 'Zero Order Visibility', body: 'Customers have to ask you for status instead of seeing it live.' },
    { n: '02', title: 'Manual Factory Coordination', body: 'Your own floor and two overseas partners get tracked differently, by hand.' },
    { n: '03', title: 'No Data Firewall', body: "Customer identity and factory identity aren't formally kept apart." },
    { n: '04', title: 'Scattered Communication', body: 'Delays, disputes, and change requests get handled ad hoc, wherever the message came in.' },
    { n: '05', title: 'Inconsistent Reporting', body: 'Each sourcing channel reports progress in its own format, at its own pace.' },
    { n: '06', title: 'No Unified Timeline', body: 'Approvals happen separately per order, per channel — with no single source of truth.' },
  ],
}

export const solution = {
  id: 'model',
  eyebrow: '02 — The proposed model',
  headlineLine1: 'ONE',
  headlineAccent: 'CONTROL ROOM.',
  headlineRest: ['EVERY FACTORY', 'ROUTES THROUGH', 'IT THE SAME WAY.'],
  body: "We're proposing Ten Systems be built around one rule: Admin is the only party who talks to both sides. It won't matter if an order goes to your own floor or a partner in Dhaka or Istanbul — the same process, the same data protection, and the same one-click approval apply, every time.",
  miniGrid: [
    { tag: 'Unified Ops', desc: 'One system, three sourcing channels.' },
    { tag: 'Real-Time Status', desc: 'Live across every factory.' },
    { tag: 'Zero Direct Contact', desc: 'Customer and factory never meet.' },
    { tag: 'Built Across Borders', desc: 'Same rules, Dhaka to Istanbul to your own floor.' },
  ],
}

export const flow = {
  id: 'flow',
  eyebrow: '03 — The order flow',
  headline: ['FOUR STEPS.', 'ONE RAIL —', "WHOEVER'S", 'PRODUCING.'],
  intro: 'A straight line from browse to doorstep, with Admin as the only handoff point along the way.',
  steps: [
    { n: '01', title: 'Design & Order', body: 'Customer designs or customizes, previews live, pays, and submits.' },
    { n: '02', title: 'Assign & Confirm', body: 'Admin selects the factory — own floor, Bangladesh, or Turkey — and it confirms availability.' },
    { n: '03', title: 'Produce', body: 'Procurement → cutting → picking → QC, tracked stage by stage.' },
    { n: '04', title: 'Deliver', body: 'Dispatch, with real-time tracking flowing back to the customer.' },
  ],
}

export const capabilities = {
  id: 'capabilities',
  eyebrow: "04 — What we're proposing to build",
  headline: ['EIGHT', 'CAPABILITIES.', 'ONE PLATFORM.'],
  intro: 'Every capability maps to a friction point from Section 01 — not a generic feature checklist.',
  cards: [
    { n: '01/08', title: 'Real-Time Mockup Engine', body: 'Live preview for AI prints and full custom builds.', icon: 'mockup' },
    { n: '02/08', title: 'AI Design Generation', body: 'Customer-generated artwork, applied straight to blank apparel.', icon: 'ai' },
    { n: '03/08', title: 'Factory Network Assignment', body: 'Route orders to your floor or partner factories, manually, order by order.', icon: 'factory' },
    { n: '04/08', title: 'Availability Check Loop', body: 'No promise reaches the customer until the factory confirms it.', icon: 'clock' },
    { n: '05/08', title: 'Granular Status Pipeline', body: 'Intake → procurement → production → dispatch, tracked at every sub-step.', icon: 'pipeline' },
    { n: '06/08', title: 'Data Isolation Middleware', body: 'Structural separation between customer and factory data.', icon: 'shield' },
    { n: '07/08', title: 'Ghost Relay Messaging', body: 'All communication routed and mediated through Admin.', icon: 'message' },
    { n: '08/08', title: 'Financial & Dispute Tags', body: 'Payment status and disputes tracked against every order.', icon: 'payment' },
  ],
}

export const dataIsolation = {
  eyebrow: '05 — Data isolation',
  headline: ['TWO SIDES.', 'NEVER ONE', 'VIEW.'],
  intro:
    "Right now, sourcing complexity and customer detail can end up mixed in the same conversation. We're proposing a structural fix — not a policy, a middleware layer that strips identity before anything crosses sides.",
  checklist: [
    'Factory never sees price',
    'Factory never sees customer identity',
    'Customer never sees sourcing origin',
    'Customer never sees factory costs',
  ],
  relayPanel: {
    title: 'ADMIN / RELAY — ORDER #EU-1042',
    rows: [
      { n: '01', label: 'Customer Details' },
      { n: '02', label: 'Commercial Terms' },
      { n: '03', label: 'Production Spec' },
      { n: '04', label: 'Factory Response' },
    ],
  },
  footerLabels: ['Before · Mixed Data', 'After · Structured Isolation'],
}

export const roles = {
  eyebrow: '06 — Three lenses, one platform',
  headline: ['THREE ROLES.', 'ONE SOURCE', 'OF TRUTH.'],
  intro: 'Each side gets a dashboard built for how they actually work — none of them see more than they need to.',
  roles: [
    { n: '01', name: 'Customer', tagline: 'Design. Order. Track.', bullets: ['Real-time mockup tool', 'Live order tracking', 'Never sees sourcing origin'] },
    { n: '02', name: 'Admin', tagline: 'Assign. Approve. Control.', bullets: ['Full visibility across all 3 channels', 'One-click factory approval', 'Owns every conversation'] },
    { n: '03', name: 'Factory', tagline: 'Receive. Produce. Update.', bullets: ['Production-only specs', 'Structured status pipeline', 'Zero customer contact'] },
  ],
}

export const impact = {
  eyebrow: '07 — What this is designed to unlock',
  headline: ["WHAT WE'RE", 'BUILDING', 'TOWARD.'],
  intro: 'These are the outcomes the platform is designed to produce — the real numbers will come from your first weeks running on it.',
  targets: [
    { n: '01', num: 1, suffix: '', label: 'Control point across 3 sourcing channels' },
    { n: '02', num: 0, suffix: '', label: 'Direct customer–factory contact' },
    { n: '03', num: 100, suffix: '%', label: 'Data-isolated by design, not policy' },
    { n: '04', num: null, staticVal: 'EU', label: 'Grade experience, on every order' },
  ],
  checks: [
    'Coordination overhead moves into the system, not onto more headcount.',
    'A consistent, premium experience for European customers, regardless of sourcing origin.',
    'Confidence to scale outsourced capacity without losing commercial control.',
  ],
}

export const quote = {
  eyebrow: 'One-line value proposition',
  quote: ["One control room for every order —", "wherever it's made."],
}

export const decisions = {
  id: 'decisions',
  eyebrow: '08 — Before we build',
  headline: ['FIVE THINGS', 'WORTH LOCKING', 'IN TOGETHER.'],
  intro:
    "Nothing below is a gap in the plan — it's a decision only you can make well, and we'd rather make it with you now than assume it later.",
  items: [
    { n: '01', title: 'How granular should customer-facing status be?', body: 'Top-level stages only (Pending, Processing, Production, Shipped), or more detail than that?' },
    { n: '02', title: 'Mockup tool: 2D flat preview or 3D render?', body: '2D is faster to build and ship; 3D adds real engineering time before v1.' },
    { n: '03', title: 'Can a single order split across factories?', body: 'Including a split between your own floor and a partner facility, on the same order.' },
    { n: '04', title: 'Combined or per-channel inventory view?', body: 'One view across own floor, Bangladesh, and Turkey — or separated by channel.' },
    { n: '05', title: 'Any Europe-specific requirements from day one?', body: 'Currency display, language, or labeling/compliance needs worth building in early.' },
  ],
}

export const commercial = {
  id: 'commercial',
  eyebrow: 'Commercial',
  headlinePre: ["LET'S BUILD THE"],
  headlineAccent: 'CONTROL ROOM',
  headlinePost: ['YOUR SOURCING', 'ACTUALLY RUNS ON.'],
  body: "Tell us which decisions in Section 08 you want to finalize first. We'll turn it into a build timeline your team can start against.",
}

export const finalCta = commercial

export const footer = {
  lines: ['BlackMatter Technologies', 'Ten Systems — Platform Proposal', 'Prepared for Ten Fabrics · 2026'],
}
