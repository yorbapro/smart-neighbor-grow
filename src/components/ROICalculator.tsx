import { useState, useMemo } from "react";
import { Calculator, DollarSign, Phone, Target, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ROICalculator = () => {
  const [jobValue, setJobValue] = useState(350);
  const [missedCalls, setMissedCalls] = useState(15);
  const [closeRate, setCloseRate] = useState(30);
  const [monthlyCost, setMonthlyCost] = useState(497);

  const results = useMemo(() => {
    const rate = closeRate / 100;
    const annualRecovered = jobValue * missedCalls * rate * 52;
    const annualCost = monthlyCost * 12;
    const roi = annualCost > 0 ? ((annualRecovered - annualCost) / annualCost) * 100 : 0;
    const netProfit = annualRecovered - annualCost;
    return { annualRecovered, annualCost, roi, netProfit };
  }, [jobValue, missedCalls, closeRate, monthlyCost]);

  const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground">AI Receptionist ROI Calculator</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <DollarSign className="w-4 h-4 text-muted-foreground" /> Average Job Value ($)
          </label>
          <Input type="number" value={jobValue} onChange={(e) => setJobValue(Number(e.target.value))} min={0} />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <Phone className="w-4 h-4 text-muted-foreground" /> Missed Calls Per Week
          </label>
          <Input type="number" value={missedCalls} onChange={(e) => setMissedCalls(Number(e.target.value))} min={0} />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <Target className="w-4 h-4 text-muted-foreground" /> Close Rate (%)
          </label>
          <Input type="number" value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))} min={0} max={100} />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <TrendingUp className="w-4 h-4 text-muted-foreground" /> Monthly AI Cost ($)
          </label>
          <Input type="number" value={monthlyCost} onChange={(e) => setMonthlyCost(Number(e.target.value))} min={0} />
        </div>
      </div>

      <div className="bg-gradient-subtle rounded-xl p-6 text-center space-y-4">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Annual Recovered Revenue</p>
        <p className="font-display text-4xl md:text-5xl font-bold text-primary">${fmt(results.annualRecovered)}</p>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Annual AI Cost</p>
            <p className="font-bold text-foreground">${fmt(results.annualCost)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Net Profit</p>
            <p className="font-bold text-primary">${fmt(results.netProfit)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">ROI</p>
            <p className="font-bold text-primary">{fmt(results.roi)}%</p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Button variant="hero" size="lg" asChild>
          <Link to="/ai-receptionist-readiness-assessment">Take the Readiness Assessment</Link>
        </Button>
      </div>
    </div>
  );
};

export default ROICalculator;
