import { MapPin, CheckCircle } from "lucide-react";
import { CallButton } from "./CallButton";

const locations = [
  {
    name: "San Francisco Bay Area, CA",
    services: [
      "Ceiling leak repair",
      "Flood damage restoration",
      "Mold remediation",
      "Water damage restoration",
    ],
  },
  {
    name: "Spokane, WA",
    services: [
      "Basement water removal",
      "Ceiling leak repair",
      "Flood damage restoration",
      "Mold remediation",
      "Water damage restoration",
    ],
  },
  {
    name: "Winston-Salem, NC",
    services: [
      "Basement water removal",
      "Ceiling leak repair",
      "Flood damage restoration",
      "Mold remediation",
      "Water damage restoration",
    ],
  },
];

export const ServicesByLocation = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services available near you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">{location.name}</h3>
              </div>
              <ul className="space-y-2">
                {location.services.map((service, sIndex) => (
                  <li key={sIndex} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-trust flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CallButton size="xl" />
        </div>
      </div>
    </section>
  );
};
