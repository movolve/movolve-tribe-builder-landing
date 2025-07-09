import activitiesImage from "@/assets/activities-collage.jpg";

export const OfflineEthosSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div 
              className="h-96 lg:h-[500px] bg-cover bg-center rounded-3xl shadow-bold"
              style={{ backgroundImage: `url(${activitiesImage})` }}
            >
              <div className="h-full bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground leading-tight">
              We're not an app.<br />
              <span className="text-primary">We're a movement.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="font-medium">
                Movolve is about real-life community. The app just gets you there.
              </p>
              
              <p>
                We believe connection happens through shared sweat, genuine laughter, 
                and showing up for each other. Not through endless scrolling or digital likes.
              </p>
              
              <p>
                Every experience is designed to feel natural, unforced, and authentically you. 
                Because the best friendships start when you're just being yourself.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-card rounded-2xl border border-accent/20">
              <blockquote className="text-lg font-medium text-foreground italic">
                "Real connection starts offline. Everything else is just noise."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">
                — The Movolve Philosophy
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};