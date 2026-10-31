import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MOTION_TOKENS } from '../utils/motionTokens';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={`w-full h-px bg-zinc-800/80 ${className}`} />;
  }

  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0.3 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.6,
        ease: MOTION_TOKENS.ease.entrance,
      }}
      className={`w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent origin-center ${className}`}
    />
  );
};
