import { createFileRoute } from '@tanstack/react-router'
// import AboutSection from '@/components/home/about-section'
// import AppointmentSection from '@/components/home/appointment-section'
// import FooterSection from '@/components/home/footer-section'
// import HeroSection from '@/components/home/hero-section'
// import RecoveryPathSection from '@/components/home/recovery-path-section'
// import ServicesSection from '@/components/home/services-section'
// import TestimonialsSection from '@/components/home/testimonials-section'
// import TopNavBar from '@/components/home/top-nav-bar'

import TopNavBar from '@/components/home2/top-nav-bar'
import HeroSection from '@/components/home2/hero-section'
import WhyUsSection from '@/components/home2/why-us-section'
import ServicesSection from '@/components/home2/services-section'
import PatientJourneySection from '@/components/home2/patient-journey-section'
import FaqSection from '@/components/home2/faq-section'
import AppointmentSection from '@/components/home2/appointment-section'
import FooterSection from '@/components/home2/footer-section'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  // Original Home (commented out — preserved for reference)
  // return (
  //   <div className="scroll-smooth bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-primary">
  //     <TopNavBar />
  //     <main className="pt-24">
  //       <HeroSection />
  //       <ServicesSection />
  //       <AboutSection />
  //       <RecoveryPathSection />
  //       <TestimonialsSection />
  //       <AppointmentSection />
  //     </main>
  //     <FooterSection />
  //   </div>
  // )

  return (
    <div className="scroll-smooth bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-primary">
      <TopNavBar />
      <main>
        <HeroSection />
        <WhyUsSection />
        <ServicesSection />
        <PatientJourneySection />
        <FaqSection />
        <AppointmentSection />
      </main>
      <FooterSection />
    </div>
  )
}
