import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, HelpCircle, ClipboardCheck } from "lucide-react";

const resources = [
  {
    title: "AI Receptionist Guide",
    description: "The ultimate guide to understanding, evaluating, and implementing an AI receptionist for your business.",
    href: "/ai-receptionist/resources/ai-receptionist-guide",
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Glossary",
    description: "Comprehensive glossary of AI lead generation, AEO, GEO, and sales automation terms.",
    href: "/ai-receptionist/resources/glossary",
    icon: FileText,
    color: "text-accent-foreground",
    bgColor: "bg-accent/30",
  },
  {
    title: "AI Receptionist vs Traditional Marketing",
    description: "Side-by-side comparison of AI-powered lead generation vs traditional marketing methods.",
    href: "/ai-receptionist/resources/comparison",
    icon: HelpCircle,
    color: "text-secondary-foreground",
    bgColor: "bg-secondary/50",
  },
  {
    title: "AI Receptionist Readiness Assessment",
    description: "Take a free 2-minute assessment to find out how much revenue you're losing to missed calls.",
    href: "/ai-receptionist/resources/ai-receptionist-readiness-assessment",
    icon: ClipboardCheck,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
];

const ResourcesHub = () => {
  useSEO({
    title: "AI Receptionist Resources | Guides, Tools & Assessments | BrightLaunchIQ",
    description: "Free AI receptionist resources: comprehensive guide, glossary, comparison tools, and readiness assessment. Everything you need to make an informed decision.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/resources",
    keywords: "AI receptionist resources, AI receptionist guide, AI glossary, AI readiness assessment",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>

        <section className="py-12 md:py-16 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                AI Receptionist Resources
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Guides, tools, and assessments to help you evaluate and implement an AI receptionist for your business.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <Link
                  key={resource.title}
                  to={resource.href}
                  className="group bg-card rounded-2xl border border-border p-8 hover:shadow-card-hover hover:border-primary/30 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${resource.bgColor} flex items-center justify-center mb-5`}>
                    <resource.icon className={`w-6 h-6 ${resource.color}`} />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">See how an AI receptionist works for your business with a free demo.</p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-receptionist/get-started">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesHub;
