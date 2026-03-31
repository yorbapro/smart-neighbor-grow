import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Criminal Defense Lawyers",
  slug: "criminal-defense-lawyers",
  lossAmount: "300,000",
  lossAmountNum: 300000,
  useCases: ["Jail Call Intake", "Arraignment Reminders", "Immediate Case Intake", "Bond Hearing Scheduling", "Case Status Updates", "24/7 Emergency Routing"],
  crm: "PracticePanther",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Personal Injury Lawyers", slug: "personal-injury-lawyers" },
    { name: "Family Law Attorneys", slug: "family-law-attorneys" },
    { name: "Immigration Consultants", slug: "immigration-consultants" },
  ],
  whyThisIndustry: "Criminal defense matters are high-stakes and time-sensitive. When a potential client calls about an arrest, a warrant, or a criminal investigation, they are often in a state of crisis. Missing that call doesn't just mean losing a high-value case; it means failing a person in their moment of greatest need. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into PracticePanther — so you capture the client even when your team is in court.",
  painPoints: [
    {
      title: "The 'Window of Crisis' for New Leads",
      description: "It takes immense courage for someone to finally pick up the phone and call a criminal defense lawyer. If that call goes to voicemail, that 'window of crisis' often slams shut. They may not leave a message, and they certainly won't wait for a callback."
    },
    {
      title: "Emotional Sensitivity vs. Administrative Efficiency",
      description: "Your paralegals and associates are focused on filings, depositions, and court appearances. They cannot always provide the immediate, empathetic response a distressed caller requires. A cold, automated menu is the last thing a person in a criminal crisis wants to hear."
    },
    {
      title: "High-Stakes Intake and Conflict Checks",
      description: "Every new inquiry requires careful screening for conflicts of interest and case suitability. If your intake process is slow or inconsistent, you risk missing out on high-retainer cases or spending time on leads that aren't a fit."
    },
    {
      title: "High-Value Arrest Leads Get Lost",
      description: "Arrest intakes and specialized criminal defense matters are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another criminal defense lawyer who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden arrest or a warrant at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with PracticePanther."
    }
  ],
  dayInTheLife: `9:15 AM — A potential client calls, distressed and seeking information about an arrest. The BrightLaunchIQ AI Receptionist answers instantly with a calm, professional tone. It acknowledges the sensitivity of the situation, gathers essential intake data (names of parties for conflict checks, charges involved, urgency), and identifies that this is a high-priority lead.

9:17 AM — The AI checks your lead attorney's calendar and offers a specific time for a confidential initial consultation. The client feels heard and supported, and the appointment is booked. Simultaneously, it sends a secure SMS confirmation with a link to your firm's digital intake questionnaire.

2:00 PM — While your team is in a court appearance, the AI handles multiple routine calls: a current client checking on a hearing date (answered via PracticePanther integration), a process server looking for an address (routed correctly), and a new lead for a criminal investigation (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in PracticePanther — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle criminal defense intake calls?", answer: "Yes. The AI captures charge details, court dates, custody status, and contact information — then immediately alerts your attorney for urgent cases like active arrests." },
    { question: "Does the AI integrate with PracticePanther?", answer: "Yes. BrightLaunchIQ connects with PracticePanther to create new matters, schedule consultations, and track case deadlines automatically." },
    { question: "Can the AI handle jail calls?", answer: "Yes. The AI is configured to handle collect calls from correctional facilities, capturing essential case details and routing to your on-call attorney immediately." },
    { question: "Does the AI send arraignment reminders?", answer: "Yes. The AI tracks court dates and sends automated reminders to clients about upcoming arraignments, hearings, and required court appearances." },
    { question: "How quickly can a criminal defense firm get started?", answer: "Most criminal defense firms are live within 48 hours. We configure emergency intake protocols, integrate with PracticePanther, and set up 24/7 attorney routing." },
    { question: "What does an AI receptionist cost for criminal defense lawyers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and PracticePanther integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const CriminalDefenseLawyers = () => <IndustryPageTemplate data={data} />;
export default CriminalDefenseLawyers;
