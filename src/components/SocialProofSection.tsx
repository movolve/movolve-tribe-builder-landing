export const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Marketing Manager",
      text: "I found my hiking crew through Movolve. We've been meeting every Saturday for 3 months!",
      rating: 5
    },
    {
      name: "Jake T.", 
      role: "Software Engineer",
      text: "Finally, a way to meet people who actually want to stay active. No more solo gym sessions.",
      rating: 5
    },
    {
      name: "Maya L.",
      role: "Nurse",
      text: "The personality matching is spot-on. My yoga group feels like lifelong friends.",
      rating: 5
    }
  ];

  const stats = [
    { number: "1,200+", label: "Early Signups" },
    { number: "15+", label: "Activity Types" },
    { number: "93%", label: "Match Success" },
    { number: "4.9", label: "User Rating" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Early Users Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow group"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};