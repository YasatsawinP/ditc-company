import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bell, Download, Clock4, Search, ChevronDown } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import { mockRequirements, type RequirementStatus } from '@/features/requirement/data'

const STATUS_OPTIONS = ['All Status', 'Pending', 'In Progress', 'Testing', 'Completed'] as const

function StatusBadge({ status }: { status: NonNullable<RequirementStatus> }) {
  const styles: Record<NonNullable<RequirementStatus>, string> = {
    Approved: 'bg-[#DAFFD9] text-green-800',
    Pending: 'bg-[#FFFBC5] text-yellow-800',
    Rejected: 'bg-[#FDE3E3] text-red-700',
    'In Progress': 'bg-blue-100 text-blue-800',
    Testing: 'bg-purple-100 text-purple-800',
  }

  return (
    <span className={cn('rounded-[4px] px-[18px] py-[10px] text-sm font-medium', styles[status])}>
      {status}
    </span>
  )
}

export default function RequirementPage() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('All Status')
  const [statusOpen, setStatusOpen] = useState(false)

  const filtered = mockRequirements.filter((item) => {
    const matchesStatus =
      selectedStatus === 'All Status' || item.status === selectedStatus
    const matchesSearch =
      search === '' ||
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.subject.toLowerCase().includes(search.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="px-14 py-8">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-6">
          {/* Left: Title */}
          <h1 className="font-bold text-2xl text-secondary whitespace-nowrap">All Requirement</h1>

          {/* Center: Search */}
          <div className="flex-1 mx-8 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-11 pl-10 pr-4 border border-[#C5C4AC] rounded-soft bg-white text-sm outline-none focus:border-primary font-sans"
            />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* Bell */}
            <button className="relative w-10 h-10 flex items-center justify-center border border-[#C5C4AC] rounded-soft bg-white hover:bg-surface transition-colors">
              <Bell className="w-5 h-5 text-secondary" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full" />
            </button>

            {/* Download */}
            <button className="w-10 h-10 flex items-center justify-center border border-[#C5C4AC] rounded-soft bg-white hover:bg-surface transition-colors">
              <Download className="w-5 h-5 text-secondary" />
            </button>

            {/* Status Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setStatusOpen((v) => !v)}
                className="flex items-center justify-between gap-2 w-[240px] h-11 px-4 border border-[#C5C4AC] rounded-soft bg-white text-sm text-secondary font-sans hover:bg-surface transition-colors"
              >
                <span>{selectedStatus}</span>
                <ChevronDown className={cn('w-4 h-4 text-secondary transition-transform', statusOpen && 'rotate-180')} />
              </button>

              {statusOpen && (
                <ul className="absolute right-0 top-full mt-1 w-[240px] bg-white border border-[#C5C4AC] rounded-soft shadow-medium z-10 overflow-hidden">
                  {STATUS_OPTIONS.map((opt) => (
                    <li key={opt}>
                      <button
                        onClick={() => { setSelectedStatus(opt); setStatusOpen(false) }}
                        className={cn(
                          'w-full text-left px-4 py-2.5 text-sm font-sans hover:bg-surface transition-colors',
                          selectedStatus === opt ? 'text-primary font-semibold' : 'text-secondary'
                        )}
                      >
                        {opt}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Requirement Cards List */}
        <div className="border border-[#C5C4AC] rounded-soft overflow-hidden">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/requirement/${item.id}`)}
              className="flex items-center px-6 py-4 bg-surface border-b border-[#C5C4AC] last:border-b-0 cursor-pointer hover:brightness-95 transition-all gap-4"
            >
              {/* Left block */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-base text-secondary">{item.company}</p>
                <p className="text-sm text-gray-500 mt-0.5">Subject: {item.subject}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <a
                    href={`mailto:${item.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm text-primary underline"
                  >
                    {item.email}
                  </a>
                  <span className="text-sm text-gray-500">Phone: {item.phone}</span>
                </div>
              </div>

              {/* Right block */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Clock4 className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                {item.status && <StatusBadge status={item.status} />}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="px-6 py-10 text-center text-sm text-gray-400 bg-surface">
              No requirements found.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
