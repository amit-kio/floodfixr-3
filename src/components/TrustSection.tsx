import { Shield, Star, Award, Users, Wrench, Building } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "IICRC Certified",
    description: "Industry-standard certification for water damage professionals",
  },
  {
    icon: Award,
    title: "BBB A+ Rating",
    description: "Trusted by the Better Business Bureau",
  },
  {
    icon: Star,
    title: "5-Star Google Reviews",
    description: "Consistently rated excellent by our customers",
  },
  {
    icon: Users,
    title: "1,020+ Homeowners Helped",
    description: "Successfully navigated insurance claims",
  },
  {
    icon: Wrench,
    title: "Cutting-Edge Technology",
    description: "Industrial drying & extraction equipment",
  },
  {
    icon: Building,
    title: "Insurance Approved",
    description: "We work with all major insurance companies",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ⭐ Trusted When Every Minute Counts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your home is treated like our own — safely, thoroughly, and fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-trust/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-trust" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
