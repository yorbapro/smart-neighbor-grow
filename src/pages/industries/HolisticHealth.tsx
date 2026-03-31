import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Holistic Health",
  slug: "holistic-health",
  lossAmount: "50,000",
  lossAmountNum: 50000,
  useCases: ["Discovery Call Scheduling", "Workshop Registration", "Service FAQ", "Membership Inquiries", "Supplement Reorders", "Retreat Booking"],
  crm: "Jane App",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Chiropractors", slug: "chiropractors" },
    { name: "Physical Therapy Centers", slug: "physical-therapy" },
    { name: "Mental Health Counselors", slug: "mental-health-counselors" },
  ],
  whyThisIndustry: "Holistic health practices provide essential care for overall wellness, often dealing with complex and personalized health concerns. When a patient has a wellness concern or needs a routine consultation, they need a quick and professional response. Missing calls for holistic health practices means lost new patient consultations, frustrated patients, and a direct impact on overall health and practice revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Jane App — so you capture the patient even when your staff are focused on care.",
  painPoints: [
    {
      title: "Wellness Concerns Demand Instant Scheduling",
      description: "Patients seeking holistic health care often do so because of complex health concerns or a desire for personalized wellness. If your front desk is busy or the call goes to voicemail, they will quickly call the next clinic that can see them today."
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
      title: "High-Value Wellness Consultations Get Lost",
      description: "Wellness consultations and specialized treatment programs are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the patient will find another holistic health practitioner who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden wellness concern or a post-treatment question at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, patient details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Jane App."
    }
  ],
  dayInTheLife: `8:30 AM — A new patient calls, needing an urgent consultation for a complex health concern. The BrightLaunchIQ AI Receptionist answers instantly, gathers their contact details, insurance provider, and the nature of their wellness concern.

8:32 AM — Recognizing a high-priority service request, the AI immediately identifies an immediate opening in your schedule and books the consultation, integrating directly with Jane App. Simultaneously, it sends an SMS to the patient, confirming their appointment and providing a clinic ETA.

10:30 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a client checking the status of a scheduled wellness check (answered via Jane App integration), a vendor looking for accounts payable (routed correctly), and a new lead for a specialized wellness program (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in Jane App — providing a comprehensive record for every patient and client without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book holistic health appointments?", answer: "Yes. The AI schedules acupuncture, naturopathic consultations, nutritional counseling, and energy healing sessions directly into your Jane App calendar." },
    { question: "Does the AI integrate with Jane App?", answer: "Yes. BrightLaunchIQ connects with Jane App to manage scheduling, client records, and intake forms automatically." },
    { question: "Can the AI handle workshop registrations?", answer: "Yes. The AI captures attendee details, processes registrations, and provides event information including dates, locations, and pricing." },
    { question: "Does the AI answer questions about holistic services?", answer: "Yes. The AI explains your service offerings, treatment approaches, session durations, and pricing based on your configured practice information." },
    { question: "How quickly can a holistic practice get started?", answer: "Most holistic health practices are live within 48 hours. We configure discovery call workflows, integrate with Jane App, and customize for your modalities." },
    { question: "What does an AI receptionist cost for holistic health practices?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Jane App integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const HolisticHealth = () => <IndustryPageTemplate data={data} />;
export default HolisticHealth;
