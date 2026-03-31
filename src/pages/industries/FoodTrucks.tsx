import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Food Trucks",
  slug: "food-trucks",
  lossAmount: "50,000",
  lossAmountNum: 50000,
  useCases: ["Location Schedule", "Catering Inquiries", "Menu Questions", "Event Booking", "Private Party Requests", "Franchise Inquiries"],
  crm: "Square",
  sectorLabel: "Hospitality & Food",
  similarBusinesses: [
    { name: "Restaurants", slug: "restaurants" },
    { name: "Catering Services", slug: "catering-services" },
    { name: "Event Venues", slug: "event-venues" },
  ],
  whyThisIndustry: "In the dynamic food truck industry, mobility, speed, and a unique culinary experience are key to success. Food truck operators rely on constant communication for location updates, catering inquiries, and customer orders, often in fast-paced, high-volume environments. When a potential customer or event organizer calls, they need immediate information on your current location, menu, or catering availability. Missing that call doesn\u2019t just mean losing a sale; it means failing to connect with a hungry customer or a lucrative event opportunity. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and provides real-time updates \u2014 so you capture the client even when your team is focused on serving delicious food.",
  painPoints: [
    {
      title: "The \"On-the-Go Hunger\" Expectation",
      description: "Customers often call food trucks when they are looking for a quick meal, curious about your daily special, or trying to track your current location. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next food option that offers instant information and clear communication."
    },
    {
      title: "Operators are Focused on the \"Service Window,\" Not the Phone",
      description: "Your food truck staff are busy taking orders, preparing food, and serving customers at the window. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your team is overwhelmed or unavailable, new inquiries go unanswered, leading to lost sales, missed catering opportunities, and a diminished reputation for responsiveness."
    },
    {
      title: "Dynamic Location and Catering Inquiries",
      description: "Every new inquiry requires detailed information: your current location, upcoming schedule, menu availability, or catering options for an event. Providing accurate, real-time updates and coordinating catering bookings takes time. A slow or inconsistent intake process risks losing a customer who needs immediate information or spending valuable time on unqualified catering leads."
    },
    {
      title: "High-Value Catering Leads Get Lost",
      description: "Corporate events, festivals, and private parties are high-value and essential for business stability. If you don\u2019t capture the lead details and book immediately, the client will find another food truck who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night catering inquiry or a last-minute event request at 9 PM is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Square."
    }
  ],
  dayInTheLife: `12:00 PM \u2014 A potential customer calls, asking for your current location and today\u2019s special. The BrightLaunchIQ AI Receptionist answers instantly with a friendly, knowledgeable tone. It provides your exact GPS location, describes the daily special, and offers a link to your online menu and ordering system.\n\n1:30 PM \u2014 While your team is serving a long line of customers, the AI handles three simultaneous calls: one client inquiring about booking your truck for a corporate event next month (qualified and routed to your catering manager), another asking about allergen information for a menu item (answered by the AI), and a third confirming your operating hours.\n\n6:00 PM \u2014 After your dinner rush, an event organizer calls needing a quote for a large festival. The AI handles the intake, gathers essential event details (date, expected attendance, location), and schedules a call-back for the next morning, sending a professional SMS confirmation with a link to your catering inquiry form.\n\nThroughout the day, every call is transcribed, summarized, and logged in Square \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can the AI share food truck locations?", answer: "Yes. It provides daily location schedules and event appearances." },
    { question: "How fast can we go live?", answer: "Most food trucks are live within 48 hours." },
    { question: "Can an AI receptionist handle catering inquiries?", answer: "Yes. The AI captures event details, guest count, and menu preferences, then routes qualified leads to your catering manager." },
    { question: "Does the AI integrate with Square?", answer: "Yes. BrightLaunchIQ connects with Square to manage orders, update inventory, and track customer interactions." },
    { question: "Can the AI answer menu questions and allergen information?", answer: "Yes. The AI provides detailed information on menu items, daily specials, dietary restrictions, and allergen information." },
    { question: "What does an AI receptionist cost for food trucks?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Square integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const FoodTrucks = () => <IndustryPageTemplate data={data} />;
export default FoodTrucks;
