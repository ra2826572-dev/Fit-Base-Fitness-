import React from 'react';
import { ReviewsSection } from '../components/ReviewsSection';

interface ReviewsPageProps {
  onOpenJoin: (goal?: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenJoin }) => {
  return (
    <div className="space-y-0">
      <ReviewsSection />
    </div>
  );
};
