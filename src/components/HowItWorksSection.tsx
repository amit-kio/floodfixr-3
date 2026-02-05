import { Search, Truck, HeadphonesIcon, FileCheck } from "lucide-react";
import { CallButton } from "./CallButton";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "We assess your situation",
    description: "An expert reviews your damage and explains exactly what needs to be done.",
  },
  {
    number: "2",
    icon: Truck,
    title: "We provide the right equipment",
    description: "Commercial-grade drying and remediation tools are delivered to your location.",
  },
  {
    number: "3",
    icon: HeadphonesIcon,
    title: "We guide you step by step",
    description: "Our experts stay available to walk you through each phase safely and correctly.",
  },
  {
    number: "4",
    icon: FileCheck,
    title: "We support insurance documentation",
    description: "We help you document the process properly to support insurance claims.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A guided remediation approach that saves time and money
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            FloodFixr's guided remediation model combines professional expertise with hands-on execution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10">
          <h3 className="text-xl font-bold text-foreground text-center mb-8">How it works</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h4 className="font-bold text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary/50 rounded-2xl p-8 max-w-3xl mx-auto text-center mb-10">
          <p className="text-lg text-foreground">
            This approach lets you handle safe labor while avoiding the cost of full-service restoration.
          </p>
        </div>

        <div className="text-center">
          <CallButton size="xl" />
        </div>
      </div>
    </section>
  );
};
