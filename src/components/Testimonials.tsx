import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Chen",
      role: "Owner",
      company: "Valley HVAC Solutions",
      location: "Sacramento, CA",
      quote: "We went from missing 60% of after-hours leads to capturing every single one. LaunchPad 360™ paid for itself in the first month.",
      metric: "340%",
      metricLabel: "Lead Capture Increase",
      avatar: "MC",
    },
    {
      name: "Sarah Rodriguez",
      role: "Managing Partner",
      company: "Rodriguez Law Group",
      location: "Fresno, CA",
      quote: "The AI responds to inquiries in under 60 seconds. Our competitors can't match that speed. We're now the first call back, every time.",
      metric: "< 60s",
      metricLabel: "Average Response Time",
      avatar: "SR",
    },
    {
      name: "David Thompson",
      role: "CEO",
      company: "Central Valley Logistics",
      location: "Stockton, CA",
      quote: "I was skeptical about AI, but the human oversight made all the difference. Every message sounds like us, not a robot.",
      metric: "78%",
      metricLabel: "More Qualified Leads",
      avatar: "DT",
    },
  ];

  const caseStudies = [
    {
      industry: "Professional Services",
      challenge: "Law firm losing leads to competitors who responded faster",
      solution: "Implemented LaunchPad 360™ with instant SMS and email response",
      result: "First-response rate improved from 4 hours to under 60 seconds. Monthly consultations increased 156%.",
    },
    {
      industry: "Trade Services",
      challenge: "HVAC company missing 60% of after-hours emergency calls",
      solution: "24/7 AI voice and SMS engagement with hot lead mobile alerts",
      result: "Captured 100% of leads. After-hours revenue increased $47,000/month.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            Client Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            See how local businesses across California are transforming their sales with AI-powered lead generation.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-2xl bg-background border border-border hover:shadow-card-hover transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Quote */}
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Metric */}
              <div className="p-4 rounded-xl bg-primary/5 mb-6">
                <div className="font-display text-2xl font-bold text-primary">
                  {testimonial.metric}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.metricLabel}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Case Studies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-secondary text-secondary-foreground"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                  {study.industry}
                </span>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-secondary-foreground/60 mb-1">
                      Challenge
                    </p>
                    <p className="text-sm text-secondary-foreground/80">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs uppercase tracking-wider text-secondary-foreground/60 mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-secondary-foreground/80">
                      {study.solution}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-secondary-foreground/10">
                    <p className="text-xs uppercase tracking-wider text-primary mb-1">
                      Result
                    </p>
                    <p className="text-sm font-medium text-secondary-foreground">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
