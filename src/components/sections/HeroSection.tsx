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

        {/* Logo */}
        <img
          src="/images/DITC-high.png"
          alt="DITC"
          className="w-[240px] h-[100px] mx-auto object-contain lg:w-auto lg:h-[150px]"
        />

        {/* Title */}
        <h1 className="text-[14px] font-bold text-white text-center leading-tight mt-[26px] px-4 whitespace-nowrap lg:text-6xl">
          Digital Innovation and Transformation{" "}
          <span className="text-primary">Center</span>
        </h1>

        {/* Body */}
        <p className="text-[12px] font-normal text-white leading-[150%] text-center mt-4 px-[24px] max-w-[420px] lg:text-xl lg:max-w-4xl lg:mx-auto">
          Manage courses, schedules, and instructors in one smart training platform.<br className="hidden lg:block" />
          Track progress efficiently and improve workforce performance with ease.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-[25px] justify-center w-[400px] mx-auto mt-[40px] lg:gap-6">
          <a
            href="#contact"
            className="flex items-center justify-center w-[130px] h-[36px] rounded-soft bg-white text-gray-900 text-[12px] font-medium px-4 py-2 hover:bg-gray-100 transition-colors lg:w-[150px] lg:h-[48px] lg:text-base lg:rounded-md"
          >
            Contact Us
          </a>
          <a
            href="#courses"
            className="flex items-center justify-center gap-1 w-[130px] h-[36px] rounded-soft bg-primary text-white text-[12px] font-medium px-4 py-2 hover:bg-primary-hover transition-colors lg:w-[150px] lg:h-[48px] lg:text-base lg:rounded-md"
          >
            Subscription <span aria-hidden="true" className="ml-1">→</span>
          </a>
        </div>

        
      </div>
    </section>
  )
}
