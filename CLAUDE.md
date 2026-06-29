# CLAUDE.md — DITC Non-Admin (Public Landing Site)

## Project

Public-facing website for DITC — Digital Innovation Training Center.

**Scope of this repo:**
- Desktop: "prototye compay by senior turnpro" — Full scrollable landing page (1920px)
- Mobile: "company mobile" — Mobile version of the same landing page (440px)

This is a **public marketing/landing site only**.
No auth, no dashboard, no portal. Do NOT add Mentor/Learner/Admin features here.

---

## Tech Stack

| Layer         | Library                  |
|---------------|--------------------------|
| Framework     | Next.js 14+ (App Router) |
| Language      | TypeScript               |
| UI components | shadcn/ui                |
| Styling       | Tailwind CSS v3          |

> No TanStack Query, no Zustand, no Firebase Auth required for this repo.
> All content on this site is public and static/semi-static.
> Use native fetch with Next.js cache (`next: { revalidate }`) if data comes from API.

---

## Folder Structure
src/
├── app/
│   ├── layout.tsx          # Root layout (font, metadata)
│   └── page.tsx            # Landing page (/)
├── assets/
│   └── logo/               # SVG logos
├── components/
│   ├── ui/                 # shadcn/ui — do not edit manually
│   ├── Navbar.tsx          # Top navigation bar
│   ├── Footer.tsx          # Footer
│   ├── sections/           # Each scrollable section as a component
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── StatisticsSection.tsx
│   │   ├── CourseShowcaseSection.tsx
│   │   ├── IndustryLeadersSection.tsx
│   │   ├── TrainersSection.tsx
│   │   └── ContactSection.tsx
│   └── modals/
│       ├── CourseDetailModal.tsx   # Popup: course detail
│       └── TrainerDetailModal.tsx  # Popup: trainer profile
├── lib/
│   └── api/
│       ├── courses.ts       # Typed API functions (stub → real later)
│       ├── trainers.ts
│       └── statistics.ts
├── types/
│   ├── course.ts
│   ├── trainer.ts
│   └── statistic.ts
└── utils/

---

## Pages & Sections

This repo has **one route only**: `/` (the landing page).

| # | Section              | Component                    | Description |
|---|----------------------|------------------------------|-------------|
| 1 | Hero                 | HeroSection                  | DITC logo, tagline, CTA buttons |
| 2 | About Platform       | AboutSection                 | Platform description, Mission, Vision, Objectives |
| 3 | Statistics           | StatisticsSection            | 12,500+ Students / 340+ Courses / 98% Satisfaction / 75+ Trainers |
| 4 | Course Showcase      | CourseShowcaseSection        | Filter tabs (All/Business/Tech/Design) + Course cards |
| 5 | Industry Leaders     | IndustryLeadersSection       | Partner/client logos |
| 6 | Trainers             | TrainersSection              | Trainer cards grid |
| 7 | Contact              | ContactSection               | Contact info + form |

Modals:
- **CourseDetailModal** — opens when clicking a course card
- **TrainerDetailModal** — opens when clicking a trainer card

---

## Responsive Breakpoints

| Frame                             | Width  | Breakpoint       |
|-----------------------------------|--------|------------------|
| prototye compay by senior turnpro | 1920px | `lg:` and above  |
| company mobile                    | 440px  | default (mobile-first) |

Use **mobile-first Tailwind** — write base styles for mobile (440px), override with `lg:` for desktop (1920px).
No tablet-specific breakpoints needed unless layout breaks.

**Phase status:**
- Phase 1 ✅ DONE — Mobile (440px) base styles complete
- Phase 2 🚧 CURRENT — Add `lg:` overrides for 1920px desktop

---

## Data Fetching

Since this is a public static site, prefer Server Components with Next.js caching:

