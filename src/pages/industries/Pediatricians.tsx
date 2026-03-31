import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";
const data: IndustryPageData = {
  name: "Pediatricians",
  slug: "pediatricians",
  lossAmount: "75,000",
  lossAmountNum: 75000,
  useCases: ["New Patient Intake", "Sick Child Triage", "Vaccination Inquiries", "Appointment Scheduling", "Parental FAQs", "Referral Coordination"],
  crm: "Epic",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Urgent Care Clinics", slug: "urgent-care-clinics" },
    { name: "Family Doctors", slug: "family-doctors" },
    { name: "Dermatologists", slug: "dermatologists" },
  ],
  whyThisIndustry: "In the nurturing environment of pediatric practices, compassionate care, efficient scheduling, and clear communication with parents are paramount. Pediatricians rely on a steady stream of well-child visits, timely sick appointments, and a reputation for providing excellent care to children. When a parent calls, they often need immediate assistance with scheduling an appointment, asking about symptoms, refilling prescriptions, or getting advice on child health. Missing that call doesn\u2019t just mean losing a patient; it can lead to delayed care and impact the practice\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Worried Parent\" Urgency",
      description: "Parents often call when their child is sick or they have urgent health concerns. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another pediatric practice that can offer instant, seamless communication and clear information about their child\u2019s needs."
    },
    {
      title: "Medical Staff are Focused on \"Patients,\" Not the Phone",
      description: "Your pediatricians and nurses are dedicated to examining, diagnosing, and treating children. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person patient care, new inquiries go unanswered, leading to lost appointments and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Symptom-Related Inquiries",
      description: "\"My child has a fever, should I bring them in?\" \"Can I get a same-day appointment for a cough?\" \"What are the vaccination schedules?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your EHR/PMS, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new parent calls, concerned about their child\u2019s rash. The BrightLaunchIQ AI Receptionist answers instantly with a calm, empathetic tone. It guides the caller through a quick intake, gathers details about the symptoms, offers preliminary advice based on your practice\u2019s protocols, and schedules an urgent appointment. It then books the appointment directly into your practice management system.\n\n1:00 PM \u2014 While your medical staff are seeing patients, the AI handles multiple routine calls: one parent confirming their child\u2019s well-child visit (handled automatically), another asking about school physical forms (answered by the AI), and a third inquiring about prescription refills.\n\n5:00 PM \u2014 After hours, a parent calls about their child\u2019s persistent cough. The AI provides immediate advice on home care, logs an urgent message for the on-call pediatrician, and offers to connect them with an emergency line if the situation requires immediate attention. It also sends an SMS with relevant practice information and a link to your patient portal.`,
  faqs: [
    { question: "Can an AI receptionist handle sick child triage for pediatric practices?", answer: "Yes. The AI is programmed to gather essential symptoms and guide parents through a quick triage, recommending appropriate next steps." },
    { question: "Does the AI integrate with EHR/PMS systems?", answer: "Yes. BrightLaunchIQ connects with leading systems like Epic, Cerner, and Athenahealth to manage appointments, patient records, and communication." },
    { question: "Can the AI schedule well-child visits?", answer: "Yes. The AI checks your pediatrician\u2019s availability and books appointments directly into your calendar, sending secure confirmations to parents." },
    { question: "Does the AI handle vaccination inquiries?", answer: "Yes. The AI can answer questions about vaccination schedules, requirements, and your practice\u2019s policies." },
    { question: "How quickly can a pediatric practice get started?", answer: "Most practices are live within 48 hours. We configure your service offerings, integrate with your EHR/PMS system, and customize for your specific needs." },
    { question: "What does an AI receptionist cost for pediatric practices?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, new patient intake, and EHR/PMS integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};
const Pediatricians = () => <IndustryPageTemplate data={data} />;
export default Pediatricians;
