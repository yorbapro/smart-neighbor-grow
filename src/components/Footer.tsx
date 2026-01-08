import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "LaunchPad 360™", href: "/products/launchpad-360" },
      { label: "LocalLift™", href: "/products/locallift" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Locations", href: "/locations" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-16" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">B</span>
              </div>
              <span className="font-display font-bold text-xl">
                BrightLaunch<span className="text-primary">IQ</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/70 mb-6 max-w-sm">
              Human-Guided AI sales automation for local businesses. 
              Get more customers without the busywork.
            </p>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <p>1-800-LAUNCH-IQ</p>
              <p>success@BrightLaunchIQ.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} BrightLaunchIQ. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-secondary-foreground/60">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms & Cancellation
            </Link>
            <Link to="/accessibility" className="hover:text-primary transition-colors">
              Accessibility
            </Link>
            <a href="mailto:success@BrightLaunchIQ.com" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
