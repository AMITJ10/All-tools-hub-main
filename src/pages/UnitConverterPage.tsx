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
import { Link } from "react-router-dom";

export default function UnitConverterPage() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <Helmet>
        <title>
          Unit Converter Online – Convert Length, Weight, Temperature (2025) |
          CalculatorApps
        </title>
        <meta
          name="description"
          content="Free Unit Converter to convert length, weight, area, volume, temperature and speed. Quick, accurate, mobile-friendly, with formulas and FAQs."
        />
        <link rel="canonical" href="https://calculatorapps.net/unit-converter" />
      </Helmet>

      <nav className="mb-4 text-sm text-muted-foreground">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        / <span>Unit Converter</span>
      </nav>

      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Unit Converter</h1>
          <p className="text-lg text-muted-foreground">
            A versatile tool to convert between various units of measurement
            instantly.
          </p>
        </div>

        <Card className="shadow-large p-6">
          <UnitConverter />
        </Card>

        <article className="prose dark:prose-invert max-w-none space-y-6">
          <h2 className="text-2xl font-semibold">
            A Comprehensive Guide to Unit Conversion
          </h2>
          <p>
            Our unit converter helps you convert between units across key
            categories like length, weight, temperature, volume and speed. It is
            useful for students, professionals, travellers, chefs and anyone who
            needs quick, reliable conversions.
          </p>

          <h3 className="text-xl font-semibold">Why is unit conversion important?</h3>
          <p>
            Different countries and industries use different measurement
            systems. The two most common are the{" "}
            <strong>metric system</strong> (meters, kilograms, litres) and the{" "}
            <strong>imperial system</strong> (feet, pounds, gallons). Accurate
            conversion between these systems is essential for science,
            engineering, trade and everyday tasks such as cooking and shopping.
          </p>

          <h3 className="text-xl font-semibold">Practical examples</h3>
          <ul>
            <li>
              <strong>Cooking:</strong> Convert grams to ounces or millilitres
              to cups when using recipes from different regions.
            </li>
            <li>
              <strong>Travel:</strong> Convert kilometres to miles to estimate
              driving distances in another country.
            </li>
            <li>
              <strong>Online shopping:</strong> Convert inches to centimetres to
              check clothing or furniture sizes before ordering.
            </li>
            <li>
              <strong>Home improvement:</strong> Convert square feet to square
              metres to calculate flooring or paint requirements.
            </li>
          </ul>

          <h3 className="text-xl font-semibold">
            How to use the converter for best results
          </h3>
          <ol>
            <li>
              <strong>Select a category:</strong> Choose the type of
              measurement (length, weight, temperature, etc.).
            </li>
            <li>
              <strong>Enter a value:</strong> Type the number you want to
              convert.
            </li>
            <li>
              <strong>Choose &quot;From&quot; and &quot;To&quot; units:</strong>{" "}
              Pick your starting and target units from the dropdowns.
            </li>
            <li>
              <strong>Read the result:</strong> The converted value is shown
              instantly with sensible precision.
            </li>
          </ol>

          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How accurate are the conversions?</AccordionTrigger>
              <AccordionContent>
                Conversions are based on standard, internationally recognised
                factors. For almost all practical use, the precision is more
                than sufficient. Results are typically rounded to a reasonable
                number of decimal places for clarity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Why is temperature conversion different?
              </AccordionTrigger>
              <AccordionContent>
                Temperature uses formulas rather than a simple multiplication
                factor. For example, to convert Celsius to Fahrenheit, we use
                (°C × 9/5) + 32. The converter handles these formulas for you
                when converting between Celsius, Fahrenheit and Kelvin.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What base units does the converter use internally?
              </AccordionTrigger>
              <AccordionContent>
                Internally, the tool converts your input into a base unit (for
                example, metres for length or kilograms for weight) and then
                converts from that base to the target unit. This two-step
                process keeps conversions consistent across all unit pairs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      </div>
    </main>
  );
}
