import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Shield, Database, Lock, Eye, Server, Users, ShieldCheck, Phone, Ban, Trash2, FileText, Bot, AlertTriangle } from "lucide-react";

const TrustSecurity = () => {
  useEffect(() => {
    document.title = "Trust & Security | BrightLaunchIQ — Enterprise-Grade Data Protection";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn how BrightLaunchIQ protects your data with AES-256 encryption, GDPR/CCPA compliance, zero-training AI policies, and human-in-the-loop oversight. Enterprise-grade security built for local businesses.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Trust & Security</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Data. Your Control.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparency, encryption, compliance, and human oversight — the pillars of every BrightLaunchIQ deployment.
            </p>
          </div>
        </div>
      </section>

      <main id="main-content" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          {/* Section 1: Data Handling Transparency */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Data Handling Transparency</h2>
            </div>
            <div className="space-y-6 pl-4 border-l-2 border-primary/20">
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">What data is collected</h3>
                <p className="text-muted-foreground">We collect only the information necessary to deliver our services: business contact details, call metadata, lead information, and CRM integration data you explicitly authorize.</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">What data is stored</h3>
                <p className="text-muted-foreground">Call transcripts, lead records, appointment data, and analytics are stored in encrypted databases. Audio recordings are stored only when recording is explicitly enabled and consented to.</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">What is NOT stored</h3>
                <p className="text-muted-foreground">We do not store payment card details, social security numbers, or any financial information. We do not retain audio beyond your configured retention window.</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">Retention policies</h3>
                <p className="text-muted-foreground">You control how long your data is retained. Default retention is 90 days for call recordings and 12 months for lead data, both configurable to your requirements.</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <Trash2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground font-medium">One-click deletion available upon request. Contact us anytime to have your data permanently removed.</p>
              </div>
            </div>
          </section>

          {/* Section 2: AI Model Usage Policy */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">AI Model Usage Policy</h2>
            </div>
            <div className="space-y-6 pl-4 border-l-2 border-primary/20">
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">Secure enterprise APIs</h3>
                <p className="text-muted-foreground">We use enterprise-tier AI APIs from leading providers with strict data processing agreements. All AI interactions occur through encrypted, audited channels.</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">Your data stays private</h3>
                <p className="text-muted-foreground">Client data is never used to retrain public AI models. Your business conversations, lead data, and proprietary information remain completely isolated.</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20">
                <Ban className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-foreground font-bold">Zero-training policy on proprietary data. Your information is used only to serve you — never to improve models for others.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Encryption Standards */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Encryption Standards</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Lock, title: "AES-256 Encryption", desc: "The same encryption standard used by banks and government agencies to protect sensitive data." },
                { icon: Server, title: "Encrypted in Transit", desc: "All data transmitted using SSL/TLS protocols. Every API call, webhook, and data transfer is secured." },
                { icon: Database, title: "Encrypted at Rest", desc: "Data stored in encrypted cloud storage with strict access controls and regular security audits." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Compliance-Ready Deployment */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Compliance-Ready Deployment</h2>
            </div>
            <div className="space-y-4">
              {[
                { title: "GDPR & CCPA aligned", desc: "Our data handling practices align with GDPR and CCPA requirements, including data minimization, right to deletion, and transparent processing notices." },
                { title: "HIPAA-ready workflows", desc: "For healthcare and regulated industries, we offer HIPAA-ready configurations with enhanced access controls, audit logging, and BAA availability." },
                { title: "Custom compliance review", desc: "Need to meet specific regulatory requirements? Our team works with your compliance officers to configure deployments that satisfy your industry's standards." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-xl bg-card border border-border">
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Human Oversight & Guardrails */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Human Oversight & Guardrails</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Eye, text: "Human-in-the-loop monitoring on all AI interactions" },
                { icon: FileText, text: "Immediate call reporting delivered to your inbox" },
                { icon: AlertTriangle, text: "Optional review layer for sensitive conversations" },
                { icon: Ban, text: "Blacklist feature to prevent specific numbers from being contacted" },
                { icon: Phone, text: "Override capability — step in at any second" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture Diagram */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Security Architecture</h2>
            </div>
            <div className="p-8 rounded-2xl bg-secondary border border-border">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                {[
                  { label: "Customer", sublabel: "Your clients" },
                  { label: "AI Layer", sublabel: "BrightLaunchIQ" },
                  { label: "Secure API", sublabel: "Encrypted" },
                  { label: "CRM", sublabel: "Your system" },
                  { label: "Dashboard", sublabel: "Your insights" },
                ].map((step, i, arr) => (
                  <div key={step.label} className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-2">
                        <span className="font-display font-bold text-primary text-xs">{step.label}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{step.sublabel}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex flex-col items-center mx-2">
                        <span className="text-primary text-lg">→</span>
                        <span className="text-[10px] text-primary/70 font-semibold bg-primary/10 px-2 py-0.5 rounded">Encrypted</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrustSecurity;
