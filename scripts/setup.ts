import fs from 'node:fs'

const env = `NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_BRAND_NAME=Flow15

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_SINGLE=
STRIPE_PRICE_MONTHLY=
STRIPE_PRICE_ANNUAL=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

EMAIL_FROM=Flow15 <no-reply@flow15.app>
RESEND_API_KEY=
`

if (!fs.existsSync('.env.local')) {
  fs.writeFileSync('.env.local', env)
  console.log('✔ Created .env.local (fill in your keys)')
}
if (!fs.existsSync('next-sitemap.config.js')) {
  fs.writeFileSync('next-sitemap.config.js', `module.exports={ siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000', generateRobotsTxt: true }`)
  console.log('✔ Added next-sitemap config')
}
console.log('DX setup complete. Run: pnpm dev')
