export default function Footer() {
  return (
    <footer className="w-full bg-[#2F1D19] text-white pt-12 lg:pt-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-20 pb-10 lg:pb-16">

        {/* Footer content: stacked on mobile, 4-col on desktop */}
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-12 lg:items-start">

          {/* Col 1: Logo + description */}
          <div className="lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo/logo-ditc-white.svg"
              alt="DITC"
              className="h-10 w-auto mb-5 lg:h-[42px] lg:mb-6"
            />
            <p className="text-[14px] font-normal text-white/90 leading-relaxed">
              A central hub for learning &amp; talent development. Connecting expert trainers with the teams that need them.
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
                <a href="#about" className="text-[12px] lg:text-[15px] text-white/80 hover:text-white transition-colors">About</a>
                <a href="#" className="text-[12px] lg:text-[15px] text-white/80 hover:text-white transition-colors">Careers</a>
                <a href="#" className="text-[12px] lg:text-[15px] text-white/80 hover:text-white transition-colors">Press</a>
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

      {/* Copyright bar - Full width border */}
      <div className="w-full border-t border-white/20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-20 py-6 lg:py-8 lg:flex lg:justify-end">
          <p className="text-[12px] text-white/60 text-center lg:hidden">
            2025 DitC Company. All rights reserved.
          </p>
          <p className="hidden lg:block text-[14px] text-white/80 text-right">
            2025 DitC Company. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}
