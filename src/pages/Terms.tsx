// src/pages/Terms.tsx

import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service – CalculatorApps</title>
        <meta
          name="description"
          content="Read the Terms of Service for CalculatorApps, including usage rules, disclaimers, limitations of liability, and advertising/third-party link information."
        />
        <link rel="canonical" href="https://calculatorapps.net/terms" />
      </Helmet>

      {/* Header */}
      <header className="glass border-b border-border/50 shadow-soft">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mr-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-gradient">Terms of Service</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose dark:prose-invert max-w-none space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using the calculatorapps.net website.
            </p>
            <p className="text-sm text-muted-foreground">
              Last Updated: September 15, 2025
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website calculatorapps.net (&quot;the Service&quot;), operated by the
              CalculatorApps team (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;), you accept and agree to be bound
              by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Description of Service</h2>
            <p>
              The Service provides a suite of free online calculation and conversion tools for informational purposes.
              These tools are provided &quot;as is&quot; without any warranties of accuracy or reliability. The calculations
              should not be used as a substitute for professional financial, medical, or engineering advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
            <p>As a user of the Service, you agree to the following:</p>
            <ul>
              <li>
                You will use the tools for lawful and personal, non-commercial purposes only (unless you have explicit
                written permission from us).
              </li>
              <li>
                You are responsible for independently verifying the accuracy and applicability of any calculation results
                before making any decisions based on them.
              </li>
              <li>
                You will not use any automated system, such as robots or spiders, to access the Service in a manner that
                sends more request messages to our servers than a human can reasonably produce in the same period.
              </li>
              <li>You will not attempt to interfere with the proper working of the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              4. Disclaimer of Warranties and Limitation of Liability
            </h2>
            <Card className="glass border-2 border-destructive/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="w-5 h-5" />
                  Important Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong>No Financial or Medical Advice:</strong> The content and tools on calculatorapps.net are for
                  informational purposes only and do not constitute financial, legal, medical, or other professional
                  advice. You should consult with a qualified professional before making any financial or health-related
                  decisions.
                </p>
                <p>
                  <strong>Accuracy Disclaimer:</strong> While we make every effort to ensure the accuracy of our calculators
                  and the data they use (such as currency exchange rates), we cannot guarantee that all information will be
                  error-free. We shall not be liable for any losses or damages arising from inaccuracies.
                </p>
                <p>
                  <strong>Limitation of Liability:</strong> In no event shall CalculatorApps or its owners be liable for any
                  direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to
                  use our Service.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Advertising and Third-Party Links</h2>
            <p>
              The Service is supported by advertising through partners like Google AdSense. We may also include links to
              third-party websites or services that are not owned or controlled by CalculatorApps. We have no control over,
              and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or
              services. Your interactions with such third parties are solely between you and the third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property
              of CalculatorApps and its licensors. The Service is protected by copyright, trademark, and other laws. Our
              trademarks may not be used in connection with any product or service without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide
              notice of material changes by updating the &quot;Last Updated&quot; date at the top of this page. What
              constitutes a material change will be determined at our sole discretion. Your continued use of the Service
              after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us via our{' '}
              <Link to="/contact" className="text-primary hover:underline">
                contact page
              </Link>{' '}
              or by emailing us directly at <strong>calculatoraiask@gmail.com</strong>.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Terms;
