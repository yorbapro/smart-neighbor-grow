import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 uppercase text-xs font-bold tracking-[0.2em] text-primary mb-4">
            Success Stories
            <span className="w-8 h-[2px] bg-primary" />
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Results from
            <br />
            <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how local businesses across California are transforming their sales with AI-powered lead generation.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Metric - Featured at top */}
              <div className="mb-6">
                <div className="font-display text-4xl font-bold text-primary mb-1">
                  {testimonial.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.metricLabel}
                </div>
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center shadow-button">
                  <span className="text-white font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Case Studies
            </h3>
            <Link 
              to="/resources/case-studies" 
              className="hidden sm:flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
            >
              View All
              <ArrowRight size={16} />
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