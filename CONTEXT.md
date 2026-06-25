# CONTEXT.md — DITC Company Landing Page

> Read this file before starting any TASK. This is the single source of truth.
> Always cross-reference with CLAUDE.md for rules.

---

## Project Overview

- Repo scope: Company-facing public landing page only — NO auth, NO dashboard, NO portal
- Route: Single route `/` only
- Figma source: Page "User&Company/Learner/Mentor"
- Mobile frame: "company mobile" (440×5718px) — Phase 1 ✅ DONE
- Desktop frame: "prototye compay by senior turnpro" (1920×8448px) — Phase 2 🚧 CURRENT
- Phase 1 ✅: Mobile-first at 440px — base styles complete, NO `lg:` prefixes
- Phase 2 🚧: Add `lg:` overrides for 1920px desktop on every component

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14+ App Router + TypeScript |
| Styling | Tailwind CSS v3 |
| Components | shadcn/ui |
| Font | Noto Sans Thai (via next/font/google) |
| State | React useState only (no Zustand, no TanStack Query) |
| Data | Stub functions in `src/lib/api/` |

---

## Tailwind Config

`tailwind.config.ts` (keep as-is from Phase 1):

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F48E2E",
          hover: "#E86230",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#694535",
          hover: "#B8775D",
          foreground: "#ffffff",
        },
        background: "#ffffff",
        surface: "#F0F0E9",
        success: "#0B9B0B",
        error: "#D93838",
        warning: "#FFE137",
        info: "#FF7744",
        border: "rgba(0,0,0,0.10)",
        foreground: "#0f172a",
        muted: {
          DEFAULT: "#F0F0E9",
          foreground: "#64748b",
        },
      },
      borderRadius: {
        hard: "2px",
        soft: "8px",
        medium: "16px",
        large: "24px",
        full: "9999px",
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(0,0,0,0.16)",
        medium: "0 4px 8px rgba(0,0,0,0.14)",
        strong: "0 8px 16px rgba(0,0,0,0.15)",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-thai)", "Noto Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

---

## Global CSS

`src/app/globals.css` (keep as-is from Phase 1):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground font-sans;
  }
}
```

---

## Layout Template

`src/app/layout.tsx` (keep as-is from Phase 1):

```tsx
import type { Metadata } from "next"
import { Noto_Sans_Thai } from "next/font/google"
import "./globals.css"

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-thai",
  display: "swap",
})

