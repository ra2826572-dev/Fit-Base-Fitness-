import React from 'react';
import { Dumbbell, Phone, MapPin, Clock, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-zinc-800 text-zinc-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#08090d] rounded-[10px] flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black tracking-wider text-xl text-white font-heading leading-tight">
                  FIT BASE
                </span>
                <span className="text-[10px] tracking-[0.22em] text-cyan-400 font-bold uppercase">
                  FITNESS CENTER
                </span>
              </div>
            </div>

            <p className="text-zinc-300 text-base font-semibold italic font-heading">
              "Train stronger. Live better."
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Faisalabad's premier fitness destination on Canal Road. Equipped for strength, weight loss, conditioning, and athletic progression in an air-conditioned, supportive environment.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_INFO.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-400 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-400 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Fit Base</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-cyan-400 transition-colors">Gym Facilities</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-cyan-400 transition-colors">Training Programs</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-cyan-400 transition-colors">Member Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact & Join</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest font-heading">
              Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  204 Chak, W Canal Rd,<br />
                  Green Avenue, Faisalabad
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${GYM_INFO.phoneRaw}`} className="text-white hover:text-cyan-400 font-semibold transition-colors">
                  {GYM_INFO.phoneDisplay}
                </a>
              </div>
              <div className="text-[11px] text-zinc-400">
                Area: East/West Canal Road corridor
              </div>
            </div>
          </div>

          {/* Col 5: Opening Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest font-heading">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Every Day
                </div>
                <div className="text-cyan-400 font-extrabold text-sm">
                  6:00 AM – 12:00 AM
                </div>
                <div className="text-[10px] text-emerald-400">
                  Open 7 Days a Week
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 Fit Base Fitness Center. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Faisalabad, Punjab, Pakistan</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-zinc-300 hover:text-cyan-400 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