```ts
const courses = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`, {
  next: { revalidate: 3600 },
}).then(r => r.json())
```

- All API endpoint functions must be defined in `src/lib/api/` as typed functions.
- Use mock/stub data in those functions now. Swap only those functions when backend is ready.
- No API calls directly in components — always go through `src/lib/api/`.

---

## Styling & UI

- Use shadcn/ui as base components. Extend via `className` with Tailwind only.
- Never edit files inside `src/components/ui/` directly.
- Use Tailwind color tokens (`bg-primary`, `text-secondary`) — never raw hex values.
- Prefer Server Components. Use `'use client'` only for interactive elements (modals, filter tabs, contact form).

---

## Logo

Logo files in `src/assets/logo/`. Always use SVG.

| File                 | Use case                          |
|----------------------|-----------------------------------|
| logo-ditc-dark.svg   | Navbar (white bg)                 |
| logo-ditc-white.svg  | Hero section, Footer (dark bg)    |

Rules:
- Always import as `<img>` tag or inline SVG — not as background image.
- Navbar always uses **logo-ditc-dark.svg** (navbar is bg-white).
- Hero and Footer use **logo-ditc-white.svg** (dark backgrounds).

---

## Navbar

File: `src/components/Navbar.tsx` — `'use client'`

**Mobile (base):**
- Full-width, height 64px (`h-16`), `bg-white shadow-sm`
- Left: DITC dark logo
- Right: hamburger button → opens `<Sheet>` from right with vertical nav links

**Desktop (`lg:`):**
- Height 120px (`lg:h-[120px]`)
- Left: DITC dark logo (larger: `lg:h-12`)
- Center-right: horizontal nav links (hidden on mobile, shown on `lg:`)
- Hamburger hidden on `lg:`

Nav links (same order both breakpoints):
1. About Us → `#about`
2. Statistics → `#statistics`
3. Course Showcase → `#courses`
4. Our Client → `#clients`
5. Expert Trainers → `#trainers`
6. Contact Us → `#contact`

Nav link style:
- Default: `text-foreground font-semibold text-sm`
- Active: `underline font-bold`
- Hover: `opacity-60`

Layout wrapper:
```tsx
<nav className="fixed top-0 left-0 right-0 z-50 h-16 lg:h-[120px] bg-white shadow-sm">
  <div className="flex items-center justify-between px-4 h-full lg:px-20 xl:px-32 max-w-screen-2xl mx-auto">
    {/* logo */}
    {/* desktop: nav links — hidden on mobile, flex on lg: */}
    {/* mobile: hamburger — flex on mobile, hidden on lg: */}
  </div>
</nav>
<div className="h-16 lg:h-[120px]" /> {/* spacer */}
```

---

## tailwind.config.ts

```ts
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#F48E2E',
        hover: '#E86230',
        foreground: '#ffffff',
      },
      secondary: {
        DEFAULT: '#694535',
        hover: '#B8775D',
        foreground: '#ffffff',
      },
      background: '#FFFFFF',
      surface: '#F0F0E9',
      success: '#0B9B0B',
      error: '#D93838',
      warning: '#FFE137',
      info: '#FF7744',
      border: 'rgba(0,0,0,0.10)',
      foreground: '#0f172a',
      muted: {
        DEFAULT: '#F0F0E9',
        foreground: '#64748b',
      },
    },
    borderRadius: {
      hard: '2px',
      soft: '8px',
      medium: '16px',
      large: '24px',
      full: '9999px',
    },
    boxShadow: {
      subtle: '0 2px 4px rgba(0,0,0,0.16)',
      medium: '0 4px 8px rgba(0,0,0,0.14)',
      strong: '0 8px 16px rgba(0,0,0,0.15)',
    },
    fontFamily: {
      sans: ['var(--font-noto-sans-thai)', 'Noto Sans Thai', 'sans-serif'],
    },
  },
}
```

---

## Design System

### Colors

| Token           | Hex                  | Use                    |
|-----------------|----------------------|------------------------|
| primary         | #F48E2E              | CTA, accent, active    |
| primary-hover   | #E86230              | Hover on primary       |
| secondary       | #694535              | Secondary button, icon |
| secondary-hover | #B8775D              | Hover on secondary     |
| background      | #FFFFFF              | Page background        |
| surface         | #F0F0E9              | Card, panel            |
| success         | #0B9B0B              | Success state          |
| error           | #D93838              | Error state            |
| warning         | #FFE137              | Warning state          |
| info            | #FF7744              | Info state             |

### Typography

Font: **Noto Sans Thai** — load via `next/font/google`.

| Style   | Size  | Weight | Tailwind equivalent          |
|---------|-------|--------|------------------------------|
| h1      | 48px  | 400    | `text-5xl font-normal`       |
| h2      | 36px  | 700    | `text-4xl font-bold`         |
| h3      | 28px  | 600    | `text-3xl font-semibold`     |
| h4      | 20px  | 700    | `text-xl font-bold`          |
| h5      | 16px  | 700    | `text-base font-bold`        |
| body    | 16px  | 400    | `text-base font-normal`      |
| caption | 12px  | 400    | `text-xs font-normal`        |
| Section label | — | semibold | `text-sm font-semibold uppercase tracking-widest text-primary` |

