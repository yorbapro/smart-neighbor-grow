import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Pest Control Services",
  slug: "pest-control",
  lossAmount: "60,000",
  lossAmountNum: 60000,
  useCases: ["Seasonal Intake", "Recurring Service Scheduling", "Pricing FAQ", "Termite Inspection Booking", "Emergency Bee/Wasp Calls", "Commercial Contract Inquiries"],
  crm: "PestRoutes",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Landscapers", slug: "landscapers" },
    { name: "House Cleaning Services", slug: "house-cleaning" },
    { name: "HVAC Contractors", slug: "hvac-contractors" },
  ],
  whyThisIndustry: "Pest control companies often deal with urgent infestations and recurring service needs. When a homeowner discovers a pest problem, they want a quick resolution. Missing calls means losing out on immediate service requests and potential long-term contracts, directly impacting your revenue and customer satisfaction. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into PestRoutes — so you capture the job even when your technicians are on site.",
  painPoints: [
    {
      title: "Urgent Infestations Demand Rapid Response",
      description: "Customers with pest problems, especially for rodents or stinging insects, are often in distress and seeking immediate help. If your phone line is busy or go to voicemail, they will quickly move to the next pest control company on their list."
    },
    {
      title: "Technicians are on Site, Not on the Phone",
      description: "Your skilled pest control technicians are focused on inspecting properties, applying treatments, and ensuring effective pest eradication. They cannot efficiently manage incoming calls, schedule appointments, or answer routine questions while actively working on a job."
    },
    {
      title: "Inconsistent Lead Qualification and Scheduling",
      description: "Not all calls are for emergencies. Some are for routine preventative maintenance, commercial contracts, or specific pest identification. Without a consistent, intelligent system to qualify leads and schedule appointments, your office staff spends valuable time on administrative tasks."
    },
    {
      title: "High-Value Commercial Contracts Get Lost",
      description: "Commercial pest management contracts are high-value and long-term. If you don't capture the lead details and schedule a consultation immediately, the business will find another pest control company who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A wasp nest near a front door at 6 PM is a major concern. Without 24/7 coverage, these high-value emergency treatment jobs go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, lead details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with PestRoutes."
    }
  ],
  dayInTheLife: `9:00 AM — A homeowner calls your business reporting a large wasp nest near their front door. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about the pest, the location, and confirms if there are any immediate safety concerns.

9:02 AM — Recognizing a high-priority service request, the AI immediately schedules an inspection and treatment appointment with your available technician, integrating directly with PestRoutes. Simultaneously, it sends an SMS to the homeowner, confirming their appointment and providing a technician ETA.

10:30 AM — While your team is busy on site, the AI handles multiple routine calls: a client checking the status of a termite inspection (answered via PestRoutes integration), a vendor looking for accounts payable (routed correctly), and a new lead for a commercial pest management contract (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in PestRoutes — providing a comprehensive record for every customer and lead without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle pest control calls?", answer: "Yes. The AI identifies the pest type, captures property details, and schedules treatment appointments — handling everything from routine spraying to emergency infestations." },
    { question: "Does the AI integrate with PestRoutes?", answer: "Yes. BrightLaunchIQ connects with PestRoutes to create service tickets, schedule recurring treatments, and update customer accounts automatically." },
    { question: "Can the AI answer pest control pricing questions?", answer: "Yes. The AI provides pricing ranges based on your configured rates for common services like general spraying, termite treatments, and rodent control." },
    { question: "Does the AI handle recurring pest control scheduling?", answer: "Yes. The AI manages recurring appointment scheduling, sends reminders, and handles rescheduling requests without any manual intervention." },
    { question: "How quickly can a pest control company go live?", answer: "Most pest control companies launch within 48 hours. We configure seasonal workflows, integrate with PestRoutes, and customize for your service offerings." },
    { question: "What does an AI receptionist cost for pest control companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and PestRoutes integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const PestControl = () => <IndustryPageTemplate data={data} />;
export default PestControl;
