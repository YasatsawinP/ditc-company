# CONTEXT.md — DITC Company Landing Page

> Read this file before starting any TASK. This is the single source of truth.
> Always cross-reference with CLAUDE.md for rules.

---

## Project Overview

- Repo scope: Company-facing public landing page only — NO auth, NO dashboard, NO portal
- Route: Single route / only
- Figma source: Page "User&Company/Learner/Mentor"
- Mobile frame: "company mobile" (440×5718px) — Phase 1 ✅ DONE
- Desktop frame: "prototye compay by senior turnpro" (1920×8448px) — Phase 2 🚧 CURRENT
- Phase 1 ✅: Mobile-first at 440px — base styles complete, NO lg: prefixes
- Phase 2 🚧: Add lg: overrides for 1920px desktop on every component

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14+ App Router + TypeScript |
| Styling | Tailwind CSS v3 |
| Components | shadcn/ui |
| Font | Noto Sans Thai (via next/font/google) |
| State | React useState only (no Zustand, no TanStack Query) |
| Data | Stub functions in src/lib/api/ |

---

## Tailwind Config

tailwind.config.ts (keep as-is from Phase 1):

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

src/app/globals.css (keep as-is from Phase 1):

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

src/app/layout.tsx (keep as-is from Phase 1):

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
│   │   ├── HowItWorksSection.tsx  ← CHANGED (was AboutSection.tsx)
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

All stub data in src/lib/api/ remains the same. Do not change stub data for Phase 2.

---

## Section Copy ← CHANGED (updated to match Figma)

### Navbar Links  ← CHANGED
- How it works → #how-it-works
- Trusted Result → #statistics
- Programs We've Built → #courses
- Organizations We've Worked With → #industry-leaders
- Our Trainer Network → #trainers
- Get In Touch → #contact

### Hero  ← CHANGED
- Heading: We design training programs that actually work.
- Subheading: Whether you're an organization looking to upskill your team, or an expert ready to share your knowledge — DITC handles the rest.
- CTA: Contact Us → #contact  ← CHANGED (only 1 CTA button, no "Browse Courses")

### How It Works  ← CHANGED (was "About" — entire section renamed & rewritten)
- Label: HOW IT WORKS
- Heading: From idea to classroom in 3 steps.
- Subheading: No lengthy setup. Just tell us what you need and we'll handle the rest.
- Step 01: Start with a brief — Give us a snapshot of your team, your learning objectives, and your timeline. That's all we need to get moving.
- Step 02: We find the right fit for you — Based on your needs, we hand-pick a trainer with the right background and experience to deliver your program.
- Step 03: Your program is ready to run — From scheduling to post-session reports, we manage the details so your program runs smoothly from day one.
- Left side: image placeholder (aspect-[3/4] portrait)

### Statistics  ← CHANGED
- Label: TRUSTED RESULTS
- Heading: Outcomes that matter.
- Subheading: Here's what organizations and trainers have achieved through programs built with DITC.
- Stat 1: 12,500+ / Total Students / Trained across our programs
- Stat 2: 340+ / Successful Courses / Delivered with partners
- Stat 3: 98% / Satisfaction Rate / From post-program surveys
- Stat 4: 75+ / Expert Trainers / Industry-vetted instructors

### Course Showcase  ← CHANGED
- Label: PROGRAMS WE'VE BUILT
- Heading: Real programs. Real impact.
- Subheading: (none — removed)  ← CHANGED
- Filter: Dropdown select (All / Business / Tech / Design)  ← CHANGED (was filter tabs)

### Industry Leaders  ← CHANGED
- Label: ORGANIZATIONS WE'VE WORKED WITH
- Heading: Industry leaders.
- Subheading: A growing network of organizations that chose DITC to develop their people.
- 4 logo placeholder cards

### Trainers  ← CHANGED
- Label: OUR TRAINER NETWORK
- Heading: Specialists who know how to deliver.
- Subheading: Our trainers are vetted professionals in their fields. Want to join the network? We'd love to hear from you.

### Contact  ← CHANGED
- Label: GET IN TOUCH
- Heading: Have a question? Send us a message.
- Subheading: We typically respond within one working day.  ← CHANGED
- Email: hello@ditc.co.th
- Phone: +66 090 000 000
- Location: 239 Huay Kaew Rd., Suthep, Mueang Chiang Mai, Chiang Mai 50200
- Form: Name* | Email* | Subject* | Message | Send message →  ← CHANGED (button text & Subject is required)
- Map placeholder below contact info cards

### Footer  ← CHANGED (entirely new 4-column structure)
- Logo (white) + tagline: Custom training programs, powered by DITC.
- Col PLATFORM: Courses / Trainers / Pricing / For teams
- Col COMPANY: About / Partners
- Col CONTACT: hello@ditc.co.th / +66 090 000 000 / Chiang Mai, TH

---

## Desktop Layout Specs (Phase 2 — NEW)

> These specs come from Figma frame "prototye compay by senior turnpro" (1920×8448px)
> Apply as lg: overrides on top of existing mobile base styles

### Global Desktop Wrapper
All sections use a centered max-width container:
```tsx
<div className="max-w-screen-2xl mx-auto px-4 lg:px-20 xl:px-32">
```

