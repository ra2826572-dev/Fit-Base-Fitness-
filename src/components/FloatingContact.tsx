import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageSquare, Phone } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { MOTION_TOKENS } from '../utils/motionTokens';

export const FloatingContact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [showTooltip, setShowTooltip] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);
  const [isTabVisible, setIsTabVisible] = useState(true);

  // Manage tab visibility to pause animations when hidden
  useEffect(() => {
    const handleVisibility = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // Pulse ring 2 cycles max on the first view, then stops
  useEffect(() => {
    if (shouldReduceMotion || pulseCount >= 2 || !isTabVisible) return;

    const timer = setTimeout(() => {
      setPulseCount((prev) => prev + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pulseCount, isTabVisible, shouldReduceMotion]);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Fit Base Fitness Center! I would like to inquire about memberships, programs, and gym hours on Canal Road.`
    );
    window.open(`https://wa.me/923128330203?text=${text}`, '_blank');
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: shouldReduceMotion ? 0 : 1.5,
        duration: MOTION_TOKENS.duration.ui,
        ease: MOTION_TOKENS.ease.entrance,
      }}
      className="fixed bottom-20 md:bottom-7 right-5 z-40 flex items-center group"
    >
      {/* Tooltip that slides in on hover or focus */}
      <span
        className={`hidden md:block mr-3 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0e1017] border border-cyan-500/40 shadow-xl transition-all duration-200 pointer-events-none select-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat on WhatsApp
      </span>

      {/* Button */}
      <div className="relative">
        {/* Pulse ring (runs max 2 cycles on first view) */}
        {!shouldReduceMotion && pulseCount < 2 && isTabVisible && (
          <span className="absolute -inset-1.5 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />
        )}

        <button
          onClick={handleWhatsApp}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Chat on WhatsApp with Fit Base Fitness Center"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-black text-black" />
        </button>
      </div>
    </motion.div>
  );
};
