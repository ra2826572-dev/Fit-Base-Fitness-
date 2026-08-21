export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  idealFor: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  icon: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  imageUrl: string;
  tag: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  role?: string;
  initials: string;
  verified: boolean;
}

export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  fitnessGoal: string;
  preferredTime: string;
  message: string;
}

export type ActiveModal = 
  | { type: 'none' }
  | { type: 'join'; initialGoal?: string }
  | { type: 'trainer' }
  | { type: 'program'; programId: string }
  | { type: 'reviews' }
  | { type: 'directions' }
  | { type: 'dayPass' };
