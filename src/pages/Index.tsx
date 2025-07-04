import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { FounderSection } from "@/components/FounderSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <SocialProofSection />
      <FounderSection />
    </div>
  );
};

export default Index;