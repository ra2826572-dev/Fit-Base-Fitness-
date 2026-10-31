import React from 'react';
import { 
  Clock, 
  Car, 
  CheckCircle2, 
  Navigation, 
  MapPin, 
  Phone
} from 'lucide-react';
import { LocationSection } from '../components/LocationSection';
import { GYM_INFO } from '../data/gymData';

interface LocationPageProps {
  onOpenDirections: () => void;
  onOpenJoin: (goal?: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ onOpenDirections, onOpenJoin }) => {
  const weeklyHours = [
    { day: 'Monday', hours: '6:00 AM – 12:00 AM', status: 'Open' },
    { day: 'Tuesday', hours: '6:00 AM – 12:00 AM', status: 'Open' },
    { day: 'Wednesday', hours: '6:00 AM – 12:00 AM', status: 'Open' },
    { day: 'Thursday', hours: '6:00 AM – 12:00 AM', status: 'Open' },
    { day: 'Friday', hours: '6:00 AM – 12:00 AM', status: 'Open' },
    { day: 'Saturday', hours: '6:00 AM – 12:00 AM', status: 'Open' },
    { day: 'Sunday', hours: '6:00 AM – 12:00 AM', status: 'Open' },
  ];

  return (
    <div className="space-y-0">
      {/* Main Location Section with Map */}
      <LocationSection onOpenDirectionsModal={onOpenDirections} />

      {/* Detailed Schedule & Transit Logistics */}
      <section className="py-16 sm:py-24 bg-[#0a0c13] border-t border-zinc-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Hours Table */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white uppercase">
                    OPENING HOURS BREAKDOWN
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Open 365 days a year with full staff and coaching coverage.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 divide-y divide-zinc-800/80 overflow-hidden">
                {weeklyHours.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 flex items-center justify-between text-xs sm:text-sm hover:bg-zinc-800/40 transition-colors"
                  >
                    <span className="font-semibold text-white">{item.day}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-cyan-400 font-mono font-medium">{item.hours}</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-[10px] font-bold uppercase">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking & Landmarks Guide */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white uppercase">
                    PARKING & ACCESSIBILITY
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Hassle-free parking directly in front of the premises.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 space-y-4">
                <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Free Private Parking Lot:</strong> Dedicated paved parking bays directly in front of the building entrance for member cars and SUVs.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Street Parking:</strong> Secure wide street parking zones available along Green Avenue.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Landmark Directions:</strong> Located on West Canal Road, easily accessible from major Faisalabad arteries.
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex gap-4">
                  <button
                    onClick={onOpenDirections}
                    className="flex-1 py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </button>
                  <a
                    href={`tel:${GYM_INFO.phoneRaw}`}
                    className="py-3 px-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
