import React from 'react';
import { X, Navigation, MapPin, Phone, Car, Clock, ExternalLink } from 'lucide-react';
import { GYM_INFO } from '../../data/gymData';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectionsModal: React.FC<DirectionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0e111a] border border-zinc-700 max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
            <Navigation className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-2xl font-black font-heading text-white">
              GET DIRECTIONS
            </h3>
            <span className="text-xs text-cyan-400 font-semibold uppercase">
              Fit Base Fitness Center • Faisalabad
            </span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
          <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800 space-y-2">
            <div className="font-bold text-white flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Full Address:
            </div>
            <p className="text-zinc-300 pl-5 leading-relaxed">
              {GYM_INFO.address.line1}<br />
              {GYM_INFO.address.city}, {GYM_INFO.address.province}, Pakistan – {GYM_INFO.address.postalCode}
            </p>
            <div className="pl-5 text-cyan-400 font-mono text-xs">
              Google Plus Code: {GYM_INFO.address.plusCode}
            </div>
          </div>

          <div className="bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800 space-y-2">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Car className="w-4 h-4 text-cyan-400" />
              How to Reach Us:
            </div>
            <ul className="space-y-1.5 text-zinc-400 pl-5 list-disc text-xs">
              <li>Drive along East/West Canal Road towards Green Avenue.</li>
              <li>Locate 204 Chak intersection; our building is clearly marked with the illuminated Fit Base sign.</li>
              <li>Free parking available right in front of the facility.</li>
            </ul>
          </div>

          <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800 flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Gym Hours Today:
            </span>
            <span className="text-emerald-400 font-bold">6:00 AM – 12:00 AM</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-800 space-y-2.5">
          <a
            href={GYM_INFO.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
          >
            <Navigation className="w-4 h-4" />
            <span>OPEN IN GOOGLE MAPS NAVIGATION</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs flex items-center justify-center gap-2 border border-zinc-800 transition-colors"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Call Reception: {GYM_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
