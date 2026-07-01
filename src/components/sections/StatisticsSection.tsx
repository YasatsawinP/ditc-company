import { getStatistics } from "@/lib/api/statistics"

export default async function StatisticsSection() {
  const statistics = await getStatistics()

  return (
    <section id="statistics" className="py-16 px-4 bg-background lg:py-24 lg:bg-white">
      <div className="text-center mb-10 flex flex-col items-center lg:max-w-3xl lg:mx-auto lg:mb-16">
        <p className="text-[12px] lg:text-[14px] font-medium lg:font-semibold text-primary uppercase tracking-widest text-center mb-[8px] lg:mb-[12px]">
          TRUSTED RESULTS
        </p>
        <h2 className="text-[24px] lg:text-[48px] xl:text-[54px] font-bold text-foreground lg:text-gray-900 leading-[1.3] lg:leading-[1.15] text-center mb-[12px] lg:mb-[20px]">
          Outcomes that matter.
        </h2>
        <p className="text-[12px] px-4 lg:text-[16px] xl:text-[18px] font-normal text-foreground lg:text-gray-600 leading-[1.6] lg:leading-relaxed text-center">
          Here's what organizations and trainers have achieved through programs built with DITC.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[14px] px-2 lg:px-0 max-w-[800px] mx-auto lg:flex lg:flex-row lg:gap-0 lg:max-w-screen-xl lg:rounded-[12px] lg:border lg:border-gray-300 lg:overflow-hidden lg:shadow-sm">
        {statistics.map((stat) => (
          <div
            key={stat.id}
            className="bg-[#F2F3EE] rounded-[24px] border border-[#D1D2C9] p-[20px] flex flex-col shadow-none lg:flex-1 lg:rounded-none lg:border-y-0 lg:border-l-0 lg:border-r lg:border-gray-300 lg:last:border-r-0 lg:px-8 xl:px-10 lg:py-12 lg:shadow-none lg:hover:shadow-none lg:bg-[#F2F3F0] lg:hover:bg-[#E2E3DC] lg:transition-colors"
          >
            <p className="text-[26px] lg:text-[48px] xl:text-[56px] font-black lg:font-extrabold text-[#2F2119] lg:text-gray-900 leading-none tracking-tight">
              {stat.value}
              <span className="text-primary font-black lg:font-extrabold">{stat.suffix}</span>
            </p>
            <p className="text-[13px] lg:text-[18px] font-bold text-[#2F2119] lg:text-gray-900 mt-[10px] lg:mt-6 leading-[1.2]">
              {stat.label}
            </p>
            <p className="text-[11px] lg:text-[14px] text-gray-500 lg:text-gray-500 mt-[6px] lg:mt-2 leading-[1.4]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
