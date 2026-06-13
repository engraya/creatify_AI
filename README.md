<div align="center">

<img src="public/_static/logo.png" alt="Creatify AI Logo" width="80" height="80" />

# Creatify AI

**The AI-powered social media content engine for modern creators.**

Generate platform-optimized content for YouTube, Facebook, Instagram, LinkedIn, TikTok, and X — in seconds, not hours.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.17-2D3748?logo=prisma&logoColor=white)](https://prisma.io/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?logo=clerk&logoColor=white)](https://clerk.com/)
[![Stripe](https://img.shields.io/badge/Payments-Stripe-635BFF?logo=stripe&logoColor=white)](https://stripe.com/)
[![Gemini](https://img.shields.io/badge/AI-Gemini%201.5%20Flash-4285F4?logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)
[![Version](https://img.shields.io/badge/Version-0.3.1-blue)](package.json)

[Live Demo](https://engrahmadaya.vercel.app/) · [Report Bug](https://github.com/engraya/creatify_AI/issues) · [Request Feature](https://github.com/engraya/creatify_AI/issues)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [AI Integration](#ai-integration)
- [Credit System](#credit-system)
- [Payments & Billing](#payments--billing)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Developer Notes](#developer-notes)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Creatify AI is a production-grade SaaS application that turns a topic or niche into fully crafted, platform-optimized social media content — powered by Google's **Gemini 1.5 Flash** model.

**The problem it solves:** Content creators, marketers, and small business owners spend hours writing and adapting posts for different platforms. Creatify AI eliminates that friction with intelligent, template-driven generation that respects the tone, format, and character limits of each platform.

**Who it's for:**
- Social media managers juggling multiple platforms
- Indie creators growing an audience on YouTube, TikTok, or LinkedIn
- Marketing teams that need volume without sacrificing quality
- Entrepreneurs and solopreneurs building their personal brand

**Why it's different:** Unlike generic AI writing tools, every template in Creatify AI is tailored to its platform's norms — hashtag density for Instagram vs. TikTok, professional voice for LinkedIn vs. conversational for Twitter/X, and idea-generation framing for YouTube. The credit system keeps usage transparent and affordable, with no hidden subscription lock-in.

---

## Features

### AI Content Generation
- **6 platform-specific templates** — Facebook posts, YouTube video ideas, Instagram hashtags, TikTok hashtags, LinkedIn articles, and Twitter/X threads
- **Gemini 1.5 Flash** — fast, creative AI generation (temperature 1.0, up to 8,192 output tokens)
- **Niche + outline input** — guide the AI with a topic and optional context for tighter, more relevant output
- **In-editor preview** — generated content loads directly into a rich-text editor (React Quill) for immediate review

### Credit System
- **10,000 free credits** on sign-up — no credit card required to get started
- **Usage-proportional cost** — credits deducted equal to the character count of generated content
- **Atomic transactions** — credit deduction and content saving happen in a single database transaction, preventing inconsistent state
- **Radial bar chart** — real-time visualization of available vs. consumed credits on the Usage dashboard

### Authentication & Security
- **Clerk authentication** — managed sign-in/sign-up flows with email, social, and magic-link support
- **Middleware-level route protection** — dashboard and API routes secured before any component renders
- **Server-side user validation** — every server action independently verifies the authenticated user via `currentUser()`

### Payments & Billing
- **Stripe Checkout** — one-time purchase of 10,000 credits for $10 USD
- **Webhook-verified credit top-ups** — Stripe webhook signature validation before any credit is added
- **Stripe Customer management** — customer records stored locally to avoid duplicate Stripe customers on repeat purchases
- **Audit trail** — every purchase creates a `Purchase` record in the database

### Dashboard & UX
- **Template gallery** with category filtering and real-time search (2+ character debounce)
- **Generation history** — paginated table of all past outputs with template, title, preview, and timestamp
- **Responsive layout** — mobile-first design with collapsible sidebar and sticky mobile header
- **Dark mode ready** — theme managed via CSS variables and `next-themes`

### Developer Experience
- **Next.js 14 App Router** with React Server Components and Server Actions
- **Prisma ORM** with PostgreSQL — type-safe queries and auto-generated client
- **Zod validation** on all form inputs and API boundaries
- **Contentlayer2** integration for MDX-based blog/docs
- **Husky git hooks** + ESLint + Prettier for consistent code quality
- **Turbopack** support for faster HMR in development

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, Server Actions, RSC) |
| **Language** | [TypeScript 5.5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) + [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) |
| **UI Components** | [Radix UI](https://radix-ui.com/) primitives + custom components |
| **AI** | [Google Gemini 1.5 Flash](https://deepmind.google/technologies/gemini/) via `@google/generative-ai` |
| **Authentication** | [Clerk](https://clerk.com/) (`@clerk/nextjs` v6) |
| **Database** | [PostgreSQL](https://www.postgresql.org/) via [Prisma](https://prisma.io/) ORM |
| **Payments** | [Stripe](https://stripe.com/) (Checkout + Webhooks) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Charts** | [Recharts](https://recharts.org/) (RadialBarChart) |
| **Rich Text** | [React Quill](https://github.com/zenoamaro/react-quill) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) |
| **Content** | [Contentlayer2](https://contentlayer.dev/) (MDX blog/docs) |
| **Email** | [React Email](https://react.email/) + [Resend](https://resend.com/) |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) |
| **Deployment** | [Vercel](https://vercel.com/) |
| **Linting** | ESLint + Prettier + Husky |
| **Date Handling** | [date-fns](https://date-fns.org/) |

---

## Architecture

### Folder Structure

```
creatify_AI/
├── app/
│   ├── (auth)/                    # Clerk sign-in and sign-up pages
│   │   ├── sign-in/[[...sign-in]]/
│   │   └── sign-up/[[...sign-up]]/
│   ├── (marketing)/               # Public landing, pricing, about pages
│   │   ├── pricing/
│   │   └── page.tsx               # Landing page
│   ├── api/
│   │   ├── route.ts               # POST /api — save AI output
│   │   ├── upgrade/checkout/      # POST — create Stripe checkout session
│   │   └── webhook/               # POST — handle Stripe payment events
│   └── dashboard/
│       ├── [templateSlug]/        # Dynamic content generation page
│       │   ├── page.tsx
│       │   └── _components/editor.tsx
│       ├── _components/           # Shared dashboard UI (sidebar, header, charts, cards)
│       ├── history/               # Content history table
│       ├── usage/                 # Credit usage analytics
│       └── upgrade/               # Purchase credits page
│
├── actions/
│   ├── generate-content-action.ts # Core AI generation + credit logic (Server Action)
│   └── save-content-action.ts     # Persist AI output to DB (Server Action)
│
├── lib/
│   ├── content-template.ts        # All 6 template definitions + form field schemas
│   ├── db.ts                      # Prisma singleton (hot-reload safe)
│   ├── gemini-ai.ts               # Gemini chat session factory
│   ├── stripe.ts                  # Stripe client singleton
│   ├── subscription.ts            # Subscription plan helpers
│   └── validations/               # Zod schemas (user, auth, OG)
│
├── components/
│   ├── ui/                        # Radix-based design system primitives
│   ├── pricing/                   # Billing info and plan comparison
│   ├── sections/                  # Landing page sections
│   └── shared/                    # Reusable app-wide components
│
├── config/
│   ├── site.ts                    # Site metadata, links, support email
│   ├── dashboard.ts               # Sidebar navigation items
│   ├── subscriptions.ts           # Plan tiers and feature matrix
│   └── landing.ts / marketing.ts  # Marketing page copy
│
├── prisma/
│   └── schema.prisma              # DB models: User, AIOutput, Purchase, StripeCustomer
│
├── types/
│   └── index.d.ts                 # Global TypeScript interfaces
│
└── middleware.ts                  # Clerk route protection
```

### Content Generation Flow

```
User selects template
        │
        ▼
/dashboard/[templateSlug] renders form fields (defined in content-template.ts)
        │
        ▼ (form submit)
generateContentAction() — Server Action
        │
        ├── currentUser() via Clerk   ← auth check
        ├── find/create User row      ← auto-provision with 10,000 free credits
        ├── check totalCredit ≥ 100   ← balance guard
        ├── build prompt              ← template.aiPrompt + niche + outline
        ├── createChatSession().send  ← Gemini 1.5 Flash
        └── prisma.$transaction([     ← atomic
              update User credits,
              create AIOutput record
            ])
        │
        ▼
Editor component displays content in React Quill
        │
        ▼
revalidatePath('/dashboard/usage')
revalidatePath('/dashboard/history')
```

### Payment Flow

```
User clicks "Upgrade"
        │
        ▼
POST /api/upgrade/checkout
        ├── upsert StripeCustomer row
        └── stripe.checkout.sessions.create({ mode: "payment" })
        │
        ▼
Stripe Checkout (hosted page)
        │
        ▼ (on success)
POST /api/webhook   ← Stripe sends checkout.session.completed
        ├── constructEvent() — signature verification
        └── prisma.$transaction([
              upsert User credits += 10,000,
              create Purchase audit record
            ])
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/) 9+ (or `pnpm` / `yarn`)
- [PostgreSQL](https://www.postgresql.org/) instance (local or hosted — [Neon](https://neon.tech/), [Railway](https://railway.app/), [Supabase](https://supabase.com/))
- [Clerk](https://clerk.com/) account
- [Google AI Studio](https://aistudio.google.com/app/apikey) API key (Gemini)
- [Stripe](https://stripe.com/) account

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/engraya/creatify_AI.git
cd creatify_AI

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials (see Environment Variables section)

# 4. Push the database schema
npx prisma migrate dev --name init

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Development Scripts

```bash
npm run dev        # Start dev server on port 3000 (webpack)
npm run turbo      # Start dev server with Turbopack (faster HMR)
npm run build      # prisma generate → next build
npm run start      # Start production server
npm run preview    # Build + serve production locally
npm run lint       # ESLint with auto-fix
npm run email      # Email template preview server on port 3333
```

### Database Management

```bash
npx prisma migrate dev        # Apply pending migrations (development)
npx prisma migrate deploy     # Apply migrations (production)
npx prisma studio             # Open GUI database browser
npx prisma generate           # Regenerate Prisma client (auto-runs on build/postinstall)
```

---

## Environment Variables

Create a `.env.local` file in the project root. All variables below are required unless marked optional.

```env
# ─── Database ─────────────────────────────────────────────────────────────────
# PostgreSQL connection string (local, Neon, Railway, or Supabase)
DATABASE_URL=postgresql://user:password@localhost:5432/creatify_ai

# ─── Clerk Authentication ─────────────────────────────────────────────────────
# Found in Clerk Dashboard → API Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk routing — keep these as-is unless you change page paths
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# ─── Google Gemini AI ─────────────────────────────────────────────────────────
# Server-only. Never prefix with NEXT_PUBLIC_ — keeps the key out of the browser bundle.
# Get key at: https://aistudio.google.com/app/apikey
GEMINI_API_KEY=AIza...

# ─── Stripe ───────────────────────────────────────────────────────────────────
# Found in Stripe Dashboard → Developers → API Keys
STRIPE_API_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Webhook secret — from Stripe Dashboard → Webhooks → your endpoint → Signing Secret
# For local testing use the Stripe CLI: stripe listen --forward-to localhost:3000/api/webhook
STRIPE_WEBHOOK_SECRET=whsec_...

# ─── App ──────────────────────────────────────────────────────────────────────
# Used for Stripe success/cancel redirect URLs
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> **Security note:** `GEMINI_API_KEY` must remain server-only. Prefixing it with `NEXT_PUBLIC_` would expose it in the client bundle and allow anyone to exhaust your quota.

### Local Stripe Webhook Testing

```bash
# Install the Stripe CLI: https://stripe.com/docs/stripe-cli
stripe listen --forward-to localhost:3000/api/webhook

# Trigger a test payment event
stripe trigger checkout.session.completed
```

---

## API Reference

### `POST /api`

Saves a generated AI output record to the database.

**Auth:** Requires Clerk session.

**Request body:**
```json
{
  "title": "My YouTube Ideas",
  "description": "1. How to learn TypeScript in 30 days\n2. ...",
  "templateUsed": "generate-youtube-video-idea"
}
```

**Response:**
```json
{
  "id": "uuid",
  "userId": "clerk_user_id",
  "title": "My YouTube Ideas",
  "description": "...",
  "templateUsed": "generate-youtube-video-idea",
  "createdAt": "2026-06-12T10:00:00.000Z"
}
```

---

### `POST /api/upgrade/checkout`

Creates a Stripe Checkout session for purchasing 10,000 AI credits.

**Auth:** Requires Clerk session.

**Response:**
```json
{ "url": "https://checkout.stripe.com/..." }
```

Redirect the user to `url` to complete payment.

---

### `POST /api/webhook`

Stripe webhook endpoint. Handles `checkout.session.completed` to credit the user's account.

**Auth:** Stripe webhook signature verification via `STRIPE_WEBHOOK_SECRET`.

> Register this URL in your Stripe Dashboard under **Developers → Webhooks**: `https://yourdomain.com/api/webhook`

---

## AI Integration

Creatify AI uses **Google Gemini 1.5 Flash** for all content generation.

### Model Configuration

```typescript
// lib/gemini-ai.ts
generationConfig: {
  temperature: 1,         // Maximum creativity
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
}
```

### Template Prompt Architecture

Each template defines a base `aiPrompt` describing the platform context and output requirements. At generation time, the user's `niche` and optional `outline` are appended to form the final prompt sent to Gemini:

```
[template.aiPrompt]

Niche/Topic: [user niche input]
Outline/Details: [user outline input]
```

### Available Templates

| Slug | Platform | Output |
|---|---|---|
| `facebook-description` | Facebook | Engaging post descriptions |
| `generate-youtube-video-idea` | YouTube | Video concepts with hooks |
| `generate-instagram-hashtags` | Instagram | Curated hashtag sets |
| `generate-tiktok-hashtags` | TikTok | Trending hashtag collections |
| `generate-linkedin-post` | LinkedIn | Professional long-form post |
| `generate-tweet-post` | Twitter / X | 5 tweets ≤ 280 characters each |

### Adding a New Template

1. Add an entry to `contentTemplates` in [lib/content-template.ts](lib/content-template.ts):

```typescript
{
  id: "7",
  slug: "generate-threads-post",
  category: "Social Media",
  name: "Threads Post",
  desc: "Generate engaging Threads posts",
  icon: "/path/to/icon.png",
  aiPrompt: "Write 3 engaging Threads posts optimized for conversation...",
  form: [
    { label: "Post Topic", field: "input", name: "niche", required: true },
    { label: "Key Points", field: "textarea", name: "outline" },
  ],
}
```

2. Drop a platform icon into `public/_static/dashboard/`.

No other changes needed — the dynamic route `/dashboard/[templateSlug]` handles new slugs automatically.

---

## Credit System

| Event | Credit Change |
|---|---|
| New account created | **+10,000** (free) |
| Content generation | **−(character count of generated text)** |
| $10 credit purchase | **+10,000** |
| Minimum balance required to generate | **100 credits** |

Credits are stored as a `Float` on the `User` model and updated inside Prisma `$transaction` blocks to prevent race conditions. The Usage dashboard renders remaining credits in real time via a Recharts `RadialBarChart`.

---

## Payments & Billing

Creatify AI uses Stripe in **payment mode** (one-time purchases).

**Purchase flow:**
1. User navigates to `/dashboard/upgrade`
2. Clicks "Upgrade Credit" → client POSTs to `/api/upgrade/checkout`
3. Server upserts a Stripe Customer record, then creates a Checkout Session
4. User completes payment on Stripe's hosted page
5. Stripe delivers a `checkout.session.completed` webhook to `/api/webhook`
6. Server verifies the webhook signature, then atomically credits 10,000 credits and logs a `Purchase` record
7. User is redirected to `/dashboard/usage` to see the updated balance

Pricing plan configuration lives in [config/subscriptions.ts](config/subscriptions.ts) — structured to support tiered subscription plans when needed.

---

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fengraya%2Fcreatify_AI)

1. Connect your GitHub repository to a new Vercel project
2. Add all environment variables from `.env.example` in the Vercel project settings
3. The `postinstall` script runs `prisma generate` automatically — no extra build configuration needed
4. Push to `main` to trigger a deployment

### Deploy with Docker

A `Dockerfile` is included for containerized deployments (Railway, Render, AWS ECS, etc.):

```bash
# Build the image
docker build -t creatify-ai .

# Run the container
docker run -p 3000:3000 --env-file .env.local creatify-ai
```

### Production Database

Use a managed PostgreSQL provider with a connection pooler for production:

- [Neon](https://neon.tech/) — serverless PostgreSQL, generous free tier, built-in connection pooling
- [Railway](https://railway.app/) — one-click provisioning, automatic migrations
- [Supabase](https://supabase.com/) — PostgreSQL with a built-in studio

After provisioning, set `DATABASE_URL` and run:

```bash
npx prisma migrate deploy
```

---

## Screenshots

| Dashboard — Template Gallery | Content Generation |
|:---:|:---:|
| ![Dashboard](public/_static/dashboard/create.png) | ![History](public/_static/dashboard/history.png) |

| Credit Usage Analytics | Upgrade Page |
|:---:|:---:|
| ![Usage](public/_static/dashboard/usage.png) | ![Upgrade](public/_static/dashboard/upgrade.png) |

---

## Developer Notes

### Prisma Singleton

[lib/db.ts](lib/db.ts) exports a global Prisma client singleton. Without this, Next.js hot-reload would exhaust the PostgreSQL connection pool by creating a new `PrismaClient` on every file save in development.

### Server Actions vs. API Routes

Content generation and saving use **Next.js Server Actions** (`"use server"`) rather than traditional API routes. This allows direct access to Clerk's `currentUser()`, colocates the data layer with the UI, and eliminates an unnecessary HTTP round-trip. The only API routes are those called externally (Stripe webhook) or via client-side redirect (Stripe checkout).

### Atomic Transactions

Both the generation action and webhook handler wrap their database writes in `prisma.$transaction([...])`. This ensures credit changes and their corresponding records (`AIOutput`, `Purchase`) always succeed or fail together — preventing scenarios where credits are deducted but content is never saved, or a payment is received without credits being credited.

### Cache Invalidation

After generation, `revalidatePath('/dashboard/usage')` and `revalidatePath('/dashboard/history')` purge the Next.js full-route cache, so the history table and usage chart always reflect current state without a full page reload.

### Template Extensibility

All content templates are pure data objects in [lib/content-template.ts](lib/content-template.ts). The form renderer, generation action, and history table are entirely template-agnostic — adding a new platform requires only a new object in that array.

---

## Roadmap

- [ ] **Streaming generation** — stream Gemini output token-by-token into the editor for a real-time feel
- [ ] **Bulk generation** — produce multiple variations per template in a single request
- [ ] **Copy to clipboard + share** — one-click export from the editor
- [ ] **Scheduled publishing** — queue generated content for future posting via platform APIs
- [ ] **Team workspaces** — multi-user support with shared credit pools and role-based access
- [ ] **Usage analytics** — track which templates and niches produce the best-performing content
- [ ] **Custom templates** — user-defined prompts and form fields saved per account
- [ ] **Subscription billing** — recurring Stripe subscriptions alongside one-time credit packs
- [ ] **Public API** — developer API for programmatic content generation

---

## Contributing

Contributions are welcome. Please follow these steps:

1. **Fork** the repository
2. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. **Make your changes** and verify code quality:
   ```bash
   npm run lint
   ```
4. **Commit** with a clear, conventional message:
   ```bash
   git commit -m "feat: add threads post template"
   ```
5. **Push** to your fork and open a **Pull Request** against `main`

### Guidelines

- Keep PRs focused — one feature or fix per PR
- Adding a template? Include the platform icon in `public/_static/dashboard/`
- Changing the Prisma schema? Include a migration: `npx prisma migrate dev --name your-change`
- Opening an issue first is encouraged for significant changes

---

## License

This project is licensed under the [MIT License](LICENSE.md).

---

<div align="center">

Built by [Ahmad Aya](https://engrahmadaya.vercel.app/) · [@engraya](https://twitter.com/engraya) · [engrahmadaya@gmail.com](mailto:engrahmadaya@gmail.com)

If this project helped you, consider giving it a star on [GitHub](https://github.com/engraya/creatify_AI)

</div>
