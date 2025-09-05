import React, { useEffect } from 'react';

interface GoogleAdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'banner' | 'leaderboard';
  className?: string;
  style?: React.CSSProperties;
}

// Declare Google AdSense
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const GoogleAdSense: React.FC<GoogleAdSenseProps> = ({
  adSlot,
  adFormat = 'auto',
  className = '',
  style = {}
}) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`ad-slot ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID" // Replace with your AdSense Publisher ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

// Pre-configured ad components for common placements
export const AdBanner: React.FC<{ className?: string }> = ({ className = '' }) => (
  <GoogleAdSense
    adSlot="1234567890" // Replace with your ad slot ID
    adFormat="banner"
    className={`ad-slot-banner ${className}`}
  />
);

export const AdRectangle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <GoogleAdSense
    adSlot="0987654321" // Replace with your ad slot ID
    adFormat="rectangle"
    className={`ad-slot-large ${className}`}
  />
);

export const AdResponsive: React.FC<{ className?: string }> = ({ className = '' }) => (
  <GoogleAdSense
    adSlot="1122334455" // Replace with your ad slot ID
    adFormat="auto"
    className={`ad-slot ${className}`}
  />
);