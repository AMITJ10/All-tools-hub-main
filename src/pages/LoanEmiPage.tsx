import { Helmet } from "react-helmet-async";
import { LoanEMICalculator } from "@/components/calculators/LoanEMICalculator";

export default function LoanEmiPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <Helmet>
        <title>Loan EMI Calculator Online – Calculate EMI for Loans (2025)</title>
        <meta
          name="description"
          content="Free Loan EMI Calculator to calculate monthly loan payments, interest, and total repayment for home, car, and personal loans."
        />
        <link
          rel="canonical"
          href="https://calculatorapps.net/loan-emi-calculator"
        />
      </Helmet>

      <h1 className="text-2xl font-bold mb-4">
        Loan EMI Calculator Online – Free EMI Tool
      </h1>
      <p className="mb-6 text-muted-foreground">
        Estimate your monthly EMI, total interest, and total repayment. Adjust
        tenure and rate to compare scenarios.
      </p>

      <LoanEMICalculator />
    </main>
  );
}
