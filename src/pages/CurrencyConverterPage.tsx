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

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <h2 className="text-2xl font-semibold">
            How Our Currency Converter Works
          </h2>
          <p>
            Our currency converter provides a simple and fast way to see the latest exchange rates. We source our data from reliable financial data providers, ensuring that you get up-to-date information for your conversion needs. Whether you're traveling, shopping online, or managing international payments, this tool can help you understand the value of your money in another currency.
          </p>
          
          <h3 className="text-xl font-semibold">How to Use the Converter</h3>
          <ol>
            <li><strong>Enter Amount:</strong> Type the amount of money you want to convert in the "Amount" field.</li>
            <li><strong>Select 'From' Currency:</strong> Choose the currency you are converting from in the first dropdown menu.</li>
            <li><strong>Select 'To' Currency:</strong> Choose the currency you want to convert to in the second dropdown menu.</li>
            <li><strong>View Result:</strong> The converted amount will appear instantly below the inputs.</li>
            <li><strong>Swap & Refresh:</strong> Use the swap button to quickly reverse the currencies or the refresh button to fetch the latest rates.</li>
          </ol>
          
          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How often are the exchange rates updated?</AccordionTrigger>
              <AccordionContent>
                The exchange rates are updated frequently throughout the day from our data provider, the European Central Bank (ECB). The "Last updated" timestamp shows when the current rate was fetched.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are these the rates I will get from my bank?</AccordionTrigger>
              <AccordionContent>
                Not necessarily. The rates shown here are mid-market rates, which are the midpoint between the buy and sell rates on the global currency markets. Banks and money transfer services typically add a markup to these rates. This tool is best used for estimation purposes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What happens if the live rates cannot be fetched?</AccordionTrigger>
              <AccordionContent>
                If our tool cannot connect to the live rate service, it will attempt to use a cached rate from the last 24 hours to provide an estimate. A notification will appear to inform you that you are viewing a cached rate.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
