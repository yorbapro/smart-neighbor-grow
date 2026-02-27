import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Dental Clinics",
  slug: "dental-clinics",
  lossAmount: "200,000",
  lossAmountNum: 200000,
  useCases: ["Emergency Triage", "Appointment Rescheduling", "Insurance FAQ Handling", "New Patient Intake", "Recall & Hygiene Reminders", "After-Hours Emergency Routing"],
  crm: "Dentrix",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Orthodontists", slug: "orthodontists" },
    { name: "Dermatologists", slug: "dermatologists" },
    { name: "Optometrists", slug: "optometrists" },
    { name: "Medical Spas", slug: "medical-spas" },
  ],
  whyThisIndustry: "Dental front desks are some of the busiest in healthcare. Your team is checking patients in, verifying insurance, handling treatment plan questions, and trying to answer the phone — all at the same time. When a new patient calls and gets voicemail, they book with the practice that picks up. BrightLaunchIQ's AI Receptionist answers every call instantly, handles insurance questions, schedules appointments directly into Dentrix, and triages dental emergencies — so your front desk can focus on the patients in front of them.",
  painPoints: [
    {
      title: "Front Desk Is Already Overwhelmed",
      description: "Your team is checking in patients, processing insurance, and handling walk-ins. Incoming calls compete for attention, and new patients lose."
    },
    {
      title: "New Patient Calls Are Your Most Valuable",
      description: "A new patient represents thousands in lifetime value. When that first call goes to voicemail, they don't leave a message — they call the next dentist."
    },
    {
      title: "Insurance Questions Eat Up Phone Time",
      description: "Callers asking 'Do you take my insurance?' tie up your front desk for minutes at a time. AI handles these instantly with your configured plan data."
    },
    {
      title: "Cancellations Create Empty Chairs",
      description: "When patients cancel, your team needs to fill that slot fast. AI manages cancellations, rescheduling, and waitlist placement automatically."
    },
    {
      title: "After-Hours Dental Emergencies Need Triage",
      description: "A broken tooth at 9 PM needs a different response than a routine cleaning request. AI triages by severity and routes true emergencies to your on-call dentist."
    },
    {
      title: "Recall Reminders Fall Behind",
      description: "Hygiene recall is the backbone of practice revenue. When your team is busy, reminder calls don't get made — and patients drift away."
    }
  ],
  dayInTheLife: `8:00 AM — Before the office opens, three patients have already called. The AI answered each one: a new patient booked a cleaning and exam (scheduled into Dentrix), a cancellation was processed and the next person on the waitlist was offered the slot, and an insurance question was answered ("Yes, we accept Delta Dental PPO").

11:30 AM — Your front desk is managing a full waiting room. The phone rings four times in ten minutes. The AI handles all four calls simultaneously: two appointment confirmations, one new patient intake, and one question about your teeth whitening services.

8:45 PM — A parent calls about their child's chipped tooth from a playground fall. The AI asks about the severity, determines it's not a true emergency, reassures the parent, and books the first available appointment for tomorrow morning. The parent gets a text confirmation immediately.

Throughout the day, every call is transcribed and logged in Dentrix — your team sees a clean summary when they arrive each morning.`,
  faqs: [
    { question: "Can an AI receptionist handle dental emergency calls?", answer: "Yes. The AI triages toothaches, broken crowns, and trauma by severity, then routes true emergencies to your on-call dentist while scheduling urgent appointments for everything else." },
    { question: "Does the AI integrate with Dentrix?", answer: "Yes. BrightLaunchIQ connects directly with Dentrix to schedule appointments, verify patient records, and update treatment plans in real time." },
    { question: "Can the AI answer dental insurance questions?", answer: "Yes. The AI provides information about accepted insurance plans, coverage details, and out-of-pocket estimates based on your configured data." },
    { question: "Does the AI handle dental appointment rescheduling?", answer: "Yes. The AI manages cancellations, rescheduling, and waitlist placement without any staff intervention, keeping your chairs full." },
    { question: "How quickly can a dental clinic get started?", answer: "Most dental clinics are live within a few days. We configure emergency triage flows, integrate with Dentrix, and customize the AI for your practice." },
    { question: "What does an AI receptionist cost for dental clinics?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan. That's less than the cost of a part-time front desk hire, and it works 24/7." },
  ],
};

const DentalClinics = () => <IndustryPageTemplate data={data} />;
export default DentalClinics;
