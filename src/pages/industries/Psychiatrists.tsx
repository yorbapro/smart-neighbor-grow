import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Psychiatrists",
  slug: "psychiatrists",
  lossAmount: "90,000",
  lossAmountNum: 90000,
  useCases: ["Initial Consultation Scheduling", "Treatment Option Inquiries", "Insurance Verification", "Medication Refill Requests", "Crisis Intervention Support", "Referral Coordination"],
  crm: "SimplePractice",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Therapists & Counselors", slug: "therapists-counselors" },
    { name: "Psychologists", slug: "psychologists" },
    { name: "Addiction Treatment Centers", slug: "addiction-treatment-centers" },
  ],
  whyThisIndustry: "In the sensitive and crucial field of psychiatry, compassionate patient care, discreet scheduling, and clear communication are paramount for supporting mental well-being. Psychiatrists rely on a steady stream of new patient referrals, consistent appointment attendance, and a reputation for providing expert mental health services. When a prospective patient calls, they often need immediate assistance with understanding treatment options, inquiring about insurance coverage, scheduling an initial consultation, or discussing confidentiality. Missing that call doesn\u2019t just mean losing a potential patient; it can lead to delayed care and impact the practice\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Urgent Mental Health Need\" Expectation",
      description: "Patients often call when they are in a vulnerable state, seeking help for mental health challenges. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another practice that can offer instant, empathetic communication and clear information about their services."
    },
    {
      title: "Psychiatrists are Focused on \"Patients,\" Not the Phone",
      description: "Your psychiatrists and clinical staff are dedicated to providing direct patient care, conducting assessments, and developing treatment plans. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person patient care, new inquiries go unanswered, leading to lost consultations and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Insurance-Related Inquiries",
      description: "\"Do you treat anxiety disorders?\" \"How many sessions will my insurance cover?\" \"When can I schedule my first appointment?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your EHR/PMS, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new patient calls, referred by their therapist for medication management. The BrightLaunchIQ AI Receptionist answers instantly with a compassionate, professional tone. It guides the caller through a quick intake, gathers details about their concerns, explains your treatment approach, and checks their insurance eligibility. It then books the initial consultation directly into your practice management system.\n\n1:00 PM \u2014 While your psychiatrists are working with patients, the AI handles multiple routine calls: one patient confirming their upcoming session (handled automatically), another asking about prescription refills (answered by the AI), and a third inquiring about support groups.\n\n5:00 PM \u2014 After hours, a prospective patient calls about a mental health crisis. The AI provides immediate advice on crisis resources, logs an urgent message for the on-call psychiatrist, and offers to schedule an emergency consultation for the next morning. It also sends an SMS with relevant practice information and a link to your online intake forms.`,
  faqs: [
    { question: "Can an AI receptionist schedule psychiatry consultations?", answer: "Yes. The AI captures patient concerns, treatment goals, and insurance information, then books initial consultations directly into your SimplePractice calendar." },
    { question: "Does the AI integrate with psychiatry practice management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like SimplePractice and TherapyNotes to manage appointments, patient records, and communication." },
    { question: "Can the AI answer questions about treatment options?", answer: "Yes. The AI can provide information on various treatment modalities, medication management, and what patients can expect during their mental health journey." },
    { question: "Does the AI handle crisis intervention support?", answer: "Yes. The AI operates 24/7, providing immediate advice on crisis resources, logging urgent messages, and escalating critical situations to your on-call team." },
    { question: "How quickly can a psychiatry practice get started?", answer: "Most psychiatry practices are live within 48 hours. We configure your consultation intake, integrate with your systems, and customize for your treatment offerings." },
    { question: "What does an AI receptionist cost for psychiatrists?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const Psychiatrists = () => <IndustryPageTemplate data={data} />;
export default Psychiatrists;
