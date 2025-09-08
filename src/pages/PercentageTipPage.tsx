import { Helmet } from "react-helmet-async";
import { PercentageTipCalculator } from "@/components/calculators/PercentageTipCalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function PercentageTipPage() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <Helmet>
        <title>Percentage Calculator & Tip Calculator Online (2025)</title>
        <meta
          name="description"
          content="Instantly calculate percentages, discounts, and tips with our free Percentage & Tip Calculator. Fast, accurate, and easy to use for splitting bills."
        />
        <link rel="canonical" href="https://calculatorapps.net/percentage-tip" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Percentage & Tip Calculator</h1>
            <p className="text-lg text-muted-foreground">
                Easily calculate tips, split bills, and solve percentage problems in seconds.
            </p>
        </div>
        
        <Card className="shadow-large p-6">
            <PercentageTipCalculator />
        </Card>

        <div className="prose dark:prose-invert max-w-none space-y-6">
            <h2 className="text-2xl font-semibold">Mastering Percentages and Tips</h2>
            <p>
                Whether you're dining out, shopping during a sale, or just need to solve a quick math problem, understanding percentages is key. This tool is designed to be a versatile assistant for all your percentage-related needs. It functions as a powerful tip calculator, allowing you to easily split the bill among friends, and also as a general percentage calculator for discounts, increases, and more.
            </p>

            <h3 className="text-xl font-semibold">How to Use This Calculator</h3>
            <ol>
                <li><strong>Enter Bill Amount:</strong> Input the total amount of your bill or the base value for your percentage calculation.</li>
                <li><strong>Set Tip Percentage:</strong> Use the input field or the quick-select buttons (10%, 15%, etc.) to set the tip percentage.</li>
                <li><strong>Split the Bill:</strong> If you are sharing the cost, enter the number of people to split the bill with.</li>
                <li><strong>Check the Results:</strong> The calculator instantly provides the tip amount, total bill, and the amount per person if applicable.</li>
            </ol>
            
            <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is a standard tip percentage?</AccordionTrigger>
                    <AccordionContent>
                        In many countries like the United States, a standard tip for good service at a restaurant is between 15% and 20% of the pre-tax bill amount. Our calculator includes quick buttons for these common percentages.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Should I tip on the pre-tax or post-tax amount?</AccordionTrigger>
                    <AccordionContent>
                        Standard tipping etiquette suggests calculating the tip based on the subtotal of the bill, before sales tax is added. However, some people prefer to tip on the total amount for simplicity.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How can I use this for calculating discounts?</AccordionTrigger>
                    <AccordionContent>
                        You can easily use this tool as a discount calculator. Enter the original price in the "Bill Amount" field and the discount percentage in the "Tip Percentage" field. The "Tip Amount" will then show you the value of the discount.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </div>
    </main>
  );
}
