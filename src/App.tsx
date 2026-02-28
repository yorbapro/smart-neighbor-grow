import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Legacy redirect helper
const BlogSlugRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/learning-center/${slug}`} replace />;
};

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
import GetStarted from "./pages/GetStarted";
import PaymentSuccess from "./pages/PaymentSuccess";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Accessibility from "./pages/Accessibility";
import TrustSecurity from "./pages/TrustSecurity";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";
import LocationsPage from "./pages/Locations";
import FAQPage from "./pages/FAQ";
import AEOAudit from "./pages/AEOAudit";
import Onboarding from "./pages/Onboarding";
import AIReceptionistAssessment from "./pages/AIReceptionistAssessment";

// Product pages
import LaunchPad360 from "./pages/products/LaunchPad360";
import LocalLift from "./pages/products/LocalLift";
import AIReceptionist from "./pages/products/AIReceptionist";
import AISalesAgent from "./pages/products/AISalesAgent";
import AISalesAgentFeatures from "./pages/products/AISalesAgentFeatures";
import AIReceptionistFeatures from "./pages/products/AIReceptionistFeatures";
import AIReceptionistCoreFeatures from "./pages/products/AIReceptionistCoreFeatures";
import AIReceptionistGrowthFeatures from "./pages/products/AIReceptionistGrowthFeatures";
import AIReceptionistProFeatures from "./pages/products/AIReceptionistProFeatures";
import AIReceptionistCoreIncludes from "./pages/products/AIReceptionistCoreIncludes";
import AIReceptionistGrowthIncludes from "./pages/products/AIReceptionistGrowthIncludes";
import AIReceptionistProIncludes from "./pages/products/AIReceptionistProIncludes";
import CustomAIWorkflows from "./pages/products/CustomAIWorkflows";
import AIReceptionistFeatureLibrary from "./pages/products/AIReceptionistFeatureLibrary";
import AIReceptionistHowItWorks from "./pages/products/AIReceptionistHowItWorks";

// Industry pages
import IndustryIndex from "./pages/industries/IndustryIndex";
import HVACContractors from "./pages/industries/HVACContractors";
import EmergencyPlumbers from "./pages/industries/EmergencyPlumbers";
import RoofingCompanies from "./pages/industries/RoofingCompanies";
import Electricians from "./pages/industries/Electricians";
import PestControl from "./pages/industries/PestControl";
import Locksmiths from "./pages/industries/Locksmiths";
import GarageDoorRepair from "./pages/industries/GarageDoorRepair";
import Landscapers from "./pages/industries/Landscapers";
import JunkRemoval from "./pages/industries/JunkRemoval";
import HouseCleaning from "./pages/industries/HouseCleaning";
import DentalClinics from "./pages/industries/DentalClinics";
import Chiropractors from "./pages/industries/Chiropractors";
import VeterinaryClinics from "./pages/industries/VeterinaryClinics";
import PhysicalTherapy from "./pages/industries/PhysicalTherapy";
import MentalHealthCounselors from "./pages/industries/MentalHealthCounselors";
import MedicalSpas from "./pages/industries/MedicalSpas";
import Optometrists from "./pages/industries/Optometrists";
import Dermatologists from "./pages/industries/Dermatologists";
import Orthodontists from "./pages/industries/Orthodontists";
import HolisticHealth from "./pages/industries/HolisticHealth";
import PersonalInjuryLawyers from "./pages/industries/PersonalInjuryLawyers";
import FamilyLawAttorneys from "./pages/industries/FamilyLawAttorneys";
import CriminalDefenseLawyers from "./pages/industries/CriminalDefenseLawyers";
import EstatePlanningAttorneys from "./pages/industries/EstatePlanningAttorneys";
import ImmigrationConsultants from "./pages/industries/ImmigrationConsultants";
import CPAsTaxProfessionals from "./pages/industries/CPAsTaxProfessionals";
import NotaryPublics from "./pages/industries/NotaryPublics";
import PrivateInvestigators from "./pages/industries/PrivateInvestigators";
import ResidentialRealEstate from "./pages/industries/ResidentialRealEstate";
import PropertyManagement from "./pages/industries/PropertyManagement";
import CommercialRealEstate from "./pages/industries/CommercialRealEstate";
import MortgageBrokers from "./pages/industries/MortgageBrokers";
import HomeInspectors from "./pages/industries/HomeInspectors";
import AutoRepairShops from "./pages/industries/AutoRepairShops";
import MobileDetailers from "./pages/industries/MobileDetailers";
import TowingCompanies from "./pages/industries/TowingCompanies";
import CarRentalAgencies from "./pages/industries/CarRentalAgencies";
import DrivingSchools from "./pages/industries/DrivingSchools";
import HairSalons from "./pages/industries/HairSalons";
import Barbershops from "./pages/industries/Barbershops";
import DaySpas from "./pages/industries/DaySpas";
import TattooStudios from "./pages/industries/TattooStudios";
import YogaPilatesStudios from "./pages/industries/YogaPilatesStudios";
import CateringServices from "./pages/industries/CateringServices";
import EventVenues from "./pages/industries/EventVenues";
import WeddingPlanners from "./pages/industries/WeddingPlanners";
import BoutiqueHotels from "./pages/industries/BoutiqueHotels";
import ITSupportMSPs from "./pages/industries/ITSupportMSPs";
import PetGroomers from "./pages/industries/PetGroomers";
import PrivateTutors from "./pages/industries/PrivateTutors";
import SolarInstallers from "./pages/industries/SolarInstallers";
import InsulationContractors from "./pages/industries/InsulationContractors";
import Painters from "./pages/industries/Painters";
import FenceCompanies from "./pages/industries/FenceCompanies";
import PoolServiceCompanies from "./pages/industries/PoolServiceCompanies";
import ApplianceRepair from "./pages/industries/ApplianceRepair";
import GeneralContractors from "./pages/industries/GeneralContractors";
import FlooringCompanies from "./pages/industries/FlooringCompanies";
import WindowAndDoorInstallers from "./pages/industries/WindowAndDoorInstallers";
import ConcreteContractors from "./pages/industries/ConcreteContractors";
import SepticServices from "./pages/industries/SepticServices";
import TreeServiceCompanies from "./pages/industries/TreeServiceCompanies";
import UrgentCareClinics from "./pages/industries/UrgentCareClinics";
import Pediatricians from "./pages/industries/Pediatricians";
import Podiatrists from "./pages/industries/Podiatrists";
import HearingAidSpecialists from "./pages/industries/HearingAidSpecialists";
import AcupunctureClinics from "./pages/industries/AcupunctureClinics";
import HomeHealthCareAgencies from "./pages/industries/HomeHealthCareAgencies";
import BankruptcyAttorneys from "./pages/industries/BankruptcyAttorneys";
import WorkersCompensationLawyers from "./pages/industries/WorkersCompensationLawyers";
import BusinessConsultants from "./pages/industries/BusinessConsultants";
import InsuranceAgents from "./pages/industries/InsuranceAgents";
import FinancialAdvisors from "./pages/industries/FinancialAdvisors";
import Bookkeepers from "./pages/industries/Bookkeepers";
import TitleCompanies from "./pages/industries/TitleCompanies";
import Appraisers from "./pages/industries/Appraisers";
import MovingCompanies from "./pages/industries/MovingCompanies";
import StorageFacilities from "./pages/industries/StorageFacilities";
import TireShops from "./pages/industries/TireShops";
import AutoBodyShops from "./pages/industries/AutoBodyShops";
import OilChangeServices from "./pages/industries/OilChangeServices";
import MotorcycleDealers from "./pages/industries/MotorcycleDealers";
import RvDealersAndService from "./pages/industries/RvDealersAndService";
import NailSalons from "./pages/industries/NailSalons";
import LashAndBrowStudios from "./pages/industries/LashAndBrowStudios";
import PersonalTrainers from "./pages/industries/PersonalTrainers";
import MartialArtsStudios from "./pages/industries/MartialArtsStudios";
import DanceStudios from "./pages/industries/DanceStudios";
import PhotographyStudios from "./pages/industries/PhotographyStudios";
import Restaurants from "./pages/industries/Restaurants";
import FoodTrucks from "./pages/industries/FoodTrucks";
import BedAndBreakfasts from "./pages/industries/BedAndBreakfasts";
import TravelAgencies from "./pages/industries/TravelAgencies";
import PartyRentalCompanies from "./pages/industries/PartyRentalCompanies";
import StaffingAgencies from "./pages/industries/StaffingAgencies";
import PrintShops from "./pages/industries/PrintShops";
import CoworkingSpaces from "./pages/industries/CoworkingSpaces";
import MusicSchools from "./pages/industries/MusicSchools";
import LanguageSchools from "./pages/industries/LanguageSchools";
import TestPrepCenters from "./pages/industries/TestPrepCenters";

// Location pages
import Sacramento from "./pages/locations/Sacramento";
import Stockton from "./pages/locations/Stockton";
import Fresno from "./pages/locations/Fresno";
import Bakersfield from "./pages/locations/Bakersfield";
import CulverCity from "./pages/locations/CulverCity";
import Henderson from "./pages/locations/Henderson";
import Monterey from "./pages/locations/Monterey";

// Resource pages
import Blog from "./pages/resources/Blog";
import BlogArticle from "./pages/resources/BlogArticle";
import ForBusiness from "./pages/learning-center/ForBusiness";
import ForEveryone from "./pages/learning-center/ForEveryone";
import LearningCenterNews from "./pages/learning-center/News";
import Glossary from "./pages/resources/Glossary";
import CaseStudies from "./pages/resources/CaseStudies";
import WhitepaperPage from "./pages/WhitepaperPage";
import Comparison from "./pages/resources/Comparison";
import HowItWorks from "./pages/resources/HowItWorks";
import AIReceptionistGuide from "./pages/learning-center/AIReceptionistGuide";
import AIReceptionistPricing from "./pages/learning-center/AIReceptionistPricing";
import SignsYouNeedAIReceptionist from "./pages/learning-center/SignsYouNeedAIReceptionist";
import CalculateAIReceptionistROI from "./pages/learning-center/CalculateAIReceptionistROI";
import PrecisionHVACSuccessStory from "./pages/case-studies/PrecisionHVACSuccessStory";
import AIvsHumanReceptionist from "./pages/learning-center/AIvsHumanReceptionist";
import AIvsAnsweringService from "./pages/learning-center/AIvsAnsweringService";
import AIvsVirtualReceptionist from "./pages/learning-center/AIvsVirtualReceptionist";
import AIReceptionistBuyersGuide from "./pages/learning-center/AIReceptionistBuyersGuide";
import WhatIsAIReceptionist from "./pages/learning-center/WhatIsAIReceptionist";
import HowAIReceptionistsWork from "./pages/learning-center/HowAIReceptionistsWork";
import AIReceptionistBenefits from "./pages/learning-center/AIReceptionistBenefits";
import AIVoiceQuality from "./pages/learning-center/AIVoiceQuality";
import AIReceptionistSetupGuide from "./pages/learning-center/AIReceptionistSetupGuide";

// Admin pages (rarely accessed)
import AdminAuth from "./pages/AdminAuth";
import AdminLeads from "./pages/AdminLeads";
import AdminEmailTemplates from "./pages/AdminEmailTemplates";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

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
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Critical route - eager loaded */}
            <Route path="/" element={<Index />} />
            
            {/* Primary conversion paths */}
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/aeo-audit" element={<AEOAudit />} />
            <Route path="/free-ai-audit" element={<AEOAudit />} />
            <Route path="/how-it-works" element={<AIReceptionistHowItWorks />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-receptionist-readiness-assessment" element={<AIReceptionistAssessment />} />
            
            {/* Product pages */}
            <Route path="/launchpad-360" element={<LaunchPad360 />} />
            <Route path="/locallift" element={<LocalLift />} />
            <Route path="/ai-receptionist" element={<AIReceptionist />} />
            <Route path="/ai-sales-agent" element={<AISalesAgent />} />
            <Route path="/ai-sales-agent/features" element={<AISalesAgentFeatures />} />
            <Route path="/ai-receptionist/features" element={<AIReceptionistFeatures />} />
            <Route path="/ai-receptionist/core/features" element={<AIReceptionistCoreFeatures />} />
            <Route path="/ai-receptionist/growth/features" element={<AIReceptionistGrowthFeatures />} />
            <Route path="/ai-receptionist/pro/features" element={<AIReceptionistProFeatures />} />
            <Route path="/ai-receptionist/core/whats-included" element={<AIReceptionistCoreIncludes />} />
            <Route path="/ai-receptionist/growth/whats-included" element={<AIReceptionistGrowthIncludes />} />
            <Route path="/ai-receptionist/pro/whats-included" element={<AIReceptionistProIncludes />} />
            <Route path="/custom-ai-workflows" element={<Navigate to="/omnilogic" replace />} />
            <Route path="/omnilogic" element={<CustomAIWorkflows />} />
            <Route path="/ai-receptionist/features/complete-library" element={<AIReceptionistFeatureLibrary />} />
            <Route path="/ai-receptionist/how-it-works" element={<AIReceptionistHowItWorks />} />

            {/* Content/SEO pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/learning-center" element={<Blog />} />
            <Route path="/learning-center/for-business" element={<ForBusiness />} />
            <Route path="/learning-center/for-everyone" element={<ForEveryone />} />
            <Route path="/learning-center/news" element={<LearningCenterNews />} />
            <Route path="/learning-center/ai-receptionist-guide" element={<AIReceptionistGuide />} />
            <Route path="/learning-center/business-growth/ai-receptionist-pricing" element={<AIReceptionistPricing />} />
            <Route path="/learning-center/business-growth/signs-you-need-ai-receptionist" element={<SignsYouNeedAIReceptionist />} />
            <Route path="/learning-center/business-growth/calculate-ai-receptionist-roi" element={<CalculateAIReceptionistROI />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<WhitepaperPage />} />
            <Route path="/case-studies/precision-hvac-success-story" element={<PrecisionHVACSuccessStory />} />
            <Route path="/learning-center/ai-vs-human-receptionist" element={<AIvsHumanReceptionist />} />
            <Route path="/learning-center/ai-vs-answering-service" element={<AIvsAnsweringService />} />
            <Route path="/learning-center/ai-vs-virtual-receptionist" element={<AIvsVirtualReceptionist />} />
            <Route path="/learning-center/ai-receptionist-buyers-guide" element={<AIReceptionistBuyersGuide />} />
            <Route path="/learning-center/what-is-ai-receptionist" element={<WhatIsAIReceptionist />} />
            <Route path="/learning-center/how-ai-receptionists-work" element={<HowAIReceptionistsWork />} />
            <Route path="/learning-center/ai-receptionist-benefits" element={<AIReceptionistBenefits />} />
            <Route path="/learning-center/ai-voice-quality" element={<AIVoiceQuality />} />
            <Route path="/learning-center/ai-receptionist-setup-guide" element={<AIReceptionistSetupGuide />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/comparison" element={<Comparison />} />
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
            <Route path="/industries/dental-clinics" element={<DentalClinics />} />
            <Route path="/industries/chiropractors" element={<Chiropractors />} />
            <Route path="/industries/veterinary-clinics" element={<VeterinaryClinics />} />
            <Route path="/industries/physical-therapy" element={<PhysicalTherapy />} />
            <Route path="/industries/mental-health-counselors" element={<MentalHealthCounselors />} />
            <Route path="/industries/medical-spas" element={<MedicalSpas />} />
            <Route path="/industries/optometrists" element={<Optometrists />} />
            <Route path="/industries/dermatologists" element={<Dermatologists />} />
            <Route path="/industries/orthodontists" element={<Orthodontists />} />
            <Route path="/industries/holistic-health" element={<HolisticHealth />} />
            <Route path="/industries/personal-injury-lawyers" element={<PersonalInjuryLawyers />} />
            <Route path="/industries/family-law-attorneys" element={<FamilyLawAttorneys />} />
            <Route path="/industries/criminal-defense-lawyers" element={<CriminalDefenseLawyers />} />
            <Route path="/industries/estate-planning-attorneys" element={<EstatePlanningAttorneys />} />
            <Route path="/industries/immigration-consultants" element={<ImmigrationConsultants />} />
            <Route path="/industries/cpas-tax-professionals" element={<CPAsTaxProfessionals />} />
            <Route path="/industries/notary-publics" element={<NotaryPublics />} />
            <Route path="/industries/private-investigators" element={<PrivateInvestigators />} />
            <Route path="/industries/residential-real-estate" element={<ResidentialRealEstate />} />
            <Route path="/industries/property-management" element={<PropertyManagement />} />
            <Route path="/industries/commercial-real-estate" element={<CommercialRealEstate />} />
            <Route path="/industries/mortgage-brokers" element={<MortgageBrokers />} />
            <Route path="/industries/home-inspectors" element={<HomeInspectors />} />
            <Route path="/industries/auto-repair-shops" element={<AutoRepairShops />} />
            <Route path="/industries/mobile-detailers" element={<MobileDetailers />} />
            <Route path="/industries/towing-companies" element={<TowingCompanies />} />
            <Route path="/industries/car-rental-agencies" element={<CarRentalAgencies />} />
            <Route path="/industries/driving-schools" element={<DrivingSchools />} />
            <Route path="/industries/hair-salons" element={<HairSalons />} />
            <Route path="/industries/barbershops" element={<Barbershops />} />
            <Route path="/industries/day-spas" element={<DaySpas />} />
            <Route path="/industries/tattoo-studios" element={<TattooStudios />} />
            <Route path="/industries/yoga-pilates-studios" element={<YogaPilatesStudios />} />
            <Route path="/industries/catering-services" element={<CateringServices />} />
            <Route path="/industries/event-venues" element={<EventVenues />} />
            <Route path="/industries/wedding-planners" element={<WeddingPlanners />} />
            <Route path="/industries/boutique-hotels" element={<BoutiqueHotels />} />
            <Route path="/industries/it-support-msps" element={<ITSupportMSPs />} />
            <Route path="/industries/pet-groomers" element={<PetGroomers />} />
            <Route path="/industries/private-tutors" element={<PrivateTutors />} />
            <Route path="/industries/solar-installers" element={<SolarInstallers />} />
            <Route path="/industries/insulation-contractors" element={<InsulationContractors />} />
            <Route path="/industries/painters" element={<Painters />} />
            <Route path="/industries/fence-companies" element={<FenceCompanies />} />
            <Route path="/industries/pool-service-companies" element={<PoolServiceCompanies />} />
            <Route path="/industries/appliance-repair" element={<ApplianceRepair />} />
            <Route path="/industries/general-contractors" element={<GeneralContractors />} />
            <Route path="/industries/flooring-companies" element={<FlooringCompanies />} />
            <Route path="/industries/window-door-installers" element={<WindowAndDoorInstallers />} />
            <Route path="/industries/concrete-contractors" element={<ConcreteContractors />} />
            <Route path="/industries/septic-services" element={<SepticServices />} />
            <Route path="/industries/tree-service-companies" element={<TreeServiceCompanies />} />
            <Route path="/industries/urgent-care-clinics" element={<UrgentCareClinics />} />
            <Route path="/industries/pediatricians" element={<Pediatricians />} />
            <Route path="/industries/podiatrists" element={<Podiatrists />} />
            <Route path="/industries/hearing-aid-specialists" element={<HearingAidSpecialists />} />
            <Route path="/industries/acupuncture-clinics" element={<AcupunctureClinics />} />
            <Route path="/industries/home-health-care-agencies" element={<HomeHealthCareAgencies />} />
            <Route path="/industries/bankruptcy-attorneys" element={<BankruptcyAttorneys />} />
            <Route path="/industries/workers-compensation-lawyers" element={<WorkersCompensationLawyers />} />
            <Route path="/industries/business-consultants" element={<BusinessConsultants />} />
            <Route path="/industries/insurance-agents" element={<InsuranceAgents />} />
            <Route path="/industries/financial-advisors" element={<FinancialAdvisors />} />
            <Route path="/industries/bookkeepers" element={<Bookkeepers />} />
            <Route path="/industries/title-companies" element={<TitleCompanies />} />
            <Route path="/industries/appraisers" element={<Appraisers />} />
            <Route path="/industries/moving-companies" element={<MovingCompanies />} />
            <Route path="/industries/storage-facilities" element={<StorageFacilities />} />
            <Route path="/industries/tire-shops" element={<TireShops />} />
            <Route path="/industries/auto-body-shops" element={<AutoBodyShops />} />
            <Route path="/industries/oil-change-services" element={<OilChangeServices />} />
            <Route path="/industries/motorcycle-dealers" element={<MotorcycleDealers />} />
            <Route path="/industries/rv-dealers-service" element={<RvDealersAndService />} />
            <Route path="/industries/nail-salons" element={<NailSalons />} />
            <Route path="/industries/lash-brow-studios" element={<LashAndBrowStudios />} />
            <Route path="/industries/personal-trainers" element={<PersonalTrainers />} />
            <Route path="/industries/martial-arts-studios" element={<MartialArtsStudios />} />
            <Route path="/industries/dance-studios" element={<DanceStudios />} />
            <Route path="/industries/photography-studios" element={<PhotographyStudios />} />
            <Route path="/industries/restaurants" element={<Restaurants />} />
            <Route path="/industries/food-trucks" element={<FoodTrucks />} />
            <Route path="/industries/bed-breakfasts" element={<BedAndBreakfasts />} />
            <Route path="/industries/travel-agencies" element={<TravelAgencies />} />
            <Route path="/industries/party-rental-companies" element={<PartyRentalCompanies />} />
            <Route path="/industries/staffing-agencies" element={<StaffingAgencies />} />
            <Route path="/industries/print-shops" element={<PrintShops />} />
            <Route path="/industries/coworking-spaces" element={<CoworkingSpaces />} />
            <Route path="/industries/music-schools" element={<MusicSchools />} />
            <Route path="/industries/language-schools" element={<LanguageSchools />} />
            <Route path="/industries/test-prep-centers" element={<TestPrepCenters />} />

            {/* Location pages */}
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/sacramento" element={<Sacramento />} />
            <Route path="/locations/stockton" element={<Stockton />} />
            <Route path="/locations/fresno" element={<Fresno />} />
            <Route path="/locations/bakersfield" element={<Bakersfield />} />
            <Route path="/locations/culver-city" element={<CulverCity />} />
            <Route path="/locations/henderson" element={<Henderson />} />
            <Route path="/locations/monterey" element={<Monterey />} />

            {/* Admin pages (rarely accessed) */}
            <Route path="/admin/auth" element={<AdminAuth />} />
            <Route path="/admin/leads" element={<AdminLeads />} />
            <Route path="/admin/email-templates" element={<AdminEmailTemplates />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Payment success page */}
            <Route path="/payment-success" element={<PaymentSuccess />} />

            {/* Legal pages */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/trust-security" element={<TrustSecurity />} />

            {/* Blog slug redirect for legacy links */}
            <Route path="/blog/:slug" element={<BlogSlugRedirect />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
