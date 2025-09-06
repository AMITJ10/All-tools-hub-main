import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// ✅ Import calculator pages
import BasicPage from "./pages/BasicPage";
import PercentageTipPage from "./pages/PercentageTipPage";
import CurrencyConverterPage from "./pages/CurrencyConverterPage";
import LoanEmiPage from "./pages/LoanEmiPage";
import BmiPage from "./pages/BmiPage";
import UnitConverterPage from "./pages/UnitConverterPage";
import SipCalculatorPage from "./pages/SipCalculatorPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ New calculator routes */}
          <Route path="/basic" element={<BasicPage />} />
          <Route path="/percentage-tip" element={<PercentageTipPage />} />
          <Route path="/currency-converter" element={<CurrencyConverterPage />} />
          <Route path="/loan-emi-calculator" element={<LoanEmiPage />} />
          <Route path="/bmi-calculator" element={<BmiPage />} />
          <Route path="/unit-converter" element={<UnitConverterPage />} />
          <Route path="/sip-calculator" element={<SipCalculatorPage />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
