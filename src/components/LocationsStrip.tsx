import { MapPin } from "lucide-react";

const locations = [
  "Spokane, WA",
  "San Francisco Bay Area, CA",
  "Winston-Salem, NC",
];

export const LocationsStrip = () => {
  return (
    <section className="py-6 bg-secondary/50 border-y border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Service Areas</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-muted-foreground">
            {locations.map((location, index) => (
              <span key={index} className="flex items-center gap-2">
                {location}
                {index < locations.length - 1 && (
                  <span className="hidden md:inline text-border">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
