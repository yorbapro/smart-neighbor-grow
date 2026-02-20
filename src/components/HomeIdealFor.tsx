import { Wrench, Stethoscope, Scale, Briefcase, Building2, MapPin } from "lucide-react";

const industries = [
  { icon: Wrench, name: "Home Services", detail: "HVAC, plumbing, roofing" },
  { icon: Stethoscope, name: "Medical & Dental Offices", detail: "Patient intake & scheduling" },
  { icon: Scale, name: "Legal Practices", detail: "Client consultation booking" },
  { icon: Briefcase, name: "Agencies & Consultants", detail: "Lead capture & qualification" },
  { icon: Building2, name: "Local Service Companies", detail: "Every call, every time" },
  { icon: MapPin, name: "Multi-Location Businesses", detail: "Unified call handling" },
];

const HomeIdealFor = () => {
  return (
    <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(215, 28%, 7%) 0%, hsl(215, 28%, 10%) 50%, hsl(215, 28%, 7%) 100%)' }}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            Who It's For
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for Growing
            <br />
            <span className="text-primary">Service Businesses</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-white mb-1">{industry.name}</p>
                <p className="text-sm text-white/60">{industry.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-display font-bold text-white">
            If your customers call before they buy —{" "}
            <span className="text-primary">this is for you.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeIdealFor;
