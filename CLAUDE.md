# CLAUDE.md — DITC Admin Portal

## Project
Admin Portal (back-office management system) for DITC — Digital Innovation Training Center.
This repo is Admin only. Do NOT mix patterns from the Non-Admin (Next.js) or Backend (NestJS) repos.

---

## Tech Stack
| Layer | Library |
|-------|---------|
| Framework | Vite + React (TypeScript) |
| Routing | React Router DOM v6 |
| Server state / API | TanStack Query (React Query) v5 |
| Client state | Zustand |
| Data tables | TanStack Table v8 |
| UI components | shadcn/ui |
| Styling | Tailwind CSS v3 |
| Auth | Firebase Auth |

---

## Folder Structure
src/
├── assets/
├── components/        # shared/reusable components
│   └── ui/            # shadcn/ui generated — do not edit manually
├── features/          # feature modules (components, hooks, types per feature)
├── hooks/             # shared custom hooks
├── lib/               # queryClient, firebase, axios instance
├── pages/             # route-level page components
├── stores/            # zustand stores
├── types/             # shared TypeScript types/interfaces
└── utils/             # helper functions

---

## Data Fetching
- Use **TanStack Query** for all server state. Never use `useEffect` + `useState` to fetch.
- Keep query keys in `src/lib/queryKeys.ts`.
- Use axios instance from `src/lib/axios.ts` (base URL + auth header pre-configured).

```ts
const { data, isLoading } = useQuery({
  queryKey: queryKeys.users.list(),
  queryFn: () => api.getUsers(),
})
```

---

## Client State (Zustand)
- Use Zustand for UI state only: sidebar, modals, selected rows, etc.
- Never store server/API data in Zustand — that belongs in TanStack Query cache.

```ts
const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  setSidebarOpen: (val) => set({ sidebarOpen: val }),
}))
```

---

## Tables
- Use **TanStack Table v8** for all data tables.
- Always support: sorting, pagination, column visibility.

---

## Routing
- Use `createBrowserRouter` pattern (React Router v6).
- Protected routes check Firebase Auth before rendering.
- Nested routes use `<Outlet />`.

---

## Authentication
- Firebase Auth — listen to `onAuthStateChanged` on app init, store user in Zustand.
- Attach Firebase ID token as `Authorization: Bearer <token>` via axios interceptor.

---

## Styling & UI
- Use **shadcn/ui** as base components. Extend via `className` with Tailwind only.
- Never edit files inside `src/components/ui/` directly.
- Use Tailwind color tokens (`bg-primary`, `text-secondary`) — never raw hex values.

## Scope & Backend Readiness

**Scope:** Build frontend only. Do not implement any backend logic, database, or server code.

**Backend will be:** NestJS + PostgreSQL + Prisma, running separately on a VPS. Auth via Firebase Auth (shared between frontend and backend).

To make backend integration easy when ready, follow these patterns now:

- All API calls must go through `src/lib/axios.ts` — never call fetch or axios directly in components.
- All endpoints must be defined in `src/lib/api/` as typed functions (e.g. `src/lib/api/users.ts`, `src/lib/api/courses.ts`).
- Use mock data or hardcoded stubs inside the api functions temporarily. When backend is ready, swap only those functions — no changes needed in components or hooks.
- All query keys must live in `src/lib/queryKeys.ts` so they can be invalidated consistently.
- All API response types must be defined in `src/types/` and shared with query hooks — never use `any`.
- Firebase ID token is attached automatically via axios interceptor — do not handle auth headers manually anywhere else.

---

## Logo

Logo files are in `src/assets/logo/`. Always use SVG.

| File | Use case |
|------|----------|
| `logo-ditc-white.svg` | Navbar (orange background `--color-primary`) |
| `logo-ditc-dark.svg` | Login page, light backgrounds |
| `logo-ditc-cyan.svg` | Dark/gray backgrounds (if needed) |

Rules:
- Never use CAMT logo in this project.
- Always import logo as an `<img>` tag or inline SVG — not as a background image.
- Navbar always uses `logo-ditc-white.svg`.
- Login page always uses `logo-ditc-dark.svg`.

---

## Navbar

Shared component used on every page after login. File: `src/components/Navbar.tsx`

