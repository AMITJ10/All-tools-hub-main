// src/pages/Privacy.tsx

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
          content="Read the Privacy Policy for CalculatorApps to understand how we handle analytics data, cookies, calculator inputs, and advertising via Google AdSense."
        />
        <link rel="canonical" href="https://calculatorapps.net/privacy" />
      </Helmet>

      {/* Header */}
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

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. This policy explains how CalculatorApps handles your data.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: September 1, 2025
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="glass border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Device information (browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent on site)</li>
                    <li>IP address and approximate location data</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Email address (when subscribing to newsletters or contacting us)</li>
                    <li>Calculator inputs (processed in your browser and not stored on our servers)</li>
                    <li>Feedback and contact form submissions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-accent-health" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>To provide and improve our calculator services</li>
                  <li>To personalize your experience on CalculatorApps</li>
                  <li>To send newsletters and updates (only if you opt in)</li>
                  <li>To analyze usage patterns and optimize performance</li>
                  <li>To display relevant advertisements through Google AdSense</li>
                  <li>To respond to your inquiries and provide customer support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-accent-currency" />
                  Data Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Local Processing</h3>
                  <p className="text-muted-foreground">
                    Wherever possible, your calculator inputs are processed directly in your browser and are not transmitted to our servers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Data Encryption</h3>
                  <p className="text-muted-foreground">
                    All data transmission between your browser and our website is encrypted using industry-standard SSL/TLS protocols.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Third-Party Services</h3>
                  <p className="text-muted-foreground">
                    We use Google Analytics and Google AdSense, which collect data in line with their own privacy policies. These services may use cookies and similar technologies to measure usage and serve personalized or non-personalized ads.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-2">
              <CardHeader>
                <CardTitle>Cookies & Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold mb-2">Essential Cookies</h3>
                    <p>
                      Required for basic site functionality, such as remembering your preferences and keeping the site secure.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                    <p>
                      Help us understand how you use our site so that we can improve navigation, content, and performance over time.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Advertising Cookies</h3>
                    <p>
                      Used by Google AdSense and its partners to display relevant advertisements. Google and its partners may use cookies to serve ads based on your visits to this and/or other sites on the internet. You can opt out of personalized advertising through your Google Ads settings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-2">
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Right to access your personal data</li>
                  <li>Right to rectify or update your information</li>
                  <li>Right to delete your data (where applicable)</li>
                  <li>Right to object to certain types of data processing</li>
                  <li>Right to withdraw consent at any time</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-2">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or how your data is handled, please contact us at:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> calculatoraiask@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
