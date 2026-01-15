'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { SPRING } from '@/lib/motion';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  once?: boolean;
}

/**
 * Fade-in animation wrapper with scroll trigger
 * Respects user's reduced motion preferences
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 20,
  once = true,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  // Direction to axis/offset mapping
  const directionOffset: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  // If user prefers reduced motion, render without animation
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ ...SPRING, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Simple fade without movement
 */
export function Fade({
  children,
  className,
  delay = 0,
  once = true,
}: Omit<FadeInProps, 'direction' | 'distance'>) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.4, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Scale-in animation - good for cards and images
 */
export function ScaleIn({
  children,
  className,
  delay = 0,
  once = true,
}: Omit<FadeInProps, 'direction' | 'distance'>) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ ...SPRING, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
