import { Link } from "react-router-dom";
import { Lock, Shield, ShieldCheck, Eye } from "lucide-react";

const badges = [
  { icon: Lock, label: "AES-256 Encrypted" },
  { icon: Shield, label: "Zero-Training Policy" },
  { icon: ShieldCheck, label: "SOC 2 Infrastructure" },
  { icon: Eye, label: "GDPR & CCPA Ready" },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-muted/30 border-t border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">
            Built on Trusted, Secure Infrastructure
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/5 border border-primary/10"
              >
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
          <Link
            to="/trust-security"
            className="text-xs text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
          >
            Learn more about our security practices →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
