import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredSitemapUrls = [
  "https://calculatorapps.net/",
  "https://calculatorapps.net/basic",
  "https://calculatorapps.net/percentage-tip",
  "https://calculatorapps.net/currency-converter",
  "https://calculatorapps.net/loan-emi-calculator",
  "https://calculatorapps.net/bmi-calculator",
  "https://calculatorapps.net/unit-converter",
  "https://calculatorapps.net/sip-calculator",
  "https://calculatorapps.net/privacy",
  "https://calculatorapps.net/terms",
  "https://calculatorapps.net/contact",
  "https://calculatorapps.net/about",
  "https://calculatorapps.net/editorial-policy",
  "https://calculatorapps.net/guides/loan-emi",
  "https://calculatorapps.net/guides/bmi",
  "https://calculatorapps.net/guides/currency-exchange",
];

const requiredRedirects = new Map([
  ["/emi", "/loan-emi-calculator"],
  ["/sip", "/sip-calculator"],
  ["/currency", "/currency-converter"],
  ["/loan-emi", "/loan-emi-calculator"],
  ["/bmi", "/bmi-calculator"],
  ["/tip-calculator", "/percentage-tip"],
  ["/unit", "/unit-converter"],
  ["/gst", "/percentage-tip"],
  ["/calculator", "/"],
  ["/home", "/"],
  ["/loan-calculator", "/loan-emi-calculator"],
  ["/tip", "/percentage-tip"],
  ["/percentage-calculator", "/percentage-tip"],
  ["/bmi-calculator-online", "/bmi-calculator"],
  ["/currency-converter-online", "/currency-converter"],
  ["/unit-converter-online", "/unit-converter"],
  ["/sip-calculator-online", "/sip-calculator"],
]);

const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const fail = (message) => {
  console.error(`Indexing config check failed: ${message}`);
  process.exitCode = 1;
};

const checkedFiles = [
  "public/_redirects",
  "functions/_middleware.js",
  "public/robots.txt",
  "public/sitemap.xml",
  "src/App.tsx",
  "src/pages/BmiPage.tsx",
  "src/pages/CurrencyConverterPage.tsx",
  "src/pages/LoanEmiPage.tsx",
];

for (const file of checkedFiles) {
  const content = read(file);
  if (/<<<<<<<|=======|>>>>>>>/.test(content)) {
    fail(`${file} still contains merge-conflict markers.`);
  }
}

const sitemap = read("public/sitemap.xml");
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const duplicates = locs.filter((url, index) => locs.indexOf(url) !== index);
if (duplicates.length > 0) {
  fail(`public/sitemap.xml contains duplicate URLs: ${[...new Set(duplicates)].join(", ")}`);
}

for (const url of locs) {
  if (!url.startsWith("https://calculatorapps.net")) {
    fail(`public/sitemap.xml includes a non-canonical URL: ${url}`);
  }
}

for (const url of requiredSitemapUrls) {
  if (!locs.includes(url)) {
    fail(`public/sitemap.xml is missing ${url}`);
  }
}

const middleware = read("functions/_middleware.js");
if (!middleware.includes("calculatorapps.net") || !middleware.includes("Response.redirect")) {
  fail("functions/_middleware.js must enforce the canonical HTTPS host with a redirect.");
}

const redirects = read("public/_redirects")
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"));

const fallbackIndex = redirects.findIndex((line) => line === "/* /index.html 200");
if (fallbackIndex === -1) {
  fail("public/_redirects is missing the SPA fallback: /* /index.html 200");
}

for (const [from, to] of requiredRedirects.entries()) {
  const expected = `${from} ${to} 301`;
  const index = redirects.indexOf(expected);
  if (index === -1) {
    fail(`public/_redirects is missing legacy redirect: ${expected}`);
    continue;
  }
  if (fallbackIndex !== -1 && index > fallbackIndex) {
    fail(`public/_redirects has ${expected} after the SPA fallback.`);
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log("Indexing config looks good.");
