'use client'

import { useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { Calendar, Users, X, ChevronDown, Check } from "lucide-react"
import { getCourses } from "@/lib/api/courses"
import type { Course } from "@/types/course"
import CourseDetailModal from "@/components/modals/CourseDetailModal"

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")
  const router = useRouter()

  useEffect(() => {
    getCourses().then(setCourses)
  }, [])

  // To simulate 8 items as shown in Figma if we don't have enough mock data
  const displayCourses = courses.length >= 8 ? courses : [...courses, ...courses].slice(0, 8)

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-[800px] mx-auto relative pt-8 pb-16">
        
        {/* Close Button */}
        <button 
          onClick={() => router.back()}
          className="absolute right-0 top-0 p-2 text-muted-foreground hover:bg-surface rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>

        {/* Header */}
        <div className="mb-6 lg:mb-8 mt-4 lg:mt-6">
          <h2 className="text-[14px] lg:text-[18px] font-semibold text-primary uppercase tracking-widest text-center">
            COURSE SHOWCASE
          </h2>
        </div>

        {/* Filter Dropdown (Custom) */}
        <div className="flex justify-end mb-6 relative z-50">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between border border-primary rounded-[8px] px-4 py-2 text-[12px] lg:text-sm text-foreground bg-background outline-none cursor-pointer w-[120px] lg:w-[140px]"
          >
            {activeFilter}
            <ChevronDown className="w-4 h-4 text-muted-foreground ml-2" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-[180px] bg-background border border-primary rounded-[12px] shadow-strong p-3 flex flex-col gap-1">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full border border-primary rounded-[8px] px-3 py-1.5 text-[12px] lg:text-sm text-foreground outline-none mb-2"
              />
              {["All", "Business", "Tech", "Design", "Soft Skill"].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setActiveFilter(option);
                    setIsDropdownOpen(false);
                  }}
                  className="flex items-center justify-between w-full text-left px-2 py-1.5 rounded-soft hover:bg-surface text-[12px] lg:text-sm"
                >
                  <span className={activeFilter === option ? "font-bold text-foreground" : "font-medium text-muted-foreground"}>
                    {option}
                  </span>
                  {activeFilter === option && <Check className="w-4 h-4 text-primary" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6">
          {displayCourses.map((course, i) => (
            <div
              key={i}
              onClick={() => setSelectedCourse(course)}
              className="bg-background rounded-medium overflow-hidden border border-border flex flex-col shadow-subtle hover:shadow-medium transition-shadow group cursor-pointer text-left"
            >
              {/* Image Placeholder area */}
              <div className="w-full aspect-[2/1] bg-surface flex items-center justify-center border-b border-border overflow-hidden">
                <img 
                  src="/images/courses/course-showcase-placeholder.png" 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
    </div>
  )
}
