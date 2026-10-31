import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { 
  ArrowRight, 
  Dumbbell, 
  Layers, 
  Sparkles, 
  Calculator, 
  Star, 
  MapPin, 
  Phone, 
  Flame, 
  Clock 
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { SectionDivider } from '../components/SectionDivider';
import { GYM_INFO, FACILITIES_DATA, PROGRAMS_DATA, REVIEWS_DATA } from '../data/gymData';
import { MOTION_TOKENS } from '../utils/motionTokens';

interface HomePageProps {
  onOpenJoin: (goal?: string) => void;
  onOpenTrainer: () => void;
  onOpenDirections: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenJoin,
}) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-0">
      {/* 1. Hero Section - Canonical single stats row */}
      <Hero
        onOpenJoin={() => onOpenJoin()}
        onExploreClick={() => navigate('/about')}
      />

      <SectionDivider />

      {/* 2. About Section Teaser */}
      <section className="py-20 sm:py-28 bg-[#08090d] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: MOTION_TOKENS.distance.md }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: MOTION_TOKENS.duration.ui, ease: MOTION_TOKENS.ease.entrance }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                ABOUT FIT BASE FAISALABAD
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tight leading-tight">
                BUILT FOR THOSE WHO <br />
                <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  REFUSE TO SETTLE.
                </span>
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                Located on West Canal Road, Green Avenue, Fit Base is Faisalabad’s premier modern fitness club. Whether you are lifting your first dumbbell or prepping for peak strength, our air-conditioned facility, Olympic gear, and certified trainers back your every rep.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-cyan-400 font-extrabold text-lg">7 Days a Week</div>
                  <div className="text-xs text-zinc-400 mt-1">6:00 AM – 12:00 AM daily open doors</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-cyan-400 font-extrabold text-lg">Full Climate Control</div>
                  <div className="text-xs text-zinc-400 mt-1">Chilled A/C workout zones in all seasons</div>
                </div>
              </div>

              {/* Primary: Join Now & Secondary: Call Now */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenJoin('Membership')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition-all group cursor-pointer"
                  id="home-about-join-btn"
                >
                  <span>JOIN NOW</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold text-sm hover:border-zinc-700 transition-colors"
                  id="home-about-call-btn"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: MOTION_TOKENS.ease.entrance }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
                <img
                  src={GYM_INFO.images.about}
                  alt="Fit Base Training Interior"
                  className="w-full h-[400px] object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-cyan-500 text-black text-xs font-bold uppercase tracking-wider">
                    Canal Road Campus
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 font-heading">
                    Engineered for Results & Community
                  </h3>
                  <p className="text-zinc-300 text-xs mt-1">
                    Free weights • Isolation machines • Functional turf • Personal trainers
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. Facilities Snapshot with ONE button per card */}
      <section className="py-20 sm:py-28 bg-[#0a0c12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                PREMIUM SETUP
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
                OUR GYM FACILITIES
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
                Heavy duty power cages, cardio stations, comfortable air conditioning, and convenient amenities.
              </p>
            </div>
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-bold group self-start md:self-end"
            >
              <span>View All Facilities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACILITIES_DATA.slice(0, 3).map((facility, idx) => (
              <motion.div
                key={facility.id}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: MOTION_TOKENS.distance.sm }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: MOTION_TOKENS.duration.ui,
                  delay: shouldReduceMotion ? 0 : idx * 0.1,
                  ease: MOTION_TOKENS.ease.entrance,
                }}
                className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#0d0f16] flex flex-col hover:border-cyan-500/40 transition-colors duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={facility.imageUrl}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f16] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-cyan-300 border border-zinc-700">
                    {facility.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white uppercase group-hover:text-cyan-400 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                  {/* Exactly ONE button on facility card */}
                  <div className="mt-6 pt-4 border-t border-zinc-850">
                    <Link
                      to="/facilities"
                      className="w-full py-2.5 px-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-400 text-cyan-400 hover:text-black border border-cyan-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. Programs Preview */}
      <section className="py-20 sm:py-28 bg-[#08090d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3">
                <Flame className="w-3.5 h-3.5 text-cyan-400" />
                TRAINING PROGRAMS
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
                PROGRAMS TAILORED FOR YOU
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
                Structured blueprints designed to guide you from where you are to where you want to be.
              </p>
            </div>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-bold group self-start md:self-end"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS_DATA.map((prog, idx) => (
              <motion.div
                key={prog.id}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: MOTION_TOKENS.distance.sm }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: MOTION_TOKENS.duration.ui,
                  delay: shouldReduceMotion ? 0 : idx * 0.08,
                  ease: MOTION_TOKENS.ease.entrance,
                }}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-108 transition-transform">
                    <Dumbbell className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white uppercase group-hover:text-cyan-400 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
                  <span className="text-cyan-400 font-semibold">{prog.intensity}</span>
                  <button
                    onClick={() => onOpenJoin(prog.title)}
                    className="text-zinc-300 font-bold hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    Join Now &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 5. Personal Training Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-zinc-950 via-[#0a121e] to-zinc-950 border-t border-b border-zinc-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase">
              1-ON-1 COACHING
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-white uppercase">
              WANT ACCELERATED RESULTS? WORK WITH A TRAINER.
            </h2>
            <p className="text-zinc-300 text-sm max-w-xl">
              Get customized nutritional blueprints, biometric assessments, and individual technique correction every session.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenJoin('Personal Training')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-black font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Join Now
            </button>
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold text-sm hover:border-cyan-400 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 6. Calculator & Reviews Quick Row */}
      <section className="py-20 sm:py-28 bg-[#08090d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0c0f17] to-[#08090d] border border-zinc-800 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black font-heading text-white uppercase">
                  FITNESS GOAL & SPLIT ESTIMATOR
                </h3>
                <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
                  Calculate your BMI, estimate daily caloric expenditure, and receive a tailor-made training split in under 60 seconds.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-all"
                >
                  <span>Launch Goal Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Member Reviews Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0c0f17] to-[#08090d] border border-zinc-800 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-cyan-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-cyan-400" />
                    ))}
                  </div>
                  <span className="text-white font-black text-lg">4.8 / 5.0</span>
                </div>
                <h3 className="text-2xl font-black font-heading text-white uppercase">
                  WHAT OUR MEMBERS SAY
                </h3>
                <p className="text-zinc-300 text-sm mt-3 italic leading-relaxed">
                  "{REVIEWS_DATA[0].text}"
                </p>
                <div className="mt-3 text-xs text-zinc-400 font-semibold">
                  — {REVIEWS_DATA[0].author} ({REVIEWS_DATA[0].date})
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/reviews"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-bold text-sm hover:border-cyan-400 transition-all"
                >
                  <span>Read Member Reviews</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 7. Location & Contact Banner */}
      <section className="py-20 sm:py-28 bg-[#0b0e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-800 bg-[#08090d] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase inline-block">
                  FIND US ON CANAL ROAD
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase">
                  READY TO ELEVATE YOUR FITNESS?
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Visit us at 204 Chak, West Canal Road, Green Avenue, Faisalabad. Ample free on-site parking, modern air-conditioned gym floor, and welcoming staff.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onOpenJoin('Membership')}
                    className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
                  >
                    Join Now
                  </button>
                  <a
                    href={`tel:${GYM_INFO.phoneRaw}`}
                    className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-bold text-sm hover:border-zinc-700 transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-white font-bold text-sm">Open 7 Days a Week</div>
                    <div className="text-cyan-400 font-extrabold text-xs">6:00 AM – 12:00 AM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-white font-bold text-sm">Gym Inquiries</div>
                    <a href={`tel:${GYM_INFO.phoneRaw}`} className="text-zinc-300 hover:text-cyan-400 font-semibold text-xs">
                      {GYM_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-white font-bold text-sm">Canal Road, Faisalabad</div>
                    <div className="text-zinc-400 text-xs">204 Chak, Green Avenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
