import React from 'react';
import { Star, ShieldCheck, Quote, MessageSquare, ExternalLink, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA, GYM_INFO } from '../data/gymData';

interface ReviewsSectionProps {
  onOpenReviewsModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenReviewsModal }) => {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#08090d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3">
              <Star className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
              AUTHENTIC MEMBER EXPERIENCES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight uppercase">
              RATED <span className="text-cyan-400">4.8 / 5</span> ON GOOGLE
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl">
              Real feedback from members who train daily at Fit Base Fitness Center on Canal Road, Faisalabad.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-[#0e1017] border border-zinc-800 rounded-2xl p-5 sm:p-6 flex items-center gap-6 shadow-xl shrink-0">
            <div className="text-center pr-6 border-r border-zinc-800">
              <div className="text-4xl sm:text-5xl font-black font-heading text-white leading-none">
                4.8
              </div>
              <div className="flex items-center justify-center gap-1 mt-1 text-cyan-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-white font-heading">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                85+ Google Reviews
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Faisalabad Gym Community
              </div>
              <div className="text-[11px] text-emerald-400 font-medium mt-0.5">
                100% Verified Feedback
              </div>
            </div>
          </div>
        </div>

        {/* 3 Authentic Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-[#0e1017] border border-zinc-800/90 hover:border-cyan-500/40 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-xl relative group"
              id={`review-card-${review.id}`}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800 group-hover:text-cyan-950 transition-colors pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
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
                  <h3 className="text-sm font-bold text-white font-heading flex items-center gap-1.5">
                    {review.author}
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" title="Verified Reviewer" />
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    {review.role || 'Google Review'} • <span className="text-zinc-300">5-Star Review</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Reviews Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenReviewsModal}
            className="px-7 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 hover:border-cyan-500/50 font-bold text-sm transition-all inline-flex items-center gap-2 shadow-lg"
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
