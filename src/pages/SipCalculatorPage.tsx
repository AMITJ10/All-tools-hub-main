import { Helmet } from "react-helmet-async";
import { SIPCalculator } from "@/components/calculators/SIPCalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function SipCalculatorPage() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <Helmet>
        <title>SIP Calculator Online – Mutual Fund Investment Returns (2025)</title>
        <meta
          name="description"
          content="Use our free SIP Calculator to estimate mutual fund returns. Plan monthly investments, future value, and understand the power of compounding with detailed FAQs."
        />
        <link rel="canonical" href="https://calculatorapps.net/sip-calculator" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">SIP Calculator</h1>
            <p className="text-lg text-muted-foreground">
                Estimate the future value of your mutual fund investments and plan for your financial goals.
            </p>
        </div>
        
        <Card className="shadow-large p-6">
            <SIPCalculator />
        </Card>
        
        <div className="prose dark:prose-invert max-w-none space-y-6">
            <h2 className="text-2xl font-semibold">Understanding SIP Investments</h2>
            <p>
                A Systematic Investment Plan (SIP) is a method of investing a fixed amount of money in mutual funds at regular intervals. It's a disciplined approach to investing that helps you take advantage of market fluctuations through a principle called rupee cost averaging. Over the long term, the power of compounding can significantly grow your wealth.
            </p>

            <h3 className="text-xl font-semibold">How to Use the SIP Calculator</h3>
            <ol>
                <li><strong>Monthly Investment:</strong> Enter the amount you plan to invest each month.</li>
                <li><strong>Expected Return:</strong> Input the annual rate of return you expect from your investments. This is an estimate; actual returns may vary.</li>
                <li><strong>Investment Period:</strong> Specify the number of years you plan to stay invested.</li>
                <li><strong>Calculate:</strong> The tool will project your total investment, potential gains, and the final maturity amount.</li>
                <li><strong>Target Calculator:</strong> You can also switch to the "Target Calculator" to determine the monthly SIP amount needed to reach a specific financial goal.</li>
            </ol>

            <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is the power of compounding?</AccordionTrigger>
                    <AccordionContent>
                        Compounding is the process where your investment returns start to earn their own returns. Over time, this can lead to exponential growth of your wealth. SIPs are an excellent way to leverage compounding because you are investing regularly over a long period.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is the expected return rate guaranteed?</AccordionTrigger>
                    <AccordionContent>
                        No, the expected return rate is not guaranteed. Mutual fund investments are subject to market risks, and past performance is not indicative of future results. The rate you enter should be a realistic estimate based on the type of fund you are investing in (e.g., equity, debt, hybrid).
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>What is a good monthly SIP amount to start with?</AccordionTrigger>
                    <AccordionContent>
                        The ideal amount depends on your financial goals, income, and risk appetite. The best part about SIPs is that you can start with a small amount (as low as ₹500 in many cases) and gradually increase it over time as your income grows.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </div>
    </main>
  );
}
