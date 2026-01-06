import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";
import PaymentSuccess from "./pages/PaymentSuccess";
import Terms from "./pages/Terms";
import Sacramento from "./pages/locations/Sacramento";
import Stockton from "./pages/locations/Stockton";
import Fresno from "./pages/locations/Fresno";
import Bakersfield from "./pages/locations/Bakersfield";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/locations/sacramento" element={<Sacramento />} />
          <Route path="/locations/stockton" element={<Stockton />} />
          <Route path="/locations/fresno" element={<Fresno />} />
          <Route path="/locations/bakersfield" element={<Bakersfield />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
