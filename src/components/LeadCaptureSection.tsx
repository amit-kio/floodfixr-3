import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "./CallButton";
const serviceTypes = ["Water damage restoration", "Flood damage restoration", "Basement water removal", "Ceiling leak repair", "Mold remediation", "Other"];
const locationOptions = ["San Francisco Bay Area, CA", "Spokane, WA", "Winston-Salem, NC"];
export const LeadCaptureSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "",
    location: "",
    situation: "",
    consentContact: false,
    consentMarketing: false
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you shortly.");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value,
      type
    } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };
  return <section id="contact" className="py-16 bg-secondary/50">
      
    </section>;
};