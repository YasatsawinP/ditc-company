import { clients } from "@/lib/api/clients"

export default function OurClientSection() {
  return (
    <section id="clients" className="w-full bg-surface px-5 pt-[60px] pb-10">
      <div className="max-w-[400px] mx-auto">
        <p className="text-[12px] font-medium text-primary uppercase text-center mb-[8px]">
          TRUSTED BY
        </p>
        
        <h2 className="text-[20px] font-bold text-content text-center leading-none mb-[4px]">
          Industry leaders.
        </h2>
        
        <p className="text-[12px] font-normal text-content text-center leading-normal opacity-75 mb-[24px]">
          Companies that rely on our platform for their training needs.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="bg-white rounded-[8px] flex items-center justify-center h-[99px]"
            >
              {/* Logo placeholder — leave empty, real logos added later */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
