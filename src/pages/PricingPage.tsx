import React from 'react';
import { PricingSection } from '../components/PricingSection';
import { TransformationsSection } from '../components/TransformationsSection';
import { GallerySection } from '../components/GallerySection';
import { TimetableSection } from '../components/TimetableSection';

interface PricingPageProps {
  onOpenJoin: (goal?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenJoin }) => {
  return (
    <div className="space-y-0">
      <PricingSection onOpenJoin={onOpenJoin} />
      <TransformationsSection />
      <GallerySection />
      <TimetableSection />
    </div>
  );
};
