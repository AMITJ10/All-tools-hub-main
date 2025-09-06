import { Helmet } from "react-helmet-async";
import { PercentageTipCalculator } from "@/components/calculators/PercentageTipCalculator";

export default function PercentageTipPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <Helmet>
        <title>Percentage Calculator & Tip Calculator Online (2025)</title>
        <meta
          name="description"
          content="Instantly calculate percentages, discounts, and tips with our free Percentage & Tip Calculator. Fast, accurate, and easy to use."
        />
        <link rel="canonical" href="https://calculatorapps.net/percentage-tip" />
      </Helmet>

      <h1 className="text-2xl font-bold mb-4">Percentage & Tip Calculator Online</h1>
      <p className="mb-6 text-muted-foreground">
        Compute tips, percentage change, and discounts in seconds. Perfect for restaurants, shopping, and quick math.
      </p>

      <PercentageTipCalculator />
    </main>
  );
}
