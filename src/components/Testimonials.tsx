import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import contractorPhoto from "@/assets/photos/contractor-professional.jpg";
import lawyerPhoto from "@/assets/photos/lawyer-professional.jpg";
import logisticsPhoto from "@/assets/photos/logistics-manager.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Chen",
      role: "Owner",
      company: "Valley HVAC Solutions",
      location: "Sacramento, CA",
      quote: "We went from missing 60% of after-hours leads to capturing every single one. The system paid for itself in the first month.",
      metric: "100%",
      metricLabel: "Call Capture Rate",
      photo: contractorPhoto,
    },
    {
      name: "Sarah Rodriguez",
      role: "Managing Partner",
      company: "Rodriguez Law Group",
      location: "Fresno, CA",
      quote: "Response time dropped from hours to seconds. We're booking 3x more consultations without adding staff.",
      metric: "3x",
      metricLabel: "More Booked Appointments",
      photo: lawyerPhoto,
    },
    {
      name: "David Thompson",
      role: "CEO",
      company: "Pacific Coast Logistics",
      location: "Stockton, CA",
      quote: "We cut payroll dependency by 40% while increasing revenue. The infrastructure just works — no more guesswork.",
      metric: "$47K",
      metricLabel: "Monthly Revenue Gained",
      photo: logisticsPhoto,
    },
  ];

  const caseStudies = [
    {
      industry: "Professional Services",
      challenge: "Law firm losing leads to competitors who responded faster",
      solution: "Installed LeadLine AI with instant call answering and CRM integration",
      result: "First-response rate improved from 4 hours to under 60 seconds. Monthly consultations increased 156%.",
    },
    {
      industry: "Trade Services",
      challenge: "HVAC company missing 60% of after-hours emergency calls",
      solution: "Deployed 24/7 AI receptionist with smart routing and appointment booking",
      result: "Captured 100% of leads. After-hours revenue increased $47,000/month.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 uppercase text-xs font-bold tracking-[0.2em] text-primary mb-4">
            Success Stories
            <span className="w-8 h-[2px] bg-primary" />
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Happens When Infrastructure
            <br />
            <span className="text-gradient">Replaces Guesswork</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how local businesses are transforming revenue with AI-powered infrastructure.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="font-display text-4xl font-bold text-primary mb-1">
                  {testimonial.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.metricLabel}
                </div>
              </div>

              <p className="text-foreground/80 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <img
                    src={testimonial.photo}
                    alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Results Stats */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "100%", label: "Increased Call Capture", icon: "📞" },
            { value: "<60s", label: "Faster Response Times", icon: "⚡" },
            { value: "3x", label: "More Booked Appointments", icon: "📅" },
            { value: "40%", label: "Reduced Payroll Dependency", icon: "💰" },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card border border-border text-center group hover:border-primary/30 transition-colors"
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <p className="font-display text-2xl md:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
              Case Studies
            </h3>
            <Link
              to="/resources/case-studies"
              className="hidden sm:flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium text-sm"
            >
              View All
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-secondary text-secondary-foreground hover:shadow-card-hover transition-all duration-300"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                  {study.industry}
                </span>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-secondary-foreground/50 mb-2">
                      Challenge
                    </p>
                    <p className="text-secondary-foreground/80 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-secondary-foreground/50 mb-2">
                      Solution
                    </p>
                    <p className="text-secondary-foreground/80 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-secondary-foreground/10">
                    <p className="text-xs uppercase tracking-wider text-primary mb-2">
                      Result
                    </p>
                    <p className="font-medium text-secondary-foreground leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/resources/case-studies"
            className="sm:hidden flex items-center justify-center gap-2 text-primary mt-6 font-medium"
          >
            View All Case Studies
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
