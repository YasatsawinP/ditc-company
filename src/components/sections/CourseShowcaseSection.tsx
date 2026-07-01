'use client'

import { useState, useEffect } from "react"
import { Calendar, Users } from "lucide-react"
import { getCourses } from "@/lib/api/courses"
import type { Course } from "@/types/course"
import CourseDetailModal from "@/components/modals/CourseDetailModal"

type FilterTab = "All" | "Business" | "Tech" | "Design"
const FILTER_TABS: FilterTab[] = ["All", "Business", "Tech", "Design"]

export default function CourseShowcaseSection() {
  const [allCourses, setAllCourses] = useState<Course[]>([])
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All")
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [dropdownSearch, setDropdownSearch] = useState("")

  useEffect(() => {
    getCourses().then(setAllCourses)
  }, [])

  const filtered =
    activeFilter === "All"
      ? allCourses
      : allCourses.filter((c) => c.category === activeFilter)

  return (
    <section id="courses" className="bg-background py-16 px-4 lg:py-20">
      <div className="max-w-[900px] mx-auto lg:max-w-screen-2xl lg:px-20">
        {/* Header Section */}
        <div className="flex flex-col mb-[15px] lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          {/* Titles */}
          <div className="text-center flex flex-col items-center lg:items-start lg:text-left">
            <p className="text-[13px] lg:text-[14px] font-medium lg:font-bold text-primary uppercase tracking-widest text-center lg:text-left mb-[8px] lg:mb-3">
              PROGRAMS WE'VE BUILT
            </p>
            <h2 className="text-[20px] lg:text-[44px] xl:text-[54px] font-bold text-[#2F2119] lg:text-[#2F1D19] leading-[1.3] lg:leading-[1.15] text-center lg:text-left mb-[15px] lg:mb-0 tracking-tight">
              Real programs. <br className="hidden lg:block"/> Real impact.
            </h2>
          </div>

          {/* Filter / View All */}
          <div className="flex justify-end mb-4 lg:mb-0 lg:pb-2 w-full lg:w-auto relative">
            {/* Mobile View All */}
            <a href="#all" className="block lg:hidden text-[13px] font-medium text-primary underline underline-offset-4">
              View All
            </a>

            {/* Desktop Custom Dropdown */}
            <div className="hidden lg:block relative z-50 min-w-[160px]">
              {/* Trigger Button */}
              <div 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center justify-between border ${isDropdownOpen ? 'border-[#F48220]' : 'border-[#F48220]/50 hover:border-[#F48220]'} transition-colors rounded-[6px] bg-white text-[#333333] text-[14px] px-4 py-2 cursor-pointer select-none`}
              >
                <span>{activeFilter}</span>
                <svg className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <>
                  {/* Invisible overlay to close dropdown when clicking outside */}
                  <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
                  
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#F48220] rounded-[6px] shadow-lg z-50 overflow-hidden flex flex-col py-1">
                    {/* Search Bar */}
                    <div className="px-2 pb-2 pt-1 relative">
                      <input 
                        type="text" 
                        placeholder="Search" 
                        value={dropdownSearch}
                        onChange={(e) => setDropdownSearch(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-[13px] bg-white outline-none rounded-[4px] border border-transparent hover:border-gray-200 focus:border-[#F48220]/50 transition-colors"
                      />
                      <svg className="w-4 h-4 text-gray-600 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    
                    <div className="w-full h-px bg-gray-100 mb-1" />

                    {/* Options List */}
                    <div className="flex flex-col max-h-[200px] overflow-y-auto px-1">
                      {FILTER_TABS.filter(tab => tab.toLowerCase().includes(dropdownSearch.toLowerCase())).map((tab) => (
                        <div
                          key={tab}
                          onClick={() => {
                            setActiveFilter(tab)
                            setIsDropdownOpen(false)
                            setDropdownSearch("")
                          }}
                          className={`flex items-center justify-between px-3 py-2 text-[14px] cursor-pointer rounded-[4px] ${activeFilter === tab ? 'bg-[#F3F4F6] text-[#333333]' : 'bg-white text-[#333333] hover:bg-gray-50'}`}
                        >
                          <span>{tab}</span>
                          {activeFilter === tab && (
                            <svg className="w-4 h-4 text-[#F48220]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          )}
                        </div>
                      ))}
                      
                      {/* Empty state for search */}
                      {FILTER_TABS.filter(tab => tab.toLowerCase().includes(dropdownSearch.toLowerCase())).length === 0 && (
                        <div className="px-3 py-4 text-center text-[13px] text-gray-500">
                          No results found
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-[10px] lg:gap-6 lg:grid-cols-3">
          {filtered.slice(0, 6).map((course, index) => (
            <div
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className={`bg-white rounded-[12px] overflow-hidden border border-[#D1D2C9] cursor-pointer flex-col shadow-none hover:shadow-none lg:shadow-subtle lg:hover:shadow-medium lg:rounded-medium lg:border-border transition-shadow group lg:p-4 lg:transition-all lg:duration-300 lg:hover:scale-[1.02] lg:hover:shadow-xl lg:hover:border-primary/20 ${index >= 4 ? 'hidden lg:flex' : 'flex'}`}
            >
              {/* Image Placeholder area */}
              <div className="w-full aspect-[16/9] bg-surface flex items-center justify-center border-b border-[#E5E6DF] lg:border-border overflow-hidden lg:aspect-video lg:rounded-t-sm">
                <img
                  src="/images/courses/course-showcase-placeholder.png"
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 lg:group-hover:scale-100"
                />
              </div>

              {/* Content area */}
              <div className="px-3 py-3 lg:px-5 lg:py-4 flex flex-col flex-grow bg-white lg:bg-transparent">
                <h3 className="text-[16px] lg:text-[20px] font-black lg:font-bold text-[#2F2119] lg:text-foreground leading-tight mb-[4px] lg:mb-1">
                  {course.title}
                </h3>
                <p className="text-[10px] lg:text-[14px] font-normal text-gray-500 lg:text-muted-foreground leading-[1.4] lg:leading-relaxed line-clamp-2">
                  {course.subtitle || "SQL, dashboards, and storytelling with data. Designed for analysts and manage.."}
                </p>

                <div className="mt-auto pt-[6px] lg:pt-3">
                  <div className="w-full h-px bg-[#D1D2C9]/60 lg:bg-border mb-[6px] lg:mb-3" />
                  <div className="flex items-center gap-[6px] lg:gap-5 text-gray-500 lg:text-muted-foreground">
                    <span className="flex items-center gap-[4px] lg:gap-1.5 whitespace-nowrap">
                      <Calendar className="w-[10px] h-[10px] lg:w-[13px] lg:h-[13px]" />
                      <span className="text-[9px] lg:text-[13px] font-medium">{course.startDate || "Dec 24"}</span>
                    </span>
                    <span className="flex items-center gap-[4px] lg:gap-1.5 whitespace-nowrap">
                      <Users className="w-[10px] h-[10px] lg:w-[13px] lg:h-[13px]" />
                      <span className="text-[9px] lg:text-[13px] font-medium">{course.totalStudents || "55"} Students</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CourseDetailModal
          course={selectedCourse}
          open={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      </div>
    </section>
  )
}
