import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Optometrists",
  slug: "optometrists",
  lossAmount: "65,000",
  lossAmountNum: 65000,
  useCases: ["Eye Exam Scheduling", "Contact Lens Reorders", "Insurance Verification", "Frame Selection Appointments", "Prescription Inquiries", "Emergency Eye Care Routing"],
  crm: "RevolutionEHR",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Dental Clinics", slug: "dental-clinics" },
    { name: "Dermatologists", slug: "dermatologists" },
    { name: "Chiropractors", slug: "chiropractors" },
  ],
  whyThisIndustry: "In the field of optometry, clear vision, precise diagnoses, and excellent patient care are crucial for maintaining eye health. Optometrists rely on a steady stream of new patients, efficient scheduling of eye exams, and a reputation for providing comprehensive vision services. When a patient calls, they often need immediate assistance with scheduling an eye exam, asking about insurance coverage, ordering contact lenses, or inquiring about specific eye conditions. Missing that call doesn\u2019t just mean losing a patient; it can lead to delayed care and impact the practice\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Clear Vision\" Expectation",
      description: "Patients often call when they are experiencing vision problems, due for a routine eye exam, or need to order new eyewear. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another optometry practice that can offer instant, seamless communication and clear information about their needs."
    },
    {
      title: "Optometrists are Focused on \"Eyes,\" Not the Phone",
      description: "Your optometrists and optical staff are dedicated to performing eye exams, fitting contact lenses, and assisting patients with eyewear selection. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person patient care, new inquiries go unanswered, leading to lost appointments and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Insurance-Related Inquiries",
      description: "\"Do you accept my vision insurance?\" \"How much is a comprehensive eye exam?\" \"When can I get an appointment for a contact lens fitting?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your EHR/PMS, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new patient calls, interested in scheduling a comprehensive eye exam. The BrightLaunchIQ AI Receptionist answers instantly with a professional, helpful tone. It guides the caller through a quick intake, gathers details about their vision concerns, explains your services, and checks their insurance eligibility. It then books the eye exam directly into your practice management system.\n\n1:00 PM \u2014 While your optometrists are seeing patients, the AI handles multiple routine calls: one patient confirming their upcoming appointment (handled automatically), another asking about the status of their new glasses order (answered by the AI), and a third inquiring about contact lens reorders.\n\n5:00 PM \u2014 After hours, a patient calls about a sudden change in vision. The AI provides immediate advice on what to do, logs an urgent message for the on-call optometrist, and offers to connect them with an emergency line if the situation requires immediate attention. It also sends an SMS with relevant practice information and a link to your patient portal.`,
  faqs: [
    { question: "Can an AI receptionist schedule eye exams?", answer: "Yes. The AI books comprehensive eye exams, contact lens fittings, and follow-up visits directly into your RevolutionEHR calendar." },
    { question: "Does the AI integrate with EHR/PMS systems?", answer: "Yes. BrightLaunchIQ connects with leading systems like RevolutionEHR and Eyefinity to manage appointments, patient records, and communication." },
    { question: "Can the AI handle contact lens reorders?", answer: "Yes. The AI captures lens brand, prescription details, and quantity, then processes the reorder or routes it to your dispensary team." },
    { question: "Does the AI verify vision insurance?", answer: "Yes. The AI checks insurance eligibility, coverage details, and copay information based on your configured carrier data." },
    { question: "How quickly can an optometry practice get started?", answer: "Most optometry practices are live within 48 hours. We configure exam scheduling, integrate with your systems, and customize for your services." },
    { question: "What does an AI receptionist cost for optometrists?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const Optometrists = () => <IndustryPageTemplate data={data} />;
export default Optometrists;
