import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Landscapers",
  slug: "landscapers",
  lossAmount: "55,000",
  lossAmountNum: 55000,
  useCases: ["Project Quote Requests", "Mowing Schedule Updates", "Irrigation Repair Calls", "Hardscape Consultations", "Seasonal Cleanup Booking", "Commercial Property Bids"],
  crm: "LMN",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Pest Control Services", slug: "pest-control" },
    { name: "House Cleaning Services", slug: "house-cleaning" },
    { name: "Junk Removal", slug: "junk-removal" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle landscaping calls?", answer: "Yes. The AI captures project details, property size, and service preferences, then schedules consultations or adds callers to your mowing route." },
    { question: "Does the AI integrate with LMN?", answer: "Yes. BrightLaunchIQ connects with LMN to create estimates, schedule jobs, and manage your crew calendar automatically." },
    { question: "How much do landscapers lose from missed calls?", answer: "$55,000 or more per year. Spring and summer bring seasonal call surges — every unanswered call is a lost season-long client." },
    { question: "Can the AI provide landscaping quotes?", answer: "Yes. The AI captures property size, desired services, and photos, then provides ballpark pricing or schedules an on-site estimate with your team." },
    { question: "Does the AI handle commercial landscaping inquiries?", answer: "Yes. The AI qualifies commercial leads by property type, scope, and budget, then routes high-value opportunities to your sales team." },
    { question: "How fast can a landscaping company go live?", answer: "Most landscaping companies are live within 48 hours. We configure seasonal workflows, integrate with LMN, and customize for your services." },
  ],
};

const Landscapers = () => <IndustryPageTemplate data={data} />;
export default Landscapers;
