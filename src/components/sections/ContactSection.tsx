'use client'

import { useState, type FormEvent, type ChangeEvent } from "react"
import { Mail, Phone, MapPin, type LucideIcon } from "lucide-react"

const INFO_CARDS: { Icon: LucideIcon; label: string; value: string }[] = [
  { Icon: Mail, label: "EMAIL", value: "hello@ditc.co.th" },
  { Icon: Phone, label: "PHONE", value: "+66 090 000 000" },
  {
    Icon: MapPin,
    label: "LOCATION",
    value: "239 Huay Kaew Rd., Suthep, Mueang Chiang Mai, Chiang Mai 50200",
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="w-full bg-background px-5 py-12 lg:py-20">
      <div className="max-w-screen-2xl mx-auto lg:px-20">

        <p className="text-[12px] lg:text-[16px] font-medium lg:font-semibold text-primary uppercase tracking-widest text-center mb-[4px] lg:mb-[8px]">
          GET IN TOUCH
        </p>

        {/* Mobile Title */}
        <h2 className="block lg:hidden text-[22px] font-bold text-[#2F2119] leading-[1.3] text-center mb-[12px]">
          READY TO GET STARTED?
        </h2>
        {/* Desktop Title */}
        <h2 className="hidden lg:block text-[14px] lg:text-5xl font-bold text-foreground leading-[27px] lg:leading-[1.3] text-center mb-[10px] lg:mb-[16px]">
          Have a question? Send us a message.
        </h2>

        {/* Mobile Subtitle */}
        <p className="block lg:hidden text-[12px] font-normal text-gray-700 leading-[1.6] text-center mb-[24px] px-2">
          Whether you're a company looking to train your team<br/>or a trainer ready to share your expertise — drop us a message and let's talk.
        </p>
        {/* Desktop Subtitle */}
        <p className="hidden lg:block text-[10px] lg:text-[16px] font-normal text-muted-foreground leading-normal lg:leading-relaxed text-center mb-[24px] lg:mb-[48px]">
          We typically respond within one working day.
        </p>

        {/* 2-column on desktop: info+map left, form right */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-16 lg:items-stretch">

          {/* Left col: info cards + map */}
          <div>
            <div className="flex flex-col gap-[14px] lg:gap-4 mb-8">
              {INFO_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="bg-white lg:bg-background rounded-3xl lg:rounded-2xl border border-[#F2F2F2] lg:border-none shadow-sm lg:shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-5 lg:p-6 flex items-center gap-4 lg:gap-5"
                >
                  <div className="bg-[#FEEFE6] text-primary lg:bg-primary/10 p-[14px] lg:p-4 rounded-[16px] lg:rounded-xl flex-shrink-0">
                    <card.Icon className="w-6 h-6 lg:w-8 lg:h-8" />
                  </div>
                  <div className="flex flex-col gap-[2px] lg:gap-1 overflow-hidden">
                    <p className="text-[11px] lg:text-[13px] font-bold text-gray-500 lg:text-muted-foreground uppercase tracking-wider">
                      {card.label}
                    </p>
                    <p className="text-[15px] lg:text-[16px] font-bold text-[#2F2119] lg:text-foreground truncate">
                      {card.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="w-full h-[220px] lg:h-64 rounded-[20px] lg:rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden border-none mb-12 lg:mb-0 bg-gray-100">
              <img
                src="/images/map-placeholder.png"
                alt="Map Location"
                className="w-full h-full object-cover object-top scale-[1.08] lg:scale-100 lg:object-center"
              />
            </div>
          </div>

          {/* Right col: contact form */}
          <div className="bg-background rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 lg:p-8 flex flex-col h-full lg:h-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-grow">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] lg:text-[13px] font-semibold text-foreground">
                    Name<span className="text-error">*</span>
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Please enter your full name"
                    required
                    className="border border-border rounded-lg bg-background focus:border-primary outline-none w-full px-4 py-2.5 text-[12px] lg:text-[14px] text-foreground placeholder:text-muted-foreground/70"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] lg:text-[13px] font-semibold text-foreground">
                    Email<span className="text-error">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="border border-border rounded-lg bg-background focus:border-primary outline-none w-full px-4 py-2.5 text-[12px] lg:text-[14px] text-foreground placeholder:text-muted-foreground/70"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] lg:text-[13px] font-semibold text-foreground">
                  Subject<span className="text-error">*</span>
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="border border-border rounded-lg bg-background focus:border-primary outline-none w-full px-4 py-2.5 text-[12px] lg:text-[14px] text-foreground placeholder:text-muted-foreground/70"
                />
              </div>

              <div className="flex flex-col gap-1.5 lg:flex-grow">
                <label className="text-[11px] lg:text-[13px] font-semibold text-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about your team and what you're looking for."
                  rows={8}
                  className="border border-border rounded-lg bg-background focus:border-primary outline-none w-full px-4 py-3 text-[12px] lg:text-[14px] text-foreground placeholder:text-muted-foreground/70 resize-none lg:h-full lg:flex-grow"
                />
              </div>

              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="bg-primary text-white rounded-lg px-8 py-3 font-semibold text-[13px] lg:text-[14px] hover:bg-primary-hover transition-colors flex items-center gap-2"
                >
                  Send message
                  <span className="font-bold">→</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
