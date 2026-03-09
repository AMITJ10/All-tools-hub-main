import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function BmiGuidePage() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <Helmet>
        <title>BMI Guide: Categories, Limits, and Better Use | CalculatorApps</title>
        <meta
          name="description"
          content="Understand BMI categories, limitations, and how to interpret BMI with waist size, activity, and clinical context. Includes practical examples."
        />
        <link rel="canonical" href="https://calculatorapps.net/guides/bmi" />
      </Helmet>

      <article className="prose dark:prose-invert max-w-none space-y-6">
        <h1>BMI Guide: How to Use BMI Correctly</h1>
        <p>
          BMI (Body Mass Index) is a quick screening metric, not a complete
          diagnosis. It helps estimate weight status using height and weight.
        </p>

        <h2>BMI formula</h2>
        <p>
          BMI = weight (kg) / [height (m)]²
        </p>

        <h2>WHO adult categories</h2>
        <ul>
          <li>&lt; 18.5: Underweight</li>
          <li>18.5–24.9: Healthy range</li>
          <li>25.0–29.9: Overweight</li>
          <li>30.0+: Obesity</li>
        </ul>

        <h2>Where BMI works well</h2>
        <p>
          BMI is useful for broad screening, trend tracking over time, and
          discussing risk with a doctor.
        </p>

        <h2>Where BMI can mislead</h2>
        <ul>
          <li>Very muscular individuals may appear overweight.</li>
          <li>Older adults with low muscle mass may appear normal.</li>
          <li>BMI does not directly measure body fat distribution.</li>
        </ul>

        <h2>Use BMI with additional indicators</h2>
        <ol>
          <li>Waist circumference and waist-to-height ratio.</li>
          <li>Blood pressure, lipid profile, glucose markers.</li>
          <li>Physical activity, sleep, and diet quality.</li>
        </ol>

        <h2>Practical action plan</h2>
        <p>
          If your BMI is outside healthy range, focus on sustainable habits:
          calorie awareness, strength + cardio routine, sleep regularity, and
          medical follow-up for risk markers.
        </p>

        <h2>References</h2>
        <ul>
          <li>World Health Organization: BMI classification for adults.</li>
          <li>CDC guidance on adult BMI interpretation.</li>
        </ul>

        <p>
          Calculate your current status using our <Link to="/bmi-calculator">BMI Calculator</Link>.
        </p>
      </article>
    </main>
  );
}
