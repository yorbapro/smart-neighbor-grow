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
  whyThisIndustry: "Landscaping businesses thrive on consistent client communication, from initial inquiries about new projects to scheduling routine maintenance. Missing calls can mean losing out on lucrative design-build contracts, recurring lawn care agreements, and immediate service requests, directly impacting your growth and client satisfaction. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into LMN — so you capture the job even when your crews are on site.",
  painPoints: [
    {
      title: "New Project Inquiries Go Unanswered",
      description: "Potential clients often call multiple landscaping companies when planning a new project. If your phone goes to voicemail or isn't answered promptly, they will move on to the next provider."
    },
    {
      title: "Crews are on Site, Not on the Phone",
      description: "Your landscaping crews are busy on job sites, operating machinery, and performing physical labor. They cannot effectively manage incoming calls, schedule appointments, or answer routine questions while ensuring quality work and safety."
    },
    {
      title: "Inconsistent Scheduling and Follow-ups",
      description: "Managing a diverse schedule of installations, maintenance, and consultations can be complex. Without an intelligent system to handle inbound calls, your office staff spends valuable time on administrative tasks."
    },
    {
      title: "High-Value Design-Build Leads Get Lost",
      description: "Design-build projects and commercial property bids are high-value and long-term. If you don't capture the lead details and schedule a consultation immediately, the client will find another landscaper who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "An irrigation system leak at 6 PM is a major concern. Without 24/7 coverage, these high-value emergency repair jobs go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, lead details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with LMN."
    }
  ],
  dayInTheLife: `9:00 AM — A potential client calls your business, interested in a complete backyard redesign. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about their project vision, budget, and preferred timeline. It then schedules a consultation with your design team, integrating directly with LMN.

11:00 AM — Several calls come in simultaneously during a busy spring morning. The AI handles them all: one is a request for a quote on weekly lawn maintenance (qualified and routed to sales), another is a client confirming their irrigation system repair (routed to customer service), and a third is a general inquiry about seasonal planting (answered directly by the AI).

3:00 PM — A client calls to reschedule a lawn care appointment. The AI accesses their existing schedule, finds an alternative slot, and confirms the change via SMS, all without human intervention. The client never waited on hold.

Throughout the day, every call is transcribed, summarized, and logged in LMN — providing a comprehensive record for every client and project without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle landscaping calls?", answer: "Yes. The AI captures project details, property size, and service preferences, then schedules consultations or adds callers to your mowing route." },
    { question: "Does the AI integrate with LMN?", answer: "Yes. BrightLaunchIQ connects with LMN to create estimates, schedule jobs, and manage your crew calendar automatically." },
    { question: "Can the AI provide landscaping quotes?", answer: "Yes. The AI captures property size, desired services, and photos, then provides ballpark pricing or schedules an on-site estimate with your team." },
    { question: "Does the AI handle commercial landscaping inquiries?", answer: "Yes. The AI qualifies commercial leads by property type, scope, and budget, then routes high-value opportunities to your sales team." },
    { question: "How fast can a landscaping company go live?", answer: "Most landscaping companies are live within 48 hours. We configure seasonal workflows, integrate with LMN, and customize for your services." },
    { question: "What does an AI receptionist cost for landscaping companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and LMN integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const Landscapers = () => <IndustryPageTemplate data={data} />;
export default Landscapers;
