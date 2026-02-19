import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Estate Planning Attorneys",
  slug: "estate-planning-attorneys",
  lossAmount: "160,000",
  lossAmountNum: 160000,
  useCases: ["Trust Consultations", "Document Preparation Intake", "Probate Inquiries", "Power of Attorney FAQ", "Will Updates Scheduling", "Elder Law Referrals"],
  crm: "WealthCounsel",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Family Law Attorneys", slug: "family-law-attorneys" },
    { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" },
    { name: "Personal Injury Lawyers", slug: "personal-injury-lawyers" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle estate planning intake calls?", answer: "Yes. The AI captures asset details, family structure, and planning goals — then schedules consultations with the appropriate attorney for trusts, wills, or probate matters." },
    { question: "Does the AI integrate with WealthCounsel?", answer: "Yes. BrightLaunchIQ connects with WealthCounsel to schedule consultations, manage document preparation workflows, and update client records automatically." },
    { question: "How much do estate planning firms lose from missed calls?", answer: "$160,000 or more per year. Estate planning clients often call during life-changing moments — a missed call means they'll find another attorney before calling back." },
    { question: "Can the AI answer probate questions?", answer: "Yes. The AI provides information about your probate services, timelines, required documents, and initial consultation process based on your configured practice details." },
    { question: "Does the AI handle trust consultation scheduling?", answer: "Yes. The AI qualifies callers, gathers preliminary asset information, and schedules trust consultations directly into your calendar with all relevant details attached." },
    { question: "How quickly can an estate planning firm get started?", answer: "Most estate planning firms are live within 48 hours. We configure intake workflows for trusts, wills, and probate, integrate with WealthCounsel, and customize screening questions." },
  ],
};

const EstatePlanningAttorneys = () => <IndustryPageTemplate data={data} />;
export default EstatePlanningAttorneys;
