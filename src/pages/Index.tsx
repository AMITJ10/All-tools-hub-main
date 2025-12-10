// src/pages/Index.tsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calculator,
  DollarSign,
  Heart,
  Scale,
  Hash,
  Percent,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BasicCalculator } from "@/components/calculators/BasicCalculator";
import { CurrencyConverter } from "@/components/calculators/CurrencyConverter";
import { PercentageTipCalculator } from "@/components/calculators/PercentageTipCalculator";
import { LoanEMICalculator } from "@/components/calculators/LoanEMICalculator";
import { BMICalculator } from "@/components/calculators/BMICalculator";
import { UnitConverter } from "@/components/calculators/UnitConverter";
import { SIPCalculator } from "@/components/calculators/SIPCalculator";
import { Navigation } from "@/components/Navigation";
import { AdBanner, AdRectangle } from "@/components/ads/GoogleAdSense";
import {
  LoanAffiliateCards,
  CurrencyAffiliateCards,
  HealthAffiliateCards,
} from "@/components/ads/AffiliateCards";
import { PremiumUpgrade, EmailCapture } from "@/components/ads/PremiumFeatures";
import heroImage from "@/assets/hero-calculator.jpg";
import oneCalcLogo from "@/assets/onecalc-logo.png";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("basic");

  const calculators = [
    {
      id: "basic",
      title: "Basic Calculator",
      description: "Arithmetic operations with memory functions",
      icon: Calculator,
      component: BasicCalculator,
      color: "primary",
    },
    {
      id: "percentage-tip",
      title: "Percentage & Tip Calculator",
      description: "Calculate percentages, tips, and split bills",
      icon: Percent,
      component: PercentageTipCalculator,
      color: "accent-conversion",
    },
    {
      id: "currency",
      title: "Currency Converter",
      description: "Convert between currencies with live rates",
      icon: DollarSign,
      component: CurrencyConverter,
      color: "accent-currency",
    },
    {
      id: "loan-emi",
      title: "Loan EMI Calculator",
      description: "Calculate loan EMI, interest, and amortization",
      icon: Hash,
      component: LoanEMICalculator,
      color: "accent-loan",
    },
    {
      id: "health",
      title: "BMI & Health Calculator",
      description: "BMI, calorie needs, and health metrics",
      icon: Heart,
      component: BMICalculator,
      color: "accent-health",
    },
    {
      id: "units",
      title: "Unit Converter",
      description: "Convert between different units of measurement",
      icon: Scale,
      component: UnitConverter,
      color: "primary",
    },
    {
      id: "sip",
      title: "SIP Calculator",
      description: "Calculate SIP returns and investment planning",
      icon: TrendingUp,
      component: SIPCalculator,
      color: "accent-health",
    },
  ] as const;

  const filteredCalculators = calculators.filter(
    (calc) =>
      calc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      calc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && calculators.find((calc) => calc.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.history.replaceState(null, "", `#${value}`);
    setTimeout(() => {
      const calculatorSection = document.querySelector(
        "[data-calculator-section]"
      );
      if (calculatorSection) {
        calculatorSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          CalculatorApps – Free Online Calculators & Converters for Everyday
          Use
        </title>
        <meta
          name="description"
          content="CalculatorApps is your all-in-one hub for free online calculators and converters. Use our basic calculator, percentage & tip calculator, SIP calculator, loan EMI calculator, BMI calculator, unit converter and currency converter – all mobile-friendly and lightning fast."
        />
        <link rel="canonical" href="https://calculatorapps.net/" />
      </Helmet>

      <Navigation searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* HERO SECTION */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-accent-health/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-accent-currency/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.03]">
          <img
            src={heroImage}
            alt="All-in-one calculator tools illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <img
                    src={oneCalcLogo}
                    alt="CalculatorApps Logo"
                    className="w-16 h-16 mr-4"
                  />
                  <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                    <span className="block text-gradient bg-gradient-to-r from-primary via-accent-health to-accent-currency bg-clip-text">
                      CalculatorApps
                    </span>
                  </h1>
                 </div>
                <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
                  Convert, Compute, Plan – in One Place
                </p>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Free, fast, and accurate calculators for everyday decisions.
                Compare loans, plan SIP investments, convert units and
                currencies, or quickly find tips and percentages – all in a
                mobile-first experience designed to save you time.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button
                  onClick={() => handleTabChange("basic")}
                  size="lg"
                  className="group relative overflow-hidden gradient-primary text-primary-foreground hover:shadow-glow font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Start Calculating</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleTabChange("currency")}
                  className="group glass border-2 hover:shadow-medium font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  Convert Currency
                </Button>
              </div>
            </div>

            {/* Quick tiles */}
            <div className="grid grid-cols-2 gap-4">
              <Card
                className="p-6 border-card-border bg-card/90 backdrop-blur-sm hover:bg-card/95 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.02] group"
                onClick={() => handleTabChange("basic")}
              >
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base text-card-foreground mb-1">
                    Basic Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Full-featured calculator with history
                  </p>
                </div>
              </Card>
              <Card
                className="p-6 border-card-border bg-card/90 backdrop-blur-sm hover:bg-card/95 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.02] group"
                onClick={() => handleTabChange("currency")}
              >
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-lg bg-accent-currency/10 flex items-center justify-center mb-3 group-hover:bg-accent-currency/20 transition-colors">
                    <DollarSign className="w-6 h-6 text-accent-currency" />
                  </div>
                  <h3 className="font-semibold text-base text-card-foreground mb-1">
                    Currency Converter
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Live exchange rates
                  </p>
                </div>
              </Card>
              <Card
                className="p-6 border-card-border bg-card/90 backdrop-blur-sm hover:bg-card/95 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.02] group"
                onClick={() => handleTabChange("health")}
              >
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-lg bg-accent-health/10 flex items-center justify-center mb-3 group-hover:bg-accent-health/20 transition-colors">
                    <Heart className="w-6 h-6 text-accent-health" />
                  </div>
                  <h3 className="font-semibold text-base text-card-foreground mb-1">
                    Health Metrics
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    BMI, calories, water intake
                  </p>
                </div>
              </Card>
              <Card
                className="p-6 border-card-border bg-card/90 backdrop-blur-sm hover:bg-card/95 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.02] group"
                onClick={() => handleTabChange("units")}
              >
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-lg bg-accent-conversion/10 flex items-center justify-center mb-3 group-hover:bg-accent-conversion/20 transition-colors">
                    <Scale className="w-6 h-6 text-accent-conversion" />
                  </div>
                  <h3 className="font-semibold text-base text-card-foreground mb-1">
                    Unit Converter
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Length, weight, temperature
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl">
        <AdBanner className="mb-6" />
      </div>

      {/* MAIN CALCULATORS */}
      <main
        className="container mx-auto px-4 py-8 max-w-7xl"
        data-calculator-section
      >
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="md:hidden mb-6">
            <select
              value={activeTab}
              onChange={(e) => handleTabChange(e.target.value)}
              className="w-full p-3 border border-input-border rounded-lg bg-input text-foreground"
            >
              {filteredCalculators.map((calc) => (
                <option key={calc.id} value={calc.id}>
                  {calc.title}
                </option>
              ))}
            </select>
          </div>
          <TabsList className="hidden md:grid grid-cols-3 lg:grid-cols-7 gap-2 bg-muted p-2 rounded-lg mb-8">
            {filteredCalculators.map((calc) => {
              const IconComponent = calc.icon;
              return (
                <TabsTrigger
                  key={calc.id}
                  value={calc.id}
                  className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-card data-[state=active]:text-card-foreground"
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="text-sm font-medium hidden lg:block">
                    {calc.title}
                  </span>
                  <span className="text-sm font-medium lg:hidden">
                    {calc.title.split(" ")[0]}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {filteredCalculators.map((calc) => {
            const CalculatorComponent = calc.component;
            const Icon = calc.icon;
            return (
              <TabsContent key={calc.id} value={calc.id} className="mt-0">
                <Card className="glass border-2 shadow-large animate-fade-in">
                  <CardHeader className="text-center space-y-4 pb-6">
                    <div className="flex items-center justify-center">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${calc.color}/10 to-${calc.color}/5 flex items-center justify-center mr-4`}
                      >
                        <Icon className={`w-8 h-8 text-${calc.color}`} />
                      </div>
                      <CardTitle className="text-3xl font-bold tracking-tight">
                        {calc.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      {calc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <CalculatorComponent />
                      </div>
                      <div className="space-y-4">
                        {calc.id === "loan-emi" && <LoanAffiliateCards />}
                        {calc.id === "currency" && <CurrencyAffiliateCards />}
                        {calc.id === "health" && <HealthAffiliateCards />}
                        {(calc.id === "basic" || calc.id === "loan-emi") && (
                          <PremiumUpgrade className="hidden lg:block" />
                        )}
                        {calc.id === "percentage-tip" && (
                          <EmailCapture className="hidden lg:block" />
                        )}
                        <AdRectangle className="hidden lg:block" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        {filteredCalculators.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">
              No calculators found matching "{searchQuery}"
            </p>
            <Button
              onClick={() => setSearchQuery("")}
              variant="outline"
              className="border-card-border hover:bg-muted"
            >
              Clear Search
            </Button>
          </div>
        )}

        <div className="lg:hidden space-y-6 mt-12">
          <PremiumUpgrade />
          <EmailCapture />
          <AdRectangle />
        </div>

        {/* SEO ARTICLE SECTION */}
        <section className="mt-16">
          <article className="prose dark:prose-invert max-w-none space-y-6">
            <h2>What is CalculatorApps?</h2>
            <p>
              CalculatorApps is a collection of practical, no-nonsense tools for
              everyday calculations. Instead of installing multiple apps or
              searching for a different website every time you need to compute
              something, you can bookmark this single hub and access everything
              in a few clicks – from basic arithmetic to investment planning.
            </p>

            <h3>All-in-one calculator hub</h3>
            <p>
              The homepage gives you quick access to our most-used tools. You
              can stay here and switch between calculators using the tabs, or
              you can open dedicated pages like{" "}
              <Link to="/sip-calculator" className="underline">
                SIP Calculator
              </Link>{" "}
              or{" "}
              <Link to="/unit-converter" className="underline">
                Unit Converter
              </Link>{" "}
              if you want a focused experience with detailed explanations and
              FAQs.
            </p>

            <h3>Overview of the calculators</h3>
            <ul>
              <li>
                <strong>Basic Calculator:</strong> Perform quick addition,
                subtraction, multiplication and division with a clean interface
                and calculation history.
              </li>
              <li>
                <strong>Percentage &amp; Tip Calculator:</strong> Work out sale
                discounts, GST/VAT, tips at restaurants and split-bill amounts
                without manual math.
              </li>
              <li>
                <strong>Currency Converter:</strong> Convert between major
                global currencies using up-to-date exchange rates so you can
                estimate costs while shopping or travelling abroad.
              </li>
              <li>
                <strong>Loan EMI Calculator:</strong> Plan home, car or personal
                loans by estimating monthly EMI, total interest and total amount
                payable over the loan tenure.
              </li>
              <li>
                <strong>BMI &amp; Health Calculator:</strong> Quickly check your
                Body Mass Index and related basic health metrics. This is for
                general information only and not a medical diagnosis.
              </li>
              <li>
                <strong>Unit Converter:</strong> Convert common units for
                length, weight, temperature, area, volume and speed – helpful
                for students, travellers and professionals.
              </li>
              <li>
                <strong>SIP Calculator:</strong> Estimate the future value of
                your systematic investment plans (SIP) and understand how
                monthly investing plus compounding can grow your wealth.
              </li>
            </ul>

            <h3>Why these pages are useful for Google and users</h3>
            <p>
              Every important calculator also has a dedicated page with its own
              URL, meta description and long-form explanation. For example, the{" "}
              <Link to="/sip-calculator" className="underline">
                SIP calculator page
              </Link>{" "}
              explains compounding, rupee-cost averaging and how to choose a
              realistic return assumption. The{" "}
              <Link to="/unit-converter" className="underline">
                unit converter page
              </Link>{" "}
              walks through metric vs imperial units and real-world use cases.
              This detailed content helps both users and search engines
              understand the purpose of each tool.
            </p>

            <h3>Mobile-first, privacy-friendly design</h3>
            <p>
              CalculatorApps is fully responsive, which means every tool adapts
              to phones, tablets and desktops. We avoid unnecessary clutter and
              heavy scripts so the pages load quickly even on slower
              connections. We also do not require login or personal data to use
              the tools – you simply open the website, use the calculator and
              move on.
            </p>

            <h3>How to get the most out of CalculatorApps</h3>
            <ol>
              <li>
                <strong>Bookmark the site:</strong> Save{" "}
                <a
                  href="https://calculatorapps.net/"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://calculatorapps.net/
                </a>{" "}
                in your browser for quick access whenever you need a calculator.
              </li>
              <li>
                <strong>Use dedicated pages:</strong> When you want more context
                and examples, open the separate calculator pages from the
                navigation links.
              </li>
              <li>
                <strong>Share tools:</strong> If a particular calculator helps
                you, feel free to share its direct link with friends, family or
                colleagues.
              </li>
            </ol>
          </article>
        </section>
      </main>

      <footer className="bg-muted py-8 px-4 mt-16">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">
            © 2025 CalculatorApps. Free online calculators and converters for
            everyday use.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>

      {/* WebSite structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CalculatorApps – Free Online Calculator & Converter Tools",
            description:
              "CalculatorApps: Free online calculators including basic calculator, currency converter, loan EMI calculator, BMI calculator, unit converter, percentage & tip calculator, SIP calculator and more.",
            url: "https://calculatorapps.net/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://calculatorapps.net/#search={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </div>
  );
};

export default Index;
