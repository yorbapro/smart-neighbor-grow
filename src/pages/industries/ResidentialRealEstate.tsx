import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Residential Real Estate Agents",
  slug: "residential-real-estate",
  lossAmount: "180,000",
  lossAmountNum: 180000,
  useCases: ["Buyer Inquiry Capture", "Listing Appointment Scheduling", "Open House RSVP Management", "Mortgage Pre-Qualification Routing", "Showing Request Coordination", "Relocation Lead Intake"],
  crm: "Follow Up Boss",
  sectorLabel: "Real Estate & Property",
  similarBusinesses: [
    { name: "Property Management", slug: "property-management" },
    { name: "Commercial Real Estate", slug: "commercial-real-estate" },
    { name: "Mortgage Brokers", slug: "mortgage-brokers" },
  ],
  whyThisIndustry: "Real estate agencies rely on consistent client communication and efficient scheduling to provide essential property services. When a client has a property concern or needs a routine consultation, they need a quick and professional response. Missing calls for real estate agencies means lost new client consultations, frustrated clients, and a direct impact on property health and practice revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Follow Up Boss — so you capture the client even when your team is focused on property filings.",
  painPoints: [
    {
      title: "Property Concerns Demand Instant Scheduling",
      description: "Clients seeking real estate care often do so because of sudden property changes or market deadlines. If your front desk is busy or the call goes to voicemail, they will quickly call the next agency that can see them today."
    },
    {
      title: "Staff Overload During Peak Hours",
      description: "Your front desk staff is often juggling client check-ins, property filings, and assisting the agents. They cannot effectively manage a high volume of incoming calls while providing a high-touch experience for in-office clients."
    },
    {
      title: "Inconsistent New Patient Intake and Property Filing",
      description: "Qualifying new clients and gathering their initial information, including property details, is crucial. Without a consistent, intelligent system to handle these inquiries, your team spends valuable time on repetitive data entry."
    },
    {
      title: "High-Value Property Consultations Get Lost",
      description: "Property consultations and specialized real estate services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another real estate agency who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden property concern or a market deadline at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Follow Up Boss."
    }
  ],
  dayInTheLife: `8:30 AM — A new client calls, needing an urgent consultation for a sudden property concern. The BrightLaunchIQ AI Receptionist answers instantly, gathers their contact details, property provider, and the nature of their property concern.

8:32 AM — Recognizing a high-priority service request, the AI immediately identifies an immediate opening in your schedule and books the consultation, integrating directly with Follow Up Boss. Simultaneously, it sends an SMS to the client, confirming their appointment and providing a clinic ETA.

10:30 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a client checking the status of a scheduled property filing (answered via Follow Up Boss integration), a vendor looking for accounts payable (routed correctly), and a new lead for a specialized property program (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in Follow Up Boss — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle buyer and seller inquiries?", answer: "Yes. The AI distinguishes between buyer and seller calls, captures property preferences or listing details, and routes each lead to the appropriate agent on your team." },
    { question: "Does the AI integrate with Follow Up Boss?", answer: "Yes. BrightLaunchIQ syncs directly with Follow Up Boss to create new contacts, tag lead sources, and trigger automated drip campaigns." },
    { question: "Can the AI schedule showings and listing appointments?", answer: "Yes. The AI checks agent availability and books showings or listing presentations directly into your calendar, sending confirmation details to both parties." },
    { question: "Does the AI work after hours and on weekends?", answer: "Yes. Real estate operates on buyers' schedules. The AI answers 24/7, capturing leads from evening and weekend inquiries when most agents are unavailable." },
    { question: "How quickly can a real estate team get started?", answer: "Most teams are live within 48 hours. We configure lead routing rules, integrate with Follow Up Boss, and customize the AI for your market area." },
    { question: "What does an AI receptionist cost for real estate agencies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Follow Up Boss integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const ResidentialRealEstate = () => <IndustryPageTemplate data={data} />;
export default ResidentialRealEstate;
