import { Helmet } from "react-helmet-async";
import { BMICalculator } from "@/components/calculators/BMICalculator";

export default function BmiPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <Helmet>
        <title>BMI Calculator Online – Check Body Mass Index & Health (2025)</title>
        <meta
          name="description"
          content="Use our free BMI Calculator to check your body mass index and health status based on height and weight. Works for adults and teens."
        />
        <link rel="canonical" href="https://calculatorapps.net/bmi-calculator" />
      </Helmet>

      <h1 className="text-2xl font-bold mb-4">BMI Calculator Online – Free Health Tool</h1>
      <p className="mb-6 text-muted-foreground">
        Enter height and weight to calculate BMI and see your category. Results follow WHO guidelines.
      </p>

      <BMICalculator />
    </main>
  );
}
