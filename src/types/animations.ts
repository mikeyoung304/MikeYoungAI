/**
 * Animation types for mikeyoung.ai
 * Shared type definitions for both CSS and Framer Motion animation systems
 */

import type { Variants, Transition } from 'framer-motion';

// Direction options for fade animations
export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

// Speed presets for stagger containers
export type StaggerSpeed = 'quick' | 'normal' | 'slow';

// Common animation configuration
export interface AnimationConfig {
  delay?: number;
  direction?: AnimationDirection;
  once?: boolean;
}

// Re-export framer-motion types for convenience
export type { Variants, Transition };

// ============================================================================
// Legacy CSS Animation Types (for backward compatibility)
// ============================================================================

// Animation variants that map to CSS classes
export type AnimationVariant =
  | 'fade-up'
  | 'fade-in'
  | 'fade-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale'
  | 'none';

// Stagger delay presets in milliseconds
export type StaggerDelay = 0 | 50 | 100 | 150 | 200 | 300 | 400;

// Animation duration presets
export type AnimationDuration = 'fast' | 'normal' | 'slow';

// CSS class mappings for each animation variant
export const animationClasses: Record<
  AnimationVariant,
  { initial: string; animate: string }
> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-4',
    animate: 'opacity-100 translate-y-0',
  },
  'fade-in': {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-4',
    animate: 'opacity-100 translate-y-0',
  },
  'slide-left': {
    initial: 'opacity-0 -translate-x-4',
    animate: 'opacity-100 translate-x-0',
  },
  'slide-right': {
    initial: 'opacity-0 translate-x-4',
    animate: 'opacity-100 translate-x-0',
  },
  scale: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
  none: {
    initial: '',
    animate: '',
  },
};

// Duration class mappings
export const durationClasses: Record<AnimationDuration, string> = {
  fast: 'duration-300',
  normal: 'duration-500',
  slow: 'duration-700',
};

// Helper to get delay style
export function getDelayStyle(delay: StaggerDelay = 0): React.CSSProperties {
  return delay > 0 ? { transitionDelay: `${delay}ms` } : {};
}

// Helper to calculate staggered delays for lists
export function getStaggeredDelays(
  itemCount: number,
  baseDelay: StaggerDelay = 100
): StaggerDelay[] {
  return Array.from(
    { length: itemCount },
    (_, i) => (i * baseDelay) as StaggerDelay
  );
}
