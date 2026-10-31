import React from 'react';
import { 
  Sparkles, 
  Wind, 
  Clock, 
  CheckCircle2, 
  Phone
} from 'lucide-react';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { GYM_INFO } from '../data/gymData';

interface AboutPageProps {
  onOpenJoin: (goal?: string) => void;
  onOpenDirections: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenJoin, onOpenDirections }) => {
  return (
    <div className="space-y-0">
      {/* Main Core About Section */}
      <AboutSection
        onDiscoverClick={() => {
          const el = document.getElementById('why-choose-grid');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenJoin={() => onOpenJoin('Membership')}
      />

      {/* Why Choose Fit Base (6 In-depth Pillars) */}
      <div id="why-choose-grid">
        <WhyChooseSection onOpenJoin={() => onOpenJoin('Membership')} />
      </div>

      {/* Atmosphere, Culture & Standards Section */}
      <section className="py-16 sm:py-24 bg-[#0a0c13] border-t border-zinc-850 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase inline-block mb-3">
              THE FIT BASE STANDARD
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
              A SUPPORTIVE, ZERO-EGO ATMOSPHERE
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">
              We believe a gym should be motivating, exceptionally clean, and structured to make you look forward to every workout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white uppercase">
                Continuous Climate Control
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Heavy multi-ton air conditioning keeps the training floor cool and fresh, even in the middle of peak Faisalabad summer heat.
              </p>
              <ul className="text-xs text-zinc-300 space-y-2 pt-2 border-t border-zinc-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>High air-turnover ventilation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Zero stuffiness or humidity</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white uppercase">
                Cleanliness & Hot Showers
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Pristine locker facilities, gender-neutral clean restrooms, sanitization stations at every bay, and hot showers for post-workout freshness.
              </p>
              <ul className="text-xs text-zinc-300 space-y-2 pt-2 border-t border-zinc-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Continuous housekeeping rounds</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Hot water & hygienic changing bays</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white uppercase">
                Unbeatable Accessibility
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                6:00 AM to 12:00 Midnight, 7 days a week. Train early before the workday or decompress with a late-night session without crowds.
              </p>
              <ul className="text-xs text-zinc-300 space-y-2 pt-2 border-t border-zinc-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Dedicated customer parking lot</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Direct signal access on West Canal Rd</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner: Primary (Join Now) & Secondary (Call Now) */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-zinc-950 via-[#0d131f] to-zinc-950 border-t border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
            READY TO JOIN FIT BASE?
          </h2>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg">
            Train with quality equipment in an air-conditioned, motivating gym on West Canal Road, Faisalabad.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenJoin('Membership')}
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
