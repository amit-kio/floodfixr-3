import { Search, Droplet, Wind, Sparkles, CheckCircle } from "lucide-react";
import { CallButton } from "./CallButton";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Inspection & Containment",
    description: "We locate the source, stop incoming water, and assess hidden damage behind walls, floors, and ceilings.",
  },
  {
    number: "2",
    icon: Droplet,
    title: "Water Removal & Extraction",
    description: "Powerful truck-mounted equipment removes standing water fast — reducing drying time and mold risk.",
  },
  {
    number: "3",
    icon: Wind,
    title: "Drying & Dehumidification",
    description: "Industrial-grade air movers and dehumidifiers remove trapped moisture from air and materials.",
  },
  {
    number: "4",
    icon: Sparkles,
    title: "Cleaning & Sanitization",
    description: "We clean, disinfect, deodorize, and safely dispose of unsalvageable materials using EPA-approved products.",
  },
  {
    number: "5",
    icon: CheckCircle,
    title: "Final Walk-Through",
    description: "Advanced moisture meters confirm your property is completely dry — even behind walls.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🛠 Our Proven 5-Step Emergency Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your safety, comfort, and peace of mind come first.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number circle */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Speak with a water damage expert now</p>
          <CallButton size="xl" />
        </div>
      </div>
    </section>
  );
};
