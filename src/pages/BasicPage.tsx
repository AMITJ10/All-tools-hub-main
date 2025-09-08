import { Helmet } from "react-helmet-async";
import { BasicCalculator } from "@/components/calculators/BasicCalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function BasicPage() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <Helmet>
        <title>Online Basic Calculator – Free Simple Calculator (2025)</title>
        <meta
          name="description"
          content="Use our free online Basic Calculator to perform quick addition, subtraction, multiplication, and division. Mobile-friendly, accurate, and with a calculation history feature."
        />
        <link rel="canonical" href="https://calculatorapps.net/basic" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Basic Calculator</h1>
          <p className="text-lg text-muted-foreground">
            Your everyday tool for quick and easy arithmetic calculations.
          </p>
        </div>

        <Card className="shadow-large">
          <BasicCalculator />
        </Card>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <h2 className="text-2xl font-semibold">
            About Our Basic Calculator
          </h2>
          <p>
            This online basic calculator provides the fundamental functions you need for everyday math. From simple addition and subtraction to multiplication and division, it's a reliable tool for students, professionals, and anyone needing to crunch numbers quickly. It also includes a history feature to track your previous calculations.
          </p>
          
          <h3 className="text-xl font-semibold">How to Use the Calculator</h3>
          <ul>
            <li><strong>Number Keys (0-9):</strong> Click to enter numbers.</li>
            <li><strong>Operator Keys (+, -, ×, ÷):</strong> Use these for arithmetic operations.</li>
            <li><strong>Equals (=):</strong> Press to compute the final result of an expression.</li>
            <li><strong>C (Clear):</strong> Clears the current display and any ongoing calculation.</li>
            <li><strong>⌫ (Backspace):</strong> Deletes the last digit entered.</li>
            <li><strong>. (Decimal):</strong> Adds a decimal point for floating-point numbers.</li>
          </ul>

          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Does this calculator support keyboard input?</AccordionTrigger>
              <AccordionContent>
                Yes! For faster use, you can use your keyboard's number pad for digits and operators (+, -, *, /) and the Enter key for equals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does the calculation history work?</AccordionTrigger>
              <AccordionContent>
                The calculator automatically saves your last 10 completed calculations. The history is cleared when you refresh the page or click the "Clear History" button.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What happens if I divide by zero?</AccordionTrigger>
              <AccordionContent>
                Dividing by zero is an undefined operation in mathematics. Our calculator will return a result of 0 and will not show an error to ensure a smooth user experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
