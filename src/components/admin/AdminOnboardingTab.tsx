import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Loader2, Eye, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { toast } from "sonner";

interface OnboardingSubmission {
  id: string;
  email: string;
  business_name: string;
  industry: string;
  target_industries: string;
  target_company_size: string;
  target_locations: string;
  target_job_titles: string;
  competitors: string | null;
  differentiators: string | null;
  monthly_meeting_goal: number | null;
  revenue_target: string | null;
  sales_cycle_length: string | null;
  current_crm: string | null;
  current_outreach_tools: string | null;
  current_lead_sources: string | null;
  launch_urgency: string;
  preferred_channels: string[] | null;
  additional_notes: string | null;
  status: string;
  created_at: string;
}

const URGENCY_COLORS: Record<string, string> = {
  asap: "destructive",
  standard: "default",
  planning: "secondary",
};

const URGENCY_LABELS: Record<string, string> = {
  asap: "ASAP",
  standard: "Standard",
  planning: "Planning",
};

const AdminOnboardingTab = () => {
  const [submissions, setSubmissions] = useState<OnboardingSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterUrgency, setFilterUrgency] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selected, setSelected] = useState<OnboardingSubmission | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("onboarding_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to fetch onboarding submissions");
      console.error(error);
    } else {
      setSubmissions((data as OnboardingSubmission[]) || []);
    }
    setIsLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("onboarding_submissions")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast.error("Failed to update status");
    } else {
      toast.success(`Status updated to ${status}`);
      fetchSubmissions();
      if (selected?.id === id) {
        setSelected((prev) => (prev ? { ...prev, status } : null));
      }
    }
  };

  const filtered = submissions.filter((s) => {
    const matchesSearch =
      !searchTerm ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.business_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUrgency =
      filterUrgency === "all" || s.launch_urgency === filterUrgency;
    const matchesStatus =
      filterStatus === "all" || s.status === filterStatus;
    return matchesSearch && matchesUrgency && matchesStatus;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by email or business name..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={filterUrgency} onValueChange={setFilterUrgency}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Urgency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Urgency</SelectItem>
            <SelectItem value="asap">ASAP</SelectItem>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="planning">Planning</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="in_progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="text-sm text-muted-foreground">Total</div>
          <div className="text-2xl font-bold text-foreground">
            {submissions.length}
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="text-sm text-muted-foreground">New</div>
          <div className="text-2xl font-bold text-primary">
            {submissions.filter((s) => s.status === "new").length}
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="text-sm text-muted-foreground">ASAP</div>
          <div className="text-2xl font-bold text-destructive">
            {submissions.filter((s) => s.launch_urgency === "asap").length}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Business</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Urgency</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Channels</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No onboarding submissions found
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium">{s.business_name}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{s.email}</TableCell>
                  <TableCell>
                    <Badge variant={URGENCY_COLORS[s.launch_urgency] as any || "default"}>
                      {URGENCY_LABELS[s.launch_urgency] || s.launch_urgency}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={s.status}
                      onValueChange={(v) => updateStatus(s.id, v)}
                    >
                      <SelectTrigger className="h-7 text-xs w-[110px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {s.preferred_channels?.join(", ") || "—"}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {format(new Date(s.created_at), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelected(s)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              {selected?.business_name}
            </DialogTitle>
          </DialogHeader>

          {selected && (
            <div className="space-y-6">
              {/* Contact */}
              <Section title="Contact Info">
                <Field label="Email" value={selected.email} />
                <Field label="Industry" value={selected.industry} />
              </Section>

              {/* ICP */}
              <Section title="Ideal Customer Profile">
                <Field label="Target Industries" value={selected.target_industries} />
                <Field label="Company Size" value={selected.target_company_size} />
                <Field label="Locations" value={selected.target_locations} />
                <Field label="Job Titles" value={selected.target_job_titles} />
              </Section>

              {/* Competitors */}
              <Section title="Competitive Landscape">
                <Field label="Competitors" value={selected.competitors} />
                <Field label="Differentiators" value={selected.differentiators} />
              </Section>

              {/* Goals */}
              <Section title="Sales Goals">
                <Field
                  label="Monthly Meetings"
                  value={selected.monthly_meeting_goal?.toString()}
                />
                <Field label="Revenue Target" value={selected.revenue_target} />
                <Field label="Sales Cycle" value={selected.sales_cycle_length} />
              </Section>

              {/* Tools */}
              <Section title="Current Tools">
                <Field label="CRM" value={selected.current_crm} />
                <Field label="Outreach Tools" value={selected.current_outreach_tools} />
                <Field label="Lead Sources" value={selected.current_lead_sources} />
              </Section>

              {/* Launch */}
              <Section title="Launch Plan">
                <Field
                  label="Urgency"
                  value={URGENCY_LABELS[selected.launch_urgency] || selected.launch_urgency}
                />
                <Field
                  label="Channels"
                  value={selected.preferred_channels?.join(", ")}
                />
                <Field label="Notes" value={selected.additional_notes} />
              </Section>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="font-display font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
      {title}
    </h3>
    <div className="grid md:grid-cols-2 gap-2">{children}</div>
  </div>
);

const Field = ({ label, value }: { label: string; value?: string | null }) => (
  <div className="bg-muted/50 rounded-lg p-3">
    <div className="text-xs text-muted-foreground mb-1">{label}</div>
    <div className="text-sm text-foreground whitespace-pre-wrap">
      {value || "—"}
    </div>
  </div>
);

export default AdminOnboardingTab;
