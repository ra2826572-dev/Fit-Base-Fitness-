/**
 * Fit Base Motion Tokens
 * Strict athletic and performance tokens:
 * - Entrance easing: [0.22, 1, 0.36, 1]
 * - Hover easing: ease-out
 * - Durations: micro 180ms, UI 350ms, hero 800ms
 * - Distance: 16-24px
 * - Only transform and opacity
 */

export const MOTION_TOKENS = {
  ease: {
    entrance: [0.22, 1, 0.36, 1] as const,
    hover: 'easeOut' as const,
  },
  duration: {
    micro: 0.18,
    ui: 0.35,
    hero: 0.85,
    countUp: 1.2,
  },
  stagger: {
    fast: 0.04,
    words: 0.09,
    cards: 0.12,
    maxStaggeredItems: 6,
  },
  distance: {
    sm: 16,
    md: 24,
  },
};
