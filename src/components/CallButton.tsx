import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CallButtonProps {
  size?: "default" | "lg" | "xl" | "xxl";
  showIcon?: boolean;
  className?: string;
  label?: string;
}

const PHONE_NUMBER = "(650) 250-0690";
const PHONE_HREF = "tel:+16502500690";

export const CallButton = ({ size = "xl", showIcon = true, className = "", label = "Call Emergency Line" }: CallButtonProps) => {
  return (
    <Button
      variant="emergency"
      size={size}
      asChild
      className={className}
    >
      <a href={PHONE_HREF}>
        {showIcon && <Phone className="mr-1" />}
        {label}
      </a>
    </Button>
  );
};

export const PhoneDisplay = ({ className = "" }: { className?: string }) => {
  return (
    <a 
      href={PHONE_HREF}
      className={`text-phone-lg text-emergency font-extrabold tracking-tight hover:text-emergency/80 transition-colors ${className}`}
    >
      {PHONE_NUMBER}
    </a>
  );
};

export const CONTACT = {
  phone: PHONE_NUMBER,
  phoneHref: PHONE_HREF,
  email: "info@floodfixr.com",
};
