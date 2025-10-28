// src/pages/PercentageTipPage.tsx

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
                Easily calculate tips, split bills, and solve a wide range of percentage problems in seconds.
            </p>
        </div>
        
        <Card className="shadow-large p-6">
            <PercentageTipCalculator />
        </Card>

        <article className="prose dark:prose-invert max-w-none space-y-6">
            <h2 className="text-2xl font-semibold">Mastering Percentages and Tipping Etiquette</h2>
            <p>
                Percentages are a fundamental part of daily life, from calculating a discount at your favorite store to leaving a fair tip at a restaurant. This versatile tool is designed to be your go-to assistant for all percentage-related calculations. It functions as a powerful tip calculator, simplifying the process of splitting a bill among friends, and also serves as a general percentage calculator for discounts, tax, and much more.
            </p>

            <h3 className="text-xl font-semibold">How to Use This Multi-Purpose Calculator</h3>
            <ol>
                <li><strong>Enter Base Amount:</strong> Input the total bill amount for tipping, or the original price for a discount calculation.</li>
                <li><strong>Set the Percentage:</strong> Enter the percentage you wish to calculate. For tipping, you can use the quick-select buttons (15%, 18%, 20%) for common rates.</li>
                <li><strong>Split the Bill (Optional):</strong> If you are sharing the cost, enter the number of people to divide the total amount evenly.</li>
                <li><strong>Review Your Results:</strong> The calculator instantly provides a clear breakdown, including the tip/percentage amount, the total, and the amount per person if applicable.</li>
            </ol>

            <h3 className="text-xl font-semibold">Understanding Percentages in Daily Life</h3>
            <p>Beyond tipping, this tool can help you with many common scenarios:</p>
            <ul>
                <li><strong>Shopping Sales:</strong> Want to know the final price of a $150 jacket that's 30% off? Enter 150 as the bill amount and 30 as the percentage. The "Tip Amount" ($45) is your discount, and the total minus the tip ($105) is your final price.</li>
                <li><strong>Calculating Tax:</strong> If sales tax is 8.5% on a $200 item, enter 200 as the bill amount and 8.5 as the percentage. The "Tip Amount" ($17) is your tax, and the "Total Amount" ($217) is your final cost.</li>
                <li><strong>Statistical Analysis:</strong> If you need to find what percentage one number is of another, you can use the formula: `(Part / Whole) * 100`.</li>
            </ul>
            
            <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is a standard tip percentage in the U.S.?</AccordionTrigger>
                    <AccordionContent>
                        While tipping is discretionary, in the United States, a standard tip for good restaurant service is generally between 15% and 20% of the pre-tax bill. For excellent service, 25% is not uncommon. For other services like food delivery or hairdressers, 10-15% is a common range.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Should I tip on the pre-tax or post-tax amount?</AccordionTrigger>
                    <AccordionContent>
                        Standard tipping etiquette suggests calculating the tip based on the subtotal of the bill, before sales tax is added. This is because the tax goes to the government, not the establishment, and service is provided on the goods, not the tax. However, some people prefer to tip on the total amount for simplicity, which is also generally appreciated.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How can I quickly calculate a tip without a calculator?</AccordionTrigger>
                    <AccordionContent>
                        A popular mental math trick is the "double the tax" method. In many places with an 8-10% sales tax, simply doubling the tax amount will give you a tip in the 16-20% range. Another simple method is to move the decimal point one place to the left to find 10% (e.g., 10% of $50 is $5), and then add half of that for 15% ($5 + $2.50 = $7.50).
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </article>
      </div>
    </main>
  );
}
