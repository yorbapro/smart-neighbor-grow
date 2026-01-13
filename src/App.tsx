import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";
import PaymentSuccess from "./pages/PaymentSuccess";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Accessibility from "./pages/Accessibility";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";
import LocationsPage from "./pages/Locations";
import Sacramento from "./pages/locations/Sacramento";
import Stockton from "./pages/locations/Stockton";
import Fresno from "./pages/locations/Fresno";
import Bakersfield from "./pages/locations/Bakersfield";
import CulverCity from "./pages/locations/CulverCity";
import Henderson from "./pages/locations/Henderson";
import Monterey from "./pages/locations/Monterey";
import LaunchPad360 from "./pages/products/LaunchPad360";
import LocalLift from "./pages/products/LocalLift";
import CustomAIWorkflows from "./pages/products/CustomAIWorkflows";
import AEOAudit from "./pages/AEOAudit";
import FAQPage from "./pages/FAQ";
import AdminAuth from "./pages/AdminAuth";
import AdminLeads from "./pages/AdminLeads";
import AdminEmailTemplates from "./pages/AdminEmailTemplates";
import Blog from "./pages/resources/Blog";
import Glossary from "./pages/resources/Glossary";
import CaseStudies from "./pages/resources/CaseStudies";
import Comparison from "./pages/resources/Comparison";
import BlogArticle from "./pages/resources/BlogArticle";
import HowItWorks from "./pages/resources/HowItWorks";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products/launchpad-360" element={<LaunchPad360 />} />
          <Route path="/products/locallift" element={<LocalLift />} />
          <Route path="/products/custom-ai-workflows" element={<CustomAIWorkflows />} />
          <Route path="/aeo-audit" element={<AEOAudit />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/:slug" element={<BlogArticle />} />
          <Route path="/resources/glossary" element={<Glossary />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/comparison" element={<Comparison />} />
          <Route path="/resources/how-it-works" element={<HowItWorks />} />
          <Route path="/admin" element={<AdminAuth />} />
          <Route path="/admin/leads" element={<AdminLeads />} />
          <Route path="/admin/templates" element={<AdminEmailTemplates />} />
          <Route path="/locations/sacramento" element={<Sacramento />} />
          <Route path="/locations/stockton" element={<Stockton />} />
          <Route path="/locations/fresno" element={<Fresno />} />
          <Route path="/locations/bakersfield" element={<Bakersfield />} />
          <Route path="/locations/culver-city" element={<CulverCity />} />
          <Route path="/locations/henderson" element={<Henderson />} />
          <Route path="/locations/monterey" element={<Monterey />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
