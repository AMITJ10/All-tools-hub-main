import { Helmet } from "react-helmet-async";
import { BasicCalculator } from "@/components/calculators/BasicCalculator";

export default function BasicPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <Helmet>
        <title>Online Basic Calculator – Free Simple Calculator (2025)</title>
        <meta
          name="description"
          content="Use our free online Basic Calculator to perform quick addition, subtraction, multiplication, and division. Mobile-friendly and accurate."
        />
        <link rel="canonical" href="https://calculatorapps.net/basic" />
      </Helmet>

      <h1 className="text-2xl font-bold mb-4">Basic Calculator Online – Free Simple Calculator</h1>
      <p className="mb-6 text-muted-foreground">
        Perform addition, subtraction, multiplication, and division instantly. Works offline as a PWA and supports keyboard input.
      </p>

      <BasicCalculator />
    </main>
  );
}
