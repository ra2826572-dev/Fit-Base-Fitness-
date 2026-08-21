import React from 'react';
import { Phone, Users, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface TrainerCtaProps {
  onOpenTrainer: () => void;
}

export const PersonalTrainingCta: React.FC<TrainerCtaProps> = ({ onOpenTrainer }) => {
  return (
    <section id="trainers-cta" className="relative py-24 sm:py-32 overflow-hidden bg-[#08090d]">
      {/* Background Image with Deep Contrast Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={GYM_INFO.images.strength}
          alt="Fit Base Weight Training & Personal Coaching Faisalabad"
          className="w-full h-full object-cover object-center brightness-[0.25] contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090d] via-[#08090d]/80 to-[#08090d]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-xl">
          <Users className="w-4 h-4 text-cyan-400" />
          <span>DEDICATED FITNESS COACHING</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight leading-tight uppercase max-w-4xl mx-auto">
          DON'T JUST WORK OUT. <br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
            TRAIN WITH PURPOSE.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Whether you're new to fitness or ready to take your performance to the next level, professional guidance can help you train smarter and stay consistent.
        </p>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-300 font-medium">
          <span className="flex items-center gap-1.5 bg-zinc-900/80 px-3.5 py-1.5 rounded-lg border border-zinc-800">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            Beginner-Friendly Onboarding
          </span>
          <span className="flex items-center gap-1.5 bg-zinc-900/80 px-3.5 py-1.5 rounded-lg border border-zinc-800">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Form Correction & Biomechanics
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenTrainer}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
            id="trainer-cta-talk-btn"
          >
            <span>TALK TO A TRAINER</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-cyan-500/50 shadow-lg backdrop-blur-md transition-all flex items-center justify-center gap-2.5"
            id="trainer-cta-phone-btn"
          >
            <Phone className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span>CALL {GYM_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
