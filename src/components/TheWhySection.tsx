import { AlertTriangle, Heart } from "lucide-react";

export const TheWhySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-foreground">
            The Why
          </h2>

          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-bold">
            {/* Problem Side - Dark */}
            <div className="bg-secondary p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">The Problem</h3>
              </div>
              
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  <strong className="text-white">Loneliness is rampant.</strong> Despite being more "connected" 
                  than ever, people feel isolated and struggle to make real friends.
                </p>
                
                <p>
                  <strong className="text-white">Social apps are addictive games.</strong> They're designed 
                  to keep you scrolling, not meeting people in real life.
                </p>
                
                <p>
                  <strong className="text-white">No one meets IRL anymore.</strong> We've forgotten how to 
                  create natural, low-pressure ways to connect with our tribe.
                </p>
              </div>
            </div>

            {/* Solution Side - Light */}
            <div className="bg-white p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">The Solution</h3>
              </div>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <strong className="text-foreground">Movolve makes it easy to connect</strong> through 
                  real, low-pressure, fun experiences that feel natural.
                </p>
                
                <p>
                  <strong className="text-foreground">Personality-based matching</strong> ensures you 
                  meet people who genuinely vibe with your energy and interests.
                </p>
                
                <p>
                  <strong className="text-foreground">Shared movement creates instant bonds.</strong> When 
                  you sweat together, laugh together, you become friends faster.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-primary/10 rounded-2xl border border-primary/20">
                <p className="text-foreground font-semibold">
                  The result? Authentic friendships built through shared experiences, 
                  not profile pics and small talk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};