import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { MOTION_TOKENS } from '../utils/motionTokens';

interface LocationSectionProps {
  onOpenDirectionsModal?: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = () => {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${GYM_INFO.name}, ${GYM_INFO.address.line1}, ${GYM_INFO.address.city}, ${GYM_INFO.address.postalCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-12 sm:py-20 bg-[#08090d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: MOTION_TOKENS.distance.md }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: MOTION_TOKENS.duration.ui, ease: MOTION_TOKENS.ease.entrance }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            VISIT OUR FACILITY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight uppercase">
            LOCATION & <span className="text-cyan-400">HOURS.</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Conveniently situated on West Canal Road, Green Avenue with ample parking and open daily from 6 AM to 12 AM.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CARD */}
          <div className="lg:col-span-5 bg-[#0e1017] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col">
            {/* Exterior Photo */}
            <div className="relative h-48 sm:h-52 overflow-hidden bg-zinc-900 border-b border-zinc-800">
              <img
                src={GYM_INFO.images.exterior}
                alt="Fit Base Fitness Center Exterior"
                className="w-full h-full object-cover object-center brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-black/20" />
              <div className="absolute top-3 left-3 bg-zinc-900/95 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded-lg text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                Flagship Facility
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-2xl font-black font-heading text-white uppercase">
                  {GYM_INFO.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mt-0.5">
                  Faisalabad Flagship Facility
                </p>

                {/* 3 Rows: Address, Hours, Phone */}
                <div className="mt-6 space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-zinc-200">
                        {GYM_INFO.address.line1}, {GYM_INFO.address.city}
                      </p>
                      <p className="text-xs text-zinc-400 mt-0.5 font-mono">
                        Plus Code: {GYM_INFO.address.plusCode}
                      </p>
                      <button
                        onClick={handleCopyAddress}
                        className="mt-1 text-xs text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
                        aria-label="Copy full address"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Address copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">
                        Daily: 6:00 AM – 12:00 AM
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <a href={`tel:${GYM_INFO.phoneRaw}`} className="font-bold text-white hover:text-cyan-400 transition-colors">
                        {GYM_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-zinc-800 grid grid-cols-2 gap-3">
                <a
                  href={GYM_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to Fit Base Fitness Center on Google Maps"
                  className="py-3 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  aria-label="Call Fit Base Fitness Center"
                  className="py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm text-center border border-zinc-700 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Asli Google Maps iframe with dark filter */}
          <div className="lg:col-span-7 bg-[#0e1017] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col min-h-[460px]">
            <div className="flex-1 relative w-full h-[410px]">
              <iframe
                title="Fit Base Fitness Center Location Map"
                src="https://maps.google.com/maps?q=Fit%20Base%20Fitness%20Center%20W%20Canal%20Rd%20Green%20Avenue%20Faisalabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                style={{ filter: 'invert(90%) hue-rotate(180deg) grayscale(30%) contrast(110%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Thin bottom bar */}
            <div className="bg-zinc-900/95 border-t border-zinc-800 px-5 py-3.5 flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-400">
                W Canal Rd, Green Avenue, Faisalabad
              </span>
              <a
                href={GYM_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                aria-label="Open Fit Base location in Google Maps"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
