import { Helmet } from "react-helmet-async";
import { BMICalculator } from "@/components/calculators/BMICalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function BmiPage() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <Helmet>
        <title>
          BMI Calculator Online – Check Body Mass Index & Health (2025)
        </title>
        <meta
          name="description"
          content="Use our free BMI Calculator to check your body mass index and health status based on height and weight. Works for adults and teens, with detailed explanations and FAQs."
        />
        <link
          rel="canonical"
          href="https://calculatorapps.net/bmi-calculator"
        />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">BMI Calculator Online</h1>
          <p className="text-lg text-muted-foreground">
            A free, instant tool to check your Body Mass Index (BMI) and understand
            your health status.
          </p>
        </div>

        <Card className="shadow-large">
          <CardContent className="p-6">
            <BMICalculator />
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <h2 className="text-2xl font-semibold">
            Understanding Your BMI Results
          </h2>
          <p>
            Body Mass Index (BMI) is a measure that uses your height and weight
            to work out if your weight is healthy. The BMI calculation divides
            an adult's weight in kilograms by their height in metres squared.
            This calculator provides your BMI and the corresponding WHO-defined
            category.
          </p>

          <h3 className="text-xl font-semibold">How to Use the Calculator</h3>
          <ol>
            <li>
              <strong>Select Your Units:</strong> Choose between Metric (cm,
              kg) or Imperial (inches, lbs) units.
            </li>
            <li>
              <strong>Enter Your Details:</strong> Input your height, weight,
              age, and gender.
            </li>
            <li>
              <strong>Choose Activity Level:</strong> Select the option that
              best describes your weekly physical activity. This is used to
              estimate your daily calorie needs.
            </li>
            <li>
              <strong>View Your Results:</strong> The calculator will
              instantly display your BMI, health category, estimated daily
              calorie needs, and recommended water intake.
            </li>
          </ol>

          <h3 className="text-xl font-semibold">The BMI Formula</h3>
          <p>
            The BMI is calculated using the following formula:
          </p>
          <pre className="bg-muted p-4 rounded-md">
            <code>BMI = weight (kg) / (height (m) * height (m))</code>
          </pre>
          <p>
            For imperial units, the calculation is:
          </p>
          <pre className="bg-muted p-4 rounded-md">
            <code>BMI = (weight (lbs) / (height (in) * height (in))) * 703</code>
          </pre>
          
          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What do the BMI categories mean?</AccordionTrigger>
              <AccordionContent>
                The standard BMI categories are: Below 18.5 (Underweight),
                18.5–24.9 (Normal or Healthy Weight), 25.0–29.9 (Overweight),
                and 30.0 and above (Obese).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is BMI accurate for everyone?</AccordionTrigger>
              <AccordionContent>
                BMI is a useful population-level measure but may not be
                accurate for individuals with high muscle mass (like
                athletes) or for older adults. It does not distinguish between
                fat and muscle mass. Always consult a healthcare professional
                for a comprehensive health assessment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Why are age and gender required?</AccordionTrigger>
              <AccordionContent>
                Age and gender are not used for the core BMI calculation but
                are essential for estimating your daily calorie needs using
                the Mifflin-St Jeor equation, which provides a more accurate
                metabolic rate estimate.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
