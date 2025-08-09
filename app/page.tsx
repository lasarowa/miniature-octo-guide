import Hero from '@/components/Hero'
import CourseCard from '@/components/CourseCard'
import { seedCourses } from '@/seed/courses'

export default async function HomePage() {
  const top = seedCourses.slice(0, 6)
  return (
    <div className="space-y-16">
      <Hero />
      <section>
        <h2 className="text-xl font-semibold mb-4">Top courses</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {top.map(c => (<CourseCard key={c.slug} c={c} />))}
        </div>
      </section>
      <section className="border rounded-2xl p-6 bg-white">
        <h3 className="font-semibold mb-2">How the 30-day habit works</h3>
        <p className="text-sm text-muted">Complete one lesson a day, watch your streak grow, and collect certificates as you complete courses.</p>
      </section>
    </div>
  )
}
