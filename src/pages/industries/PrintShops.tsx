import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Print Shops",
  slug: "print-shops",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Quote Requests", "Order Status Inquiries", "File Submission Guidance", "Design Consultation Scheduling", "Rush Order Inquiries", "Product Information"],
  crm: "PrintSmith",
  sectorLabel: "Business Services",
  similarBusinesses: [
    { name: "Marketing Agencies", slug: "marketing-agencies" },
    { name: "Sign Companies", slug: "sign-companies" },
    { name: "Graphic Designers", slug: "graphic-designers" },
  ],
  whyThisIndustry: "In the dynamic world of print shops, precision, speed, and exceptional customer service are crucial for delivering high-quality products. Print shops rely on a steady stream of new client inquiries, efficient management of print orders, and a reputation for reliable, professional results. When a prospective client calls, they often need immediate assistance with understanding printing options, requesting quotes, checking order status, or submitting design files. Missing that call doesn\u2019t just mean losing a potential client; it can lead to missed deadlines and impact the shop\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Urgent Print Job\" Expectation",
      description: "Clients often call when they have a time-sensitive print job, such as marketing materials for an upcoming event or urgent business cards. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another print shop that can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Staff are Focused on \"Production,\" Not the Phone",
      description: "Your print shop staff are dedicated to operating machinery, preparing files, and ensuring the quality of every print job. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with existing client needs, new inquiries go unanswered, leading to lost orders and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Order Details and Quote Inquiries",
      description: "\"Can you print 500 brochures with a matte finish?\" \"What\u2019s the turnaround time for custom banners?\" \"How much does it cost for 1,000 business cards?\" Answering these repetitive questions and coordinating order details takes up valuable time. Without an intelligent system to handle these FAQs and generate preliminary quotes, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, needing a quote for a large batch of flyers for an upcoming promotion. The BrightLaunchIQ AI Receptionist answers instantly with a professional, helpful tone. It guides the caller through a quick intake, gathers details about their print specifications (quantity, paper type, finish), explains your service options, and generates a preliminary quote. It then offers to schedule a design consultation or direct them to your online submission portal.\n\n1:00 PM \u2014 While your team is busy with production, the AI handles multiple routine calls: one client checking the status of their business card order (handled automatically), another asking about your large-format printing capabilities (answered by the AI), and a third inquiring about graphic design services.\n\n5:00 PM \u2014 After hours, a prospective client calls about a last-minute event photography need. The AI provides immediate advice on rush order options, logs an urgent message for the production manager, and offers to schedule an emergency consultation for the next morning. It also sends an SMS with relevant shop information and a link to your online order form.`,
  faqs: [
    { question: "Can an AI receptionist generate quotes for print jobs?", answer: "Yes. The AI captures print specifications, quantity, and desired finishes, then generates preliminary quotes or routes complex requests to your sales team." },
    { question: "Does the AI integrate with print shop management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like PrintSmith and PrintJobManager to manage client intake, order details, and communication." },
    { question: "Can the AI answer questions about printing options?", answer: "Yes. The AI can provide detailed information on various printing options, paper types, finishes, and turnaround times." },
    { question: "Does the AI handle file submission guidance?", answer: "Yes. The AI can guide clients through the file submission process, explain file format requirements, and direct them to your online portal." },
    { question: "How quickly can a print shop get started?", answer: "Most print shops are live within 48 hours. We configure your service offerings, integrate with your systems, and customize for your unique printing solutions." },
    { question: "What does an AI receptionist cost for print shops?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const PrintShops = () => <IndustryPageTemplate data={data} />;
export default PrintShops;
