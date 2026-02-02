import { 
  Droplets, 
  Home, 
  AlertOctagon, 
  Bath, 
  UtensilsCrossed, 
  Bug 
} from "lucide-react";

const services = [
  { icon: Droplets, label: "Water Damage Restoration" },
  { icon: Home, label: "Flooded Basement Cleanup" },
  { icon: AlertOctagon, label: "Sewage & Toilet Overflow" },
  { icon: Bath, label: "Bathroom Flooding" },
  { icon: UtensilsCrossed, label: "Kitchen Sink & Appliance Leaks" },
  { icon: Bug, label: "Mold Removal & Remediation" },
];

export const EmergencyServicesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🚰 Emergency Services We Handle Every Day
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If water is inside your home or business — <strong className="text-foreground">this is an emergency.</strong>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground text-sm md:text-base">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
