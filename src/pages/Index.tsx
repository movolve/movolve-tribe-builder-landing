import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhatsIncludedSection } from "@/components/WhatsIncludedSection";
import { PricingSection } from "@/components/PricingSection";
import { OfflineEthosSection } from "@/components/OfflineEthosSection";
import { TheWhySection } from "@/components/TheWhySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <WhatsIncludedSection />
      <OfflineEthosSection />
      <TheWhySection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTASection />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;