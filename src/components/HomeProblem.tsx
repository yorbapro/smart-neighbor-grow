import { AlertTriangle, PhoneOff, Clock, UserX, TrendingDown } from "lucide-react";

const problems = [
  { icon: PhoneOff, text: "Calls go unanswered." },
  { icon: Clock, text: "Leads sit in the CRM." },
  { icon: UserX, text: "Follow-ups never happen." },
  { icon: TrendingDown, text: "Marketing works… but conversion doesn't." },
];

const HomeProblem = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Real Problem
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Most Businesses Don't Have a Lead Problem.
            <br />
            <span className="text-gradient">They Have a System Problem.</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {problems.map((problem) => (
              <div
                key={problem.text}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <span className="text-foreground font-medium">{problem.text}</span>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground">
              Hiring more staff increases payroll — not efficiency.
            </p>
            <p className="text-xl font-display font-bold text-foreground">
              You don't need more people.{" "}
              <span className="text-primary">You need smarter infrastructure.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProblem;
