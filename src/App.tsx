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
const CustomAIWorkflows = lazy(() => import("./pages/products/CustomAIWorkflows"));

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
            <Route path="/products/leadline" element={<LeadLine />} />
            <Route path="/products/leadline-proactive" element={<LeadLineProactive />} />
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