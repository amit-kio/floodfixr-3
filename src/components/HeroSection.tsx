import { Phone, Zap, CheckCircle } from "lucide-react";
import { CallButton, CONTACT } from "./CallButton";

const benefits = [
  "On-call remediation experts",
  "Step by step DIY guidance",
  "Professional drying equipment",
  "Insurance-ready documentation",
];

export const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-water/30 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-water/20 blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgent badge */}
          <div className="inline-flex items-center gap-2 bg-emergency/20 border border-emergency/40 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Zap className="w-5 h-5 text-emergency" />
            <span className="text-emergency font-semibold">24/7 emergency response available</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight animate-slide-up">
            Expert step by step guidance for water damage recovery
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get professional support, commercial-grade drying equipment, and 24/7 help to stop damage and dry safely.
          </p>

          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <strong className="text-white">You handle the safe work.</strong>
            <br />
            Our experts guide you through every step so nothing is missed and damage doesn't get worse.
          </p>

          {/* Benefits grid */}
          <div className="grid grid-cols-2 gap-3 max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90 text-left">
                <CheckCircle className="w-5 h-5 text-trust flex-shrink-0" />
                <span className="text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CallButton size="xxl" />
            
            <a 
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {CONTACT.phone}</span>
            </a>
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
