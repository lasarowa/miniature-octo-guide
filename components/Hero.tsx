'use client'
import { Button } from './ui'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const r = useRouter()
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">15 minutes a day to master modern tools</h1>
        <p className="text-muted max-w-prose">Bite-size courses in AI, productivity and creation. Track your streak with a 30-day habit calendar.</p>
        <div className="flex gap-3">
          <Button onClick={() => r.push('/pricing')}>Start free trial</Button>
          <Button variant="outline" onClick={() => r.push('/courses')}>Browse courses</Button>
        </div>
      </div>
      <div className="aspect-video rounded-2xl bg-black/5 grid place-items-center border">
        <span className="text-sm text-muted">30-sec promo placeholder</span>
      </div>
    </section>
  )
}
