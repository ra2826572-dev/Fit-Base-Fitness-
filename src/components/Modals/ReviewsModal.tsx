import React from 'react';
import { X, Star, Quote } from 'lucide-react';
import { REVIEWS_DATA, GYM_INFO } from '../../data/gymData';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0e111a] border border-zinc-700 max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
            <Star className="w-6 h-6 text-cyan-400 fill-cyan-400" />
          </div>
          <div>
            <h3 className="text-2xl font-black font-heading text-white">
              MEMBER REVIEWS & EXPERIENCES
            </h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-sm font-black text-cyan-400">4.8 / 5.0 Rating</span>
              <span className="text-xs text-zinc-400">• {GYM_INFO.totalReviews} Member Reviews</span>
            </div>
          </div>
        </div>

        {/* Member Reviews List without fake verification icons or add review form */}
        <div className="space-y-4">
          {REVIEWS_DATA.map((rev) => (
            <div key={rev.id} className="bg-zinc-900/90 border border-zinc-800 p-5 rounded-2xl space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center font-heading font-bold text-xs text-cyan-400">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {rev.author}
                    </h4>
                    <span className="text-[10px] text-zinc-400">{rev.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-200 italic leading-relaxed">
                "{rev.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white"
          >
            Close Reviews Window
          </button>
        </div>
      </div>
    </div>
  );
};
