import { createFileRoute } from "@tanstack/react-router";
import TopNavBar from "@/components/home2/top-nav-bar";
import HeroSection from "@/components/home2/hero-section";
import WhyUsSection from "@/components/home2/why-us-section";
import ServicesSection from "@/components/home2/services-section";
import PatientJourneySection from "@/components/home2/patient-journey-section";
import FaqSection from "@/components/home2/faq-section";
import AppointmentSection from "@/components/home2/appointment-section";
import FooterSection from "@/components/home2/footer-section";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
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
  );
}
