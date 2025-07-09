import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager, Toronto",
      text: "I found my hiking crew through Movolve. We've been meeting every Saturday for 6 months! These aren't just workout buddies—they're real friends.",
      rating: 5,
      initials: "SC"
    },
    {
      name: "Marcus Johnson", 
      role: "Software Engineer, Vancouver",
      text: "Finally, a way to meet people who actually want to stay active. No more solo gym sessions or awkward small talk. The personality matching is incredible.",
      rating: 5,
      initials: "MJ"
    },
    {
      name: "Elena Rodriguez",
      role: "Nurse, Montreal",
      text: "My yoga group feels like lifelong friends. Movolve created the perfect low-pressure environment to connect. The post-session smoothie hangs are my favorite part!",
      rating: 5,
      initials: "ER"
    },
    {
      name: "David Kim",
      role: "Teacher, Calgary",
      text: "I was skeptical about 'fitness dating apps' but this is different. These are genuine connections built through shared experiences. My run club is now my chosen family.",
      rating: 5,
      initials: "DK"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
            Loved by Early Users
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Real stories from people who found their tribe through Movolve
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-3xl p-8 shadow-soft hover:shadow-bold transition-all duration-300 group border border-accent/20"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Quote className="w-6 h-6 text-secondary" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed font-medium">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          {[
            { number: "2,400+", label: "Members Matched" },
            { number: "850+", label: "Events Hosted" },
            { number: "96%", label: "Match Success" },
            { number: "4.9", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-semibold text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};