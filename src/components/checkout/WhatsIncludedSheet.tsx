import { Check, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { LucideIcon, Zap, Bot, Users, Headphones, Lock, Rocket, TrendingUp, MessageSquare, Calendar, Plug, BarChart3, Building2, Mic, Crown } from "lucide-react";

interface IncludedSection {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  highlight?: boolean;
}

const coreIncluded: IncludedSection[] = [
  { icon: Zap, title: "24/7 Intelligent Call Answering", description: "Answers every call instantly — mornings, nights, weekends, holidays.", items: ["Instant pickup — zero missed calls", "Natural, human-like voice conversations", "Custom greeting by business name", "Time-aware greetings", "Holiday & after-hours messaging", "Smart interruption handling"] },
  { icon: Bot, title: "Custom Voice Agent Training", description: "Voice persona trained on your services, tone, and industry.", items: ["Script design tailored to your business", "Industry-specific intent modeling", "Knowledge base ingestion", "Custom AI name & persona", "Objection-handling training", "Continuous learning from real calls"] },
  { icon: Users, title: "Lead Capture & Qualification", description: "Every caller is captured, qualified, and scored.", items: ["Captures name, phone, email, service interest", "Urgency & budget pre-qualification", "Custom qualification questions", "New vs. existing customer detection", "Lead quality scoring", "High-intent caller flagging"] },
  { icon: Headphones, title: "Intelligent Call Routing", description: "Urgent calls reach the right person instantly.", items: ["Conditional routing by intent", "Warm & cold transfer options", "VIP client recognition", "Emergency routing logic", "Priority escalation detection", "Voicemail fallback"] },
  { icon: Lock, title: "Security & Compliance", description: "Built on trusted, secure infrastructure.", items: ["AES-256 encrypted data storage", "Secure API connections", "Role-based access controls", "Call recording compliance messaging", "Audit logging", "Data retention controls"] },
  { icon: Rocket, title: "Onboarding & Setup", description: "$1,500 setup fee covers done-for-you launch.", items: ["Onboarding strategy session", "Script development & refinement", "Call routing configuration", "Test call simulations & QA", "7-day optimization review", "30-day performance review"] },
  { icon: TrendingUp, title: "Ongoing Optimization", description: "Regular script tuning, call audits, and seasonal updates.", items: ["Monthly script refinement", "Call quality audits", "AI retraining on real transcripts", "Seasonal messaging updates", "Lead quality improvements", "Booking conversion optimization"] },
  { icon: MessageSquare, title: "Reporting & Notifications", description: "Full visibility — transcripts, sentiment, and email summaries.", items: ["Email notifications with full transcript", "Call summary & sentiment analysis", "Lead capture reports", "Call volume tracking", "Response quality metrics"] },
];

const growthIncluded: IncludedSection[] = [
  { icon: Zap, title: "Everything in Core", description: "All Core capabilities included.", items: ["24/7 AI call answering", "Custom voice persona & script design", "Lead capture & smart qualification", "Intelligent routing & escalation", "Call transcripts & sentiment analysis", "Encrypted, secure infrastructure"] },
  { icon: Calendar, title: "Appointment Booking & Calendar Sync", description: "Books appointments directly into your calendar.", items: ["Real-time calendar integration", "Automatic availability checking", "Appointment type classification", "Double-booking prevention", "Rescheduling & cancellation handling", "Multi-provider scheduling"], highlight: true },
  { icon: Plug, title: "CRM Integration & Automation", description: "Every call flows directly into your CRM.", items: ["HubSpot, Salesforce, Zoho, and more", "Automatic contact creation", "Lead status updates in real time", "Custom field mapping", "Zapier & Slack integrations", "Automated workflow triggers"], highlight: true },
  { icon: MessageSquare, title: "Automated Follow-Up", description: "Instant SMS and email confirmations.", items: ["Automated SMS confirmations", "Email appointment reminders", "Post-call follow-up sequences", "Custom messaging templates", "No-show re-engagement"], highlight: true },
  { icon: BarChart3, title: "Analytics Dashboard & ROI Reporting", description: "Call volume, conversion rates, revenue impact.", items: ["Real-time call analytics", "Lead conversion tracking", "Booking rate optimization", "ROI reporting & revenue attribution", "Call quality metrics", "Weekly performance summaries"], highlight: true },
  { icon: Rocket, title: "Enhanced Onboarding & Setup", description: "$2,500 setup covers calendar, CRM, booking logic.", items: ["Everything in Core setup, plus:", "Calendar system integration", "CRM connection & field mapping", "Booking logic configuration", "Automation workflow design", "End-to-end booking flow testing"] },
  { icon: TrendingUp, title: "Advanced Optimization", description: "Booking conversion analysis, CRM tuning, automation refinement.", items: ["All Core optimization services", "Booking conversion analysis", "CRM pipeline optimization", "Automation refinement", "Integration health monitoring"] },
];

const proIncluded: IncludedSection[] = [
  { icon: Zap, title: "Everything in Growth", description: "All Core + Growth capabilities.", items: ["24/7 AI call answering & lead capture", "Custom voice persona & script design", "Appointment booking & calendar sync", "CRM integration & workflow automation", "Analytics dashboard & ROI reporting", "Automated SMS/email follow-up"] },
  { icon: Building2, title: "Multi-Location Call Routing", description: "Route calls across offices, departments, or territories.", items: ["Location-based call routing", "Department-specific handling", "Territory & ZIP code routing", "Per-location greetings & scripts", "Cross-location overflow handling", "Centralized reporting across locations"], highlight: true },
  { icon: Mic, title: "Custom AI Voice Cloning", description: "A unique, branded voice for your company.", items: ["Custom voice profile creation", "Brand-aligned tone & cadence", "Pronunciation fine-tuning", "Multi-voice support", "Voice consistency across all interactions"], highlight: true },
  { icon: BarChart3, title: "Advanced Analytics & Executive Reporting", description: "Comprehensive dashboards with revenue attribution.", items: ["Revenue attribution modeling", "Multi-location performance comparison", "Trend analysis & forecasting", "Executive summary reports", "Custom KPI tracking", "Exportable reports & API access"], highlight: true },
  { icon: Crown, title: "Priority Support & Optimization", description: "Dedicated support, proactive optimization, named account contact.", items: ["Priority support queue", "Dedicated account contact", "Proactive optimization cycles", "Quarterly business reviews", "Priority feature requests", "Custom integration development"], highlight: true },
  { icon: Rocket, title: "Enterprise Onboarding & Setup", description: "$5,000 setup covers multi-location, custom voice, analytics.", items: ["Everything in Growth setup, plus:", "Multi-location routing configuration", "Custom voice profile creation", "Advanced analytics setup", "Priority optimization cycle", "Executive reporting configuration"] },
];

const tierData: Record<string, { sections: IncludedSection[]; color: string; label: string; price: string; minutes: string; calls: string }> = {
  Core: { sections: coreIncluded, color: "emerald", label: "Core Plan", price: "$497/month", minutes: "500", calls: "250" },
  Growth: { sections: growthIncluded, color: "blue", label: "Growth Plan", price: "$997/month", minutes: "1,500", calls: "750" },
  Pro: { sections: proIncluded, color: "red", label: "Pro Plan", price: "$1,497/month", minutes: "2,500", calls: "1,200" },
};

const colorMap: Record<string, { icon: string; highlight: string; badge: string; stat: string }> = {
  emerald: { icon: "text-emerald-500", highlight: "border-emerald-500/30 bg-emerald-500/5", badge: "bg-emerald-500/20 text-emerald-500", stat: "text-emerald-500" },
  blue: { icon: "text-blue-500", highlight: "border-blue-500/30 bg-blue-500/5", badge: "bg-blue-500/20 text-blue-500", stat: "text-blue-500" },
  red: { icon: "text-red-500", highlight: "border-red-500/30 bg-red-500/5", badge: "bg-red-500/20 text-red-500", stat: "text-red-500" },
};

interface WhatsIncludedSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tierName: string;
}

