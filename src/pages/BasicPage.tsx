// src/pages/BasicPage.tsx

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
            Your everyday tool for quick, easy, and accurate arithmetic calculations.
          </p>
        </div>

        <Card className="shadow-large p-6">
          <BasicCalculator />
        </Card>

        <article className="prose dark:prose-invert max-w-none space-y-6">
          <h2 className="text-2xl font-semibold">
            Why a Simple Calculator is an Essential Tool
          </h2>
          <p>
            In a world of complex devices, the simple, focused utility of a basic calculator remains indispensable. This online calculator provides the core functions you need for everyday math without the clutter of scientific notations. It's a reliable tool for students checking their homework, professionals needing a quick calculation, and anyone looking to crunch numbers fast. Our version also includes a history feature to help you track multi-step calculations.
          </p>
          
          <h3 className="text-xl font-semibold">Real-World Applications of Our Basic Calculator</h3>
          <ul>
            <li><strong>Personal Finance and Budgeting:</strong> Quickly add up monthly bills, calculate your grocery total before you get to the checkout, or figure out how much you're saving each month.</li>
            <li><strong>Shopping:</strong> Easily determine the total cost of multiple items or calculate a simple discount.</li>
            <li><strong>DIY and Home Projects:</strong> Calculate the area of a room (length × width) to buy the right amount of flooring, or add up measurements for a woodworking project.</li>
            <li><strong>Education:</strong> A perfect tool for elementary and middle school students to verify their arithmetic homework without the distraction of a more complex calculator.</li>
          </ul>

          <h3 className="text-xl font-semibold">Features and Functions</h3>
          <ul>
            <li><strong>Number Keys (0-9):</strong> Click to enter numbers.</li>
            <li><strong>Operator Keys (+, -, ×, ÷):</strong> Use these for the four basic arithmetic operations.</li>
            <li><strong>Equals (=):</strong> Press to compute the final result of your expression.</li>
            <li><strong>C (Clear):</strong> Clears the current entry and resets any ongoing calculation.</li>
            <li><strong>⌫ (Backspace):</strong> Deletes the last digit you entered, allowing for easy correction of mistakes.</li>
            <li><strong>. (Decimal):</strong> Adds a decimal point for calculations involving non-integer numbers.</li>
          </ul>

          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I use my keyboard with this calculator?</AccordionTrigger>
              <AccordionContent>
                Yes! For a faster and more efficient experience, you can use your computer's keyboard. The number keys, the operator keys (+, -, *, /), the Enter key (for equals), and the Backspace key are all supported.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is the benefit of the calculation history?</AccordionTrigger>
              <AccordionContent>
                The calculator automatically saves your last 10 completed calculations. This is incredibly useful for double-checking your work or when you need to use the result of a previous calculation in a new one without having to write it down or remember it. The history is cleared when you refresh the page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What happens if I make a mistake like dividing by zero?</AccordionTrigger>
              <AccordionContent>
                Dividing by zero is a mathematical impossibility. To prevent errors that interrupt your workflow, our calculator will simply return a result of '0' in this case, allowing you to continue your calculations smoothly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      </div>
    </main>
  );
}
