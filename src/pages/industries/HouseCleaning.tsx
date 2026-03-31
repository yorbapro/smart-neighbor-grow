import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "House Cleaning Services",
  slug: "house-cleaning",
  lossAmount: "35,000",
  lossAmountNum: 35000,
  useCases: ["Recurring Booking", "Deep-Clean Quotes", "Rescheduling Management", "Move-In/Move-Out Cleaning", "Same-Day Service Requests", "Commercial Cleaning Bids"],
  crm: "ZenMaid",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Junk Removal", slug: "junk-removal" },
    { name: "Landscapers", slug: "landscapers" },
    { name: "Pest Control Services", slug: "pest-control" },
  ],
  whyThisIndustry: "House cleaning services rely on consistent scheduling and excellent customer service to build a loyal client base. When potential clients call, they are often looking for detailed quotes, availability, and specific service offerings. Missing calls means losing out on new recurring clients and one-time deep cleans, directly impacting your revenue and growth. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into ZenMaid — so you capture the job even when your crews are on site.",
  painPoints: [
    {
      title: "New Client Inquiries Go Unanswered",
      description: "Potential clients often call multiple cleaning services to compare prices and availability. If your phone goes to voicemail or isn't answered promptly, they will move on to the next provider."
    },
    {
      title: "Crews are on Site, Not on the Phone",
      description: "Your cleaning crews are busy in clients' homes, focused on delivering high-quality service. They cannot effectively manage incoming calls, schedule appointments, or answer routine questions while actively working."
    },
    {
      title: "Inconsistent Scheduling and Follow-ups",
      description: "Managing a dynamic schedule of recurring cleanings, deep cleans, and special requests can be complex. Without an intelligent system to handle inbound calls, your office staff spends valuable time on administrative tasks."
    },
    {
      title: "High-Value Recurring Contracts Get Lost",
      description: "Recurring weekly or bi-weekly cleaning contracts are high-value and long-term. If you don't capture the lead details and schedule a consultation immediately, the client will find another cleaning service who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A move-out cleaning request at 6 PM for the next morning is a major concern. Without 24/7 coverage, these high-value emergency service calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, lead details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with ZenMaid."
    }
  ],
  dayInTheLife: `9:00 AM — A potential client calls your business, interested in a recurring weekly cleaning service. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about their home size, specific cleaning needs, and preferred schedule.

9:02 AM — Recognizing a high-priority service request, the AI immediately provides an instant quote and books a first cleaning appointment, integrating directly with ZenMaid. Simultaneously, it sends an SMS to the client, confirming their appointment and providing a technician ETA.

11:00 AM — While your team is busy on site, the AI handles multiple routine calls: a client checking the status of a deep clean (answered via ZenMaid integration), a vendor looking for accounts payable (routed correctly), and a new lead for a commercial cleaning bid (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in ZenMaid — providing a comprehensive record for every client and job without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book house cleaning appointments?", answer: "Yes. The AI captures home size, cleaning type, and scheduling preferences, then books recurring or one-time appointments into your calendar." },
    { question: "Does the AI integrate with ZenMaid?", answer: "Yes. BrightLaunchIQ connects with ZenMaid to schedule cleanings, manage recurring clients, and update your team's availability automatically." },
    { question: "Can the AI handle cleaning quote requests?", answer: "Yes. The AI asks about home size, number of rooms, pets, and special requests, then provides pricing estimates based on your configured rates." },
    { question: "Does the AI manage cleaning rescheduling?", answer: "Yes. The AI handles rescheduling requests, cancellations, and rebooking without any manual intervention from your team." },
    { question: "How fast can a cleaning company go live?", answer: "Most cleaning companies are live within 48 hours. We configure booking workflows, integrate with ZenMaid, and customize for your service packages." },
    { question: "What does an AI receptionist cost for house cleaning companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and ZenMaid integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const HouseCleaning = () => <IndustryPageTemplate data={data} />;
export default HouseCleaning;
