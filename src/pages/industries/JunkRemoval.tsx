import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Junk Removal",
  slug: "junk-removal",
  lossAmount: "40,000",
  lossAmountNum: 40000,
  useCases: ["Same-Day Booking", "Pricing FAQ", "Commercial Bid Intake", "Estate Cleanout Leads", "Construction Debris Scheduling", "Donation Pickup Coordination"],
  crm: "Workiz",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "House Cleaning Services", slug: "house-cleaning" },
    { name: "Landscapers", slug: "landscapers" },
    { name: "Pest Control Services", slug: "pest-control" },
  ],
  whyThisIndustry: "Junk removal companies often receive urgent calls from individuals and businesses needing immediate waste disposal. Whether it's a post-renovation cleanup or an emergency eviction, customers need a fast and reliable service. Missing calls means losing out on immediate jobs and potential recurring contracts, directly impacting your revenue and operational efficiency. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Workiz — so you capture the job even when your crews are on the road.",
  painPoints: [
    {
      title: "Urgent Disposal Needs Demand Quick Response",
      description: "Customers often call for junk removal when they have an immediate need, such as clearing out a property for sale or after a construction project. If your phone goes unanswered or to voicemail, they will quickly contact the next available service."
    },
    {
      title: "Crews are on the Road, Not on the Phone",
      description: "Your junk removal crews are busy on job sites, loading, transporting, and disposing of various materials. They cannot effectively manage incoming calls, schedule pickups, or answer routine questions while ensuring efficient operations and safety."
    },
    {
      title: "Inconsistent Lead Qualification and Scheduling",
      description: "Not all calls are for the same type or volume of junk. Some are for single-item pickups, others for full property cleanouts, and some for commercial waste management. Without an intelligent system to pre-qualify leads and schedule pickups, your office staff spends valuable time on administrative tasks."
    },
    {
      title: "High-Value Commercial Cleanout Leads Get Lost",
      description: "Commercial cleanouts and estate cleanout leads are high-value and long-term. If you don't capture the lead details and schedule a consultation immediately, the business will find another junk removal company who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "An emergency eviction cleanup at 6 PM is a major concern. Without 24/7 coverage, these high-value emergency service calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, lead details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Workiz."
    }
  ],
  dayInTheLife: `10:00 AM — A homeowner calls your business, needing to dispose of construction debris from a recent remodel. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about the type and volume of junk, the location, and the desired pickup time.

10:02 AM — Recognizing a high-priority service request, the AI immediately schedules a pickup with your available crew, integrating directly with Workiz. Simultaneously, it sends an SMS to the homeowner, confirming their appointment and providing a technician ETA.

1:00 PM — While your team is busy on the road, the AI handles multiple routine calls: a client checking the status of a scheduled pickup (answered via Workiz integration), a vendor looking for accounts payable (routed correctly), and a new lead for a commercial cleanout (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in Workiz — providing a comprehensive record for every customer and lead without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book same-day junk removal?", answer: "Yes. The AI checks your crew availability and books same-day pickups instantly, capturing item descriptions and property access details." },
    { question: "Does the AI integrate with Workiz?", answer: "Yes. BrightLaunchIQ connects with Workiz to create jobs, schedule pickups, and manage your dispatch calendar in real time." },
    { question: "Can the AI provide junk removal pricing?", answer: "Yes. The AI asks about load size, item types, and location, then provides pricing estimates based on your configured rates." },
    { question: "Does the AI handle commercial junk removal bids?", answer: "Yes. The AI captures project scope, timeline, and access details for commercial cleanouts, then routes the lead to your estimating team." },
    { question: "How quickly can a junk removal company go live?", answer: "Most junk removal companies are live within 48 hours. We configure same-day booking flows, integrate with Workiz, and customize for your pricing." },
    { question: "What does an AI receptionist cost for junk removal companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Workiz integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const JunkRemoval = () => <IndustryPageTemplate data={data} />;
export default JunkRemoval;
