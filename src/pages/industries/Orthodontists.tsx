import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Orthodontists",
  slug: "orthodontists",
  lossAmount: "180,000",
  lossAmountNum: 180000,
  useCases: ["Consultation Intake", "Emergency Bracket Repairs", "Payment Plan FAQ", "Treatment Progress Inquiries", "Retainer Replacement Orders", "Referral Coordination"],
  crm: "Ortho2",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Dental Clinics", slug: "dental-clinics" },
    { name: "Dermatologists", slug: "dermatologists" },
    { name: "Optometrists", slug: "optometrists" },
  ],
  whyThisIndustry: "In the specialized field of orthodontics, precise treatment planning, efficient scheduling, and clear communication with patients and parents are crucial for achieving optimal results. Orthodontists rely on a steady stream of new patient consultations, consistent appointment attendance, and a reputation for creating beautiful, healthy smiles. When a prospective patient or parent calls, they often need immediate assistance with scheduling a consultation, asking about treatment options, inquiring about insurance coverage, or understanding payment plans. Missing that call doesn\u2019t just mean losing a potential patient; it can lead to delayed treatment and impact the practice\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Perfect Smile\" Expectation",
      description: "Patients and parents often call when they are actively seeking orthodontic treatment for themselves or their children, driven by aesthetic or functional concerns. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another orthodontic practice that can offer instant, seamless communication and clear information about their needs."
    },
    {
      title: "Orthodontists are Focused on \"Smiles,\" Not the Phone",
      description: "Your orthodontists and clinical staff are dedicated to providing direct patient care, adjusting braces, and overseeing treatment progress. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person patient care, new inquiries go unanswered, leading to lost consultations and a diminished reputation for responsiveness.""
    },
    {
      title: "Complex Scheduling and Treatment-Related Inquiries",
      description: "\"How long does Invisalign treatment take?\" \"Do you offer payment plans for braces?\" \"When can I schedule a free consultation?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your practice management system, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new patient calls, interested in a free orthodontic consultation. The BrightLaunchIQ AI Receptionist answers instantly with a professional, friendly tone. It guides the caller through a quick intake, gathers details about their orthodontic concerns, explains your treatment options (e.g., braces, Invisalign), and checks their insurance eligibility. It then books the consultation directly into your practice management system.\n\n1:00 PM \u2014 While your orthodontists are seeing patients, the AI handles multiple routine calls: one patient confirming their upcoming adjustment appointment (handled automatically), another asking about proper oral hygiene with braces (answered by the AI), and a third inquiring about their payment schedule.\n\n5:00 PM \u2014 After hours, a parent calls about a broken bracket. The AI provides immediate advice on what to do, logs an urgent message for the on-call orthodontist, and offers to schedule an emergency appointment for the next morning. It also sends an SMS with relevant practice information and a link to your patient portal.`,
  faqs: [
    { question: "Can an AI receptionist handle orthodontic consultations?", answer: "Yes. The AI captures patient age, dental concerns, insurance details, and scheduling preferences, then books the initial consultation directly into your Ortho2 calendar." },
    { question: "Does the AI integrate with orthodontic practice management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like Ortho2 and Cloud9Ortho to manage appointments, treatment tracking, and payment plan inquiries automatically." },
    { question: "Can the AI handle emergency bracket repairs?", answer: "Yes. The AI assesses the urgency \u2014 broken bracket, poking wire, lost retainer \u2014 and schedules same-day or next-day repair appointments." },
    { question: "Does the AI answer payment plan questions?", answer: "Yes. The AI explains your financing options, monthly payment estimates, and insurance coverage details based on your configured pricing." },
    { question: "How quickly can an orthodontic practice get started?", answer: "Most orthodontic practices are live within 48 hours. We configure consultation intake, integrate with your systems, and customize for your treatment offerings." },
    { question: "What does an AI receptionist cost for orthodontists?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const Orthodontists = () => <IndustryPageTemplate data={data} />;
export default Orthodontists;