### Desktop Typography Scale (`lg:`)

On 1920px desktop, increase font sizes:
| Style | Desktop Tailwind |
|-------|-----------------|
| h1    | `lg:text-6xl`   |
| h2    | `lg:text-5xl`   |
| h3    | `lg:text-4xl`   |
| Section label | `lg:text-base` |

### Border Radius

| Token  | Value  | Use                    |
|--------|--------|------------------------|
| hard   | 2px    | Input, table cell      |
| soft   | 8px    | Button, card, dropdown |
| medium | 16px   | Modal, large card      |
| large  | 24px   | Bottom sheet           |
| full   | 9999px | Badge, pill, avatar    |

### Shadow

| Token  | Value                        | Use            |
|--------|------------------------------|----------------|
| subtle | 0 2px 4px rgba(0,0,0,0.16)  | Card lift      |
| medium | 0 4px 8px rgba(0,0,0,0.14)  | Dropdown       |
| strong | 0 8px 16px rgba(0,0,0,0.15) | Modal, overlay |

---

## Desktop Layout Rules (Phase 2 additions)

### Max width & padding

All sections use:
```tsx
<div className="max-w-screen-2xl mx-auto px-4 lg:px-20 xl:px-32">
```

### Section spacing

| Breakpoint | Section padding |
|------------|----------------|
| Mobile     | `py-12 px-4`   |
| Desktop    | `lg:py-20 lg:px-20` |

---

## Components (Desktop `lg:` overrides)

### Navbar
- Mobile: `h-16` / Desktop: `lg:h-[120px]`
- Mobile: hamburger menu / Desktop: horizontal links (`lg:flex`)

### HeroSection
- Mobile: centered content, stacked / Desktop: same centered layout but wider content area
- Mini-stats bar: `grid-cols-3` on both, but wider padding on `lg:`

### AboutSection
- Mobile: stacked (text above, image below)
- Desktop: **2 columns** — text left (`lg:w-1/2`), image right (`lg:w-1/2`)

### StatisticsSection
- Mobile: 2×2 grid (`grid-cols-2`)
- Desktop: **4 in a row** (`lg:grid-cols-4`)

### CourseShowcaseSection
- Mobile: 2 columns (`grid-cols-2`)
- Desktop: **3 columns** (`lg:grid-cols-3`)

### IndustryLeadersSection
- Mobile: 2×2 grid (`grid-cols-2`)
- Desktop: **4 in a row** (`lg:grid-cols-4`)

### TrainersSection
- Mobile: 2×2 grid (`grid-cols-2`)
- Desktop: **4 in a row** (`lg:grid-cols-4`)

### ContactSection
- Mobile: stacked (info cards above, form below)
- Desktop: **2 columns** — info left (`lg:w-[45%]`), form right (`lg:w-[55%]`)

### Footer
- Mobile: stacked columns
- Desktop: **multi-column** — logo+desc left, quick links center, contact info right

---

## Component Checklist

After modifying any component for desktop, ALWAYS:
1. Verify mobile (440px) still looks correct — no regressions
2. Verify desktop (1920px) layout matches Figma
3. Run `npm run build` — must pass with 0 TypeScript errors
4. No raw hex in any `.tsx` file

---

## Rules

DO:
- Build only `/` — one landing page, multiple scroll sections
- Use Server Components for all data display (courses, trainers, stats)
- Use `'use client'` only for modals, filter tabs, contact form, mobile menu
- Use **mobile-first Tailwind**: base = 440px, `lg:` = 1920px
- Use `<Link>` / `<a href="#anchor">` for scroll navigation
- Use `<Image>` from `next/image` for raster images
- Use `<img>` for SVG logos
- Use Tailwind color tokens only — never raw hex
- Use Noto Sans Thai loaded via `next/font/google`
- Define all API calls in `src/lib/api/` — use stubs now, swap later

DON'T:
- Add any auth, login, dashboard, or portal pages
- Add routes other than `/`
- Use Zustand or TanStack Query
- Edit `src/components/ui/` directly
- Use raw hex in components
- Use fonts other than Noto Sans Thai
- Fetch data directly in components
- Break mobile layout when adding `lg:` overrides

GIT:
- Never run `git commit` or `git push` under any circumstances.
- Only make file changes. Leave all git operations to the user.

---

## License

© 2025 DITC. All rights reserved.

