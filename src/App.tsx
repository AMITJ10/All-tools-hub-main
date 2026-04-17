// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import About from "./pages/About"; // ✅ Imported About page
import EditorialPolicy from "./pages/EditorialPolicy";
import LoanEmiGuidePage from "./pages/LoanEmiGuidePage";
import BmiGuidePage from "./pages/BmiGuidePage";
import CurrencyExchangeGuidePage from "./pages/CurrencyExchangeGuidePage";
import NotFound from "./pages/NotFound";

// Calculator Pages
import BasicPage from "./pages/BasicPage";
import PercentageTipPage from "./pages/PercentageTipPage";
import CurrencyConverterPage from "./pages/CurrencyConverterPage";
import LoanEmiPage from "./pages/LoanEmiPage";
import BmiPage from "./pages/BmiPage";
import UnitConverterPage from "./pages/UnitConverterPage";
import SipCalculatorPage from "./pages/SipCalculatorPage";
import { SiteFooter } from "./components/SiteFooter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/editorial-policy" element={<EditorialPolicy />} />
              <Route path="/guides/loan-emi" element={<LoanEmiGuidePage />} />
              <Route path="/guides/bmi" element={<BmiGuidePage />} />
              <Route
                path="/guides/currency-exchange"
                element={<CurrencyExchangeGuidePage />}
              />

              {/* Calculator Routes */}
              <Route path="/basic" element={<BasicPage />} />
              <Route path="/percentage-tip" element={<PercentageTipPage />} />
              <Route
                path="/currency-converter"
                element={<CurrencyConverterPage />}
              />
              <Route path="/loan-emi-calculator" element={<LoanEmiPage />} />
              <Route path="/bmi-calculator" element={<BmiPage />} />
              <Route path="/unit-converter" element={<UnitConverterPage />} />
              <Route path="/sip-calculator" element={<SipCalculatorPage />} />

              {/* Legacy URL redirects to canonical routes */}
              <Route path="/emi" element={<Navigate to="/loan-emi-calculator" replace />} />
              <Route path="/sip" element={<Navigate to="/sip-calculator" replace />} />
              <Route path="/currency" element={<Navigate to="/currency-converter" replace />} />
              <Route
                path="/loan-emi"
                element={<Navigate to="/loan-emi-calculator" replace />}
              />
              <Route path="/bmi" element={<Navigate to="/bmi-calculator" replace />} />
              <Route
                path="/tip-calculator"
                element={<Navigate to="/percentage-tip" replace />}
              />
              <Route path="/unit" element={<Navigate to="/unit-converter" replace />} />
              <Route path="/gst" element={<Navigate to="/percentage-tip" replace />} />
              <Route path="/calculator" element={<Navigate to="/" replace />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/loan-calculator" element={<Navigate to="/loan-emi-calculator" replace />} />
              <Route path="/tip" element={<Navigate to="/percentage-tip" replace />} />
              <Route path="/percentage-calculator" element={<Navigate to="/percentage-tip" replace />} />
              <Route path="/bmi-calculator-online" element={<Navigate to="/bmi-calculator" replace />} />
              <Route path="/currency-converter-online" element={<Navigate to="/currency-converter" replace />} />
              <Route path="/unit-converter-online" element={<Navigate to="/unit-converter" replace />} />
              <Route path="/sip-calculator-online" element={<Navigate to="/sip-calculator" replace />} />

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <SiteFooter />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
