import React, { useState } from 'react';
import { Calculator, Flame, Target, Dumbbell, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

interface FitnessCalculatorProps {
  onSelectGoal: (goal: string) => void;
}

export const FitnessCalculator: React.FC<FitnessCalculatorProps> = ({ onSelectGoal }) => {
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(75);
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [gender, setGender] = useState<'male' | 'female'>('male');

  // Calculate BMI
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const roundedBmi = parseFloat(bmi.toFixed(1));

  let bmiCategory = 'Healthy Weight';
  let categoryColor = 'text-emerald-400';
  let recommendedProgram = 'Strength Training';

  if (roundedBmi < 18.5) {
    bmiCategory = 'Underweight (Mass Building Focus)';
    categoryColor = 'text-amber-400';
    recommendedProgram = 'Strength Training';
  } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
    bmiCategory = 'Optimal Fitness Baseline';
    categoryColor = 'text-emerald-400';
    recommendedProgram = 'Strength & Functional Fitness';
  } else if (roundedBmi >= 25 && roundedBmi <= 29.9) {
    bmiCategory = 'Moderate Conditioning Target';
    categoryColor = 'text-cyan-400';
    recommendedProgram = 'Weight Loss & Toning';
  } else {
    bmiCategory = 'Active Fat Loss & Endurance';
    categoryColor = 'text-rose-400';
    recommendedProgram = 'Weight Loss';
  }

  return (
    <section className="py-20 bg-[#08090d] relative overflow-hidden border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-[#0e1017] via-zinc-900/90 to-[#0e1017] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Interactive Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3">
                  <Calculator className="w-3.5 h-3.5 text-cyan-400" />
                  INTERACTIVE GOAL ESTIMATOR
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white uppercase">
                  CALCULATE YOUR <span className="text-cyan-400">FITNESS BASELINE</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Adjust your stats below to find your starting benchmark and tailored program recommendation at Fit Base.
                </p>
              </div>

              {/* Sliders */}
              <div className="space-y-5">
                {/* Height */}
                <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-zinc-300 uppercase">Height</span>
                    <span className="text-sm font-black font-heading text-cyan-400">{heightCm} cm</span>
                  </div>
                  <input
                    type="range"
                    min="130"
                    max="210"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                    <span>130 cm</span>
                    <span>170 cm</span>
                    <span>210 cm</span>
                  </div>
                </div>

                {/* Weight */}
                <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-zinc-300 uppercase">Weight</span>
                    <span className="text-sm font-black font-heading text-cyan-400">{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                    <span>40 kg</span>
                    <span>95 kg</span>
                    <span>150 kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Recommendation Card */}
            <div className="lg:col-span-5 bg-zinc-900/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Calculated Metric
                </span>
                
                <div className="mt-3 flex items-baseline gap-3">
                  <div className="text-4xl sm:text-5xl font-black font-heading text-white">
                    {roundedBmi}
                  </div>
                  <div className={`text-xs font-bold ${categoryColor} uppercase tracking-wider`}>
                    {bmiCategory}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-800 space-y-3">
                  <span className="text-xs text-zinc-400 uppercase font-semibold block">
                    Recommended Fit Base Track:
                  </span>
                  <div className="text-lg font-bold text-cyan-300 font-heading flex items-center gap-2">
                    <Target className="w-5 h-5 text-cyan-400" />
                    {recommendedProgram}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Designed to help build muscular definition, optimize conditioning, and train sustainably with professional guidance.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800">
                <button
                  onClick={() => onSelectGoal(recommendedProgram)}
                  className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
                  id="calc-inquire-recommended-btn"
                >
                  <span>INQUIRE FOR {recommendedProgram.toUpperCase()}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
