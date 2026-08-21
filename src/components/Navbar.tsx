import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Dumbbell, MapPin, ChevronRight, Clock } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenJoin: (goal?: string) => void;
  onOpenTrainer: () => void;
  onOpenDirections: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenJoin,
  onOpenDirections,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers-cta' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-bar for quick hours & location info */}
      <div className="bg-[#050608] border-b border-zinc-800/60 text-zinc-400 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Canal Rd, Green Avenue, Faisalabad</span>
            </span>
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

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090d]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3'
            : 'bg-[#08090d]/80 backdrop-blur-sm border-b border-zinc-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="flex items-center gap-2.5 group"
              id="navbar-logo"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
                <div className="w-full h-full bg-[#08090d] rounded-[10px] flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-lg sm:text-xl text-white font-heading leading-tight flex items-center gap-1">
                  FIT BASE
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"></span>
                </span>
                <span className="text-[10px] tracking-[0.22em] text-zinc-400 font-semibold uppercase">
                  FITNESS CENTER
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-cyan-400 hover:bg-zinc-800/50 rounded-lg transition-all"
                  id={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action CTA buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenDirections}
                className="hidden xl:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all"
                title="View location & directions on Canal Road"
                id="navbar-directions-btn"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Directions</span>
              </button>

              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-zinc-200 hover:text-white bg-zinc-900/90 border border-zinc-800/90 hover:border-cyan-500/50 rounded-xl transition-all"
                id="navbar-call-btn"
              >
                <Phone className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="hidden md:inline">Call Us</span>
              </a>

              <button
                onClick={() => onOpenJoin()}
                className="relative group overflow-hidden px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                id="navbar-join-btn"
              >
                <span className="relative z-10 flex items-center gap-1.5 tracking-wide">
                  JOIN NOW
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenJoin()}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 shadow-md transition-all sm:hidden"
                id="mobile-nav-join-quick"
              >
                JOIN
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 focus:outline-none"
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle-btn"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-[#08090d]/98 border-b border-zinc-800 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-zinc-800/80">
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-200"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  Call Gym
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDirections();
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-200"
                >
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  Get Directions
                </button>
              </div>

              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-zinc-200 hover:text-cyan-400 hover:bg-zinc-900 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-600" />
                  </a>
                ))}
              </nav>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenJoin();
                  }}
                  className="w-full py-3.5 rounded-xl font-bold text-center text-sm text-black bg-gradient-to-r from-cyan-400 to-sky-400 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                  id="mobile-drawer-join-btn"
                >
                  <Dumbbell className="w-4 h-4 text-black" />
                  JOIN FIT BASE TODAY
                </button>
              </div>

              <div className="text-center pt-2 text-xs text-zinc-400">
                <p>204 Chak, W Canal Rd, Green Avenue, Faisalabad</p>
                <p className="mt-1 text-cyan-400 font-medium">Daily: 6:00 AM – 12:00 AM</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
