import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Psychologists",
  slug: "psychologists",
  lossAmount: "95,000",
  lossAmountNum: 95000,
  useCases: ["Initial Consultation Scheduling", "Therapy Approach Inquiries", "Insurance Verification", "Group Therapy Information", "Crisis Intervention Support", "Referral Coordination"],
  crm: "SimplePractice",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Therapists & Counselors", slug: "therapists-counselors" },
    { name: "Psychiatrists", slug: "psychiatrists" },
    { name: "Life Coaches", slug: "life-coaches" },
  ],
  whyThisIndustry: "In the vital field of psychology, providing empathetic support, facilitating therapeutic progress, and ensuring clear communication with clients are essential for mental well-being. Psychologists rely on a steady stream of new client referrals, consistent appointment attendance, and a reputation for delivering effective mental health services. When a prospective client calls, they often need immediate assistance with understanding therapy approaches, inquiring about insurance coverage, scheduling an initial consultation, or discussing confidentiality. Missing that call doesn\u2019t just mean losing a potential client; it can lead to delayed care and impact the practice\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Seeking Support\" Expectation",
      description: "Clients often call when they are in a vulnerable state, actively seeking psychological support for personal challenges. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another practice that can offer instant, empathetic communication and clear information about their services."
    },
    {
      title: "Psychologists are Focused on \"Therapy,\" Not the Phone",
      description: "Your psychologists and clinical staff are dedicated to providing direct patient care, conducting assessments, and guiding clients through therapeutic sessions. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person client care, new inquiries go unanswered, leading to lost consultations and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Insurance-Related Inquiries",
      description: "\"Do you specialize in cognitive-behavioral therapy?\" \"How many sessions will my insurance cover?\" \"When can I schedule my first appointment?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your EHR/PMS, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, referred by their primary care physician for anxiety management. The BrightLaunchIQ AI Receptionist answers instantly with a compassionate, professional tone. It guides the caller through a quick intake, gathers details about their concerns, explains your therapeutic approaches, and checks their insurance eligibility. It then books the initial consultation directly into your practice management system.\n\n1:00 PM \u2014 While your psychologists are working with clients, the AI handles multiple routine calls: one client confirming their upcoming session (handled automatically), another asking about group therapy options (answered by the AI), and a third inquiring about their progress and next steps.\n\n5:00 PM \u2014 After hours, a prospective client calls about a sudden onset of panic attacks. The AI provides immediate advice on coping strategies, logs an urgent message for the on-call psychologist, and offers to schedule an emergency consultation for the next morning. It also sends an SMS with relevant practice information and a link to your online intake forms.`,
  faqs: [
    { question: "Can an AI receptionist schedule psychology consultations?", answer: "Yes. The AI captures patient concerns, treatment goals, and insurance information, then books initial consultations directly into your SimplePractice calendar." },
    { question: "Does the AI integrate with psychology practice management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like SimplePractice and TherapyNotes to manage appointments, patient records, and communication." },
    { question: "Can the AI answer questions about therapy approaches?", answer: "Yes. The AI can provide information on various therapeutic modalities, such as CBT, DBT, and psychodynamic therapy, and what clients can expect." },
    { question: "Does the AI handle crisis intervention support?", answer: "Yes. The AI operates 24/7, providing immediate advice on crisis resources, logging urgent messages, and escalating critical situations to your on-call team." },
    { question: "How quickly can a psychology practice get started?", answer: "Most psychology practices are live within 48 hours. We configure your consultation intake, integrate with your systems, and customize for your therapeutic offerings." },
    { question: "What does an AI receptionist cost for psychologists?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const Psychologists = () => <IndustryPageTemplate data={data} />;
export default Psychologists;
