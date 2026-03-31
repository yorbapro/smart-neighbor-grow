import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Web Design Agencies",
  slug: "web-design-agencies",
  lossAmount: "90,000",
  lossAmountNum: 90000,
  useCases: ["Quote Requests", "Project Requirement Discussions", "Consultation Scheduling", "Website Maintenance Inquiries", "SEO Services", "Digital Marketing Services"],
  crm: "HubSpot",
  sectorLabel: "Business Services",
  similarBusinesses: [
    { name: "Marketing Agencies", slug: "marketing-agencies" },
    { name: "Graphic Designers", slug: "graphic-designers" },
    { name: "IT Consulting Firms", slug: "it-consulting-firms" },
  ],
  whyThisIndustry: "In the dynamic and competitive world of web design, clear communication, efficient project management, and a strong client relationship are crucial for delivering successful digital solutions. Web design agencies rely on a steady stream of new client inquiries, effective project scoping, and a reputation for creating visually appealing and functional websites. When a prospective client calls, they often need immediate assistance with understanding design processes, requesting quotes, discussing project requirements, or scheduling a consultation. Missing that call doesn\u2019t just mean losing a potential client; it can mean missing out on innovative projects and impacting the agency\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Urgent Online Presence\" Expectation",
      description: "Clients often call when they have an urgent need for a new website, a redesign, or digital marketing support. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another agency that can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Designers are Focused on \"Creation,\" Not the Phone",
      description: "Your web designers, developers, and project managers are dedicated to crafting websites, coding functionalities, and managing client projects. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with existing client needs, new inquiries go unanswered, leading to lost projects and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Project and Quote Inquiries",
      description: "\"How much does a custom e-commerce website cost?\" \"What\u2019s your process for SEO optimization?\" \"Can you redesign my existing site?\" Answering these repetitive questions and coordinating consultations takes up valuable time. Without an intelligent system to handle these FAQs, qualify leads, and book consultations directly into your CRM, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, needing a quote for a new business website. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It guides the caller through a quick intake, gathers details about their business goals, explains your design process, and generates a preliminary quote. It then offers to schedule a comprehensive design consultation.\n\n1:00 PM \u2014 While your team is busy with client projects, the AI handles multiple routine calls: one client checking the status of their website development (handled automatically), another asking about your digital marketing services (answered by the AI), and a third inquiring about website maintenance packages.\n\n5:00 PM \u2014 After hours, a prospective client calls about an urgent website redesign. The AI provides immediate advice on rush project options, logs an urgent message for a project manager, and offers to schedule an emergency consultation for the next morning. It also sends an SMS with relevant agency information and a link to your online project brief form.`,
  faqs: [
    { question: "Can an AI receptionist qualify leads for web design agencies?", answer: "Yes. The AI captures client business goals, project scope, and budget, then qualifies leads and routes them to your sales team." },
    { question: "Does the AI integrate with agency CRM software?", answer: "Yes. BrightLaunchIQ connects with leading systems like HubSpot, Salesforce, and Zoho CRM to manage client intake, lead qualification, and project details." },
    { question: "Can the AI schedule design consultations?", answer: "Yes. The AI checks designer availability and books consultations directly into your CRM calendar." },
    { question: "Does the AI provide information on web design processes?", answer: "Yes. The AI can explain your design process, SEO strategies, and digital marketing services to prospective clients." },
    { question: "How quickly can a web design agency get started?", answer: "Most web design agencies are live within 48 hours. We configure your service offerings, integrate with your systems, and customize for your specific design solutions." },
    { question: "What does an AI receptionist cost for web design agencies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const WebDesignAgencies = () => <IndustryPageTemplate data={data} />;
export default WebDesignAgencies;
