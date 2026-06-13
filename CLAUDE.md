# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Development server (port 3000)
npm run turbo        # Dev with Turbopack (faster HMR)
npm run build        # prisma generate + next build
npm run lint         # ESLint with auto-fix
npm run preview      # Build then serve production locally
npm run email        # Email template dev server (port 3333)
npx prisma migrate dev    # Apply DB migrations (development)
npx prisma studio         # GUI database browser
```

## Architecture

**Creatify AI** is a Next.js 14 App Router SaaS that generates social media content (YouTube, Facebook, Instagram, LinkedIn, Twitter, TikTok) via Google Gemini AI, with Stripe-based credit purchases.

### Key directories

- `app/` — App Router. Three layout groups: `(auth)/` (Clerk sign-in/up), `(marketing)/` (landing, pricing), `dashboard/` (protected)
- `app/dashboard/[templateSlug]/` — Dynamic content generation page; slug maps to templates in `lib/content-template.ts`
- `actions/` — Server Actions (`"use server"`): `generate-content-action.ts` (AI generation + credit deduction) and `save-content-action.ts`
- `lib/` — Core utilities: `db.ts` (Prisma singleton), `gemini-ai.ts` (Gemini 1.5 Flash client), `stripe.ts`, `content-template.ts` (all 6 template definitions), `subscription.ts`
- `config/dashboard.ts` — Sidebar navigation items
- `prisma/schema.prisma` — DB schema (User, AIOutput, Purchase, StripeCustomer)

### Content generation flow

1. User picks a template → routed to `/dashboard/[templateSlug]`
2. Form submission triggers `generateContentAction()` (server action)
3. Action: validates Clerk auth → auto-creates User row if missing (10,000 free credits) → checks balance (min 100 required) → builds prompt from template + form input → calls Gemini API → deducts credits + saves `AIOutput` in a `prisma.$transaction` → calls `revalidatePath()` on history/usage routes

### Credit system

Credits are stored as `Float` on the `User` model. Cost per generation = `min(content.length, totalCredit)`. Credits are topped up via Stripe: $10 = 10,000 credits. The webhook at `app/api/webhook/route.ts` handles `checkout.session.completed` and atomically increments credits.

### Auth

Clerk handles all authentication. `middleware.ts` protects dashboard and API routes. Server actions use `currentUser()` from `@clerk/nextjs/server`. The Clerk `userId` (not internal DB `id`) is the foreign key across all DB models.

### Stripe integration

- `app/api/upgrade/checkout/route.ts` — creates Stripe customer (stored in `StripeCustomer` table) and checkout session
- `app/api/webhook/route.ts` — verifies signature with `STRIPE_WEBHOOK_SECRET`, increments credits on success

### Database

PostgreSQL via Prisma ORM. The Prisma client is a singleton in `lib/db.ts` (guards against hot-reload connection exhaustion in dev). Run `prisma generate` is part of `npm run build` and `postinstall`.

## Environment variables

```env
DATABASE_URL=postgresql://...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
GEMINI_API_KEY=          # Server-only, not prefixed with NEXT_PUBLIC_
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Key libraries

| Library | Role |
|---------|------|
| `@google/generative-ai` | Gemini 1.5 Flash text generation |
| `@clerk/nextjs` | Auth middleware + server helpers |
| `stripe` | Payment processing |
| `@prisma/client` | Database ORM |
| `react-hook-form` + `zod` | Form state + schema validation |
| `sonner` | Toast notifications |
| `recharts` | Usage analytics charts |
| `contentlayer` | MDX blog/docs processing |
