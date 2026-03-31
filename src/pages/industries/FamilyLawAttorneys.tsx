import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Family Law Attorneys",
  slug: "family-law-attorneys",
  lossAmount: "280,000",
  lossAmountNum: 280000,
  useCases: ["Divorce Consultation Booking", "Child Custody Intake", "Conflict of Interest Checks", "Mediation Scheduling", "Prenuptial Agreement Leads", "Case Status Updates"],
  crm: "Clio",
  sectorLabel: "Professional Services",
  similarBusinesses: [
    { name: "Criminal Defense Lawyers", slug: "criminal-defense-lawyers" },
    { name: "Estate Planning Attorneys", slug: "estate-planning-attorneys" },
    { name: "Personal Injury Lawyers", slug: "personal-injury-lawyers" },
  ],
  whyThisIndustry: "Family law matters are deeply personal and emotionally charged. When a potential client calls about a divorce, child custody, or a domestic issue, they are often at a breaking point. Missing that call doesn\'t just mean losing a high-value case; it means failing a person in their moment of greatest need. BrightLaunchIQ\'s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Clio — so you capture the client even when your team is focused on case delivery.",
  painPoints: [
    {
      title: "The \'Window of Courage\' for New Leads",
      description: "It takes immense courage for someone to finally pick up the phone and call a divorce lawyer. If that call goes to voicemail, that \'window of courage\' often slams shut. They may not leave a message, and they certainly won\'t wait for a callback—they\'ll call the next firm that will actually listen."
    },
    {
      title: "Emotional Sensitivity vs. Administrative Efficiency",
      description: "Your paralegals and associates are focused on filings, depositions, and court appearances. They cannot always provide the immediate, empathetic response a distressed caller requires. A cold, automated \"Press 1 for Sales\" menu is the last thing a person in a family crisis wants to hear."
    },
    {
      title: "High-Stakes Intake and Conflict Checks",
      description: "Every new inquiry requires careful screening for conflicts of interest and case suitability. If your intake process is slow or inconsistent, you risk missing out on high-retainer cases or, worse, spending time on leads that aren\'t a fit for your firm\'s expertise."
    },
    {
      title: "High-Value Family Law Leads Get Lost",
      description: "Divorce, custody, and specialized family law services are high-value and essential for practice stability. If you don\'t capture the lead details and schedule a consultation immediately, the client will find another firm who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden custody concern or a domestic issue at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Clio."
    }
  ],
  dayInTheLife: `9:15 AM — A potential client calls, distressed and seeking information about filing for divorce. The BrightLaunchIQ AI Receptionist answers instantly with a calm, professional tone. It acknowledges the sensitivity of the situation, gathers essential intake data (names of parties for conflict checks, children involved, urgency), and identifies that this is a high-priority lead.\n\n9:17 AM — The AI checks your lead attorney\'s calendar and offers a specific time for a confidential initial consultation. The client feels heard and supported, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your firm\'s digital intake questionnaire.\n\n2:00 PM — While your team is in a mediation session, the AI handles multiple routine calls: a current client checking on a hearing date (answered via CRM integration), a process server looking for an address (routed correctly), and a new lead for a prenuptial agreement (qualified and scheduled). Every interaction is transcribed and synced with your practice management software (like Clio or MyCase).\n\nThroughout the day, every call is transcribed, summarized, and logged in Clio — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle family law intake?", answer: "Yes. The AI captures family dynamics, children involved, and urgency — then schedules consultations with the appropriate attorney on your team." },
    { question: "Does the AI integrate with Clio?", answer: "Yes. BrightLaunchIQ connects with Clio to create new matters, schedule consultations, and update client records automatically." },
    { question: "Can the AI perform initial conflict checks?", answer: "Yes. The AI captures names of all involved parties during intake, allowing your team to run conflict checks before the first consultation." },
    { question: "Does the AI handle emergency custody calls?", answer: "Yes. The AI triages family matters by urgency and escalates time-sensitive filings to your on-call legal team immediately." },
    { question: "How quickly can a family law firm get started?", answer: "Most firms are live within 48 hours. We configure intake workflows, integrate with Clio, and customize for your firm\'s specific practice areas." },
    { question: "What does an AI receptionist cost for family law firms?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Clio integration. That\'s a fraction of the cost of a full-time receptionist." },
  ],
};

const FamilyLawAttorneys = () => <IndustryPageTemplate data={data} />;
export default FamilyLawAttorneys;
