import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Physical Therapy Centers",
  slug: "physical-therapy",
  lossAmount: "95,000",
  lossAmountNum: 95000,
  useCases: ["New Patient Intake", "Post-Op Scheduling", "Insurance FAQ", "Recurring Session Booking", "Home Exercise Plan Inquiries", "Referral Coordination"],
  crm: "WebPT",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Chiropractors", slug: "chiropractors" },
    { name: "Holistic Health", slug: "holistic-health" },
    { name: "Dental Clinics", slug: "dental-clinics" },
  ],
  whyThisIndustry: "Physical therapy clinics rely on consistent patient attendance and efficient scheduling to achieve optimal patient outcomes. When a patient is recovering from an injury or surgery, they need a reliable and accessible point of contact. Missing calls means losing out on new patient evaluations and recurring therapy sessions, directly impacting your clinic's growth and patient recovery. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into WebPT — so you capture the patient even when your staff are focused on care.",
  painPoints: [
    {
      title: "Post-Surgical and Acute Injury Patients Demand Instant Scheduling",
      description: "Patients seeking physical therapy often do so because of recent surgery or an acute injury. If your front desk is busy or the call goes to voicemail, they will quickly call the next clinic that can see them today."
    },
    {
      title: "Staff Overload During Peak Hours",
      description: "Your front desk staff is often juggling patient check-ins, insurance verifications, and assisting the therapists. They cannot effectively manage a high volume of incoming calls while providing a high-touch experience for in-clinic patients."
    },
    {
      title: "Inconsistent New Patient Intake and Insurance Verification",
      description: "Qualifying new patients and gathering their initial information, including insurance details, is crucial. Without a consistent, intelligent system to handle these inquiries, your team spends valuable time on repetitive data entry."
    },
    {
      title: "High-Value Recurring Therapy Sessions Get Lost",
      description: "Long-term therapy plans are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the patient will find another clinic who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden injury or a post-op concern at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, patient details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with WebPT."
    }
  ],
  dayInTheLife: `8:30 AM — A new patient calls, needing a post-surgical evaluation for their knee. The BrightLaunchIQ AI Receptionist answers instantly, gathers their contact details, insurance provider, and the nature of their surgery.

8:32 AM — Recognizing a high-priority service request, the AI immediately identifies an immediate opening in your schedule and books the evaluation, integrating directly with WebPT. Simultaneously, it sends an SMS to the patient, confirming their appointment and providing a clinic ETA.

10:00 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a regular patient rescheduling their weekly therapy session (answered via WebPT integration), a vendor looking for accounts payable (routed correctly), and a new lead for a sports rehabilitation program (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in WebPT — providing a comprehensive record for every patient and client without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle physical therapy intake?", answer: "Yes. The AI captures injury details, referral information, insurance data, and scheduling preferences, then books the initial evaluation directly into your calendar." },
    { question: "Does the AI integrate with WebPT?", answer: "Yes. BrightLaunchIQ connects with WebPT to schedule sessions, manage patient records, and coordinate care plans automatically." },
    { question: "Can the AI answer physical therapy insurance questions?", answer: "Yes. The AI provides coverage details, visit limits, co-pay estimates, and authorization requirements based on your configured insurance data." },
    { question: "Does the AI manage recurring PT appointments?", answer: "Yes. The AI schedules multi-week treatment plans, handles rescheduling, and sends session reminders to reduce no-shows and dropoffs." },
    { question: "How fast can a PT center go live?", answer: "Most physical therapy centers are live within 48 hours. We configure intake workflows, integrate with WebPT, and customize for your specialties." },
    { question: "What does an AI receptionist cost for physical therapy centers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and WebPT integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const PhysicalTherapy = () => <IndustryPageTemplate data={data} />;
export default PhysicalTherapy;
