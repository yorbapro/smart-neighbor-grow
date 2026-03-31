import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Urgent Care Clinics",
  slug: "urgent-care-clinics",
  lossAmount: "130,000",
  lossAmountNum: 130000,
  useCases: ["Wait Time Updates", "Appointment Scheduling", "Insurance Verification", "After-Hours Triage", "Follow-Up Reminders", "New Patient Intake"],
  crm: "athenahealth",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Dental Clinics", slug: "dental-clinics" },
    { name: "Chiropractors", slug: "chiropractors" },
    { name: "Physical Therapy Centers", slug: "physical-therapy" }
  ],
  whyThisIndustry: "Urgent care clinics provide essential care for acute illnesses and injuries, often dealing with high-stakes and time-sensitive situations. When a patient has an urgent health concern, they need a quick and professional response. Missing calls for urgent care clinics means lost new patient visits, frustrated patients, and a direct impact on acute health and practice revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into athenahealth — so you capture the patient even when your staff are focused on care.",
  painPoints: [
    {
      title: "Acute Illnesses and Injuries Demand Instant Response",
      description: "Patients seeking urgent care often do so because of sudden illnesses or injuries. If your phone goes unanswered or to voicemail, they will quickly call the next clinic that can see them today."
    },
    {
      title: "Staff Overload During Peak Hours",
      description: "Your front desk staff is often juggling patient check-ins, insurance verifications, and assisting the medical team. They cannot effectively manage a high volume of incoming calls while providing a high-touch experience for in-office patients."
    },
    {
      title: "Inconsistent New Patient Intake and Triage",
      description: "Qualifying new patients and gathering their initial information, including insurance details, is crucial. Without a consistent, intelligent system to handle these inquiries, your team spends valuable time on repetitive data entry."
    },
    {
      title: "High-Value New Patient Leads Get Lost",
      description: "New patient visits and specialized diagnostic services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the patient will find another urgent care clinic who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden illness or injury at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, patient details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with athenahealth."
    }
  ],
  dayInTheLife: `8:30 AM — A new patient calls, needing an urgent visit for a sudden illness. The BrightLaunchIQ AI Receptionist answers instantly, gathers their contact details, insurance provider, and the nature of their acute concern.

8:32 AM — Recognizing a high-priority service request, the AI immediately identifies an immediate opening in your schedule and books the visit, integrating directly with athenahealth. Simultaneously, it sends an SMS to the patient, confirming their appointment and providing a clinic ETA.

10:30 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a client checking the status of a scheduled visit (answered via athenahealth integration), a vendor looking for accounts payable (routed correctly), and a new lead for a specialized diagnostic program (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in athenahealth — providing a comprehensive record for every patient and client without any manual data entry.`,
  faqs: [
    { question: "Can the AI provide wait time updates?", answer: "Yes. It integrates with your system to give callers real-time wait estimates." },
    { question: "Does the AI integrate with athenahealth?", answer: "Yes. BrightLaunchIQ connects with athenahealth to manage scheduling, patient records, and insurance verification automatically." },
    { question: "Can the AI handle urgent care triage?", answer: "Yes. The AI assesses symptom severity and routes true emergencies to your medical team while scheduling urgent visits for less critical cases." },
    { question: "Does the AI verify medical insurance?", answer: "Yes. The AI checks insurance eligibility, coverage details, and copay information based on your configured carrier data." },
    { question: "How quickly can an urgent care clinic go live?", answer: "Most urgent care clinics are live within 48 hours. We configure intake workflows, integrate with athenahealth, and customize for your services." },
    { question: "What does an AI receptionist cost for urgent care clinics?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and athenahealth integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const UrgentCareClinics = () => <IndustryPageTemplate data={data} />;
export default UrgentCareClinics;
