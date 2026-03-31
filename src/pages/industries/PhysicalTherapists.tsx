import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Physical Therapists",
  slug: "physical-therapists",
  lossAmount: "80,000",
  lossAmountNum: 80000,
  useCases: ["Initial Consultation Scheduling", "Treatment Plan Inquiries", "Insurance Verification", "Appointment Reminders", "Home Exercise Program FAQs", "Referral Coordination"],
  crm: "WebPT",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Chiropractors", slug: "chiropractors" },
    { name: "Massage Therapists", slug: "massage-therapists" },
    { name: "Acupuncturists", slug: "acupuncture-clinics" },
  ],
  whyThisIndustry: "In the rehabilitative field of physical therapy, personalized treatment plans, efficient scheduling, and clear communication with patients are crucial for recovery and improved mobility. Physical therapists rely on a steady stream of new patient referrals, consistent appointment attendance, and a reputation for helping patients regain strength and function. When a prospective patient calls, they often need immediate assistance with scheduling an initial consultation, asking about treatment options, inquiring about insurance coverage, or understanding their recovery journey. Missing that call doesn\u2019t just mean losing a potential patient; it can lead to delayed recovery and impact the clinic\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Urgent Recovery\" Expectation",
      description: "Patients often call when they are in pain or recovering from an injury, needing immediate relief and guidance. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another physical therapy clinic that can offer instant, empathetic communication and clear information about their treatment options."
    },
    {
      title: "Therapists are Focused on \"Patients,\" Not the Phone",
      description: "Your physical therapists and clinical staff are dedicated to providing direct patient care, conducting assessments, and guiding patients through exercises. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person patient care, new inquiries go unanswered, leading to lost consultations and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Insurance-Related Inquiries",
      description: "\"Do you treat back pain?\" \"How many sessions will my insurance cover?\" \"When can I schedule my first appointment?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your EHR/PMS, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new patient calls, referred by their doctor for knee rehabilitation. The BrightLaunchIQ AI Receptionist answers instantly with a compassionate, professional tone. It guides the caller through a quick intake, gathers details about their injury, explains your treatment approach, and checks their insurance eligibility. It then books the initial consultation directly into your practice management system.\n\n1:00 PM \u2014 While your therapists are working with patients, the AI handles multiple routine calls: one patient confirming their upcoming session (handled automatically), another asking about home exercises (answered by the AI), and a third inquiring about their progress and next steps.\n\n5:00 PM \u2014 After hours, a prospective patient calls about a recent sports injury. The AI provides immediate advice on pain management, logs an urgent message for a therapist, and offers to schedule an emergency consultation for the next morning. It also sends an SMS with relevant clinic information and a link to your online intake forms.`,
  faqs: [
    { question: "Can an AI receptionist schedule physical therapy consultations?", answer: "Yes. The AI captures injury details, treatment goals, and insurance information, then books initial consultations directly into your WebPT calendar." },
    { question: "Does the AI integrate with physical therapy practice management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like WebPT and TheraNest to manage appointments, patient records, and communication." },
    { question: "Can the AI answer questions about treatment options?", answer: "Yes. The AI can provide information on various treatment modalities, rehabilitation programs, and what patients can expect during their recovery journey." },
    { question: "Does the AI verify insurance coverage for physical therapy?", answer: "Yes. The AI checks insurance eligibility, coverage details, and copay information based on your configured carrier data." },
    { question: "How quickly can a physical therapy clinic get started?", answer: "Most physical therapy clinics are live within 48 hours. We configure consultation intake, integrate with your systems, and customize for your treatment offerings." },
    { question: "What does an AI receptionist cost for physical therapists?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const PhysicalTherapists = () => <IndustryPageTemplate data={data} />;
export default PhysicalTherapists;
