// src/pages/Contact.tsx

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Mail,
  MessageSquare,
  Clock,
  HelpCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server or email service
    console.log('Form submitted:', formData);

    toast({
      title: 'Message Sent!',
      description:
        'Thank you for contacting us. We appreciate your feedback and will get back to you as soon as possible.'
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact CalculatorApps – Feedback, Support & Suggestions</title>
        <meta
          name="description"
          content="Contact CalculatorApps for questions, feedback, bug reports or new calculator suggestions. We usually respond within 24–48 business hours."
        />
        <link rel="canonical" href="https://calculatorapps.net/contact" />
      </Helmet>

      <header className="glass border-b border-border/50 shadow-soft">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mr-4">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-gradient">Contact Us</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We value your feedback and are here to help. Whether you have a
              question, a suggestion for a new calculator, or a bug to report,
              please don&apos;t hesitate to reach out. Your input helps us make
              CalculatorApps better for everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="glass border-2">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={e =>
                            handleInputChange('name', e.target.value)
                          }
                          placeholder="Your full name"
                          required
                          className="border-input-border focus:border-input-focus"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={e =>
                            handleInputChange('email', e.target.value)
                          }
                          placeholder="your.email@example.com"
                          required
                          className="border-input-border focus:border-input-focus"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Inquiry Category *</Label>
                        <Select
                          required
                          value={formData.category}
                          onValueChange={value =>
                            handleInputChange('category', value)
                          }
                        >
                          <SelectTrigger className="border-input-border">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general-question">
                              General Question
                            </SelectItem>
                            <SelectItem value="bug-report">Bug Report</SelectItem>
                            <SelectItem value="feature-request">
                              Feature Request
                            </SelectItem>
                            <SelectItem value="business-inquiry">
                              Business Inquiry
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={e =>
                            handleInputChange('subject', e.target.value)
                          }
                          placeholder="Brief description"
                          required
                          className="border-input-border focus:border-input-focus"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={e =>
                          handleInputChange('message', e.target.value)
                        }
                        placeholder="Please describe your inquiry in detail. If reporting a bug, include your browser, device, and steps to reproduce."
                        required
                        rows={6}
                        className="border-input-border focus:border-input-focus"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gradient-primary text-primary-foreground font-semibold py-3"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p className="text-sm">
                    We are a small team dedicated to providing the best possible
                    experience. We read every message and aim to respond within
                    24–48 business hours.
                  </p>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p>calculatoraiask@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent-health" />
                    Typical Response Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bug Reports</span>
                    <span className="font-semibold text-foreground">
                      ~ 12 hours
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Feature Requests
                    </span>
                    <span className="font-semibold text-foreground">
                      ~ 24 hours
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      General Questions
                    </span>
                    <span className="font-semibold text-foreground">
                      ~ 48 hours
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
