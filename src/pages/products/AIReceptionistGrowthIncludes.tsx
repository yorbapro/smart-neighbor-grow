import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import useSEO from "@/hooks/useSEO";
import {
  Phone, Check, ArrowRight, Zap, Bot, Calendar, Shield, BarChart3,
  Users, Headphones, Lock, Rocket, TrendingUp, Settings, MessageSquare,
  Plug,
} from "lucide-react";

const includedSections = [
  {
    icon: Zap,
    title: "Everything in Core",
    description: "All the intelligent call answering, lead capture, routing, security, and optimization included in the Core plan.",
    items: [
      "24/7 AI call answering — zero missed calls",
      "Custom voice persona & script design",
      "Lead capture & smart qualification",
      "Intelligent routing & escalation",
      "Call transcripts & sentiment analysis",
      "Encrypted, secure infrastructure",
    ],
    highlight: false,
  },
  {
    icon: Calendar,
    title: "Appointment Booking & Calendar Sync",
    description: "Your AI receptionist books appointments directly into your calendar — no double bookings, no back-and-forth.",
    items: [
      "Real-time calendar integration",
      "Automatic availability checking",
      "Appointment type classification",
      "Double-booking prevention",
      "Rescheduling & cancellation handling",
      "Multi-provider scheduling",
    ],
    highlight: true,
  },
  {
    icon: Plug,
    title: "CRM Integration & Automation",
    description: "Every call, lead, and appointment flows directly into your CRM — HubSpot, Salesforce, and more.",
    items: [
      "HubSpot, Salesforce, Zoho, and more",
      "Automatic contact creation",
      "Lead status updates in real time",
      "Custom field mapping",
      "Zapier & Slack integrations",
      "Automated workflow triggers",
    ],
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-Up",
    description: "Instant SMS and email confirmations ensure no lead falls through the cracks after the call ends.",
    items: [
      "Automated SMS confirmations",
      "Email appointment reminders",
      "Post-call follow-up sequences",
      "Custom messaging templates",
      "No-show re-engagement",
    ],
    highlight: true,
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard & ROI Reporting",
    description: "See exactly how your AI receptionist is performing — call volume, conversion rates, revenue impact.",
    items: [
      "Real-time call analytics",
      "Lead conversion tracking",
      "Booking rate optimization",
      "ROI reporting & revenue attribution",
      "Call quality metrics",
      "Weekly performance summaries",
    ],
    highlight: true,
  },
  {
    icon: Rocket,
    title: "Enhanced Onboarding & Setup",
    description: "Your $2,500 setup fee covers calendar integration, CRM setup, booking logic, and end-to-end testing.",
    items: [
      "Everything in Core setup, plus:",
      "Calendar system integration",
      "CRM connection & field mapping",
      "Booking logic configuration",
      "Automation workflow design",
      "End-to-end booking flow testing",
    ],
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "Advanced Optimization",
    description: "Monthly optimization now includes booking conversion analysis, CRM pipeline tuning, and automation refinement.",
    items: [
      "All Core optimization services",
      "Booking conversion analysis",
      "CRM pipeline optimization",
      "Automation refinement",
      "Integration health monitoring",
    ],
    highlight: false,
  },
];

const AIReceptionistGrowthIncludes = () => {
  useSEO({
    title: "What's Included — BrightLaunchIQ AI Receptionist Growth Plan",
    description: "See everything included in the BrightLaunchIQ AI Receptionist Growth plan at $997/month — calendar booking, CRM integration, analytics, automated follow-up, and everything in Core.",
    canonical: "https://brightlaunchiq.com/products/ai-receptionist/growth/whats-included",
    keywords: "AI receptionist Growth plan, AI phone answering with calendar booking, CRM integration AI receptionist, BrightLaunchIQ Growth, AI call answering with scheduling",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-hero-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 mb-6">
              <Phone className="w-5 h-5" />
              <span className="font-semibold text-sm">Growth Plan — $997/month</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
              What's Included in
              <br />
              <span className="text-blue-400">AI Receptionist Growth</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Everything in Core, plus calendar booking, CRM integration, analytics, and automated follow-up — your operations on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Scale My Calls <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/products/ai-receptionist/growth/features">View Full Feature List</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Included sections */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Complete Growth Package
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything from Core, plus the integrations and automation that turn calls into booked revenue.
              </p>
            </div>

            <div className="space-y-8">
              {includedSections.map((section) => (
                <div
                  key={section.title}
                  className={`group rounded-2xl border p-8 transition-all duration-300 ${
                    section.highlight
                      ? "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/50 hover:shadow-card-hover"
                      : "border-border bg-card hover:border-blue-500/20 hover:shadow-card-hover"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-4 md:w-1/3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${section.highlight ? "bg-blue-500/15" : "bg-blue-500/10"}`}>
                        <section.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-lg font-bold text-foreground">{section.title}</h3>
                          {section.highlight && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">New</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 hidden md:block">{section.description}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground md:hidden">{section.description}</p>
                    <ul className="md:w-2/3 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-3xl font-display font-bold text-blue-500">1,500</p>
                <p className="text-sm text-muted-foreground">Minutes per month</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-3xl font-display font-bold text-blue-500">750</p>
                <p className="text-sm text-muted-foreground">Calls per month</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-primary mb-1">Need multi-location routing or custom voice?</p>
            <p className="text-sm text-muted-foreground mb-4">Upgrade to Pro for enterprise-grade infrastructure and priority support.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link to="/products/ai-receptionist/pro/whats-included">See Pro Includes</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/pricing">Compare All Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-hero-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[150px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Entire Call Workflow?
            </h2>
            <p className="text-lg text-white/70 mb-8">Calendar booking, CRM sync, and AI answering — all working together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Scale My Calls <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIReceptionistGrowthIncludes;