import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingContact } from './components/FloatingContact';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { TrainersPage } from './pages/TrainersPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { LocationPage } from './pages/LocationPage';
import { ContactPage } from './pages/ContactPage';

// Modals
import { JoinModal } from './components/Modals/JoinModal';
import { TrainerModal } from './components/Modals/TrainerModal';
import { ReviewsModal } from './components/Modals/ReviewsModal';
import { DirectionsModal } from './components/Modals/DirectionsModal';

interface AnimatedAppContentProps {
  handleOpenJoin: (goal?: string) => void;
  setTrainerModalOpen: (open: boolean) => void;
  setReviewsModalOpen: (open: boolean) => void;
  setDirectionsModalOpen: (open: boolean) => void;
  selectedGoal: string;
}

function AnimatedAppContent({
  handleOpenJoin,
  setTrainerModalOpen,
  setReviewsModalOpen,
  setDirectionsModalOpen,
  selectedGoal,
}: AnimatedAppContentProps) {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={location.pathname}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="w-full"
    >
      <Routes location={location}>
        <Route
          path="/"
          element={
            <HomePage
              onOpenJoin={handleOpenJoin}
              onOpenTrainer={() => setTrainerModalOpen(true)}
              onOpenDirections={() => setDirectionsModalOpen(true)}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              onOpenJoin={handleOpenJoin}
              onOpenDirections={() => setDirectionsModalOpen(true)}
            />
          }
        />
        <Route
          path="/facilities"
          element={
            <FacilitiesPage
              onOpenJoin={handleOpenJoin}
              onOpenDirections={() => setDirectionsModalOpen(true)}
            />
          }
        />
        <Route
          path="/programs"
          element={
            <ProgramsPage
              onOpenJoin={handleOpenJoin}
              onOpenTrainer={() => setTrainerModalOpen(true)}
            />
          }
        />
        <Route
          path="/trainers"
          element={
            <TrainersPage
              onOpenTrainer={() => setTrainerModalOpen(true)}
              onOpenJoin={handleOpenJoin}
            />
          }
        />
        <Route
          path="/calculator"
          element={<CalculatorPage onOpenJoin={handleOpenJoin} />}
        />
        <Route
          path="/reviews"
          element={
            <ReviewsPage
              onOpenReviewsModal={() => setReviewsModalOpen(true)}
              onOpenJoin={handleOpenJoin}
            />
          }
        />
        <Route
          path="/location"
          element={
            <LocationPage
              onOpenDirections={() => setDirectionsModalOpen(true)}
              onOpenJoin={handleOpenJoin}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage
              initialGoal={selectedGoal}
              onOpenDirections={() => setDirectionsModalOpen(true)}
            />
          }
        />
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </motion.div>
  );
}

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

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col antialiased selection:bg-cyan-400 selection:text-black">
        {/* Sticky Header Navigation with active page links */}
        <Navbar
          onOpenJoin={() => handleOpenJoin()}
          onOpenTrainer={() => setTrainerModalOpen(true)}
          onOpenDirections={() => setDirectionsModalOpen(true)}
        />

        {/* Dedicated Page Routes with 200ms fade transition */}
        <main className="flex-1 pb-16 md:pb-0">
          <AnimatedAppContent
            handleOpenJoin={handleOpenJoin}
            setTrainerModalOpen={setTrainerModalOpen}
            setReviewsModalOpen={setReviewsModalOpen}
            setDirectionsModalOpen={setDirectionsModalOpen}
            selectedGoal={selectedGoal}
          />
        </main>

        {/* Universal Footer */}
        <Footer />

        {/* Mobile Sticky Quick Action Bar */}
        <MobileStickyBar
          onOpenJoin={() => handleOpenJoin()}
          onOpenDirections={() => setDirectionsModalOpen(true)}
        />

        {/* Floating WhatsApp Action Button */}
        <FloatingContact />

        {/* Global Interactive Modals */}
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
    </BrowserRouter>
  );
}
