import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Download, 
  Search, 
  Loader2, 
  LogOut,
  Mail,
  CheckCircle,
  XCircle,
  RefreshCw,
  BarChart3,
  Send,
  TrendingUp,
  Target,
  Clock,
  FileText,
  Eye,
  Rocket
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { format, subDays, startOfDay } from "date-fns";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from "recharts";
import LeadDetailModal from "@/components/admin/LeadDetailModal";
import AdminOnboardingTab from "@/components/admin/AdminOnboardingTab";


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

const COLORS = ['#0ea5e9', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];

const AdminLeads = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isSendingFollowups, setIsSendingFollowups] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterIndustry, setFilterIndustry] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  useEffect(() => {
    document.title = "Leads Dashboard | BrightLaunchIQ Admin";
    checkAuthAndFetchLeads();
  }, []);

  const checkAuthAndFetchLeads = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/admin");
      return;
    }

    const { data: roles, error: roleError } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (roleError || !roles) {
      toast.error("Admin access required");
      await supabase.auth.signOut();
      navigate("/admin");
      return;
    }

    fetchLeads();
  };

  const fetchLeads = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("aeo_audit_leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to fetch leads");
      console.error(error);
    } else {
      setLeads(data || []);
    }
    setIsLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const markAsConverted = async (id: string, converted: boolean) => {
    const { error } = await supabase
      .from("aeo_audit_leads")
      .update({ 
        converted, 
        converted_at: converted ? new Date().toISOString() : null 
      })
      .eq("id", id);

    if (error) {
      toast.error("Failed to update lead");
    } else {
      toast.success(converted ? "Marked as converted" : "Marked as not converted");
      fetchLeads();
    }
  };

  const triggerFollowupEmails = async () => {
    setIsSendingFollowups(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-followup-emails");
      
      if (error) throw error;
      
      if (data.total > 0) {
        toast.success(`Sent ${data.total} follow-up emails (${data.sent.first} day 1, ${data.sent.second} day 3, ${data.sent.third} day 7)`);
      } else {
        toast.info("No follow-up emails needed at this time");
      }
      fetchLeads();
    } catch (err) {
      console.error("Follow-up error:", err);
      toast.error("Failed to send follow-up emails");
    } finally {
      setIsSendingFollowups(false);
    }
  };

  const exportToCSV = () => {
    const filteredLeads = getFilteredLeads();
    const headers = [
      "Email", "Business Name", "Industry", "City", "State", "Website",
      "Services", "AEO Score", "Potential Score", "Converted", "Created At",
      "Follow-up 1", "Follow-up 2", "Follow-up 3"
    ];

    const csvContent = [
      headers.join(","),
      ...filteredLeads.map(lead => [
        `"${lead.email}"`,
        `"${lead.business_name}"`,
        `"${lead.industry}"`,
        `"${lead.city}"`,
        `"${lead.state}"`,
        `"${lead.website || ""}"`,
        `"${lead.services.replace(/"/g, '""')}"`,
        lead.overall_score || "",
        lead.potential_score || "",
        lead.converted ? "Yes" : "No",
        format(new Date(lead.created_at), "yyyy-MM-dd HH:mm"),
        lead.followup_1_sent_at ? format(new Date(lead.followup_1_sent_at), "yyyy-MM-dd HH:mm") : "",
        lead.followup_2_sent_at ? format(new Date(lead.followup_2_sent_at), "yyyy-MM-dd HH:mm") : "",
        lead.followup_3_sent_at ? format(new Date(lead.followup_3_sent_at), "yyyy-MM-dd HH:mm") : ""
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `aeo-leads-${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();
    toast.success(`Exported ${filteredLeads.length} leads`);
  };

  const getFilteredLeads = () => {
    return leads.filter(lead => {
      const matchesSearch = searchTerm === "" || 
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.business_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.city.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesIndustry = filterIndustry === "all" || 
        lead.industry.toLowerCase() === filterIndustry.toLowerCase();
      
      const matchesStatus = filterStatus === "all" ||
        (filterStatus === "converted" && lead.converted) ||
        (filterStatus === "not_converted" && !lead.converted);

      return matchesSearch && matchesIndustry && matchesStatus;
    });
  };

  // Analytics calculations
  const getAnalytics = () => {
    const total = leads.length;
    const converted = leads.filter(l => l.converted).length;
    const conversionRate = total > 0 ? (converted / total * 100).toFixed(1) : 0;

    // Score distribution
    const scoreRanges = [
      { range: "0-25", count: 0, fill: COLORS[4] },
      { range: "26-50", count: 0, fill: COLORS[3] },
      { range: "51-75", count: 0, fill: COLORS[1] },
      { range: "76-100", count: 0, fill: COLORS[2] },
    ];
    leads.forEach(lead => {
      const score = lead.overall_score || 0;
      if (score <= 25) scoreRanges[0].count++;
      else if (score <= 50) scoreRanges[1].count++;
      else if (score <= 75) scoreRanges[2].count++;
      else scoreRanges[3].count++;
    });

    // Industry breakdown
    const industryMap: Record<string, number> = {};
    leads.forEach(lead => {
      industryMap[lead.industry] = (industryMap[lead.industry] || 0) + 1;
    });
    const industryData = Object.entries(industryMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);

    // Follow-up effectiveness
    const withFollowup1 = leads.filter(l => l.followup_1_sent_at).length;
    const withFollowup2 = leads.filter(l => l.followup_2_sent_at).length;
    const withFollowup3 = leads.filter(l => l.followup_3_sent_at).length;
    const convertedAfterFollowup = leads.filter(l => l.converted && l.followup_1_sent_at).length;

    const followupData = [
      { name: "No Follow-up", leads: total - withFollowup1, converted: leads.filter(l => l.converted && !l.followup_1_sent_at).length },
      { name: "After Email 1", leads: withFollowup1 - withFollowup2, converted: leads.filter(l => l.converted && l.followup_1_sent_at && !l.followup_2_sent_at).length },
      { name: "After Email 2", leads: withFollowup2 - withFollowup3, converted: leads.filter(l => l.converted && l.followup_2_sent_at && !l.followup_3_sent_at).length },
      { name: "After Email 3", leads: withFollowup3, converted: leads.filter(l => l.converted && l.followup_3_sent_at).length },
    ];

    // Daily leads for last 14 days
    const dailyData = [];
    for (let i = 13; i >= 0; i--) {
      const date = startOfDay(subDays(new Date(), i));
      const nextDate = startOfDay(subDays(new Date(), i - 1));
      const count = leads.filter(l => {
        const created = new Date(l.created_at);
        return created >= date && created < nextDate;
      }).length;
      dailyData.push({
        date: format(date, "MMM d"),
        leads: count,
      });
    }

    return {
      total,
      converted,
      conversionRate,
      scoreRanges,
      industryData,
      followupData,
      dailyData,
      pendingFollowups: leads.filter(l => !l.converted && !l.followup_3_sent_at).length,
    };
  };

  const uniqueIndustries = [...new Set(leads.map(l => l.industry))];
  const filteredLeads = getFilteredLeads();
  const analytics = getAnalytics();

  const getFollowupStatus = (lead: Lead) => {
    if (lead.followup_3_sent_at) return "3/3 sent";
    if (lead.followup_2_sent_at) return "2/3 sent";
    if (lead.followup_1_sent_at) return "1/3 sent";
    return "Pending";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-foreground">
                  AEO Audit Leads
                </h1>
                <p className="text-muted-foreground">
                  {leads.length} total leads • {analytics.conversionRate}% conversion rate
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={triggerFollowupEmails} 
                disabled={isSendingFollowups}
              >
                {isSendingFollowups ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Send className="w-4 h-4 mr-2" />
                )}
                Send Follow-ups
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate("/admin/templates")}>
                <FileText className="w-4 h-4 mr-2" />
                Templates
              </Button>
              <Button variant="outline" size="sm" onClick={fetchLeads} disabled={isLoading}>
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button variant="outline" size="sm" onClick={exportToCSV}>
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          <Tabs defaultValue="leads" className="space-y-6">
            <TabsList>
              <TabsTrigger value="leads" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Leads
              </TabsTrigger>
              <TabsTrigger value="onboarding" className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Onboarding
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </TabsTrigger>
            </TabsList>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Total Leads</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">{analytics.total}</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-muted-foreground">Converted</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">{analytics.converted}</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Conversion Rate</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">{analytics.conversionRate}%</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-muted-foreground">Pending Follow-ups</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">{analytics.pendingFollowups}</div>
                </div>
              </div>

              {/* Charts Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Daily Leads */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">
                    Daily Leads (Last 14 Days)
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={analytics.dailyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px'
                          }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="leads" 
                          stroke="#0ea5e9" 
                          strokeWidth={2}
                          dot={{ fill: '#0ea5e9' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Score Distribution */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">
                    AEO Score Distribution
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analytics.scoreRanges}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="range" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px'
                          }} 
                        />
                        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                          {analytics.scoreRanges.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Charts Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Industry Breakdown */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">
                    Top Industries
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={analytics.industryData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                          labelLine={false}
                        >
                          {analytics.industryData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px'
                          }} 
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Follow-up Effectiveness */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">
                    Follow-up Effectiveness
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analytics.followupData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px'
                          }} 
                        />
                        <Legend />
                        <Bar dataKey="leads" name="Leads" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="converted" name="Converted" fill="#10b981" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Leads Tab */}
            <TabsContent value="leads" className="space-y-6">
              {/* Filters */}
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search email, business, city..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  
                  <Select value={filterIndustry} onValueChange={setFilterIndustry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      {uniqueIndustries.map(industry => (
                        <SelectItem key={industry} value={industry.toLowerCase()}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="converted">Converted</SelectItem>
                      <SelectItem value="not_converted">Not Converted</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="text-sm text-muted-foreground flex items-center">
                    Showing {filteredLeads.length} of {leads.length}
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                ) : filteredLeads.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    No leads found
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Business</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Industry</TableHead>
                          <TableHead className="text-center">Score</TableHead>
                          <TableHead>Follow-ups</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead className="text-center">Converted</TableHead>
                          <TableHead className="text-center">View</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredLeads.map((lead) => (
                          <TableRow key={lead.id}>
                            <TableCell className="font-medium">
                              {lead.business_name}
                            </TableCell>
                            <TableCell>
                              <a 
                                href={`mailto:${lead.email}`} 
                                className="text-primary hover:underline flex items-center gap-1"
                              >
                                <Mail className="w-3 h-3" />
                                {lead.email}
                              </a>
                            </TableCell>
                            <TableCell>
                              {lead.city}, {lead.state}
                            </TableCell>
                            <TableCell>{lead.industry}</TableCell>
                            <TableCell className="text-center">
                              <span className={`font-bold ${
                                (lead.overall_score || 0) >= 50 
                                  ? 'text-green-500' 
                                  : (lead.overall_score || 0) >= 25 
                                    ? 'text-yellow-500' 
                                    : 'text-red-500'
                              }`}>
                                {lead.overall_score || '-'}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                lead.followup_3_sent_at 
                                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                  : lead.followup_1_sent_at
                                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                    : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                              }`}>
                                {getFollowupStatus(lead)}
                              </span>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {format(new Date(lead.created_at), "MMM d, yyyy")}
                            </TableCell>
                            <TableCell className="text-center">
                              <button
                                onClick={() => markAsConverted(lead.id, !lead.converted)}
                                className={`p-2 rounded-lg transition-colors ${
                                  lead.converted 
                                    ? 'bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400'
                                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
                                }`}
                                title={lead.converted ? "Mark as not converted" : "Mark as converted"}
                              >
                                {lead.converted ? (
                                  <CheckCircle className="w-5 h-5" />
                                ) : (
                                  <XCircle className="w-5 h-5" />
                                )}
                              </button>
                            </TableCell>
                            <TableCell className="text-center">
                              <button
                                onClick={() => {
                                  setSelectedLead(lead);
                                  setDetailOpen(true);
                                }}
                                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                title="View details"
                              >
                                <Eye className="w-5 h-5" />
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Onboarding Tab */}
            <TabsContent value="onboarding">
              <AdminOnboardingTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <LeadDetailModal
        lead={selectedLead}
        open={detailOpen}
        onOpenChange={setDetailOpen}
        onUpdate={fetchLeads}
      />

      <Footer />
    </div>
  );
};

export default AdminLeads;
