'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getTrainers } from '@/lib/api/trainers'
import type { Trainer } from '@/types/trainer'
import TrainerDetailModal from '@/components/modals/TrainerDetailModal'

export default function TrainersSection() {
  const [trainers, setTrainers] = useState<Trainer[]>([])
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null)

  useEffect(() => {
    getTrainers().then(setTrainers)
  }, [])

  return (
    <section id="trainers" className="py-16 px-4 bg-background lg:py-20">
      <div className="max-w-[1200px] mx-auto lg:max-w-screen-2xl lg:px-20">
        <p className="text-[12px] lg:text-[16px] font-medium lg:font-semibold text-primary uppercase tracking-widest text-center mb-[4px] lg:mb-[8px]">
          OUR TRAINER NETWORK
        </p>
        <h2 className="text-[20px] lg:text-5xl font-bold text-foreground leading-[27px] lg:leading-[1.3] text-center mb-[10px] lg:mb-[16px]">
          Specialists who know how to deliver.
        </h2>
        {/* Mobile Subtitle */}
        <p className="block lg:hidden text-[10px] font-normal text-muted-foreground leading-[1.6] text-center mb-[24px]">
          Our trainers are vetted professionals in their fields.<br />
          Want to join the network? We'd love to hear from you.
        </p>
        {/* Desktop Subtitle */}
        <p className="hidden lg:block text-[16px] font-normal text-muted-foreground leading-relaxed text-center mb-[48px]">
          Our trainers are vetted professionals in their fields. Want to join the network? We'd love to hear from you.
        </p>

        <div className="flex justify-end mb-[16px] lg:mb-6">
          <a href="#" className="text-[10px] lg:text-[16px] font-medium lg:font-semibold text-primary underline hover:opacity-80 transition-opacity">
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="cursor-pointer"
              onClick={() => setSelectedTrainer(trainer)}
            >
              <div className="relative w-full aspect-[3/4] rounded-soft overflow-hidden bg-surface mb-3 lg:mb-4 lg:aspect-[3/4]">
                <Image
                  src={trainer.photoUrl}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-semibold text-[14px] lg:text-base text-foreground leading-tight mb-1">{trainer.name}</p>
              <p className="text-[10px] lg:text-[14px] text-muted-foreground font-medium uppercase leading-snug">{trainer.title}</p>
              <p className="text-[12px] lg:text-[14px] text-secondary font-semibold mt-1">{trainer.company}</p>
            </div>
          ))}
        </div>

        <TrainerDetailModal
          trainer={selectedTrainer}
          open={selectedTrainer !== null}
          onClose={() => setSelectedTrainer(null)}
        />
      </div>
    </section>
  )
}
