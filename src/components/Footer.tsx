import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MD Water Restoration</h3>
            <p className="text-white/70 mb-4">
              24/7 emergency water damage restoration services. Licensed, bonded, and insured.
            </p>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4" />
              <span>Serving Maryland & Surrounding Areas</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="tel:+12402216177"
                className="flex items-center gap-2 text-emergency hover:text-emergency/80 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
                (240) 221-6177
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Certifications</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ IICRC Certified</li>
              <li>✓ BBB A+ Rated</li>
              <li>✓ Licensed & Insured</li>
              <li>✓ EPA-Approved Products</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} MD Water Restoration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
