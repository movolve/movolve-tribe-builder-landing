import { Check, Calendar, Heart, Users2, Coffee } from "lucide-react";

export const WhatsIncludedSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Unlimited curated sessions",
      description: "Run clubs, yoga socials, matcha mixers, hikes, dance nights"
    },
    {
      icon: Check,
      title: "No planning, no stress",
      description: "Just show up. We handle the logistics, venues, and vibes"
    },
    {
      icon: Heart,
      title: "Personality-based matchmaking",
      description: "Meet people who actually vibe with your energy and interests"
    },
    {
      icon: Coffee,
      title: "Post-session socials",
      description: "Smoothie bar meetups, coffee chats, and natural friend moments"
    },
    {
      icon: Users2,
      title: "Community-first wellness",
      description: "Real connections that make fitness feel effortless and fun"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
            What's Included
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Everything you need to build real connections through movement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-8 hover:shadow-bold transition-all duration-300 group border border-accent/20"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-secondary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};