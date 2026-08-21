import React from 'react';
import { 
  Award, 
  Dumbbell, 
  Wind, 
  Clock, 
  Users, 
  Flame, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/gymData';

interface WhyChooseProps {
  onOpenJoin: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseProps> = ({ onOpenJoin }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-cyan-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-cyan-400" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-cyan-400" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-cyan-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-400" />;
      case 'Flame':
      default:
        return <Flame className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-24 bg-[#0b0d13] relative border-t border-b border-zinc-850">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(6,182,212,0.06),transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            THE FIT BASE ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight uppercase">
            WHY CHOOSE <span className="text-cyan-400">FIT BASE</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Everything you need to train consistently, progress safely, and achieve tangible physical results in Faisalabad.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between relative group border border-zinc-800/80"
              id={`why-choose-${item.id}`}
            >
              {/* Top Row: Icon & Metric Badge */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-cyan-500/30 group-hover:border-cyan-400/70 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-1 rounded-full">
                    {item.metric}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Standard at Fit Base</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-400">
            Ready to experience the difference firsthand?
            <button
              onClick={onOpenJoin}
              className="ml-2 text-cyan-400 hover:text-cyan-300 underline font-bold transition-colors cursor-pointer"
            >
              Book your visit or join today &rarr;
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
