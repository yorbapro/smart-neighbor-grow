import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Chiropractors",
  slug: "chiropractors",
  lossAmount: "80,000",
  lossAmountNum: 80000,
  useCases: ["New Patient Consultations", "Recurring Appointment Booking", "Care Plan Reminders", "Insurance Verification", "Walk-In Availability", "After-Hours Inquiries"],
  crm: "ChiroTouch",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Physical Therapy Centers", slug: "physical-therapy" },
    { name: "Holistic Health", slug: "holistic-health" },
    { name: "Dental Clinics", slug: "dental-clinics" },
  ],
  whyThisIndustry: "Chiropractic practices thrive on patient retention and efficient scheduling. When a patient is in pain, they need an immediate appointment. Missing calls means losing out on new patient intakes and recurring wellness visits, directly impacting your practice's growth and patient outcomes. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into ChiroTouch — so you capture the patient even when your front desk is busy.",
  painPoints: [
    {
      title: "Acute Pain Demands Instant Scheduling",
      description: "Patients seeking chiropractic care often do so because of sudden back or neck pain. If your front desk is busy or the call goes to voicemail, they will quickly call the next clinic that can see them today."
    },
    {
      title: "Staff Overload During Peak Hours",
      description: "Your front desk staff is often juggling patient check-ins, insurance verifications, and assisting the doctor. They cannot effectively manage a high volume of incoming calls while providing a high-touch experience for in-office patients."
    },
    {
      title: "Inconsistent New Patient Intake",
      description: "Qualifying new patients and gathering their initial information is crucial. Without a consistent, intelligent system to handle these inquiries, your team spends valuable time on repetitive data entry."
    },
    {
      title: "High-Value Wellness Care Leads Get Lost",
      description: "Long-term wellness care plans are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the patient will find another chiropractor who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden 'thrown-out' back at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, patient details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with ChiroTouch."
    }
  ],
  dayInTheLife: `8:30 AM — A new patient calls, suffering from a sudden "thrown-out" back. The BrightLaunchIQ AI Receptionist answers instantly, gathers their contact details, insurance provider, and the nature of their pain.

8:32 AM — Recognizing a high-priority service request, the AI immediately identifies an immediate opening in your schedule and books the appointment, integrating directly with ChiroTouch. Simultaneously, it sends an SMS to the patient, confirming their appointment and providing a clinic ETA.

10:00 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a regular patient rescheduling their weekly adjustment (answered via ChiroTouch integration), a vendor looking for accounts payable (routed correctly), and a new lead for a wellness care plan (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in ChiroTouch — providing a comprehensive record for every patient and lead without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book chiropractic appointments?", answer: "Yes. The AI schedules new patient consultations, recurring adjustments, and follow-up visits directly into your ChiroTouch calendar." },
    { question: "Does the AI integrate with ChiroTouch?", answer: "Yes. BrightLaunchIQ connects with ChiroTouch to manage scheduling, patient records, and care plan reminders automatically." },
    { question: "Can the AI handle care plan reminders?", answer: "Yes. The AI proactively reminds patients about upcoming appointments, overdue adjustments, and care plan milestones to reduce no-shows." },
    { question: "Does the AI answer chiropractic insurance questions?", answer: "Yes. The AI provides information about accepted plans, coverage limits, and co-pay estimates based on your configured insurance data." },
    { question: "How fast can a chiropractic office go live?", answer: "Most chiropractic offices are live within 48 hours. We configure intake workflows, integrate with ChiroTouch, and customize for your practice." },
    { question: "What does an AI receptionist cost for chiropractors?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and ChiroTouch integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const Chiropractors = () => <IndustryPageTemplate data={data} />;
export default Chiropractors;
