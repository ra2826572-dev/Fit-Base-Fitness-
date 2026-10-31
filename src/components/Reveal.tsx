import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MOTION_TOKENS } from '../utils/motionTokens';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  yOffset = MOTION_TOKENS.distance.md,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: MOTION_TOKENS.duration.ui,
        delay,
        ease: MOTION_TOKENS.ease.entrance,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
