// src/pages/About.tsx

import { Helmet } from "react-helmet-async"; // ← Added
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Rocket, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import oneCalcLogo from '@/assets/onecalc-logo.png';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About CalculatorApps – Our Mission, Values & Team</title>
        <meta
          name="description"
          content="Learn about CalculatorApps — a free, accessible collection of online calculators designed to make everyday calculations simple, fast, and reliable. Read our mission, values, and story."
        />
        <link rel="canonical" href="https://calculatorapps.net/about" />
      </Helmet>

      <header className="glass border-b border-border/50 shadow-soft">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-gradient">About CalculatorApps</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="max-w-none space-y-12">
          <div className="text-center space-y-4">
            <img src={oneCalcLogo} alt="CalculatorApps Logo" className="w-24 h-24 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground">Making Calculations Simple and Accessible</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Welcome to CalculatorApps, your all-in-one destination for fast, reliable, and completely free online calculation tools. 
              Our project was born from a simple idea: that everyone deserves access to high-quality, easy-to-use tools 
              without intrusive ads or hidden fees.
            </p>
          </div>

          <section>
            <h2 className="text-3xl font-bold mb-4">Our Mission: Clarity in a Complex World</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              In a world saturated with data, making informed decisions can be overwhelming. Our mission is to cut through the noise 
              by providing simple, accurate, and powerful tools that help you make sense of the numbers. Whether you're a student, 
              a homeowner, or a professional, CalculatorApps is built to support your financial, health, and educational goals.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <Card className="text-center glass border-2">
                <CardHeader>
                  <Rocket className="w-10 h-10 mx-auto text-red-500" />
                  <CardTitle>Accuracy and Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our calculators use verified formulas and reliable data sources to ensure accurate results every time.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center glass border-2">
                <CardHeader>
                   <ShieldCheck className="w-10 h-10 mx-auto text-green-600" />
                  <CardTitle>User-Focused Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We prioritize a clean, intuitive interface that works beautifully on both desktop and mobile devices.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center glass border-2">
                <CardHeader>
                  <Heart className="w-10 h-10 mx-auto text-primary" />
                  <CardTitle>Accessibility for All</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our tools are 100% free to use — always. We believe everyone should have access to essential utilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">The Technology Behind Our Tools</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              CalculatorApps is built using React, Vite, and TypeScript to deliver a fast and secure experience. 
              All calculations run directly in your browser, ensuring privacy and instant performance. 
              Tools like our Currency Converter connect to trusted APIs for the latest real-time data.
            </p>
          </section>
          
          <div className="text-center pt-8 border-t">
            <h2 className="text-2xl font-bold mb-4">We're Always Improving</h2>
            <p className="text-muted-foreground mb-4">
              We're always adding new calculators and improving existing ones based on your feedback.  
              Have suggestions? We'd love to hear from you!
            </p>
            <Link to="/contact" className="text-primary hover:underline font-semibold">
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
