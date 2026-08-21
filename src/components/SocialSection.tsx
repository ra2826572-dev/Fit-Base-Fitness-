import React from 'react';
import { Instagram, Facebook, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const SocialSection: React.FC = () => {
  const feedImages = [
    {
      img: GYM_INFO.images.hero,
      tag: '#FitBaseFaisalabad',
      caption: 'Late night training energy on Canal Road. Doors open till midnight! ⚡',
      likes: '142',
      comments: '18',
    },
    {
      img: GYM_INFO.images.strength,
      tag: '#StrengthTraining',
      caption: 'Heavy dumbbell rows & Olympic power racks built for true progression.',
      likes: '198',
      comments: '24',
    },
    {
      img: GYM_INFO.images.cardio,
      tag: '#CardioZone',
      caption: 'High-stamina conditioning floor in full air-conditioned comfort.',
      likes: '165',
      comments: '12',
    },
    {
      img: GYM_INFO.images.about,
      tag: '#FitnessCommunity',
      caption: 'Consistency is built with the right guidance and right community.',
      likes: '230',
      comments: '31',
    },
  ];

  return (
    <section className="py-24 bg-[#0b0d13] relative border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            STAY CONNECTED
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight uppercase">
            FOLLOW THE <span className="text-cyan-400">FIT BASE</span> JOURNEY
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Stay connected with Fit Base Fitness Center for workouts, fitness motivation, gym updates and more.
          </p>

          {/* Social Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={GYM_INFO.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:opacity-95 transition-opacity"
              id="social-btn-instagram"
            >
              <Instagram className="w-4 h-4" />
              <span>INSTAGRAM: Fit Base Fitness Center</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={GYM_INFO.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:bg-blue-500 transition-colors"
              id="social-btn-facebook"
            >
              <Facebook className="w-4 h-4" />
              <span>FACEBOOK: Fit Base Fitness Center Faisalabad</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Photo Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {feedImages.map((post, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl h-64 sm:h-72"
            >
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover & Overlay details */}
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-bold text-cyan-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    {post.tag}
                  </span>
                  <Instagram className="w-4 h-4 text-white/80" />
                </div>

                <div>
                  <p className="text-xs text-zinc-200 line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-zinc-700/60 flex items-center gap-4 text-[11px] text-zinc-300 font-medium">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
