import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Property Management Companies",
  slug: "property-management",
  lossAmount: "150,000",
  lossAmountNum: 150000,
  useCases: ["Maintenance Request Intake", "Tenant Inquiry Routing", "Lease Renewal Reminders", "Vacancy Listing Inquiries", "Emergency After-Hours Dispatch", "Rent Payment Support"],
  crm: "AppFolio",
  sectorLabel: "Real Estate & Property",
  similarBusinesses: [
    { name: "Residential Real Estate", slug: "residential-real-estate" },
    { name: "Commercial Real Estate", slug: "commercial-real-estate" },
    { name: "Home Inspectors", slug: "home-inspectors" },
  ],
  whyThisIndustry: "Property management companies rely on consistent client communication and efficient scheduling to provide essential property services. When a tenant has a maintenance concern or needs a routine consultation, they need a quick and professional response. Missing calls for property management companies means lost new tenant consultations, frustrated tenants, and a direct impact on property health and practice revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into AppFolio — so you capture the tenant even when your team is focused on maintenance filings.",
  painPoints: [
    {
      title: "Maintenance Concerns Demand Instant Scheduling",
      description: "Tenants seeking property care often do so because of sudden maintenance issues or lease deadlines. If your front desk is busy or the call goes to voicemail, they will quickly call the next company that can see them today."
    },
    {
      title: "Staff Overload During Peak Hours",
      description: "Your front desk staff is often juggling tenant check-ins, maintenance filings, and assisting the managers. They cannot effectively manage a high volume of incoming calls while providing a high-touch experience for in-office tenants."
    },
    {
      title: "Inconsistent New Tenant Intake and Maintenance Filing",
      description: "Qualifying new tenants and gathering their initial information, including maintenance details, is crucial. Without a consistent, intelligent system to handle these inquiries, your team spends valuable time on repetitive data entry."
    },
    {
      title: "High-Value Property Consultations Get Lost",
      description: "Property consultations and specialized property management services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the tenant will find another property management company who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden maintenance concern or a lease deadline at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, tenant details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with AppFolio."
    }
  ],
  dayInTheLife: `8:30 AM — A new tenant calls, needing an urgent consultation for a sudden maintenance concern. The BrightLaunchIQ AI Receptionist answers instantly, gathers their contact details, maintenance provider, and the nature of their maintenance concern.

8:32 AM — Recognizing a high-priority service request, the AI immediately identifies an immediate opening in your schedule and books the consultation, integrating directly with AppFolio. Simultaneously, it sends an SMS to the tenant, confirming their appointment and providing a clinic ETA.

10:30 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a client checking the status of a scheduled maintenance filing (answered via AppFolio integration), a vendor looking for accounts payable (routed correctly), and a new lead for a specialized property program (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in AppFolio — providing a comprehensive record for every tenant and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle tenant maintenance requests?", answer: "Yes. The AI captures issue details, unit numbers, and urgency level, then creates work orders in your property management software automatically." },
    { question: "Does the AI integrate with AppFolio?", answer: "Yes. BrightLaunchIQ connects with AppFolio to log maintenance tickets, update tenant records, and manage vacancy inquiries directly." },
    { question: "Can the AI handle after-hours emergencies?", answer: "Yes. The AI triages emergency calls — burst pipes, lockouts, fires — and immediately dispatches your on-call maintenance team while logging the incident." },
    { question: "Does the AI answer prospective tenant questions?", answer: "Yes. The AI provides unit availability, pricing, pet policies, and amenity details, then schedules property tours for qualified prospects." },
    { question: "How quickly can a property management company get started?", answer: "Most companies launch within 48 hours. We configure emergency triage protocols, integrate with AppFolio, and customize for your portfolio." },
    { question: "What does an AI receptionist cost for property management companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and AppFolio integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const PropertyManagement = () => <IndustryPageTemplate data={data} />;
export default PropertyManagement;
