import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  Target, 
  Activity, 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  ArrowRight,
  Phone
} from 'lucide-react';
import { FitnessCalculator } from '../components/FitnessCalculator';
import { GYM_INFO } from '../data/gymData';

interface CalculatorPageProps {
  onOpenJoin: (goal?: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onOpenJoin }) => {
  const navigate = useNavigate();

  const handleSelectGoal = (goal: string) => {
    onOpenJoin(goal);
  };

  return (
    <div className="space-y-0">
      {/* Interactive Fitness Calculator Component */}
      <FitnessCalculator onSelectGoal={handleSelectGoal} />

      {/* Scientific Body Recomposition Guide */}
      <section className="py-20 sm:py-28 bg-[#0a0c13] border-t border-zinc-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase inline-block mb-3">
              NUTRITION BASICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
              HOW TO HIT YOUR TARGETS
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">
              Workouts trigger the stimulus; proper recovery and nutrition lock in the physical results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white uppercase">
                Fat Loss (Deficit)
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Aim for a controlled deficit of 300–500 calories below maintenance. Prioritize high dietary protein (1.6g–2.2g per kg bodyweight) to preserve muscle mass while burning body fat.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white uppercase">
                Muscle Building (Surplus)
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Consume 200–400 calories above maintenance with progressive overload on heavy compound lifts. Focus on quality complex carbohydrates around training windows for energy.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white uppercase">
                Recovery & Sleep
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Aim for 7–8 hours of uninterrupted sleep every night. Muscle tissue repairs and hormonal recovery peaks during deep rest periods away from the gym.
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-[#0d0f17] border border-zinc-800 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-white uppercase">
              READY TO IMPLEMENT YOUR PLAN?
            </h3>
            <p className="text-zinc-300 text-sm mt-2">
              Our gym coaches can turn these calculated numbers into a tangible daily workout schedule and meal checklist.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onOpenJoin('Calculator Custom Program')}
                className="px-8 py-3.5 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-all"
              >
                Join Now
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
        </div>
      </section>
    </div>
  );
};
