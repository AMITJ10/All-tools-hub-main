import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Declare gtag for Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface AffiliateCardProps {
  title: string;
  description: string;
  ctaText: string;
  affiliateUrl: string;
  className?: string;
  icon?: React.ReactNode;
}

export const AffiliateCard: React.FC<AffiliateCardProps> = ({
  title,
  description,
  ctaText,
  affiliateUrl,
  className = '',
  icon
}) => {
  const handleClick = () => {
    // Track affiliate click for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        event_category: 'monetization',
        event_label: title,
        value: 1
      });
    }
    window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className={`p-4 bg-muted/30 border-muted-foreground/20 ${className}`}>
      <div className="flex items-start gap-3">
        {icon && <div className="text-primary">{icon}</div>}
        <div className="flex-1">
          <h4 className="font-semibold text-sm mb-1">{title}</h4>
          <p className="text-xs text-muted-foreground mb-3">{description}</p>
          <Button
            size="sm"
            variant="outline"
            onClick={handleClick}
            className="text-xs border-primary/50 hover:bg-primary/10"
          >
            {ctaText}
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>
      <div className="text-xs text-muted-foreground/70 mt-2">
        Advertisement
      </div>
    </Card>
  );
};

// Pre-configured affiliate components for different calculators
export const LoanAffiliateCards: React.FC = () => (
  <div className="space-y-3 mt-4">
    <AffiliateCard
      title="Best Personal Loans 2024"
      description="Compare rates from top lenders. Get pre-qualified in minutes with no impact to credit score."
      ctaText="Compare Rates"
      affiliateUrl="https://example.com/loans" // Replace with actual affiliate link
    />
    <AffiliateCard
      title="Credit Card Comparison"
      description="Find the best credit cards with 0% intro APR, cashback rewards, and no annual fees."
      ctaText="View Cards"
      affiliateUrl="https://example.com/credit-cards" // Replace with actual affiliate link
    />
  </div>
);

export const CurrencyAffiliateCards: React.FC = () => (
  <div className="space-y-3 mt-4">
    <AffiliateCard
      title="Wise Money Transfers"
      description="Send money abroad with real exchange rates. Up to 8x cheaper than banks."
      ctaText="Send Money"
      affiliateUrl="https://wise.com" // Replace with actual affiliate link
    />
    <AffiliateCard
      title="Revolut Business Account"
      description="Multi-currency business account with no hidden fees. Free international transfers."
      ctaText="Open Account"
      affiliateUrl="https://revolut.com" // Replace with actual affiliate link
    />
  </div>
);

export const HealthAffiliateCards: React.FC = () => (
  <div className="space-y-3 mt-4">
    <AffiliateCard
      title="MyFitnessPal Premium"
      description="Track nutrition, set macro goals, and access premium recipes. 1-month free trial."
      ctaText="Try Free"
      affiliateUrl="https://myfitnesspal.com" // Replace with actual affiliate link
    />
    <AffiliateCard
      title="Fitbit Health Trackers"
      description="Monitor your activity, sleep, and health metrics with advanced fitness tracking."
      ctaText="Shop Now"
      affiliateUrl="https://fitbit.com" // Replace with actual affiliate link
    />
  </div>
);