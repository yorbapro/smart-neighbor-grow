import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Save, 
  Loader2, 
  ArrowLeft,
  Eye,
  Code,
  RefreshCw
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface EmailTemplate {
  id: string;
  template_key: string;
  name: string;
  subject: string;
  body_html: string;
  description: string | null;
  updated_at: string;
}

const AdminEmailTemplates = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null);
  const [editedSubject, setEditedSubject] = useState("");
  const [editedBody, setEditedBody] = useState("");
  const [previewMode, setPreviewMode] = useState<"code" | "preview">("code");

  useEffect(() => {
    document.title = "Email Templates | BrightLaunchIQ Admin";
    checkAuthAndFetch();
  }, []);

  const checkAuthAndFetch = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/admin");
      return;
    }

    // Client-side check for UX only — actual security is enforced by RLS policies on all tables
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roles) {
      toast.error("Admin access required");
      await supabase.auth.signOut();
      navigate("/admin");
      return;
    }

    fetchTemplates();
  };

  const fetchTemplates = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("email_templates")
      .select("*")
      .order("template_key");

    if (error) {
      toast.error("Failed to fetch templates");
      console.error(error);
    } else {
      setTemplates(data || []);
      if (data && data.length > 0 && !selectedTemplate) {
        selectTemplate(data[0]);
      }
    }
    setIsLoading(false);
  };

  const selectTemplate = (template: EmailTemplate) => {
    setSelectedTemplate(template);
    setEditedSubject(template.subject);
    setEditedBody(template.body_html);
  };

  // Shared DOMPurify configuration for defense-in-depth XSS prevention
  const SANITIZE_CONFIG = {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li',
      'h1', 'h2', 'h3', 'h4', 'div', 'span', 'table', 'tr',
      'td', 'th', 'tbody', 'thead', 'hr', 'img'
    ],
    ALLOWED_ATTR: ['href', 'style', 'class', 'src', 'alt', 'width', 'height'],
    ALLOW_DATA_ATTR: false,
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'base', 'form', 'input', 'textarea', 'button'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onmouseout', 'onfocus', 'onblur', 'onchange', 'onsubmit'],
  };

  const saveTemplate = async () => {
    if (!selectedTemplate) return;
    setIsSaving(true);

    const { data: { user } } = await supabase.auth.getUser();

    // Sanitize HTML before saving (defense-in-depth, server also sanitizes)
    const sanitizedHtml = DOMPurify.sanitize(editedBody, SANITIZE_CONFIG) as string;
    const { error } = await supabase
      .from("email_templates")
      .update({
        subject: editedSubject,
        body_html: sanitizedHtml,
        updated_at: new Date().toISOString(),
        updated_by: user?.id,
      })
      .eq("id", selectedTemplate.id);

    if (error) {
      toast.error("Failed to save template");
      console.error(error);
    } else {
      toast.success("Template saved");
      // Update local state with sanitized version
      setEditedBody(sanitizedHtml);
      fetchTemplates();
    }
    setIsSaving(false);
  };

  const resetTemplate = () => {
    if (selectedTemplate) {
      setEditedSubject(selectedTemplate.subject);
      setEditedBody(selectedTemplate.body_html);
    }
  };

  const hasChanges = selectedTemplate && (
    editedSubject !== selectedTemplate.subject || 
    editedBody !== selectedTemplate.body_html
  );

  // Variable sets by template category
  const auditVariables: Record<string, string> = {
    business_name: "Smith Plumbing Co.",
    overall_score: "35",
    potential_score: "82",
    score_improvement: "47",
    email: "john@smithplumbing.com",
  };

  const quizVariables: Record<string, string> = {
    first_name: "John",
    business_name: "Smith Plumbing Co.",
    annual_loss: "$62,400",
    missed_calls: "4",
    customer_value: "$600",
    goal_text: "capture every lead and maximize revenue",
    timing_text: "during peak hours",
  };

  const isQuizTemplate = (key: string) => key.startsWith("quiz_");
  const sampleData = selectedTemplate && isQuizTemplate(selectedTemplate.template_key)
    ? quizVariables
    : auditVariables;

  // Group templates
  const auditTemplates = templates.filter(t => !isQuizTemplate(t.template_key));
  const quizTemplates = templates.filter(t => isQuizTemplate(t.template_key));

  const getPreviewHtml = useMemo(() => {
    let html = editedBody;
    Object.entries(sampleData).forEach(([key, value]) => {
      html = html.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
    });
    // Sanitize HTML with defense-in-depth config to prevent XSS
    return DOMPurify.sanitize(html, SANITIZE_CONFIG) as string;
  }, [editedBody]);

  const getPreviewSubject = () => {
    let subject = editedSubject;
    Object.entries(sampleData).forEach(([key, value]) => {
      subject = subject.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
    });
    return subject;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="sm" onClick={() => navigate("/admin/leads")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Leads
            </Button>
            <div className="flex-1">
              <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                Email Templates
              </h1>
              <p className="text-muted-foreground">
                Customize follow-up email content
              </p>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Template List */}
              <div className="lg:col-span-1 space-y-4">
                {/* AEO Audit Templates */}
                <div className="bg-card border border-border rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-3 text-sm text-primary">AEO Audit</h3>
                  <div className="space-y-1.5">
                    {auditTemplates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => selectTemplate(template)}
                        className={`w-full text-left p-2.5 rounded-lg transition-colors ${
                          selectedTemplate?.id === template.id
                            ? 'bg-primary/10 border border-primary/20'
                            : 'hover:bg-secondary/50 border border-transparent'
                        }`}
                      >
                        <div className="font-medium text-foreground text-sm">{template.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{template.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Assessment Templates */}
                <div className="bg-card border border-border rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-3 text-sm text-primary">AI Receptionist Assessment</h3>
                  <div className="space-y-1.5">
                    {quizTemplates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => selectTemplate(template)}
                        className={`w-full text-left p-2.5 rounded-lg transition-colors ${
                          selectedTemplate?.id === template.id
                            ? 'bg-primary/10 border border-primary/20'
                            : 'hover:bg-secondary/50 border border-transparent'
                        }`}
                      >
                        <div className="font-medium text-foreground text-sm">{template.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{template.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Variable Reference */}
                <div className="bg-card border border-border rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-3 text-sm">Available Variables</h3>
                  <div className="space-y-1 text-xs">
                    {Object.keys(sampleData).map((key) => (
                      <div key={key} className="font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                        {`{{${key}}}`}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Editor */}
              <div className="lg:col-span-3">
                {selectedTemplate ? (
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {selectedTemplate.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={resetTemplate}
                          disabled={!hasChanges}
                        >
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Reset
                        </Button>
                        <Button 
                          variant="hero" 
                          size="sm" 
                          onClick={saveTemplate}
                          disabled={!hasChanges || isSaving}
                        >
                          {isSaving ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <Save className="w-4 h-4 mr-2" />
                          )}
                          Save Changes
                        </Button>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="mb-6">
                      <Label htmlFor="subject" className="mb-2 block">Subject Line</Label>
                      <Input
                        id="subject"
                        value={editedSubject}
                        onChange={(e) => setEditedSubject(e.target.value)}
                        className="font-mono text-sm"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Preview: <span className="text-foreground">{getPreviewSubject()}</span>
                      </p>
                    </div>

                    {/* Body Editor */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label>Email Body (HTML)</Label>
                        <Tabs value={previewMode} onValueChange={(v) => setPreviewMode(v as "code" | "preview")}>
                          <TabsList className="h-8">
                            <TabsTrigger value="code" className="text-xs px-3 h-6">
                              <Code className="w-3 h-3 mr-1" />
                              Code
                            </TabsTrigger>
                            <TabsTrigger value="preview" className="text-xs px-3 h-6">
                              <Eye className="w-3 h-3 mr-1" />
                              Preview
                            </TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>

                      {previewMode === "code" ? (
                        <Textarea
                          value={editedBody}
                          onChange={(e) => setEditedBody(e.target.value)}
                          className="font-mono text-xs min-h-[400px]"
                        />
                      ) : (
                        <div className="border border-border rounded-lg bg-white min-h-[400px] overflow-hidden">
                          {/* Use iframe sandbox for defense-in-depth XSS prevention */}
                          <iframe
                            sandbox="allow-same-origin"
                            srcDoc={`
                              <!DOCTYPE html>
                              <html>
                                <head>
                                  <style>
                                    body { 
                                      font-family: system-ui, -apple-system, sans-serif; 
                                      padding: 16px; 
                                      margin: 0;
                                      color: #1a1a1a;
                                      font-size: 14px;
                                      line-height: 1.6;
                                    }
                                    a { color: #3b82f6; }
                                    table { border-collapse: collapse; width: 100%; }
                                    td, th { padding: 8px; border: 1px solid #e5e5e5; }
                                    img { max-width: 100%; height: auto; }
                                  </style>
                                </head>
                                <body>${getPreviewHtml}</body>
                              </html>
                            `}
                            className="w-full min-h-[400px] border-0"
                            title="Email template preview"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-card border border-border rounded-xl p-12 text-center">
                    <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Select a template to edit</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminEmailTemplates;
