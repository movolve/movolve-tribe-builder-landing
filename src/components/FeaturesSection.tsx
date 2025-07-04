import { Button } from "@/components/ui/button";
import activitiesImage from "@/assets/activities-collage.jpg";

export const FeaturesSection = () => {
  const features = [
    {
      icon: "🧠",
      title: "Smart Personality Matching",
      description: "No more awkward small talk. Meet people who naturally get your energy and vibe."
    },
    {
      icon: "🎯",
      title: "Curated Experiences", 
      description: "From sunrise yoga to cheese tastings - activities designed for real connection."
    },
    {
      icon: "🏆",
      title: "Accountability Built-In",
      description: "Your tribe keeps you motivated. Show up for them, they show up for you."
    },
    {
      icon: "📍",
      title: "Local & Convenient",
      description: "Everything happens near you, at times that work with your real life."
    },
    {
      icon: "🚀",
      title: "Zero Pressure",
      description: "No commitment beyond showing up. Try different groups until you find your people."
    },
    {
      icon: "🌟",
      title: "Community That Lasts",
      description: "Build lasting friendships through shared sweat, laughs, and growth."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Fitness That Feels Like 
              <span className="text-primary"> Friendship</span>
            </h2>
            
            <div className="grid gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg" className="w-full sm:w-auto">
              Join the Movement
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-medium group">
              <img 
                src={activitiesImage} 
                alt="Various Movolve activities - tennis, yoga, hiking, cooking"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-medium">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Activity Types</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-medium">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">4.9</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};