import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Event Venues",
  slug: "event-venues",
  lossAmount: "300,000",
  lossAmountNum: 300000,
  useCases: ["Venue Tour Scheduling", "Availability & Pricing Inquiries", "Wedding Reception Leads", "Corporate Event Booking", "Vendor Coordination Calls", "Day-Of Event Support"],
  crm: "Tripleseat",
  sectorLabel: "Hospitality & Food",
  similarBusinesses: [
    { name: "Catering Services", slug: "catering-services" },
    { name: "Wedding Planners", slug: "wedding-planners" },
    { name: "Boutique Hotels", slug: "boutique-hotels" },
  ],
  whyThisIndustry: "In the event venue industry, seamless coordination, flexible spaces, and exceptional client experiences are paramount. Event venues rely on a steady stream of new bookings for weddings, corporate events, conferences, and private parties, and a reputation for flawless execution. When a potential client calls, they often need immediate information on availability, capacity, pricing, and services, or to schedule a site visit. Missing that call doesn\u2019t just mean losing a high-value booking; it means failing to capture a crucial opportunity in a competitive market. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Tripleseat \u2014 so you capture the client even when your team is focused on delivering exceptional events.",
  painPoints: [
    {
      title: "The \"Dream Event\" Expectation",
      description: "Clients often call event venues when they are in the midst of planning a significant occasion, with specific dates, guest counts, and visions in mind. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next venue on their list that offers instant information, clear pricing, and seamless booking for tours and consultations."
    },
    {
      title: "Staff are Focused on the \"Event Day,\" Not the Phone",
      description: "Your event staff are constantly on-site, managing current events, coordinating vendors, and ensuring client satisfaction. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your office is overwhelmed or unavailable, new inquiries go unanswered, leading to lost bookings and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Availability and Service Customization",
      description: "Every new inquiry requires detailed information: event type, guest count, preferred date, specific space needs, and desired services (catering, AV, decor). Providing accurate quotes, discussing customization options, and coordinating schedules for site visits and consultations takes time. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads."
    },
    {
      title: "High-Value Event Bookings Get Lost",
      description: "Weddings, corporate conferences, and large private parties are high-value and essential for business stability. If you don\u2019t capture the lead details and schedule a site visit immediately, the client will find another venue who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night event inquiry or a last-minute booking request at 10 PM is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Event Planning",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Tripleseat."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A potential client calls, planning a corporate conference for 150 attendees and needing to check availability for next quarter. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It checks your real-time calendar in your event management software (e.g., Tripleseat, EventPro), provides available dates, and offers to schedule a site visit.\n\n9:05 AM \u2014 The AI then asks about specific event needs (e.g., breakout rooms, AV requirements, catering preferences), adding them to the inquiry notes. The client feels confident in your venue\u2019s efficiency, and the site visit is confirmed via SMS with a link to your digital brochure.\n\n11:00 AM \u2014 While your event coordinators are preparing for an upcoming wedding, the AI handles three simultaneous calls: one client rescheduling their tasting (handled automatically), another asking about your preferred vendor list (answered by the AI), and a third booking a new client for a private party consultation.\n\n5:00 PM \u2014 After your office has closed, a potential client calls needing an urgent quote for a last-minute event. The AI handles the intake, explains your expedited service options, and schedules a call-back for the next morning, sending a professional SMS confirmation with a link to your online inquiry form.\n\nThroughout the day, every call is transcribed, summarized, and logged in Tripleseat \u2014 providing a comprehensive record for every client and event without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle venue inquiries?", answer: "Yes. The AI captures event type, guest count, preferred dates, and budget, then schedules venue tours with your events team." },
    { question: "Does the AI integrate with Tripleseat?", answer: "Yes. BrightLaunchIQ connects with Tripleseat to create event leads, manage tour schedules, and track proposal pipelines automatically." },
    { question: "Can the AI check date availability?", answer: "Yes. The AI accesses your availability calendar and instantly confirms whether requested dates are open, reducing back-and-forth communication." },
    { question: "Does the AI handle corporate event inquiries?", answer: "Yes. The AI captures company name, event type, A/V requirements, and catering needs, then routes corporate leads to your sales team." },
    { question: "How quickly can a venue get started?", answer: "Most venues are live within 48 hours. We configure event packages, integrate with Tripleseat, and customize the AI for your venue\u2019s offerings." },
    { question: "What does an AI receptionist cost for event venues?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Tripleseat integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const EventVenues = () => <IndustryPageTemplate data={data} />;
export default EventVenues;
