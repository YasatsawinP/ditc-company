import { getStatistics } from "@/lib/api/statistics"

export default async function StatisticsSection() {
  const statistics = await getStatistics()

  return (
    <section id="statistics" className="py-16 px-4 bg-background lg:py-24 lg:bg-white">
      <div className="text-center mb-12 flex flex-col items-center lg:max-w-3xl lg:mx-auto lg:mb-16">
        <p className="text-[12px] lg:text-[14px] font-medium lg:font-semibold text-primary uppercase tracking-widest text-center mb-[4px] lg:mb-[12px]">
          TRUSTED RESULTS
        </p>
        <h2 className="text-[14px] lg:text-[48px] xl:text-[54px] font-bold text-foreground lg:text-gray-900 leading-[27px] lg:leading-[1.15] text-center mb-[15px] lg:mb-[20px]">
          Outcomes that matter.
        </h2>
        <p className="text-[10px] lg:text-[16px] xl:text-[18px] font-normal text-muted-foreground lg:text-gray-600 leading-normal lg:leading-relaxed text-center">
          Here's what organizations and trainers have achieved through programs built with DITC.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-[800px] mx-auto lg:flex lg:flex-row lg:gap-0 lg:max-w-screen-xl lg:px-0 lg:rounded-[12px] lg:border lg:border-gray-300 lg:overflow-hidden lg:shadow-sm">
        {statistics.map((stat) => (
          <div
            key={stat.id}
            className="bg-surface rounded-medium border border-border p-4 flex flex-col shadow-subtle hover:shadow-medium transition-shadow lg:flex-1 lg:rounded-none lg:border-y-0 lg:border-l-0 lg:border-r lg:border-gray-300 lg:last:border-r-0 lg:px-8 xl:px-10 lg:py-12 lg:shadow-none lg:hover:shadow-none lg:bg-[#F2F3F0] lg:hover:bg-[#E2E3DC] lg:transition-colors"
          >
            <p className="text-[20px] lg:text-[48px] xl:text-[56px] font-bold lg:font-extrabold text-foreground lg:text-gray-900 leading-none">
              {stat.value}
              <span className="text-primary font-bold lg:font-extrabold">{stat.suffix}</span>
            </p>
            <p className="text-[12px] lg:text-[18px] font-bold text-foreground lg:text-gray-900 mt-2 lg:mt-6 leading-snug">
              {stat.label}
            </p>
            <p className="text-[10px] lg:text-[14px] text-muted-foreground lg:text-gray-500 mt-1 lg:mt-2 leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
