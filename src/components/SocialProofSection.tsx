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
    { number: "2,847", label: "Early Members", urgent: true },
    { number: "153", label: "Spots Left", urgent: true },
    { number: "93%", label: "Match Success", urgent: false },
    { number: "4.9★", label: "User Rating", urgent: false }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Urgency Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-600 font-bold text-sm uppercase tracking-wide">Limited Time • Early Access</span>
          </div>
          <h2 className="text-3xl font-bold">Join 2,847 Early Members</h2>
          <p className="text-muted-foreground mt-2">Only 153 founding member spots left this month</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                stat.urgent ? 'text-red-500' : 'text-primary'
              }`}>
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