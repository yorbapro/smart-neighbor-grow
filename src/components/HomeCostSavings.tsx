import { DollarSign, Users, Megaphone, Globe, Wrench } from "lucide-react";

const comparisons = [
  { role: "Receptionist", cost: "$45,000–$65,000/yr", icon: Users },
  { role: "SDR / Sales Rep", cost: "$60,000+ plus commissions", icon: Megaphone },
  { role: "SEO Agency", cost: "$2,000+/mo", icon: Globe },
  { role: "Web Team + CRM Consultant", cost: "$3,000+/mo", icon: Wrench },
];

const HomeCostSavings = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <DollarSign className="w-4 h-4" />
              The Economics
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Scale Revenue
              <br />
              <span className="text-gradient">Without Scaling Payroll</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {comparisons.map((item) => (
              <div
                key={item.role}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.role}</p>
                  <p className="text-sm text-muted-foreground">{item.cost}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative p-8 rounded-2xl bg-secondary text-secondary-foreground text-center">
            <p className="text-lg text-secondary-foreground/80 mb-4">
              BrightLaunchIQ replaces fragmented tools and payroll with
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-primary">
              one integrated AI-powered growth system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCostSavings;
