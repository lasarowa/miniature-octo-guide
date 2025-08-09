'use client'
import { useMemo } from 'react'

type Day = { index: number; completed: boolean }
export default function HabitCalendar({ completedDays }: { completedDays: number[] }) {
  const days: Day[] = useMemo(() => Array.from({ length: 30 }, (_, i) => ({ index: i + 1, completed: completedDays.includes(i + 1) })), [completedDays])
  const streak = useMemo(() => {
    let s = 0
    for (let i = 29; i >= 0; i--) {
      if (days[i]?.completed) s++
      else break
    }
    return s
  }, [days])
  return (
    <div>
      <div className="grid grid-cols-10 gap-2">
        {days.map(d => (
          <div key={d.index} className={`aspect-square rounded-lg border grid place-items-center text-xs ${d.completed ? 'bg-accent/10 border-accent' : 'bg-white'}`}>{d.index}</div>
        ))}
      </div>
      <p className="text-sm text-muted mt-3">Current streak: {streak} day{streak === 1 ? '' : 's'}</p>
    </div>
  )
}
