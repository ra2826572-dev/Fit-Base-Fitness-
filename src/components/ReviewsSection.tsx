import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import { REVIEWS_DATA, GYM_INFO } from '../data/gymData';
import { MOTION_TOKENS } from '../utils/motionTokens';

export const ReviewsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [ratingCount, setRatingCount] = useState(0);

  // Count-up animation for rating
  useEffect(() => {
    if (shouldReduceMotion) {
      setRatingCount(4.8);
      return;
    }
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setRatingCount(parseFloat((progress * 4.8).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [shouldReduceMotion]);

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#08090d] border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Rating Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="bg-[#0e1017] border border-zinc-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-4xl font-black font-heading text-white mb-2">{ratingCount}</h3>
              <div className="flex text-cyan-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cyan-400" />
                ))}
              </div>
              <p className="text-sm text-zinc-400 mb-6">Based on 85+ Google reviews</p>
              
              <div className="space-y-3">
                <a
                  href={GYM_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Read all reviews</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-400 text-zinc-200 hover:text-white font-bold text-sm text-center transition-all cursor-pointer block hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#0e1017]"
                >
                  Write a review
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Reviews Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_DATA.slice(0, 6).map((review, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: MOTION_TOKENS.ease.entrance }}
                className={`p-6 rounded-2xl bg-[#0e1017] border ${idx === 0 ? 'border-cyan-500/40 shadow-lg shadow-cyan-950/20' : 'border-zinc-800'} flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center gap-1 text-cyan-400 mb-4" aria-label="5 out of 5 stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-cyan-400" />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed line-clamp-4">
                    "{review.text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-bold text-cyan-400">
                    {review.initials}
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-white">{review.author}</p>
                    <p className="text-zinc-500">Google Review • {review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
