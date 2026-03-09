import { Helmet } from "react-helmet-async";
import { CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function EditorialPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Editorial Policy & Methodology – CalculatorApps</title>
        <meta
          name="description"
          content="Read how CalculatorApps creates and maintains calculator content, validates formulas, cites sources, and updates pages for accuracy and transparency."
        />
        <link rel="canonical" href="https://calculatorapps.net/editorial-policy" />
      </Helmet>

      <header className="glass border-b border-border/50 shadow-soft">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mr-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-gradient">Editorial Policy</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-4xl space-y-6">
        <p className="text-muted-foreground leading-7">
          CalculatorApps is built for educational use and everyday planning. This
          page explains how we build calculator logic, verify accuracy, and keep
          our content transparent for readers and advertisers.
        </p>

        <Card className="glass border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Our review standards
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Every calculator page includes a clear purpose, formula overview,
              practical usage guidance, and limitations.
            </p>
            <p>
              We prioritize source-backed methods (for example, publicly known
              finance and health formulas) and improve pages based on user
              feedback from the <Link to="/contact" className="underline hover:text-primary">contact page</Link>.
            </p>
          </CardContent>
        </Card>

        <Card className="glass border-2">
          <CardHeader>
            <CardTitle>How we validate calculations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-accent-health" />Formula implementation is tested against known sample inputs and expected outputs.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-accent-health" />Where real-time data is used (e.g. exchange rates), we fetch from reputable providers and show update context.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-accent-health" />We publish caveats when results can vary due to rounding, timing, or external data sources.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass border-2">
          <CardHeader>
            <CardTitle>Updates, corrections, and responsibility</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              We periodically update content for clarity and correctness.
              Important legal/privacy details are maintained on our
              <Link className="underline hover:text-primary ml-1" to="/privacy">Privacy Policy</Link>
              <span> and </span>
              <Link className="underline hover:text-primary" to="/terms">Terms</Link> pages.
            </p>
            <p>
              Calculator outputs are informational only and should not replace
              licensed professional advice.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
