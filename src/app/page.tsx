import Navbar from "@/components/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import Footer from "@/components/Footer"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import StatisticsSection from "@/components/sections/StatisticsSection"
import CourseShowcaseSection from "@/components/sections/CourseShowcaseSection"
import IndustryLeadersSection from "@/components/sections/IndustryLeadersSection"
import TrainersSection from "@/components/sections/TrainersSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <StatisticsSection />
      <CourseShowcaseSection />
      <IndustryLeadersSection />
      <TrainersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
