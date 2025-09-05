import React from 'react';
import { Star, Download, History, Palette, FileText, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PremiumFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  available?: boolean;
}

const PremiumFeature: React.FC<PremiumFeatureProps> = ({ 
  icon, 
  title, 
  description, 
  available = false 
}) => (
  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
    <div className="text-accent-health mt-1">{icon}</div>
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <h4 className="font-semibold text-sm">{title}</h4>
        {!available && <Badge variant="secondary" className="text-xs">Coming Soon</Badge>}
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </div>
);

export const PremiumUpgrade: React.FC<{ className?: string }> = ({ className = '' }) => {
  const handleUpgradeClick = () => {
    // Track premium upgrade interest
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'premium_interest', {
        event_category: 'monetization',
        event_label: 'upgrade_clicked',
        value: 1
      });
    }
    
    // For now, just show alert - replace with actual payment flow
    alert('Premium features coming soon! Enter your email to be notified when available.');
  };

  return (
    <Card className={`border-accent-health/20 bg-gradient-to-br from-accent-health/5 to-accent-health/10 ${className}`}>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <Star className="w-8 h-8 text-accent-health" />
        </div>
        <CardTitle className="flex items-center justify-center gap-2">
          Calculator Pro
          <Badge className="bg-accent-health text-white">New</Badge>
        </CardTitle>
        <CardDescription>
          Unlock advanced features for power users
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <PremiumFeature
            icon={<History className="w-4 h-4" />}
            title="Calculation History"
            description="Save and access your calculation history across sessions"
            available={false}
          />
          
          <PremiumFeature
            icon={<Download className="w-4 h-4" />}
            title="Export Results"
            description="Download calculations as PDF or Excel files"
            available={false}
          />
          
          <PremiumFeature
            icon={<Palette className="w-4 h-4" />}
            title="Custom Themes"
            description="Dark mode, high contrast, and personalized color schemes"
            available={false}
          />
          
          <PremiumFeature
            icon={<FileText className="w-4 h-4" />}
            title="Advanced Reports"
            description="Detailed loan amortization, investment projections, and more"
            available={false}
          />
          
          <PremiumFeature
            icon={<Cloud className="w-4 h-4" />}
            title="Cloud Sync"
            description="Sync your settings and history across all devices"
            available={false}
          />
        </div>

        <div className="text-center pt-4 border-t border-accent-health/20">
          <div className="mb-3">
            <span className="text-2xl font-bold text-foreground">$4.99</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          
          <Button 
            onClick={handleUpgradeClick}
            className="w-full bg-accent-health text-white hover:bg-accent-health/90"
          >
            Get Early Access
          </Button>
          
          <p className="text-xs text-muted-foreground mt-2">
            Cancel anytime • 14-day free trial
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const EmailCapture: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track email signup
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'email_signup', {
        event_category: 'lead_generation',
        event_label: 'newsletter',
        value: 1
      });
    }
    
    // For now, just show success - replace with actual email service
    alert('Thanks for subscribing! We\'ll send you productivity tips and updates.');
    setEmail('');
  };

  return (
    <Card className={`border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 ${className}`}>
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
          <p className="text-sm text-muted-foreground">
            Get productivity tips, new calculator features, and exclusive deals delivered weekly.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 text-sm border border-input-border rounded-lg bg-input focus:border-input-focus focus:outline-none"
            required
          />
          <Button type="submit" size="sm" className="bg-primary text-primary-foreground hover:bg-primary-hover">
            Subscribe
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground text-center mt-2">
          No spam, unsubscribe anytime
        </p>
      </CardContent>
    </Card>
  );
};