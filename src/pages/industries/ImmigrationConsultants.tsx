import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Immigration Consultants",
  slug: "immigration-consultants",
  lossAmount: "140,000",
  lossAmountNum: 140000,
  useCases: ["Visa Qualification Screening", "Multilingual Intake", "Interview Preparation Scheduling", "Document Checklist FAQ", "Case Status Updates", "Consultation Booking"],
  crm: "Docketwise",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Family Law Attorneys", slug: "family-law-attorneys" },
    { name: "Criminal Defense Lawyers", slug: "criminal-defense-lawyers" },
    { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" },
  ],
  whyThisIndustry: "Immigration law matters are high-stakes and time-sensitive. When a potential client calls about a visa, a green card, or an immigration investigation, they are often in a state of crisis. Missing that call doesn't just mean losing a high-value case; it means failing a person in their moment of greatest need. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Docketwise — so you capture the client even when your team is in court.",
  painPoints: [
    {
      title: "The 'Window of Crisis' for New Leads",
      description: "It takes immense courage for someone to finally pick up the phone and call an immigration lawyer. If that call goes to voicemail, that 'window of crisis' often slams shut. They may not leave a message, and they certainly won't wait for a callback."
    },
    {
      title: "Emotional Sensitivity vs. Administrative Efficiency",
      description: "Your paralegals and associates are focused on filings, depositions, and court appearances. They cannot always provide the immediate, empathetic response a distressed caller requires. A cold, automated menu is the last thing a person in an immigration crisis wants to hear."
    },
    {
      title: "High-Stakes Intake and Conflict Checks",
      description: "Every new inquiry requires careful screening for conflicts of interest and case suitability. If your intake process is slow or inconsistent, you risk missing out on high-retainer cases or spending time on leads that aren't a fit."
    },
    {
      title: "High-Value Visa Leads Get Lost",
      description: "Visa intakes and specialized immigration matters are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another immigration lawyer who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden arrest or an immigration investigation at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Docketwise."
    }
  ],
  dayInTheLife: `9:15 AM — A potential client calls, distressed and seeking information about a visa. The BrightLaunchIQ AI Receptionist answers instantly with a calm, professional tone. It acknowledges the sensitivity of the situation, gathers essential intake data (names of parties for conflict checks, charges involved, urgency), and identifies that this is a high-priority lead.

9:17 AM — The AI checks your lead attorney's calendar and offers a specific time for a confidential initial consultation. The client feels heard and supported, and the appointment is booked. Simultaneously, it sends a secure SMS confirmation with a link to your firm's digital intake questionnaire.

2:00 PM — While your team is in a court appearance, the AI handles multiple routine calls: a current client checking on a hearing date (answered via Docketwise integration), a process server looking for an address (routed correctly), and a new lead for an immigration investigation (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in Docketwise — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle immigration intake calls?", answer: "Yes. The AI conducts multilingual intake conversations, captures visa type, country of origin, and eligibility details — then routes qualified leads to your consultants." },
    { question: "Does the AI integrate with Docketwise?", answer: "Yes. BrightLaunchIQ connects with Docketwise to create new cases, schedule consultations, and manage document checklists automatically." },
    { question: "Can the AI handle multilingual calls?", answer: "Yes. The AI supports multiple languages including Spanish, Mandarin, and more, ensuring non-English-speaking callers receive the same quality intake experience." },
    { question: "Does the AI screen for visa eligibility?", answer: "Yes. The AI asks qualifying questions about visa type, employment status, family ties, and timeline to pre-screen applicants before scheduling attorney consultations." },
    { question: "How quickly can an immigration practice get started?", answer: "Most immigration practices are live within 48 hours. We configure multilingual intake flows, integrate with Docketwise, and customize visa qualification screening." },
    { question: "What does an AI receptionist cost for immigration law firms?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Docketwise integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const ImmigrationConsultants = () => <IndustryPageTemplate data={data} />;
export default ImmigrationConsultants;
