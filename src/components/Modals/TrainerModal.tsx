import React, { useState } from 'react';
import { X, CheckCircle2, Users, Phone, MessageSquare } from 'lucide-react';
import { GYM_INFO } from '../../data/gymData';

interface TrainerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrainerModal: React.FC<TrainerModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [focus, setFocus] = useState('Beginner Assessment & Form Check');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0e111a] border border-zinc-700 max-w-md w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase mb-2">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                COACHING CONSULTATION
              </div>
              <h3 className="text-2xl font-black font-heading text-white">
                TALK TO A TRAINER
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Schedule a complimentary 1-on-1 discussion with a certified coach at Fit Base.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                Consultation Topic
              </label>
              <select
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="Beginner Assessment & Form Check">Beginner Assessment & Form Check</option>
                <option value="Hypertrophy / Muscle Building Strategy">Hypertrophy / Muscle Building Strategy</option>
                <option value="Fat Loss & Conditioning Split">Fat Loss & Conditioning Split</option>
                <option value="Personal Training Packages">Personal Training Details</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-sm font-black text-black bg-cyan-400 hover:bg-cyan-300 shadow-xl shadow-cyan-500/25 transition-all"
              >
                {loading ? 'Submitting...' : 'REQUEST TRAINER CALL'}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              COACH NOTIFIED!
            </h3>
            <p className="text-xs text-zinc-300">
              One of our trainers will contact <span className="font-bold text-white">{name}</span> shortly to set up your consultation.
            </p>
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-zinc-900 text-xs font-bold text-zinc-300 hover:text-white border border-zinc-800"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
