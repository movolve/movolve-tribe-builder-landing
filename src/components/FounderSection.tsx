import { Button } from "@/components/ui/button";

export const FounderSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-medium">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Founder Image */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-white">FS</span>
                </div>
                <div className="text-sm text-muted-foreground">Founder</div>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">A Personal Mission</h3>
                <div className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  <p className="mb-4">
                    "As a health professional, I've seen how loneliness affects our physical and mental well-being. 
                    Traditional fitness apps connect you to workouts, but not to people."
                  </p>
                  <p className="mb-4">
                    "Movolve is my answer to the epidemic of isolation. Real connections happen through 
                    shared experiences, sweat, and showing up for each other."
                  </p>
                  <p>
                    "Join us in building communities that move together, grow together, and thrive together."
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div>
                    <div className="font-semibold text-lg">Farzam Sey</div>
                    <div className="text-muted-foreground">Health Professional & Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Find Your Tribe?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 1,200 people already signed up for early access. 
              Be first to experience fitness that feels like friendship.
            </p>
            <Button variant="hero" size="xl">
              Get Early Access Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};