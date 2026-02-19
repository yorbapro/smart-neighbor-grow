import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const routeLabels: Record<string, string> = {
  "": "Home",
  "about": "About Us",
  "pricing": "Pricing",
  "contact": "Contact",
  "faq": "FAQ",
  "get-started": "Get Started",
  "aeo-audit": "Free AEO Audit",
  "locations": "Locations",
  "products": "Products",
  "launchpad-360": "LaunchPad 360™",
  "locallift": "LocalLift™",
  "resources": "Resources",
  "blog": "Blog",
  "glossary": "Glossary",
  "case-studies": "Case Studies",
  "comparison": "Comparison",
  "how-it-works": "How It Works",
  "sacramento": "Sacramento",
  "bakersfield": "Bakersfield",
  "fresno": "Fresno",
  "stockton": "Stockton",
  "culver-city": "Culver City",
  "monterey": "Monterey",
  "henderson": "Henderson",
  "terms": "Terms of Service",
  "privacy": "Privacy Policy",
  "accessibility": "Accessibility",
  "industries": "Industries",
  "hvac-contractors": "HVAC Contractors",
  "emergency-plumbers": "Emergency Plumbers",
  "roofing-companies": "Roofing Companies",
  "electricians": "Electricians",
  "pest-control": "Pest Control Services",
  "locksmiths": "Locksmiths",
  "garage-door-repair": "Garage Door Repair",
  "landscapers": "Landscapers",
  "junk-removal": "Junk Removal",
  "house-cleaning": "House Cleaning Services",
  "dental-clinics": "Dental Clinics",
  "chiropractors": "Chiropractors",
  "veterinary-clinics": "Veterinary Clinics",
  "physical-therapy": "Physical Therapy Centers",
  "mental-health-counselors": "Mental Health Counselors",
  "medical-spas": "Medical Spas",
  "optometrists": "Optometrists",
  "dermatologists": "Dermatologists",
  "orthodontists": "Orthodontists",
  "holistic-health": "Holistic Health",
  "personal-injury-lawyers": "Personal Injury Lawyers",
  "family-law-attorneys": "Family Law Attorneys",
  "criminal-defense-lawyers": "Criminal Defense Lawyers",
  "estate-planning-attorneys": "Estate Planning Attorneys",
  "immigration-consultants": "Immigration Consultants",
  "cpas-tax-professionals": "CPAs & Tax Professionals",
  "notary-publics": "Notary Publics",
  "private-investigators": "Private Investigators",
};

const Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
  const location = useLocation();
  
  // Generate breadcrumbs from path if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;
    
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
    
    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
      breadcrumbs.push({
        label,
        href: index === pathSegments.length - 1 ? undefined : currentPath,
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Add BreadcrumbList schema
  useEffect(() => {
    const existingSchema = document.getElementById("breadcrumb-schema");
    if (existingSchema) existingSchema.remove();

    if (breadcrumbs.length > 1) {
      const schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.id = "breadcrumb-schema";
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.label,
          "item": item.href ? `https://brightlaunchiq.com${item.href}` : undefined,
        })),
      });
      document.head.appendChild(schemaScript);
    }

    return () => {
      const el = document.getElementById("breadcrumb-schema");
      if (el) el.remove();
    };
  }, [location.pathname]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`py-3 ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {breadcrumbs.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-1 text-muted-foreground/50" aria-hidden="true" />
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                {index === 0 && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                <span>{item.label}</span>
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;