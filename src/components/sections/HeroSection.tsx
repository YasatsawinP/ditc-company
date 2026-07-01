import { getStatistics } from "@/lib/api/statistics"

export default async function HeroSection() {
  const statistics = await getStatistics()
  // [0] = 12,500+ Total Students, [1] = 340+ Courses, [2] = 98% Satisfaction
  const [students, courses, satisfaction] = [
    statistics[0],
    statistics[1],
    statistics[2],
  ]

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-[#0F1115] bg-cover bg-center overflow-hidden flex flex-col items-center lg:min-h-screen lg:py-16"
    >
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 lg:bg-black/20 z-[5]" />

      {/* Main content — vertically centered */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full flex-1 lg:max-w-[1200px] lg:mx-auto px-4">

        {/* Mobile Title */}
        <h1 className="block lg:hidden text-[26px] font-bold text-white text-center leading-[1.25] tracking-tight">
          We design training programs<br/>that actually work.
        </h1>

        {/* Desktop Title */}
        <h1 className="hidden lg:block font-bold text-white text-center leading-tight mt-[26px] px-4 lg:text-[52px] xl:text-[60px] tracking-tight lg:whitespace-nowrap">
          We design training programs that actually work.
        </h1>

        {/* Mobile Body */}
        <p className="block lg:hidden text-[12px] font-normal text-white/90 leading-[1.6] text-center mt-4 px-2 w-full max-w-[420px]">
          Whether you're an organization looking to upskill your team, or an expert ready to share your knowledge — DITC handles the rest.
        </p>

        {/* Desktop Body */}
        <p className="hidden lg:block font-normal text-white leading-[1.6] text-center mt-6 px-[24px] lg:text-[18px] xl:text-[20px] lg:max-w-[850px] lg:mx-auto">
          Whether you're an organization looking to upskill your team,<br className="hidden lg:block" />
          or an expert ready to share your knowledge — DITC handles the rest.
        </p>

        {/* Mobile Button */}
        <div className="flex lg:hidden justify-center mt-[36px]">
          <a
            href="#contact"
            className="flex items-center w-[160px] h-[40px] rounded-full bg-white p-[4px] transition-transform active:scale-95 shadow-sm"
          >
            <div className="flex items-center justify-center w-[32px] h-[32px] bg-[#F48220] rounded-full text-white shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
            <span className="text-[#8B8B8B] text-[13px] font-medium w-full text-center pr-3">Contact Us</span>
          </a>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:flex justify-center mt-[48px] lg:mx-auto">
          <a
            href="#contact"
            className="group relative flex items-center w-[240px] h-[56px] rounded-[8px] bg-white p-[6px] shadow-md overflow-hidden transition-all duration-300"
          >
            {/* Expanding Orange Background */}
            <div className="absolute left-[6px] top-[6px] w-[44px] h-[44px] bg-[#F48220] rounded-[6px] transition-all duration-500 ease-in-out group-hover:w-[calc(100%-12px)] z-0" />
            
            {/* Sliding Arrow */}
            <div className="absolute left-[6px] w-[44px] h-[44px] flex items-center justify-center text-white z-10 transition-transform duration-500 ease-in-out group-hover:translate-x-[184px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>

            {/* Text */}
            <span className="relative z-10 text-[#5C5C5C] text-[16px] font-medium w-full text-center pl-10 transition-all duration-500 ease-in-out group-hover:text-white group-hover:pl-0 group-hover:pr-10">
              Contact Us
            </span>
          </a>
        </div>

        
      </div>
    </section>
  )
}
