import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SupportingBullets } from "@/components/SupportingBullets";
import { LocationsStrip } from "@/components/LocationsStrip";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { EquipmentSection } from "@/components/EquipmentSection";
import { ServicesByLocation } from "@/components/ServicesByLocation";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SupportingBullets />
      <LocationsStrip />
      <LeadCaptureSection />
      <HowItWorksSection />
      <EquipmentSection />
      <ServicesByLocation />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyCallButton />
      {/* Spacer for mobile sticky button */}
      <div className="h-24 md:hidden" />
    </main>
  );
};

export default Index;
