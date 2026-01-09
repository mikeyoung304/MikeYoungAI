'use client';

import { ReactNode, ElementType } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import {
  AnimationVariant,
  StaggerDelay,
  AnimationDuration,
  animationClasses,
  durationClasses,
  getDelayStyle,
} from '@/types/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Animation type - defaults to fade-up */
  animation?: AnimationVariant;
  /** Delay before animation starts (ms) */
  delay?: StaggerDelay;
  /** Animation duration preset */
  duration?: AnimationDuration;
  /** Intersection threshold (0-1) */
  threshold?: number;
  /** HTML element to render as */
  as?: ElementType;
}

/**
 * Wrapper component that animates children when they enter the viewport.
 * Automatically respects user's reduced motion preference.
 *
 * Usage:
 * <AnimatedSection animation="fade-up" delay={100}>
 *   <Card>Content</Card>
 * </AnimatedSection>
 */
export function AnimatedSection({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 'normal',
  threshold = 0.1,
  as: Component = 'div',
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce: true });

  // Get animation classes
  const { initial, animate } =
    animation === 'none'
      ? { initial: '', animate: '' }
      : animationClasses[animation];

  const durationClass = durationClasses[duration];

  return (
    <Component
      ref={ref}
      className={cn(
        'transition-all ease-out',
        durationClass,
        isInView ? animate : initial,
        className
      )}
      style={getDelayStyle(delay)}
    >
      {children}
    </Component>
  );
}

/**
 * Higher-order wrapper for creating pre-configured animated sections
 */
export function createAnimatedSection(defaults: Partial<AnimatedSectionProps>) {
  return function ConfiguredAnimatedSection(props: AnimatedSectionProps) {
    return <AnimatedSection {...defaults} {...props} />;
  };
}

// Pre-configured variants for common use cases
export const FadeUp = createAnimatedSection({ animation: 'fade-up' });
export const FadeIn = createAnimatedSection({ animation: 'fade-in' });
export const SlideLeft = createAnimatedSection({ animation: 'slide-left' });
export const SlideRight = createAnimatedSection({ animation: 'slide-right' });
export const ScaleIn = createAnimatedSection({ animation: 'scale' });
