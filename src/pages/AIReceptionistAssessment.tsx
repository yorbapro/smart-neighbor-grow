import { useState, useCallback, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import useSEO from "@/hooks/useSEO";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Phone,
  ClipboardCheck,
  Loader2,
  DollarSign,
  PhoneOff,
  Users,
  Clock,
  Target,
  TrendingUp,
  ShieldCheck,
  Calendar,
  AlertTriangle,
} from "lucide-react";

// ---------- Types ----------
interface QuizAnswer {
  customerValue: string;
  missedCallsPerDay: string;
  competitorPercent: string;
  missedCallTiming: string;
  primaryGoal: string;
}

interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  consent: boolean;
}

interface ROIResult {
  annualLoss: number;
  monthlyLoss: number;
  missedCustomersPerMonth: number;
  score: number;
  segment: string;
  headline: string;
  timing: string;
  goal: string;
  insights: string[];
}

// ---------- Value maps for calculation ----------
const customerValueMap: Record<string, number> = {
  "Less than $250": 175,
  "$250 – $500": 375,
  "$500 – $1,000": 750,
  "$1,000 – $5,000": 3000,
  "$5,000+": 7500,
};

const missedCallsMap: Record<string, number> = {
  "1 – 3 calls": 2,
  "4 – 7 calls": 5.5,
  "8 – 12 calls": 10,
  "13 – 20 calls": 16.5,
  "20+ calls": 25,
};

const competitorPercentMap: Record<string, number> = {
  "50%": 0.5,
  "60%": 0.6,
  "70%": 0.7,
  "80%": 0.8,
  "85% (industry average)": 0.85,
  "90%": 0.9,
  "95%+": 0.95,
};

// ---------- Questions ----------
const questions = [
  {
    key: "customerValue" as const,
    icon: DollarSign,
    question: "What is the average value of a new customer to your business?",
    helpText: "Think about the total revenue a typical new customer brings in over time, including repeat visits.",
    options: ["Less than $250", "$250 – $500", "$500 – $1,000", "$1,000 – $5,000", "$5,000+"],
  },
  {
    key: "missedCallsPerDay" as const,
    icon: PhoneOff,
    question: "On average, how many new customer calls does your business miss each day?",
    helpText: "Be honest! Most service businesses miss over 50% of their calls because they're on a job, it's after hours, or staff are busy.",
    options: ["1 – 3 calls", "4 – 7 calls", "8 – 12 calls", "13 – 20 calls", "20+ calls"],
  },
  {
    key: "competitorPercent" as const,
    icon: Users,
    question: "What percentage of missed callers do you think call a competitor instead?",
    helpText: "Research suggests that most callers who can't reach a business will not call back — they simply call the next business on the list.",
    options: ["50%", "60%", "70%", "80%", "85% (industry average)", "90%", "95%+"],
  },
  {
    key: "missedCallTiming" as const,
    icon: Clock,
    question: "When is your biggest challenge with missed calls?",
    options: [
      "During peak business hours when my team is busy",
      "After hours and on weekends",
      "Both equally",
    ],
  },
  {
    key: "primaryGoal" as const,
    icon: Target,
    question: "What is your primary goal for improving your call handling?",
    options: [
      "Capture every lead and maximize revenue",
      "Improve customer service and professionalism",
      "Reduce the burden on my existing staff",
      "All of the above",
    ],
  },
];

// ---------- Scoring ----------
function calculateROI(answers: QuizAnswer, businessName: string): ROIResult {
  const avgValue = customerValueMap[answers.customerValue] || 500;
  const missedPerDay = missedCallsMap[answers.missedCallsPerDay] || 5;
  const competitorRate = competitorPercentMap[answers.competitorPercent] || 0.85;

  const monthlyLoss = Math.round(missedPerDay * avgValue * competitorRate * 21);
  const annualLoss = monthlyLoss * 12;
  const missedCustomersPerMonth = Math.round(missedPerDay * competitorRate * 21);

  // Score based on revenue loss severity
  let score: number;
  let segment: string;
  if (annualLoss >= 200000) { score = 98; segment = "CRITICAL"; }
  else if (annualLoss >= 100000) { score = 92; segment = "CRITICAL"; }
  else if (annualLoss >= 50000) { score = 85; segment = "HIGH"; }
  else if (annualLoss >= 25000) { score = 72; segment = "MODERATE"; }
  else { score = 60; segment = "MODERATE"; }

  const headline = `${businessName || "Your Business"}, You're Losing an Estimated $${annualLoss.toLocaleString()} in Revenue Annually`;

  // Dynamic insights
  const insights: string[] = [];
  insights.push(
    `Because you miss approximately ${Math.round(missedPerDay)} calls per day, and ${Math.round(competitorRate * 100)}% of those callers move on to a competitor, you're handing ${missedCustomersPerMonth} ready-to-buy customers to your competition every month.`
  );

  if (answers.missedCallTiming === "After hours and on weekends") {
    insights.push("Your challenge with after-hours missed calls is costing you dearly. An AI Receptionist works 24/7, ensuring you never miss a lead — whether you're on a job or it's 2 AM on a Sunday.");
  } else if (answers.missedCallTiming === "Both equally") {
    insights.push("Missing calls both during peak hours and after hours means you're losing revenue around the clock. An AI Receptionist handles unlimited simultaneous calls, 24/7/365.");
  } else {
    insights.push("Peak-hour missed calls mean your busiest times are also your leakiest. An AI Receptionist handles unlimited simultaneous calls with zero hold time.");
  }

  const goalText = answers.primaryGoal === "All of the above"
    ? "capture every lead, improve service, and free up your team"
    : answers.primaryGoal.toLowerCase();
  insights.push(
    `You want to ${goalText}. Our AI Receptionist is the most cost-effective way to achieve this — capturing leads, improving your brand image, and freeing up your team to focus on their core tasks.`
  );

  return {
    annualLoss, monthlyLoss, missedCustomersPerMonth, score, segment, headline,
    timing: answers.missedCallTiming,
    goal: answers.primaryGoal,
    insights,
  };
}

