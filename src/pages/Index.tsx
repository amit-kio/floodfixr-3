import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { UrgencySection } from "@/components/UrgencySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { EmergencyServicesSection } from "@/components/EmergencyServicesSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <UrgencySection />
      <TestimonialsSection />
      <EmergencyServicesSection />
      <FinalCTASection />
      <Footer />
      <StickyCallButton />
      {/* Spacer for mobile sticky button */}
      <div className="h-24 md:hidden" />
    </main>
  );
};

export default Index;
