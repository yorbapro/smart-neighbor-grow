import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Critical path - load eagerly for SEO/LCP
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Loading fallback - minimal, performant
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

// Lazy load all secondary pages for faster initial bundle
const GetStarted = lazy(() => import("./pages/GetStarted"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const TrustSecurity = lazy(() => import("./pages/TrustSecurity"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const AboutPage = lazy(() => import("./pages/About"));
const LocationsPage = lazy(() => import("./pages/Locations"));
const FAQPage = lazy(() => import("./pages/FAQ"));
const AEOAudit = lazy(() => import("./pages/AEOAudit"));
const Onboarding = lazy(() => import("./pages/Onboarding"));

// Product pages
const LaunchPad360 = lazy(() => import("./pages/products/LaunchPad360"));
const LocalLift = lazy(() => import("./pages/products/LocalLift"));
const LeadLine = lazy(() => import("./pages/products/LeadLine"));
const LeadLineProactive = lazy(() => import("./pages/products/LeadLineProactive"));
const LeadLineProactiveFeatures = lazy(() => import("./pages/products/LeadLineProactiveFeatures"));
const LeadLineFeatures = lazy(() => import("./pages/products/LeadLineFeatures"));
const AIReceptionistCoreFeatures = lazy(() => import("./pages/products/AIReceptionistCoreFeatures"));
const AIReceptionistGrowthFeatures = lazy(() => import("./pages/products/AIReceptionistGrowthFeatures"));
const AIReceptionistProFeatures = lazy(() => import("./pages/products/AIReceptionistProFeatures"));
const AIReceptionistCoreIncludes = lazy(() => import("./pages/products/AIReceptionistCoreIncludes"));
const AIReceptionistGrowthIncludes = lazy(() => import("./pages/products/AIReceptionistGrowthIncludes"));
const AIReceptionistProIncludes = lazy(() => import("./pages/products/AIReceptionistProIncludes"));
const CustomAIWorkflows = lazy(() => import("./pages/products/CustomAIWorkflows"));

// Industry pages
const IndustryIndex = lazy(() => import("./pages/industries/IndustryIndex"));
const HVACContractors = lazy(() => import("./pages/industries/HVACContractors"));
const EmergencyPlumbers = lazy(() => import("./pages/industries/EmergencyPlumbers"));
const RoofingCompanies = lazy(() => import("./pages/industries/RoofingCompanies"));
const Electricians = lazy(() => import("./pages/industries/Electricians"));
const PestControl = lazy(() => import("./pages/industries/PestControl"));
const Locksmiths = lazy(() => import("./pages/industries/Locksmiths"));
const GarageDoorRepair = lazy(() => import("./pages/industries/GarageDoorRepair"));
const Landscapers = lazy(() => import("./pages/industries/Landscapers"));
const JunkRemoval = lazy(() => import("./pages/industries/JunkRemoval"));
const HouseCleaning = lazy(() => import("./pages/industries/HouseCleaning"));

// Location pages
const Sacramento = lazy(() => import("./pages/locations/Sacramento"));
const Stockton = lazy(() => import("./pages/locations/Stockton"));
const Fresno = lazy(() => import("./pages/locations/Fresno"));
const Bakersfield = lazy(() => import("./pages/locations/Bakersfield"));
const CulverCity = lazy(() => import("./pages/locations/CulverCity"));
const Henderson = lazy(() => import("./pages/locations/Henderson"));
const Monterey = lazy(() => import("./pages/locations/Monterey"));

// Resource pages
const Blog = lazy(() => import("./pages/resources/Blog"));
const BlogArticle = lazy(() => import("./pages/resources/BlogArticle"));
const Glossary = lazy(() => import("./pages/resources/Glossary"));
const CaseStudies = lazy(() => import("./pages/resources/CaseStudies"));
const Comparison = lazy(() => import("./pages/resources/Comparison"));
const HowItWorks = lazy(() => import("./pages/resources/HowItWorks"));

// Admin pages (rarely accessed)
const AdminAuth = lazy(() => import("./pages/AdminAuth"));
const AdminLeads = lazy(() => import("./pages/AdminLeads"));
const AdminEmailTemplates = lazy(() => import("./pages/AdminEmailTemplates"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Critical route - eager loaded */}
            <Route path="/" element={<Index />} />
            
            {/* Primary conversion paths */}
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/aeo-audit" element={<AEOAudit />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Product pages */}
            <Route path="/products/launchpad-360" element={<LaunchPad360 />} />
            <Route path="/products/locallift" element={<LocalLift />} />
            <Route path="/products/ai-receptionist" element={<LeadLine />} />
            <Route path="/products/ai-sales-agent" element={<LeadLineProactive />} />
            <Route path="/products/ai-sales-agent/features" element={<LeadLineProactiveFeatures />} />
            <Route path="/products/ai-receptionist/features" element={<LeadLineFeatures />} />
            <Route path="/products/ai-receptionist/core/features" element={<AIReceptionistCoreFeatures />} />
            <Route path="/products/ai-receptionist/growth/features" element={<AIReceptionistGrowthFeatures />} />
            <Route path="/products/ai-receptionist/pro/features" element={<AIReceptionistProFeatures />} />
            <Route path="/products/ai-receptionist/core/whats-included" element={<AIReceptionistCoreIncludes />} />
            <Route path="/products/ai-receptionist/growth/whats-included" element={<AIReceptionistGrowthIncludes />} />
            <Route path="/products/ai-receptionist/pro/whats-included" element={<AIReceptionistProIncludes />} />
            <Route path="/products/custom-ai-workflows" element={<Navigate to="/products/omnilogic" replace />} />
            <Route path="/products/custom-ai-workflows" element={<Navigate to="/products/omnilogic" replace />} />
            <Route path="/products/omnilogic" element={<CustomAIWorkflows />} />
            
            {/* Content/SEO pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/blog/:slug" element={<BlogArticle />} />
            <Route path="/resources/glossary" element={<Glossary />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/resources/comparison" element={<Comparison />} />
            <Route path="/resources/how-it-works" element={<HowItWorks />} />
            
            {/* Industry pages */}
            <Route path="/industries" element={<IndustryIndex />} />
            <Route path="/industries/hvac-contractors" element={<HVACContractors />} />
            <Route path="/industries/emergency-plumbers" element={<EmergencyPlumbers />} />
            <Route path="/industries/roofing-companies" element={<RoofingCompanies />} />
            <Route path="/industries/electricians" element={<Electricians />} />
            <Route path="/industries/pest-control" element={<PestControl />} />
            <Route path="/industries/locksmiths" element={<Locksmiths />} />
            <Route path="/industries/garage-door-repair" element={<GarageDoorRepair />} />
            <Route path="/industries/landscapers" element={<Landscapers />} />
            <Route path="/industries/junk-removal" element={<JunkRemoval />} />
            <Route path="/industries/house-cleaning" element={<HouseCleaning />} />
            
            {/* Location pages */}
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/sacramento" element={<Sacramento />} />
            <Route path="/locations/stockton" element={<Stockton />} />
            <Route path="/locations/fresno" element={<Fresno />} />
            <Route path="/locations/bakersfield" element={<Bakersfield />} />
            <Route path="/locations/culver-city" element={<CulverCity />} />
            <Route path="/locations/henderson" element={<Henderson />} />
            <Route path="/locations/monterey" element={<Monterey />} />
            
            {/* Legal/utility pages */}
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/trust-security" element={<TrustSecurity />} />
            
            {/* Admin pages */}
            <Route path="/admin" element={<AdminAuth />} />
            <Route path="/admin/leads" element={<AdminLeads />} />
            <Route path="/admin/templates" element={<AdminEmailTemplates />} />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;