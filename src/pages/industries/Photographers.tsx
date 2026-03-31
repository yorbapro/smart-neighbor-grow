import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Photographers",
  slug: "photographers",
  lossAmount: "55,000",
  lossAmountNum: 55000,
  useCases: ["Booking Inquiries", "Package Options", "Availability Checks", "Session Scheduling", "Print Orders", "Album Design"],
  crm: "HoneyBook",
  sectorLabel: "Creative & Events",
  similarBusinesses: [
    { name: "Event Planners", slug: "event-planners" },
    { name: "Videographers", slug: "videographers" },
    { name: "Wedding Venues", slug: "wedding-venues" },
  ],
  whyThisIndustry: "In the creative world of photography, capturing moments, managing bookings, and delivering exceptional client experiences are key to a thriving business. Photographers rely on a steady stream of new client inquiries, efficient scheduling of shoots, and a reputation for stunning imagery. When a prospective client calls, they often need immediate assistance with understanding package options, checking availability, inquiring about pricing, or scheduling a consultation. Missing that call doesn\u2019t just mean losing a potential client; it can mean missing out on capturing life\u2019s most precious moments and impacting the photographer\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Moment-Driven\" Expectation",
      description: "Clients often call when they are planning significant life events (e.g., weddings, engagements, family portraits) and are looking for a photographer to capture those memories. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another photographer who can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Photographers are Focused on \"Shoots,\" Not the Phone",
      description: "Your photographers are dedicated to scouting locations, composing shots, editing images, and delivering beautiful galleries. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your studio is understaffed or busy with existing client needs, new inquiries go unanswered, leading to lost bookings and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Package Options and Scheduling Inquiries",
      description: "\"What\u2019s included in your wedding package?\" \"Do you offer mini-sessions for families?\" \"Are you available on October 15th?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book consultations directly into your CRM, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, interested in booking an engagement photoshoot. The BrightLaunchIQ AI Receptionist answers instantly with a friendly, professional tone. It guides the caller through a quick intake, gathers details about their vision for the shoot, explains your package options, and checks your availability. It then books a consultation directly into your studio\u2019s calendar.\n\n1:00 PM \u2014 While you\u2019re out on a photoshoot, the AI handles multiple routine calls: one client confirming their upcoming portrait session (handled automatically), another asking about print options (answered by the AI), and a third inquiring about album design services.\n\n5:00 PM \u2014 After hours, a prospective client calls about a last-minute event photography need. The AI provides immediate advice on availability, logs an urgent message for you, and offers to schedule an emergency consultation for the next morning. It also sends an SMS with relevant studio information and a link to your online portfolio.`,
  faqs: [
    { question: "Can an AI receptionist book photography sessions?", answer: "Yes. The AI captures client needs, desired dates, and package preferences, then books consultations and sessions directly into your HoneyBook calendar." },
    { question: "Does the AI integrate with photography studio management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like HoneyBook and ShootProof to manage client intake, booking details, and communication." },
    { question: "Can the AI answer questions about package options and pricing?", answer: "Yes. The AI can provide detailed information on wedding packages, portrait sessions, pricing, and what clients can expect from your services." },
    { question: "Does the AI handle print orders and album design inquiries?", answer: "Yes. The AI can guide clients through the print ordering process, answer questions about album options, and route complex requests to your design team." },
    { question: "How quickly can a photography business get started?", answer: "Most photography businesses are live within 48 hours. We configure your service offerings, integrate with your systems, and customize for your unique artistic style." },
    { question: "What does an AI receptionist cost for photographers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time studio assistant." },
  ],
};

const Photographers = () => <IndustryPageTemplate data={data} />;
export default Photographers;
