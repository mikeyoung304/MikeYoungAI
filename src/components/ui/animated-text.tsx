'use client';

import { ReactNode } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { StaggerDelay, getDelayStyle } from '@/types/animations';

type AnimateBy = 'word' | 'character' | 'line';

interface AnimatedTextProps {
  /** Text to animate - can be a string or React node */
  children: ReactNode;
  /** Additional classes */
  className?: string;
  /** How to split and animate the text */
  animateBy?: AnimateBy;
  /** Base delay before animation starts */
  baseDelay?: StaggerDelay;
  /** Delay between each animated unit (ms) */
  staggerDelay?: number;
  /** HTML element to render as */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

/**
 * Animates text by splitting it into words, characters, or lines
 * and revealing them with a staggered effect.
 *
 * Usage:
 * <AnimatedText as="h1" animateBy="word" className="text-h1">
 *   Welcome to the future
 * </AnimatedText>
 */
export function AnimatedText({
  children,
  className,
  animateBy = 'word',
  baseDelay = 0,
  staggerDelay = 50,
  as: Component = 'div',
}: AnimatedTextProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  // If children is not a string, just render with fade animation
  if (typeof children !== 'string') {
    return (
      <Component
        ref={ref}
        className={cn(
          'transition-all duration-700 ease-out',
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          className
        )}
        style={getDelayStyle(baseDelay)}
      >
        {children}
      </Component>
    );
  }

  const text = children;

  // Split text based on animateBy prop
  const units = splitText(text, animateBy);

  return (
    <Component ref={ref} className={cn('overflow-hidden', className)}>
      {units.map((unit, index) => (
        <span
          key={index}
          className={cn(
            'inline-block transition-all duration-500 ease-out',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            animateBy === 'word' && 'mr-[0.25em]',
            animateBy === 'line' && 'block'
          )}
          style={{
            transitionDelay: isInView
              ? `${baseDelay + index * staggerDelay}ms`
              : '0ms',
          }}
        >
          {unit}
          {animateBy === 'character' && unit === ' ' && '\u00A0'}
        </span>
      ))}
    </Component>
  );
}

function splitText(text: string, by: AnimateBy): string[] {
  switch (by) {
    case 'word':
      return text.split(' ');
    case 'character':
      return text.split('');
    case 'line':
      return text.split('\n');
    default:
      return [text];
  }
}

/**
 * Pre-configured animated heading components
 */
export function AnimatedHeadline({
  children,
  className,
  ...props
}: Omit<AnimatedTextProps, 'as' | 'animateBy'>) {
  return (
    <AnimatedText
      as="h1"
      animateBy="word"
      staggerDelay={80}
      className={className}
      {...props}
    >
      {children}
    </AnimatedText>
  );
}

export function AnimatedSubheadline({
  children,
  className,
  ...props
}: Omit<AnimatedTextProps, 'as' | 'animateBy'>) {
  return (
    <AnimatedText
      as="p"
      animateBy="word"
      staggerDelay={40}
      className={className}
      {...props}
    >
      {children}
    </AnimatedText>
  );
}
