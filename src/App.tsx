import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ProgramsSection } from './components/ProgramsSection';
import { PersonalTrainingCta } from './components/PersonalTrainingCta';
import { FitnessCalculator } from './components/FitnessCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { SocialSection } from './components/SocialSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

// Modals
import { JoinModal } from './components/Modals/JoinModal';
import { TrainerModal } from './components/Modals/TrainerModal';
import { ReviewsModal } from './components/Modals/ReviewsModal';
import { DirectionsModal } from './components/Modals/DirectionsModal';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [trainerModalOpen, setTrainerModalOpen] = useState(false);
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);
  const [directionsModalOpen, setDirectionsModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string>('Strength Training');

  const handleOpenJoin = (goal?: string) => {
    if (goal) setSelectedGoal(goal);
    setJoinModalOpen(true);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDiscoverClick = () => {
    const el = document.getElementById('facilities');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoalFromCalc = (goal: string) => {
    setSelectedGoal(goal);
    // Smooth scroll to contact form and update selection
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col antialiased selection:bg-cyan-400 selection:text-black">
      {/* Sticky Navigation */}
      <Navbar
        onOpenJoin={() => handleOpenJoin()}
        onOpenTrainer={() => setTrainerModalOpen(true)}
        onOpenDirections={() => setDirectionsModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* Hero Section */}
        <Hero
          onOpenJoin={() => handleOpenJoin()}
          onExploreClick={handleExploreClick}
        />

        {/* High-Impact Stats Bar */}
        <StatsBar />

        {/* About Fit Base */}
        <AboutSection
          onDiscoverClick={handleDiscoverClick}
          onOpenJoin={() => handleOpenJoin('Free Day Pass')}
        />

        {/* Why Choose Fit Base (6 Feature Cards) */}
        <WhyChooseSection
          onOpenJoin={() => handleOpenJoin()}
        />

        {/* Facilities Section */}
        <FacilitiesSection
          onOpenJoin={(facilityTitle) => handleOpenJoin(facilityTitle || 'Facility Membership')}
        />

        {/* 4 Fitness Programs */}
        <ProgramsSection
          onOpenJoin={(programTitle) => handleOpenJoin(programTitle)}
          onOpenTrainer={() => setTrainerModalOpen(true)}
        />

        {/* Personal Training Full-Width Atmospheric CTA */}
        <PersonalTrainingCta
          onOpenTrainer={() => setTrainerModalOpen(true)}
        />

        {/* Interactive Goal & Training Split Estimator */}
        <FitnessCalculator
          onSelectGoal={handleGoalFromCalc}
        />

        {/* Authentic Reviews Section (4.8 / 5 on Google) */}
        <ReviewsSection
          onOpenReviewsModal={() => setReviewsModalOpen(true)}
        />

        {/* Social Media Showcase */}
        <SocialSection />

        {/* Location & Directions on Canal Road Faisalabad */}
        <LocationSection
          onOpenDirectionsModal={() => setDirectionsModalOpen(true)}
        />

        {/* High-Converting Contact & Join Inquiry */}
        <ContactSection
          preselectedGoal={selectedGoal}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar
        onOpenJoin={() => handleOpenJoin()}
        onOpenDirections={() => setDirectionsModalOpen(true)}
      />

      {/* Modals */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        initialGoal={selectedGoal}
      />

      <TrainerModal
        isOpen={trainerModalOpen}
        onClose={() => setTrainerModalOpen(false)}
      />

      <ReviewsModal
        isOpen={reviewsModalOpen}
        onClose={() => setReviewsModalOpen(false)}
      />

      <DirectionsModal
        isOpen={directionsModalOpen}
        onClose={() => setDirectionsModalOpen(false)}
      />
    </div>
  );
}
