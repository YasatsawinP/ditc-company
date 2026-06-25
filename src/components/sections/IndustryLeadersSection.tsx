export default function IndustryLeadersSection() {
  return (
    <section id="clients" className="w-full bg-surface py-12 px-4 lg:py-20 lg:px-0">
      <div className="max-w-[800px] mx-auto lg:max-w-screen-2xl lg:px-20">
        <div className="text-center mb-[24px] lg:mb-[40px] flex flex-col items-center">
          <p className="text-[12px] lg:text-[16px] font-medium lg:font-semibold text-primary uppercase tracking-widest mb-[4px] lg:mb-[8px]">
            TRUSTED BY
          </p>
          <h2 className="text-[14px] lg:text-5xl font-bold text-foreground leading-[27px] lg:leading-[1.3] mb-[8px] lg:mb-[16px]">
            Industry leaders.
          </h2>
          <p className="text-[10px] lg:text-[16px] font-normal text-muted-foreground leading-normal lg:leading-relaxed">
            Companies that rely on our platform for their training needs.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:gap-8 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="bg-background rounded-medium border border-border shadow-subtle flex items-center justify-center p-6 lg:p-10 aspect-video hover:shadow-medium transition-shadow"
            >
              <span className="text-muted-foreground font-semibold lg:text-lg">Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
