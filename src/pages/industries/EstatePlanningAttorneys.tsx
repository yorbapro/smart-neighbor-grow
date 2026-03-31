import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Estate Planning Attorneys",
  slug: "estate-planning-attorneys",
  lossAmount: "160,000",
  lossAmountNum: 160000,
  useCases: ["Trust Consultations", "Document Preparation Intake", "Probate Inquiries", "Power of Attorney FAQ", "Will Updates Scheduling", "Elder Law Referrals"],
  crm: "WealthCounsel",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Family Law Attorneys", slug: "family-law-attorneys" },
    { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" },
    { name: "Personal Injury Lawyers", slug: "personal-injury-lawyers" },
  ],
  whyThisIndustry: "Estate planning and probate matters are deeply personal and often emotionally charged. When a potential client calls about a will, a trust, or a probate issue, they are often at a sensitive point in their lives. Missing that call doesn't just mean losing a high-value case; it means failing a person in their moment of greatest need. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into WealthCounsel — so you capture the client even when your team is in client meetings.",
  painPoints: [
    {
      title: "The 'Window of Sensitivity' for New Leads",
      description: "It takes immense courage for someone to finally pick up the phone and call an estate planning lawyer. If that call goes to voicemail, that 'window of sensitivity' often slams shut. They may not leave a message, and they certainly won't wait for a callback."
    },
    {
      title: "Emotional Sensitivity vs. Administrative Efficiency",
      description: "Your paralegals and associates are focused on filings, depositions, and court appearances. They cannot always provide the immediate, empathetic response a distressed caller requires. A cold, automated menu is the last thing a person in an estate crisis wants to hear."
    },
    {
      title: "High-Stakes Intake and Conflict Checks",
      description: "Every new inquiry requires careful screening for conflicts of interest and case suitability. If your intake process is slow or inconsistent, you risk missing out on high-retainer cases or spending time on leads that aren't a fit."
    },
    {
      title: "High-Value Trust Leads Get Lost",
      description: "Trust consultations and specialized estate planning matters are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another estate planning lawyer who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden probate issue or a will update at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with WealthCounsel."
    }
  ],
  dayInTheLife: `9:15 AM — A potential client calls, distressed and seeking information about a will. The BrightLaunchIQ AI Receptionist answers instantly with a calm, professional tone. It acknowledges the sensitivity of the situation, gathers essential intake data (names of parties for conflict checks, assets involved, urgency), and identifies that this is a high-priority lead.

9:17 AM — The AI checks your lead attorney's calendar and offers a specific time for a confidential initial consultation. The client feels heard and supported, and the appointment is booked. Simultaneously, it sends a secure SMS confirmation with a link to your firm's digital intake questionnaire.

2:00 PM — While your team is in a client meeting, the AI handles multiple routine calls: a current client checking on a filing date (answered via WealthCounsel integration), a process server looking for an address (routed correctly), and a new lead for a trust (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in WealthCounsel — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle estate planning intake calls?", answer: "Yes. The AI captures asset details, family structure, and planning goals — then schedules consultations with the appropriate attorney for trusts, wills, or probate matters." },
    { question: "Does the AI integrate with WealthCounsel?", answer: "Yes. BrightLaunchIQ connects with WealthCounsel to schedule consultations, manage document preparation workflows, and update client records automatically." },
    { question: "Can the AI answer probate questions?", answer: "Yes. The AI provides information about your probate services, timelines, required documents, and initial consultation process based on your configured practice details." },
    { question: "Does the AI handle trust consultation scheduling?", answer: "Yes. The AI qualifies callers, gathers preliminary asset information, and schedules trust consultations directly into your calendar with all relevant details attached." },
    { question: "How quickly can an estate planning firm get started?", answer: "Most estate planning firms are live within 48 hours. We configure intake workflows for trusts, wills, and probate, integrate with WealthCounsel, and customize screening questions." },
    { question: "What does an AI receptionist cost for estate planning firms?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and WealthCounsel integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const EstatePlanningAttorneys = () => <IndustryPageTemplate data={data} />;
export default EstatePlanningAttorneys;
