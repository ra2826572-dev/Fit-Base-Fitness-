import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const TransformationsSection: React.FC = () => {
  const stories = [
    {
      name: 'Usman Ali',
      duration: '6 Months Training',
      quote: 'Consistent heavy lifting at Fit Base and proper coaching helped me pack solid muscle and change my physique.',
      badge: 'MUSCLE BUILDING',
      image: '/public/assets/aistudio/image_d72e6d8a.png',
      isRealPhoto: true,
      objectPosition: '50% 25%',
      altText: 'Fit Base member after 6 months of muscle building',
    },
    {
      name: 'Bilal Ahmed',
      duration: '4 Months Training',
      quote: 'Lost 12kg with strict cardio discipline and the supportive environment here. Best gym on Canal Road.',
      badge: 'FAT LOSS',
      image: '/public/assets/aistudio/image_1722118a.png',
      isRealPhoto: true,
      objectPosition: '50% 40%',
      altText: 'Fit Base member after 4 months of fat loss training',
    },
    {
      name: 'Ali Raza',
      duration: '5 Months Training',
      quote: 'Great climate control and respectful environment. Achieved incredible strength and stamina gains.',
      badge: 'STRENGTH & TONE',
      image: '/public/assets/aistudio/image_16de5c78.png',
      isRealPhoto: true,
      objectPosition: '50% 20%',
      altText: 'Fit Base member after 5 months of strength and tone training',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#08090d] relative border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase inline-block mb-3">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
            REAL MEMBERS. <span className="text-cyan-400">REAL RESULTS.</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            See how our members transformed their strength, health, and confidence at Fit Base.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#0e1017] border border-zinc-800 flex flex-col justify-between shadow-xl space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-1 rounded-full uppercase">
                    {story.badge}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {story.duration}
                  </span>
                </div>

                {/* Photo Box */}
                <div className="w-full aspect-[4/5] rounded-xl bg-zinc-900 border border-zinc-800 relative overflow-hidden group mb-4">
                  {!story.isRealPhoto && (
                    <div className="absolute inset-0 bg-zinc-950/60 flex items-center justify-center z-10">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest border border-zinc-700 px-3 py-1.5 rounded-lg bg-zinc-900">
                        [YAHAN REAL PHOTO]
                      </span>
                    </div>
                  )}
                  <img
                    src={story.image}
                    alt={story.altText || story.name}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                      story.isRealPhoto ? '' : 'opacity-30'
                    }`}
                    style={story.isRealPhoto ? { objectPosition: story.objectPosition || '50% 50%' } : undefined}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <p className="text-sm text-zinc-300 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-sm font-bold text-white uppercase font-heading">
                  {story.name}
                </span>
                <span className="text-xs text-zinc-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Member Story</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
