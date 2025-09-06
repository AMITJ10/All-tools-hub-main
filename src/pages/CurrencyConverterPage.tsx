import { Helmet } from "react-helmet-async";
import { CurrencyConverter } from "@/components/calculators/CurrencyConverter";

export default function CurrencyConverterPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <Helmet>
        <title>Free Currency Converter – Live Exchange Rates (2025)</title>
        <meta
          name="description"
          content="Convert currencies instantly with our free online Currency Converter. Updated exchange rates for USD, INR, EUR, GBP, and more."
        />
        <link rel="canonical" href="https://calculatorapps.net/currency-converter" />
      </Helmet>

      <h1 className="text-2xl font-bold mb-4">Currency Converter Online – Live Rates</h1>
      <p className="mb-6 text-muted-foreground">
        Convert between USD, INR, EUR, GBP, and more. Save recent pairs and share results easily.
      </p>

      <CurrencyConverter />
    </main>
  );
}
