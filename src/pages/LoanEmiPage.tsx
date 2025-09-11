// src/pages/LoanEmiPage.tsx

import { Helmet } from "react-helmet-async";
import { LoanEMICalculator } from "@/components/calculators/LoanEMICalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function LoanEmiPage() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <Helmet>
        <title>Loan EMI Calculator Online – Calculate EMI for Loans (2025)</title>
        <meta
          name="description"
          content="Free Loan EMI Calculator to calculate monthly loan payments, interest, and total repayment for home, car, and personal loans. Includes amortization schedule and FAQs."
        />
        <link
          rel="canonical"
          href="https://calculatorapps.net/loan-emi-calculator"
        />
      </Helmet>
      
      <div className="space-y-8">
         <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">
            Loan EMI Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Plan your loans effectively by calculating your Equated Monthly Installment (EMI).
          </p>
        </div>

        <Card className="shadow-large p-6">
            <LoanEMICalculator />
        </Card>

        <article className="prose dark:prose-invert max-w-none space-y-6">
          <h2 className="text-2xl font-semibold">
            Understanding Your Loan's Equated Monthly Installment (EMI)
          </h2>
          <p>
            An Equated Monthly Installment (EMI) is the fixed payment you make to a lender each month to repay a loan. Each EMI payment consists of two parts: a portion that repays the principal amount and a portion that covers the interest accrued. Our calculator helps you precisely determine this monthly amount, empowering you to budget effectively and understand the true cost of your loan. By visualizing the total interest and total payment, you can make smarter financial decisions.
          </p>
          
          <h3 className="text-xl font-semibold">The Core Components of an EMI Calculation</h3>
            <ul>
                <li><strong>Principal Amount:</strong> This is the initial amount of money you borrow from the lender. A higher principal will result in a higher EMI.</li>
                <li><strong>Interest Rate:</strong> The annual percentage rate charged by the lender on the loan amount. This is one of the most significant factors affecting your EMI.</li>
                <li><strong>Loan Tenure:</strong> The total duration over which you will repay the loan, typically measured in years.</li>
            </ul>

          <h3 className="text-xl font-semibold">Strategic Financial Planning with the EMI Calculator</h3>
           <p>
            This tool is more than just a calculator; it's a financial planning instrument. Before committing to a loan, you can use it to run different scenarios. For example, see how a slightly higher down payment can reduce your principal and lower your EMI. Compare loan offers from different banks by inputting their respective interest rates. Or, understand the long-term savings by choosing a shorter tenure, even if the monthly payment is higher.
          </p>
            
          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is an amortization schedule and why is it important?</AccordionTrigger>
              <AccordionContent>
                An amortization schedule is a complete table of your loan payments, showing the breakdown of each EMI into principal and interest. In the beginning of the loan, a larger portion of your EMI goes towards interest. As time progresses, more of your payment is applied to the principal. Our calculator provides a first-year preview, which is crucial for understanding how your loan balance decreases and for planning any potential prepayments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I reduce my total interest payment?</AccordionTrigger>
              <AccordionContent>
                There are two primary ways to reduce the total interest you pay. First, opt for the shortest loan tenure you can comfortably afford. A shorter tenure means you pay interest for fewer years. Second, try to make partial prepayments towards your principal whenever possible. Reducing the principal amount directly reduces the base on which future interest is calculated, saving you a significant amount of money in the long run.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I use this for home, car, and personal loans?</AccordionTrigger>
              <AccordionContent>
                Absolutely. This calculator is designed for any type of fixed-rate amortizing loan. This makes it perfect for calculating the EMI for a wide range of financial products, including home loans, car loans, personal loans, and education loans.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      </div>
    </main>
  );
}
