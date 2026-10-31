import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';

export const TimetableSection: React.FC = () => {
  const schedule = [
    {
      category: 'General Gym Access (Men)',
      timing: '6:00 AM – 12:00 AM (Daily)',
      details: 'Full floor access, all equipment, free weights & cardio bays.',
      status: 'Open Daily',
    },
    {
      category: 'Dedicated Ladies Timing',
      timing: 'Contact Front Desk for Slots',
      details: 'Private, secure environment with female trainers available upon request.',
      status: 'Special Slots',
    },
    {
      category: 'Personal Training Sessions',
      timing: 'By Appointment (Flexible)',
      details: '1-on-1 coaching scheduled around your work and daily availability.',
      status: 'Bookable',
    },
    {
      category: 'Group Conditioning & HIIT',
      timing: 'Evening Sessions (6 PM & 8 PM)',
      details: 'High-energy metabolic conditioning and strength circuits.',
      status: 'Daily Active',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#08090d] relative border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase inline-block mb-3">
            TIMETABLE & SCHEDULE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
            TRAIN ON YOUR <span className="text-cyan-400">OWN SCHEDULE.</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Open 18 hours daily, 365 days a year with structured sessions for all fitness levels.
          </p>
        </div>

        {/* Timetable Table */}
        <div className="max-w-4xl mx-auto bg-[#0e1017] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="divide-y divide-zinc-800">
            {schedule.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors"
              >
                <div className="space-y-1">
                  <h3 className="text-base font-bold font-heading text-white uppercase">
                    {item.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <span className="text-sm font-bold text-cyan-400 font-mono block">
                      {item.timing}
                    </span>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-[10px] font-bold uppercase">
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
