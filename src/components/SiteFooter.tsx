import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/basic", label: "Basic Calculator" },
  { to: "/bmi-calculator", label: "BMI Calculator" },
  { to: "/currency-converter", label: "Currency Converter" },
  { to: "/loan-emi-calculator", label: "Loan EMI Calculator" },
  { to: "/unit-converter", label: "Unit Converter" },
  { to: "/sip-calculator", label: "SIP Calculator" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background-secondary/40">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <section>
            <h2 className="text-lg font-semibold">CalculatorApps</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-6">
              Free online calculator tools for everyday math, health, investing,
              and conversions. We focus on clean UX, transparent formulas, and
              practical explanations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Popular tools</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link className="hover:text-primary hover:underline" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">In-depth guides</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link className="hover:text-primary hover:underline" to="/guides/loan-emi">
                  Loan EMI Guide
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary hover:underline" to="/guides/bmi">
                  BMI Guide
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary hover:underline" to="/guides/currency-exchange">
                  Currency Exchange Guide
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Company</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link className="hover:text-primary hover:underline" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary hover:underline" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary hover:underline" to="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary hover:underline" to="/terms">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary hover:underline" to="/editorial-policy">
                  Editorial Policy
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-8 border-t border-border/60 pt-5 text-xs text-muted-foreground leading-5">
          <p>
            Educational content only — this website does not provide legal,
            medical, tax, or financial advice. Always verify important
            calculations with official or professional sources.
          </p>
          <p className="mt-2">
            Advertising disclosure: we may display ads from Google AdSense to
            keep CalculatorApps free to use.
          </p>
          <p className="mt-2">
            <a
              className="hover:underline"
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noreferrer"
            >
              How Google uses data when you use our partners’ sites or apps
            </a>
          </p>
          <p className="mt-2">© {new Date().getFullYear()} CalculatorApps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
