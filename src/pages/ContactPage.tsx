import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  HelpCircle, 
  Send,
  CreditCard,
  ShieldCheck
} from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { FaqSection } from '../components/FaqSection';
import { GYM_INFO } from '../data/gymData';

interface ContactPageProps {
  initialGoal?: string;
  onOpenDirections: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ 
  initialGoal = 'Strength Training & Muscle Building',
  onOpenDirections 
}) => {
  return (
    <div className="space-y-0">
      {/* Main High-Converting Contact Form & Inquiries */}
      <ContactSection preselectedGoal={initialGoal} />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
};
