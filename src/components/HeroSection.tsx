import { Phone, Clock, MapPin, Shield, Droplets } from "lucide-react";
import { CallButton } from "./CallButton";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-water/30 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-water/20 blur-3xl" />
      </div>
      
      <div className="container relative z-10 py-12 lg:py-20">
        {/* Top bar with quick info */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Response</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Local • Certified • Fast</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Insurance-Approved</span>
          </div>
        </div>

        {/* Main hero content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Urgent badge */}
          <div className="inline-flex items-center gap-2 bg-emergency/20 border border-emergency/40 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Droplets className="w-5 h-5 text-emergency" />
            <span className="text-emergency font-semibold">Water Damage Gets Worse Every Hour</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight animate-slide-up">
            Emergency Water Damage Restoration
            <span className="block text-water mt-2">Get Help, Right Now</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Leaks, floods, burst pipes, sewage — we handle it all.
            <br className="hidden md:block" />
            <strong className="text-white">30-minute arrival • Free assessment</strong>
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col items-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CallButton size="xxl" />
            
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Phone className="w-4 h-4" />
              <span>Immediate dispatch available</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {[
              { label: "IICRC Certified", icon: "✓" },
              { label: "BBB A+ Rated", icon: "⭐" },
              { label: "5-Star Reviews", icon: "★" },
              { label: "Licensed & Insured", icon: "🛡️" },
            ].map((item, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-white/90 text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(210, 25%, 97%)"
          />
        </svg>
      </div>
    </section>
  );
};
