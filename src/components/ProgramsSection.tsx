import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { 
  Dumbbell, 
  Flame, 
  Target, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Phone
} from 'lucide-react';
import { PROGRAMS_DATA, GYM_INFO } from '../data/gymData';
import { Program } from '../types';
import { MOTION_TOKENS } from '../utils/motionTokens';

interface ProgramsSectionProps {
  onOpenJoin: (goal?: string) => void;
  onOpenTrainer: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenJoin }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const getProgramIcon = (icon: string) => {
    switch (icon) {
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-cyan-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-cyan-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-cyan-400" />;
      case 'Activity':
      default:
        return <Activity className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="programs" className="py-10 sm:py-16 md:py-20 bg-[#0b0d13] relative border-t border-zinc-850">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: MOTION_TOKENS.distance.md }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: MOTION_TOKENS.duration.ui, ease: MOTION_TOKENS.ease.entrance }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            GOAL-ORIENTED WORKOUTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight uppercase">
            TRAIN WITH <span className="text-cyan-400">PURPOSE.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Choose a structured path that matches your current fitness level and personal ambitions, supported by experienced coaches.
          </p>
        </motion.div>

        {/* 4 Program Cards: Reveal on scroll with stagger 100ms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS_DATA.map((program, index) => (
            <motion.div
              key={program.id}
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: MOTION_TOKENS.distance.md }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: MOTION_TOKENS.duration.ui,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: MOTION_TOKENS.ease.entrance,
              }}
              className="bg-[#0e1017] rounded-2xl p-6 sm:p-7 border border-zinc-800/90 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:border-cyan-400/60"
              id={`program-card-${program.id}`}
            >
              {/* Subtle top accent line that scales from 0 to 100% width on hover */}
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                {/* Top Row: Icon & Tag (static badges, no infinite animations) */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-cyan-500/30 group-hover:border-cyan-400 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                    {getProgramIcon(program.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {program.intensity}
                  </span>
                </div>

                {/* Subtitle */}
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                  {program.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {program.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-2">
                  {program.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: Arrow slides 4px on hover */}
              <div className="mt-7 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  id={`program-learn-more-${program.id}`}
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <button
                  onClick={() => onOpenJoin(program.title)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-zinc-200 hover:text-black bg-zinc-900 hover:bg-cyan-400 border border-zinc-800 transition-all cursor-pointer"
                >
                  Join Goal
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consultation Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-white font-heading">
              Unsure which program fits your current fitness level?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Speak with one of our certified trainers for a complimentary goal evaluation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenJoin('General Fitness Program')}
              className="px-5 py-2.5 rounded-xl bg-cyan-400 text-black text-xs sm:text-sm font-bold hover:bg-cyan-300 whitespace-nowrap shadow-md transition-all cursor-pointer"
            >
              Join Now
            </button>
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="px-4 py-2.5 rounded-xl bg-zinc-800 text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold hover:bg-zinc-750 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0e111a] border border-zinc-700 max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-bold cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center shrink-0">
                {getProgramIcon(selectedProgram.icon)}
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {selectedProgram.subtitle}
                </span>
                <h3 className="text-2xl font-black text-white font-heading">
                  {selectedProgram.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mb-5">
              {selectedProgram.description}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Program Structure:
                </h4>
                <div className="space-y-2">
                  {selectedProgram.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-200 bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800 text-xs">
                <span className="font-bold text-cyan-400">Ideal For: </span>
                <span className="text-zinc-300">{selectedProgram.idealFor}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const title = selectedProgram.title;
                  setSelectedProgram(null);
                  onOpenJoin(title);
                }}
                className="flex-1 py-3 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
              >
                Inquire For This Program
              </button>
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-semibold text-zinc-300 hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
