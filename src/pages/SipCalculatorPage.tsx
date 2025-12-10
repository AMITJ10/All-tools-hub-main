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
import { Link } from "react-router-dom";

export default function SipCalculatorPage() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <Helmet>
        <title>
          SIP Calculator Online – Mutual Fund Investment Returns (2025) |
          CalculatorApps
        </title>
        <meta
          name="description"
          content="Use our free SIP Calculator to estimate mutual fund returns. Plan monthly investments, future value, and understand the power of compounding with detailed FAQs."
        />
        <link rel="canonical" href="https://calculatorapps.net/sip-calculator" />
      </Helmet>

      <nav className="mb-4 text-sm text-muted-foreground">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        / <span>SIP Calculator</span>
      </nav>

      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">SIP Calculator</h1>
          <p className="text-lg text-muted-foreground">
            Estimate the future value of your mutual fund investments and plan
            for your financial goals.
          </p>
        </div>

        <Card className="shadow-large p-6">
          <SIPCalculator />
        </Card>

        <article className="prose dark:prose-invert max-w-none space-y-6">
          <h2 className="text-2xl font-semibold">
            Understanding SIP Investments: A Path to Wealth Creation
          </h2>
          <p>
            A Systematic Investment Plan (SIP) is a disciplined method of
            investing a fixed amount of money in mutual funds at regular
            intervals (usually monthly). Instead of trying to &quot;time the
            market,&quot; a SIP allows you to invest consistently, taking
            advantage of market ups and downs through a powerful principle
            called rupee-cost averaging. Over the long term, this strategy,
            combined with the power of compounding, can be an effective way to
            build wealth.
          </p>

          <h3 className="text-xl font-semibold">
            The Power of Compounding Explained
          </h3>
          <p>
            Compounding is the process where your investment returns start to
            earn their own returns. For example, if you invest ₹100 and earn 10%
            interest, you&apos;ll have ₹110. The next year, you earn 10% on
            ₹110, not just the original ₹100. Over many years, this creates a
            snowball effect that can lead to exponential growth. SIPs make it
            easy to benefit from compounding because you invest regularly over a
            long period.
          </p>

          <h3 className="text-xl font-semibold">
            How to Use the SIP Calculator Effectively
          </h3>
          <ol>
            <li>
              <strong>Monthly Investment:</strong> Enter the amount you can
              comfortably invest each month. Consistency is more important than
              starting big.
            </li>
            <li>
              <strong>Expected Return Rate (%):</strong> Input the annual rate
              of return you anticipate. Historical equity mutual fund returns
              might be in the 12–15% range over the long term, but these are not
              guaranteed. Use a conservative estimate.
            </li>
            <li>
              <strong>Investment Period (Years):</strong> Specify the number of
              years you plan to stay invested. Compounding works best over
              longer time horizons such as 10+ years.
            </li>
            <li>
              <strong>Target Calculator:</strong> Switch to the &quot;Target
              Calculator&quot; tab to work backwards from a goal (for example,
              ₹1 Crore) and estimate the monthly SIP needed.
            </li>
          </ol>

          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is rupee-cost averaging?</AccordionTrigger>
              <AccordionContent>
                When you invest a fixed amount regularly, you automatically buy
                more units of a mutual fund when the price is low and fewer
                units when the price is high. This averages out your purchase
                cost over time and can reduce the impact of market volatility.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is the expected return rate guaranteed?
              </AccordionTrigger>
              <AccordionContent>
                No. Mutual fund investments are subject to market risks, and
                past performance does not guarantee future returns. The rate you
                enter is only an estimate to help you plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What is a good monthly SIP amount to start with?
              </AccordionTrigger>
              <AccordionContent>
                It depends on your income, expenses, existing investments and
                risk tolerance. Many investors start with smaller amounts (for
                example, ₹500–₹2,000 per month) and gradually step up their SIP
                amount as their income grows.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      </div>
    </main>
  );
}
