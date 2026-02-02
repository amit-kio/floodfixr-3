import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CallButtonProps {
  size?: "default" | "lg" | "xl" | "xxl";
  showIcon?: boolean;
  className?: string;
}

const PHONE_NUMBER = "(240) 221-6177";
const PHONE_HREF = "tel:+12402216177";

export const CallButton = ({ size = "xl", showIcon = true, className = "" }: CallButtonProps) => {
  return (
    <Button
      variant="emergency"
      size={size}
      asChild
      className={className}
    >
      <a href={PHONE_HREF}>
        {showIcon && <Phone className="mr-1" />}
        Call Now: {PHONE_NUMBER}
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
