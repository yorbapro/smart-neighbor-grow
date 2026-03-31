import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";
const data: IndustryPageData = {
  name: "Appliance Repair",
  slug: "appliance-repair",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Diagnostic Calls", "Scheduling Repairs", "Parts Inquiries", "Warranty Questions", "Emergency Service", "New Appliance Installation"],
  crm: "ServiceTitan",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "HVAC Services", slug: "hvac-services" },
    { name: "Plumbing Services", slug: "plumbing-services" },
    { name: "Electricians", slug: "electricians" },
  ],
  whyThisIndustry: "In the demanding world of appliance repair, quick diagnostics, efficient service, and clear communication are crucial for customer satisfaction. Appliance repair companies thrive on a steady stream of service calls, efficient scheduling of technicians, and a reputation for reliable, expert repairs. When a homeowner calls, they often need immediate assistance with diagnosing an appliance issue, scheduling a repair, or getting quotes for parts and labor. Missing that call doesn\u2019t just mean losing a repair job; it can lead to frustrated customers and impact the company\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Broken Appliance\" Urgency",
      description: "Clients often call when they are experiencing a critical appliance breakdown (e.g., refrigerator not cooling, washing machine leaking) and need immediate assistance. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another repair service that can offer instant, seamless communication and clear information about their needs."
    },
    {
      title: "Technicians are Focused on \"Fixing,\" Not the Phone",
      description: "Your appliance technicians are dedicated to diagnosing problems, ordering parts, and performing repairs on-site. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your office is understaffed or busy with dispatching, new inquiries go unanswered, leading to lost jobs and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Diagnostic and Scheduling Inquiries",
      description: "\"My dryer isn\u2019t heating, what could be wrong?\" \"Do you repair Sub-Zero refrigerators?\" \"When can a technician come out to fix my dishwasher?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and route critical issues to the right specialist, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, reporting a refrigerator malfunction. The BrightLaunchIQ AI Receptionist answers instantly with a friendly, knowledgeable tone. It guides the caller through a quick intake, gathers details about the appliance (make, model, issue), offers preliminary troubleshooting tips, and explains your service process. It then schedules a diagnostic appointment with a technician.\n\n1:00 PM \u2014 While your technicians are on their routes, the AI handles multiple routine calls: one client confirming their next repair appointment (handled automatically), another asking about warranty coverage for a specific brand (answered by the AI), and a third inquiring about the cost of a new filter installation.\n\n5:00 PM \u2014 After hours, a client calls about a sudden oven failure. The AI provides immediate advice on how to safely turn off the appliance, logs an urgent service request for the next morning, and offers to connect them with an emergency line if the situation requires immediate attention. It also sends an SMS with relevant company information and a link to your online service portal.`,
  faqs: [
    { question: "Can an AI receptionist handle diagnostic calls?", answer: "Yes. It gathers appliance details, offers troubleshooting, and schedules repairs." },
    { question: "Does the AI integrate with service management software?", answer: "Yes. BrightLaunchIQ connects with leading platforms like ServiceTitan and Housecall Pro to manage appointments, dispatch technicians, and track client history." },
    { question: "Can the AI provide automated troubleshooting?", answer: "Yes. The AI can provide immediate, helpful advice for common appliance issues, reducing panic and unnecessary dispatches." },
    { question: "How quickly can an appliance repair company get started?", answer: "Most appliance repair companies are live within 48 hours. We configure your services, integrate with your systems, and customize for your unique offerings." },
    { question: "What does an AI receptionist cost for appliance repair companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, inquiry handling, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};
const ApplianceRepair = () => <IndustryPageTemplate data={data} />;
export default ApplianceRepair;
