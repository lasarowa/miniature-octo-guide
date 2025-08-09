import CourseCard from '@/components/CourseCard'
import { seedCourses } from '@/seed/courses'

export default function Catalogue() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">All courses</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {seedCourses.map(c => <CourseCard key={c.slug} c={c} />)}
      </div>
    </div>
  )
}
