import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Locksmiths",
  slug: "locksmiths",
  lossAmount: "45,000",
  lossAmountNum: 45000,
  useCases: ["Emergency Lockout Dispatch", "Commercial Re-key Inquiries", "Auto Key Replacement", "Access Control Consultations", "Safe Installation Leads", "After-Hours Dispatch"],
  crm: "Workiz",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Garage Door Repair", slug: "garage-door-repair" },
    { name: "Electricians", slug: "electricians" },
    { name: "Emergency Plumbers", slug: "emergency-plumbers" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle emergency lockout calls?", answer: "Yes. The AI captures the caller's location, lock type, and urgency level, then dispatches your nearest available locksmith immediately — 24/7." },
    { question: "Does the AI integrate with Workiz?", answer: "Yes. BrightLaunchIQ connects with Workiz to create dispatch tickets, schedule appointments, and track job statuses in real time." },
    { question: "How much do locksmiths lose from missed calls?", answer: "$45,000 or more per year. Lockout customers need immediate help and will call the next locksmith within seconds if you don't answer." },
    { question: "Can the AI handle commercial re-key inquiries?", answer: "Yes. The AI captures property details, number of locks, and scheduling preferences for commercial re-key projects, then routes the lead to your team." },
    { question: "Does the AI handle auto key replacement calls?", answer: "Yes. The AI collects vehicle make, model, year, and key type information, then schedules your mobile locksmith for on-site service." },
    { question: "How fast can a locksmith company go live?", answer: "Most locksmith companies are live within 48 hours. We configure emergency dispatch workflows, integrate with Workiz, and customize for your service area." },
  ],
};

const Locksmiths = () => <IndustryPageTemplate data={data} />;
export default Locksmiths;
