import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Pest Control Services",
  slug: "pest-control-services",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Emergency Service Scheduling", "Pest Identification", "Treatment Option Inquiries", "Preventative Maintenance Plans", "Quote Requests", "Follow-up Scheduling"],
  crm: "ServiceTitan",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Lawn Care Services", slug: "lawn-care-services" },
    { name: "HVAC Services", slug: "hvac-services" },
    { name: "Plumbers", slug: "plumbers" },
  ],
  whyThisIndustry: "In the essential field of pest control, rapid response, effective treatment plans, and clear communication with clients are crucial for maintaining healthy environments. Pest control services rely on a steady stream of new client inquiries, efficient scheduling of inspections and treatments, and a reputation for reliable pest eradication. When a prospective client calls, they often need immediate assistance with identifying pests, scheduling an emergency service, inquiring about treatment options, or understanding pricing. Missing that call doesn\u2019t just mean losing a potential client; it can lead to escalating pest problems and impact the company\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Urgent Infestation\" Expectation",
      description: "Clients often call when they discover a pest infestation, which can be a distressing and urgent situation. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another pest control company that can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Technicians are Focused on \"Extermination,\" Not the Phone",
      description: "Your pest control technicians are dedicated to inspecting properties, applying treatments, and ensuring effective pest eradication. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with existing client needs, new inquiries go unanswered, leading to lost service calls and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Treatment-Related Inquiries",
      description: "\"Do you treat for termites?\" \"How much does it cost to get rid of bed bugs?\" \"When can you come for a rodent inspection?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, reporting a rodent problem. The BrightLaunchIQ AI Receptionist answers instantly with a professional, reassuring tone. It guides the caller through a quick intake, gathers details about the pest issue, explains your inspection process, and offers to schedule an immediate service. It then books the appointment directly into your scheduling system.\n\n1:00 PM \u2014 While your technicians are out in the field, the AI handles multiple routine calls: one client confirming their upcoming treatment (handled automatically), another asking about preventative maintenance plans (answered by the AI), and a third inquiring about eco-friendly pest control options.\n\n5:00 PM \u2014 After hours, a prospective client calls about a suspected termite infestation. The AI provides immediate advice on what to do, logs an urgent message for a senior technician, and offers to schedule an emergency inspection for the next morning. It also sends an SMS with relevant company information and a link to your online service request form.`,
  faqs: [
    { question: "Can an AI receptionist schedule pest control services?", answer: "Yes. The AI captures pest type, urgency, and property details, then books inspections and treatments directly into your ServiceTitan calendar." },
    { question: "Does the AI integrate with pest control software?", answer: "Yes. BrightLaunchIQ connects with leading systems like ServiceTitan and PestPac to manage appointments, client records, and technician routes." },
    { question: "Can the AI identify pests and suggest treatments?", answer: "Yes. The AI can ask qualifying questions to help identify common pests and provide information on your available treatment options." },
    { question: "Does the AI handle emergency pest control calls?", answer: "Yes. The AI operates 24/7, capturing critical details about infestations and routing urgent cases to your on-call technicians while scheduling non-urgent services for business hours." },
    { question: "How quickly can a pest control company get started?", answer: "Most pest control companies are live within 48 hours. We configure service offerings, integrate with your systems, and customize for your specific pest control solutions." },
    { question: "What does an AI receptionist cost for pest control services?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const PestControlServices = () => <IndustryPageTemplate data={data} />;
export default PestControlServices;
