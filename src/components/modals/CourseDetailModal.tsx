'use client'

import { Calendar, Users } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import type { Course } from "@/types/course"

interface CourseDetailModalProps {
  course: Course | null
  open: boolean
  onClose: () => void
}

export default function CourseDetailModal({ course, open, onClose }: CourseDetailModalProps) {
  if (!course) return null

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose() }}>
      <DialogContent className="bg-background lg:bg-white p-6 lg:p-10 lg:pb-8 overflow-y-auto max-h-[95vh] rounded-medium lg:rounded-[16px] w-[calc(100%-2rem)] sm:w-full max-w-[600px] lg:max-w-[750px] xl:max-w-[850px] gap-0 lg:border-none lg:shadow-2xl">
        <DialogTitle className="sr-only">{course.title}</DialogTitle>

        {/* Title */}
        <h2 className="text-[18px] lg:text-[32px] font-extrabold text-foreground lg:text-gray-900 mb-4 lg:mb-6 pr-6">
          {course.title}
        </h2>

        {/* Thumbnail Placeholder */}
        <div className="w-full aspect-[16/9] lg:aspect-[2/1] rounded-[12px] border border-border lg:border-gray-200 overflow-hidden mb-6 lg:mb-8 bg-surface">
          <img 
            src="/images/courses/course-showcase-placeholder.png" 
            alt={course.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 lg:mb-8">
          <div>
            <p className="text-[10px] lg:text-[12px] font-semibold text-muted-foreground lg:text-gray-500 uppercase tracking-wide lg:tracking-wider mb-1 lg:mb-2">
              START
            </p>
            <p className="text-[12px] lg:text-[15px] font-bold text-foreground lg:text-gray-900">
              {course.startDate || "Dec 2024"}
            </p>
          </div>
          <div>
            <p className="text-[10px] lg:text-[12px] font-semibold text-muted-foreground lg:text-gray-500 uppercase tracking-wide mb-1 lg:mb-2">
              DURATION
            </p>
            <p className="text-[12px] lg:text-[15px] font-bold text-foreground lg:text-gray-900">
              {course.duration || "10 weeks"}
            </p>
          </div>
          <div>
            <p className="text-[10px] lg:text-[12px] font-semibold text-muted-foreground lg:text-gray-500 uppercase tracking-wide mb-1 lg:mb-2">
              LEVEL
            </p>
            <p className="text-[12px] lg:text-[15px] font-bold text-foreground lg:text-gray-900">
              {course.level || "Beginner+"}
            </p>
          </div>
          <div>
            <p className="text-[10px] lg:text-[12px] font-semibold text-muted-foreground lg:text-gray-500 uppercase tracking-wide mb-1 lg:mb-2">
              TRAINER
            </p>
            <p className="text-[12px] lg:text-[15px] font-bold text-foreground lg:text-gray-900">
              {course.trainerName || "อาจารย์ ดร.ทมะ ดวงนามล"}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-[12px] lg:text-[16px] font-normal text-foreground lg:text-gray-800 leading-relaxed mb-8 lg:mb-12">
          {course.description}
        </p>

        {/* Footer / Close Button */}
        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="border border-border lg:border-gray-300 rounded-[8px] lg:rounded-md px-6 py-2 text-[12px] lg:text-[14px] font-medium text-muted-foreground lg:text-gray-500 hover:bg-surface lg:hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>

      </DialogContent>
    </Dialog>
  )
}
