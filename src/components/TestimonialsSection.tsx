import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They responded immediately and treated our home like their own.",
    author: "Andrea Petrus",
    situation: "Burst Pipe",
  },
  {
    quote: "They were the only company to respond right away on a Friday afternoon.",
    author: "Wes Carter",
    situation: "Sewer Backup",
  },
  {
    quote: "My apartment was completely dry in 3 days — nothing was ruined.",
    author: "Shirley A.",
    situation: "Leak & Flood",
  },
  {
    quote: "Fast, professional, and worked directly with my insurance.",
    author: "Michelle King",
    situation: "Pipe Burst & Mold",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ⭐ Real Reviews from Real Emergencies
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-warning text-warning" />
            ))}
          </div>
          <p className="text-muted-foreground">Trusted by homeowners across Maryland</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.situation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
