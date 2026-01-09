import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Users,
  MessageSquare,
  Calendar,
  BarChart3,
  CheckCircle,
  Zap,
  Clock,
  Target,
  Phone,
  Mail,
  Brain,
  Shield,
} from "lucide-react";

const HowItWorks = () => {
  useEffect(() => {
    document.title = "How AI Lead Generation Works | Step-by-Step Guide | BrightLaunchIQ";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn how AI lead generation works in 6 simple steps. From prospect identification to booked meetings, discover how human-guided AI finds and converts leads 24/7."
      );
    }

    window.scrollTo(0, 0);

    // Remove existing schemas
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // HowTo Schema - optimized for voice extraction (AEO)
    const howToScript = document.createElement("script");
    howToScript.type = "application/ld+json";
    howToScript.id = "howto-schema";
    howToScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How AI Lead Generation Works",
      "description": "A complete step-by-step guide to AI-powered lead generation. Learn how artificial intelligence identifies prospects, initiates contact, qualifies leads, and books meetings—all with human expert oversight.",
      "totalTime": "PT24H",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "500",
        "unitText": "MONTH"
      },
      "tool": [
        { "@type": "HowToTool", "name": "AI Lead Generation Platform" },
        { "@type": "HowToTool", "name": "CRM Integration" },
        { "@type": "HowToTool", "name": "Multi-Channel Outreach System" }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Define Your Ideal Customer Profile",
          "text": "First, identify who your best customers are. AI lead generation starts by defining your Ideal Customer Profile (ICP) including industry, company size, location, and buying signals. This tells the AI exactly who to target.",
          "url": "https://brightlaunchiq.com/resources/how-it-works#step-1",
          "image": "https://brightlaunchiq.com/images/step-1-icp.png"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "AI Scans for Intent Signals",
          "text": "Second, the AI continuously monitors data sources for buying signals. It scans job postings, technology changes, funding announcements, website visits, and social activity to identify prospects actively looking for solutions like yours.",
          "url": "https://brightlaunchiq.com/resources/how-it-works#step-2",
          "image": "https://brightlaunchiq.com/images/step-2-signals.png"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Automated Multi-Channel Outreach",
          "text": "Third, when a prospect matches your ICP and shows intent, AI initiates personalized outreach across multiple channels. This includes email, SMS, LinkedIn, and phone calls—all customized based on the prospect's profile and behavior.",
          "url": "https://brightlaunchiq.com/resources/how-it-works#step-3",
          "image": "https://brightlaunchiq.com/images/step-3-outreach.png"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Instant Lead Response",
          "text": "Fourth, when prospects respond or fill out forms, AI responds in under 60 seconds—24 hours a day. This speed-to-lead advantage is critical because 50% of sales go to the first business that responds.",
          "url": "https://brightlaunchiq.com/resources/how-it-works#step-4",
          "image": "https://brightlaunchiq.com/images/step-4-response.png"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "AI Qualifies and Scores Leads",
          "text": "Fifth, AI asks qualifying questions and scores leads based on fit, budget, timeline, and engagement. Hot leads are prioritized and routed immediately to your sales team with full context.",
          "url": "https://brightlaunchiq.com/resources/how-it-works#step-5",
          "image": "https://brightlaunchiq.com/images/step-5-qualify.png"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Meetings Booked Automatically",
          "text": "Finally, qualified leads are scheduled directly on your calendar. The AI handles back-and-forth scheduling, sends confirmations and reminders, and provides you with a complete briefing before each meeting.",
          "url": "https://brightlaunchiq.com/resources/how-it-works#step-6",
          "image": "https://brightlaunchiq.com/images/step-6-meetings.png"
        }
      ]
    });
    document.head.appendChild(howToScript);

    // FAQ Schema for additional voice queries
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to set up AI lead generation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI lead generation can be set up in 30 days or less. This includes defining your ideal customer profile, integrating with your CRM, training the AI on your brand voice, and launching multi-channel outreach campaigns."
          }
        },
        {
          "@type": "Question",
          "name": "How much does AI lead generation cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI lead generation typically costs between $500-2000 per month, compared to $60,000-80,000 per year for a human sales development representative. This makes it 90% more cost-effective while providing 24/7 coverage."
          }
        },
        {
          "@type": "Question",
          "name": "Is AI lead generation fully automated or supervised by humans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best AI lead generation uses human-guided AI, also called human-in-the-loop. AI handles high-volume tasks like prospecting and initial outreach, while human experts supervise quality, maintain brand voice, and handle complex situations."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can AI respond to new leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI lead generation systems can respond to new leads in under 60 seconds, 24 hours a day, 7 days a week. This is critical because research shows 50% of sales go to the first business that responds."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    // Speakable Schema for voice assistants
    const speakableScript = document.createElement("script");
    speakableScript.type = "application/ld+json";
    speakableScript.id = "speakable-schema";
    speakableScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "How AI Lead Generation Works",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".speakable-intro",
          ".step-title",
          ".step-description"
        ]
      },
      "url": "https://brightlaunchiq.com/resources/how-it-works"
    });
    document.head.appendChild(speakableScript);

    return () => {
      ['howto-schema', 'faq-schema', 'speakable-schema'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  const steps = [
    {
      number: 1,
      icon: Target,
      title: "Define Your Ideal Customer Profile",
      description: "First, identify who your best customers are. AI lead generation starts by defining your Ideal Customer Profile (ICP) including industry, company size, location, and buying signals. This tells the AI exactly who to target.",
      details: [
        "Industry and company size parameters",
        "Geographic targeting and service areas",
        "Behavioral triggers and buying signals",
        "Budget and timeline qualifiers"
      ],
      color: "primary"
    },
    {
      number: 2,
      icon: Search,
      title: "AI Scans for Intent Signals",
      description: "Second, the AI continuously monitors data sources for buying signals. It scans job postings, technology changes, funding announcements, website visits, and social activity to identify prospects actively looking for solutions like yours.",
      details: [
        "Real-time monitoring of 50+ data sources",
        "Job posting and hiring signal detection",
        "Technology stack change alerts",
        "Website visitor identification"
      ],
      color: "accent"
    },
    {
      number: 3,
      icon: MessageSquare,
      title: "Automated Multi-Channel Outreach",
      description: "Third, when a prospect matches your ICP and shows intent, AI initiates personalized outreach across multiple channels. This includes email, SMS, LinkedIn, and phone calls—all customized based on the prospect's profile and behavior.",
      details: [
        "Personalized email sequences",
        "SMS and text message campaigns",
        "LinkedIn connection and messaging",
        "AI-powered phone calls and voicemails"
      ],
      color: "secondary"
    },
    {
      number: 4,
      icon: Zap,
      title: "Instant Lead Response",
      description: "Fourth, when prospects respond or fill out forms, AI responds in under 60 seconds—24 hours a day. This speed-to-lead advantage is critical because 50% of sales go to the first business that responds.",
      details: [
        "Sub-60-second response time guaranteed",
        "24/7/365 availability—no holidays",
        "Natural, conversational AI responses",
        "Immediate form and inquiry handling"
      ],
      color: "primary"
    },
    {
      number: 5,
      icon: BarChart3,
      title: "AI Qualifies and Scores Leads",
      description: "Fifth, AI asks qualifying questions and scores leads based on fit, budget, timeline, and engagement. Hot leads are prioritized and routed immediately to your sales team with full context.",
      details: [
        "Automated BANT qualification",
        "Real-time lead scoring algorithms",
        "Priority routing to sales team",
        "Complete prospect dossier delivery"
      ],
      color: "accent"
    },
    {
      number: 6,
      icon: Calendar,
      title: "Meetings Booked Automatically",
      description: "Finally, qualified leads are scheduled directly on your calendar. The AI handles back-and-forth scheduling, sends confirmations and reminders, and provides you with a complete briefing before each meeting.",
      details: [
        "Direct calendar integration",
        "Automated scheduling and rescheduling",
        "Confirmation and reminder sequences",
        "Pre-meeting intelligence briefings"
      ],
      color: "secondary"
    }
  ];

  const stats = [
    { value: "<60s", label: "Response Time" },
    { value: "24/7", label: "Availability" },
    { value: "6+", label: "Outreach Channels" },
    { value: "78%", label: "More Leads Captured" }
  ];

  const faqs = [
    {
      question: "How long does it take to set up AI lead generation?",
      answer: "AI lead generation can be set up in 30 days or less. This includes defining your ideal customer profile, integrating with your CRM, training the AI on your brand voice, and launching multi-channel outreach campaigns."
    },
    {
      question: "How much does AI lead generation cost?",
      answer: "AI lead generation typically costs between $500-2000 per month, compared to $60,000-80,000 per year for a human sales development representative. This makes it 90% more cost-effective while providing 24/7 coverage."
    },
    {
      question: "Is AI lead generation fully automated or supervised by humans?",
      answer: "The best AI lead generation uses human-guided AI, also called human-in-the-loop. AI handles high-volume tasks like prospecting and initial outreach, while human experts supervise quality, maintain brand voice, and handle complex situations."
    },
    {
      question: "How fast can AI respond to new leads?",
      answer: "AI lead generation systems can respond to new leads in under 60 seconds, 24 hours a day, 7 days a week. This is critical because research shows 50% of sales go to the first business that responds."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content" className="pt-24">
        <div className="container">
          <Breadcrumb />
        </div>

        {/* Hero Section - Speakable */}
        <section className="py-12 md:py-20 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Step-by-Step Guide
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                How AI Lead Generation Works
              </h1>
              <p className="speakable-intro text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                AI lead generation uses artificial intelligence to find, qualify, and engage prospects automatically. 
                Here's exactly how it works in 6 simple steps—from identifying your ideal customers to booking meetings on your calendar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/get-started">
                    Start Generating Leads
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/aeo-audit">
                    Free AI Visibility Audit
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-10 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-secondary-foreground/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Human-Guided Callout */}
        <section className="py-12 md:py-16 bg-card border-y border-border">
          <div className="container">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Human-Guided AI: The Best of Both Worlds
                </h2>
                <p className="text-muted-foreground">
                  Every step below is supervised by human experts who ensure quality, maintain your brand voice, 
                  and handle edge cases. AI handles the volume; humans ensure the excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-12 md:space-y-16">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    id={`step-${step.number}`}
                    className={`relative grid md:grid-cols-2 gap-8 items-center ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Step Number Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute left-1/2 top-full h-12 md:h-16 w-0.5 bg-border -translate-x-1/2" />
                    )}

                    {/* Content */}
                    <div className={index % 2 === 1 ? "md:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                          {step.number}
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                          Step {step.number} of 6
                        </span>
                      </div>
                      <h3 className="step-title font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="step-description text-muted-foreground text-lg mb-6 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Visual Card */}
                    <div className={`bg-card rounded-2xl border border-border p-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-4">What happens at this step:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
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

        {/* Visual Process Flow */}
        <section className="py-16 md:py-24 bg-gradient-subtle">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Complete AI Lead Generation Flow
              </h2>
              <p className="text-lg text-muted-foreground">
                From first contact to booked meeting—here's how AI transforms your sales pipeline.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    <div className="bg-card rounded-xl border border-border p-4 text-center hover:shadow-card-hover transition-shadow h-full">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="font-display font-bold text-foreground text-sm mb-1">
                        Step {step.number}
                      </div>
                      <div className="text-xs text-muted-foreground leading-tight">
                        {step.title.split(" ").slice(0, 3).join(" ")}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - AEO Optimized */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about how AI lead generation works.
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl border border-border p-6"
                  >
                    <h3 className="font-display text-lg font-bold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Generating Leads with AI?
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get your complete AI sales engine running in 30 days. Human-guided, 
                fully customized to your business, and delivering results from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/get-started">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="tel:1-800-LAUNCH-IQ">
                    <Phone className="mr-2 w-5 h-5" />
                    Talk to an Expert
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;