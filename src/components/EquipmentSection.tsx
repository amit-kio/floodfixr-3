import { Wind, Droplets, Fan, Waves } from "lucide-react";

const equipment = [
  {
    icon: Wind,
    name: "Air Scrubber",
    description: "HEPA 700 air scrubber and negative air machine to filter airborne contaminants, dust, mold, and particles.",
  },
  {
    icon: Droplets,
    name: "Pint Dehumidifier",
    description: "Heavy-duty dehumidifier with up to 155-pint daily capacity for rapid moisture removal.",
  },
  {
    icon: Fan,
    name: "Air Mover",
    description: "Powerful axial air mover with daisy-chain capability for drying floors, carpets, and tight spaces.",
  },
  {
    icon: Waves,
    name: "Flood Pumper",
    description: "Compact, high-powered pump for fast water removal from basements and crawlspaces.",
  },
  {
    icon: Droplets,
    name: "Dehumidifier",
    description: "High-capacity restoration-grade unit designed for structural drying and flood recovery.",
  },
  {
    icon: Fan,
    name: "Flood Dryer",
    description: "Omnidirectional floor and carpet dryer with 360° airflow for even, thorough drying.",
  },
];

export const EquipmentSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional drying and remediation equipment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-trust/10 border border-trust/30 rounded-xl p-6 max-w-2xl mx-auto text-center">
          <p className="text-foreground">
            <strong className="text-trust">Support note:</strong> Equipment is paired with expert guidance so it's used correctly and safely.
          </p>
        </div>
      </div>
    </section>
  );
};
