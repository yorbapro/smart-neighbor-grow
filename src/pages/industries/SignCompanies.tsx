import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Sign Companies",
  slug: "sign-companies",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Quote Requests", "Design Consultation Scheduling", "Sign Type Inquiries", "Installation Scheduling", "Order Status Updates", "Material Options"],
  crm: "SignTracker",
  sectorLabel: "Business Services",
  similarBusinesses: [
    { name: "Print Shops", slug: "print-shops" },
    { name: "Marketing Agencies", slug: "marketing-agencies" },
    { name: "Graphic Designers", slug: "graphic-designers" },
  ],
  whyThisIndustry: "In the visual communication industry, sign companies are crucial for helping businesses stand out and convey their brand message effectively. Sign companies rely on a steady stream of new client inquiries, efficient management of design and production, and a reputation for high-quality, impactful signage. When a prospective client calls, they often need immediate assistance with understanding sign types, requesting quotes, discussing design options, or scheduling an installation. Missing that call doesn\u2019t just mean losing a potential client; it can lead to missed branding opportunities and impact the company\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Urgent Branding Need\" Expectation",
      description: "Clients often call when they have an urgent need for signage, such as for a new business opening, a promotional event, or a rebrand. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another sign company that can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Designers/Fabricators are Focused on \"Signs,\" Not the Phone",
      description: "Your sign designers, fabricators, and installers are dedicated to creating, producing, and installing high-quality signage. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with existing client needs, new inquiries go unanswered, leading to lost orders and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Design and Quote Inquiries",
      description: "\"Can you make a custom neon sign?\" \"How much does a channel letter sign cost?\" \"What\u2019s the turnaround time for a vehicle wrap?\" Answering these repetitive questions and coordinating design details takes up valuable time. Without an intelligent system to handle these FAQs and generate preliminary quotes, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, needing a quote for a new storefront sign. The BrightLaunchIQ AI Receptionist answers instantly with a professional, helpful tone. It guides the caller through a quick intake, gathers details about their business, explains your sign options, and generates a preliminary quote. It then offers to schedule a design consultation or direct them to your online portfolio.\n\n1:00 PM \u2014 While your team is busy with production, the AI handles multiple routine calls: one client checking the status of their banner order (handled automatically), another asking about your vehicle wrap services (answered by the AI), and a third inquiring about monument signs.\n\n5:00 PM \u2014 After hours, a prospective client calls about an urgent need for event signage. The AI provides immediate advice on rush order options, logs an urgent message for the design team, and offers to schedule an emergency consultation for the next morning. It also sends an SMS with relevant company information and a link to your online quote request form.`,
  faqs: [
    { question: "Can an AI receptionist generate quotes for sign companies?", answer: "Yes. The AI captures business details, signage needs, and design preferences, then generates preliminary quotes or routes complex requests to your sales team." },
    { question: "Does the AI integrate with sign company management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like SignTracker and Cyrious Control to manage client intake, order details, and communication." },
    { question: "Can the AI answer questions about sign types and materials?", answer: "Yes. The AI can provide detailed information on various sign types, materials, design processes, and what clients can expect." },
    { question: "Does the AI handle urgent signage requests?", answer: "Yes. The AI operates 24/7, capturing critical details about urgent needs and routing rush orders to your design and production teams." },
    { question: "How quickly can a sign company get started?", answer: "Most sign companies are live within 48 hours. We configure your service offerings, integrate with your systems, and customize for your specific signage solutions." },
    { question: "What does an AI receptionist cost for sign companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const SignCompanies = () => <IndustryPageTemplate data={data} />;
export default SignCompanies;
