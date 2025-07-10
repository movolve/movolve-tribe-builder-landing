import { MessageCircle, Users, MapPin, Heart } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Answer a few fun questions",
      description: "Tell us about your personality, fitness goals, and what makes you tick. Takes 2 minutes."
    },
    {
      number: "02", 
      icon: Users,
      title: "Get matched into curated local experiences",
      description: "Our algorithm finds your people and perfect-fit activities happening near you."
    },
    {
      number: "03",
      icon: MapPin,
      title: "Show up, move, and connect",
      description: "No planning, no stress. Just real experiences with real people who get you."
    },
    {
      number: "04",
      icon: Heart,
      title: "Build lasting connections",
      description: "Turn your workout buddies into real friends. Continue the journey together."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
            How Movolve Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            We plan the experience. You just show up.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              {/* Step Number & Icon */}
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <step.icon className="w-10 h-10 text-primary group-hover:text-secondary" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-lg font-black text-secondary">{step.number}</span>
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-full h-0.5 bg-accent"></div>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};