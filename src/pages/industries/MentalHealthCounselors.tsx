import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Mental Health Counselors",
  slug: "mental-health-counselors",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Discreet Intake", "Consultation Scheduling", "Crisis Routing", "Insurance Verification", "Telehealth Setup Inquiries", "After-Hours Support Routing"],
  crm: "SimplePractice",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Chiropractors", slug: "chiropractors" },
    { name: "Holistic Health", slug: "holistic-health" },
    { name: "Physical Therapy Centers", slug: "physical-therapy" },
  ],
  whyThisIndustry: "Mental health counselors provide essential support for individuals, often dealing with sensitive and emotionally charged situations. When a client is seeking help, they need a compassionate and accessible point of contact. Missing calls for mental health counselors means lost new client intakes, frustrated clients, and a direct impact on mental health and practice revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into SimplePractice — so you capture the client even when your counselors are in session.",
  painPoints: [
    {
      title: "Mental Health Inquiries Demand Compassionate Response",
      description: "Clients seeking mental health support are often in distress and seeking immediate help. If your phone goes unanswered or to voicemail, they will quickly call the next counselor on their list."
    },
    {
      title: "Counselors are Focused on Client Care, Not on the Phone",
      description: "Your counselors are often busy in sessions, providing essential support for their clients. They cannot effectively manage a high volume of incoming calls while providing a high-touch experience for in-session clients."
    },
    {
      title: "Inconsistent New Client Intake and Triage",
      description: "Not every call is an emergency. Some are for routine therapy sessions, wellness checks, or prescription refills. Without an intelligent system to pre-qualify leads and schedule appointments, your team spends valuable time on administrative tasks."
    },
    {
      title: "High-Value New Client Leads Get Lost",
      description: "New client intakes and specialized counseling programs are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another counselor who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden crisis or a distress call at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with SimplePractice."
    }
  ],
  dayInTheLife: `8:00 AM — A new client calls, distressed about their sudden anxiety. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about their symptoms, age, and any immediate safety concerns.

8:02 AM — Recognizing a high-priority new client inquiry, the AI immediately dispatches the call details to your on-call counselor, including all collected information. Simultaneously, it sends an SMS to the client, confirming their call has been received and providing an estimated response time.

10:30 AM — While your team is busy in sessions, the AI handles multiple routine calls: a client checking the status of a scheduled session (answered via SimplePractice integration), a vendor looking for accounts payable (routed correctly), and a new lead for a specialized counseling program (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in SimplePractice — providing a comprehensive record for every client and patient without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle mental health intake calls?", answer: "Yes. The AI conducts discreet, empathetic intake conversations, capturing presenting concerns, insurance details, and scheduling preferences while maintaining strict confidentiality." },
    { question: "Does the AI integrate with SimplePractice?", answer: "Yes. BrightLaunchIQ connects with SimplePractice to schedule sessions, manage client records, and handle intake paperwork automatically." },
    { question: "Can the AI route crisis calls appropriately?", answer: "Yes. The AI is configured to identify crisis indicators and immediately routes those calls to your on-call clinician or the 988 Suicide & Crisis Lifeline." },
    { question: "Is the AI HIPAA-ready for therapy practices?", answer: "Yes. BrightLaunchIQ offers HIPAA-ready configurations with encrypted call handling and secure data storage. BAAs are available upon request to meet federal privacy requirements." },
    { question: "How quickly can a counseling practice get started?", answer: "Most counseling practices are live within 48 hours. We configure discreet intake flows, integrate with SimplePractice, and customize crisis routing protocols." },
    { question: "What does an AI receptionist cost for mental health counselors?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and SimplePractice integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const MentalHealthCounselors = () => <IndustryPageTemplate data={data} />;
export default MentalHealthCounselors;
