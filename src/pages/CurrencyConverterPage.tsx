// src/pages/CurrencyConverterPage.tsx

import { Helmet } from "react-helmet-async";
import { CurrencyConverter } from "@/components/calculators/CurrencyConverter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function CurrencyConverterPage() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <Helmet>
        <title>Free Currency Converter – Live Exchange Rates (2025)</title>
        <meta
          name="description"
          content="Convert currencies instantly with our free online Currency Converter. Updated exchange rates for USD, INR, EUR, GBP, and more, with detailed information and FAQs."
        />
        <link rel="canonical" href="https://calculatorapps.net/currency-converter" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Currency Converter</h1>
          <p className="text-lg text-muted-foreground">
            Get live exchange rates for hundreds of world currencies.
          </p>
        </div>

        <Card className="shadow-large p-6">
          <CurrencyConverter />
        </Card>

        <article className="prose dark:prose-invert max-w-none space-y-6">
          <h2 className="text-2xl font-semibold">
            How Our Currency Converter Works
          </h2>
          <p>
            Our currency converter provides a simple and fast way to see the latest exchange rates. We source our data from reliable financial data providers like the European Central Bank (ECB), ensuring that you get up-to-date information for your conversion needs. Whether you're a traveler planning a trip, an online shopper buying from an international store, or a business managing international payments, this tool is designed to help you understand the precise value of your money in another currency.
          </p>
          
          <h3 className="text-xl font-semibold">Understanding Exchange Rates</h3>
          <p>
            The value of a currency is determined by supply and demand in the foreign exchange market. The rate you see here is the "mid-market rate," which is the midpoint between the buy and sell prices of two currencies. While this is the fairest rate, it's important to note that banks and money transfer services often add a markup for their services. Therefore, you should use this tool as a reliable benchmark for your transactions.
          </p>

          <h3 className="text-xl font-semibold">How to Use the Converter</h3>
          <ol>
            <li><strong>Enter Amount:</strong> Type the amount of money you want to convert in the "Amount" field.</li>
            <li><strong>Select 'From' Currency:</strong> Choose the currency you are converting from in the first dropdown menu. You can type to search.</li>
            <li><strong>Select 'To' Currency:</strong> Choose the currency you want to convert to in the second dropdown menu.</li>
            <li><strong>View Result:</strong> The converted amount will appear instantly below the inputs.</li>
            <li><strong>Swap & Refresh:</strong> Use the swap button (<svg width="1em" height="1em" viewBox="0 0 24 24" className="inline h-4 w-4"><path fill="currentColor" d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></svg>) to quickly reverse the currencies or the refresh button to fetch the latest rates.</li>
          </ol>
          
          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How often are the exchange rates updated?</AccordionTrigger>
              <AccordionContent>
                The exchange rates are updated frequently throughout the day from our data provider. The "Last updated" timestamp shows when the current rate was fetched, giving you confidence in the data's freshness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are these the rates I will get from my bank?</AccordionTrigger>
              <AccordionContent>
                Not necessarily. The rates shown here are mid-market rates. Banks and money transfer services typically add a markup (a small percentage) to these rates to make a profit. This tool is best used as a baseline to ensure you are getting a fair deal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What happens if the live rates cannot be fetched?</AccordionTrigger>
              <AccordionContent>
                In the rare event that our tool cannot connect to the live rate service, it will attempt to use a cached rate from the last 24 hours to provide a reliable estimate. A notification will appear to inform you that you are viewing a cached rate.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      </div>
    </main>
  );
}
