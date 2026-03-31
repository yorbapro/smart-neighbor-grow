import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Home Inspectors",
  slug: "home-inspectors",
  lossAmount: "85,000",
  lossAmountNum: 85000,
  useCases: ["Inspection Booking", "Report Delivery Follow-Ups", "Realtor Referral Intake", "Radon & Mold Add-On Upsells", "Scheduling Confirmations", "Re-Inspection Coordination"],
  crm: "Spectora",
  sectorLabel: "Real Estate & Property",
  similarBusinesses: [
    { name: "Residential Real Estate", slug: "residential-real-estate" },
    { name: "Property Management", slug: "property-management" },
    { name: "Mortgage Brokers", slug: "mortgage-brokers" },
  ],
  whyThisIndustry: "In the home inspection industry, trust, thoroughness, and timely reporting are crucial. Home inspectors are a critical step in the home-buying process, and real estate agents and homebuyers rely on their expertise and availability. When a potential client calls, they often need to schedule an inspection quickly to meet closing deadlines. Missing that call doesn\u2019t just mean losing a high-value inspection; it means potentially delaying a home sale and damaging your professional relationships. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Spectora \u2014 so you capture the client even when your team is focused on delivering comprehensive reports.",
  painPoints: [
    {
      title: "The \"Time-Sensitive Transaction\" Expectation",
      description: "Homebuyers and real estate agents often need to schedule inspections within tight deadlines to keep the home-buying process on track. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next inspector on their list who can offer instant scheduling and clear communication."
    },
    {
      title: "Inspectors are Focused on the \"Property,\" Not the Phone",
      description: "Your home inspectors are often on-site, meticulously examining properties, climbing roofs, and crawling through crawl spaces. They cannot\u2014and should not\u2014be interrupted by ringing phones. If your office is understaffed or busy, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "\"Do you inspect for radon?\" \"What\u2019s your availability next Tuesday?\" \"How long does a typical inspection take?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your scheduling software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Inspection Leads Get Lost",
      description: "Comprehensive home inspections are high-value and essential for business stability. If you don\u2019t capture the lead details and schedule an inspection immediately, the client will find another inspector who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden need for a pre-offer inspection or a critical follow-up at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Report Delivery",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Spectora."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A real estate agent calls, needing to schedule a full home inspection for their client by the end of the week. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It checks your real-time availability in Spectora, identifies an opening, and books the inspection immediately.\n\n11:30 AM \u2014 While your inspectors are on-site, the AI handles three simultaneous calls: one client rescheduling their inspection (handled automatically), another asking about your specialized services like mold testing (answered by the AI), and a third booking a series of pre-listing inspections.\n\n6:00 PM \u2014 After your office has closed, a potential homebuyer calls to inquire about your services. The AI handles the intake, explains your offerings, and schedules a consultation for the next morning, sending a professional SMS confirmation with a link to your digital intake forms.\n\nThroughout the day, every call is transcribed, summarized, and logged in Spectora \u2014 providing a comprehensive record for every client and inspection without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book home inspections?", answer: "Yes. The AI checks your availability, captures property address and square footage, and books the inspection directly into your Spectora calendar." },
    { question: "Does the AI integrate with Spectora?", answer: "Yes. BrightLaunchIQ connects with Spectora to schedule inspections, manage add-on services, and trigger report delivery notifications." },
    { question: "Can the AI upsell additional services?", answer: "Yes. The AI offers radon testing, mold inspection, sewer scope, and other add-ons during the booking call, increasing your average ticket value." },
    { question: "Does the AI handle realtor referral calls?", answer: "Yes. The AI identifies realtor partners, provides priority scheduling, and captures referral source data for your marketing tracking." },
    { question: "How quickly can a home inspector get started?", answer: "Most inspectors are live within 48 hours. We configure service menus, integrate with Spectora, and customize the AI for your service area." },
    { question: "What does an AI receptionist cost for home inspectors?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Spectora integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const HomeInspectors = () => <IndustryPageTemplate data={data} />;
export default HomeInspectors;
