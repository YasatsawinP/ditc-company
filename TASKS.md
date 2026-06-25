# TASKS.md — DITC Company Landing Page

## How to use

Tell Claude Code one task at a time:

> "Read CONTEXT.md and TASKS.md then complete TASK-XX."

Confirm each task is done before moving to the next.
Never skip tasks — each task's output is required by the next.

---

## ⚠️ PHASE 2 CRITICAL RULE — READ BEFORE EVERY TASK

**Mobile version is FROZEN. Do NOT touch it.**

- Phase 1 (Mobile 440px) is 100% complete and locked.
- Phase 2 = **add `lg:` classes only** — nothing else.
- NEVER delete, rename, or reorder any existing class that has no `lg:` prefix.
- NEVER change any value that doesn't have a `lg:` prefix.
- If a class already exists (mobile) → leave it exactly as-is, append `lg:` variant after it.
- After every task: open DevTools → set viewport to 440px → verify mobile is pixel-perfect unchanged.
- If mobile looks different after your edit → you broke it → revert and try again.

**Example of correct approach:**
```tsx
// BEFORE (mobile only)
<div className="grid grid-cols-2 gap-4 py-12 px-4">

// AFTER (Phase 2 — desktop added, mobile untouched)
<div className="grid grid-cols-2 gap-4 py-12 px-4 lg:grid-cols-4 lg:gap-8 lg:py-20">
```

**Example of WRONG approach:**
```tsx
// WRONG — changed mobile classes
<div className="grid grid-cols-4 gap-8 py-20 px-20">
```

---

## ✅ Phase 1 Complete (TASK-00 through TASK-13)

All mobile tasks are done. Do NOT re-run Phase 1 tasks.
Start from TASK-14.

---

## TASK-14: Desktop Navbar `lg:` Override

Component: `src/components/Navbar.tsx` — `'use client'`

⚠️ **Do NOT touch any existing mobile classes. Add `lg:` only.**

Goal: On desktop (≥1024px), show a taller navbar with horizontal nav links.

Add these `lg:` overrides:
- `<nav>`: add `lg:h-[120px]`
- Spacer `<div className="h-16">`: add `lg:h-[120px]`
- Logo `<img>`: add `lg:h-12`
- Inner container div: add `lg:px-20 xl:px-32 max-w-screen-2xl mx-auto`
- Desktop nav links: a new `<div className="hidden lg:flex items-center gap-8">` containing the same 6 links as the mobile Sheet — these are ADDITIONAL elements, do not remove the Sheet
- Hamburger button: add `lg:hidden`
- Nav link text in desktop block: `text-sm lg:text-base font-semibold text-foreground hover:opacity-60`

Acceptance criteria:
- ✅ Desktop (≥1024px): navbar 120px, dark logo, horizontal links visible, hamburger hidden
- ✅ Mobile (440px): navbar 64px, dark logo, hamburger visible, horizontal links hidden — **exactly as before**
- ✅ `npm run build` passes

---

## TASK-15: Desktop HeroSection `lg:` Override

Component: `src/components/sections/HeroSection.tsx` — Server Component

⚠️ **Do NOT touch any existing mobile classes. Add `lg:` only.**

Goal: On desktop, hero fills full viewport height with larger text and wider content area.

Add these `lg:` overrides:
- `<section>`: add `lg:min-h-screen lg:py-32`
- Content wrapper div: add `lg:max-w-3xl lg:mx-auto`
- Logo `<img>`: add `lg:h-20`
- Heading `<h1>`: add `lg:text-6xl`
- Subheading `<p>`: add `lg:text-xl lg:max-w-2xl lg:mx-auto`
- CTA buttons wrapper: add `lg:gap-6`
- Mini-stats bar: add `lg:gap-16 lg:text-base`

Acceptance criteria:
- ✅ Desktop: full-height hero, heading large (text-6xl), mini-stats spaced wider
- ✅ Mobile: unchanged — same heading size, same layout
- ✅ `npm run build` passes

---

## TASK-16: Desktop AboutSection `lg:` Override

Component: `src/components/sections/AboutSection.tsx` — Server Component

⚠️ **Do NOT touch any existing mobile classes. Add `lg:` only.**

Goal: On desktop, text and image are side by side (2 columns).

