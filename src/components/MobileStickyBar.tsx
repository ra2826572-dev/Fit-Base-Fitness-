import React from 'react';
import { Phone, Navigation, Flame } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface MobileStickyBarProps {
  onOpenJoin: () => void;
  onOpenDirections: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenJoin, onOpenDirections }) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#08090d]/95 border-t border-zinc-800/90 backdrop-blur-xl p-2.5 pb-safe shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${GYM_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 active:bg-zinc-800 transition-colors min-h-[44px]"
          id="mobile-sticky-call"
        >
          <Phone className="w-4 h-4 text-cyan-400" />
          <span className="text-[11px] font-bold mt-0.5">CALL</span>
        </a>

        {/* Directions Button */}
        <button
          onClick={onOpenDirections}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 active:bg-zinc-800 transition-colors min-h-[44px]"
          id="mobile-sticky-directions"
        >
          <Navigation className="w-4 h-4 text-cyan-400" />
          <span className="text-[11px] font-bold mt-0.5">DIRECTIONS</span>
        </button>

        {/* Join Now CTA */}
        <button
          onClick={onOpenJoin}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-black font-black shadow-lg shadow-cyan-500/25 active:scale-95 transition-all min-h-[44px]"
          id="mobile-sticky-join"
        >
          <Flame className="w-4 h-4 text-black" />
          <span className="text-[11px] font-extrabold mt-0.5">JOIN NOW</span>
        </button>
      </div>
    </div>
  );
};
