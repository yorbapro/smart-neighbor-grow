import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Boutique Hotels",
  slug: "boutique-hotels",
  lossAmount: "250,000",
  lossAmountNum: 250000,
  useCases: ["Room Reservation Booking", "Availability & Rate Inquiries", "Special Request Handling", "Group Block Coordination", "Concierge Service Requests", "Event Space Inquiries"],
  crm: "Cloudbeds",
  sectorLabel: "Hospitality & Food",
  similarBusinesses: [
    { name: "Event Venues", slug: "event-venues" },
    { name: "Wedding Planners", slug: "wedding-planners" },
    { name: "Catering Services", slug: "catering-services" },
  ],
  whyThisIndustry: "In the competitive hospitality landscape, boutique hotels thrive on offering unique experiences, personalized service, and a distinct ambiance. These establishments rely on efficient reservation management, attentive guest services, and a reputation for creating memorable stays. When a potential guest calls, they often seek information on room availability, unique amenities, local recommendations, or to make a reservation. Missing that call doesn\u2019t just mean losing a booking; it means failing to extend your hotel\u2019s unique charm and service from the very first interaction. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Cloudbeds \u2014 so you capture the client even when your team is focused on delivering exceptional guest experiences.",
  painPoints: [
    {
      title: "The \"Curated Experience\" Expectation",
      description: "Guests often call boutique hotels seeking a more intimate and tailored experience than large chain hotels. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next distinctive hotel on their list that offers instant, knowledgeable assistance and seamless booking."
    },
    {
      title: "Staff are Focused on the \"Guest Experience,\" Not the Phone",
      description: "Your hotel staff are dedicated to providing exceptional service to current guests \u2013 managing check-ins, fulfilling requests, and curating local experiences. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is overwhelmed or unavailable, new inquiries go unanswered, leading to lost bookings and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Room Availability and Amenity FAQs",
      description: "Every new inquiry requires detailed information: specific room types, availability for certain dates, unique hotel features, dining options, and local attractions. Managing reservations, especially during peak seasons, and answering repetitive questions takes valuable time. A slow or inconsistent intake process risks losing a guest who needs immediate confirmation or spending valuable time on unqualified inquiries."
    },
    {
      title: "High-Value Bookings Get Lost",
      description: "Suite reservations, group blocks, and event space inquiries are high-value and essential for business stability. If you don\u2019t capture the lead details and book immediately, the client will find another boutique hotel who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night reservation inquiry or a special event request at 10 PM is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Cloudbeds."
    }
  ],
  dayInTheLife: `2:00 PM \u2014 A potential guest calls, inquiring about a suite for a special anniversary weekend next month. The BrightLaunchIQ AI Receptionist answers instantly with a sophisticated, professional tone. It checks your real-time room availability in your property management system (e.g., Opera, Cloudbeds), provides details on available suites, and offers to make a reservation.\n\n2:05 PM \u2014 The AI then asks about any special requests or preferences (e.g., champagne on arrival, dinner reservations), adding them to the reservation notes. The guest feels confident in your hotel\u2019s efficiency and personalized service, and the reservation is confirmed via SMS with a link to your digital concierge guide.\n\n4:00 PM \u2014 While your front desk is managing check-ins, the AI handles three simultaneous calls: one client calling to confirm their upcoming stay (handled automatically), another asking about your spa services or rooftop bar hours (answered by the AI), and a third booking a new guest for a mid-week business trip.\n\n8:00 PM \u2014 After your front desk has closed, a potential guest calls needing information on your pet-friendly policies or late check-in procedures. The AI handles the intake, explains your policies, and schedules a call-back for the next morning, sending a professional SMS confirmation with a link to your online booking portal.\n\nThroughout the day, every call is transcribed, summarized, and logged in Cloudbeds \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book hotel rooms?", answer: "Yes. The AI checks availability, captures guest preferences and dates, and creates reservations directly in your property management system." },
    { question: "Does the AI integrate with Cloudbeds?", answer: "Yes. BrightLaunchIQ connects with Cloudbeds to manage room inventory, process reservations, and handle rate inquiries in real time." },
    { question: "Can the AI handle special requests?", answer: "Yes. The AI captures room preferences, dietary needs, celebration details, and accessibility requirements, logging them for your guest services team." },
    { question: "Does the AI manage group bookings?", answer: "Yes. The AI captures group size, date range, and room block requirements, then routes group inquiries to your sales team for custom proposals." },
    { question: "How quickly can a boutique hotel get started?", answer: "Most hotels are live within 48 hours. We configure room types, integrate with Cloudbeds, and customize the AI for your property\u2019s unique character." },
    { question: "What does an AI receptionist cost for boutique hotels?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Cloudbeds integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const BoutiqueHotels = () => <IndustryPageTemplate data={data} />;
export default BoutiqueHotels;
