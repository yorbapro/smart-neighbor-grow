import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Solar Panel Installers",
  slug: "solar-panel-installers",
  lossAmount: "110,000",
  lossAmountNum: 110000,
  useCases: ["Quote Requests", "Site Assessment Scheduling", "Financing Option Inquiries", "Installation Process Explanation", "Maintenance Questions", "Commercial Project Inquiries"],
  crm: "SolarCRM",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Electricians", slug: "electricians" },
    { name: "Roofers", slug: "roofers" },
    { name: "HVAC Companies", slug: "hvac-companies" },
  ],
  whyThisIndustry: "In the rapidly growing renewable energy sector, solar panel installers are at the forefront of providing sustainable power solutions. Solar panel installers rely on a steady stream of new client inquiries, efficient project management, and a reputation for reliable, high-performance installations. When a prospective client calls, they often need immediate assistance with understanding solar benefits, requesting quotes, discussing financing options, or scheduling a site assessment. Missing that call doesn\u2019t just mean losing a potential client; it can mean missing out on significant energy savings for homeowners and businesses, and impact the company\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Green Energy\" Expectation",
      description: "Clients often call when they are highly motivated to reduce their carbon footprint and save on energy bills. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another solar provider that can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Installers are Focused on \"Installations,\" Not the Phone",
      description: "Your solar technicians and installers are dedicated to designing, installing, and maintaining solar energy systems. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with existing client needs, new inquiries go unanswered, leading to lost contracts and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Technical and Financial Inquiries",
      description: "\"How much does a solar panel system cost?\" \"What are the government incentives for solar?\" \"Can you install solar on my roof type?\" Answering these repetitive questions and coordinating site assessments takes up valuable time. Without an intelligent system to handle these FAQs and generate preliminary quotes, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, interested in getting solar panels for their home. The BrightLaunchIQ AI Receptionist answers instantly with a professional, informative tone. It guides the caller through a quick intake, gathers details about their energy consumption, explains the benefits of solar, and generates a preliminary quote. It then offers to schedule a comprehensive site assessment.\n\n1:00 PM \u2014 While your installation crews are on rooftops, the AI handles multiple routine calls: one client confirming their upcoming installation date (handled automatically), another asking about solar panel maintenance (answered by the AI), and a third inquiring about battery storage solutions.\n\n5:00 PM \u2014 After hours, a prospective client calls about a commercial solar project. The AI provides immediate information on large-scale installations, logs an urgent message for a commercial sales representative, and offers to schedule an initial consultation for the next morning. It also sends an SMS with relevant company information and a link to your online quote request form.`,
  faqs: [
    { question: "Can an AI receptionist qualify solar leads?", answer: "Yes. The AI captures energy consumption, property details, and solar interest, then qualifies leads and routes them to your sales team." },
    { question: "Does the AI integrate with solar CRM software?", answer: "Yes. BrightLaunchIQ connects with leading systems like SolarCRM and AccuLynx to manage client intake, lead qualification, and project management." },
    { question: "Can the AI schedule site assessments?", answer: "Yes. The AI checks installer availability, coordinates with clients, and books site assessments directly into your CRM calendar." },
    { question: "Does the AI provide information on solar incentives?", answer: "Yes. The AI can provide detailed information on government incentives, tax credits, and financing options for solar installations." },
    { question: "How quickly can a solar panel installation company get started?", answer: "Most solar panel installation companies are live within 48 hours. We configure your lead qualification workflows, integrate with your systems, and customize for your specific solar solutions." },
    { question: "What does an AI receptionist cost for solar panel installers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const SolarPanelInstallers = () => <IndustryPageTemplate data={data} />;
export default SolarPanelInstallers;
