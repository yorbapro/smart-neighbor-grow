import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Phone, Check, ArrowRight, Zap, Bot, Calendar, Shield, BarChart3,
  Clock, Users, Settings, Headphones, Lock, Rocket, TrendingUp,
  MessageSquare, Plug, ChevronDown, Target, Gauge, Workflow
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const coreFeatures = [
  {
    id: "outbound-calling",
    icon: Phone,
    title: "Automated Outbound Campaigns",
    subtitle: "Outbound Calling Capabilities",
    features: [
      "Cold calling campaigns",
      "Warm lead follow-ups",
      "Missed call callbacks",
      "Quote follow-ups",
      "Appointment confirmations",
      "Reactivation campaigns",
      "Past customer upsells",
      "Event reminders",
      "Payment reminders",
      "Survey calls",
      "Review generation calls",
      "Referral request calls",
    ],
  },
  {
    id: "sales-engine",
    icon: Bot,
    title: "AI Sales Intelligence",
    subtitle: "Smart Sales Conversation Engine",
    features: [
      "Dynamic sales script branching",
      "Objection handling (trained per industry)",
      "Budget probing",
      "Qualification scoring",
      "Intent detection",
      "Buying signal detection",
      "Live sentiment analysis",
      "Real-time pivoting in conversation",
      "Appointment setting capability",
      "Live transfer to closer when qualified",
      "Follow-up scheduling automation",
      "Multi-touch sequence logic",
    ],
  },
  {
    id: "campaign-management",
    icon: Target,
    title: "Outbound Campaign Builder",
    subtitle: "Campaign Management System",
    features: [
      "Contact list upload",
      "CRM list syncing",
      "Segment filtering",
      "Call scheduling windows",
      "Time-zone aware dialing",
      "Throttling controls",
      "DNC list management",
      "Retry logic",
      "Voicemail detection logic",
      "AI voicemail drops",
      "A/B script testing",
      "Campaign-level analytics dashboard",
    ],
  },
  {
    id: "compliance",
    icon: Lock,
    title: "Legal & Compliance Layer",
    subtitle: "Compliance & Call Regulations",
    features: [
      "TCPA-aware dialing configurations",
      "Opt-in management",
      "DNC suppression",
      "Call recording consent logic",
      "State-based dialing restrictions",
      "Call frequency limits",
      "Time-of-day restrictions",
      "Compliance reporting logs",
    ],
  },
  {
    id: "deployment",
    icon: Rocket,
    title: "Implementation Process",
    subtitle: "Setup & Deployment Deliverables",
    features: [
      "Sales funnel audit",
      "Script strategy workshop",
      "ICP definition session",
      "Objection mapping",
      "CRM integration setup",
      "Campaign flow mapping",
      "Compliance review",
      "Test campaign deployment",
      "A/B script launch",
      "14-day optimization cycle",
      "Monthly campaign review",
      "Sales performance tuning",
    ],
  },
];

const premiumFeatures = [
  {
    id: "revenue-tracking",
    icon: BarChart3,
    title: "Revenue Intelligence",
    subtitle: "Sales & Revenue Tracking",
    features: [
      "Conversion rate tracking",
      "Call-to-appointment rate",
      "Call-to-sale rate",
      "Cost per acquisition modeling",
      "Revenue attribution",
      "ROI dashboard",
      "Rep performance benchmarking (AI vs human)",
      "Lead scoring heatmaps",
      "Sales pipeline integration",
      "Follow-up gap detection",
    ],
  },
  {
    id: "crm-automation",
    icon: Plug,
    title: "CRM & Automation Integration",
    subtitle: "CRM & Automation Integration",
    features: [
      "CRM pipeline updates",
      "Automated follow-up sequences",
      "SMS + email hybrid sequences",
      "Zapier + webhook integration",
      "Calendar booking integration",
      "Automated proposal sending",
      "Payment link sending",
      "Task creation for human reps",
    ],
  },
  {
    id: "sales-ai",
    icon: TrendingUp,
    title: "Next-Level Capabilities",
    subtitle: "Advanced Sales AI Features",
    features: [
      "Personalized call openers (based on data fields)",
      "AI personalization tokens",
      "Website activity-triggered calls",
      "Form abandonment calls",
      "Missed chat follow-up calls",
      "Retargeting campaign calls",
      "AI-powered negotiation framework",
      "AI appointment reminder + resell logic",
      "Voice cloning for brand consistency (optional)",
      "Multi-language outbound campaigns",
    ],
  },
  {
    id: "enterprise",
    icon: Settings,
    title: "Enterprise-Grade Options",
    subtitle: "Enterprise-Grade Options",
    features: [
      "Multi-location campaigns",
      "Territory routing",
      "Dedicated dialing numbers",
      "Local presence dialing",
      "Branded caller ID",
      "Dedicated infrastructure instance",
      "Volume-based scaling",
      "SLA support",
      "Custom reporting dashboards",
    ],
  },
];

const FeatureCategory = ({
  item,
}: {
  item: (typeof coreFeatures)[0];
}) => (
  <AccordionItem value={item.id} className="border border-border rounded-xl mb-4 overflow-hidden bg-card data-[state=open]:shadow-card-hover transition-shadow">
    <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
      <div className="flex items-center gap-4 text-left w-full">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <item.icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-6 pb-6">
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pt-2">
        {item.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </AccordionContent>
  </AccordionItem>
);

const AISalesAgentFeatures = () => {
  useEffect(() => {
    document.title = "BrightLaunchIQ AI Sales Agent Features - Outbound Sales & Engagement | BrightLaunchIQ";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore every feature of BrightLaunchIQ AI Sales Agent — automated outbound campaigns, AI sales intelligence, revenue tracking, CRM integration, and enterprise-grade options. Supercharge your outbound sales."
      );
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">AI Sales Agent — Outbound</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Every Feature. Every Campaign Optimized.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A complete breakdown of what BrightLaunchIQ AI Sales Agent delivers — from intelligent outbound campaigns and AI sales conversations to revenue tracking and advanced automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-receptionist/get-started">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/ai-sales-agent">
                  Back to AI Sales Agent
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
                Included in Every Plan
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Core Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you get out of the box — outbound campaigns, AI sales intelligence, campaign management, compliance, and optimization.
              </p>
            </div>

            <Accordion type="multiple" defaultValue={["outbound-calling"]} className="space-y-0">
              {coreFeatures.map((item) => (
                <FeatureCategory key={item.id} item={item} />
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 uppercase tracking-wider">
                Growth &amp; Pro Tiers
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Premium Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unlock revenue tracking, CRM automation, advanced sales AI, and enterprise-grade options when you upgrade.
              </p>
            </div>

            <Accordion type="multiple" defaultValue={["revenue-tracking"]} className="space-y-0">
              {premiumFeatures.map((item) => (
                <FeatureCategory key={item.id} item={item} />
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Scale Your Outbound Engine?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Automate your sales, close more deals, and see ROI in the first 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-receptionist/get-started">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/ai-sales-agent">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISalesAgentFeatures;