export const metadata: Metadata = {
  title: "DITC — Digital Innovation and Transformation Center",
  description: "A central hub for learning & skill development.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

---

## Folder Structure
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── assets/
│   └── logo/
│       ├── logo-ditc-white.svg    ← white logo: Hero + Footer (dark bg)
│       └── logo-ditc-dark.svg     ← dark logo: Navbar (white bg)
├── components/
│   ├── Navbar.tsx                 ← 'use client'
│   ├── Footer.tsx                 ← Server Component
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── StatisticsSection.tsx
│   │   ├── CourseShowcaseSection.tsx
│   │   ├── IndustryLeadersSection.tsx
│   │   ├── TrainersSection.tsx
│   │   └── ContactSection.tsx
│   ├── modals/
│   │   ├── CourseDetailModal.tsx
│   │   └── TrainerDetailModal.tsx
│   └── ui/                        ← shadcn/ui — NEVER edit
├── lib/
│   └── api/
│       ├── courses.ts
│       ├── trainers.ts
│       └── statistics.ts
├── types/
│   ├── course.ts
│   ├── trainer.ts
│   └── statistic.ts
└── utils/

---

## TypeScript Types (unchanged from Phase 1)

### src/types/course.ts
```ts
export interface Course {
  id: string
  title: string
  subtitle: string
  category: "Business" | "Tech" | "Design"
  startDate: string
  totalStudents: number
  thumbnailUrl: string
  description: string
  trainerName: string
  trainerCompany: string
  trainerPhotoUrl: string
}
```

### src/types/trainer.ts
```ts
export interface Trainer {
  id: string
  name: string
  role: string
  title: string
  badge: string
  company: string
  bio: string
  tags: string[]
  recentCourses: string[]
  photoUrl: string
}
```

### src/types/statistic.ts
```ts
export interface Statistic {
  id: string
  value: string
  suffix: string
  label: string
  description: string
}
```

---

## Stub Data (unchanged from Phase 1)

All stub data in `src/lib/api/` remains the same. Do not change stub data for Phase 2.

---

## Section Copy (unchanged from Phase 1)

### Hero
- Heading: Digital Innovation and Transformation Center
- Subheading: Discover courses, schedules, and instructors in one smart training platform. Track progress efficiently in your organization and connect with ease.
- CTA 1: Browse Courses → #courses
- CTA 2: Contact Us → #contact

### About
- Label: ABOUT OUR PLATFORM
- Heading: A central hub for learning & skill development.
- Body: DitC connects training providers with organizations growing their people — across business, tech, and design. We handle scheduling, payments, and accountability so your team can focus on learning.
- 01 Our mission / 02 Our vision / 03 What we focus on

### Statistics
- Label: OUR IMPACT
- Heading: Numbers that speak for themselves.
- 4 stats: 12,500+ / 340+ / 98% / 75+

### Course Showcase
- Label: COURSE SHOWCASE
- Heading: Recently organized training programs.
- Subheading: Explore our recently organized training programs.
- Filter tabs: All | Business | Tech | Design

### Industry Leaders
- Label: TRUSTED BY
- Heading: Trusted by Industry Leaders
- 4 logo placeholder cards

### Trainers
- Label: MEET OUR EXPERTS
- Heading: Meet Our Experts
- Subheading: Click on an expert to learn more about their background.

### Contact
- Label: GET IN TOUCH
- Heading: Have a question? Send us a message.
- Email: hello@ditc.co.th
- Phone: +66 090 000 000
- Location: 239 Huay Kaew Rd., Suthep, Mueang Chiang Mai, Chiang Mai 50200
- Form: Name* | Email* | Subject | Message | Submit

---

## Desktop Layout Specs (Phase 2 — NEW)

> These specs come from Figma frame "prototye compay by senior turnpro" (1920×8448px)
> Apply as `lg:` overrides on top of existing mobile base styles

### Global Desktop Wrapper
All sections use a centered max-width container:
```tsx
<div className="max-w-screen-2xl mx-auto px-4 lg:px-20 xl:px-32">
```

### Navbar Desktop
- Height: `lg:h-[120px]`
- Logo: `lg:h-12 lg:w-auto`
- Nav links: `hidden lg:flex gap-8`
- Hamburger: `lg:hidden`

### HeroSection Desktop
- Min-height: `lg:min-h-screen`
- Content box: centered with `lg:max-w-3xl mx-auto`
- Logo: `lg:h-20`
- Heading: `lg:text-6xl`
- Subheading: `lg:text-xl lg:max-w-2xl`
- Buttons: `lg:flex-row lg:gap-4` (side by side, already done on mobile)
- Mini-stats: `lg:gap-16` (wider spacing), separator `|` between items

### AboutSection Desktop
- Section: `lg:py-24`
- Layout: **2 columns** — `lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center`
- Left: text content (label, heading, body, 3 numbered cards)
- Right: image placeholder `lg:aspect-square lg:w-full`
- Numbered cards: `lg:gap-6` (more vertical spacing)
- Heading: `lg:text-5xl`

### StatisticsSection Desktop
- Section: `lg:py-20`
- Heading area: `lg:text-center lg:max-w-2xl lg:mx-auto`
- Stat grid: **4 columns** — `lg:grid-cols-4 lg:gap-8`
- Stat value: `lg:text-4xl`
- Card: `lg:p-8`

### CourseShowcaseSection Desktop
- Section: `lg:py-20`
- Filter tabs row: `lg:justify-start lg:gap-3`
- Course card grid: **3 columns** — `lg:grid-cols-3 lg:gap-6`
- Card thumbnail: `lg:aspect-video`
- Card padding: `lg:p-4`

### CourseDetailModal Desktop
- Dialog width: `lg:max-w-2xl`
- Layout: single column (same as mobile, just wider)

### IndustryLeadersSection Desktop
- Section: `lg:py-20`
- Logo grid: **4 columns** — `lg:grid-cols-4 lg:gap-8`
- Card: `lg:p-10`

### TrainersSection Desktop
- Section: `lg:py-20`
- Trainer grid: **4 columns** — `lg:grid-cols-4 lg:gap-8`
- Photo: `lg:aspect-[3/4]`

### TrainerDetailModal Desktop
- Dialog width: `lg:max-w-xl`
- Layout: single column (same as mobile, just wider)

### ContactSection Desktop
- Section: `lg:py-20`
- Layout: **2 columns** — `lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start`
- Left col (info): info cards stack + map placeholder
- Right col (form): full contact form
- Map placeholder: `lg:h-64`

### Footer Desktop
- Background: `bg-secondary` (dark brown)
- Text: `text-white`
- Layout: **3 columns** — `lg:grid lg:grid-cols-3 lg:gap-12`
  - Col 1: Logo + tagline/description
  - Col 2: Quick links (vertical list, same as navbar links)
  - Col 3: Contact info (email, phone, address)
- Copyright bar: `lg:flex lg:justify-between` at bottom
- Logo: `lg:h-10`

---

## Design Tokens Quick Reference (unchanged)

| Token | Usage |
|---|---|
| `bg-primary` | CTA buttons, active filter tabs |
| `text-primary` | Orange accent text (labels, suffixes, links) |
| `bg-secondary` | Dark footer background |
| `bg-surface` | Card backgrounds, input backgrounds |
| `text-muted-foreground` | Subtitle / caption / description text |
| `border-border` | Card borders, input borders |
| `rounded-hard` | Inputs (2px) |
| `rounded-soft` | Buttons, cards (8px) |
| `rounded-medium` | Modals (16px) |
| `rounded-large` | Bottom sheet (24px) |
| `rounded-full` | Badges, pills, avatars |
| `shadow-subtle` | Card hover lift |
| `shadow-medium` | Dropdowns |
| `shadow-strong` | Modals, overlays |

---

## Component Rules (Critical — Never Violate)

| Rule | Detail |
|---|---|
| Server Component by default | All sections except those with state |
| `'use client'` required | Navbar, CourseShowcaseSection, TrainersSection, ContactSection, modals |
| Font | Noto Sans Thai inherited from body |
| Colors | ALWAYS use Tailwind tokens — NEVER raw hex |
| Logo — Navbar | `logo-ditc-dark.svg` on `bg-white` navbar |
| Logo — Hero | `logo-ditc-white.svg` on dark hero bg |
| Logo — Footer | `logo-ditc-white.svg` on `bg-secondary` footer |
| Images | `<Image>` from `next/image` for raster |
| Logos | `<img>` tag for SVG |
| Navigation | `<Link>` for routes, `<a href="#id">` for anchors |
| Data | All data through `src/lib/api/` |
| shadcn/ui | NEVER edit `src/components/ui/` |
| Git | NEVER run `git commit` or `git push` |
| Mobile regression | NEVER break mobile when adding `lg:` |

---

## What This Repo Does NOT Include

- No auth, login, or register pages
- No dashboard pages
- No mentor / learner / admin pages
- No routes other than `/`
- No Zustand, no TanStack Query
- No i18n / multi-language