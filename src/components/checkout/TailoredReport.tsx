import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, TrendingUp, Users, Clock, DollarSign, AlertTriangle, CheckCircle } from "lucide-react";
import type { LeadData } from "@/pages/GetStarted";

interface TailoredReportProps {
  leadData: LeadData;
  onProceed: () => void;
  onBack: () => void;
}

const TailoredReport = ({ leadData, onProceed, onBack }: TailoredReportProps) => {
  const report = useMemo(() => {
    // Generate report metrics based on industry and revenue
    const revenueMultipliers: Record<string, number> = {
      "Under $100K/year": 0.5,
      "$100K - $500K/year": 1,
      "$500K - $1M/year": 1.5,
      "$1M - $5M/year": 2,
      "$5M+/year": 3,
    };

    const industryLeadCounts: Record<string, number> = {
      "Professional Services (Legal, Accounting, Consulting)": 450,
      "Trade Services (HVAC, Solar, Contractors)": 380,
      "Industrial/Logistics": 320,
      "Healthcare/Medical": 410,
      "Real Estate": 520,
      "Technology/SaaS": 480,
      "Retail/E-commerce": 350,
      "Other": 400,
    };

    const multiplier = revenueMultipliers[leadData.monthlyRevenue] || 1;
    const baseLeads = industryLeadCounts[leadData.industry] || 400;
    
    const potentialLeads = Math.round(baseLeads * multiplier);
    const missedLeads = Math.round(potentialLeads * 0.78); // 78% are missed
    const avgDealValue = leadData.industry.includes("Professional") ? 5000 : 
                         leadData.industry.includes("Trade") ? 8000 : 
                         leadData.industry.includes("Industrial") ? 15000 : 4000;
    const conversionRate = 0.15;
    const potentialRevenue = Math.round(missedLeads * conversionRate * avgDealValue);
    const currentResponseTime = 47; // hours
    const improvedResponseTime = 1; // minute

    return {
      potentialLeads,
      missedLeads,
      potentialRevenue,
      avgDealValue,
      currentResponseTime,
      improvedResponseTime,
      monthlyLeadGoal: Math.round(potentialLeads / 12),
    };
  }, [leadData]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-hero rounded-2xl p-8 text-center text-primary-foreground">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
          AI Growth Report for {leadData.businessName}
        </h1>
        <p className="text-primary-foreground/80">
          Based on your industry: {leadData.industry}
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-6 h-6 text-destructive" />
          </div>
          <p className="text-4xl font-display font-bold text-foreground mb-2">
            {report.missedLeads}
          </p>
          <p className="text-sm text-muted-foreground">
            Leads Missed Annually
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            (78% of inquiries go to first responder)
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-6 h-6 text-primary" />
          </div>
          <p className="text-4xl font-display font-bold text-foreground mb-2">
            ${(report.potentialRevenue / 1000).toFixed(0)}K
          </p>
          <p className="text-sm text-muted-foreground">
            Revenue Left on the Table
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            (at {(0.15 * 100).toFixed(0)}% conversion rate)
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-accent" />
          </div>
          <p className="text-4xl font-display font-bold text-foreground mb-2">
            47hrs
          </p>
          <p className="text-sm text-muted-foreground">
            Avg. Industry Response Time
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            (vs. our 60-second guarantee)
          </p>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="bg-card border border-destructive/30 rounded-xl p-6">
        <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-destructive" />
          Your Biggest Challenge: {leadData.biggestChallenge}
        </h2>
        <p className="text-muted-foreground">
          Based on "{leadData.currentLeadSource}" as your current lead source, 
          you're likely leaving significant revenue on the table. The data shows that 
          businesses in your industry who implement AI-powered lead response systems 
          see an average 3.2x increase in qualified meetings within 90 days.
        </p>
      </div>

      {/* Solution Preview */}
      <div className="bg-secondary/50 rounded-xl p-6">
        <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-accent" />
          What BrightLaunchIQ Will Deliver
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-primary mt-1" />
            <div>
              <p className="font-semibold text-foreground">{report.monthlyLeadGoal}+ New Leads/Month</p>
              <p className="text-sm text-muted-foreground">Targeted to your ideal customer profile</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-1" />
            <div>
              <p className="font-semibold text-foreground">60-Second Response Time</p>
              <p className="text-sm text-muted-foreground">24/7 automated engagement</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-primary mt-1" />
            <div>
              <p className="font-semibold text-foreground">Multi-Channel Outreach</p>
              <p className="text-sm text-muted-foreground">Calls, SMS, email, LinkedIn, FB Messenger</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-primary mt-1" />
            <div>
              <p className="font-semibold text-foreground">$16.60/Day Investment</p>
              <p className="text-sm text-muted-foreground">vs. $80K+/year for a human hire</p>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculation */}
      <div className="bg-card border border-primary/30 rounded-xl p-6">
        <h2 className="font-display text-xl font-bold text-foreground mb-4">
          Your Potential ROI
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-muted-foreground">Annual Investment</span>
            <span className="font-semibold text-foreground">$7,500 ($1,500 setup + $500×12)</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-muted-foreground">Captured Leads (conservative 25%)</span>
            <span className="font-semibold text-foreground">{Math.round(report.missedLeads * 0.25)} leads</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-muted-foreground">New Closed Deals (15% conversion)</span>
            <span className="font-semibold text-foreground">{Math.round(report.missedLeads * 0.25 * 0.15)} deals</span>
          </div>
          <div className="flex justify-between items-center py-2 bg-accent/10 rounded-lg px-3">
            <span className="font-semibold text-foreground">Potential Additional Revenue</span>
            <span className="font-bold text-accent text-lg">
              ${(Math.round(report.missedLeads * 0.25 * 0.15 * report.avgDealValue) / 1000).toFixed(0)}K+
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="outline" onClick={onBack} className="sm:w-auto">
          <ArrowLeft className="mr-2" size={16} />
          Edit Details
        </Button>
        <Button variant="hero" size="lg" onClick={onProceed} className="flex-1">
          Claim Your Digital Teammate
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        14-Day Speed to Lead Guarantee • Cancel Anytime • No Long-Term Contracts
      </p>
    </div>
  );
};

export default TailoredReport;
