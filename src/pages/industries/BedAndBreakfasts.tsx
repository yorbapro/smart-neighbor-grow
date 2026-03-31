import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Bed & Breakfasts",
  slug: "bed-breakfasts",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Room Availability", "Reservation Booking", "Amenity Questions", "Special Occasion Packages", "Check-In Instructions", "Local Activity Info"],
  crm: "Little Hotelier",
  sectorLabel: "Hospitality & Food",
  similarBusinesses: [
    { name: "Boutique Hotels", slug: "boutique-hotels" },
    { name: "Event Venues", slug: "event-venues" },
    { name: "Wedding Planners", slug: "wedding-planners" },
  ],
  whyThisIndustry: "In the charming world of bed & breakfasts, personalized hospitality and a warm, inviting atmosphere are paramount. B&Bs rely on a steady stream of new guests and a reputation for unique, memorable stays. When a potential guest calls, they often want to inquire about room availability, amenities, local attractions, or to make a reservation. Missing that call doesn\u2019t just mean losing a booking; it means failing to extend your unique brand of hospitality from the very first interaction. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Little Hotelier \u2014 so you capture the client even when your team is focused on delivering exceptional hospitality.",
  painPoints: [
    {
      title: "The \"Personal Touch\" Expectation",
      description: "Guests often call B&Bs seeking a more intimate and personalized experience than a large hotel. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next charming inn on their list that offers instant, knowledgeable assistance and seamless booking."
    },
    {
      title: "Innkeepers are Focused on the \"Guests,\" Not the Phone",
      description: "As an innkeeper, your primary focus is on providing an exceptional experience for your current guests \u2013 preparing breakfast, tidying rooms, and offering local recommendations. You cannot\u2014and should not\u2014be interrupted by every ringing phone. If you are busy or unavailable, new inquiries go unanswered, leading to lost bookings and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Room Availability and Amenity FAQs",
      description: "Every new inquiry requires detailed information: specific room types, availability for certain dates, pet policies, breakfast options, and local activities. Managing reservations, especially during peak seasons, and answering repetitive questions takes valuable time. A slow or inconsistent intake process risks losing a guest who needs immediate confirmation or spending valuable time on unqualified inquiries."
    },
    {
      title: "High-Value Bookings Get Lost",
      description: "Weekend getaways, special occasion packages, and extended stays are high-value and essential for business stability. If you don\u2019t capture the lead details and book immediately, the client will find another B&B who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night reservation inquiry or a special request at 9 PM is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Little Hotelier."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A potential guest calls, inquiring about a weekend stay next month. The BrightLaunchIQ AI Receptionist answers instantly with a warm, professional tone. It checks your real-time room availability in your property management system (e.g., Little Hotelier, Innkeeper\u2019s Advantage), provides details on available rooms, and offers to make a reservation.\n\n9:05 AM \u2014 The AI then asks about any special requests or dietary restrictions, adding them to the reservation notes. The guest feels confident in your B&B\u2019s efficiency and personalized service, and the reservation is confirmed via SMS with a link to your digital welcome guide.\n\n11:00 AM \u2014 While you are assisting current guests, the AI handles three simultaneous calls: one client calling to confirm their upcoming stay (handled automatically), another asking about local hiking trails (answered by the AI), and a third booking a new guest for a mid-week getaway.\n\n5:00 PM \u2014 After your regular check-in hours, a potential guest calls needing information on your pet-friendly rooms. The AI handles the intake, explains your policies, and schedules a call-back for the next morning to book a reservation, sending a professional SMS confirmation with a link to your online booking portal.\n\nThroughout the day, every call is transcribed, summarized, and logged in Little Hotelier \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist check room availability?", answer: "Yes. It provides real-time availability and handles direct bookings." },
    { question: "How fast can we go live?", answer: "Most B&Bs are live within 48 hours." },
    { question: "Can an AI receptionist handle special requests?", answer: "Yes. The AI captures specific guest requests \u2014 dietary needs, early check-in, late check-out \u2014 and ensures they\u2019re documented for the innkeeper." },
    { question: "Does the AI integrate with Little Hotelier?", answer: "Yes. BrightLaunchIQ connects with Little Hotelier to manage reservations, update room availability, and track guest preferences." },
    { question: "Can the AI answer questions about local attractions?", answer: "Yes. The AI provides detailed information on local attractions, dining options, and activities, acting as a virtual concierge." },
    { question: "What does an AI receptionist cost for bed & breakfasts?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Little Hotelier integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const BedAndBreakfasts = () => <IndustryPageTemplate data={data} />;
export default BedAndBreakfasts;
