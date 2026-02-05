import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is FloodFixr's guided remediation model?",
    answer: "We provide professional step by step guidance, commercial-grade equipment, and insurance documentation. This hybrid approach allows homeowners to safely manage the work while saving compared to full-service restoration.",
  },
  {
    question: "Where does FloodFixr currently operate?",
    answer: "FloodFixr currently serves the San Francisco Bay Area, Spokane, and Winston-Salem.",
  },
  {
    question: "What types of damage do you support?",
    answer: "Water damage, flooding, basement water removal, ceiling leaks, and mold remediation guidance.",
  },
  {
    question: "Do you help with insurance paperwork?",
    answer: "Yes. We provide documentation and guidance to support the insurance claims process.",
  },
  {
    question: "How does FloodFixr save money?",
    answer: "By guiding you through the process and providing equipment, you avoid full-service labor costs while still doing the job correctly.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Common questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
