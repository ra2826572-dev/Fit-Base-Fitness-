import React from 'react';
import { 
  CheckCircle2, 
  Sparkles,
  Phone,
  ArrowRight
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface PricingSectionProps {
  onOpenJoin: (planTitle: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenJoin }) => {
  const plans = [
    {
      name: 'Monthly Plan',
      duration: '1 Month',
      price: '4,500',
      monthlyPrice: null,
      badge: null,
      popular: false,
      features: [
        'Full gym floor access',
        'Locker & hot shower facility',
      ],
    },
    {
      name: 'Quarterly Plan',
      duration: '3 Months',
      price: '12,000',
      monthlyPrice: '4,000 / month',
      badge: 'Save Rs. 1,500',
      popular: true,
      features: [
        'Full gym floor access',
        'Locker & hot shower facility',
        'Free fitness assessment',
        '1 Free personal coaching session',
        'Priority booking',
      ],
    },
    {
      name: 'Yearly Plan',
      duration: '12 Months',
      price: '40,000',
      monthlyPrice: '3,333 / month',
      badge: 'Save Rs. 14,000',
      popular: false,
      features: [
        'Full year unlimited access',
        'Locker & hot shower facility',
        'Customized workout guidance',
        'Guest pass privileges',
        'Save Rs. 14,000 vs monthly',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#0a0c13] relative border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase inline-block mb-3">
            MEMBERSHIP PLANS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
            SIMPLE PRICING. <span className="text-cyan-400">NO HIDDEN FEES.</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Choose a plan that fits your schedule and start training at Faisalabad's premier fitness facility.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 relative ${
                plan.popular
                  ? 'bg-[#0e121d] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/10'
                  : 'bg-[#0e1017] border border-zinc-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold font-heading text-white uppercase">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span className="text-[10px] font-bold text-black bg-cyan-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="my-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-start">
                    <span className="text-sm font-bold text-zinc-400 mt-2 mr-1">Rs.</span>
                    <span className="text-5xl font-black font-heading text-white">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500 block mt-2 font-medium">
                    {plan.monthlyPrice ? plan.monthlyPrice : '1 month, no commitment'}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 text-sm text-zinc-300">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenJoin(plan.name)}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-cyan-400 text-black hover:bg-cyan-300 shadow-lg shadow-cyan-500/25'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          * Note: Personal training charges are separate. Joining fee: Rs. 2,000. Prices include all applicable taxes and there are no hidden charges.
        </div>

      </div>
    </section>
  );
};
