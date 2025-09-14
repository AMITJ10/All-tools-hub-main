// src/pages/About.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Rocket, ShieldCheck, Heart, GitCommit } from 'lucide-react';
import { Link } from 'react-router-dom';
import oneCalcLogo from '@/assets/onecalc-logo.png';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
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
        <article className="prose dark:prose-invert max-w-none space-y-12">
          <div className="text-center space-y-4">
            <img src={oneCalcLogo} alt="CalculatorApps Logo" className="w-24 h-24 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground">Making Calculations Simple and Accessible</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Welcome to CalculatorApps, your all-in-one destination for fast, reliable, and completely free online calculation tools. Our project was born from a simple idea: that everyone deserves access to high-quality, easy-to-use tools without intrusive ads or hidden fees.
            </p>
          </div>

          <section>
            <h2 className="text-3xl font-bold">Our Mission: Clarity in a Complex World</h2>
            <p className="text-muted-foreground leading-relaxed">
              In a world saturated with data, making informed decisions can be overwhelming. Our mission is to cut through the noise by providing simple, accurate, and powerful tools that help you make sense of the numbers. Whether you're a student trying to understand a complex formula, a homeowner planning a budget, or a professional needing a quick conversion, CalculatorApps is designed to give you clear, instant answers. We are committed to building a trusted resource that supports your financial, health, and educational goals.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <Card className="text-center glass border-2">
                <CardHeader>
                  <Rocket className="w-10 h-10 mx-auto text-accent-health" />
                  <CardTitle>Accuracy and Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our calculators are built on standard, verified formulas and use reliable data sources to ensure you get precise results you can trust.</p>
                </CardContent>
              </Card>
              <Card className="text-center glass border-2">
                <CardHeader>
                   <ShieldCheck className="w-10 h-10 mx-auto text-accent-currency" />
                  <CardTitle>User-Focused Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We prioritize a clean, intuitive interface that is free of clutter and works seamlessly on both desktop and mobile devices.</p>
                </CardContent>
              </Card>
               <Card className="text-center glass border-2">
                <CardHeader>
                  <Heart className="w-10 h-10 mx-auto text-primary" />
                  <CardTitle>Accessibility for All</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">All our tools are, and will always be, 100% free to use. We believe in open access to information and useful utilities.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">The Technology Behind Our Tools</h2>
            <p className="text-muted-foreground leading-relaxed">
              CalculatorApps is built using a modern technology stack to ensure a fast, secure, and reliable experience. Our front-end is powered by React and Vite, allowing for a lightning-fast user interface. We use TypeScript for code quality and maintainability. All calculations are performed directly in your browser, which means your data is private and the results are instantaneous. For tools like our Currency Converter, we connect to trusted real-time APIs to provide the most up-to-date information.
            </p>
          </section>
          
           <div className="text-center pt-8 border-t">
              <h2 className="text-2xl font-bold mb-4">We're Always Improving</h2>
              <p className="text-muted-foreground mb-4">
                This project is constantly evolving. We are always working on adding new calculators and improving our existing tools based on user feedback. Have a suggestion or an idea? We would be thrilled to hear from you!
              </p>
              <Button asChild className="text-primary hover:underline font-semibold" variant="link">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
        </article>
      </main>
    </div>
  );
};

export default About;
