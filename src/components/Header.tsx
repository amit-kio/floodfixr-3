import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import floodfixrLogo from "@/assets/floodfixr-logo.png";

const PHONE_NUMBER = "(650) 250-0690";
const PHONE_HREF = "tel:+16502500690";
const EMAIL = "info@floodfixr.com";

export const Header = () => {
  return (
    <header className="bg-white py-4 sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={floodfixrLogo} alt="FloodFixr" className="h-10 md:h-12" />
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <span className="hidden md:inline">24/7 emergency response</span>
            <a 
              href={PHONE_HREF}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
            <a 
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              {EMAIL}
            </a>
          </div>

          {/* Primary CTA */}
          <Button variant="emergency" size="default" asChild className="hidden md:flex">
            <a href={PHONE_HREF}>
              <Phone className="w-4 h-4 mr-1" />
              Call Emergency Line
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
