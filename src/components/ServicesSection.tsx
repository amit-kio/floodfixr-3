import { Droplets, AlertTriangle, Skull } from "lucide-react";
import { CallButton } from "./CallButton";

const services = [
  {
    icon: Droplets,
    title: "Clean Water Damage",
    subtitle: "Category 1",
    description: "From broken pipes, leaky sinks, appliance failures, or rainwater intrusion.",
    warning: "If untreated, clean water can become contaminated within 24 hours.",
    color: "water" as const,
    bgClass: "bg-water/10",
    borderClass: "border-water/30",
  },
  {
    icon: AlertTriangle,
    title: "Gray Water Damage",
    subtitle: "Category 2",
    description: "Caused by dishwashers, washing machines, toilets (urine), or sump pump failures.",
    warning: "Can turn into hazardous black water within 48 hours.",
    color: "warning" as const,
    bgClass: "bg-warning/10",
    borderClass: "border-warning/30",
  },
  {
    icon: Skull,
    title: "Black Water Damage",
    subtitle: "Category 3",
    description: "Sewage, flooding from rivers/streams, or standing water with bacterial growth.",
    warning: "Never attempt DIY cleanup. Immediate professional remediation is critical.",
    color: "destructive" as const,
    bgClass: "bg-destructive/10",
    borderClass: "border-destructive/30",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            💧 Complete Water Damage Restoration Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't offer vague promises — we solve specific emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 border-2 ${service.borderClass} shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden`}
            >
              {/* Background accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.bgClass} rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl ${service.bgClass} flex items-center justify-center mb-6`}>
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </div>

                {/* Title */}
                <div className="mb-4">
                  <span className={`text-xs font-semibold uppercase tracking-wider text-${service.color}`}>
                    {service.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-1">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Warning box */}
                <div className={`${service.bgClass} border ${service.borderClass} rounded-lg p-4`}>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className={`w-5 h-5 text-${service.color} flex-shrink-0 mt-0.5`} />
                    <p className={`text-sm font-medium text-${service.color}`}>
                      {service.warning}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <CallButton size="xl" />
          <p className="text-muted-foreground mt-3">Help is on the way</p>
        </div>
      </div>
    </section>
  );
};
