import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomepage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resourceLinks = [
    { label: "Industries", href: "/industries" },
    { label: "AI Receptionist Guide", href: "/learning-center/ai-receptionist-guide" },
    { label: "Learning Center", href: "/learning-center" },
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Glossary", href: "/resources/glossary" },
  ];

  const headerBg = isScrolled 
    ? "bg-card/95 backdrop-blur-xl border-b border-border shadow-sm" 
    : isHomepage 
      ? "bg-transparent" 
      : "bg-card/95 backdrop-blur-xl border-b border-border";
  
  const textColor = isScrolled || !isHomepage ? "text-foreground" : "text-white";
  const mutedColor = isScrolled || !isHomepage ? "text-muted-foreground" : "text-white/70";
  const logoTextColor = isScrolled || !isHomepage ? "text-foreground" : "text-white";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`} 
        role="banner"
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-button">
              <span className="text-white font-display font-bold text-lg">B</span>
            </div>
            <span className={`font-display font-bold text-xl ${logoTextColor}`}>
              BrightLaunch<span className="text-primary">IQ</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link
              to="/ai-receptionist"
              className={`${mutedColor} hover:${textColor} transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md`}
            >
              AI Receptionist
            </Link>

            <Link
              to="/how-it-works"
              className={`${mutedColor} hover:${textColor} transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md`}
            >
              How It Works
            </Link>

            <Link
              to="/pricing"
              className={`${mutedColor} hover:${textColor} transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md`}
            >
              Pricing
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                onBlur={() => setTimeout(() => setIsResourcesOpen(false), 150)}
                className={`flex items-center gap-1 ${mutedColor} hover:${textColor} transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md`}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-xl border border-border shadow-card-hover py-2 z-50">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                onBlur={() => setTimeout(() => setIsCompanyOpen(false), 150)}
                className={`flex items-center gap-1 ${mutedColor} hover:${textColor} transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md`}
                aria-expanded={isCompanyOpen}
                aria-haspopup="true"
              >
                Company
                <ChevronDown className={`w-4 h-4 transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCompanyOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-xl border border-border shadow-card-hover py-2 z-50">
                  <Link
                    to="/about"
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsCompanyOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsCompanyOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    to="/trust-security"
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsCompanyOpen(false)}
                  >
                    Trust & Security
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant={isScrolled || !isHomepage ? "ghost" : "heroOutline"} 
              size="sm" 
              asChild
              className={isScrolled || !isHomepage ? "" : "border-white/20 text-white hover:bg-white/10"}
            >
              <a href="tel:1-877-879-5552">1-877-879-5552</a>
            </Button>
            <Button 
              variant={isScrolled || !isHomepage ? "outline" : "heroOutline"} 
              size="sm" 
              asChild
              className={isScrolled || !isHomepage ? "" : "border-white/20 text-white hover:bg-white/10"}
            >
              <Link to="/login">Sign In</Link>
            </Button>
            <Button variant="hero" size="default" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${textColor} focus:outline-none focus:ring-2 focus:ring-ring rounded-md`}
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
              <Link
                to="/ai-receptionist"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Receptionist
              </Link>

              <Link
                to="/how-it-works"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>

              <Link
                to="/pricing"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              
              {/* Mobile Resources Section */}
              <div className="py-2 border-t border-border">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Resources</p>
                {resourceLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2 pl-4 focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Company Section */}
              <div className="py-2 border-t border-border">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Company</p>
                <Link
                  to="/about"
                  className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2 pl-4 focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2 pl-4 focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/trust-security"
                  className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2 pl-4 focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trust & Security
                </Link>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" size="default" className="w-full" asChild>
                  <a href="tel:1-877-879-5552">1-877-879-5552</a>
                </Button>
                <Button variant="outline" size="default" className="w-full" asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                </Button>
                <Button variant="hero" size="default" className="w-full" asChild>
                  <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
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
