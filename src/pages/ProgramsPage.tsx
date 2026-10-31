import React from 'react';
import { 
  CheckCircle2, 
  Phone
} from 'lucide-react';
import { ProgramsSection } from '../components/ProgramsSection';
import { GYM_INFO } from '../data/gymData';

interface ProgramsPageProps {
  onOpenJoin: (goal?: string) => void;
  onOpenTrainer: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onOpenJoin, onOpenTrainer }) => {
  const trainingSplits = [
    {
      name: '3-Day Full Body Routine',
      frequency: '3 Days / Week (e.g. Mon / Wed / Fri)',
      idealFor: 'Beginners & Busy Professionals',
      focus: 'High stimulus frequency, compound lifts, recovery-friendly schedule.',
      exercises: ['Squats & Leg Press', 'Bench & Overhead Press', 'Lat Pulldowns & Rows', 'Core & Arms finisher'],
    },
    {
      name: '4-Day Upper / Lower Split',
      frequency: '4 Days / Week (e.g. Mon / Tue & Thu / Fri)',
      idealFor: 'Intermediate Lifters & Body Recomposition',
      focus: 'Balanced volume distribution between upper torso and lower chain.',
      exercises: ['Heavy Upper (Chest & Back focus)', 'Lower Power (Quads & Hamstrings)', 'Hypertrophy Upper (Shoulders & Arms)', 'Posterior Chain & Calves'],
    },
    {
      name: '5-Day Push / Pull / Legs (PPL)',
      frequency: '5–6 Days / Week',
      idealFor: 'Advanced Athletes & Maximum Muscle Growth',
      focus: 'Optimal recovery time per muscle group with maximum isolation volume.',
      exercises: ['Push Day (Chest, Shoulders, Triceps)', 'Pull Day (Back, Traps, Biceps)', 'Legs Day (Quads, Hamstrings, Glutes)', 'Active Recovery / Mobility'],
    },
  ];

  return (
    <div className="space-y-0">
      {/* Main Programs Component */}

      {/* Main Programs Component */}
      <ProgramsSection
        onOpenJoin={(programTitle) => onOpenJoin(programTitle)}
        onOpenTrainer={onOpenTrainer}
      />

      {/* Training Split Comparison Guide */}
      <section className="py-16 sm:py-24 bg-[#0a0c13] border-t border-zinc-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase inline-block mb-3">
              PROGRAM ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
              POPULAR TRAINING SPLITS AT FIT BASE
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">
              Our gym coaches customize one of these proven split structures based on your schedule, experience level, and body goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingSplits.map((split, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-md text-[11px] font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 uppercase tracking-wider mb-4">
                    {split.frequency}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white uppercase">
                    {split.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-semibold mt-1">
                    Ideal: {split.idealFor}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                    {split.focus}
                  </p>

                  <div className="mt-6 pt-6 border-t border-zinc-800">
                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
                      Core Workouts Include:
                    </h4>
                    <ul className="space-y-2 text-xs text-zinc-400">
                      {split.exercises.map((ex, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800">
                  <button
                    onClick={() => onOpenJoin(split.name)}
                    className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-cyan-400 text-zinc-200 hover:text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Select Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-zinc-950 via-[#0a121e] to-zinc-950 border-t border-zinc-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-white uppercase">
            NOT SURE WHICH PROGRAM FITS YOU?
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base mt-3">
            Speak directly with our expert fitness trainers on West Canal Road, Faisalabad.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenJoin('Custom Training Consultation')}
              className="px-8 py-3.5 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Book Free Consultation
            </button>
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="px-8 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-bold text-sm hover:border-cyan-400 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
