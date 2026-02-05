import { AlertTriangle, CheckCircle, Phone } from "lucide-react";
import { CallButton, CONTACT } from "./CallButton";

const benefits = [
  "Expert guidance at every step",
  "Professional equipment",
  "24/7 support when conditions change",
];

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-water/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-emergency/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Warning icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emergency/20 mb-6">
            <AlertTriangle className="w-10 h-10 text-emergency" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Water damage spreads fast if handled incorrectly
          </h2>

          <p className="text-xl text-white/80 mb-8">
            Delays or mistakes can lead to mold, structural damage, and higher repair costs.
          </p>

          {/* Benefits */}
          <div className="mb-10">
            <p className="text-white font-semibold mb-4">With FloodFixr, you get:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-trust" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col items-center gap-4">
            <CallButton size="xxl" label="Call Emergency Line Now" />
            <a 
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>{CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