const WhatsIncludedSheet = ({ open, onOpenChange, tierName }: WhatsIncludedSheetProps) => {
  const data = tierData[tierName];
  if (!data) return null;
  const colors = colorMap[data.color];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-xl md:max-w-2xl overflow-y-auto p-0">
        <div className="sticky top-0 z-10 bg-background border-b border-border px-6 py-4">
          <SheetHeader>
            <div className="flex items-center justify-between">
              <div>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-2 ${colors.badge}`}>
                  {data.label} — {data.price}
                </div>
                <SheetTitle className="font-display text-xl font-bold">
                  What's Included in {tierName}
                </SheetTitle>
              </div>
            </div>
          </SheetHeader>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Usage stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <p className={`text-2xl font-display font-bold ${colors.stat}`}>{data.minutes}</p>
              <p className="text-xs text-muted-foreground">Minutes/month</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <p className={`text-2xl font-display font-bold ${colors.stat}`}>{data.calls}</p>
              <p className="text-xs text-muted-foreground">Calls/month</p>
            </div>
          </div>

          {/* Sections */}
          {data.sections.map((section) => (
            <div
              key={section.title}
              className={`rounded-xl border p-5 ${
                section.highlight ? colors.highlight : "border-border bg-card"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-lg bg-card flex items-center justify-center flex-shrink-0 ${section.highlight ? "" : "bg-muted/50"}`}>
                  <section.icon className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-foreground">{section.title}</h3>
                  <p className="text-xs text-muted-foreground">{section.description}</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${colors.icon}`} />
                    <span className="text-xs text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WhatsIncludedSheet;
