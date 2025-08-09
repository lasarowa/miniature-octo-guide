import { notFound } from 'next/navigation'
import { seedCourses } from '@/seed/courses'
import Link from 'next/link'

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = seedCourses.find(c => c.slug === params.slug)
  if (!course) return notFound()
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        <div className="aspect-video rounded-2xl bg-black/5 border grid place-items-center">Trailer</div>
        <h1 className="text-2xl font-semibold">{course.title}</h1>
        <p className="text-muted">{course.summary}</p>
        <ul className="list-disc pl-6 text-sm">
          <li>Outcome 1</li><li>Outcome 2</li><li>Outcome 3</li><li>Outcome 4</li><li>Outcome 5</li>
        </ul>
      </div>
      <aside className="space-y-4">
        <div className="border rounded-2xl p-5 bg-white">
          <div className="text-sm text-muted">Includes certificate • {course.duration_minutes} minutes</div>
          <div className="mt-4 grid gap-2">
            <Link className="inline-flex items-center justify-center h-11 px-6 rounded-2xl bg-accent text-white" href={`/checkout?course=${course.slug}`}>Buy for £19</Link>
            <Link className="inline-flex items-center justify-center h-11 px-6 rounded-2xl border" href="/pricing">Subscribe from £29/mo</Link>
          </div>
        </div>
      </aside>
    </div>
  )
}
