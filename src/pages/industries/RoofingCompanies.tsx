import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Roofing Companies",
  slug: "roofing-companies",
  lossAmount: "250,000",
  lossAmountNum: 250000,
  useCases: ["Storm Damage Intake", "Insurance Claim Leads", "Inspection Booking", "Material Estimate Requests", "Warranty Inquiries", "Emergency Tarp Dispatch"],
  crm: "AccuLynx",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "HVAC Contractors", slug: "hvac-contractors" },
    { name: "Electricians", slug: "electricians" },
    { name: "Garage Door Repair", slug: "garage-door-repair" },
  ],
  whyThisIndustry: "Roofing companies often deal with urgent requests, especially after storms or during seasonal peaks. When a homeowner discovers a leak, they need a quick response. Missing calls means losing out on high-value repair jobs and new installations, directly impacting your bottom line. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books inspections directly into AccuLynx — so you capture the job even when your crews are on the roof.",
  painPoints: [
    {
      title: "Storm Chasers and Missed Opportunities",
      description: "After a major storm, homeowners are frantically calling for roof inspections and repairs. If your phone lines are busy or go to voicemail, these high-urgency leads will quickly move to a competitor who answers first."
    },
    {
      title: "Crews on the Roof, Not on the Phone",
      description: "Your skilled roofing crews are on job sites, often in noisy and dangerous environments. They cannot effectively manage incoming calls, schedule appointments, or answer routine questions while ensuring safety and quality work."
    },
    {
      title: "Inconsistent Lead Qualification",
      description: "Not all calls are equal. Some are urgent repairs, others are routine maintenance, and some are just price shopping. Without a consistent, intelligent system to qualify leads, your team wastes valuable time on low-priority calls."
    },
    {
      title: "High-Value Insurance Claims Get Lost",
      description: "Insurance claim leads are time-sensitive and high-value. If you don't capture the claim details and schedule an inspection immediately, the homeowner will find another roofer who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A tree falling on a roof at 10 PM is a major emergency. Without 24/7 coverage, these high-value emergency tarping and repair jobs go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, lead details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with AccuLynx."
    }
  ],
  dayInTheLife: `8:00 AM — A homeowner calls about a significant roof leak after a night of heavy rain. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about the damage, the home's location, and the urgency. It then schedules an immediate inspection with your available estimator, integrating directly with AccuLynx.

10:30 AM — Several calls come in simultaneously during a post-storm surge. The AI handles them all: one is a request for a new roof quote (qualified and routed to sales), another is a follow-up on a previous repair (routed to customer service), and a third is a general inquiry about materials (answered directly by the AI).

9:45 PM — A call comes in about a tree falling on a roof. The AI identifies it as an emergency, collects all necessary information, and immediately dispatches the details to your on-call emergency crew, ensuring a rapid response. The homeowner never waited on hold.

Throughout the day, every call is transcribed, summarized, and logged in AccuLynx — providing a clear record for every lead and customer interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle storm damage call surges?", answer: "Yes. The AI scales instantly to handle hundreds of simultaneous calls during storm events, capturing every lead while your team focuses on inspections and repairs." },
    { question: "Does the AI integrate with AccuLynx?", answer: "Yes. BrightLaunchIQ syncs directly with AccuLynx to create new leads, schedule inspections, and update job statuses automatically." },
    { question: "Can the AI qualify insurance claim leads?", answer: "Yes. The AI captures damage details, insurance carrier information, and property addresses, then flags high-value insurance claim leads for immediate follow-up." },
    { question: "Does the AI book roof inspections?", answer: "Yes. The AI schedules inspections directly into your calendar or AccuLynx, confirming availability and sending appointment reminders to homeowners." },
    { question: "How quickly can a roofing company get started?", answer: "Most roofing companies launch within 48 hours. We configure storm surge workflows, integrate with AccuLynx, and customize the AI for your service territory." },
    { question: "What does an AI receptionist cost for roofing companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and AccuLynx integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const RoofingCompanies = () => <IndustryPageTemplate data={data} />;
export default RoofingCompanies;
