import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Confirmation = () => {
  useEffect(() => {
    // Track conversion
    console.log("Waitlist signup confirmed");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-card">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-medium animate-scale-in">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl">🎉</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            You're In!
          </h1>

          {/* Confirmation Message */}
          <div className="text-lg text-muted-foreground mb-8 space-y-4">
            <p>
              <strong className="text-foreground">Welcome to the Movolve family!</strong> 
              You're officially on our early access waitlist.
            </p>
            <p>
              Here's what happens next:
            </p>
          </div>

          {/* Next Steps */}
          <div className="grid gap-4 mb-8 text-left">
            <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <div className="font-semibold mb-1">Check Your Email</div>
                <div className="text-muted-foreground text-sm">
                  Confirmation and early access details coming your way
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <div className="font-semibold mb-1">Get VIP Access</div>
                <div className="text-muted-foreground text-sm">
                  You'll be first to try Movolve when we launch
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <div className="font-semibold mb-1">Find Your Tribe</div>
                <div className="text-muted-foreground text-sm">
                  Take the personality quiz and get matched with your fitness crew
                </div>
              </div>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="border-t pt-8">
            <p className="text-muted-foreground mb-4">
              Know someone who'd love this? Share the movement:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="sm">
                Share on Twitter
              </Button>
              <Button variant="outline" size="sm">
                Share on Instagram
              </Button>
              <Button variant="outline" size="sm">
                Tell a Friend
              </Button>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8">
            <Button 
              variant="ghost" 
              onClick={() => window.location.href = "/"}
            >
              ← Back to Home
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Early access guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;