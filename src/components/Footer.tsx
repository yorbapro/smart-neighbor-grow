import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoDarkBg from "@/assets/logo-dark-bg.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { label: "LaunchPad 360™", href: "/launchpad-360" },
      { label: "AI Receptionist", href: "/ai-receptionist" },
      { label: "LocalLift™", href: "/locallift" },
      { label: "OmniLogic™", href: "/omnilogic" },
      { label: "Free AI Audit", href: "/aeo-audit" },
    ],
    industries: [
      { label: "HVAC Contractors", href: "/industries/hvac-contractors" },
      { label: "Emergency Plumbing", href: "/industries/emergency-plumbers" },
      { label: "Personal Injury Law", href: "/industries/personal-injury-lawyers" },
      { label: "Medical Practices", href: "/industries/dental-clinics" },
      { label: "Real Estate", href: "/industries/residential-real-estate" },
      { label: "View All Industries →", href: "/industries" },
    ],
    resources: [
      { label: "How It Works", href: "/resources/how-it-works" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Learning Center", href: "/learning-center" },
      { label: "Glossary", href: "/resources/glossary" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Trust & Security", href: "/trust-security" },
      { label: "Locations", href: "/locations" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/#faq" },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground" role="contentinfo">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logoDarkBg} alt="BrightLaunchIQ logo" className="h-10 object-contain" />
            </Link>
            <p className="text-secondary-foreground/60 mb-6 max-w-sm leading-relaxed">
              Human-Guided AI sales automation for local businesses. 
              Get more customers without the busywork.
            </p>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:1-877-879-5552" 
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                1-877-879-5552
              </a>
              <a 
                href="mailto:success@BrightLaunchIQ.com"
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                success@BrightLaunchIQ.com
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="font-display font-semibold mb-5 text-sm uppercase tracking-wider text-secondary-foreground/50">
              Solutions
            </p>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="font-display font-semibold mb-5 text-sm uppercase tracking-wider text-secondary-foreground/50">
              Industries
            </p>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="font-display font-semibold mb-5 text-sm uppercase tracking-wider text-secondary-foreground/50">
              Resources
            </p>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-display font-semibold mb-5 text-sm uppercase tracking-wider text-secondary-foreground/50">
              Company
            </p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/50">
            © {currentYear} BrightLaunchIQ. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-secondary-foreground/50">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link to="/accessibility" className="hover:text-primary transition-colors">
              Accessibility
            </Link>
            <a href="/sitemap.xml" className="hover:text-primary transition-colors">
              Sitemap
            </a>
            <a href="/llms.txt" className="hover:text-primary transition-colors">
              llms.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;