import React from 'react';
import { ChevronRight, ArrowDown, Star, Clock, ShieldCheck, Flame, Compass } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface HeroProps {
  onOpenJoin: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoin, onExploreClick }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#08090d]">
      {/* Background Image with Dark Vignette & Electric Blue Atmospheric Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src={GYM_INFO.images.hero}
          alt="Fit Base Fitness Center Interior Faisalabad"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom brightness-[0.45] contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/60 to-[#08090d]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(6,182,212,0.15),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08090d] to-transparent" />
      </div>

      {/* Grid line accents for technical athletic feel */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center">
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg shadow-cyan-950/40 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>FAISALABAD'S PREMIUM FITNESS DESTINATION</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading text-white tracking-tight leading-[1.05] uppercase max-w-4xl">
          BUILD YOUR <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-white via-zinc-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
            STRONGEST SELF
          </span>
          <span className="text-cyan-400">.</span>
        </h1>

        {/* Supporting Line */}
        <p className="mt-4 text-base sm:text-xl md:text-2xl font-bold text-cyan-300/90 tracking-wide font-heading uppercase">
          {GYM_INFO.subTagline}
        </p>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed text-zinc-300/90">
          {GYM_INFO.description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={onOpenJoin}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-extrabold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
            id="hero-join-now-btn"
          >
            <Flame className="w-5 h-5 text-black" />
            <span>JOIN NOW</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-bold text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-cyan-500/50 shadow-lg backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 group"
            id="hero-explore-btn"
          >
            <Compass className="w-5 h-5 text-cyan-400 group-hover:rotate-45 transition-transform" />
            <span>EXPLORE THE GYM</span>
          </button>
        </div>

        {/* Small Trust Row below buttons */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-zinc-800/80 w-full max-w-2xl grid grid-cols-3 gap-2 sm:gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-cyan-400 text-sm sm:text-base font-bold">
              <Star className="w-4 h-4 fill-cyan-400 text-cyan-400" />
              <span>4.8★</span>
            </div>
            <span className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider font-medium mt-0.5">
              Google Rating
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-zinc-800/80 px-2">
            <div className="flex items-center gap-1 text-white text-sm sm:text-base font-bold">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>85+ Reviews</span>
            </div>
            <span className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider font-medium mt-0.5">
              Verified Members
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
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={onExploreClick}
          className="text-[11px] tracking-widest uppercase text-zinc-400 hover:text-cyan-400 flex flex-col items-center gap-1 focus:outline-none"
          aria-label="Scroll down"
        >
          <span>SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
