import React from 'react';
import { Star, MessageSquare, Clock, Zap } from 'lucide-react';
import { STATS_DATA } from '../data/gymData';

export const StatsBar: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Star className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />;
      case 1:
        return <MessageSquare className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Clock className="w-5 h-5 text-cyan-400" />;
      default:
        return <Zap className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0e1017]/95 border border-zinc-800/90 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl glow-electric">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800/80">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 sm:gap-4 p-2 sm:p-3 ${
                idx > 1 ? 'pt-4 lg:pt-3' : ''
              } ${idx % 2 !== 0 ? 'pl-3 sm:pl-4' : ''}`}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-inner">
                {getIcon(idx)}
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-white tracking-tight flex items-baseline gap-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-zinc-300 tracking-wide uppercase font-heading">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-400 hidden sm:block">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