### Navbar Desktop
- Height: lg:h-[120px]
- Logo: lg:h-12 lg:w-auto
- Nav links: hidden lg:flex gap-8
- Hamburger: lg:hidden

### HeroSection Desktop
- Min-height: lg:min-h-screen
- Content box: centered with lg:max-w-3xl mx-auto lg:text-center
- Background: full-bleed dark video/image background
- Heading: lg:text-6xl
- Subheading: lg:text-xl lg:max-w-2xl lg:mx-auto
- Button: single "Contact Us" button, centered lg:mx-auto

### HowItWorksSection Desktop  ← CHANGED (was AboutSection)
- Section: lg:py-24
- Layout: 2 columns — lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center
- Left: image placeholder lg:aspect-[3/4] lg:w-full
- Right: text content (label, heading, subheading, 3 numbered step cards)
- Step cards: lg:gap-6
- Heading: lg:text-5xl

### StatisticsSection Desktop
- Section: lg:py-20
- Heading area: lg:text-center lg:max-w-2xl lg:mx-auto
- Stat grid: 4 columns — lg:grid-cols-4 lg:gap-8
- Stat value: lg:text-4xl
- Card: lg:p-8

### CourseShowcaseSection Desktop  ← CHANGED
- Section: lg:py-20
- Filter: dropdown select aligned lg:justify-end  ← CHANGED (was tabs)
- Course card grid: 3 columns — lg:grid-cols-3 lg:gap-6
- Card thumbnail: lg:aspect-video
- Card padding: lg:p-4

### CourseDetailModal Desktop
- Dialog width: lg:max-w-2xl
- Layout: single column (same as mobile, just wider)

### IndustryLeadersSection Desktop  ← CHANGED
- Section: lg:py-20
- Background: bg-surface
- Logo grid: 4 columns — lg:grid-cols-4 lg:gap-8
- Card: lg:p-10

### TrainersSection Desktop  ← CHANGED
- Section: lg:py-20
- Trainer grid: 4 columns — lg:grid-cols-4 lg:gap-6 (first row), wraps to 4 more
- Photo: lg:aspect-[3/4]
- Name + role shown below each photo

### TrainerDetailModal Desktop
- Dialog width: lg:max-w-xl
- Layout: single column (same as mobile, just wider)

### ContactSection Desktop  ← CHANGED
- Section: lg:py-20
- Background: bg-surface
- Layout: 2 columns — lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start
- Left col: contact info cards (Email / Phone / Location) stacked + map placeholder below
- Right col: form (Name* + Email* side-by-side / Subject* / Message textarea / Send message button)
- Map placeholder: lg:h-64
- Button: "Send message →" bg-primary

### Footer Desktop  ← CHANGED
- Background: bg-secondary (dark brown)
- Text: text-white
- Layout: 4 columns — lg:grid lg:grid-cols-4 lg:gap-12  ← CHANGED (was 3 cols)
- Col 1: Logo (white) + tagline "Custom training programs, powered by DITC."
- Col 2 (PLATFORM): Courses / Trainers / Pricing / For teams
- Col 3 (COMPANY): About / Partners
- Col 4 (CONTACT): hello@ditc.co.th / +66 090 000 000 / Chiang Mai, TH
- No copyright bar  ← CHANGED (not in Figma)
- Logo: lg:h-10

---

## Design Tokens Quick Reference (unchanged)

| Token | Usage |
|---|---|
| bg-primary | CTA buttons, active filter, step number badges |
| text-primary | Orange accent text (labels, suffixes, links) |
| bg-secondary | Dark footer background |
| bg-surface | Statistics section bg, Industry leaders bg, Contact section bg |
| text-muted-foreground | Subtitle / caption / description text |
| border-border | Card borders, input borders |
| rounded-hard | Inputs (2px) |
| rounded-soft | Buttons, cards (8px) |
| rounded-medium | Modals (16px) |
| rounded-large | Bottom sheet (24px) |
| rounded-full | Badges, pills, avatars |
| shadow-subtle | Card hover lift |
| shadow-medium | Dropdowns |
| shadow-strong | Modals, overlays |

---

## Component Rules (Critical — Never Violate)

| Rule | Detail |
|---|---|
| Server Component by default | All sections except those with state |
| 'use client' required | Navbar, CourseShowcaseSection, TrainersSection, ContactSection, modals |
| Font | Noto Sans Thai inherited from body |
| Colors | ALWAYS use Tailwind tokens — NEVER raw hex |
| Logo — Navbar | logo-ditc-dark.svg on bg-white navbar |
| Logo — Hero | logo-ditc-white.svg on dark hero bg |
| Logo — Footer | logo-ditc-white.svg on bg-secondary footer |
| Images | <Image> from next/image for raster |
| Logos | <img> tag for SVG |
| Navigation | <Link> for routes, <a href="#id"> for anchors |
| Data | All data through src/lib/api/ |
| shadcn/ui | NEVER edit src/components/ui/ |
| Git | NEVER run git commit or git push |
| Mobile regression | NEVER break mobile when adding lg: |

---

## What This Repo Does NOT Include

- No auth, login, or register pages
- No dashboard pages
- No mentor / learner / admin pages
- No routes other than /
- No Zustand, no TanStack Query
- No i18n / multi-language