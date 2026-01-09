/**
 * Type-safe animation system for mikeyoung.ai
 * Ensures consistent animation patterns across all components
 */

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

// Animation configuration object
export interface AnimationConfig {
  variant: AnimationVariant;
  delay?: StaggerDelay;
  duration?: AnimationDuration;
  threshold?: number;
  triggerOnce?: boolean;
}

// CSS class mappings for each animation variant
export const animationClasses: Record<
  AnimationVariant,
  { initial: string; animate: string }
> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  'fade-in': {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  'slide-left': {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  'slide-right': {
    initial: 'opacity-0 translate-x-8',
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
  normal: 'duration-700',
  slow: 'duration-1000',
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
