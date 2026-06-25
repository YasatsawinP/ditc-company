'use client'

import { useState, useEffect } from "react"
import { Calendar, Users, Search, Check, ChevronDown, ChevronUp } from "lucide-react"
import { getCourses } from "@/lib/api/courses"
import type { Course } from "@/types/course"
import CourseDetailModal from "@/components/modals/CourseDetailModal"

import Link from "next/link"

type FilterTab = "All" | "Business" | "Tech" | "Design"
const FILTER_TABS: FilterTab[] = ["All", "Business", "Tech", "Design"]

export default function CourseShowcaseSection() {
  const [allCourses, setAllCourses] = useState<Course[]>([])
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All")
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const displayTabs = FILTER_TABS.filter(tab => tab.toLowerCase().includes(searchQuery.toLowerCase()))

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
            <p className="text-[12px] lg:text-[14px] font-medium lg:font-semibold text-primary uppercase tracking-widest text-center lg:text-left mb-[4px] lg:mb-3">
              COURSE SHOWCASE
            </p>
            <h2 className="text-[14px] lg:text-[48px] xl:text-[54px] font-bold text-foreground lg:text-gray-900 leading-[27px] lg:leading-[1.15] text-center lg:text-left mb-[15px] lg:mb-0">
              Recently organized<br className="hidden lg:block"/> training programs.
            </h2>
          </div>

          {/* Right side controls */}
          <div className="flex justify-end mb-6 lg:mb-0 lg:pb-3">
            {/* Mobile View All Link */}
            <Link
              href="/courses"
              className="text-[10px] font-medium text-primary underline hover:opacity-80 transition-opacity lg:hidden"
            >
              View All
            </Link>

            {/* Desktop Dropdown */}
            <div className="hidden lg:block relative z-50">
              {/* Trigger Button */}
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between bg-white border border-primary text-gray-900 text-[14px] rounded-md pl-4 pr-3 py-2 outline-none cursor-pointer w-[200px]"
              >
                <span>{activeFilter}</span>
                {isDropdownOpen ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  
                  <div className="absolute right-0 mt-2 w-[200px] bg-white rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-primary z-50 flex flex-col py-1">
                    
                    {/* Search Input */}
                    <div className="px-2 pb-2 pt-1">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-3 pr-8 py-1.5 text-[13px] border border-primary rounded-md outline-none text-gray-800 placeholder:text-gray-500 focus:ring-1 focus:ring-primary"
                        />
                        <Search className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-800" />
                      </div>
                    </div>

                    {/* Options */}
                    <div className="flex flex-col">
                      {displayTabs.length === 0 ? (
                        <div className="px-4 py-2 text-sm text-gray-500">No results</div>
                      ) : (
                        displayTabs.map(tab => (
                          <button
                            key={tab}
                            onClick={() => {
                              setActiveFilter(tab)
                              setIsDropdownOpen(false)
                              setSearchQuery("")
                            }}
                            className={`w-full flex items-center justify-between px-4 py-2 text-[14px] text-left transition-colors ${
                              activeFilter === tab ? 'bg-orange-50/50' : 'hover:bg-gray-50'
                            }`}
                          >
                            <span className="text-gray-900">{tab}</span>
                            {activeFilter === tab && (
                              <Check className="w-4 h-4 text-primary" />
                            )}
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-3 lg:gap-6 lg:grid-cols-3">
          {filtered.slice(0, 6).map((course) => (
            <div
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className="bg-background rounded-medium overflow-hidden border border-border cursor-pointer flex flex-col shadow-subtle hover:shadow-medium transition-shadow group lg:p-4 lg:transition-all lg:duration-300 lg:hover:scale-[1.02] lg:hover:shadow-xl lg:hover:border-primary/20"
            >
              {/* Image Placeholder area */}
              <div className="w-full aspect-[2/1] bg-surface flex items-center justify-center border-b border-border overflow-hidden lg:aspect-video lg:rounded-t-sm">
                <img
                  src="/images/courses/course-showcase-placeholder.png"
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 lg:group-hover:scale-100"
                />
              </div>

              {/* Content area */}
              <div className="px-2 py-1.5 lg:px-5 lg:py-4 flex flex-col flex-grow">
                <h3 className="text-[12px] lg:text-[20px] font-extrabold lg:font-bold text-foreground leading-tight mb-1">
                  {course.title}
                </h3>
                <p className="text-[8px] lg:text-[14px] font-normal text-muted-foreground leading-relaxed line-clamp-2">
                  {course.subtitle || "SQL, dashboards, and storytelling with data. Designed for analysts and manage.."}
                </p>

                <div className="mt-auto pt-2 lg:pt-3">
                  <div className="w-full h-px bg-border mb-1.5 lg:mb-3" />
                  <div className="flex items-center gap-2 lg:gap-5 text-muted-foreground">
                    <span className="flex items-center gap-0.5 lg:gap-1.5 whitespace-nowrap">
                      <Calendar className="w-[7px] h-[7px] lg:w-[13px] lg:h-[13px]" />
                      <span className="text-[7px] lg:text-[13px] font-medium">{course.startDate || "Dec 24"}</span>
                    </span>
                    <span className="flex items-center gap-0.5 lg:gap-1.5 whitespace-nowrap">
                      <Users className="w-[7px] h-[7px] lg:w-[13px] lg:h-[13px]" />
                      <span className="text-[7px] lg:text-[13px] font-medium">{course.totalStudents || "55"} Students</span>
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
