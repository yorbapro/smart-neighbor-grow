import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Restaurants",
  slug: "restaurants",
  lossAmount: "80,000",
  lossAmountNum: 80000,
  useCases: ["Reservation Booking", "Menu Questions", "Hours & Directions", "Private Event Inquiries", "Catering Requests", "Waitlist Management"],
  crm: "OpenTable",
  sectorLabel: "Hospitality & Food",
  similarBusinesses: [
    { name: "Catering Services", slug: "catering-services" },
    { name: "Food Trucks", slug: "food-trucks" },
    { name: "Event Venues", slug: "event-venues" },
  ],
  whyThisIndustry: "In the competitive restaurant industry, exceptional customer service begins before guests even walk through the door. Restaurants rely on efficient reservation management, accurate order taking (for takeout/delivery), and a welcoming first impression. When a potential diner calls, they often want to book a table, inquire about the menu, or place an order. Missing that call doesn\u2019t just mean losing a cover or a sale; it means failing to provide a seamless experience in a fast-paced environment. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into OpenTable \u2014 so you capture the client even when your team is focused on delivering exceptional dining experiences.",
  painPoints: [
    {
      title: "The \"Immediate Indulgence\" Expectation",
      description: "Customers often call restaurants when they are hungry and ready to dine, or planning a special occasion. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next restaurant on their list that offers instant reservations, clear menu information, and efficient order placement."
    },
    {
      title: "Staff are Focused on the \"Floor,\" Not the Phone",
      description: "Your front-of-house staff are busy greeting guests, taking orders, serving food, and managing the dining room. Your kitchen staff are focused on preparing meals. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your reception is overwhelmed or unavailable, new inquiries go unanswered, leading to lost reservations, missed takeout orders, and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Reservation Management and Menu FAQs",
      description: "Every new inquiry requires detailed information: party size, preferred time, dietary restrictions, and specific menu questions. Managing reservations, especially during peak hours, and answering repetitive questions about ingredients or daily specials takes valuable time. A slow or inconsistent intake process risks losing a diner who needs immediate attention or spending valuable time on unqualified inquiries."
    },
    {
      title: "High-Value Reservations & Orders Get Lost",
      description: "Large party reservations, private event inquiries, and significant takeout orders are high-value and essential for business stability. If you don\u2019t capture the lead details and book immediately, the client will find another restaurant who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night reservation inquiry or a catering request at 10 PM is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Service Flow",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with OpenTable."
    }
  ],
  dayInTheLife: `6:00 PM \u2014 A potential diner calls, wanting to book a table for four. The BrightLaunchIQ AI Receptionist answers instantly with a warm, professional tone. It checks your real-time availability in your reservation system (e.g., OpenTable, Resy), offers available times, and books the reservation immediately.\n\n6:05 PM \u2014 The AI then asks about any dietary restrictions or special requests, adding them to the reservation notes. The diner feels confident in your restaurant\u2019s efficiency and personalized service, and the reservation is confirmed via SMS with a link to your digital menu.\n\n7:30 PM \u2014 While your hosts are seating guests, the AI handles three simultaneous calls: one client calling to confirm their reservation (handled automatically), another asking about your gluten-free options (answered by the AI), and a third placing a takeout order for pickup.\n\n10:00 PM \u2014 After your kitchen has closed, a potential diner calls to inquire about your weekend brunch menu. The AI handles the intake, provides menu details, and schedules a call-back for the next morning to book a reservation, sending a professional SMS confirmation with a link to your online menu.\n\nThroughout the evening, every call is transcribed, summarized, and logged in OpenTable \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist take reservations?", answer: "Yes. The AI handles party size, date/time, and special requests, booking directly into your reservation system like OpenTable or Resy." },
    { question: "Does the AI integrate with OpenTable?", answer: "Yes. BrightLaunchIQ connects with OpenTable to manage reservations, update table availability, and capture guest preferences." },
    { question: "Can the AI answer menu questions?", answer: "Yes. The AI provides detailed information on menu items, daily specials, dietary restrictions, and allergen information." },
    { question: "Does the AI handle takeout and delivery orders?", answer: "Yes. The AI can take takeout orders, provide estimated pickup times, and integrate with your POS system for seamless order processing." },
    { question: "How quickly can a restaurant get started?", answer: "Most restaurants are live within 48 hours. We configure service menus, integrate with your reservation system, and customize the AI for your specific offerings." },
    { question: "What does an AI receptionist cost for restaurants?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and OpenTable integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const Restaurants = () => <IndustryPageTemplate data={data} />;
export default Restaurants;
