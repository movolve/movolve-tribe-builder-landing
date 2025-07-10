import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, Users } from "lucide-react";

export const FinalCTASection = () => {
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    if (email) {
      window.location.href = `/confirmation?email=${encodeURIComponent(email)}`;
    }
  };

  const handleQuiz = () => {
    // For now, redirect to signup - quiz can be implemented later
    handleSignup();
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <Users className="w-10 h-10 text-secondary" />
          </div>

          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 mb-6">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-red-300 font-bold uppercase tracking-wide">153 Early Member Spots Left</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Take the quiz.<br />
            <span className="text-primary">Find your crew.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-2xl mx-auto font-medium leading-relaxed">
            Join 2,847 early members who've already found their fitness tribe. 
            Your people are waiting.
          </p>

          <div className="text-center mb-8">
            <p className="text-primary text-lg font-bold">
              ⚡ Early members save 50% for 3 months
            </p>
            <p className="text-white/60 text-sm">
              Offer expires when we hit 3,000 members
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleQuiz}
              className="text-xl px-12 py-6 group"
            >
              Take the Quiz
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <span className="text-white/60 font-medium">or</span>
            
            <div className="flex gap-4 w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 text-lg bg-white/95 border-0"
              />
              <Button 
                variant="secondary" 
                size="lg"
                onClick={handleSignup}
                className="h-14 px-6 whitespace-nowrap"
              >
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white/60 text-sm">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>7-day free trial</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-300">Limited spots</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};