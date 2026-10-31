import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronRight, Star, Clock, Flame, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { MOTION_TOKENS } from '../utils/motionTokens';

interface HeroProps {
  onOpenJoin: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoin }) => {
  const shouldReduceMotion = useReducedMotion();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [reviewCount, setReviewCount] = useState(shouldReduceMotion ? 85 : 0);

  // Stop scroll indicator on first user scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Numeric count-up for reviews: 0 to 85 over 1.2s, runs once
  useEffect(() => {
    if (shouldReduceMotion) {
      setReviewCount(85);
      return;
    }

    const duration = MOTION_TOKENS.duration.countUp * 1000;
    const start = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // smooth out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setReviewCount(Math.floor(eased * 85));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setReviewCount(85);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animateCount);
    }, 900); // starts after stats entrance

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  // Headline words for masked slide-up: "BUILD", "YOUR", "STRONGEST", "SELF."
  const words = ['BUILD', 'YOUR', 'STRONGEST', 'SELF.'];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#08090d]">
      {/* Background Image: slow scale 1.08 to 1.0 over 8-10s ease-out on load only (no infinite loop) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          src={GYM_INFO.images.hero}
          alt="Fit Base Fitness Center Interior Faisalabad"
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 9, ease: 'easeOut' }}
          className="w-full h-full object-cover object-center brightness-[0.42] contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignette & Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/65 to-[#08090d]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(6,182,212,0.15),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#08090d] to-transparent" />
      </div>

      {/* Grid line accents */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center">
        {/* Small Badge */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: MOTION_TOKENS.ease.entrance }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg shadow-cyan-950/40 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>FAISALABAD'S PREMIUM FITNESS DESTINATION</span>
        </motion.div>

        {/* Headline with word-by-word overflow:hidden mask reveal */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading text-white tracking-tight leading-[1.05] uppercase max-w-4xl flex flex-wrap justify-center gap-x-3 sm:gap-x-4 md:gap-x-5">
          {words.map((word, index) => {
            const isSelf = word === 'SELF.';
            const isGradient = word === 'STRONGEST';

            return (
              <span key={word} className="inline-block overflow-hidden pb-1 sm:pb-2">
                <motion.span
                  initial={
                    shouldReduceMotion
                      ? { y: 0, opacity: 1 }
                      : { y: '105%', opacity: 0 }
                  }
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: MOTION_TOKENS.duration.hero,
                    delay: shouldReduceMotion ? 0 : index * MOTION_TOKENS.stagger.words,
                    ease: MOTION_TOKENS.ease.entrance,
                  }}
                  className={`inline-block ${
                    isSelf
                      ? 'text-cyan-400'
                      : isGradient
                      ? 'bg-gradient-to-r from-white via-zinc-100 to-cyan-300 bg-clip-text text-transparent'
                      : 'text-white'
                  }`}
                  style={
                    isSelf && !shouldReduceMotion
                      ? {
                          transition: 'letter-spacing 900ms ease-out',
                        }
                      : undefined
                  }
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h1>

        {/* Subheading: fades in with 16px upward movement, delay 400ms after headline */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.45,
            ease: MOTION_TOKENS.ease.entrance,
          }}
          className="mt-4 text-base sm:text-xl md:text-2xl font-bold text-cyan-300/90 tracking-wide font-heading uppercase"
        >
          {GYM_INFO.subTagline}
        </motion.p>

        {/* Body paragraph fades in, delay 550ms */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.55,
            ease: MOTION_TOKENS.ease.entrance,
          }}
          className="mt-4 text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed text-zinc-300/90"
        >
          {GYM_INFO.description}
        </motion.p>

        {/* CTA Buttons: Primary (Join Now) with entrance fade+scale from 0.96 (delay 700ms) & Secondary */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.7,
            ease: MOTION_TOKENS.ease.entrance,
          }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
        >
          {/* Primary CTA with pseudo-element opacity transition for glow, hover translateY(-2px), arrow 3px */}
          <button
            onClick={onOpenJoin}
            className="relative w-full sm:w-auto px-8 py-4 rounded-xl text-base font-extrabold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 shadow-xl transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
            id="hero-join-now-btn"
          >
            {/* Glow pseudo layer via opacity */}
            <span className="absolute inset-0 rounded-xl bg-cyan-400 blur-lg opacity-30 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />
            <Flame className="w-5 h-5 text-black relative z-10" />
            <span className="relative z-10">JOIN NOW</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-[3px] transition-transform duration-200 relative z-10" />
          </button>

          {/* Secondary CTA: Book Free Trial */}
          <button
            onClick={() => onOpenJoin('Free Trial')}
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-bold text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-cyan-500/50 shadow-lg backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            id="hero-free-trial-btn"
          >
            <span>BOOK FREE TRIAL</span>
          </button>
        </motion.div>

        {/* Canonical Single Stats Row in Hero: staggered entrance + count-up */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.85,
            ease: MOTION_TOKENS.ease.entrance,
          }}
          className="mt-10 sm:mt-12 pt-6 border-t border-zinc-800/80 w-full max-w-2xl grid grid-cols-3 gap-2 sm:gap-6 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-cyan-400 text-sm sm:text-base font-bold">
              <Star className="w-4 h-4 fill-cyan-400 text-cyan-400" />
              <span>4.8★</span>
            </div>
            <span className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider font-medium mt-0.5">
              Rating
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-zinc-800/80 px-2">
            <div className="flex items-center gap-1 text-white text-sm sm:text-base font-bold">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>{reviewCount}+ Reviews</span>
            </div>
            <span className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider font-medium mt-0.5">
              Member Reviews
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-white text-sm sm:text-base font-bold">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>6 AM – 12 AM</span>
            </div>
            <span className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider font-medium mt-0.5">
              Daily Hours
            </span>
          </div>
        </motion.div>

        {/* Scroll indicator at the bottom: 1.6s loop bounce of 6px, stops on first scroll */}
        {!hasScrolled && !shouldReduceMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7, y: [0, 6, 0] }}
            transition={{
              opacity: { delay: 1.2, duration: 0.4 },
              y: { repeat: Infinity, duration: 1.6, ease: 'easeInOut' },
            }}
            className="hidden sm:flex flex-col items-center gap-1 mt-8 text-zinc-500 cursor-pointer pointer-events-none"
          >
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Scroll</span>
            <ChevronDown className="w-4 h-4 text-cyan-400" />
          </motion.div>
        )}
      </div>
    </section>
  );
};
