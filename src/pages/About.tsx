// src/pages/About.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Rocket, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom'; // <-- FIX: Import Link for proper navigation
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
              <span className="text-gradient">About Us</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <img src={oneCalcLogo} alt="OneCalc Logo" className="w-24 h-24 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground">Welcome to CalculatorApps</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your free, all-in-one destination for fast, reliable, and easy-to-use online calculators. We're dedicated to making everyday calculations simple and accessible for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                In a world full of complex information, our mission is to provide simple, accurate, and powerful tools that help you make informed decisions. Whether you're planning your finances, checking your health metrics, or converting units for a project, our tools are designed to give you clear answers instantly. We believe that everyone should have access to high-quality calculation tools without any cost.
              </p>
            </div>
            <div className="flex justify-center">
              <Target className="w-32 h-32 text-primary" />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center glass border-2">
                <CardHeader>
                  {/* FIX: Replaced text-accent-health with text-red-500 */}
                  <Rocket className="w-10 h-10 mx-auto text-red-500" />
                  <CardTitle>Fast & Accurate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our tools are built for speed and precision, providing you with reliable results every time.</p>
                </CardContent>
              </Card>
              <Card className="text-center glass border-2">
                <CardHeader>
                   {/* FIX: Replaced text-accent-currency with text-green-600 */}
                   <ShieldCheck className="w-10 h-10 mx-auto text-green-600" />
                  <CardTitle>User-Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We prioritize a clean, intuitive interface that works seamlessly on both desktop and mobile devices.</p>
                </CardContent>
              </Card>
               <Card className="text-center glass border-2">
                <CardHeader>
                  <Users className="w-10 h-10 mx-auto text-primary" />
                  <CardTitle>Completely Free</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">All our calculators and converters are 100% free to use, with no hidden charges or subscriptions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
           <div className="text-center pt-8 border-t">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-4">
                Have a suggestion for a new calculator or feedback on our existing tools? We'd love to hear from you!
              </p>
              {/* FIX: Replaced <a> tag with <Link> for proper React routing */}
              <Link to="/contact" className="text-primary hover:underline font-semibold">
                Contact Us
              </Link>
            </div>
        </div>
      </main>
    </div>
  );
};

export default About;
