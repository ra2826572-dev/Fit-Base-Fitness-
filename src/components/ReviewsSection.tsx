import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Star, Quote, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS_DATA, GYM_INFO } from '../data/gymData';
import { MOTION_TOKENS } from '../utils/motionTokens';

interface ReviewsSectionProps {
  onOpenReviewsModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenReviewsModal }) => {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const loopCountRef = useRef(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const totalReviews = REVIEWS_DATA.length;

  // Auto-advance carousel only if user has not interacted, pauses on hover/focus/touch, stops after one full loop
  useEffect(() => {
    if (shouldReduceMotion || hasInteracted || isPaused || loopCountRef.current >= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= totalReviews) {
          loopCountRef.current += 1; // Completed one full loop, stop auto-advancing
          return 0;
        }
        return next;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [hasInteracted, isPaused, shouldReduceMotion, totalReviews]);

  // Sync scroll on mobile when currentIndex changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.85;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setHasInteracted(true);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalReviews - 1));
  };

  const handleNext = () => {
    setHasInteracted(true);
    setCurrentIndex((prev) => (prev < totalReviews - 1 ? prev + 1 : 0));
  };

  return (
    <section id="reviews" className="py-10 sm:py-16 md:py-20 bg-[#08090d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Carousel Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3">
              <Star className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
              MEMBER EXPERIENCES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight uppercase">
              WHAT OUR <span className="text-cyan-400">MEMBERS SAY</span>
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl">
              Real feedback from members who train daily at Fit Base Fitness Center on Canal Road, Faisalabad.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reviews Cards: Horizontal scroll-snap track on mobile, 3-card grid on desktop */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => {
            setHasInteracted(true);
            setIsPaused(true);
          }}
          onTouchEnd={() => setIsPaused(false)}
          className="flex md:grid md:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-4 md:pb-0"
        >
          {REVIEWS_DATA.map((review, rIdx) => (
            <motion.div
              key={review.id}
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: MOTION_TOKENS.distance.md }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: MOTION_TOKENS.duration.ui,
                delay: shouldReduceMotion ? 0 : rIdx * 0.12,
                ease: MOTION_TOKENS.ease.entrance,
              }}
              className="shrink-0 w-[85vw] sm:w-[60vw] md:w-auto snap-center bg-[#0e1017] border border-zinc-800/90 hover:border-cyan-500/40 rounded-2xl p-7 flex flex-col justify-between transition-colors duration-300 shadow-xl relative group"
              id={`review-card-${review.id}`}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800 group-hover:text-cyan-950 transition-colors pointer-events-none" />

              <div>
                {/* 5 Stars: each star fills with a 60ms stagger when the card reveals (scale 0.6 to 1, then color cyan) */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : rIdx * 0.1 + i * 0.06,
                        duration: 0.2,
                        ease: 'easeOut',
                      }}
                    >
                      <Star className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-200 text-base sm:text-lg leading-relaxed font-normal italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author Row */}
              <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-cyan-500/30 flex items-center justify-center font-heading font-extrabold text-cyan-400 text-sm">
                  {review.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-heading">
                    {review.author}
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    {review.role || 'Member'} • <span className="text-zinc-300">5-Star Review</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Reviews Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenReviewsModal}
            className="px-7 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 hover:border-cyan-500/50 font-bold text-sm transition-all inline-flex items-center gap-2 shadow-lg cursor-pointer"
            id="read-more-reviews-btn"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>READ MORE REVIEWS ({GYM_INFO.totalReviews})</span>
          </button>
        </div>

      </div>
    </section>
  );
};
