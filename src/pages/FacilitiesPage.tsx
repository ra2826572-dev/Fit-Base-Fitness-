import React from 'react';
import { 
  Wifi, 
  Car, 
  CreditCard, 
  CheckCircle2, 
  Droplets,
  Wind,
  Phone
} from 'lucide-react';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { GYM_INFO } from '../data/gymData';

interface FacilitiesPageProps {
  onOpenJoin: (goal?: string) => void;
  onOpenDirections: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onOpenJoin, onOpenDirections }) => {
  const allAmenities = [
    { icon: Wifi, title: 'High-Speed Wi-Fi', desc: 'Seamless connection throughout the facility for music streaming and workout apps.' },
    { icon: Droplets, title: 'Hot Showers & Clean Restrooms', desc: 'Maintained and sanitized changing areas with continuous hot water supply.' },
    { icon: Wind, title: 'Full-Floor Air Conditioning', desc: 'High-capacity chillers ensuring oxygen-rich, cool atmosphere during intense workouts.' },
    { icon: Car, title: 'Free On-Site Parking', desc: 'Spacious, secure private parking lot right outside the gym doors plus easy street spots.' },
    { icon: CreditCard, title: 'Cards & NFC Tap Payments', desc: 'Accepting Debit cards, Credit cards, and mobile NFC contactless transactions.' },
    { icon: CheckCircle2, title: 'Lockers & Storage', desc: 'Convenient storage bays for your gym bags, phones, and personal valuables while training.' },
  ];

  return (
    <div className="space-y-0">
      {/* Main Facilities Component with One button per card */}
      <FacilitiesSection onOpenJoin={(title) => onOpenJoin(title || 'Gym Facilities')} />

      {/* Complete Amenities & Services Showcase */}
      <section className="py-16 sm:py-24 bg-[#0a0c13] border-t border-zinc-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase inline-block mb-3">
              MEMBER COMFORTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
              AMENITIES & CONVENIENCES
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">
              Everything in our facility is curated to make your training session as smooth and productive as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allAmenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/30 transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white uppercase font-heading">
                      {amenity.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                      {amenity.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Primary: Join Now & Secondary: Call Now */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-zinc-950 via-[#0a121e] to-zinc-950 border-t border-zinc-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-white uppercase">
            READY TO TRAIN AT FIT BASE?
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base mt-3">
            Open daily from 6:00 AM to 12:00 AM on West Canal Road, Faisalabad.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenJoin('Facility Membership')}
              className="px-8 py-3.5 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
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
