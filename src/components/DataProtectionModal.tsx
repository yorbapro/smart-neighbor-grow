import { useState } from "react";
import { Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DataProtectionModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 underline underline-offset-2 transition-colors">
          <Shield className="w-3.5 h-3.5" />
          How we protect your data
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            How We Protect Your Data
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-5 py-4">
          <div className="flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">1</span>
            <p className="text-muted-foreground text-sm">We don't record without consent. Recording is opt-in and consent-based only.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">2</span>
            <p className="text-muted-foreground text-sm">We don't store audio longer than your configured retention window (default 90 days, fully configurable).</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">3</span>
            <p className="text-muted-foreground text-sm">Your data is yours — request deletion anytime with one click.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DataProtectionModal;
