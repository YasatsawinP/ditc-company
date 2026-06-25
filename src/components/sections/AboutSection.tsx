const cards = [
  {
    number: "01",
    title: "Schedule & book in minutes",
    body: "Browse vetted trainers, select a course, and lock in a date without the back-and-forth. The platform handles calendar coordination and automated reminders.",
  },
  {
    number: "02",
    title: "Track progress in real time",
    body: "Monitor learner attendance, completion rates, and engagement from a live dashboard. Know exactly who's on track — without chasing spreadsheets.",
  },
  {
    number: "03",
    title: "Measure outcomes that matter",
    body: "Collect post-program feedback automatically and generate satisfaction reports your leadership team can actually use to justify training spend.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-background px-5 pt-[81px] pb-10 lg:bg-white lg:py-24">
      <div className="max-w-screen-2xl mx-auto lg:px-12 xl:px-24">
        
        {/* Mobile: Stacked, Desktop: Image Left, Content Right */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-[80px] xl:gap-[100px] lg:items-start">
          
          {/* Content Column (Mobile: order-1, Desktop: order-2) */}
          <div className="flex flex-col order-1 lg:order-2">
            <p className="text-[12px] font-medium text-primary uppercase tracking-widest text-center mb-[4px] lg:text-[14px] lg:font-semibold lg:tracking-wider lg:text-left lg:mb-3">
              ABOUT OUR PLATFORM
            </p>

            <h2 className="text-[14px] font-bold text-foreground leading-[27px] text-center mb-[15px] lg:text-[48px] xl:text-[54px] lg:text-gray-900 lg:leading-[1.1] lg:text-left lg:mb-6">
              Everything your training program needs, in one place.
            </h2>

            <p className="text-[10px] font-normal text-foreground leading-normal mb-[46px] lg:text-base xl:text-[17px] lg:text-gray-600 lg:leading-relaxed lg:mb-10 lg:text-left">
              DITC Platform gives HR and L&D teams the tools to schedule, book, track, and measure training programs — from finding the right trainer to reporting outcomes.
            </p>

            <div className="flex flex-col gap-[34px] lg:gap-8 xl:gap-10">
              {cards.map((card) => (
                <div key={card.number} className="flex flex-row items-start gap-[37px] lg:gap-5 xl:gap-6 w-full">
                  <div className="w-16 h-16 bg-primary rounded-soft flex items-center justify-center flex-shrink-0 lg:w-[60px] lg:h-[60px] lg:rounded-md">
                    <span className="text-white font-bold text-sm lg:text-lg xl:text-xl">{card.number}</span>
                  </div>
                  <div className="flex flex-col gap-[12px] lg:gap-1 xl:gap-2 lg:pt-1">
                    <h5 className="text-sm font-bold text-foreground lg:text-[16px] xl:text-[18px] lg:text-gray-900 lg:leading-tight">
                      {card.title}
                    </h5>
                    <p className="text-[10px] font-normal text-foreground leading-normal lg:text-[13px] xl:text-[15px] lg:text-gray-500 lg:leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column (Mobile: order-2, Desktop: order-1) */}
          <div className="w-full h-[265px] bg-surface border border-black mt-[34px] mb-[23px] lg:mt-0 lg:mb-0 lg:aspect-square lg:h-auto lg:bg-[#F2F3F0] lg:border-gray-300 relative order-2 lg:order-1">
            {/* X lines for placeholder */}
            <svg className="absolute inset-0 w-full h-full text-gray-300 hidden lg:block" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}
