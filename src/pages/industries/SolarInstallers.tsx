import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Solar Installers",
  slug: "solar-installers",
  lossAmount: "110,000",
  lossAmountNum: 110000,
  useCases: ["Site Assessment Scheduling", "Panel Quote Requests", "Incentive Questions", "Installation Follow-Up", "Maintenance Inquiries", "Emergency Support"],
  crm: "Salesforce",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Electricians", slug: "electricians" },
    { name: "Roofing Companies", slug: "roofing-companies" },
    { name: "General Contractors", slug: "general-contractors" }
  ],
  whyThisIndustry: "Solar installation companies operate in a competitive market, where lead generation and efficient scheduling are crucial for success. Potential customers often have detailed questions about costs, incentives, and installation processes. Missing calls means losing out on valuable leads, delaying project starts, and directly impacting your sales pipeline and revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Salesforce — so you capture the job even when your sales teams are on site.",
  painPoints: [
    {
      title: "High-Value Leads Go Unanswered",
      description: "Customers interested in solar are often making a significant investment and are likely to contact multiple providers. If your phone goes to voicemail or isn't answered promptly, these high-value leads will quickly move to a competitor."
    },
    {
      title: "Sales Teams are on Site, Not on the Phone",
      description: "Your sales and installation teams are often out in the field, conducting site assessments, meeting with clients, or managing ongoing projects. They cannot effectively manage incoming calls, qualify leads, or schedule appointments while focused on their primary tasks."
    },
    {
      title: "Complex Inquiries Require Consistent Information",
      description: "Solar inquiries often involve detailed questions about system design, energy savings, financing options, and government incentives. Without a consistent, intelligent system to handle these inquiries, your team spends valuable time answering repetitive questions."
    },
    {
      title: "High-Value Commercial Solar Leads Get Lost",
      description: "Commercial solar projects and large-scale installations are high-value and long-term. If you don't capture the lead details and schedule a consultation immediately, the business will find another solar installer who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A system failure or an emergency maintenance request at 6 PM is a major concern. Without 24/7 coverage, these high-value emergency service calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, lead details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Salesforce."
    }
  ],
  dayInTheLife: `10:00 AM — A homeowner calls your business, interested in getting a quote for a new solar panel system. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about their energy consumption, roof type, and specific interests (e.g., battery storage, EV charging).

10:02 AM — Recognizing a high-priority service request, the AI immediately pre-qualifies the lead and schedules a free consultation with your sales team, integrating directly with Salesforce. Simultaneously, it sends an SMS to the homeowner, confirming their appointment and providing a technician ETA.

1:00 PM — While your team is busy on site, the AI handles multiple routine calls: a client checking the status of an installation (answered via Salesforce integration), a vendor looking for accounts payable (routed correctly), and a new lead for a commercial solar project (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in Salesforce — providing a comprehensive record for every lead and customer without any manual data entry.`,
  faqs: [
    { question: "Can the AI handle solar incentive questions?", answer: "Yes. The AI provides general info on federal and state incentives and schedules consultations with your team for specifics." },
    { question: "Does the AI integrate with Salesforce?", answer: "Yes. BrightLaunchIQ connects with Salesforce to create leads, schedule site assessments, and manage your sales pipeline automatically." },
    { question: "Can the AI provide solar installation quotes?", answer: "Yes. The AI captures energy usage, roof type, and location, then provides ballpark pricing or schedules an in-person estimate with your team." },
    { question: "Does the AI handle after-hours solar inquiries?", answer: "Yes. The AI answers 24/7, handling emergency calls, incentive questions, and consultation requests — even on weekends and holidays." },
    { question: "How quickly can a solar company go live?", answer: "Most solar companies are live within 48 hours. We configure lead qualification flows, integrate with Salesforce, and customize for your service area." },
    { question: "What does an AI receptionist cost for solar installers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Salesforce integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const SolarInstallers = () => <IndustryPageTemplate data={data} />;
export default SolarInstallers;
