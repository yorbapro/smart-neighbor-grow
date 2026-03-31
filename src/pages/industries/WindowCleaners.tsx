import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Window Cleaners",
  slug: "window-cleaners",
  lossAmount: "45,000",
  lossAmountNum: 45000,
  useCases: ["Quote Requests", "Appointment Scheduling", "Commercial Cleaning Inquiries", "Post-Construction Clean-up", "Service Area Questions", "Gutter Cleaning Inquiries"],
  crm: "Jobber",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Pressure Washing Services", slug: "pressure-washing-services" },
    { name: "House Cleaning Services", slug: "house-cleaning-services" },
    { name: "Maid Services", slug: "maid-services" },
  ],
  whyThisIndustry: "In the competitive home services market, window cleaners rely on a steady stream of new client inquiries, efficient scheduling, and a reputation for sparkling results. Window cleaning businesses often receive calls from prospective clients needing quotes, scheduling appointments, or inquiring about specific services like high-rise window cleaning or post-construction clean-up. Missing these calls doesn\u2019t just mean losing a potential client; it can lead to missed opportunities for recurring revenue and impact the company\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Immediate Shine\" Expectation",
      description: "Clients often call when they are ready to book a service, especially for seasonal cleaning or before special events. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another window cleaning service that can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Cleaners are Focused on \"Windows,\" Not the Phone",
      description: "Your window cleaning technicians are dedicated to delivering streak-free results and ensuring client satisfaction on-site. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with existing client needs, new inquiries go unanswered, leading to lost bookings and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Quote Inquiries",
      description: "\"How much does it cost to clean windows on a three-story house?\" \"Do you offer commercial window cleaning?\" \"When can you schedule an appointment?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, needing a quote for residential window cleaning. The BrightLaunchIQ AI Receptionist answers instantly with a professional, friendly tone. It guides the caller through a quick intake, gathers details about their property, explains your service packages, and generates a preliminary quote. It then offers to schedule a convenient appointment.\n\n1:00 PM \u2014 While your crews are out on jobs, the AI handles multiple routine calls: one client confirming their upcoming appointment (handled automatically), another asking about your commercial cleaning services (answered by the AI), and a third inquiring about gutter cleaning.\n\n5:00 PM \u2014 After hours, a prospective client calls about an urgent post-construction window clean-up. The AI provides immediate information on specialized services, logs an urgent message for the operations manager, and offers to schedule an assessment for the next morning. It also sends an SMS with relevant company information and a link to your online booking form.`,
  faqs: [
    { question: "Can an AI receptionist generate quotes for window cleaners?", answer: "Yes. The AI captures property details, service needs, and explains pricing structures, then generates preliminary quotes or routes complex requests to your sales team." },
    { question: "Does the AI integrate with window cleaning scheduling software?", answer: "Yes. BrightLaunchIQ connects with leading systems like Jobber and Housecall Pro to manage appointments, client records, and crew routes." },
    { question: "Can the AI answer questions about commercial window cleaning?", answer: "Yes. The AI can provide detailed information on commercial services, specialized equipment, and safety protocols for large-scale projects." },
    { question: "Does the AI handle urgent clean-up requests?", answer: "Yes. The AI operates 24/7, capturing critical details about urgent needs and routing rush clean-up requests to your operations team." },
    { question: "How quickly can a window cleaning company get started?", answer: "Most window cleaning companies are live within 48 hours. We configure your service offerings, integrate with your systems, and customize for your specific cleaning solutions." },
    { question: "What does an AI receptionist cost for window cleaners?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const WindowCleaners = () => <IndustryPageTemplate data={data} />;
export default WindowCleaners;
