import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Dermatologists",
  slug: "dermatologists",
  lossAmount: "140,000",
  lossAmountNum: 140000,
  useCases: ["Procedure Scheduling", "Skincare FAQ", "Referral Management", "Cosmetic Consultation Intake", "Insurance Pre-Authorization", "Post-Procedure Follow-Ups"],
  crm: "Modernizing Medicine",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Medical Spas", slug: "medical-spas" },
    { name: "Dental Clinics", slug: "dental-clinics" },
    { name: "Optometrists", slug: "optometrists" },
  ],
  whyThisIndustry: "Dermatology practices provide essential care for skin health, often dealing with urgent and potentially serious conditions. When a patient has a skin concern, they need a quick and professional response. Missing calls for dermatologists means lost new patient consultations, frustrated patients, and a direct impact on skin health and practice revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Modernizing Medicine — so you capture the patient even when your staff are focused on care.",
  painPoints: [
    {
      title: "Skin Concerns Demand Instant Scheduling",
      description: "Patients seeking dermatological care often do so because of sudden skin changes or discomfort. If your front desk is busy or the call goes to voicemail, they will quickly call the next clinic that can see them today."
    },
    {
      title: "Staff Overload During Peak Hours",
      description: "Your front desk staff is often juggling patient check-ins, insurance verifications, and assisting the doctor. They cannot effectively manage a high volume of incoming calls while providing a high-touch experience for in-office patients."
    },
    {
      title: "Inconsistent New Patient Intake and Insurance Verification",
      description: "Qualifying new patients and gathering their initial information, including insurance details, is crucial. Without a consistent, intelligent system to handle these inquiries, your team spends valuable time on repetitive data entry."
    },
    {
      title: "High-Value Cosmetic Consultations Get Lost",
      description: "Cosmetic consultations and specialized treatment programs are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the patient will find another dermatologist who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden skin reaction or a post-procedure concern at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, patient details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Modernizing Medicine."
    }
  ],
  dayInTheLife: `8:30 AM — A new patient calls, needing an urgent consultation for a sudden skin rash. The BrightLaunchIQ AI Receptionist answers instantly, gathers their contact details, insurance provider, and the nature of their skin concern.

8:32 AM — Recognizing a high-priority service request, the AI immediately identifies an immediate opening in your schedule and books the consultation, integrating directly with Modernizing Medicine. Simultaneously, it sends an SMS to the patient, confirming their appointment and providing a clinic ETA.

10:30 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a client checking the status of a scheduled procedure (answered via Modernizing Medicine integration), a vendor looking for accounts payable (routed correctly), and a new lead for a specialized cosmetic program (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in Modernizing Medicine — providing a comprehensive record for every patient and client without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist schedule dermatology appointments?", answer: "Yes. The AI books skin checks, cosmetic consultations, Mohs surgery follow-ups, and acne treatment visits directly into your calendar." },
    { question: "Does the AI integrate with Modernizing Medicine?", answer: "Yes. BrightLaunchIQ connects with Modernizing Medicine to manage scheduling, patient records, and referral tracking automatically." },
    { question: "Can the AI answer skincare product questions?", answer: "Yes. The AI provides information about your recommended skincare lines, product availability, and pricing based on your configured catalog." },
    { question: "Does the AI handle dermatology referrals?", answer: "Yes. The AI captures referring physician details, diagnosis codes, and urgency level, then creates the referral record in your system." },
    { question: "How quickly can a dermatology practice get started?", answer: "Most dermatology practices are live within 48 hours. We configure procedure scheduling, integrate with Modernizing Medicine, and customize for your specialties." },
    { question: "What does an AI receptionist cost for dermatologists?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Modernizing Medicine integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const Dermatologists = () => <IndustryPageTemplate data={data} />;
export default Dermatologists;
