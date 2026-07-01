'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Trusted Result", href: "#statistics" },
  { label: "Programs We've Build", href: "#courses" },
  { label: "Organization We've Worked With", href: "#industry-leaders" },
  { label: "Our Trainer Network", href: "#trainers" },
  { label: "Get In Touch", href: "#contact" },
]

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1))

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled to the very bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveSection(SECTION_IDS[SECTION_IDS.length - 1])
        return
      }

      let current = SECTION_IDS[0]
      // Iterate backwards to find the deepest section currently in view
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i]
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // Trigger when the section's top crosses the top 40% of the viewport
          const triggerPoint = window.innerHeight * 0.4
          if (rect.top <= triggerPoint) {
            current = id
            break
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // trigger on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* ── Navbar bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow-sm lg:h-[80px]">
        <div className="flex items-center justify-between px-4 h-full w-full lg:px-8 xl:px-12">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo/logo-ditc-dark.svg"
              alt="DITC"
              className="h-10 w-auto lg:h-[45px]"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex flex-1 max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] justify-between items-center ml-8 xl:ml-12">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  className={`text-[13px] xl:text-[14px] whitespace-nowrap transition-all hover:opacity-60 py-1 ${
                    isActive 
                      ? "font-bold text-[#2F2119] border-b-[2px] border-primary" 
                      : "font-medium text-[#4B5563]"
                  }`}
                >
                  {label}
                </a>
              )
            })}
          </div>

          {/* Mobile hamburger
              closed → bare icon, no background
              open   → 64×56px orange box, rounded-[8px] */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={
              open
                ? "lg:hidden bg-primary text-white w-16 h-14 flex items-center justify-center rounded-[8px]"
                : "lg:hidden p-1 text-foreground"
            }
          >
            <Menu size={24} />
          </button>

        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-[80px]" />

      {/* ── Mobile dropdown ──
          Rectangle 446: 236×303px, top-[64px] right-4, #F48E2E, no radius, overflow-hidden.
          Pill (Rectangle 447): 217×43px, bg-white, rounded-[8px], top:10px left:10px.
          Other items: 21px tall, 32px apart (centre-to-centre), full-width centered text. */}
      <div
        aria-hidden={!open}
        className={`fixed top-[64px] right-4 w-[236px] h-[303px] z-[60] overflow-hidden bg-primary ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col justify-between h-full pt-[10px] pb-3">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1)
            return isActive ? (
              /* Active pill — 217×43px, left:10px from container edge */
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center bg-white text-foreground
                  rounded-[8px] ml-[10px] w-[217px] h-[43px]
                  text-[11px] font-normal leading-none flex-shrink-0 text-center px-2"
              >
                {label}
              </a>
            ) : (
              /* Inactive items — 21px tall, full container width, centered */
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center text-white
                  w-full h-[21px]
                  text-[11px] font-normal leading-none flex-shrink-0 px-2 text-center"
              >
                {label}
              </a>
            )
          })}
        </nav>
      </div>
    </>
  )
}
