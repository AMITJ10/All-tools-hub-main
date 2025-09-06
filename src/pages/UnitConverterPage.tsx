import { Helmet } from "react-helmet-async";
import { UnitConverter } from "@/components/calculators/UnitConverter";

export default function UnitConverterPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <Helmet>
        <title>Unit Converter Online – Convert Length, Weight, Temperature (2025)</title>
        <meta
          name="description"
          content="Free Unit Converter to convert length, weight, area, volume, and temperature. Quick, accurate, and mobile-friendly."
        />
        <link rel="canonical" href="https://calculatorapps.net/unit-converter" />
      </Helmet>

      <h1 className="text-2xl font-bold mb-4">Unit Converter – Free Online Conversion Tool</h1>
      <p className="mb-6 text-muted-foreground">
        Convert between metric and imperial units for length, weight, area, volume, and temperature. Copy results with one click.
      </p>

      <UnitConverter />
    </main>
  );
}
