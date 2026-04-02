import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { BookOpen, Target, Zap, Plug, Rocket } from "lucide-react";

const sections = [
  {
    title: "Core Concepts & Technology",
    icon: Zap,
    terms: [
      {
        term: "AI Receptionist (AI Voice Agent)",
        definition: "An artificial intelligence system that answers phone calls for your business automatically. Unlike a traditional bot, it uses natural language processing to have real, human-like conversations, available 24/7/365."
      },
      {
        term: "Agentic AI",
        definition: "AI systems that can take autonomous actions toward goals with minimal human intervention. For example, an AI agent that can independently research a prospect and book an appointment."
      },
      {
        term: "Answer Engine Optimization (AEO)",
        definition: "The practice of optimizing your business information so it is accurately cited by AI assistants like ChatGPT, Gemini, and Perplexity. It's the 'SEO of the AI era.'"
      },
      {
        term: "Bounded Autonomy",
        definition: "A framework where AI operates independently within predefined 'guardrails' set by you. This ensures the AI stays on-brand and follows your specific business rules."
      },
      {
        term: "Generative Engine Optimization (GEO)",
        definition: "A strategy focused on making your content discoverable by AI-powered search engines. It emphasizes structured facts and authority signals that AI systems use to generate answers."
      },
      {
        term: "Human-in-the-Loop (HITL)",
        definition: "An approach where human experts (like the BrightLaunchIQ team) supervise and quality-check AI outputs to ensure accuracy and maintain your brand voice."
      },
      {
        term: "Natural Language Processing (NLP)",
        definition: "The technology that allows the AI to understand, interpret, and generate human language in a way that feels natural and conversational."
      }
    ]
  },
  {
    title: "Onboarding & Setup",
    icon: Target,
    terms: [
      {
        term: "Business Logic Ingestion",
        definition: "The process of 'feeding' the AI your specific business data—hours, services, pricing, and FAQs—so it can answer caller questions accurately."
      },
      {
        term: "Discovery Call",
        definition: "The initial strategy session where we learn about your business goals, current challenges, and specific requirements for your AI Receptionist."
      },
      {
        term: "Ideal Customer Profile (ICP)",
        definition: "A detailed description of the type of customer most likely to benefit from your services. We use this to train the AI on how to qualify leads."
      },
      {
        term: "Knowledge Base",
        definition: "The centralized repository of information (website content, PDFs, FAQs) that the AI uses as its 'brain' to answer questions during calls."
      },
      {
        term: "Persona Calibration",
        definition: "The process of tuning the AI's voice, tone, and personality (e.g., 'Professional & Formal' vs. 'Friendly & Local') to match your brand."
      },
      {
        term: "Script Development",
        definition: "The creation of the conversational 'flow' the AI follows. While the AI is dynamic, the script provides the structure for greetings, qualification, and booking."
      }
    ]
  },
  {
    title: "Call Handling & Features",
    icon: BookOpen,
    terms: [
      {
        term: "Barge-in Capability",
        definition: "A feature that allows the AI to handle interruptions naturally. If a caller speaks while the AI is talking, the AI will stop and listen, just like a human."
      },
      {
        term: "Call Routing (Intelligent Routing)",
        definition: "The logic used to direct calls to the right place. For example, routing 'Emergency' calls to a live technician while routing 'Billing' questions to an office line."
      },
      {
        term: "Lead Qualification",
        definition: "The process where the AI asks specific questions to determine if a caller is a good fit for your business before booking an appointment or transferring the call."
      },
      {
        term: "Live Transfer (Warm/Cold)",
        definition: "Warm Transfer: The AI speaks to you first to introduce the caller before connecting them. Cold Transfer: The AI connects the caller directly to your line without an introduction."
      },
      {
        term: "Sentiment Analysis",
        definition: "The use of AI to detect the emotional tone of a call (e.g., Happy, Frustrated, Urgent). This helps in prioritizing follow-ups."
      },
      {
        term: "Speed to Lead",
        definition: "The time it takes to respond to a new inquiry. Our AI reduces this to under 60 seconds by answering every call instantly."
      },
      {
        term: "Voice Cloning",
        definition: "A premium feature where we create a digital replica of a specific human voice (like the business owner's) for the AI Receptionist to use."
      }
    ]
  },
  {
    title: "Integrations & Reporting",
    icon: Plug,
    terms: [
      {
        term: "CRM Integration",
        definition: "Connecting your AI Receptionist to your Customer Relationship Management system (like HubSpot, Salesforce, or Jobber) to automatically log leads and appointments."
      },
      {
        term: "Pipeline Intelligence",
        definition: "Using AI to analyze your sales pipeline, identifying which deals are at risk and suggesting the best next actions."
      },
      {
        term: "Schema Markup",
        definition: "Structured data added to your website that helps AI assistants (and Google) understand your business details like location, reviews, and services."
      },
      {
        term: "Webhook",
        definition: "A technical method for the AI to send real-time data to other apps (like sending a Slack notification the moment a new lead is booked)."
      }
    ]
  },
  {
    title: "Product Specifics",
    icon: Rocket,
    terms: [
      {
        term: "LocalLift™",
        definition: "BrightLaunchIQ's proprietary service for Answer Engine Optimization (AEO), ensuring your business shows up first in AI and voice searches."
      },
      {
        term: "LaunchPad 360™",
        definition: "Our complete AI revenue system that combines inbound call handling, outbound sales agents, and AEO for total market dominance."
      },
      {
        term: "AI Sales Agent (Outbound)",
        definition: "An AI system designed to make outbound calls for lead follow-up, cold outreach, or re-engaging past customers."
      }
    ]
  }
];

const TerminologyGuide = () => {
  useSEO({
    title: "AI Receptionist Terminology Guide | BrightLaunchIQ",
    description: "A comprehensive guide to the terms and technology used in the BrightLaunchIQ AI Receptionist onboarding and implementation process.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/resources/terminology-guide",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          <Breadcrumb />
          
          <div className="max-w-4xl mx-auto mt-8">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                BrightLaunchIQ Terminology Guide
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This guide is designed to help you navigate the world of AI-powered business growth. 
                Understand the technology and processes we use to help your business win.
              </p>
            </div>

            <div className="space-y-16">
              {sections.map((section) => (
                <section key={section.title} className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <section.icon className="w-6 h-6" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>

                  <div className="grid gap-6">
                    {section.terms.map((item) => (
                      <div 
                        key={item.term}
                        className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-card-hover transition-all"
                      >
                        <h3 className="font-display text-xl font-bold text-foreground mb-3">
                          {item.term}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TerminologyGuide;
