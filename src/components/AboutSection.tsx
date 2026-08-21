import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Wind, 
  Clock, 
  Dumbbell, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  MapPin
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface AboutSectionProps {
  onDiscoverClick: () => void;
  onOpenJoin: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverClick, onOpenJoin }) => {
  const highlights = [
    {
      icon: Users,
      title: 'Professional & Supportive Trainers',
      desc: 'Expert instructors dedicated to your form, motivation, and goal progression.',
    },
    {
      icon: Dumbbell,
      title: 'Modern Workout Equipment',
      desc: 'Heavy-duty power racks, Olympic free weights, precision cable and selectorized machines.',
    },
    {
      icon: Wind,
      title: 'Air-Conditioned & Cool Environment',
      desc: 'High-power climate control keeping workouts comfortable throughout Faisalabad summers.',
    },
    {
      icon: Clock,
      title: 'Long Daily Opening Hours',
      desc: 'Train on your own schedule with open doors from 6:00 AM until midnight every single day.',
    },
    {
      icon: ShieldCheck,
      title: 'Supportive & Comfortable Atmosphere',
      desc: 'A positive culture welcoming to beginners and dedicated fitness enthusiasts alike.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#08090d] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Photography & Visual Experience Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
              <img
                src={GYM_INFO.images.about}
                alt="Inside Fit Base Fitness Center Faisalabad Training Floor"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-black/30" />
              
              {/* Floating Badge in photo */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-zinc-900/90 backdrop-blur-md border border-cyan-500/30 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-xl">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                  Canal Road, Faisalabad
                </span>
              </div>

              {/* Bottom Floating Stats Pill inside Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#0e1017]/95 border border-zinc-700/80 backdrop-blur-md rounded-xl p-4 shadow-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400 uppercase font-semibold">Climate-Controlled</div>
                  <div className="text-sm sm:text-base font-extrabold text-white font-heading flex items-center gap-1.5">
                    <Wind className="w-4 h-4 text-cyan-400" />
                    Full AC Training Floor
                  </div>
                </div>
                <div className="text-right border-l border-zinc-800 pl-4">
                  <div className="text-xs text-zinc-400 uppercase font-semibold">Daily Timing</div>
                  <div className="text-sm sm:text-base font-extrabold text-cyan-400 font-heading">
                    6 AM – 12 AM
                  </div>
                </div>
              </div>
            </div>

            {/* Small accent location pin card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-4 bg-zinc-900/95 border border-zinc-800 rounded-xl px-4 py-2.5 shadow-xl items-center gap-2.5 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold text-zinc-200">Green Avenue, Canal Rd</span>
            </div>
          </div>

          {/* Right Side: Copywriting & Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              ABOUT FIT BASE
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight leading-tight uppercase">
              A BETTER PLACE <br />
              <span className="bg-gradient-to-r from-white via-zinc-100 to-cyan-400 bg-clip-text text-transparent">
                TO TRAIN.
              </span>
            </h2>

            {/* Main Content Paragraph */}
            <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Fit Base Fitness Center is built for people who take their fitness seriously. From beginners taking their first step into fitness to experienced athletes pushing their limits, our environment is designed to keep you motivated, comfortable and focused.
            </p>

            {/* Key Value Checklist */}
            <div className="mt-8 space-y-4 w-full">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-zinc-900/60 border border-transparent hover:border-zinc-800 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onDiscoverClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all flex items-center justify-center gap-2 group"
                id="about-discover-btn"
              >
                <span>DISCOVER FIT BASE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenJoin}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all text-center"
              >
                Free Day Pass Inquiry
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
