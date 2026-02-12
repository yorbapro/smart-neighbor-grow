import { Shield, Lock, Eye, Server, Users, Clock, Database, ShieldCheck, Ban } from "lucide-react";

const securityPoints = [
  { icon: Lock, text: "256-bit AES encryption (same standard used by major banks)" },
  { icon: Server, text: "Encrypted in transit (SSL/TLS) and encrypted at rest" },
  { icon: ShieldCheck, text: "SOC 2 Type II compliant infrastructure (via enterprise AI providers)" },
  { icon: Eye, text: "GDPR & CCPA-aligned data handling practices" },
  { icon: Shield, text: "HIPAA-ready configurations available" },
  { icon: Database, text: "Secure API-based integrations only" },
  { icon: Users, text: "Role-based access controls" },
  { icon: Clock, text: "Optional data retention limits" },
  { icon: Ban, text: "No public model training on your proprietary data" },
];

const SecurityPillar = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Security & Compliance
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              🔐 Enterprise-Grade Security.
              <span className="text-gradient block mt-2">Built for Real Businesses.</span>
            </h2>
            <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              AI should grow your business — not introduce risk. At BrightLaunchIQ, security isn't an afterthought. It's foundational.
            </p>
          </div>

          {/* Security Points Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {securityPoints.map((point) => (
              <div
                key={point.text}
                className="flex items-start gap-4 p-5 rounded-2xl bg-secondary-foreground/5 border border-primary/10 hover:border-primary/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          {/* Promise Banner */}
          <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-hero text-primary-foreground text-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <Lock className="w-10 h-10 mx-auto mb-4" />
              <p className="font-display text-xl md:text-2xl font-bold max-w-2xl mx-auto">
                Your data is your data. We never sell, share, or train on your proprietary information. Period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityPillar;
