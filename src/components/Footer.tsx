import { Phone, Mail } from "lucide-react";
import { CONTACT } from "./CallButton";

export const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">FloodFixr</h3>
            <p className="text-white/70">
              Reliable water damage guidance, equipment, and expert support.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {CONTACT.email}
              </a>
              <a 
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-emergency hover:text-emergency/80 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
                {CONTACT.phone}
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <div className="space-y-2 text-white/70">
              <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-white transition-colors">Terms and Conditions</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/60 text-sm">
              Copyright © {new Date().getFullYear()} FloodFixr, a service of Newpoint LLC. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Powered by KiLLitOnLine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
