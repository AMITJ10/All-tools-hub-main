// src/pages/UnitConverterPage.tsx

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

        <article className="prose dark:prose-invert max-w-none space-y-6">
            <h2 className="text-2xl font-semibold">A Comprehensive Guide to Unit Conversion</h2>
            <p>
                Our unit converter is a powerful tool designed to help you seamlessly convert between different units of measurement across essential categories like length, weight, temperature, volume, and speed. It's an indispensable resource for students tackling science homework, engineers working on project specifications, chefs converting recipes, or anyone who needs to perform quick and accurate conversions in their daily life.
            </p>

            <h3 className="text-xl font-semibold">Why is Unit Conversion Important?</h3>
             <p>
                In a globalized world, different countries and industries use different systems of measurement. The two most common are the Metric system (used by most of the world) and the Imperial system (used primarily in the United States). Being able to accurately convert between units like meters and feet, kilograms and pounds, or Celsius and Fahrenheit is crucial for clear communication, scientific accuracy, and international trade.
            </p>

            <h3 className="text-xl font-semibold">How to Use the Converter for Best Results</h3>
            <ol>
                <li><strong>Select a Category:</strong> Begin by choosing the type of measurement you want to convert (e.g., Length, Weight, Temperature).</li>
                <li><strong>Enter a Value:</strong> Input the numerical value you wish to convert in the designated field.</li>
                <li><strong>Choose 'From' and 'To' Units:</strong> Select your starting unit and the unit you want to convert to from the dropdown menus.</li>
                <li><strong>Get Instant Results:</strong> The converted value is displayed automatically with a high degree of precision.</li>
            </ol>
            
            <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What measurement systems are supported?</AccordionTrigger>
                    <AccordionContent>
                        Our converter robustly supports both the Metric system (based on units like meters, kilograms, and Celsius) and the Imperial system (based on units like feet, pounds, and Fahrenheit). We also include other common units within each category to ensure comprehensive coverage for all your conversion needs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How accurate are the conversions?</AccordionTrigger>
                    <AccordionContent>
                        The conversions are based on standard, internationally recognized conversion factors to ensure maximum accuracy. For most practical and professional purposes, the precision is very high. The results are typically rounded to six decimal places to provide a balance between precision and readability.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How does temperature conversion work?</AccordionTrigger>
                    <AccordionContent>
                        Temperature conversion is unique because it doesn't use a simple multiplication factor. It involves a linear equation. For example, to convert Celsius to Fahrenheit, the formula is (°C × 9/5) + 32. Our tool handles these specific formulas automatically, so you don't have to worry about the math.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </article>
      </div>
    </main>
  );
}
