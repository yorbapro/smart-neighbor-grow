import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "LaunchPad 360™", href: "/products/launchpad-360" },
    { label: "LocalLift™", href: "/products/locallift" },
    { label: "Free AEO Audit", href: "/aeo-audit" },
    { label: "Pricing", href: "/pricing" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border" role="banner">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">B</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            BrightLaunch<span className="text-primary">IQ</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="tel:1-800-LAUNCH-IQ">1-800-LAUNCH-IQ</a>
          </Button>
          <Button variant="hero" size="default" asChild>
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav 
          id="mobile-nav"
          className="md:hidden bg-card border-b border-border animate-slide-up" 
          aria-label="Mobile navigation"
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="heroOutline" size="default" className="w-full" asChild>
                <a href="tel:1-800-LAUNCH-IQ">1-800-LAUNCH-IQ</a>
              </Button>
              <Button variant="hero" size="default" className="w-full" asChild>
                <Link to="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
    </>
  );
};

export default Header;
