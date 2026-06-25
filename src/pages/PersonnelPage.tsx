import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Search, Plus, Pencil, Trash2, X, ChevronDown } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import { mockPersonnel, type PersonnelItem } from '@/features/personnel/data'

const ALL_SKILLS = ['All', 'skill']

function DeleteModal({
  target,
  onCancel,
  onConfirm,
}: {
  target: PersonnelItem
  onCancel: () => void
  onConfirm: () => void
}) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl border border-[#9D9672] w-[467px] p-8 relative">
        <button
          onClick={onCancel}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={16} />
        </button>
        <h2 className="font-bold text-lg text-center font-sans">Delete Personnel?</h2>
        <p className="text-xs text-center text-black mt-2 font-sans font-normal">
          If deleted, it cannot be recovered.
        </p>
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={onCancel}
            className="border border-[#BDBDBD] bg-white text-gray-700 rounded-soft px-4 py-2 text-sm font-sans hover:bg-surface transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-error text-white rounded-soft px-4 py-2 text-sm font-sans hover:opacity-90 transition-opacity"
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function PersonnelPage() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [skillFilter, setSkillFilter] = useState('All')
  const [skillOpen, setSkillOpen] = useState(false)
  const [deleteTarget, setDeleteTarget] = useState<PersonnelItem | null>(null)
  const [personnel, setPersonnel] = useState(mockPersonnel)

  const filtered = personnel.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  function handleDelete() {
    if (!deleteTarget) return
    // TODO: DELETE /personnel/:id
    setPersonnel((prev) => prev.filter((p) => p.id !== deleteTarget.id))
    setDeleteTarget(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="px-14 py-8">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-6">
          {/* Left: Title */}
          <h1 className="font-bold text-2xl text-secondary whitespace-nowrap">
            Personnel Management
          </h1>

          {/* Center: Search */}
          <div className="flex-1 mx-8 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-[53px] pl-10 pr-4 border border-[#BDBDBD] rounded-lg bg-white text-sm outline-none focus:border-primary font-sans"
            />
          </div>

          {/* Right: Skill Filter + Add Button */}
          <div className="flex items-center gap-3">
            {/* Skill Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSkillOpen((v) => !v)}
                className="flex items-center justify-between gap-2 w-[160px] h-[53px] px-4 border border-[#BDBDBD] rounded-lg bg-white text-sm text-secondary font-sans hover:bg-surface transition-colors"
              >
                <span>{skillFilter === 'All' ? 'Skill' : skillFilter}</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-secondary transition-transform',
                    skillOpen && 'rotate-180'
                  )}
                />
              </button>
              {skillOpen && (
                <ul className="absolute right-0 top-full mt-1 w-[160px] bg-white border border-[#BDBDBD] rounded-lg shadow-medium z-10 overflow-hidden">
                  {ALL_SKILLS.map((s) => (
                    <li key={s}>
                      <button
                        onClick={() => {
                          setSkillFilter(s)
                          setSkillOpen(false)
                        }}
                        className={cn(
                          'w-full text-left px-4 py-2.5 text-sm font-sans hover:bg-surface transition-colors',
                          skillFilter === s ? 'text-primary font-semibold' : 'text-secondary'
                        )}
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Add Personnel */}
            <button
              onClick={() => navigate('/personnel/add')}
              className="flex items-center gap-2 h-[53px] px-8 bg-primary text-white rounded-lg text-sm font-semibold font-sans hover:bg-primary-hover transition-colors"
            >
              <Plus size={16} />
              Add Personnel
            </button>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filtered.map((item) => (
            <PersonnelCard
              key={item.id}
              item={item}
              onDelete={() => setDeleteTarget(item)}
              onView={() => navigate(`/personnel/${item.id}`)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-sm text-gray-400 py-16">
            No personnel found.
          </div>
        )}
      </div>

      {deleteTarget && (
        <DeleteModal
          target={deleteTarget}
          onCancel={() => setDeleteTarget(null)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  )
}

function PersonnelCard({
  item,
  onDelete,
  onView,
}: {
  item: PersonnelItem
  onDelete: () => void
  onView: () => void
}) {
  return (
    <div className="bg-white border-2 border-[#C5C4AC] rounded-2xl flex flex-row overflow-hidden">
      {/* Photo */}
      <div className="w-[180px] h-[271px] flex-shrink-0 bg-surface flex items-center justify-center">
        {item.photo ? (
          <img src={item.photo} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-surface" />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between p-4 flex-1 min-w-0">
        <div>
          <p className="font-bold text-base text-secondary truncate">{item.name}</p>
          <p className="text-sm text-gray-500 mt-1 leading-snug">{item.faculty}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-surface text-xs px-3 py-1 rounded-full text-secondary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-end gap-2 mt-4">
          <button
            className="text-gray-400 cursor-default"
            aria-label="Edit"
          >
            <Pencil size={18} />
          </button>
          <button
            onClick={onDelete}
            className="text-gray-400 hover:text-error transition-colors"
            aria-label="Delete"
          >
            <Trash2 size={18} />
          </button>
          <button
            onClick={onView}
            className="bg-primary text-white text-sm px-4 py-2 rounded-lg font-sans hover:bg-primary-hover transition-colors"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  )
}
