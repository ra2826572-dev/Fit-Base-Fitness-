import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface TrainersSectionProps {
  onOpenTrainer: () => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onOpenTrainer }) => {
  const trainers = [
    {
      name: 'Head Coach Salman',
      specialty: 'Strength & Hypertrophy Specialist',
      experience: '8+ Years Experience',
      image: GYM_INFO.images.strength,
      bio: 'Expert in progressive overload, compound power lifting, and injury-free muscle gains.',
    },
    {
      name: 'Coach Hamza',
      specialty: 'Fat Loss & HIIT Conditioning',
      experience: '6+ Years Experience',
      image: GYM_INFO.images.about,
      bio: 'Specializes in metabolic circuits, caloric deficit guidance, and sustainable fat loss.',
    },
    {
      name: 'Coach Farhan',
      specialty: 'Functional Mobility & Beginners',
      experience: '5+ Years Experience',
      image: GYM_INFO.images.cardio,
      bio: 'Dedicated to guiding first-time gym goers, postural correction, and joint mobility.',
    },
  ];

  return (
    <section id="trainers" className="py-16 sm:py-24 bg-[#0a0c13] relative border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase inline-block mb-3">
            EXPERT COACHES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
            TRAIN WITH <span className="text-cyan-400">PROS.</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Certified fitness experts dedicated to your form, motivation, and physical progress every single day.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <div
              key={idx}
              className="bg-[#0e1017] rounded-2xl overflow-hidden border border-zinc-800 flex flex-col justify-between shadow-xl group"
            >
              <div className="relative h-64 overflow-hidden bg-zinc-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-black/30" />
                <div className="absolute top-3 right-3 bg-zinc-900/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-bold text-cyan-300 uppercase">
                  {trainer.experience}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                    {trainer.specialty}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white uppercase">
                    {trainer.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>

                <button
                  onClick={onOpenTrainer}
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-cyan-400 text-zinc-200 hover:text-black font-bold text-xs uppercase transition-all border border-zinc-800 cursor-pointer text-center"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
