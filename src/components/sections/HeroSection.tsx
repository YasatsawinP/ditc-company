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
      style={{ backgroundImage: "url('/globe.svg')" }}
      className="relative w-full min-h-screen bg-gray-900 bg-cover bg-center overflow-hidden flex flex-col items-center lg:min-h-screen lg:py-16"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main content — vertically centered in upper portion */}
      <div className="relative z-10 flex flex-col items-center w-full pt-[30vh] pb-[20vh] lg:pt-[8vh] lg:pb-[10vh] lg:max-w-3xl lg:mx-auto">



        {/* Title */}
        <h1 className="text-[14px] font-bold text-white text-center leading-tight mt-[26px] px-4 lg:text-6xl">
          We design training programs that actually work.
        </h1>

        {/* Body */}
        <p className="text-[12px] font-normal text-white leading-[150%] text-center mt-4 px-[24px] max-w-[420px] lg:text-xl lg:max-w-2xl lg:mx-auto">
          Whether you're an organization looking to upskill your team, or an expert ready to share your knowledge — DITC handles the rest.
        </p>

        {/* Button */}
        <div className="flex justify-center mt-[40px] lg:mx-auto">
          <a
            href="#contact"
            className="flex items-center justify-center w-[130px] h-[36px] rounded-soft bg-primary text-white text-[12px] font-medium px-4 py-2 hover:bg-primary-hover transition-colors lg:w-[160px] lg:h-[48px] lg:text-base"
          >
            Contact Us
          </a>
        </div>

        
      </div>
    </section>
  )
}
