const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "LaunchPad 360™", href: "#services" },
      { label: "IQ Flow™", href: "#services" },
      { label: "LocalLift™", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Locations", href: "#locations" },
    ],
    locations: [
      { label: "Sacramento Hub", href: "#locations" },
      { label: "Stockton Hub", href: "#locations" },
      { label: "Fresno Hub", href: "#locations" },
      { label: "Bakersfield Hub", href: "#locations" },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">B</span>
              </div>
              <span className="font-display font-bold text-xl">
                BrightLaunch<span className="text-primary">IQ</span>
              </span>
            </a>
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
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display font-semibold mb-4">Locations</h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
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
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
