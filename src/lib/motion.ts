/**
 * Framer Motion animation system for mikeyoung.ai
 * Consistent spring physics and reusable variants
 */

import type { Variants, Transition } from 'framer-motion';

// ============================================================================
// SPRING PHYSICS
// Consistent, organic-feeling spring animations
// ============================================================================

/** Standard spring - natural, balanced motion */
export const SPRING: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
};

/** Snappy spring - quicker response, good for micro-interactions */
export const SPRING_SNAPPY: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

/** Gentle spring - slower, more elegant motion */
export const SPRING_GENTLE: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
};

/** Bouncy spring - playful, for emphasis */
export const SPRING_BOUNCY: Transition = {
  type: 'spring',
  stiffness: 350,
  damping: 15,
};

// ============================================================================
// ANIMATION VARIANTS
// Reusable animation states for common patterns
// ============================================================================

/** Fade in from below - most common entrance animation */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING,
  },
};

/** Fade in from above */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING,
  },
};

/** Fade in from left */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: SPRING,
  },
};

/** Fade in from right */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: SPRING,
  },
};

/** Scale in - good for cards, images, modals */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: SPRING,
  },
};

/** Simple fade - no movement, just opacity */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

// ============================================================================
// STAGGER CONTAINERS
// Parent components that orchestrate child animations
// ============================================================================

/** Standard stagger - 150ms between children */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/** Quick stagger - 100ms between children, for denser content */
export const staggerContainerQuick: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/** Slow stagger - 200ms between children, for hero sections */
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

// ============================================================================
// HOVER & TAP EFFECTS
// Interactive states for buttons, cards, links
// ============================================================================

/** Card hover - subtle lift effect */
export const cardHover = {
  scale: 1.03,
  y: -4,
  transition: SPRING_SNAPPY,
};

/** Card tap - press down feedback */
export const cardTap = {
  scale: 0.98,
};

/** Button hover - micro lift */
export const buttonHover = {
  scale: 1.02,
  y: -2,
  transition: SPRING_SNAPPY,
};

/** Button tap - press feedback */
export const buttonTap = {
  scale: 0.98,
};

/** Link hover - subtle scale */
export const linkHover = {
  scale: 1.02,
  transition: SPRING_SNAPPY,
};

// ============================================================================
// VIEWPORT OPTIONS
// Common settings for whileInView animations
// ============================================================================

/** Standard viewport - trigger before element fully enters */
export const viewportStandard = {
  once: true,
  margin: '-80px',
};

/** Eager viewport - trigger earlier */
export const viewportEager = {
  once: true,
  margin: '-40px',
};

/** Late viewport - trigger when more visible */
export const viewportLate = {
  once: true,
  margin: '-120px',
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Create a custom stagger container with specified timing
 */
export function createStaggerContainer(
  staggerDelay: number = 0.15,
  initialDelay: number = 0.1
): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };
}

/**
 * Create fade-in variant with custom direction and distance
 */
export function createFadeIn(
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 20,
  spring: Transition = SPRING
): Variants {
  const isVertical = direction === 'up' || direction === 'down';
  const sign = direction === 'down' || direction === 'right' ? -1 : 1;

  if (isVertical) {
    return {
      hidden: { opacity: 0, y: distance * sign },
      visible: {
        opacity: 1,
        y: 0,
        transition: spring,
      },
    };
  }

  return {
    hidden: { opacity: 0, x: distance * sign },
    visible: {
      opacity: 1,
      x: 0,
      transition: spring,
    },
  };
}