// ---------- Component ----------
const AIReceptionistAssessment = () => {
  useSEO({
    title: "Free Missed Call Revenue Calculator | BrightLaunchIQ",
    description: "In 60 seconds, discover how much revenue you're losing to missed calls. Get a personalized ROI report and action plan to recover lost revenue with an AI Receptionist.",
    canonical: "https://brightlaunchiq.com/ai-receptionist-readiness-assessment",
    keywords: "missed call revenue calculator, AI receptionist ROI, missed call cost calculator, AI receptionist for small business",
  });

  useEffect(() => {
    const existingSchemas = document.querySelectorAll('script[data-assessment-schema]');
    existingSchemas.forEach(el => el.remove());

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-assessment-schema", "faq");
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much revenue am I losing from missed calls?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most service businesses lose $50,000 to $200,000+ annually from missed calls. Use our free calculator to get your personalized estimate based on your call volume, customer value, and industry." }
        },
        {
          "@type": "Question",
          "name": "How does the Missed Call Revenue Calculator work?",
          "acceptedAnswer": { "@type": "Answer", "text": "Answer 5 quick questions about your business — average customer value, daily missed calls, competitor loss rate, timing challenges, and goals. We calculate your estimated annual revenue loss and provide a personalized action plan." }
        },
        {
          "@type": "Question",
          "name": "Is the Missed Call Revenue Calculator free?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free. You'll receive an instant ROI calculation and a detailed report sent to your email with personalized recommendations." }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      document.querySelectorAll('script[data-assessment-schema]').forEach(el => el.remove());
    };
  }, []);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswer>>({});
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    firstName: "", lastName: "", email: "", phone: "", businessName: "", consent: false,
  });
  const [result, setResult] = useState<ROIResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const totalSteps = questions.length + 1;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const isContactStep = currentStep === questions.length;

  const selectAnswer = useCallback((key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => setCurrentStep((s) => Math.min(s + 1, totalSteps - 1)), 300);
  }, [totalSteps]);

  const handleSubmit = async () => {
    if (!contactInfo.firstName || !contactInfo.lastName || !contactInfo.email || !contactInfo.businessName) {
      setSubmitError("Please fill in all required fields.");
      return;
    }
    if (!contactInfo.consent) {
      setSubmitError("Please agree to receive your revenue report.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email)) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const fullAnswers = answers as QuizAnswer;
    const roiResult = calculateROI(fullAnswers, contactInfo.businessName);

    try {
      // Save to existing DB table — mapping new questions to existing columns
      const { error: dbError } = await supabase.from("ai_receptionist_quiz_responses").insert({
        first_name: contactInfo.firstName.trim(),
        last_name: contactInfo.lastName.trim(),
        email: contactInfo.email.trim().toLowerCase(),
        phone: contactInfo.phone.trim() || null,
        business_name: contactInfo.businessName.trim(),
        business_type: "ROI Calculator",
        call_volume: fullAnswers.missedCallsPerDay,
        missed_call_frequency: fullAnswers.competitorPercent,
        after_hours_needs: fullAnswers.missedCallTiming,
        appointment_booking: fullAnswers.customerValue,
        current_call_handling: "ROI Calculator v2",
        primary_pain_point: fullAnswers.primaryGoal,
        ai_receptionist_awareness: `Annual Loss: $${roiResult.annualLoss.toLocaleString()}`,
        timeline: `Score: ${roiResult.score} / ${roiResult.segment}`,
        calculated_score: roiResult.score,
        score_segment: roiResult.segment,
        email_consent: contactInfo.consent,
      });

      if (dbError) throw dbError;

      // Send report email (non-blocking)
      try {
        await supabase.functions.invoke("send-readiness-report", {
          body: {
            firstName: contactInfo.firstName.trim(),
            lastName: contactInfo.lastName.trim(),
            email: contactInfo.email.trim().toLowerCase(),
            businessName: contactInfo.businessName.trim(),
            score: roiResult.score,
            segment: roiResult.segment,
            headline: roiResult.headline,
            insights: roiResult.insights,
            recommendations: [
              `You're losing an estimated $${roiResult.annualLoss.toLocaleString()}/year to missed calls`,
              `${roiResult.missedCustomersPerMonth} customers per month are going to competitors`,
              "An AI Receptionist answers 100% of calls, 24/7/365",
            ],
            answers: fullAnswers,
          },
        });
      } catch {
        console.warn("Report email could not be sent.");
      }

      setResult(roiResult);
    } catch (err: any) {
      setSubmitError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------- Results ----------
  if (result) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(180deg, hsl(215, 28%, 12%) 0%, hsl(215, 28%, 7%) 50%, hsl(220, 30%, 3%) 100%)' }}>
        <Header />
        <main id="main-content" className="flex-1 pt-28 pb-20">
          <div className="container max-w-3xl mx-auto">

            {/* Revenue Loss Headline */}
            <div className="text-center mb-12 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 text-red-400 text-sm font-semibold mb-6">
                <AlertTriangle className="w-4 h-4" />
                Revenue Alert
              </span>
              <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {result.headline}
              </h1>

              {/* Big numbers */}
              <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-8">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="font-display text-2xl md:text-3xl font-bold text-red-400">${result.annualLoss.toLocaleString()}</p>
                  <p className="text-xs text-white/50 mt-1">Annual Loss</p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="font-display text-2xl md:text-3xl font-bold text-red-400">${result.monthlyLoss.toLocaleString()}</p>
                  <p className="text-xs text-white/50 mt-1">Monthly Loss</p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="font-display text-2xl md:text-3xl font-bold text-red-400">{result.missedCustomersPerMonth}</p>
                  <p className="text-xs text-white/50 mt-1">Customers Lost/Month</p>
                </div>
              </div>

              {/* Score gauge */}
              <div className="relative w-36 h-36 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="70" fill="none" stroke="hsl(215, 17%, 15%)" strokeWidth="12" />
                  <circle
                    cx="80" cy="80" r="70"
                    fill="none"
                    stroke={result.segment === "CRITICAL" ? "hsl(0, 72%, 51%)" : "hsl(45, 93%, 47%)"}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${(result.score / 100) * 440} 440`}
                    transform="rotate(-90 80 80)"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-3xl font-bold text-white">{result.score}</span>
                  <span className="text-xs text-white/50">/ 100</span>
                </div>
              </div>
              <p className={`text-sm font-bold ${result.segment === "CRITICAL" ? "text-red-400" : "text-yellow-400"}`}>
                AI Readiness Score: {result.segment}
              </p>
            </div>

            {/* Dynamic insights */}
            <div className="mb-10 p-8 rounded-2xl bg-white/5 border border-white/10 animate-slide-up">
              <h3 className="font-display text-lg font-bold text-white mb-5">Based on Your Answers, Here's Why:</h3>
              <ul className="space-y-4">
                {result.insights.map((insight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-relaxed">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How BrightLaunchIQ recovers revenue */}
            <div className="mb-10 p-8 rounded-2xl bg-primary/5 border border-primary/20 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-display text-lg font-bold text-white mb-5">How BrightLaunchIQ Recovers Your Lost Revenue:</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, title: "Never Miss a Call", desc: "Captures 100% of your calls, 24/7/365. No hold times. No voicemail." },
                  { icon: TrendingUp, title: "Instant ROI", desc: `For less than the cost of one lost customer ($${(customerValueMap[answers.customerValue as string] || 500).toLocaleString()}), you can secure all of them.` },
                  { icon: Calendar, title: "Seamless Integration", desc: "Books appointments directly into your existing calendar and CRM." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email confirmation */}
            <div className="mb-10 p-6 rounded-2xl bg-btn-green/10 border border-btn-green/20 text-center animate-slide-up" style={{ animationDelay: "0.15s" }}>
              <CheckCircle className="w-6 h-6 text-btn-green mx-auto mb-2" />
              <p className="text-white/80 text-sm">
                We've sent your complete Revenue Recovery Report to <strong className="text-white">{contactInfo.email}</strong>.
              </p>
            </div>

            {/* 3-Tier CTA */}
            <div className="text-center space-y-5 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-display text-lg font-bold text-white mb-2">Your Personalized Action Plan: Choose Your Next Step</h3>

              {/* Primary CTA */}
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto group text-base">
                <Link to="/pricing">
                  Start Recovering Your Lost Revenue — Buy Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              {/* Secondary CTA */}
              <div>
                <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/contact">
                    <ShieldCheck className="w-5 h-5" />
                    Book a Free 15-Minute Call with an Expert
                  </Link>
                </Button>
              </div>

              {/* Tertiary CTA */}
              <div>
                <a href="tel:1-877-879-5552" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  Hear It in Action: Call Our Live AI Receptionist Now (1-877-879-5552)
                </a>
              </div>
            </div>

            {/* Educational callout */}
            <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-display text-lg font-bold text-white mb-3">What is an AI Receptionist?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                An AI receptionist answers your business phone calls automatically — 24/7, 365 days a year. It handles appointment booking, lead qualification, call routing, and FAQs, just like a human receptionist but at a fraction of the cost.
              </p>
              <Link to="/ai-receptionist" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                Learn more about AI Receptionists <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ---------- Quiz view ----------
  const currentQuestion = !isContactStep ? questions[currentStep] : null;
  const canGoBack = currentStep > 0;
  const currentAnswer = currentQuestion ? answers[currentQuestion.key] : undefined;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(180deg, hsl(215, 28%, 12%) 0%, hsl(215, 28%, 7%) 50%, hsl(220, 30%, 3%) 100%)' }}>
      <Header />
      <main id="main-content" className="flex-1 pt-28 pb-20">
        <div className="container max-w-2xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              <DollarSign className="w-4 h-4" />
              Free 60-Second Calculator
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              Discover How Much Revenue You're Losing to Missed Calls
            </h1>
            <p className="text-white/60 text-base max-w-lg mx-auto">
              Answer 5 simple questions to calculate the real cost of missed calls to your business and get a personalized plan to recover that revenue.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-white/60 mb-2">
              <span>
                {isContactStep
                  ? "Final Step — Get Your Results"
                  : `Question ${currentStep + 1} of ${questions.length}`}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-white/10" />
          </div>

          {/* Question card */}
          <div className="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 animate-fade-in" key={currentStep}>
            {isContactStep ? (
              <>
                <div className="text-center mb-8">
                  <ClipboardCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                    Get Your Revenue Recovery Report
                  </h2>
                  <p className="text-white/60 text-sm">Enter your details to see exactly how much you're losing — and how to recover it.</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-white/70 mb-1 block">First Name *</label>
                      <Input
                        value={contactInfo.firstName}
                        onChange={(e) => setContactInfo((p) => ({ ...p, firstName: e.target.value }))}
                        placeholder="John"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-white/70 mb-1 block">Last Name *</label>
                      <Input
                        value={contactInfo.lastName}
                        onChange={(e) => setContactInfo((p) => ({ ...p, lastName: e.target.value }))}
                        placeholder="Smith"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">Email Address *</label>
                    <Input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo((p) => ({ ...p, email: e.target.value }))}
                      placeholder="john@mybusiness.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">Phone Number (optional)</label>
                    <Input
                      type="tel"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="(555) 123-4567"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">Business Name *</label>
                    <Input
                      value={contactInfo.businessName}
                      onChange={(e) => setContactInfo((p) => ({ ...p, businessName: e.target.value }))}
                      placeholder="Smith's HVAC Services"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Checkbox
                      id="consent"
                      checked={contactInfo.consent}
                      onCheckedChange={(checked) => setContactInfo((p) => ({ ...p, consent: checked === true }))}
                      className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-0.5"
                    />
                    <label htmlFor="consent" className="text-sm text-white/60 leading-relaxed cursor-pointer">
                      Yes, send me my personalized Revenue Recovery Report and helpful tips via email. I agree to receive marketing communications from BrightLaunchIQ.
                    </label>
                  </div>

                  {submitError && (
                    <p className="text-destructive text-sm font-medium">{submitError}</p>
                  )}

                  <Button
                    variant="hero"
                    size="lg"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full group mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Calculating Your Lost Revenue...
                      </>
                    ) : (
                      <>
                        Calculate My Lost Revenue
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </>
            ) : currentQuestion ? (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <currentQuestion.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-white">
                    {currentQuestion.question}
                  </h2>
                </div>

                {currentQuestion.helpText && (
                  <p className="text-white/50 text-sm mb-6 ml-[52px]">{currentQuestion.helpText}</p>
                )}

                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectAnswer(currentQuestion.key, option)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                        currentAnswer === option
                          ? "bg-primary/20 border-primary text-white"
                          : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      <span className="text-sm font-medium">{option}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          {/* Navigation */}
          {canGoBack && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setCurrentStep((s) => s - 1)}
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous Question
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIReceptionistAssessment;
