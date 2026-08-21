import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  ExternalLink, 
  Compass, 
  Car, 
  CheckCircle2, 
  Copy, 
  Check
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface LocationSectionProps {
  onOpenDirectionsModal?: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${GYM_INFO.name}, ${GYM_INFO.address.line1}, ${GYM_INFO.address.city}, ${GYM_INFO.address.postalCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#08090d] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            CONVENIENT CANAL ROAD ACCESS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight uppercase">
            FIND YOUR NEW <span className="text-cyan-400">TRAINING HOME.</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Located in Green Avenue along Canal Road, Faisalabad. Easily accessible with ample parking and daily extended hours.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card (Left Column) */}
          <div className="lg:col-span-5 bg-[#0e1017] border border-zinc-800 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div>
              {/* Business Name Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <div>
                  <h3 className="text-2xl font-black font-heading text-white">
                    {GYM_INFO.name}
                  </h3>
                  <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                    Faisalabad Flagship Facility
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              {/* Detail Items */}
              <div className="mt-6 space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-zinc-400 uppercase font-semibold">Address</span>
                    <p className="text-sm font-medium text-zinc-200 mt-0.5">
                      {GYM_INFO.address.line1}<br />
                      {GYM_INFO.address.city}, {GYM_INFO.address.province}, {GYM_INFO.address.country} – {GYM_INFO.address.postalCode}
                    </p>
                    <p className="text-xs text-cyan-400/80 mt-1 font-mono">
                      Plus Code: {GYM_INFO.address.plusCode}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase font-semibold">Opening Hours</span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Daily: 6:00 AM – 12:00 AM
                    </p>
                    <p className="text-xs text-emerald-400 mt-0.5">
                      Open 7 Days a Week (18 Hours Daily)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase font-semibold">Direct Phone</span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      <a href={`tel:${GYM_INFO.phoneRaw}`} className="hover:text-cyan-400 transition-colors">
                        {GYM_INFO.phoneDisplay}
                      </a>
                    </p>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Call for inquiries, tours, or trainer appointments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Copy & Action Buttons */}
            <div className="mt-8 pt-6 border-t border-zinc-800 space-y-3">
              <div className="flex gap-2">
                <button
                  onClick={handleCopyAddress}
                  className="w-full py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-zinc-300 border border-zinc-800 flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={GYM_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs sm:text-sm text-center shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-1.5"
                  id="location-get-directions-btn"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="py-3.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm text-center border border-zinc-700 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-1.5"
                  id="location-call-now-btn"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map Visualizer (Right Column) */}
          <div className="lg:col-span-7 bg-[#0e1017] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col relative min-h-[400px]">
            
            {/* Top Map Bar */}
            <div className="bg-zinc-900/90 border-b border-zinc-800 px-5 py-3 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-zinc-200 uppercase tracking-wider font-heading">
                  Fit Base Navigation Radar • Faisalabad
                </span>
              </div>
              <a
                href={GYM_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Custom Interactive Dark Map Canvas / Simulated GIS Interface with Landmarks */}
            <div className="relative flex-1 bg-[#090b10] overflow-hidden flex items-center justify-center p-6 select-none">
              
              {/* Background Road Grid Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#1f293d_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

              {/* Major Simulated Faisalabad Arteries */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Canal Road (Diagonal Arterial) */}
                <div className="absolute top-0 right-10 w-24 h-[120%] bg-cyan-950/40 -rotate-45 border-l-2 border-r-2 border-cyan-500/20 flex items-center justify-center">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400/40 -rotate-90">
                    CANAL ROAD (FAISALABAD)
                  </span>
                </div>

                {/* Secondary Road */}
                <div className="absolute top-1/2 left-0 right-0 h-14 bg-zinc-900/40 border-t border-b border-zinc-800 flex items-center pl-8">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-600">
                    GREEN AVENUE ACCESS
                  </span>
                </div>
              </div>

              {/* Exterior Photo Inset */}
              <div className="absolute top-4 right-4 z-10 w-36 sm:w-44 rounded-xl overflow-hidden border border-zinc-700 shadow-2xl hidden sm:block">
                <img
                  src={GYM_INFO.images.exterior}
                  alt="Fit Base Fitness Center Building"
                  className="w-full h-24 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-black/90 p-1.5 text-[10px] text-center text-zinc-300 font-bold">
                  Exterior Entrance
                </div>
              </div>

              {/* Center Map Pin with Pulse */}
              <div className="relative z-20 flex flex-col items-center animate-bounce-subtle">
                {/* Floating Tooltip */}
                <div className="bg-[#08090d] border border-cyan-400/80 px-4 py-2.5 rounded-xl shadow-2xl shadow-cyan-500/30 text-center mb-2 backdrop-blur-md">
                  <div className="text-xs font-black text-white font-heading flex items-center gap-1.5 justify-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    FIT BASE FITNESS CENTER
                  </div>
                  <div className="text-[11px] text-cyan-300 mt-0.5">
                    204 Chak, W Canal Rd, Green Avenue
                  </div>
                  <div className="text-[10px] text-emerald-400 font-semibold mt-1">
                    ★ 4.8 Rating • Open 6:00 AM – 12:00 AM
                  </div>
                </div>

                {/* Pin Icon */}
                <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-2xl shadow-cyan-400/50 border-2 border-white">
                  <MapPin className="w-6 h-6 fill-black text-black" />
                </div>
                
                {/* Glow Ripple */}
                <div className="w-8 h-2 bg-cyan-400/40 rounded-full blur-sm mt-1 animate-pulse" />
              </div>

              {/* Surrounding Landmark Markers */}
              <div className="absolute bottom-6 left-6 z-10 bg-zinc-900/90 border border-zinc-800 p-3 rounded-xl backdrop-blur-md text-xs space-y-1.5 max-w-xs">
                <div className="font-bold text-zinc-200 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-cyan-400" />
                  Navigation Landmarks:
                </div>
                <div className="text-[11px] text-zinc-400 space-y-1">
                  <p>• East / West Canal Road corridor</p>
                  <p>• Green Avenue, 204 Chak intersection</p>
                  <p>• Dedicated on-site member parking</p>
                </div>
              </div>

            </div>

            {/* Bottom Actions Bar */}
            <div className="bg-zinc-900/95 border-t border-zinc-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-zinc-400">
                <span className="text-zinc-200 font-semibold">Location Code:</span> F523+6Q Faisalabad, Pakistan
              </div>
              <a
                href={GYM_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Navigate With GPS</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
