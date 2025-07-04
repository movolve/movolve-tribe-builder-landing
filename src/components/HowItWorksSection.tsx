import processIcons from "@/assets/process-icons.jpg";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Take the Quiz",
      description: "Answer quick questions about your personality, fitness goals, and lifestyle preferences."
    },
    {
      number: "02", 
      title: "Get Matched",
      description: "Our AI finds people who vibe with your energy, schedule, and location."
    },
    {
      number: "03",
      title: "Join Your Tribe",
      description: "Meet up for curated group activities that feel natural and fun."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From solo to squad in three simple steps
          </p>
        </div>

        {/* Process Visual */}
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src={processIcons} 
            alt="How Movolve works - Quiz, Match, Move"
            className="w-full h-64 object-cover rounded-2xl shadow-medium"
          />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-cta group-hover:shadow-medium transition-shadow">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] w-full h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
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