Add these `lg:` overrides:
- `<section>`: add `lg:py-24`
- Add `max-w-screen-2xl mx-auto` container: add `lg:px-20`
- Content area (currently `flex flex-col` or similar): add `lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center`
- Heading: add `lg:text-5xl`
- Numbered cards container: add `lg:gap-6`
- Image placeholder `<div>`: add `lg:aspect-square lg:min-h-[500px]`

Desktop column order: text left, image right (natural order in JSX — no need to reorder if image is already second in JSX).

Acceptance criteria:
- ✅ Desktop: text left / image right, 2-column layout
- ✅ Mobile: stacked — text above, image below — **unchanged**
- ✅ `npm run build` passes

---

## TASK-17: Desktop StatisticsSection `lg:` Override

Component: `src/components/sections/StatisticsSection.tsx` — Server Component

⚠️ **Do NOT touch any existing mobile classes. Add `lg:` only.**

Goal: On desktop, 4 stat cards show in a single horizontal row.

Add these `lg:` overrides:
- `<section>`: add `lg:py-20`
- Container: add `max-w-screen-2xl mx-auto lg:px-20`
- Header area: add `lg:text-center lg:max-w-2xl lg:mx-auto lg:mb-12`
- Heading: add `lg:text-5xl`
- Stat grid (currently `grid-cols-2`): add `lg:grid-cols-4 lg:gap-8`
- Each stat card: add `lg:p-8`
- Stat value: add `lg:text-4xl`

Acceptance criteria:
- ✅ Desktop: 4 stat cards in a single row
- ✅ Mobile: 2×2 grid — **unchanged**
- ✅ Orange `+` / `%` suffix still renders on both
- ✅ `npm run build` passes

---

## TASK-18: Desktop CourseShowcaseSection `lg:` Override

Component: `src/components/sections/CourseShowcaseSection.tsx` — `'use client'`

⚠️ **Do NOT touch any existing mobile classes. Add `lg:` only.**

Goal: On desktop, course cards show in 3 columns.

Add these `lg:` overrides:
- `<section>`: add `lg:py-20`
- Container: add `max-w-screen-2xl mx-auto lg:px-20`
- Heading: add `lg:text-5xl`
- Filter tabs row: add `lg:justify-start lg:gap-3`
- Course card grid (currently `grid-cols-2`): add `lg:grid-cols-3 lg:gap-6`
- Each card: add `lg:p-4`
- Card thumbnail: add `lg:aspect-video`

Acceptance criteria:
- ✅ Desktop: 3-column course card grid
- ✅ Mobile: 2-column grid — **unchanged**
- ✅ Filter tabs work on both breakpoints
- ✅ Clicking a card still opens CourseDetailModal
- ✅ `npm run build` passes

---

## TASK-19: Desktop IndustryLeadersSection `lg:` Override

Component: `src/components/sections/IndustryLeadersSection.tsx` — Server Component

⚠️ **Do NOT touch any existing mobile classes. Add `lg:` only.**

Goal: On desktop, 4 logo cards show in a single horizontal row.

Add these `lg:` overrides:
- `<section>`: add `lg:py-20`
- Container: add `max-w-screen-2xl mx-auto lg:px-20`
- Heading: add `lg:text-5xl`
- Logo grid (currently `grid-cols-2`): add `lg:grid-cols-4 lg:gap-8`
- Each card: add `lg:p-10`
- "Logo" `<span>`: add `lg:text-lg`

Acceptance criteria:
- ✅ Desktop: 4 logo cards in a single row
- ✅ Mobile: 2×2 grid — **unchanged**
- ✅ "Logo" text visible in each card on both breakpoints
- ✅ `npm run build` passes

---

## TASK-20: Desktop TrainersSection `lg:` Override

Component: `src/components/sections/TrainersSection.tsx` — `'use client'`

⚠️ **Do NOT touch any existing mobile classes. Add `lg:` only.**

Goal: On desktop, 4 trainer cards show in a single horizontal row.

Add these `lg:` overrides:
- `<section>`: add `lg:py-20`
- Container: add `max-w-screen-2xl mx-auto lg:px-20`
- Heading: add `lg:text-5xl`
- Trainer grid (currently `grid-cols-2`): add `lg:grid-cols-4 lg:gap-8`
- Trainer photo: add `lg:aspect-[3/4]`
- Trainer name: add `lg:text-base`

Acceptance criteria:
- ✅ Desktop: 4 trainer cards in a single row
- ✅ Mobile: 2×2 grid — **unchanged**
- ✅ Clicking a card still opens TrainerDetailModal
- ✅ `npm run build` passes

