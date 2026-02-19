import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "CPAs & Tax Professionals",
  slug: "cpas-tax-professionals",
  lossAmount: "110,000",
  lossAmountNum: 110000,
  useCases: ["Tax Appointment Scheduling", "Document Drop-off FAQ", "Pricing Inquiries", "Extension Filing Reminders", "New Client Intake", "Seasonal Overflow Handling"],
  crm: "TaxDome",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Estate Planning Attorneys", slug: "estate-planning-attorneys" },
    { name: "Notary Publics", slug: "notary-publics" },
    { name: "Private Investigators", slug: "private-investigators" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle CPA intake calls?", answer: "Yes. The AI captures business type, revenue range, service needs, and urgency — then schedules appointments with the appropriate tax professional on your team." },
    { question: "Does the AI integrate with TaxDome?", answer: "Yes. BrightLaunchIQ connects with TaxDome to schedule appointments, manage document requests, and update client records automatically." },
    { question: "How much do CPA firms lose from missed calls?", answer: "$110,000 or more per year. During tax season, call volume spikes 300-400% — every missed call is a client who signs with a competitor." },
    { question: "Can the AI handle seasonal call overflow?", answer: "Yes. The AI scales instantly during tax season, handling unlimited concurrent calls so no prospect ever reaches voicemail during your busiest months." },
    { question: "Does the AI answer document drop-off questions?", answer: "Yes. The AI provides your office hours, document requirements, accepted formats, and drop-off procedures based on your configured practice information." },
    { question: "How quickly can a CPA firm get started?", answer: "Most CPA firms are live within 48 hours. We configure intake workflows, integrate with TaxDome, and customize seasonal overflow handling for tax season." },
  ],
};

const CPAsTaxProfessionals = () => <IndustryPageTemplate data={data} />;
export default CPAsTaxProfessionals;
