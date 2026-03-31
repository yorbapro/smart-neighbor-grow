import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Real Estate Agencies",
  slug: "real-estate-agencies",
  lossAmount: "120,000",
  lossAmountNum: 120000,
  useCases: ["Lead Qualification", "Showing Scheduling", "Property Information", "Market Trend Inquiries", "Seller Consultations", "Buyer Consultations"],
  crm: "Salesforce",
  sectorLabel: "Real Estate & Property",
  similarBusinesses: [
    { name: "Property Management Companies", slug: "property-management-companies" },
    { name: "Mortgage Brokers", slug: "mortgage-brokers" },
    { name: "Home Inspectors", slug: "home-inspectors" },
  ],
  whyThisIndustry: "In the competitive world of real estate, timely communication, efficient lead management, and exceptional client service are paramount for successful transactions. Real estate agencies rely on a steady stream of new client inquiries, prompt scheduling of showings, and a reputation for guiding clients through one of life\u2019s most significant decisions. When a prospective buyer or seller calls, they often need immediate assistance with understanding market trends, inquiring about property listings, scheduling a viewing, or discussing their buying/selling needs. Missing that call doesn\u2019t just mean losing a potential client; it can mean missing out on a lucrative deal and impacting the agency\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Hot Lead\" Expectation",
      description: "Prospective buyers and sellers often call when they are highly motivated and ready to take action. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another agent or agency that can offer instant, seamless communication and clear information about their real estate needs."
    },
    {
      title: "Agents are Focused on \"Closings,\" Not the Phone",
      description: "Your real estate agents are dedicated to showing properties, negotiating deals, and closing transactions. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with existing client needs, new inquiries go unanswered, leading to lost leads and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Property and Market-Related Inquiries",
      description: "\"Is this house still available?\" \"What\u2019s the average home price in this neighborhood?\" \"Can I schedule a showing for Saturday?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs, qualify leads, and book appointments directly into your CRM, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, interested in a property they saw online. The BrightLaunchIQ AI Receptionist answers instantly with a professional, engaging tone. It guides the caller through a quick intake, gathers details about their preferences, explains the buying process, and checks your agent\u2019s availability for showings. It then books a property viewing directly into your CRM.\n\n1:00 PM \u2014 While your agents are out with clients, the AI handles multiple routine calls: one client confirming their upcoming open house visit (handled automatically), another asking about current interest rates (answered by the AI), and a third inquiring about selling their home.\n\n5:00 PM \u2014 After hours, a prospective seller calls about getting a home valuation. The AI provides immediate information on the valuation process, logs an urgent message for a listing agent, and offers to schedule a consultation for the next morning. It also sends an SMS with relevant agency information and a link to your online home valuation tool.`,
  faqs: [
    { question: "Can an AI receptionist qualify real estate leads?", answer: "Yes. The AI gathers buyer/seller preferences, budget, and timeline, then qualifies leads and routes them to the appropriate agent." },
    { question: "Does the AI integrate with real estate CRM software?", answer: "Yes. BrightLaunchIQ connects with leading systems like Salesforce, Follow Up Boss, and Chime to manage client intake, lead qualification, and communication." },
    { question: "Can the AI schedule property showings?", answer: "Yes. The AI checks agent availability, coordinates with clients, and books property viewings directly into your CRM calendar." },
    { question: "Does the AI provide information on property listings?", answer: "Yes. The AI can answer questions about specific listings, neighborhood details, and market trends, providing instant information to callers." },
    { question: "How quickly can a real estate agency get started?", answer: "Most real estate agencies are live within 48 hours. We configure your lead qualification workflows, integrate with your systems, and customize for your specific market needs." },
    { question: "What does an AI receptionist cost for real estate agencies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const RealEstateAgencies = () => <IndustryPageTemplate data={data} />;
export default RealEstateAgencies;
