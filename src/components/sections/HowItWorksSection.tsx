const steps = [
  {
    number: "01",
    title: "Start with a brief",
    body: "Give us a snapshot of your team, your learning objectives, and your timeline. That's all we need to get moving.",
  },
  {
    number: "02",
    title: "We find the right fit for you",
    body: "Based on your needs, we hand-pick a trainer with the right background and experience to deliver your program.",
  },
  {
    number: "03",
    title: "Your program is ready to run",
    body: "From scheduling to post-session reports, we manage the details so your program runs smoothly from day one.",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full bg-background px-5 pt-[81px] pb-10 lg:bg-white lg:py-24">
      <div className="max-w-screen-2xl mx-auto lg:px-12 xl:px-24">

        {/* Mobile: Stacked, Desktop: Image Left, Content Right */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Content Column (Mobile: order-1, Desktop: order-2) */}
          <div className="flex flex-col order-1 lg:order-2">
            <p className="text-[12px] font-medium text-primary uppercase tracking-widest text-center mb-[4px] lg:text-[14px] lg:font-semibold lg:tracking-wider lg:text-left lg:mb-3">
              HOW IT WORKS
            </p>

            <h2 className="text-[14px] font-bold text-foreground leading-[27px] text-center mb-[15px] lg:text-5xl lg:text-gray-900 lg:leading-[1.1] lg:text-left lg:mb-6">
              From idea to classroom in 3 steps.
            </h2>

            <p className="text-[10px] font-normal text-foreground leading-normal mb-[46px] lg:text-base lg:text-gray-600 lg:leading-relaxed lg:mb-10 lg:text-left">
              No lengthy setup. Just tell us what you need and we'll handle the rest.
            </p>

            <div className="flex flex-col gap-[34px] lg:gap-6">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-row items-start gap-[37px] lg:gap-5 xl:gap-6 w-full">
                  <div className="w-16 h-16 bg-primary rounded-soft flex items-center justify-center flex-shrink-0 lg:w-[60px] lg:h-[60px]">
                    <span className="text-white font-bold text-sm lg:text-lg">{step.number}</span>
                  </div>
                  <div className="flex flex-col gap-[12px] lg:gap-1 xl:gap-2 lg:pt-1">
                    <h5 className="text-sm font-bold text-foreground lg:text-base lg:text-gray-900 lg:leading-tight">
                      {step.title}
                    </h5>
                    <p className="text-[10px] font-normal text-foreground leading-normal lg:text-[13px] lg:text-gray-500 lg:leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column (Mobile: order-2, Desktop: order-1) */}
          <div className="w-full h-[265px] bg-surface border border-border mt-[34px] mb-[23px] lg:mt-0 lg:mb-0 lg:aspect-[3/4] lg:h-auto lg:w-full relative order-2 lg:order-1">
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
