import { Phone } from "lucide-react";

const PHONE_NUMBER = "(240) 221-6177";
const PHONE_HREF = "tel:+12402216177";

export const StickyCallButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-transparent md:hidden">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-3 w-full h-14 gradient-cta text-white font-bold text-lg rounded-xl shadow-cta animate-pulse-gentle"
      >
        <Phone className="w-6 h-6" />
        Call Now: {PHONE_NUMBER}
      </a>
    </div>
  );
};