Layout: full-width horizontal bar, height 64px (h-16)
Background: `bg-primary` (#F48E2E)
Border radius: `rounded-none` (ขอบตรง)

Left: DITC white logo (`logo-ditc-white.svg`), h-8, linked to /dashboard
Center-left: nav links in this exact order:
  1. Dashboard → /dashboard
  2. Requirement → /requirement
  3. Personnel Management → /personnel
  4. Course Management → /course
  5. WIL → /wil

Nav link style:
- Default: `text-white font-semibold text-sm`
- Active (current page): `underline font-bold`
- Hover: `opacity-80`

Right: notification bell icon + admin avatar/name (placeholder for now)

Active link: determined by current route using React Router's `useLocation` or `<NavLink>`

---

### tailwind.config.ts
```ts
theme: {
  extend: {
    colors: {
      primary: '#F48E2E',
      'primary-hover': '#E86230',
      secondary: '#694535',
      'secondary-hover': '#B8775D',
      background: '#FFFFFF',
      surface: '#F0F0E9',
      success: '#0B9B0B',
      error: '#D93838',
      warning: '#FFE137',
      info: '#FF7744',
      border: 'rgba(0,0,0,0.10)',
    },
    borderRadius: {
      hard: '2px',
      soft: '8px',
      medium: '16px',
      large: '24px',
    },
    boxShadow: {
      subtle: '0 2px 4px rgba(0,0,0,0.16)',
      medium: '0 4px 8px rgba(0,0,0,0.14)',
      strong: '0 8px 16px rgba(0,0,0,0.15)',
    },
    fontFamily: {
      sans: ['Noto Sans Thai', 'sans-serif'],
    },
  },
}
```

---

## Design System

### Colors
| Token | Hex | Use |
|-------|-----|-----|
| primary | `#F48E2E` | Main CTA, accent |
| primary-hover | `#E86230` | Hover on primary |
| secondary | `#694535` | Secondary button, icon |
| secondary-hover | `#B8775D` | Hover on secondary |
| background | `#FFFFFF` | Page background |
| surface | `#F0F0E9` | Card, panel, sidebar |
| success | `#0B9B0B` | Success state |
| error | `#D93838` | Error / danger state |
| warning | `#FFE137` | Warning state |
| info | `#FF7744` | Info state |

On-colors (text/icon on top of each background):
- on-primary → `#FFFFFF`
- on-secondary → `#FFFFFF`
- on-background → `#F0F0E9`
- on-surface → `#694535`
- on-error → `#FFFFFF`

### Typography
Font: **Noto Sans Thai** (Google Fonts) — used on every element.

| Style | Size | Weight | Line-height |
|-------|------|--------|-------------|
| h1 | 48px | 400 | 110% |
| h2 | 36px | 700 | 130% |
| h3 | 28px | 600 | 150% |
| h4 | 20px | 700 | 1.2 |
| h5 | 16px | 700 | 1.4 |
| body | 16px | 400 | 100% |
| caption | 12px | 400 | auto |

Links: primary → `text-primary`, secondary → `text-secondary`.

### Border Radius
| Token | Value | Use |
|-------|-------|-----|
| hard | 2px | Input, table cell |
| soft | 8px | Button, card, dropdown |
| medium | 16px | Modal, large card |
| large | 24px | Bottom sheet |
| full | 9999px | Badge, pill, avatar |

### Shadow
| Token | Value | Use |
|-------|-------|-----|
| subtle | `0 2px 4px rgba(0,0,0,0.16)` | Card lift |
| medium | `0 4px 8px rgba(0,0,0,0.14)` | Dropdown |
| strong | `0 8px 16px rgba(0,0,0,0.15)` | Modal, overlay |

---

## Components

### Button
| Variant | Tailwind | Use |
|---------|----------|-----|
| primary | `bg-primary text-white hover:bg-primary-hover rounded-soft` | Main CTA |
| secondary | `bg-secondary text-white hover:bg-secondary-hover rounded-soft` | Secondary action |
| danger | `bg-error text-white rounded-soft` | Delete / destructive |
| success | `bg-success text-white rounded-soft` | Confirm / approve |
| disabled | `opacity-40 cursor-not-allowed` | Inactive |

### Input / Form
```tsx
<input className="border border-border rounded-hard bg-surface font-sans focus:border-primary outline-none" />
```
Form supports: Label, Input, Select, File upload, Route counter, Scroll variants.

### Card
```tsx
<div className="bg-surface rounded-soft border border-border shadow-subtle p-4" />
```

### Modal
- `rounded-medium shadow-strong`
- Always: Cancel (secondary) + Confirm (primary or danger) buttons.
- Examples: "Add Course", "Delete Personnel"

### Badge / Tag
- Status pill: `rounded-full` — active→`bg-success`, warning→`bg-warning`, danger→`bg-error`, disabled→`opacity-50`
- Course type tag, Feature icon tag: small size, `rounded-full`

### Toast
- success → green, error → red, warning → yellow
- Position: top-right or bottom-right

---

## Rules

**DO:**
- Use TanStack Query for all API calls
- Use Zustand for UI state only
- Use shadcn/ui + extend with Tailwind
- Use Tailwind color tokens, never raw hex
- Use `Noto Sans Thai` everywhere
- Use `rounded-soft` for buttons and inputs
- Use `rounded-medium` for modals and large cards
- Match on-color to background (e.g. text on primary must be white)

**DON'T:**
- Fetch data with `useEffect` + `useState`
- Store API data in Zustand
- Edit `src/components/ui/` files directly
- Use raw hex colors in components
- Use fonts other than Noto Sans Thai
- Use `bg-error` on non-destructive buttons
- Use backgrounds other than `background` or `surface`

**GIT:**
- Never run `git commit` or `git push` under any circumstances.
- Only make file changes. Leave all git operations to the user.

## License
© 2025 DITC. All rights reserved.