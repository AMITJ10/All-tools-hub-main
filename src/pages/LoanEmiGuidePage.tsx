import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function LoanEmiGuidePage() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <Helmet>
        <title>Complete Loan EMI Guide (with Formula & Examples) | CalculatorApps</title>
        <meta
          name="description"
          content="Learn how EMI is calculated, how amortization works, and how to reduce total interest. Includes formula breakdown, practical examples, and planning tips."
        />
        <link rel="canonical" href="https://calculatorapps.net/guides/loan-emi" />
      </Helmet>

      <article className="prose dark:prose-invert max-w-none space-y-6">
        <h1>Complete Loan EMI Guide</h1>
        <p>
          This guide explains what EMI is, how it is calculated, and how to use
          EMI insights to reduce borrowing cost over time.
        </p>

        <h2>EMI formula</h2>
        <p>
          EMI = P × r × (1+r)^n / ((1+r)^n − 1)
        </p>
        <ul>
          <li><strong>P:</strong> principal (loan amount)</li>
          <li><strong>r:</strong> monthly interest rate (annual rate / 12 / 100)</li>
          <li><strong>n:</strong> total number of monthly installments</li>
        </ul>

        <h2>Worked example</h2>
        <p>
          If you borrow ₹10,00,000 at 9% annual interest for 10 years (120
          months), monthly rate is 0.75%. Applying the formula yields an EMI of
          about ₹12,668. Your total repayment is around ₹15.2 lakh, with
          interest around ₹5.2 lakh.
        </p>

        <h2>How amortization changes over time</h2>
        <p>
          In the first years, interest is a large part of your EMI. As
          principal reduces, interest decreases and principal repayment
          accelerates. Reviewing this split helps you decide when prepayment
          gives maximum benefit.
        </p>

        <h2>How to reduce total interest</h2>
        <ol>
          <li>Choose the shortest tenure you can comfortably afford.</li>
          <li>Make periodic part-prepayments toward principal.</li>
          <li>Negotiate lower rate or refinance when rates fall.</li>
          <li>Increase EMI when your income increases.</li>
        </ol>

        <h2>Common mistakes</h2>
        <ul>
          <li>Choosing long tenure only for lower EMI.</li>
          <li>Ignoring processing fees and insurance cost.</li>
          <li>Not stress-testing EMI against emergency scenarios.</li>
        </ul>

        <h2>References</h2>
        <ul>
          <li>Reserve Bank of India resources on retail lending.</li>
          <li>Bank/NBFC amortization documentation and loan sanction terms.</li>
        </ul>

        <p>
          Ready to apply this? Use the <Link to="/loan-emi-calculator">Loan EMI Calculator</Link> and compare multiple scenarios.
        </p>
      </article>
    </main>
  );
}
