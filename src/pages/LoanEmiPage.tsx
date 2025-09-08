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

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <h2 className="text-2xl font-semibold">
            Understanding Your Loan EMI
          </h2>
          <p>
            An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full. Our calculator helps you determine this monthly amount based on your loan principal, interest rate, and tenure.
          </p>
          
          <h3 className="text-xl font-semibold">How to Use the EMI Calculator</h3>
          <ol>
            <li><strong>Enter Principal Amount:</strong> Input the total amount of the loan you are taking.</li>
            <li><strong>Enter Interest Rate:</strong> Provide the annual interest rate for the loan.</li>
            <li><strong>Enter Tenure:</strong> Input the total duration of the loan in years.</li>
            <li><strong>Analyze Results:</strong> The calculator will show your monthly EMI, total interest payable, and the total amount you will pay over the loan's lifetime.</li>
          </ol>

          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is an amortization schedule?</AccordionTrigger>
              <AccordionContent>
                An amortization schedule is a table detailing each periodic payment on a loan. It shows how much of each payment is applied to interest and how much to the principal. Our calculator shows a preview for the first 12 months.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does loan tenure affect my EMI?</AccordionTrigger>
              <AccordionContent>
                A longer loan tenure results in a lower monthly EMI but increases the total interest you pay over the loan's duration. Conversely, a shorter tenure increases your EMI but reduces the total interest paid.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I use this for home, car, and personal loans?</AccordionTrigger>
              <AccordionContent>
                Yes, this calculator is versatile and can be used for any type of loan that has a fixed interest rate, including home loans, car loans, and personal loans.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
