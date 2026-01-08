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
import { 
  Users, 
  Download, 
  Search, 
  Loader2, 
  LogOut,
  Mail,
  CheckCircle,
  XCircle,
  RefreshCw
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
  converted: boolean;
  created_at: string;
  followup_1_sent_at: string | null;
  followup_2_sent_at: string | null;
  followup_3_sent_at: string | null;
}

const AdminLeads = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterIndustry, setFilterIndustry] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");

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

    // Verify admin role
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

  const exportToCSV = () => {
    const filteredLeads = getFilteredLeads();
    const headers = [
      "Email",
      "Business Name",
      "Industry",
      "City",
      "State",
      "Website",
      "Services",
      "AEO Score",
      "Potential Score",
      "Converted",
      "Created At",
      "Follow-up 1",
      "Follow-up 2",
      "Follow-up 3"
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

  const uniqueIndustries = [...new Set(leads.map(l => l.industry))];
  const filteredLeads = getFilteredLeads();

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
                  {leads.length} total leads
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
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

          {/* Filters */}
          <div className="bg-card border border-border rounded-xl p-4 mb-6">
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
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminLeads;
