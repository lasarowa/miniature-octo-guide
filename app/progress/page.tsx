import HabitCalendar from '@/components/HabitCalendar'
export default function Progress() { return (<div className="space-y-4"><h1 className="text-2xl font-semibold">Your progress</h1><HabitCalendar completedDays={[1,2,5,6,7,10]} /></div>) }
