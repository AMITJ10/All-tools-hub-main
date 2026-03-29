import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy – CalculatorApps</title>
        <meta
          name="description"
          content="Read the Privacy Policy for CalculatorApps to understand data collection, Google AdSense disclosures, cookie usage, consent choices, and your rights."
        />
        <link rel="canonical" href="https://calculatorapps.net/privacy" />
      </Helmet>

      <header className="glass border-b border-border/50 shadow-soft">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mr-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-gradient">Privacy Policy</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              This policy explains what data is collected on CalculatorApps, why
              it is collected, and how advertising and analytics providers may
              process that data.
            </p>
            <p className="text-sm text-muted-foreground">Last updated: March 9, 2026</p>
          </div>

          <Card className="glass border-2 border-primary/30">
            <CardHeader>
              <CardTitle>Important Google disclosure</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                Third-party vendors, including Google, may use cookies,
                web beacons, IP addresses, or other identifiers to serve and
                measure ads on this site.
              </p>
              <p>
                Learn how Google uses data when you use partner sites:
                <a
                  className="ml-2 text-primary hover:underline"
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noreferrer"
                >
                  How Google uses information from sites or apps that use our services
                </a>
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="glass border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Device and browser information.</li>
                    <li>Usage data such as pages viewed and session events.</li>
                    <li>IP address and coarse geolocation inferred from IP.</li>
                    <li>Cookies and similar technologies used for analytics/ads.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Email and message content if you contact us.</li>
                    <li>Calculator inputs (processed client-side; not stored server-side by us).</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-accent-health" />
                  Advertising, Cookies, and Consent
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  We use Google AdSense and Google Analytics. These partners may
                  place and read cookies on your browser, and may use web
                  beacons or IP addresses to collect information resulting from
                  ad serving and measurement.
                </p>
                <p>
                  We do not set cookies on Google-owned domains, and we do not
                  modify, intercept, or delete cookies set on Google domains.
                </p>
                <p>
                  For users in regions where consent is required (including EEA,
                  UK, and Switzerland), users should provide legally required
                  consent choices before personalized ad processing.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-accent-currency" />
                  Identifying Users, Sensitive Data, and Location Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  We do not intentionally send personally identifiable
                  information (PII) to Google advertising products.
                </p>
                <p>
                  We do not attempt to merge PII with previously
                  non-personally-identifiable data for ad targeting without
                  robust notice and required consent.
                </p>
                <p>
                  This site does not request precise device location (GPS,
                  Wi‑Fi, or cell-tower location) for ad personalization.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-2">
              <CardHeader>
                <CardTitle>Children and COPPA</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  CalculatorApps is intended for a general audience and is not
                  directed to children under 13.
                </p>
                <p>
                  If you believe a child has provided personal information,
                  contact us and we will remove it where applicable.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-2">
              <CardHeader>
                <CardTitle>Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Right to request access to data you provided to us.</li>
                  <li>Right to request correction or deletion where applicable.</li>
                  <li>Right to object to certain processing and withdraw consent.</li>
                  <li>
                    Ad personalization controls:
                    <a
                      className="ml-2 text-primary hover:underline"
                      href="https://adssettings.google.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Google Ad Settings
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-2">
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                For privacy questions, contact: <strong>calculatoraiask@gmail.com</strong>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
