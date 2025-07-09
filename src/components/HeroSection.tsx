import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import heroImage from "@/assets/hero-fitness.jpg";

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    if (email) {
      window.location.href = `/confirmation?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
          Real connection<br />
          <span className="text-primary">starts offline.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Join curated fitness & social experiences matched to your vibe, your schedule, your city.
        </p>

        {/* Email Signup */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 text-lg bg-white/95 border-0 shadow-bold"
            />
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleSignup}
              className="h-14 px-8 whitespace-nowrap"
            >
              Start Free Trial
            </Button>
          </div>
        </div>

        <p className="text-white/80 text-sm">
          Or <button className="text-primary underline font-semibold">take our quiz</button> to get matched instantly
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};