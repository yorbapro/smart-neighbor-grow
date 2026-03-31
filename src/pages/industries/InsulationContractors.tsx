import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Insulation Contractors",
  slug: "insulation-contractors",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Estimate Scheduling", "Material Questions", "Energy Audit Booking", "Follow-Up Calls", "Emergency Requests", "New Construction Inquiries"],
  crm: "JobNimbus",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "HVAC Contractors", slug: "hvac-contractors" },
    { name: "General Contractors", slug: "general-contractors" },
    { name: "Roofing Companies", slug: "roofing-companies" }
  ],
  whyThisIndustry: "Insulation contractors play a crucial role in energy efficiency and home comfort. Customers often call with specific needs related to energy savings, comfort issues, or mold prevention. Missing calls means losing out on valuable assessment appointments and installation projects, directly impacting your revenue and growth. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into JobNimbus — so you capture the job even when your crews are on site.",
  painPoints: [
    {
      title: "Energy-Conscious Homeowners Seek Prompt Advice",
      description: "Homeowners looking to improve insulation are often motivated by rising energy bills or discomfort. They will call multiple contractors for advice and quotes. If your phone goes unanswered, these high-value leads will quickly move to a competitor."
    },
    {
      title: "Crews are on Site, Not on the Phone",
      description: "Your insulation crews are busy in attics, crawl spaces, and walls, performing installations and assessments. They cannot effectively manage incoming calls, schedule appointments, or answer routine questions while ensuring quality work and safety."
    },
    {
      title: "Complex Inquiries Require Consistent Information",
      description: "Insulation inquiries often involve detailed questions about R-values, material types (spray foam, fiberglass, cellulose), government rebates, and installation processes. Without a consistent, intelligent system to handle these inquiries, your team spends valuable time answering repetitive questions."
    },
    {
      title: "High-Value Commercial Insulation Leads Get Lost",
      description: "Commercial insulation projects and large-scale installations are high-value and long-term. If you don't capture the lead details and schedule a consultation immediately, the business will find another insulation contractor who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden draft or a mold concern at 6 PM is a major concern. Without 24/7 coverage, these high-value emergency service calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, lead details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with JobNimbus."
    }
  ],
  dayInTheLife: `9:00 AM — A homeowner calls your business, interested in improving their home's insulation. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about their home's age, current insulation, specific concerns (e.g., drafts, high bills), and preferred timeline.

9:02 AM — Recognizing a high-priority service request, the AI immediately pre-qualifies the lead and schedules a free energy assessment with your team, integrating directly with JobNimbus. Simultaneously, it sends an SMS to the homeowner, confirming their appointment and providing a technician ETA.

1:00 PM — While your team is busy on site, the AI handles multiple routine calls: a client checking the status of an installation (answered via JobNimbus integration), a vendor looking for accounts payable (routed correctly), and a new lead for a commercial insulation project (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in JobNimbus — providing a comprehensive record for every lead and customer without any manual data entry.`,
  faqs: [
    { question: "Can the AI schedule energy audits?", answer: "Yes. The AI captures property details and schedules audits directly on your calendar." },
    { question: "Does the AI integrate with JobNimbus?", answer: "Yes. BrightLaunchIQ connects with JobNimbus to create leads, schedule assessments, and manage your project pipeline automatically." },
    { question: "Can the AI provide insulation quotes?", answer: "Yes. The AI captures home size, current insulation, and desired material, then provides ballpark pricing or schedules an in-person estimate with your team." },
    { question: "Does the AI handle after-hours insulation inquiries?", answer: "Yes. The AI answers 24/7, handling emergency calls, rebate questions, and assessment requests — even on weekends and holidays." },
    { question: "How quickly can an insulation company go live?", answer: "Most insulation companies are live within 48 hours. We configure lead qualification flows, integrate with JobNimbus, and customize for your service area." },
    { question: "What does an AI receptionist cost for insulation contractors?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and JobNimbus integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const InsulationContractors = () => <IndustryPageTemplate data={data} />;
export default InsulationContractors;
