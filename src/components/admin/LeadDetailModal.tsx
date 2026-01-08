import { useState, useEffect } from "react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Mail, 
  MapPin, 
  Globe, 
  Calendar,
  TrendingUp,
  MessageSquare,
  Send,
  CheckCircle,
  Clock,
  FileText,
  Plus,
  Loader2
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface Lead {
  id: string;
  email: string;
  business_name: string;
  industry: string;
  city: string;
  state: string;
  website: string | null;
  services: string;
  overall_score: number | null;
  potential_score: number | null;
  audit_result: any;
  converted: boolean;
  converted_at: string | null;
  created_at: string;
  followup_1_sent_at: string | null;
  followup_2_sent_at: string | null;
  followup_3_sent_at: string | null;
}

interface Note {
  id: string;
  content: string;
  created_at: string;
}

interface LeadDetailModalProps {
  lead: Lead | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: () => void;
}

const LeadDetailModal = ({ lead, open, onOpenChange, onUpdate }: LeadDetailModalProps) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");
  const [isLoadingNotes, setIsLoadingNotes] = useState(false);
  const [isSavingNote, setIsSavingNote] = useState(false);

  useEffect(() => {
    if (lead && open) {
      fetchNotes();
    }
  }, [lead, open]);

  const fetchNotes = async () => {
    if (!lead) return;
    setIsLoadingNotes(true);
    const { data, error } = await supabase
      .from("lead_notes")
      .select("id, content, created_at")
      .eq("lead_id", lead.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching notes:", error);
    } else {
      setNotes(data || []);
    }
    setIsLoadingNotes(false);
  };

  const addNote = async () => {
    if (!lead || !newNote.trim()) return;
    setIsSavingNote(true);

    const { data: { user } } = await supabase.auth.getUser();
    
    const { error } = await supabase
      .from("lead_notes")
      .insert({
        lead_id: lead.id,
        user_id: user?.id,
        content: newNote.trim(),
      });

    if (error) {
      toast.error("Failed to add note");
      console.error(error);
    } else {
      toast.success("Note added");
      setNewNote("");
      fetchNotes();
    }
    setIsSavingNote(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    if (score >= 25) return "text-orange-500";
    return "text-red-500";
  };

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      excellent: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      good: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      fair: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
      poor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    };
    return colors[status] || colors.poor;
  };

  if (!lead) return null;

  const auditResult = lead.audit_result as {
    platforms?: Array<{ name: string; score: number; status: string }>;
    strengths?: string[];
    weaknesses?: string[];
    recommendations?: Array<{ priority: string; action: string; impact: string }>;
    competitorInsight?: string;
  } | null;

  // Build activity timeline
  const timeline = [
    { date: lead.created_at, event: "Audit Completed", icon: FileText, color: "bg-primary" },
  ];
  if (lead.followup_1_sent_at) {
    timeline.push({ date: lead.followup_1_sent_at, event: "Day 1 Follow-up Sent", icon: Send, color: "bg-blue-500" });
  }
  if (lead.followup_2_sent_at) {
    timeline.push({ date: lead.followup_2_sent_at, event: "Day 3 Follow-up Sent", icon: Send, color: "bg-purple-500" });
  }
  if (lead.followup_3_sent_at) {
    timeline.push({ date: lead.followup_3_sent_at, event: "Day 7 Follow-up Sent", icon: Send, color: "bg-orange-500" });
  }
  if (lead.converted && lead.converted_at) {
    timeline.push({ date: lead.converted_at, event: "Converted!", icon: CheckCircle, color: "bg-green-500" });
  }
  timeline.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className={`text-3xl font-bold ${getScoreColor(lead.overall_score || 0)}`}>
              {lead.overall_score || 0}
            </div>
            <div>
              <div className="text-xl">{lead.business_name}</div>
              <div className="text-sm text-muted-foreground font-normal">{lead.industry}</div>
            </div>
            {lead.converted && (
              <span className="ml-auto px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium dark:bg-green-900/30 dark:text-green-400">
                Converted
              </span>
            )}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-6 pb-4">
            {/* Contact Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href={`mailto:${lead.email}`} className="text-primary hover:underline truncate">
                  {lead.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>{lead.city}, {lead.state}</span>
              </div>
              {lead.website && (
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <a href={lead.website} target="_blank" rel="noopener" className="text-primary hover:underline truncate">
                    {lead.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>{format(new Date(lead.created_at), "MMM d, yyyy")}</span>
              </div>
            </div>

            {/* Services */}
            <div className="bg-secondary/30 rounded-xl p-4">
              <h4 className="font-semibold text-foreground mb-2">Services</h4>
              <p className="text-sm text-muted-foreground">{lead.services}</p>
            </div>

            {/* Platform Scores */}
            {auditResult?.platforms && (
              <div>
                <h4 className="font-semibold text-foreground mb-3">Platform Scores</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {auditResult.platforms.map((platform) => (
                    <div key={platform.name} className="bg-card border border-border rounded-lg p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">{platform.name}</div>
                      <div className={`text-xl font-bold ${getScoreColor(platform.score)}`}>
                        {platform.score}
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBadge(platform.status)}`}>
                        {platform.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Strengths & Weaknesses */}
            <div className="grid md:grid-cols-2 gap-4">
              {auditResult?.strengths && (
                <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Strengths</h4>
                  <ul className="space-y-1">
                    {auditResult.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-green-600 dark:text-green-300 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {auditResult?.weaknesses && (
                <div className="bg-orange-50 dark:bg-orange-900/10 rounded-xl p-4">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">Areas to Improve</h4>
                  <ul className="space-y-1">
                    {auditResult.weaknesses.map((w, i) => (
                      <li key={i} className="text-sm text-orange-600 dark:text-orange-300 flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Recommendations */}
            {auditResult?.recommendations && (
              <div>
                <h4 className="font-semibold text-foreground mb-3">Recommendations</h4>
                <div className="space-y-2">
                  {auditResult.recommendations.map((rec, i) => (
                    <div key={i} className="bg-card border border-border rounded-lg p-3 flex items-start gap-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium uppercase ${
                        rec.priority === 'high' 
                          ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {rec.priority}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{rec.action}</p>
                        <p className="text-xs text-muted-foreground mt-1">Impact: {rec.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Activity Timeline */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Activity Timeline</h4>
              <div className="relative border-l-2 border-border pl-6 space-y-4">
                {timeline.map((item, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-[31px] w-4 h-4 rounded-full ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-2.5 h-2.5 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-foreground">{item.event}</span>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(item.date), "MMM d, yyyy 'at' h:mm a")}
                      </span>
                    </div>
                  </div>
                ))}
                {!lead.converted && !lead.followup_3_sent_at && (
                  <div className="relative">
                    <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                      <Clock className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground italic">More follow-ups scheduled...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Notes Section */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Notes
              </h4>
              
              {/* Add Note */}
              <div className="flex gap-2 mb-4">
                <Textarea
                  placeholder="Add a note about this lead..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="min-h-[80px]"
                />
                <Button 
                  onClick={addNote} 
                  disabled={!newNote.trim() || isSavingNote}
                  className="self-end"
                >
                  {isSavingNote ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                </Button>
              </div>

              {/* Notes List */}
              {isLoadingNotes ? (
                <div className="text-center py-4">
                  <Loader2 className="w-5 h-5 animate-spin mx-auto text-muted-foreground" />
                </div>
              ) : notes.length === 0 ? (
                <p className="text-sm text-muted-foreground italic">No notes yet.</p>
              ) : (
                <div className="space-y-3">
                  {notes.map((note) => (
                    <div key={note.id} className="bg-secondary/30 rounded-lg p-3">
                      <p className="text-sm text-foreground whitespace-pre-wrap">{note.content}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {format(new Date(note.created_at), "MMM d, yyyy 'at' h:mm a")}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LeadDetailModal;
