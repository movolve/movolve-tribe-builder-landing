import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free Trial",
      price: "Free",
      duration: "1 Week",
      description: "Perfect for trying us out",
      features: [
        "2 curated experiences",
        "Basic personality matching",
        "Community access",
        "Post-session socials"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "primary"
    },
    {
      name: "Monthly",
      price: isAnnual ? "$14.99" : "$29.99",
      duration: isAnnual ? "/month" : "/month",
      originalPrice: isAnnual ? "$29.99" : null,
      description: "Unlimited experiences",
      features: [
        "Unlimited curated experiences",
        "Advanced personality matching",
        "Priority event access",
        "All post-session socials",
        "Exclusive member events",
        "24/7 community support"
      ],
      cta: "Get Started",
      popular: false,
      color: "secondary"
    }
  ];

  if (isAnnual) {
    plans[1].name = "Annual";
    plans[1].description = "Best value - 2 months free!";
  }

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Choose Your Plan
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium mb-8">
            Unlimited curated experiences included in every plan
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-semibold ${!isAnnual ? 'text-primary' : 'text-white/60'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`font-semibold ${isAnnual ? 'text-primary' : 'text-white/60'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge className="bg-primary text-secondary font-bold ml-2">
                Save 50%
              </Badge>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 ${plan.popular ? 'ring-4 ring-primary shadow-yellow scale-105' : 'shadow-bold'} transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-secondary font-black px-6 py-2">
                  🟡 Most Popular
                </Badge>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <div className="mb-4">
                  {plan.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through mr-2">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="text-5xl font-black text-foreground">{plan.price}</span>
                  <span className="text-lg text-muted-foreground ml-1">{plan.duration}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
                {isAnnual && index === 1 && (
                  <p className="text-sm text-primary font-semibold mt-2">
                    Billed $179.88 annually
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "secondary"}
                size="lg"
                className="w-full h-14 text-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};