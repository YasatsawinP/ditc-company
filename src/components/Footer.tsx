export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-white pt-12 lg:pt-20 pb-10 lg:pb-16">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-20">

        {/* Footer content: stacked on mobile, 4-col on desktop */}
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-12 lg:items-start">

          {/* Col 1: Logo + tagline */}
          <div className="lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo/logo-ditc-white.svg"
              alt="DITC"
              className="h-10 w-auto mb-5 lg:h-10 lg:mb-6"
            />
            <p className="text-[14px] font-normal text-white/90 leading-relaxed">
              Custom training programs, powered by DITC.
            </p>
          </div>

          {/* Cols 2-4: 3-column grid on mobile, flattened into main grid on desktop */}
          <div className="grid grid-cols-3 gap-4 lg:contents">

            {/* Col 2: PLATFORM */}
            <div>
              <h3 className="text-[11px] lg:text-[14px] font-bold uppercase tracking-wider text-primary mb-4 lg:mb-6">
                PLATFORM
              </h3>
              <div className="flex flex-col gap-3 lg:gap-4">
                <a href="#" className="text-[12px] lg:text-[15px] text-white/80 hover:text-white transition-colors">Courses</a>
                <a href="#" className="text-[12px] lg:text-[15px] text-white/80 hover:text-white transition-colors">Trainers</a>
                <a href="#" className="text-[12px] lg:text-[15px] text-white/80 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="text-[12px] lg:text-[15px] text-white/80 hover:text-white transition-colors">For teams</a>
              </div>
            </div>

            {/* Col 3: COMPANY */}
            <div>
              <h3 className="text-[11px] lg:text-[14px] font-bold uppercase tracking-wider text-primary mb-4 lg:mb-6">
                COMPANY
              </h3>
              <div className="flex flex-col gap-3 lg:gap-4">
                <a href="#how-it-works" className="text-[12px] lg:text-[15px] text-white/80 hover:text-white transition-colors">About</a>
                <a href="#" className="text-[12px] lg:text-[15px] text-white/80 hover:text-white transition-colors">Partners</a>
              </div>
            </div>

            {/* Col 4: CONTACT */}
            <div>
              <h3 className="text-[11px] lg:text-[14px] font-bold uppercase tracking-wider text-primary mb-4 lg:mb-6">
                CONTACT
              </h3>
              <div className="flex flex-col gap-3 lg:gap-4 text-[12px] lg:text-[15px] text-white/80 break-words">
                <p className="break-all lg:break-normal">hello@ditc.co.th</p>
                <p>+66 090 000 000</p>
                <p>Chiang Mai, TH</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}
