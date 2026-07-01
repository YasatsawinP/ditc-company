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
            <p className="text-[13px] lg:text-[14px] font-medium lg:font-semibold text-primary uppercase tracking-widest text-center lg:text-left mb-[8px] lg:mb-3">
              PROGRAMS WE'VE BUILT
            </p>
            <h2 className="text-[24px] lg:text-[48px] xl:text-[54px] font-bold text-[#2F2119] lg:text-gray-900 leading-[1.3] lg:leading-[1.15] text-center lg:text-left mb-[15px] lg:mb-0">
              Real programs. Real impact.
            </h2>
          </div>

          {/* Filter / View All */}
          <div className="flex justify-end mb-4 lg:mb-0 lg:pb-3 w-full lg:w-auto">
            {/* Mobile View All */}
            <a href="#all" className="block lg:hidden text-[13px] font-medium text-primary underline underline-offset-4">
              View All
            </a>
            {/* Desktop Filter */}
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value as FilterTab)}
              className="hidden lg:block border border-border rounded-soft bg-background text-foreground lg:text-[14px] px-3 py-2 outline-none cursor-pointer focus:border-primary"
            >
              {FILTER_TABS.map((tab) => (
                <option key={tab} value={tab}>{tab}</option>
              ))}
            </select>
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
