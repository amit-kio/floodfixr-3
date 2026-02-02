import { AlertTriangle, Building2, Bug, DollarSign, FileWarning } from "lucide-react";
import { CallButton } from "./CallButton";

const consequences = [
  { icon: Building2, label: "Structural Damage" },
  { icon: Bug, label: "Mold Growth" },
  { icon: DollarSign, label: "Repair Costs" },
  { icon: FileWarning, label: "Insurance Complications" },
];

export const UrgencySection = () => {
  return (
    <section className="py-16 gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-emergency/30 blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-water/20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Alert badge */}
          <div className="inline-flex items-center gap-2 bg-emergency/20 border border-emergency/40 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-emergency" />
            <span className="text-emergency font-semibold">Time-Sensitive Emergency</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            🕒 When Water Damage Strikes
            <span className="block text-emergency mt-2">Speed is Everything</span>
          </h2>

          <p className="text-xl text-white/80 mb-8">
            Every minute you wait increases:
          </p>

          {/* Consequence grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {consequences.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <item.icon className="w-8 h-8 text-emergency mx-auto mb-3" />
                <p className="text-white font-semibold">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Promise statement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              <strong className="text-white">MD Water Restoration</strong> responds immediately — day or night.
              <br />
              We document every step, work directly with your insurance, and restore your property the right way.
            </p>
          </div>

          {/* CTA */}
          <CallButton size="xxl" />
          <p className="text-white/70 mt-4">Immediate Dispatch • 24/7 Response</p>
        </div>
      </div>
    </section>
  );
};
