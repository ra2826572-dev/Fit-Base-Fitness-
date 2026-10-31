import React, { useState } from 'react';
import { 
  Star
} from 'lucide-react';
import { ReviewsSection } from '../components/ReviewsSection';
import { REVIEWS_DATA, GYM_INFO } from '../data/gymData';

interface ReviewsPageProps {
  onOpenReviewsModal: () => void;
  onOpenJoin: (goal?: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenReviewsModal, onOpenJoin }) => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  const filteredReviews = REVIEWS_DATA.filter((r) => {
    if (filterRating === 'all') return true;
    return r.rating === filterRating;
  });

  return (
    <div className="space-y-0">
      {/* Main Reviews Showcase */}
      <ReviewsSection onOpenReviewsModal={onOpenReviewsModal} />

      {/* Filterable Detailed Reviews Grid */}
      <section className="py-16 sm:py-24 bg-[#0a0c13] border-t border-zinc-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-800">
            <div>
              <h3 className="text-xl font-bold font-heading text-white uppercase">
                ALL MEMBER TESTIMONIALS
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Showing {filteredReviews.length} member ratings
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterRating('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterRating === 'all'
                    ? 'bg-cyan-400 text-black shadow-md'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800'
                }`}
              >
                All Ratings
              </button>
              <button
                onClick={() => setFilterRating(5)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                  filterRating === 5
                    ? 'bg-cyan-400 text-black shadow-md'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800'
                }`}
              >
                <span>5 Stars</span>
                <Star className="w-3 h-3 fill-current" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between hover:border-cyan-500/30 transition-all shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-zinc-500 font-medium">
                      {review.date}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-xs uppercase">
                      {review.initials || review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        {review.author}
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        Fit Base Member
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
