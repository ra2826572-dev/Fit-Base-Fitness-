import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Sparkles } from 'lucide-react';
import { FAQS_DATA, GYM_INFO } from '../data/gymData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#08090d] relative border-t border-zinc-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            FREQUENT QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight uppercase">
            EVERYTHING YOU NEED <span className="text-cyan-400">TO KNOW</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Common questions regarding membership, training environment, and visiting Fit Base.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0e1017] border border-zinc-800/80 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-heading text-white hover:text-cyan-300 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-cyan-950/60 border-cyan-500/50 text-cyan-400' : 'text-zinc-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support note */}
        <div className="mt-10 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-xs sm:text-sm text-zinc-400">
            Have a custom inquiry not listed here?
          </span>
          <a
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {GYM_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
