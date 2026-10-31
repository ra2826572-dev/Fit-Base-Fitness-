import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { 
  Phone, 
  Menu, 
  X, 
  Dumbbell, 
  MapPin, 
  ChevronRight, 
  Clock, 
  Flame,
  Layers,
  Users,
  Calculator,
  Star,
  Info,
  Mail
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { MOTION_TOKENS } from '../utils/motionTokens';

interface NavbarProps {
  onOpenJoin: (goal?: string) => void;
  onOpenTrainer: () => void;
  onOpenDirections: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenJoin,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Throttled scroll listener using requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 24);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Escape key closes mobile menu & focus trap
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', to: '/', icon: Dumbbell },
    { name: 'Programs', to: '/programs', icon: Flame },
    { name: 'Trainers', to: '/trainers', icon: Users },
    { name: 'Pricing', to: '/pricing', icon: Star },
    { name: 'Reviews', to: '/reviews', icon: Star },
    { name: 'Contact', to: '/contact', icon: Mail },
  ];

  return (
    <>
      {/* Top micro-bar for quick hours & location info */}
      <div className="bg-[#050608] border-b border-zinc-800/60 text-zinc-400 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link 
              to="/location" 
              className="flex items-center gap-1.5 text-zinc-300 hover:text-cyan-400 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Canal Rd, Green Avenue, Faisalabad</span>
            </Link>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Daily: 6:00 AM – 12:00 AM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Today
            </span>
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="text-zinc-200 hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{GYM_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar: 
          Transparent at top. After 24px scroll: background rgba(9,10,15,0.85), backdrop-filter blur(12px), height 80px -> 64px over 300ms */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl'
            : 'bg-[#090a0f]/85 md:bg-transparent border-b border-zinc-800/40 backdrop-blur-md md:backdrop-blur-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`flex items-center justify-between gap-2 lg:gap-3 transition-all duration-300 ${
              isScrolled ? 'h-16' : 'h-16 lg:h-20'
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
              id="navbar-logo"
            >
              <div className="w-9 h-9 sm:w-9 sm:h-9 xl:w-10 xl:h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all shrink-0">
                <div className="w-full h-full bg-[#08090d] rounded-[10px] flex items-center justify-center">
                  <Dumbbell className="w-4 h-4 sm:w-4.5 sm:h-4.5 xl:w-5 xl:h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-sm sm:text-base lg:text-base xl:text-lg text-white font-heading leading-tight flex items-center gap-1">
                  FIT BASE
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"></span>
                </span>
                <span className="text-[7.5px] sm:text-[8px] xl:text-[9px] tracking-[0.2em] text-zinc-400 font-semibold uppercase">
                  FITNESS CENTER
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with scaleX underline hover animation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0" aria-label="Main page navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative px-1.5 xl:px-2.5 py-1.5 text-[11px] xl:text-xs font-bold uppercase tracking-wide xl:tracking-wider transition-colors shrink-0 group/nav ${
                      isActive ? 'text-cyan-400' : 'text-zinc-300 hover:text-white'
                    }`
                  }
                  id={`nav-link-${link.name.toLowerCase()}`}
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {/* Nav link underline: scaleX(0) to scaleX(1) from left on hover, origin left, 250ms */}
                      <span
                        className={`absolute bottom-0 left-1.5 xl:left-2.5 right-1.5 xl:right-2.5 h-[2px] bg-cyan-400 transition-transform duration-250 origin-left ${
                          isActive
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover/nav:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Action CTA buttons: Single Call icon & Join Now */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="flex items-center justify-center p-2 sm:px-2.5 xl:px-3 sm:py-2 text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 rounded-xl transition-all shrink-0"
                title={`Call Fit Base: ${GYM_INFO.phoneDisplay}`}
                id="navbar-call-btn"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="hidden xl:inline xl:ml-1.5">Call</span>
              </a>

              <button
                onClick={() => onOpenJoin()}
                className="relative group overflow-hidden px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-xs font-extrabold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 shadow-md shadow-cyan-500/25 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer shrink-0"
                id="navbar-join-btn"
              >
                <span className="relative z-10 flex items-center gap-1 tracking-wide">
                  JOIN NOW
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </span>
              </button>

              {/* Hamburger drawer trigger for mobile / tablet */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 focus:outline-none lg:hidden cursor-pointer shrink-0"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                id="mobile-menu-toggle-btn"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Page Options Bar - Visible on screen */}
        <nav
          className="lg:hidden border-t border-zinc-800/80 bg-[#06070a]/95 px-3 py-1.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth"
          aria-label="Mobile pages navigation"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/90 border border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                      : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/80 border border-zinc-800/70'
                  }`
                }
                id={`mobile-tab-${link.name.toLowerCase()}`}
              >
                <Icon className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Menu: slide down with opacity 300ms, items stagger 40ms, focus trap & Escape */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={drawerRef}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: MOTION_TOKENS.ease.entrance }}
              className="lg:hidden fixed inset-x-0 top-full bg-[#08090d]/98 border-b border-zinc-800 shadow-2xl backdrop-blur-2xl max-h-[calc(100vh-80px)] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
            >
              <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
                <div className="grid grid-cols-2 gap-2 pb-3 border-b border-zinc-800/80">
                  <a
                    href={`tel:${GYM_INFO.phoneRaw}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-200"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    Call Gym
                  </a>
                  <Link
                    to="/location"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-200"
                  >
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    Directions
                  </Link>
                </div>

                {/* Staggered Navigation links grid/list (40ms stagger) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {navLinks.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <motion.div
                        key={link.name}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: shouldReduceMotion ? 0 : idx * MOTION_TOKENS.stagger.fast,
                          duration: 0.2,
                        }}
                      >
                        <NavLink
                          to={link.to}
                          end={link.to === '/'}
                          onClick={() => setMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-medium transition-all ${
                              isActive
                                ? 'text-cyan-400 bg-cyan-950/80 border border-cyan-500/40 font-bold'
                                : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                            }`
                          }
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-cyan-400" />
                            <span>{link.name}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-zinc-600" />
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenJoin();
                  }}
                  className="w-full py-3.5 rounded-xl font-bold text-center text-sm text-black bg-gradient-to-r from-cyan-400 to-sky-400 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
                  id="mobile-drawer-join-btn"
                >
                  <Dumbbell className="w-4 h-4 text-black" />
                  JOIN FIT BASE TODAY
                </button>
              </div>

              <div className="text-center pt-2 text-xs text-zinc-400">
                <p>204 Chak, W Canal Rd, Green Avenue, Faisalabad</p>
                <p className="mt-0.5 text-cyan-400 font-medium">Daily: 6:00 AM – 12:00 AM</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  </>
);
};
