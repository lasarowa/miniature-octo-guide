'use client'
import { useState } from 'react'
import HabitCalendar from '@/components/HabitCalendar'

export default function PlayerPage({ params }: { params: { course: string; lesson: string } }) {
  const [completedDays, setCompletedDays] = useState<number[]>([1, 2, 3])
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        <div className="aspect-video rounded-2xl bg-black/5 border grid place-items-center">Mux Player here</div>
        <div className="flex items-center gap-3 text-sm">
          <button className="h-9 px-3 rounded-xl border" onClick={() => setCompletedDays(d => Array.from(new Set([...d, d.length + 1]).values()))}>Mark complete</button>
          <span className="text-muted">Progress autosaves</span>
        </div>
        <div className="prose max-w-none">
          <h2>Transcript</h2>
          <p>Transcript placeholder.</p>
        </div>
      </div>
      <aside className="space-y-4">
        <div className="border rounded-2xl p-5 bg-white">
          <h3 className="font-semibold mb-2">Your 30-day habit</h3>
          <HabitCalendar completedDays={completedDays} />
        </div>
      </aside>
    </div>
  )
}
