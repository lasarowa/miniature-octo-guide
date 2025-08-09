import Link from 'next/link'

const tiers = [
  { name: 'Single Course', price: '£19', cta: '/checkout?mode=single' },
  { name: 'Monthly', price: '£29/mo', badge: 'Best for starters', cta: '/checkout?mode=monthly' },
  { name: 'Annual', price: '£199/yr', badge: 'Best value', cta: '/checkout?mode=annual' }
]

export default function Pricing() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="border rounded-2xl p-6 bg-white">
            <div className="text-sm text-muted">{t.badge || '-'}</div>
            <h3 className="mt-2 font-semibold">{t.name}</h3>
            <div className="text-2xl mt-2">{t.price}</div>
            <Link href={t.cta} className="mt-4 inline-flex h-11 px-6 rounded-2xl bg-accent text-white items-center justify-center">Choose</Link>
            <p className="text-xs text-muted mt-2">7-day free trial available on subscriptions.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
