import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Plumbers",
  slug: "plumbers",
  lossAmount: "85,000",
  lossAmountNum: 85000,
  useCases: ["Emergency Service Scheduling", "Leak Detection", "Water Heater Repair", "Drain Cleaning", "Pipe Installation", "Routine Maintenance"],
  crm: "ServiceTitan",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "HVAC Services", slug: "hvac-services" },
    { name: "Electricians", slug: "electricians" },
    { name: "Roofers", slug: "roofers" },
  ],
  whyThisIndustry: "In the essential service industry of plumbing, rapid response, expert problem-solving, and clear communication with clients are crucial for maintaining functional homes and businesses. Plumbers rely on a steady stream of new client inquiries, efficient scheduling of emergency and routine services, and a reputation for reliable, high-quality work. When a prospective client calls, they often need immediate assistance with burst pipes, clogged drains, water heater issues, or inquiring about routine maintenance. Missing that call doesn\u2019t just mean losing a potential client; it can lead to significant property damage and impact the company\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Urgent Leak\" Expectation",
      description: "Clients often call when they have a plumbing emergency, which can be a stressful and time-sensitive situation. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another plumbing company that can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Plumbers are Focused on \"Pipes,\" Not the Phone",
      description: "Your plumbers are dedicated to diagnosing issues, making repairs, and installing new systems. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with existing client needs, new inquiries go unanswered, leading to lost service calls and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Service-Related Inquiries",
      description: "\"Do you fix water heaters?\" \"How much does it cost to unclog a drain?\" \"When can you come for a leaky faucet?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, reporting a burst pipe. The BrightLaunchIQ AI Receptionist answers instantly with a professional, reassuring tone. It guides the caller through a quick intake, gathers details about the emergency, explains your rapid response process, and offers to dispatch a technician immediately. It then books the emergency service directly into your scheduling system.\n\n1:00 PM \u2014 While your plumbers are out in the field, the AI handles multiple routine calls: one client confirming their upcoming maintenance appointment (handled automatically), another asking about water softener installations (answered by the AI), and a third inquiring about drain cleaning services.\n\n5:00 PM \u2014 After hours, a prospective client calls about a slow-draining sink. The AI provides immediate advice on temporary solutions, logs a service request for the next morning, and offers to schedule a routine appointment. It also sends an SMS with relevant company information and a link to your online service request form.`,
  faqs: [
    { question: "Can an AI receptionist schedule plumbing services?", answer: "Yes. The AI captures plumbing issue details, urgency, and property information, then books inspections and services directly into your ServiceTitan calendar." },
    { question: "Does the AI integrate with plumbing scheduling software?", answer: "Yes. BrightLaunchIQ connects with leading systems like ServiceTitan and Housecall Pro to manage appointments, client records, and technician routes." },
    { question: "Can the AI diagnose plumbing problems?", answer: "Yes. The AI can ask qualifying questions to help identify common plumbing problems and provide information on your available solutions." },
    { question: "Does the AI handle emergency plumbing calls?", answer: "Yes. The AI operates 24/7, capturing critical details about emergencies and routing urgent cases to your on-call plumbers while scheduling non-urgent services for business hours." },
    { question: "How quickly can a plumbing company get started?", answer: "Most plumbing companies are live within 48 hours. We configure service offerings, integrate with your systems, and customize for your specific plumbing solutions." },
    { question: "What does an AI receptionist cost for plumbers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const Plumbers = () => <IndustryPageTemplate data={data} />;
export default Plumbers;
