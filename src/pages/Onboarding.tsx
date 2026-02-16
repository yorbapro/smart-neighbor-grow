import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Target,
  Users,
  TrendingUp,
  Wrench,
  Rocket,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const STEPS = [
  { id: "icp", label: "Ideal Customer", icon: Target },
  { id: "competitors", label: "Competitors", icon: Users },
  { id: "goals", label: "Sales Goals", icon: TrendingUp },
  { id: "tools", label: "Current Tools", icon: Wrench },
  { id: "launch", label: "Launch Plan", icon: Rocket },
] as const;

const CHANNELS = [
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone Calls" },
  { id: "sms", label: "SMS" },
  { id: "linkedin", label: "LinkedIn" },
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const [form, setForm] = useState({
    email: "",
    businessName: "",
    industry: "",
    targetIndustries: "",
    targetCompanySize: "",
    targetLocations: "",
    targetJobTitles: "",
    competitors: "",
    differentiators: "",
    monthlyMeetingGoal: "",
    revenueTarget: "",
    salesCycleLength: "",
    currentCrm: "",
    currentOutreachTools: "",
    currentLeadSources: "",
    launchUrgency: "standard",
    preferredChannels: [] as string[],
    additionalNotes: "",
  });

  useEffect(() => {
    document.title = "Complete Your Onboarding | BrightLaunchIQ";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  const updateField = (field: string, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleChannel = (channel: string) => {
    setForm((prev) => ({
      ...prev,
      preferredChannels: prev.preferredChannels.includes(channel)
        ? prev.preferredChannels.filter((c) => c !== channel)
        : [...prev.preferredChannels, channel],
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return (
          form.email.trim() &&
          form.businessName.trim() &&
          form.targetIndustries.trim() &&
          form.targetCompanySize.trim() &&
          form.targetLocations.trim() &&
          form.targetJobTitles.trim()
        );
      case 1:
        return true; // Optional
      case 2:
        return true; // Optional
      case 3:
        return true; // Optional
      case 4:
        return form.launchUrgency.trim();
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from("onboarding_submissions")
        .insert({
          email: form.email.trim(),
          business_name: form.businessName.trim(),
          industry: form.industry.trim(),
          target_industries: form.targetIndustries.trim(),
          target_company_size: form.targetCompanySize.trim(),
          target_locations: form.targetLocations.trim(),
          target_job_titles: form.targetJobTitles.trim(),
          competitors: form.competitors.trim() || null,
          differentiators: form.differentiators.trim() || null,
          monthly_meeting_goal: form.monthlyMeetingGoal
            ? parseInt(form.monthlyMeetingGoal)
            : null,
          revenue_target: form.revenueTarget.trim() || null,
          sales_cycle_length: form.salesCycleLength.trim() || null,
          current_crm: form.currentCrm.trim() || null,
          current_outreach_tools: form.currentOutreachTools.trim() || null,
          current_lead_sources: form.currentLeadSources.trim() || null,
          launch_urgency: form.launchUrgency,
          preferred_channels: form.preferredChannels,
          additional_notes: form.additionalNotes.trim() || null,
        });

      if (dbError) throw dbError;

      // Notify team
      try {
        await supabase.functions.invoke("send-onboarding-notification", {
          body: {
            email: form.email.trim(),
            businessName: form.businessName.trim(),
            industry: form.industry.trim(),
            launchUrgency: form.launchUrgency,
          },
        });
      } catch {
        // Non-critical — submission already saved
        console.warn("Notification email failed, submission saved.");
      }

      setIsComplete(true);
      toast.success("Onboarding submitted successfully!");
    } catch (err) {
      console.error("Onboarding submission error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container max-w-2xl text-center">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-[var(--shadow-card)]">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-4">
                You're All Set!
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                We've received your onboarding questionnaire. Our team will
                review your responses and reach out within 24 hours to schedule
                your 60-minute strategy session.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  What Happens Next
                </h3>
                <ol className="text-left text-muted-foreground space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </span>
                    We review your ICP and sales goals
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </span>
                    Your strategy session is scheduled (check your inbox)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </span>
                    We build your custom sales engine within 14 days
                  </li>
                </ol>
              </div>
              <p className="text-sm text-muted-foreground">
                Questions? Email{" "}
                <a
                  href="mailto:success@BrightLaunchIQ.com"
                  className="text-primary hover:underline"
                >
                  success@BrightLaunchIQ.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:1-877-879-5552"
                  className="text-primary hover:underline"
                >
                  1-877-879-5552
                </a>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container max-w-3xl">
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Complete Your Onboarding
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Tell us about your ideal customers, competitors, and goals so we
              can build the perfect sales engine for your business.
            </p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-1 md:gap-2 mb-10">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === currentStep;
              const isDone = i < currentStep;
              return (
                <button
                  key={step.id}
                  onClick={() => i < currentStep && setCurrentStep(i)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[var(--shadow-button)]"
                      : isDone
                        ? "bg-primary/10 text-primary cursor-pointer hover:bg-primary/20"
                        : "bg-muted text-muted-foreground"
                  }`}
                  disabled={i > currentStep}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Card */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)]">
            {/* Step 1: ICP */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-1">
                    Your Ideal Customer Profile
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Help us understand exactly who you want to reach.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Your Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      placeholder="Your Company"
                      value={form.businessName}
                      onChange={(e) =>
                        updateField("businessName", e.target.value)
                      }
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="industry">Your Industry</Label>
                  <Input
                    id="industry"
                    placeholder="e.g., HVAC, Legal, Real Estate"
                    value={form.industry}
                    onChange={(e) => updateField("industry", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="targetIndustries">
                    Target Customer Industries *
                  </Label>
                  <Input
                    id="targetIndustries"
                    placeholder="e.g., Property Management, Construction, Healthcare"
                    value={form.targetIndustries}
                    onChange={(e) =>
                      updateField("targetIndustries", e.target.value)
                    }
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="targetCompanySize">
                      Target Company Size *
                    </Label>
                    <Select
                      value={form.targetCompanySize}
                      onValueChange={(v) => updateField("targetCompanySize", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1–10 employees</SelectItem>
                        <SelectItem value="11-50">11–50 employees</SelectItem>
                        <SelectItem value="51-200">51–200 employees</SelectItem>
                        <SelectItem value="201-500">
                          201–500 employees
                        </SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                        <SelectItem value="any">Any size</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="targetLocations">
                      Target Locations *
                    </Label>
                    <Input
                      id="targetLocations"
                      placeholder="e.g., Sacramento metro, Tri-State area"
                      value={form.targetLocations}
                      onChange={(e) =>
                        updateField("targetLocations", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="targetJobTitles">
                    Decision-Maker Titles *
                  </Label>
                  <Input
                    id="targetJobTitles"
                    placeholder="e.g., Owner, Operations Manager, VP of Marketing"
                    value={form.targetJobTitles}
                    onChange={(e) =>
                      updateField("targetJobTitles", e.target.value)
                    }
                  />
                </div>
              </div>
            )}

            {/* Step 2: Competitors */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-1">
                    Competitive Landscape
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Understanding your competition helps us position your
                    outreach.
                  </p>
                </div>

                <div>
                  <Label htmlFor="competitors">
                    Key Competitors (names or websites)
                  </Label>
                  <Textarea
                    id="competitors"
                    placeholder="List your top 3-5 competitors, one per line"
                    value={form.competitors}
                    onChange={(e) => updateField("competitors", e.target.value)}
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="differentiators">
                    What Makes You Different?
                  </Label>
                  <Textarea
                    id="differentiators"
                    placeholder="What do you offer that competitors don't? Why do customers choose you?"
                    value={form.differentiators}
                    onChange={(e) =>
                      updateField("differentiators", e.target.value)
                    }
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Sales Goals */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-1">
                    Sales Goals
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Set your targets so we can measure success together.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="monthlyMeetingGoal">
                      Monthly Meeting Goal
                    </Label>
                    <Input
                      id="monthlyMeetingGoal"
                      type="number"
                      placeholder="e.g., 20"
                      value={form.monthlyMeetingGoal}
                      onChange={(e) =>
                        updateField("monthlyMeetingGoal", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="revenueTarget">
                      Monthly Revenue Target
                    </Label>
                    <Input
                      id="revenueTarget"
                      placeholder="e.g., $50,000"
                      value={form.revenueTarget}
                      onChange={(e) =>
                        updateField("revenueTarget", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="salesCycleLength">
                    Typical Sales Cycle Length
                  </Label>
                  <Select
                    value={form.salesCycleLength}
                    onValueChange={(v) => updateField("salesCycleLength", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="same-day">Same day</SelectItem>
                      <SelectItem value="1-7-days">1–7 days</SelectItem>
                      <SelectItem value="1-4-weeks">1–4 weeks</SelectItem>
                      <SelectItem value="1-3-months">1–3 months</SelectItem>
                      <SelectItem value="3-plus-months">3+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 4: Current Tools */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-1">
                    Current Tools & Process
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Tell us what you're already using so we can integrate
                    seamlessly.
                  </p>
                </div>

                <div>
                  <Label htmlFor="currentCrm">CRM System</Label>
                  <Input
                    id="currentCrm"
                    placeholder="e.g., HubSpot, Salesforce, None"
                    value={form.currentCrm}
                    onChange={(e) => updateField("currentCrm", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="currentOutreachTools">
                    Current Outreach Tools
                  </Label>
                  <Input
                    id="currentOutreachTools"
                    placeholder="e.g., Mailchimp, Outreach.io, manual emails"
                    value={form.currentOutreachTools}
                    onChange={(e) =>
                      updateField("currentOutreachTools", e.target.value)
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="currentLeadSources">
                    Where Do Your Leads Come From Today?
                  </Label>
                  <Textarea
                    id="currentLeadSources"
                    placeholder="e.g., Referrals, Google Ads, cold calling, website forms"
                    value={form.currentLeadSources}
                    onChange={(e) =>
                      updateField("currentLeadSources", e.target.value)
                    }
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 5: Launch Plan */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-1">
                    Launch Plan
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Let us know your preferred timeline and outreach channels.
                  </p>
                </div>

                <div>
                  <Label htmlFor="launchUrgency">Launch Timeline</Label>
                  <Select
                    value={form.launchUrgency}
                    onValueChange={(v) => updateField("launchUrgency", v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">
                        ASAP — I need leads yesterday
                      </SelectItem>
                      <SelectItem value="standard">
                        Standard — Within the 14-day guarantee
                      </SelectItem>
                      <SelectItem value="planning">
                        Planning — Getting organized first
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="mb-3 block">
                    Preferred Outreach Channels
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {CHANNELS.map((ch) => (
                      <label
                        key={ch.id}
                        className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                      >
                        <Checkbox
                          checked={form.preferredChannels.includes(ch.id)}
                          onCheckedChange={() => toggleChannel(ch.id)}
                        />
                        <span className="text-sm text-foreground">
                          {ch.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="additionalNotes">
                    Anything Else We Should Know?
                  </Label>
                  <Textarea
                    id="additionalNotes"
                    placeholder="Special requirements, integrations, questions, etc."
                    value={form.additionalNotes}
                    onChange={(e) =>
                      updateField("additionalNotes", e.target.value)
                    }
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="ghost"
                onClick={() => setCurrentStep((s) => s - 1)}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              <span className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {STEPS.length}
              </span>

              {currentStep < STEPS.length - 1 ? (
                <Button
                  variant="hero"
                  onClick={() => setCurrentStep((s) => s + 1)}
                  disabled={!canProceed()}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  variant="hero"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !canProceed()}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      Submit
                      <CheckCircle2 className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Onboarding;
