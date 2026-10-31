import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { 
  CheckCircle2, 
  Phone
} from 'lucide-react';
import { PersonalTrainingCta } from '../components/PersonalTrainingCta';
import { GYM_INFO } from '../data/gymData';
import { MOTION_TOKENS } from '../utils/motionTokens';

interface TrainersPageProps {
  onOpenTrainer: () => void;
  onOpenJoin: (goal?: string) => void;
}

export const TrainersPage: React.FC<TrainersPageProps> = ({ onOpenTrainer, onOpenJoin }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCenterIndex, setActiveCenterIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const coaches = [
    {
      name: 'Head Coach Salman',
      role: 'Strength & Hypertrophy Specialist',
      experience: '8+ Years Coaching',
      bio: 'Specializes in progressive overload, biomechanics, power rack mastery, and injury-free muscle gains.',
      skills: ['Powerlifting & Hypertrophy', 'Advanced Program Design', 'Postural Correction'],
      image: GYM_INFO.images.strength,
    },
    {
      name: 'Coach Hamza',
      role: 'Fat Loss & High-Intensity Conditioning',
      experience: '6+ Years Coaching',
      bio: 'Helps members shed body fat through intelligent HIIT intervals, compound kettlebell circuits, and sustainable macro meal plans.',
      skills: ['Metabolic Conditioning', 'Caloric Deficit Guidance', 'Cardio Stamina Optimization'],
      image: GYM_INFO.images.about,
    },
    {
      name: 'Coach Farhan',
      role: 'Functional Mobility & Beginner Induction',
      experience: '5+ Years Coaching',
      bio: 'Passionate about guiding first-time gym goers, building foundational stability, joint mobility, and gym confidence.',
      skills: ['Beginner Movement Mechanics', 'Core & Stability Training', 'Lifestyle Transformation'],
      image: GYM_INFO.images.cardio,
    },
  ];

  const transformationSteps = [
    {
      step: '01',
      title: 'Biometric & Goal Assessment',
      desc: 'We analyze your current body metrics, training history, schedule, and dietary habits to identify your exact starting baseline.',
    },
    {
      step: '02',
      title: 'Bespoke Blueprint & Nutrition',
      desc: 'Your trainer builds a customized workout plan and macronutrient target suited to your favorite foods and daily schedule.',
    },
    {
      step: '03',
      title: '1-on-1 Floor Coaching',
      desc: 'Every session is supervised. Your trainer ensures spot-on exercise technique, optimal tempo, and the right weights for progressive overload.',
    },
    {
      step: '04',
      title: 'Weekly Tracking & Adaptation',
      desc: 'Body measurements, strength PRs, and visual progression are monitored every 7 days, adapting routines as your fitness evolves.',
    },
  ];

  // IntersectionObserver to detect when the card is in viewport center on mobile (touch devices)
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveCenterIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-35% 0px -35% 0px', // detects when in vertical center 30% of viewport
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-0">
      {/* Atmospheric CTA Hero */}
      <PersonalTrainingCta onOpenTrainer={onOpenTrainer} />

      <section className="py-20 sm:py-28 bg-[#08090d] border-t border-zinc-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: MOTION_TOKENS.distance.md }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: MOTION_TOKENS.duration.ui, ease: MOTION_TOKENS.ease.entrance }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase inline-block mb-3">
              FIT BASE COACHES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
              MEET YOUR TRANSFORMATION PARTNERS
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">
              Certified, motivating, and committed to your physical growth every single day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, idx) => {
              const isCenterOnMobile = activeCenterIndex === idx;

              return (
                <div
                  key={idx}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className="rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group overflow-hidden"
                >
                  <div>
                    {/* Photo Container: starts grayscale(100%), transitions to color on hover or center on mobile */}
                    <div className="relative h-64 overflow-hidden bg-zinc-950">
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className={`w-full h-full object-cover object-center transition-all duration-500 ease-out ${
                          isCenterOnMobile
                            ? 'grayscale-0 scale-102'
                            : 'grayscale group-hover:grayscale-0 group-hover:scale-104'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-black/30" />
                      
                      {/* Coach Experience Badge */}
                      <div className="absolute top-3 left-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/80 px-2.5 py-1 rounded-lg text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                        {coach.experience}
                      </div>
                    </div>

                    {/* Content: Name and role fade in after the photo */}
                    <div className="p-7">
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.2 }}
                      >
                        <h3 className="text-xl font-bold font-heading text-white uppercase group-hover:text-cyan-300 transition-colors">
                          {coach.name}
                        </h3>
                        <p className="text-xs text-zinc-400 font-medium mt-0.5">
                          {coach.role}
                        </p>
                      </motion.div>

                      <p className="text-xs sm:text-sm text-zinc-300 mt-4 leading-relaxed">
                        {coach.bio}
                      </p>

                      <div className="mt-6 pt-6 border-t border-zinc-800">
                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                          Core Disciplines:
                        </div>
                        <ul className="space-y-1.5 text-xs text-zinc-300">
                          {coach.skills.map((skill, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <div className="pt-4 border-t border-zinc-800">
                      <button
                        onClick={() => onOpenJoin(`Personal Coaching - ${coach.name}`)}
                        className="w-full py-2.5 rounded-xl bg-cyan-400/10 hover:bg-cyan-400 hover:text-black text-cyan-300 font-bold text-xs uppercase tracking-wider border border-cyan-500/30 transition-all cursor-pointer"
                      >
                        Join With {coach.name.split(' ')[1] || 'Coach'} &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Coaching Journey */}
      <section className="py-20 sm:py-28 bg-[#0a0c13] border-t border-zinc-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase inline-block mb-3">
              THE ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
              HOW 1-ON-1 COACHING WORKS
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">
              A structured four-phase system engineered to guarantee steady, injury-free physical progression.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 relative space-y-3"
              >
                <div className="text-4xl font-black font-heading text-cyan-400/30">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold font-heading text-white uppercase">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Primary: Join Now & Secondary: Call Now */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenJoin('Personal Training')}
              className="px-8 py-3.5 rounded-xl bg-cyan-400 text-black font-extrabold text-sm hover:bg-cyan-300 shadow-xl shadow-cyan-500/25 transition-all cursor-pointer"
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
      </section>
    </div>
  );
};
