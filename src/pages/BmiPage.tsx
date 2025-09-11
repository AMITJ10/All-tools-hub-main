// src/pages/BmiPage.tsx

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

        <article className="prose dark:prose-invert max-w-none space-y-6">
          <h2 className="text-2xl font-semibold">
            Understanding Your Body Mass Index (BMI)
          </h2>
          <p>
            Body Mass Index (BMI) is a widely used measure that uses your height and weight
            to determine if your weight is within a healthy range. The BMI calculation divides
            an adult's weight in kilograms by their height in metres squared. While it's a useful
            starting point for assessing weight status at a population level, it's important to
            understand its context and limitations for individual health.
          </p>

          <h3 className="text-xl font-semibold">How to Interpret Your BMI Result</h3>
          <p>The World Health Organization (WHO) defines the following BMI categories for adults:</p>
          <ul>
            <li><strong>Below 18.5:</strong> Underweight</li>
            <li><strong>18.5 – 24.9:</strong> Normal or Healthy Weight</li>
            <li><strong>25.0 – 29.9:</strong> Overweight</li>
            <li><strong>30.0 and Above:</strong> Obese</li>
          </ul>
           <p>
            Achieving and maintaining a healthy weight can help reduce the risk of several chronic
            diseases, including heart disease, type 2 diabetes, and certain types of cancer.
            This calculator provides your BMI and the corresponding category to help you on your health journey.
          </p>

          <h3 className="text-xl font-semibold">Beyond BMI: Daily Calorie and Water Intake</h3>
           <p>
            This tool does more than just calculate your BMI. It also estimates your daily calorie needs and recommended water intake.
            Your daily calorie needs are estimated using the Mifflin-St Jeor equation, which takes into account your age, gender, height, weight, and activity level to provide a personalized estimate of the energy your body requires to maintain its current weight.
          </p>

          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is BMI an accurate measure of health for everyone?</AccordionTrigger>
              <AccordionContent>
                BMI is a useful screening tool, but it has limitations. It does not distinguish between fat and muscle mass. For example, a very muscular person (like an athlete) could have a high BMI and be classified as "overweight" despite having very low body fat. Conversely, an older adult with significant muscle loss might have a "normal" BMI while having excess body fat. Therefore, it's best used in conjunction with other health metrics like waist circumference and a consultation with a healthcare professional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How is the daily calorie need calculated?</AccordionTrigger>
              <AccordionContent>
                We use the Mifflin-St Jeor equation, which is considered one of the most accurate methods for calculating Basal Metabolic Rate (BMR). The formula is: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + (a gender-specific value: +5 for men, -161 for women). This BMR is then multiplied by an activity factor (from 1.2 for sedentary to 1.9 for extremely active) to estimate your total daily calorie needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Why is knowing my BMI important?</AccordionTrigger>
              <AccordionContent>
                Knowing your BMI can be an important first step in understanding your health. A BMI outside the "normal" range can be an indicator of potential health risks. If your BMI is high, it may suggest an increased risk for conditions like hypertension, high cholesterol, and diabetes. If it's too low, it could indicate nutritional deficiencies or other health issues. It serves as a prompt to have a more in-depth conversation with your doctor about your overall health.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      </div>
    </main>
  );
}
