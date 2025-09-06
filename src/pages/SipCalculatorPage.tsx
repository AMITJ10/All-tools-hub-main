import { Helmet } from "react-helmet-async";
import { SIPCalculator } from "@/components/calculators/SIPCalculator";

export default function SipCalculatorPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <Helmet>
        <title>SIP Calculator Online – Mutual Fund Investment Returns (2025)</title>
        <meta
          name="description"
          content="Use our free SIP Calculator to estimate mutual fund returns. Plan monthly investments and future value in seconds."
        />
        <link rel="canonical" href="https://calculatorapps.net/sip-calculator" />
      </Helmet>

      <h1 className="text-2xl font-bold mb-4">SIP Calculator Online – Mutual Fund Planner</h1>
      <p className="mb-6 text-muted-foreground">
        Estimate the future value of your monthly investments. Adjust tenure and expected return rate to plan your goals.
      </p>

      <SIPCalculator />
    </main>
  );
}
