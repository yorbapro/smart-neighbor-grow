import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";
const data: IndustryPageData = {
  name: "RV Dealers & Service",
  slug: "rv-dealers-service",
  lossAmount: "95,000",
  lossAmountNum: 95000,
  useCases: ["Inventory Questions", "Test Drive Scheduling", "Service Appointments", "Parts Inquiries", "Financing Questions", "Trade-In Valuations", "Roadside Assistance"],
  crm: "DealerSocket",
  sectorLabel: "Auto Services",
  similarBusinesses: [
    { name: "Auto Repair Shops", slug: "auto-repair-shops" },
    { name: "Car Rental Agencies", slug: "car-rental-agencies" },
    { name: "Motorcycle Dealers", slug: "motorcycle-dealers" },
  ],
  whyThisIndustry: "In the adventurous world of RV dealerships and service centers, freedom, exploration, and reliable support are paramount. Dealers and service providers rely on a steady stream of new and returning customers, efficient sales processes, and a reputation for expert knowledge and dependable service. When a prospective buyer or service customer calls, they often need immediate assistance with inventory inquiries, test drives, service appointments, or financing questions. Missing that call doesn\u2019t just mean losing a sale; it can mean losing a long-term customer and impacting the dealership\u2019s growth and community engagement.",
  painPoints: [
    {
      title: "The \"Open Road\" Expectation",
      description: "Customers often call when they are excited about a specific RV model or ready to plan their next adventure. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly move to the next dealership that offers instant, seamless communication and clear information about their desired RV or service."
    },
    {
      title: "Sales and Service Teams are Focused on the \"Lot,\" Not the Phone",
      description: "Your sales team is dedicated to guiding customers through the buying process, showcasing models, and closing deals. Your service technicians are focused on diagnostics, repairs, and ensuring RVs are road-ready. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person customers, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Inventory and Financing Inquiries",
      description: "\"Do you have the new [model name] in stock?\" \"What are the financing options for a used travel trailer?\" \"Can I schedule a test drive for this weekend?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your CRM or scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `10:00 AM \u2014 A new customer calls, interested in a specific Class C motorhome model. The BrightLaunchIQ AI Receptionist answers instantly with an enthusiastic, knowledgeable tone. It guides the caller through a quick intake, confirms the desired model, checks real-time inventory, and books a test drive for later that afternoon. It sends a confirmation and a link to your digital waiver.\n\n1:30 PM \u2014 While your sales team is busy on the lot, the AI handles multiple routine calls: one customer rescheduling their service appointment (handled automatically), another asking about your current promotions on RV accessories (answered by the AI), and a third inquiring about financing options for a new fifth-wheel.\n\n5:00 PM \u2014 After closing, a customer calls about a roadside assistance need. The AI provides clear instructions for emergency services, advises on next-day service availability, and offers to schedule a follow-up call for the next morning. It also sends an SMS with relevant dealership information and a link to your website.\n\nThroughout the day, every call is transcribed, summarized, and logged in DealerSocket \u2014 providing a comprehensive record for every customer and interaction without any manual data entry.`,
  faqs: [
    { question: "Can the AI handle RV inventory questions?", answer: "Yes. It provides model availability, pricing, and schedules test drives." },
    { question: "Does the AI integrate with DealerSocket?", answer: "Yes. BrightLaunchIQ connects with DealerSocket to manage sales leads, service appointments, and customer history automatically." },
    { question: "Can the AI schedule test drives and service appointments?", answer: "Yes. The AI facilitates easy booking for test rides, maintenance, and repair appointments, ensuring your team is ready." },
    { question: "Does the AI handle financing inquiries?", answer: "Yes. The AI can provide general information on financing options, qualify leads, and route complex questions to your finance department." },
    { question: "How quickly can an RV dealership get started?", answer: "Most RV dealerships are live within 48 hours. We configure inventory details, integrate with your CRM, and customize for your sales and service operations." },
    { question: "What does an AI receptionist cost for RV dealerships?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, appointment booking, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};
const RvDealersAndService = () => <IndustryPageTemplate data={data} />;
export default RvDealersAndService;
