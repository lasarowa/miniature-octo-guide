import Link from 'next/link'

export type Course = {
  slug: string
  title: string
  summary: string
  duration_minutes: number
  level: string
  icon: string
}
}
export default function CourseCard({ c }: { c: Course }) {
  return (
    <Link href={`/course/${c.slug}`} className="group border rounded-2xl p-5 hover:shadow-lg transition bg-white">
      <div className="text-3xl">{c.icon}</div>
      <h3 className="mt-3 font-semibold text-lg">{c.title}</h3>
      <p className="text-sm text-muted line-clamp-2">{c.summary}</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-muted">
        <span className="px-2 py-1 rounded-full bg-black/5">{c.duration_minutes} min</span>
        <span className="px-2 py-1 rounded-full bg-black/5">{c.level}</span>
      </div>
    </Link>
  )
}
