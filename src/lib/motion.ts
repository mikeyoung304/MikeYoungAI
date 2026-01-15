/**
 * Framer Motion animation system for mikeyoung.ai
 * 2026 Premium Dark Mode - Statement Animations
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

/** Premium easing - cinematic feel */
export const EASE_PREMIUM: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

/** Quick premium easing */
export const EASE_QUICK: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
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
// STATEMENT ANIMATIONS
// Bold, memorable entrance effects for hero sections
// ============================================================================

/** Hero headline - dramatic blur + slide reveal */
export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/** Hero subheadline - slightly delayed, softer entrance */
export const heroSubReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/** CTA buttons - pop in with glow-ready state */
export const ctaReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/** Trust metrics - staggered counter entrance */
export const metricsReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/** 3D card reveal - perspective rotation */
export const cardReveal3D: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 15,
    transformPerspective: 1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/** Section reveal - for major section entrances */
export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/** Blur fade in - ethereal entrance */
export const blurFadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ============================================================================
// GLOW ANIMATIONS
// For buttons and interactive elements
// ============================================================================

/** Glow pulse - breathing light effect */
export const glowPulse: Variants = {
  initial: {
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
  },
  animate: {
    boxShadow: [
      '0 0 20px rgba(59, 130, 246, 0.3)',
      '0 0 40px rgba(59, 130, 246, 0.5)',
      '0 0 20px rgba(59, 130, 246, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/** Glow on hover */
export const glowHover = {
  boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 4px 20px rgba(0, 0, 0, 0.4)',
  transition: { duration: 0.3 },
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

/** Bento grid stagger - for asymmetric card layouts */
export const bentoStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/** Hero stagger - dramatic pacing for hero content */
export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// ============================================================================
// HOVER & TAP EFFECTS
// Interactive states for buttons, cards, links
// ============================================================================

/** Card hover - lift with glow border hint */
export const cardHover = {
  y: -4,
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

/** Card tap - press down feedback */
export const cardTap = {
  scale: 0.98,
  transition: { duration: 0.1 },
};

/** Button hover - lift with glow */
export const buttonHover = {
  y: -2,
  boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 8px 20px rgba(0, 0, 0, 0.3)',
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
  },
};

/** Button tap - press feedback */
export const buttonTap = {
  scale: 0.98,
  y: 0,
  transition: { duration: 0.1 },
};

/** Link hover - subtle glow */
export const linkHover = {
  color: '#60A5FA',
  textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
  transition: { duration: 0.2 },
};

/** Glass card hover - enhanced glass effect */
export const glassCardHover = {
  y: -4,
  backgroundColor: 'rgba(20, 20, 23, 0.9)',
  borderColor: 'rgba(255, 255, 255, 0.12)',
  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
  transition: {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1],
  },
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

/** Hero viewport - no margin, immediate trigger */
export const viewportHero = {
  once: true,
  margin: '0px',
};

// ============================================================================
// PARALLAX HELPERS
// For scroll-based depth effects
// ============================================================================

/** Create parallax transform values */
export function getParallaxRange(speed: number = 0.5) {
  return {
    inputRange: [0, 1],
    outputRange: [0, speed * 100],
  };
}

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

/**
 * Create a hero reveal variant with custom delay
 */
export function createHeroReveal(delay: number = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 60,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
}

/**
 * Create a 3D card reveal with custom rotation and delay
 */
export function createCardReveal3D(
  rotateX: number = 15,
  delay: number = 0
): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX,
      transformPerspective: 1000,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
}
