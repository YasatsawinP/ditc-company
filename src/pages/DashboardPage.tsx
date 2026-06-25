import Navbar from '@/components/Navbar'
import { Users2, BookOpen, CalendarDays, Award } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const statCards = [
  { icon: Users2, label: 'Total Teacher', value: '125' },
  { icon: BookOpen, label: 'Total Courses', value: '85' },
  { icon: CalendarDays, label: 'Upcoming Events', value: '12' },
  { icon: Award, label: 'Certificates Issued', value: '340' },
]

const chartData = [
  { month: 'Jan', teacher: 10, courses: 25 },
  { month: 'Feb', teacher: 45, courses: 20 },
  { month: 'Mar', teacher: 55, courses: 50 },
  { month: 'Apr', teacher: 35, courses: 65 },
  { month: 'May', teacher: 80, courses: 70 },
]

const bottomCards = [
  { title: 'Commit Activity', count: '000 Commit' },
  { title: 'Upcoming Schedule', count: '000 Event' },
  { title: 'Recent Matches', count: '000 Event' },
]

const eventItems = ['Event 01', 'Event 02', 'Event 03']

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="p-6 flex flex-col gap-4">
        {/* Section 1 — Stat cards */}
        <div className="grid grid-cols-4 gap-4">
          {statCards.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-surface border-2 border-[#C5C4AC] rounded-soft p-4 flex flex-row items-center gap-4"
            >
              <Icon className="text-[#2d1a0e] shrink-0" size={48} />
              <div className="flex flex-col">
                <span className="text-sm text-[#2d1a0e] font-normal">{label}</span>
                <span className="text-4xl font-bold text-[#2d1a0e] leading-tight">{value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2 — Statistics Overview */}
        <div className="bg-white border border-[#C5C4AC] rounded-soft p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-base font-bold text-secondary">Statistics Overview</h2>
            <div className="flex items-center gap-4 pr-4">
              <span className="flex items-center gap-1.5 text-sm text-secondary">
                <span className="w-3 h-3 rounded-full inline-block shrink-0" style={{ background: '#F48E2E' }} />
                xxxx
              </span>
              <span className="flex items-center gap-1.5 text-sm text-secondary">
                <span className="w-3 h-3 rounded-full inline-block shrink-0" style={{ background: '#694535' }} />
                xxxx
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={chartData}>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#694535', fontSize: 12 }}
              />
              <YAxis hide={true} />
              <Line
                dataKey="teacher"
                stroke="#F48E2E"
                strokeWidth={2}
                dot={{ fill: '#F48E2E', r: 5 }}
                type="linear"
                isAnimationActive={false}
              />
              <Line
                dataKey="courses"
                stroke="#694535"
                strokeWidth={2}
                dot={{ fill: '#694535', r: 5 }}
                type="linear"
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Section 3 — Bottom 3 cards */}
        <div className="grid grid-cols-3 gap-4">
          {bottomCards.map(({ title, count }) => (
            <div
              key={title}
              className="bg-surface border-2 border-[#C5C4AC] rounded-soft overflow-hidden"
            >
              <div className="flex justify-between items-center px-4 pt-4 pb-2">
                <span className="font-bold text-base text-secondary">{title}</span>
                <span className="text-sm text-[#a09880] font-normal">{count}</span>
              </div>
              <div className="border-b border-[#C5C4AC]" />
              <ul className="overflow-y-auto max-h-[160px]">
                {eventItems.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-3 text-sm text-secondary border-b border-[#C5C4AC] last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
