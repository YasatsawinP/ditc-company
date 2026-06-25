import { Link, useParams } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { mockPersonnelDetail } from '@/features/personnel/data'

export default function PersonnelEditPage() {
  // TODO: replace with API — useQuery({ queryKey: queryKeys.personnel.detail(id), queryFn: () => api.getPersonnel(id) })
  const { id: _id } = useParams<{ id: string }>()
  const person = mockPersonnelDetail

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="px-10 py-8">
        {/* Header */}
        <Link
          to="/personnel"
          className="text-sm text-muted-foreground hover:opacity-70 transition-opacity"
        >
          ← Back to Personnel Management
        </Link>
        <h1 className="font-bold text-2xl text-secondary mt-2">Personnel Details</h1>

        {/* Main content */}
        <div className="flex gap-8 mt-6">
          {/* Left column — profile picture */}
          <div className="w-[273px] shrink-0">
            <img
              src={person.profilePicture}
              alt={`${person.firstName} ${person.lastName}`}
              className="w-[273px] h-[273px] rounded-[8px] border-2 border-[#2F1D19] object-cover object-top"
            />
            <p className="text-center mt-2 text-sm text-secondary">Profile Picture</p>
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Row 1 — First Name + Last Name */}
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm font-medium text-secondary">First Name</label>
                <input
                  readOnly
                  value={person.firstName}
                  className="border border-[#BDBDBD] rounded-[8px] h-[56px] px-4 py-0 w-full text-base bg-white outline-none font-sans text-secondary"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm font-medium text-secondary">Last Name</label>
                <input
                  readOnly
                  value={person.lastName}
                  className="border border-[#BDBDBD] rounded-[8px] h-[56px] px-4 py-0 w-full text-base bg-white outline-none font-sans text-secondary"
                />
              </div>
            </div>

            {/* Row 2 — Email + Phone */}
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm font-medium text-secondary">Email</label>
                <input
                  readOnly
                  value={person.email}
                  className="border border-[#BDBDBD] rounded-[8px] h-[56px] px-4 w-full bg-white outline-none font-sans text-secondary text-sm"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm font-medium text-secondary">Phone</label>
                <div className="flex border border-[#BDBDBD] rounded-[8px] h-[56px] overflow-hidden">
                  <span className="flex items-center px-3 bg-surface text-secondary text-sm font-sans border-r border-[#BDBDBD] shrink-0">
                    66+
                  </span>
                  <input
                    readOnly
                    value={person.phone}
                    className="flex-1 px-4 bg-white outline-none font-sans text-secondary text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-secondary">Education</label>
              <div className="border border-[#BDBDBD] rounded-[8px] p-4 min-h-[215px] flex flex-wrap gap-3 content-start">
                {person.education.map((edu, i) => (
                  <span
                    key={i}
                    className="border border-[#010101] rounded-full px-3 py-2 text-sm bg-white text-[#2F1D19] whitespace-pre-line"
                  >
                    {edu}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-secondary">Skill</label>
              <div className="border border-[#BDBDBD] rounded-[8px] p-4 min-h-[180px] flex flex-wrap gap-2 content-start">
                {person.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="border border-[#BDBDBD] rounded-full px-3 py-1 bg-white text-sm text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-secondary">Expertise</label>
              <div className="border border-[#BDBDBD] rounded-[8px] p-4 min-h-[180px] flex flex-wrap gap-2 content-start">
                {person.expertise.map((exp, i) => (
                  <span
                    key={i}
                    className="border border-[#010101] rounded-full px-4 py-2 bg-white text-sm text-secondary"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
