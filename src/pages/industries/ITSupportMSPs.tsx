import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "IT Support & MSPs",
  slug: "it-support-msps",
  lossAmount: "200,000",
  lossAmountNum: 200000,
  useCases: ["Help Desk Ticket Creation", "Emergency Outage Escalation", "New Client Onboarding Inquiries", "Password Reset Routing", "Service Contract Questions", "Project Consultation Scheduling"],
  crm: "ConnectWise",
  sectorLabel: "Business & Technical",
  similarBusinesses: [
    { name: "Private Tutors", slug: "private-tutors" },
    { name: "Pet Groomers", slug: "pet-groomers" },
    { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" },
  ],
  faqs: [
    { question: "Can an AI receptionist create help desk tickets?", answer: "Yes. The AI captures issue description, severity level, and affected systems, then creates tickets in ConnectWise with proper priority routing." },
    { question: "Does the AI integrate with ConnectWise?", answer: "Yes. BrightLaunchIQ connects with ConnectWise to create service tickets, check SLA status, and route emergencies to on-call engineers." },
    { question: "How much do MSPs lose from missed calls?", answer: "$200,000 or more per year. Clients experiencing outages will call competitors if they can't reach you — and may not renew their contracts." },
    { question: "Can the AI handle after-hours emergencies?", answer: "Yes. The AI triages severity — full outage vs. single-user issue — and escalates critical incidents to your on-call team immediately." },
    { question: "Does the AI qualify new MSP prospects?", answer: "Yes. The AI captures company size, current infrastructure, pain points, and budget, then schedules discovery calls with your sales team." },
    { question: "How quickly can an MSP get started?", answer: "Most MSPs are live within 48 hours. We configure ticket categories, integrate with ConnectWise, and customize escalation workflows for your SLAs." },
  ],
};

const ITSupportMSPs = () => <IndustryPageTemplate data={data} />;
export default ITSupportMSPs;
