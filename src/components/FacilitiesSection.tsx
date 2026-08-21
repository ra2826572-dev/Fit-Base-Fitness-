import React, { useState } from 'react';
import { 
  Dumbbell, 
  Wind, 
  Activity, 
  Zap, 
  Layers, 
  Check, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { FACILITIES_DATA } from '../data/gymData';
import { Facility } from '../types';

interface FacilitiesSectionProps {
  onOpenJoin: (goal?: string) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenJoin }) => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Facilities' },
    { id: 'strength', label: 'Strength & Weights' },
    { id: 'cardio', label: 'Cardio & Stamina' },
    { id: 'comfort', label: 'Environment & AC' },
  ];

  const filteredFacilities = FACILITIES_DATA.filter((f) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'strength') return f.id.includes('strength') || f.id.includes('machine') || f.id.includes('functional');
    if (activeTab === 'cardio') return f.id.includes('cardio');
    if (activeTab === 'comfort') return f.id.includes('climate') || f.id.includes('entrance');
    return true;
  });

  return (
    <section id="facilities" className="py-24 sm:py-32 bg-[#08090d] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              WORLD-CLASS AMENITIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight uppercase">
              EVERYTHING YOU NEED <br />
              <span className="bg-gradient-to-r from-white via-zinc-100 to-cyan-400 bg-clip-text text-transparent">
                TO TRAIN BETTER.
              </span>
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base">
              Explore our full setup of heavy-duty iron, modern isolation machines, high-stamina cardio gear, and full-facility air conditioning.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-500/25'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-[#0e1017] rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col group shadow-xl hover:shadow-cyan-950/20"
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-zinc-900">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-black/20" />
                
                {/* Category Tag */}
                <div className="absolute top-3 left-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/80 px-2.5 py-1 rounded-lg text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                  {facility.tag}
                </div>

                <button
                  onClick={() => setSelectedFacility(facility)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-zinc-900/80 backdrop-blur-md text-zinc-300 hover:text-white flex items-center justify-center border border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Expand preview"
                  aria-label={`View details of ${facility.title}`}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    {facility.category}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="mt-4 pt-4 border-t border-zinc-800/80 space-y-2">
                    {facility.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedFacility(facility)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:underline"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenJoin(facility.title)}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-zinc-200 hover:text-black bg-zinc-900 hover:bg-cyan-400 border border-zinc-800 transition-all"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0e111a] via-zinc-900 to-[#0e111a] border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center shrink-0">
              <Dumbbell className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                Want to see the equipment in person?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Walk in anytime between 6:00 AM and 12:00 AM for a personal tour.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenJoin('Tour Facility')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-500/25 transition-all whitespace-nowrap"
          >
            SCHEDULE GYM TOUR
          </button>
        </div>

      </div>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0e111a] border border-zinc-700 max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-64">
              <img
                src={selectedFacility.imageUrl}
                alt={selectedFacility.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a] via-transparent to-black/40" />
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-black/90 border border-zinc-700"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider bg-black/60 px-2.5 py-1 rounded-md">
                  {selectedFacility.tag}
                </span>
                <h3 className="text-2xl font-black text-white font-heading mt-1">
                  {selectedFacility.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedFacility.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  Key Specs & Equipment Details:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFacility.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-200 bg-zinc-900/90 p-2 rounded-lg border border-zinc-800">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex gap-3">
                <button
                  onClick={() => {
                    const title = selectedFacility.title;
                    setSelectedFacility(null);
                    onOpenJoin(title);
                  }}
                  className="flex-1 py-3 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 shadow-lg shadow-cyan-500/25 transition-all"
                >
                  Inquire About This Facility
                </button>
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-semibold text-zinc-300 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