---

## TASK-21: Desktop ContactSection `lg:` Override

Component: `src/components/sections/ContactSection.tsx` — `'use client'`

⚠️ **Do NOT touch any existing mobile classes. Add `lg:` only.**

Goal: On desktop, info cards + map are left column, form is right column.

Add these `lg:` overrides:
- `<section>`: add `lg:py-20`
- Container: add `max-w-screen-2xl mx-auto lg:px-20`
- Heading: add `lg:text-5xl`
- Content area (currently stacked): add `lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start`
- Left col (info cards + map): no additional changes needed — naturally left in grid
- Map placeholder: add `lg:h-64`
- Right col (form): naturally right in grid — no changes needed to form elements

Acceptance criteria:
- ✅ Desktop: info + map left, form right — 2-column layout
- ✅ Mobile: stacked — info above, form below — **unchanged**
- ✅ Form still controlled (useState) and works on both breakpoints
- ✅ `npm run build` passes

---

## TASK-22: Desktop Footer `lg:` Override

Component: `src/components/Footer.tsx` — Server Component

⚠️ **Do NOT touch any existing mobile classes. Add `lg:` only.**

Goal: On desktop, footer shows 3 columns (logo+desc, quick links, contact info).

Add these `lg:` overrides:
- Container inner div: add `max-w-screen-2xl mx-auto lg:px-20`
- Footer content (currently stacked): add `lg:grid lg:grid-cols-3 lg:gap-12 lg:items-start`
  - Col 1: Logo + tagline/short description
  - Col 2: Quick links (same as navbar — vertical list)
  - Col 3: Contact info (email, phone, address) — text-sm
- Logo: add `lg:h-10`
- Copyright bar: add `lg:flex lg:justify-between lg:mt-12 lg:pt-6 lg:border-t lg:border-white/20`

Acceptance criteria:
- ✅ Desktop: 3-column footer — logo left, links center, contact right
- ✅ Mobile: stacked layout — **unchanged**
- ✅ `bg-secondary` background, white text on both breakpoints
- ✅ White logo (`logo-ditc-white.svg`) on both breakpoints
- ✅ `npm run build` passes

---

## TASK-23: Desktop QA Pass

Goal: Full visual QA at 1920px desktop width against Figma "prototye compay by senior turnpro".

⚠️ **Also verify mobile 440px is UNCHANGED after all Phase 2 tasks.**

### Desktop checklist (1920px):
- [ ] Navbar: 120px tall, dark logo, horizontal links, no hamburger
- [ ] Hero: full-height, large heading (text-6xl), wide mini-stats
- [ ] About: 2-column — text left, image right
- [ ] Statistics: 4 stat cards in a single row
- [ ] CourseShowcase: 3-column card grid, filter tabs work
- [ ] IndustryLeaders: 4 logo cards in a single row
- [ ] Trainers: 4 trainer cards in a single row
- [ ] Contact: 2-column — info+map left, form right
- [ ] Footer: 3-column layout, white logo, copyright bar

### Mobile regression checklist (440px):
- [ ] Navbar: 64px, hamburger visible, links in Sheet
- [ ] Hero: correct copy, 2 CTA buttons, mini-stats bar
- [ ] About: stacked, numbered cards, image below
- [ ] Statistics: 2×2 grid, orange suffixes
- [ ] CourseShowcase: filter tabs, 2-column grid
- [ ] IndustryLeaders: 2×2 grid, "Logo" text in each card
- [ ] Trainers: 2×2 grid, modals work
- [ ] Contact: stacked, 3 info cards, form works
- [ ] Footer: stacked, white logo, copyright

### Final checks:
- [ ] No raw hex in any `.tsx` file — Tailwind tokens only
- [ ] No `any` TypeScript types
- [ ] All section `id=` attributes match navbar anchors
- [ ] Run `npm run build` — must pass with 0 errors

Acceptance criteria:
- `npm run build` passes with 0 TypeScript errors
- Desktop matches Figma "prototye compay by senior turnpro"
- Mobile is pixel-perfect unchanged from Phase 1

---

## Phase 3 (Future — DO NOT implement now)
- Replace placeholder images with real assets
- Replace stub API functions with real backend calls
- Add real company logos to IndustryLeadersSection
- Add real trainer photos
- SEO optimization (Open Graph, structured data)