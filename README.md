# Flow15 24-hour Launch

## Quick start
1. `pnpm i`
2. `cp .env.example .env.local` and fill keys
3. `pnpm dx:setup`
4. `pnpm dev`

## Included
- Next.js 14 App Router + Tailwind
- Hero, catalogue, course page, player, habit calendar
- Stripe webhook skeleton
- Seeded 24 course cards
- Legal stubs, sitemap/robots

## Next steps
- Wire Supabase Auth + RLS, replace seed with DB fetch
- Implement Stripe Checkout creation (/checkout action)
- Add Mux Player with captions + progress autosave
- Build Admin CMS and sales dashboard
- Add GA4 + PostHog + cookie consent
- Add certificate generator and emails
