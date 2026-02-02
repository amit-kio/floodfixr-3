import { AlertTriangle, Clock, FileCheck } from "lucide-react";
import { CallButton } from "./CallButton";

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
            ⚠ Don't Wait.
            <span className="block">Water Damage Spreads Fast.</span>
          </h2>

          <p className="text-xl text-white/80 mb-8">
            The longer water sits, the worse the damage becomes.
            <br />
            <strong className="text-white">The good news? Help is one call away.</strong>
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5 text-emergency" />
              <span>30-minute arrival</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <FileCheck className="w-5 h-5 text-trust" />
              <span>Free damage assessment</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <FileCheck className="w-5 h-5 text-trust" />
              <span>Insurance-friendly</span>
            </div>
          </div>

          {/* Main CTA */}
          <CallButton size="xxl" />
        </div>
      </div>
    </section>
  );
};
