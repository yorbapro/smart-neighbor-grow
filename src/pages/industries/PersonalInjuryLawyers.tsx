import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Personal Injury Lawyers",
  slug: "personal-injury-lawyers",
  lossAmount: "500,000",
  lossAmountNum: 500000,
  useCases: ["Accident Intake", "Statute of Limitations Screening", "Consultation Booking", "Case Status Updates", "Referral Routing", "After-Hours Emergency Intake"],
  crm: "Clio",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Family Law Attorneys", slug: "family-law-attorneys" },
    { name: "Criminal Defense Lawyers", slug: "criminal-defense-lawyers" },
    { name: "Estate Planning Attorneys", slug: "estate-planning-attorneys" },
    { name: "Immigration Consultants", slug: "immigration-consultants" },
  ],
  whyThisIndustry: "In personal injury law, speed wins cases. When someone is injured in an accident, they call multiple firms — and the first firm to respond with a real conversation almost always signs the client. If your phones go to voicemail at 7 PM on a Friday, that lead is gone. BrightLaunchIQ's AI Receptionist answers every call instantly, captures accident details, screens for statute of limitations issues, and books consultations directly into Clio — giving your firm first-responder advantage around the clock.",
  painPoints: [
    {
      title: "Speed-to-Lead Determines Who Signs the Client",
      description: "Injured callers contact multiple firms. The first firm that has a real conversation — not voicemail — wins the case the majority of the time."
    },
    {
      title: "After-Hours Calls Are Your Highest-Value Leads",
      description: "Accidents don't happen during business hours. Evening and weekend calls from accident victims are often the most valuable leads your firm will receive."
    },
    {
      title: "Intake Requires Detailed, Accurate Information",
      description: "Accident date, injury type, insurance details, and jurisdiction all need to be captured correctly the first time. Incomplete intake delays case evaluation."
    },
    {
      title: "Statute of Limitations Creates Urgency",
      description: "Cases approaching statutory deadlines need immediate attorney attention. A missed call on a time-sensitive case can mean permanent loss of the client's right to sue."
    },
    {
      title: "Paralegals and Staff Are Focused on Active Cases",
      description: "Your team is managing discovery, depositions, and court filings. New intake calls compete with active case work for their attention."
    },
    {
      title: "Advertising Spend Is Wasted on Missed Calls",
      description: "Personal injury firms spend heavily on advertising. Every call that goes to voicemail is ad spend with zero return."
    }
  ],
  dayInTheLife: `6:15 PM — A car accident victim calls your firm after finding you on Google. Your office closed at 5:30, but the AI receptionist answers on the first ring. It captures the accident date, injury description, other parties involved, and insurance information. The caller is booked for a consultation at 9 AM tomorrow, and your lead attorney receives an immediate notification with the full intake summary.

8:30 AM — Your attorney reviews the overnight intake in Clio before the consultation. All the details are there — no phone tag needed. The consultation converts to a signed retainer.

2:00 PM — Three calls come in while your paralegal is in a deposition prep meeting. The AI handles all three: one is a new lead from a slip-and-fall (intake completed, consultation booked), one is an existing client checking case status (provided an update based on configured responses), and one is a referral from another attorney (captured and flagged for partner review).

11:15 PM — A motorcycle accident victim calls from the hospital. The AI captures the critical details, identifies the urgency, and routes the call directly to your on-call attorney's cell phone. The client is signed before they leave the ER.`,
  faqs: [
    { question: "Can an AI receptionist handle personal injury intake calls?", answer: "Yes. The AI captures accident details, injury severity, insurance information, and contact details — then immediately routes qualified leads to your attorneys for consultation." },
    { question: "Does the AI integrate with Clio?", answer: "Yes. BrightLaunchIQ connects directly with Clio to create new matters, schedule consultations, and update case records in real time." },
    { question: "Can the AI screen cases for statute of limitations?", answer: "Yes. The AI asks qualifying questions about incident dates and jurisdiction, flagging cases that may be approaching statutory deadlines for immediate attorney review." },
    { question: "Does the AI handle after-hours accident calls?", answer: "Yes. The AI operates 24/7, capturing critical accident details and routing urgent cases to your on-call attorney while scheduling non-urgent consultations for business hours." },
    { question: "How quickly can a personal injury firm get started?", answer: "Most personal injury firms are live within a few days. We configure intake workflows, integrate with Clio, and customize screening questions for your practice areas." },
    { question: "What does an AI receptionist cost for law firms?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan. Given that a single signed personal injury case can be worth tens of thousands in fees, the ROI is typically immediate." },
  ],
};

const PersonalInjuryLawyers = () => <IndustryPageTemplate data={data} />;
export default PersonalInjuryLawyers;
