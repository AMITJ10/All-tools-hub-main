const CANONICAL_HOST = "calculatorapps.net";
const REDIRECTABLE_HOSTS = new Set([
  CANONICAL_HOST,
  `www.${CANONICAL_HOST}`,
]);

const ROUTE_META = {
  "/": {
    title: "CalculatorApps - Free Online Calculators and Converter Tools",
    description:
      "Use CalculatorApps for free online calculators including currency converter, loan EMI calculator, BMI calculator, unit converter, SIP calculator, and percentage tools.",
  },
  "/currency-converter": {
    title: "Free Currency Converter - Live Exchange Rates",
    description:
      "Convert currencies instantly with the free CalculatorApps currency converter. Check USD, INR, EUR, GBP, and other exchange rates with clear conversion results.",
  },
  "/loan-emi-calculator": {
    title: "Loan EMI Calculator Online - Calculate Monthly Loan Payments",
    description:
      "Calculate loan EMI, total interest, and total repayment for home, car, personal, and education loans with the free CalculatorApps EMI calculator.",
  },
  "/bmi-calculator": {
    title: "BMI Calculator Online - Check Body Mass Index",
    description:
      "Use the free CalculatorApps BMI calculator to check body mass index from height and weight, understand BMI categories, and estimate daily health metrics.",
  },
  "/basic": {
    title: "Basic Calculator Online - Free Arithmetic Calculator",
    description:
      "Use the free CalculatorApps basic calculator for quick arithmetic, percentages, decimals, and everyday math on desktop or mobile.",
  },
  "/percentage-tip": {
    title: "Percentage and Tip Calculator - Free Online Tool",
    description:
      "Calculate percentages, tips, discounts, increases, and splits with the free CalculatorApps percentage and tip calculator.",
  },
  "/unit-converter": {
    title: "Unit Converter Online - Convert Length, Weight, and More",
    description:
      "Convert common measurement units including length, weight, temperature, area, volume, and speed with the free CalculatorApps unit converter.",
  },
  "/sip-calculator": {
    title: "SIP Calculator Online - Estimate Mutual Fund Returns",
    description:
      "Estimate monthly SIP investment growth, future value, and wealth creation with the free CalculatorApps SIP calculator.",
  },
  "/guides/loan-emi": {
    title: "Loan EMI Guide - Formula, Examples, and Amortization",
    description:
      "Learn how loan EMI is calculated with formulas, repayment examples, amortization basics, and practical borrowing tips from CalculatorApps.",
  },
  "/guides/bmi": {
    title: "BMI Guide - Categories, Limits, and Health Interpretation",
    description:
      "Understand BMI categories, body mass index limitations, and how to interpret BMI results alongside other health indicators.",
  },
  "/guides/currency-exchange": {
    title: "Currency Exchange Guide - Rates, Spreads, and Fees",
    description:
      "Learn how currency exchange rates, bank spreads, transfer fees, and timing affect international payments and travel money.",
  },
  "/privacy": {
    title: "Privacy Policy - CalculatorApps",
    description:
      "Read the CalculatorApps privacy policy covering analytics, advertising, cookies, and how this calculator website handles user data.",
  },
  "/terms": {
    title: "Terms of Service - CalculatorApps",
    description:
      "Read the CalculatorApps terms of service for using free online calculator and converter tools.",
  },
  "/contact": {
    title: "Contact CalculatorApps",
    description:
      "Contact CalculatorApps with questions, feedback, corrections, or suggestions about the free online calculator tools.",
  },
  "/about": {
    title: "About CalculatorApps",
    description:
      "Learn about CalculatorApps, a free collection of online calculators and converter tools built for fast everyday calculations.",
  },
  "/editorial-policy": {
    title: "Editorial Policy - CalculatorApps",
    description:
      "Read the CalculatorApps editorial policy for calculator accuracy, content review, sources, and update standards.",
  },
};

const getRouteMeta = (pathname) => {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  return ROUTE_META[normalizedPath];
};

const createMetaRewriter = (url, meta) => {
  const canonical = `https://${CANONICAL_HOST}${url.pathname.replace(/\/+$/, "") || "/"}`;
  const title = meta.title;
  const description = meta.description;

  return new HTMLRewriter()
    .on("title", {
      element(element) {
        element.setInnerContent(title);
      },
    })
    .on('meta[name="description"]', {
      element(element) {
        element.setAttribute("content", description);
      },
    })
    .on('link[rel="canonical"]', {
      element(element) {
        element.setAttribute("href", canonical);
      },
    })
    .on('meta[property="og:title"]', {
      element(element) {
        element.setAttribute("content", title);
      },
    })
    .on('meta[property="og:description"]', {
      element(element) {
        element.setAttribute("content", description);
      },
    })
    .on('meta[property="og:url"]', {
      element(element) {
        element.setAttribute("content", canonical);
      },
    })
    .on('meta[name="twitter:title"]', {
      element(element) {
        element.setAttribute("content", title);
      },
    })
    .on('meta[name="twitter:description"]', {
      element(element) {
        element.setAttribute("content", description);
      },
    })
    .on("head", {
      element(element) {
        element.append(
          `<meta name="robots" content="index,follow"><script type="application/ld+json">${JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description,
            url: canonical,
            isPartOf: {
              "@type": "WebSite",
              name: "CalculatorApps",
              url: `https://${CANONICAL_HOST}/`,
            },
          })}</script>`,
          { html: true },
        );
      },
    });
};

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const hostname = url.hostname.toLowerCase();
  const shouldForceCanonicalHost =
    REDIRECTABLE_HOSTS.has(hostname) || hostname.endsWith(".pages.dev");
  const shouldForceHttps = url.protocol === "http:";

  if (shouldForceHttps || hostname !== CANONICAL_HOST) {
    if (shouldForceCanonicalHost) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }
  }

  const response = await context.next();
  const meta = getRouteMeta(url.pathname);
  const contentType = response.headers.get("content-type") || "";

  if (!meta || !contentType.includes("text/html")) {
    return response;
  }

  return createMetaRewriter(url, meta).transform(response);
}
