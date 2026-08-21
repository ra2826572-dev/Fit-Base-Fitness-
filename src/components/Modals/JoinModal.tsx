import React, { useState } from 'react';
import { X, CheckCircle2, Flame, Send, MessageSquare, Phone } from 'lucide-react';
import { GYM_INFO } from '../../data/gymData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGoal?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, initialGoal = 'Strength Training' }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState(initialGoal);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Fit Base Fitness Center!\nI would like to join / book a visit.\nName: ${fullName || 'Guest'}\nPhone: ${phone}\nGoal: ${goal}`
    );
    window.open(`https://wa.me/923128330203?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0e111a] border border-zinc-700 max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Accent top line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase mb-2">
                <Flame className="w-3.5 h-3.5 text-cyan-400" />
                JOIN FIT BASE
              </div>
              <h3 className="text-2xl font-black font-heading text-white">
                START YOUR FITNESS JOURNEY
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Train in Faisalabad's premier air-conditioned fitness center on Canal Road.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800/80 text-xs text-rose-300 font-medium">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="0312 8330203"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase mb-1.5">
                Target Fitness Goal
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="Strength Training">Strength & Muscle Training</option>
                <option value="Weight Loss">Weight Loss & Fat Burn</option>
                <option value="Personal Training">Personal Training (1-on-1)</option>
                <option value="Functional Fitness">Functional Fitness & Mobility</option>
                <option value="General Health">Beginner Starter Gym Visit</option>
              </select>
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-sm font-black text-black bg-gradient-to-r from-cyan-400 to-sky-400 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'Processing...' : 'CONFIRM INQUIRY'}
              </button>

              <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-zinc-800">
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="hover:text-cyan-400 flex items-center gap-1 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Or Call: {GYM_INFO.phoneDisplay}
                </a>
                <span>Open 6 AM – 12 AM</span>
              </div>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-cyan-950 border border-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/20">
              <CheckCircle2 className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-black font-heading text-white">
                INQUIRY REGISTERED!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-2">
                Thank you, <span className="font-bold text-cyan-400">{fullName}</span>. We look forward to welcoming you at Fit Base Fitness Center.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleWhatsApp}
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message Now via WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-300 border border-zinc-800"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
