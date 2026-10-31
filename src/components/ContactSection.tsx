import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { 
  Send, 
  Phone, 
  MapPin, 
  Sparkles, 
  Clock, 
  MessageSquare
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { InquiryFormData } from '../types';
import { MOTION_TOKENS } from '../utils/motionTokens';

interface ContactSectionProps {
  preselectedGoal?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedGoal = 'Strength Training' }) => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    fitnessGoal: preselectedGoal,
    preferredTime: 'Evening (4:00 PM – 8:00 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const fitnessGoals = [
    'Strength Training & Muscle Building',
    'Weight Loss & Body Toning',
    'Personal Training (1-on-1)',
    'Functional Fitness & Mobility',
    'Beginner Starter Guidance',
    'General Health & Conditioning',
  ];

  const timeSlots = [
    'Morning (6:00 AM – 10:00 AM)',
    'Afternoon (12:00 PM – 4:00 PM)',
    'Evening (4:00 PM – 8:00 PM)',
    'Night (8:00 PM – 12:00 AM)',
  ];

  const validate = () => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.trim().length < 9) {
      errs.phoneNumber = 'Please enter a valid phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Fit Base Fitness Center!\nName: ${formData.fullName || 'Member'}\nPhone: ${formData.phoneNumber}\nGoal: ${formData.fitnessGoal}\nPreferred Time: ${formData.preferredTime}\nMessage: ${formData.message || 'I would like to join/inquire.'}`
    );
    window.open(`https://wa.me/923128330203?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      fitnessGoal: 'Strength Training & Muscle Building',
      preferredTime: 'Evening (4:00 PM – 8:00 PM)',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 bg-[#0b0d13] relative border-t border-zinc-850">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Context & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                GET STARTED TODAY
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight uppercase leading-tight">
                READY TO <br />
                <span className="text-cyan-400">START?</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-zinc-300 font-medium">
                "Your next level starts with your next workout."
              </p>

              <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                Send an inquiry or stop by Fit Base on Canal Road. Our team is ready to introduce you to the machines, assess your targets, and get you moving towards your strongest self.
              </p>

              {/* Direct Touchpoints */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 font-semibold uppercase">Instant Telephone Contact</span>
                    <a
                      href={`tel:${GYM_INFO.phoneRaw}`}
                      className="block text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      {GYM_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 font-semibold uppercase">Facility Location</span>
                    <p className="text-sm font-bold text-white">
                      204 Chak, W Canal Rd, Green Avenue, Faisalabad
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 font-semibold uppercase">Operating Schedule</span>
                    <p className="text-sm font-bold text-white">
                      Every Day: 6:00 AM – 12:00 AM (Midnight)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Pills */}
            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap gap-3">
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-white border border-zinc-700 flex items-center gap-2"
                id="contact-call-now-pill"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                CALL NOW
              </a>

              <a
                href={GYM_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-white border border-zinc-700 flex items-center gap-2"
                id="contact-get-directions-pill"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                GET DIRECTIONS
              </a>
            </div>

          </div>

          {/* Right Column: Form Card with animated underlines and validation shake */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e1017] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6" id="fit-base-inquiry-form" noValidate>
                  <div>
                    <h3 className="text-2xl font-black font-heading text-white">
                      SEND YOUR INQUIRY
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                      Fill in your details below. Our trainers will reach out to confirm your session or answer questions.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="relative">
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <motion.div
                        animate={
                          errors.fullName && !shouldReduceMotion
                            ? { x: [-4, 4, -4, 4, 0] }
                            : { x: 0 }
                        }
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <input
                          type="text"
                          placeholder="e.g. Hamza Ali"
                          value={formData.fullName}
                          onFocus={() => setFocusedField('fullName')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                            errors.fullName ? 'border-rose-500' : 'border-zinc-800'
                          }`}
                          id="form-full-name-input"
                        />
                        {/* 2px underline scales in on focus */}
                        <span
                          className={`absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-400 transition-transform duration-200 origin-center ${
                            focusedField === 'fullName' ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        />
                      </motion.div>
                      {errors.fullName && (
                        <motion.p
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs text-rose-400 mt-1 font-medium"
                        >
                          {errors.fullName}
                        </motion.p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Phone Number <span className="text-cyan-400">*</span>
                      </label>
                      <motion.div
                        animate={
                          errors.phoneNumber && !shouldReduceMotion
                            ? { x: [-4, 4, -4, 4, 0] }
                            : { x: 0 }
                        }
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <input
                          type="tel"
                          placeholder="e.g. 0312 8330203"
                          value={formData.phoneNumber}
                          onFocus={() => setFocusedField('phoneNumber')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => {
                            setFormData({ ...formData, phoneNumber: e.target.value });
                            if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                            errors.phoneNumber ? 'border-rose-500' : 'border-zinc-800'
                          }`}
                          id="form-phone-input"
                        />
                        {/* 2px underline scales in on focus */}
                        <span
                          className={`absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-400 transition-transform duration-200 origin-center ${
                            focusedField === 'phoneNumber' ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        />
                      </motion.div>
                      {errors.phoneNumber && (
                        <motion.p
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs text-rose-400 mt-1 font-medium"
                        >
                          {errors.phoneNumber}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Fitness Goal Selector */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Primary Fitness Goal
                    </label>
                    <select
                      value={formData.fitnessGoal}
                      onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors focus-visible:ring-1 focus-visible:ring-cyan-400"
                      id="form-fitness-goal-select"
                    >
                      {fitnessGoals.map((goal, idx) => (
                        <option key={idx} value={goal} className="bg-zinc-900 text-white">
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Preferred Training Time
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {timeSlots.map((slot, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredTime: slot })}
                          className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                            formData.preferredTime === slot
                              ? 'bg-cyan-950/60 border-cyan-500/80 text-cyan-300 shadow-sm'
                              : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Questions / Notes (Optional)
                    </label>
                    <div className="relative">
                      <textarea
                        rows={3}
                        placeholder="Tell us any specific requirements or when you'd like to visit..."
                        value={formData.message}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                        id="form-message-input"
                      />
                      <span
                        className={`absolute bottom-1.5 left-2 right-2 h-[2px] bg-cyan-400 transition-transform duration-200 origin-center ${
                          focusedField === 'message' ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Submit Button with small spinner that avoids width layout-shifts */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-14 rounded-xl text-base font-extrabold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 cursor-pointer"
                      id="form-submit-inquiry-btn"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                          <span>SENDING INQUIRY...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>SEND INQUIRY</span>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-zinc-400">
                    🔒 No spam. We respond promptly via phone call or WhatsApp during gym hours.
                  </p>
                </form>
              ) : (
                /* Success State: SVG check icon draws with strokeDashoffset, then message fades in */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-400 flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/20">
                    <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <motion.polyline
                        points="20 6 9 17 4 12"
                        initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                    </svg>
                  </div>

                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.35 }}
                  >
                    <h3 className="text-2xl font-black font-heading text-white">
                      INQUIRY RECEIVED!
                    </h3>
                    <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-cyan-400">{formData.fullName}</span>. Our team at Fit Base Fitness Center will contact you shortly at <span className="font-bold text-white">{formData.phoneNumber}</span>.
                    </p>
                  </motion.div>

                  {/* Summary Box */}
                  <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 text-left text-xs text-zinc-300 space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Fitness Focus:</span>
                      <span className="font-bold text-white">{formData.fitnessGoal}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">Preferred Slot:</span>
                      <span className="font-bold text-white">{formData.preferredTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Facility:</span>
                      <span className="font-bold text-cyan-400">Canal Road, Green Avenue</span>
                    </div>
                  </div>

                  {/* Quick WhatsApp Follow-up */}
                  <div className="space-y-3 pt-2 max-w-md mx-auto">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat Immediately On WhatsApp</span>
                    </button>

                    <button
                      onClick={resetForm}
                      className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
