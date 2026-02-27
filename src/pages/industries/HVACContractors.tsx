import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "HVAC Contractors",
  slug: "hvac-contractors",
  lossAmount: "150,000",
  lossAmountNum: 150000,
  useCases: ["Emergency Dispatch Triage", "Lead Qualification by System Type", "Maintenance Agreement Scheduling", "After-Hours Emergency Routing", "Seasonal Campaign Intake", "Service Agreement Renewals"],
  crm: "ServiceTitan",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Solar Installers", slug: "solar-installers" },
    { name: "Insulation Contractors", slug: "insulation-contractors" },
    { name: "Emergency Plumbers", slug: "emergency-plumbers" },
    { name: "Electricians", slug: "electricians" },
  ],
  whyThisIndustry: "HVAC contractors are on job sites, in attics, and on rooftops — not sitting by the phone. But when a homeowner's AC dies in July or their furnace stops in January, they're calling right now, and they'll call the next company on the list if you don't pick up. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into ServiceTitan — so you capture the job even when your hands are full.",
  painPoints: [
    {
      title: "Techs Are on the Roof, Not at the Desk",
      description: "Your best people are on job sites. When the phone rings, it often goes to voicemail — and the caller moves on to your competitor."
    },
    {
      title: "After-Hours Emergencies Are Your Highest-Value Calls",
      description: "A no-heat call at 11 PM is worth more than a routine tune-up. Without 24/7 coverage, those emergency calls go unanswered."
    },
    {
      title: "Seasonal Spikes Overwhelm Your Front Office",
      description: "The first heat wave or cold snap floods your phone lines. One receptionist can't handle 50 calls in an hour — but AI can."
    },
    {
      title: "New Customer Calls Get Lost in the Shuffle",
      description: "When your office is juggling dispatch, scheduling, and existing customer calls, new leads often don't get the attention they deserve."
    },
    {
      title: "Maintenance Agreement Renewals Slip Through the Cracks",
      description: "Recurring revenue from service agreements depends on timely follow-up. Missed renewal calls mean lost long-term customers."
    },
    {
      title: "Dispatching Requires Fast, Accurate Information",
      description: "The AI captures system type, issue description, location, and urgency level before routing — so your dispatcher has everything they need."
    }
  ],
  dayInTheLife: `6:30 AM — A homeowner calls about a furnace that won't ignite. Your AI receptionist answers on the first ring, asks about the system type and symptoms, confirms the address, and books a morning service call into ServiceTitan. Your dispatcher sees it the moment they log in.

10:15 AM — Three calls come in simultaneously during a busy morning. The AI handles all three at once: one is a maintenance agreement renewal (scheduled for next week), one is a new lead asking for a quote on a ductless mini-split (captured and flagged for your sales team), and one is an existing customer confirming their afternoon appointment.

9:45 PM — A no-heat emergency call comes in. The AI identifies it as urgent based on the caller's description ("furnace stopped, it's 28 degrees outside, we have a baby"), captures the details, and immediately routes the call to your on-call technician's cell phone. The homeowner never waited on hold.

Throughout the day, every call is transcribed, summarized, and logged in ServiceTitan — no manual data entry required.`,
  faqs: [
    { question: "Can an AI receptionist handle emergency HVAC dispatch?", answer: "Yes. The AI triages calls by severity, captures details like location and system issues, and routes emergency calls to your on-call technician immediately — 24/7, including holidays and weekends." },
    { question: "Does the AI integrate with ServiceTitan, Housecall Pro, or Jobber?", answer: "Yes. BrightLaunchIQ integrates with ServiceTitan, Housecall Pro, and Jobber. The AI creates new jobs, updates customer records, and syncs scheduling in real time." },
    { question: "Can the AI qualify HVAC leads before routing them?", answer: "Yes. The AI asks about system type, issue severity, urgency, and service history, then routes qualified leads to your sales or service team while scheduling routine calls automatically." },
    { question: "Does the AI handle after-hours HVAC calls?", answer: "Yes. The AI provides full 24/7 coverage with natural voice technology, handling after-hours emergencies, weekend inquiries, and holiday calls without overtime costs." },
    { question: "How quickly can an HVAC company get started?", answer: "Most HVAC companies are live within a few days. Our onboarding team configures your call flows, integrates with your CRM, and trains the AI on your services and pricing." },
    { question: "What does an AI receptionist cost for HVAC companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const HVACContractors = () => <IndustryPageTemplate data={data} />;
export default HVACContractors;
