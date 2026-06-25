'use client'

import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import type { Trainer } from '@/types/trainer'

interface TrainerDetailModalProps {
  trainer: Trainer | null
  open: boolean
  onClose: () => void
}

export default function TrainerDetailModal({ trainer, open, onClose }: TrainerDetailModalProps) {
  if (!trainer) return null

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose() }}>
      <DialogContent className="bg-background lg:bg-white rounded-medium lg:rounded-[24px] shadow-strong lg:shadow-2xl lg:border-none overflow-y-auto max-h-[90vh] w-[90vw] max-w-[600px] lg:max-w-[850px] xl:max-w-[950px] p-6 lg:p-10 gap-0">
        <DialogTitle className="sr-only">{trainer.name}</DialogTitle>

        <div className="lg:flex lg:flex-row lg:gap-10">
          
          {/* Left Column (Desktop) / Top Row (Mobile) */}
          <div className="flex flex-row lg:flex-col gap-5 lg:gap-0 mb-5 lg:mb-0 lg:w-[45%] lg:shrink-0">
            {/* Image */}
            <div className="relative w-[180px] lg:w-full shrink-0 aspect-[4/5] lg:aspect-[3/4] rounded-[12px] lg:rounded-[16px] overflow-hidden bg-surface">
              <Image
                src={trainer.photoUrl}
                alt={trainer.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Mobile Text (Hidden on Desktop) */}
            <div className="flex flex-col pt-1 lg:hidden">
              <p className="text-[10px] font-medium text-primary uppercase tracking-widest mb-1">
                {trainer.title}
              </p>
              <h3 className="text-[18px] font-bold text-foreground mb-1">
                {trainer.name}
              </h3>
              <p className="text-[12px] text-muted-foreground mb-3">
                Dr. Tama — {trainer.company}
              </p>
              <p className="text-[12px] text-foreground leading-relaxed">
                {trainer.bio}
              </p>
            </div>
          </div>

          {/* Right Column (Desktop) / Bottom Content (Mobile) */}
          <div className="flex flex-col lg:w-[55%] lg:py-2">
            
            {/* Desktop Text (Hidden on Mobile) */}
            <div className="hidden lg:flex flex-col mb-8">
              <p className="text-[12px] font-medium text-primary uppercase tracking-wider mb-4">
                {trainer.title}
              </p>
              <h3 className="text-[28px] xl:text-[36px] font-extrabold text-gray-900 mb-3">
                {trainer.name}
              </h3>
              <p className="text-[14px] text-gray-600 mb-8">
                Dr. Tama — {trainer.company}
              </p>
              <p className="text-[15px] xl:text-[16px] text-gray-800 leading-relaxed pr-4">
                {trainer.bio}
              </p>
            </div>

            {/* Shared Elements */}
            <div className="mb-5 lg:mb-8">
              <p className="text-[10px] lg:text-[12px] font-bold text-muted-foreground lg:text-gray-500 uppercase tracking-widest lg:tracking-wider mb-2.5 lg:mb-4">
                EXPERTISE
              </p>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {trainer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface lg:bg-[#F3F4F6] text-muted-foreground lg:text-gray-600 text-[10px] lg:text-[12px] font-medium px-3 lg:px-4 py-1.5 lg:py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6 lg:mb-10 lg:flex-1">
              <p className="text-[10px] lg:text-[12px] font-bold text-muted-foreground lg:text-gray-500 uppercase tracking-widest lg:tracking-wider mb-2.5 lg:mb-4">
                RECENTLY COURSES
              </p>
              <ul className="space-y-2 lg:space-y-3">
                {trainer.recentCourses.map((course) => (
                  <li key={course} className="flex items-center text-[12px] lg:text-[14px] text-muted-foreground lg:text-gray-600">
                    <span className="w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full bg-primary mr-2.5 lg:mr-3 shrink-0" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3 lg:gap-4 mt-auto">
              <button
                onClick={onClose}
                className="px-5 py-2 lg:px-8 lg:py-2.5 border border-border lg:border-[#D1D5DB] rounded-soft lg:rounded-md text-[12px] lg:text-[14px] font-medium text-muted-foreground lg:text-[#6B7280] hover:bg-surface lg:hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button
                className="px-5 py-2 lg:px-8 lg:py-2.5 bg-primary text-white rounded-soft lg:rounded-md text-[12px] lg:text-[14px] font-medium hover:opacity-90 transition-opacity"
              >
                Book a session
              </button>
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
