import { Helmet } from "react-helmet-async";
import { UnitConverter } from "@/components/calculators/UnitConverter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function UnitConverterPage() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <Helmet>
        <title>Unit Converter Online – Convert Length, Weight, Temperature (2025)</title>
        <meta
          name="description"
          content="Free Unit Converter to convert length, weight, area, volume, temperature and speed. Quick, accurate, mobile-friendly, with formulas and FAQs."
        />
        <link rel="canonical" href="https://calculatorapps.net/unit-converter" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Unit Converter</h1>
            <p className="text-lg text-muted-foreground">
                A versatile tool to convert between various units of measurement instantly.
            </p>
        </div>

        <Card className="shadow-large p-6">
            <UnitConverter />
        </Card>

        <div className="prose dark:prose-invert max-w-none space-y-6">
            <h2 className="text-2xl font-semibold">About Our Unit Converter</h2>
            <p>
                This unit converter is a comprehensive tool designed to help you convert between different units of measurement across various categories like length, weight, temperature, volume, and speed. It's perfect for students, engineers, scientists, and anyone who needs to perform quick and accurate conversions in their daily life.
            </p>

            <h3 className="text-xl font-semibold">How to Use the Converter</h3>
            <ol>
                <li><strong>Select a Category:</strong> Choose the type of measurement you want to convert (e.g., Length, Weight).</li>
                <li><strong>Enter a Value:</strong> Input the numerical value you wish to convert.</li>
                <li><strong>Choose 'From' and 'To' Units:</strong> Select the starting unit and the unit you want to convert to from the dropdown menus.</li>
                <li><strong>Get Instant Results:</strong> The converted value is displayed automatically.</li>
            </ol>
            
            <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What measurement systems are supported?</AccordionTrigger>
                    <AccordionContent>
                        Our converter supports both the Metric system (meters, kilograms, Celsius) and the Imperial system (feet, pounds, Fahrenheit), along with other common units in each category.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How accurate are the conversions?</AccordionTrigger>
                    <AccordionContent>
                        The conversions are based on standard, internationally recognized conversion factors. For most practical purposes, the accuracy is very high. The results are typically rounded to six decimal places for precision.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I convert complex units?</AccordionTrigger>
                    <AccordionContent>
                        This tool is designed for direct unit conversions within the same category. For more complex conversions involving multiple different types of units, you may need a more specialized scientific calculator.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </div>
    </main>
  );
}
