import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Roofers",
  slug: "roofers",
  lossAmount: "90,000",
  lossAmountNum: 90000,
  useCases: ["Emergency Repair Scheduling", "New Roof Consultations", "Inspection Booking", "Storm Damage Assessment", "Maintenance Inquiries", "Quote Requests"],
  crm: "AccuLynx",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "General Contractors", slug: "general-contractors" },
    { name: "Siding Contractors", slug: "siding-contractors" },
    { name: "Window Installers", slug: "window-installers" },
  ],
  whyThisIndustry: "In the critical home services industry of roofing, rapid response, expert problem-solving, and clear communication with clients are crucial for protecting homes and businesses. Roofers rely on a steady stream of new client inquiries, efficient scheduling of inspections and repairs, and a reputation for reliable, high-quality work. When a prospective client calls, they often need immediate assistance with storm damage, leaky roofs, new roof installations, or inquiring about routine maintenance. Missing that call doesn\u2019t just mean losing a potential client; it can lead to significant property damage and impact the company\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Urgent Roof Damage\" Expectation",
      description: "Clients often call when they have a roofing emergency, which can be a stressful and time-sensitive situation. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another roofing company that can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Roofers are Focused on \"Roofs,\" Not the Phone",
      description: "Your roofing crews are dedicated to inspecting roofs, making repairs, and installing new systems. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with existing client needs, new inquiries go unanswered, leading to lost service calls and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Service-Related Inquiries",
      description: "\"Do you fix storm damage?\" \"How much does a new roof cost?\" \"When can you come for an inspection?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, reporting a leaky roof after a storm. The BrightLaunchIQ AI Receptionist answers instantly with a professional, reassuring tone. It guides the caller through a quick intake, gathers details about the damage, explains your rapid response process, and offers to dispatch an inspector immediately. It then books the emergency inspection directly into your scheduling system.\n\n1:00 PM \u2014 While your crews are out in the field, the AI handles multiple routine calls: one client confirming their upcoming roof replacement (handled automatically), another asking about gutter cleaning services (answered by the AI), and a third inquiring about financing options for a new roof.\n\n5:00 PM \u2014 After hours, a prospective client calls about a new roof installation. The AI provides immediate information on material options, logs a service request for the next morning, and offers to schedule a routine appointment. It also sends an SMS with relevant company information and a link to your online quote request form.`,
  faqs: [
    { question: "Can an AI receptionist schedule roofing services?", answer: "Yes. The AI captures roofing issue details, urgency, and property information, then books inspections and services directly into your AccuLynx calendar." },
    { question: "Does the AI integrate with roofing scheduling software?", answer: "Yes. BrightLaunchIQ connects with leading systems like AccuLynx and JobNimbus to manage appointments, client records, and crew routes." },
    { question: "Can the AI assess storm damage?", answer: "Yes. The AI can ask qualifying questions to help assess storm damage and provide information on your available repair options." },
    { question: "Does the AI handle emergency roofing calls?", answer: "Yes. The AI operates 24/7, capturing critical details about emergencies and routing urgent cases to your on-call roofers while scheduling non-urgent services for business hours." },
    { question: "How quickly can a roofing company get started?", answer: "Most roofing companies are live within 48 hours. We configure your service offerings, integrate with your systems, and customize for your specific roofing solutions." },
    { question: "What does an AI receptionist cost for roofers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const Roofers = () => <IndustryPageTemplate data={data} />;
export default Roofers;
