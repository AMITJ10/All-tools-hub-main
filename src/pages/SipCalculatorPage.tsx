// src/pages/SipCalculatorPage.tsx

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
        
        <article className="prose dark:prose-invert max-w-none space-y-6">
            <h2 className="text-2xl font-semibold">Understanding SIP Investments: A Path to Wealth Creation</h2>
            <p>
                A Systematic Investment Plan (SIP) is a disciplined method of investing a fixed amount of money in mutual funds at regular intervals (usually monthly). Instead of trying to "time the market," which is nearly impossible, a SIP allows you to invest consistently, taking advantage of market ups and downs through a powerful principle called **rupee cost averaging**. Over the long term, this strategy, combined with the power of compounding, can be one of the most effective ways to build significant wealth.
            </p>

            <h3 className="text-xl font-semibold">The Power of Compounding Explained</h3>
            <p>
                Compounding is often called the eighth wonder of the world. It's the process where your investment returns start to earn their own returns. For example, if you invest ₹100 and earn 10% interest, you'll have ₹110. The next year, you earn 10% on ₹110, not just the original ₹100. Over many years, this creates a snowball effect that can lead to exponential growth. SIPs are an excellent way to leverage compounding because you are investing regularly over a long period.
            </p>

            <h3 className="text-xl font-semibold">How to Use the SIP Calculator Effectively</h3>
            <ol>
                <li><strong>Monthly Investment:</strong> Enter the amount you can comfortably invest each month. Consistency is more important than a large starting amount.</li>
                <li><strong>Expected Return Rate (%):</strong> Input the annual rate of return you anticipate. Historically, equity mutual funds have delivered returns in the range of 12-15% over the long term, but this is not guaranteed. It's wise to use a conservative estimate.</li>
                <li><strong>Investment Period (Years):</strong> Specify the number of years you plan to stay invested. Compounding works best over longer horizons (10+ years).</li>
                <li><strong>Target Calculator:</strong> You can also switch to the "Target Calculator" to work backward. Enter your financial goal (e.g., ₹1 Crore for retirement) to determine the monthly SIP amount needed to reach it.</li>
            </ol>

            <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Rupee Cost Averaging?</AccordionTrigger>
                    <AccordionContent>
                        When you invest a fixed amount regularly, you automatically buy more units of a mutual fund when the price is low and fewer units when the price is high. This averages out your purchase cost over time and can reduce the impact of market volatility on your investment.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is the expected return rate guaranteed?</AccordionTrigger>
                    <AccordionContent>
                        No, the expected return rate is not guaranteed. Mutual fund investments are subject to market risks, and past performance does not indicate future results. The rate you enter should be a realistic estimate based on the fund's category (equity, debt, etc.) and your own research.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>What is a good monthly SIP amount to start with?</AccordionTrigger>
                    <AccordionContent>
                        The ideal amount depends entirely on your financial goals, income, expenses, and risk tolerance. The best feature of SIPs is flexibility; you can start with a small amount (often as low as ₹500) and use the "step-up SIP" feature (offered by most fund houses) to increase your investment amount annually as your income grows.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </article>
      </div>
    </main>
  );
}
