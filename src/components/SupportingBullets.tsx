import { Truck, ListChecks, HeadphonesIcon, ShieldAlert } from "lucide-react";
import { CallButton } from "./CallButton";

const bullets = [
  { icon: Truck, text: "Get the right equipment delivered quickly" },
  { icon: ListChecks, text: "Get clear step by step instructions from an expert" },
  { icon: HeadphonesIcon, text: "Get 24/7 support if conditions change" },
  { icon: ShieldAlert, text: "Avoid costly mistakes and delays" },
];

export const SupportingBullets = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Everything you need to recover faster, in one place
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {bullets.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CallButton size="xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
