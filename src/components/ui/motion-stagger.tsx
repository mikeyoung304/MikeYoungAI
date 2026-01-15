'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import {
  staggerContainer,
  staggerContainerQuick,
  staggerContainerSlow,
  fadeInUp,
} from '@/lib/motion';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  speed?: 'quick' | 'normal' | 'slow';
  delay?: number;
  once?: boolean;
}

/**
 * Container that staggers child animations
 * Children should use StaggerItem or have variants={fadeInUp}
 */
export function StaggerContainer({
  children,
  className,
  speed = 'normal',
  delay = 0,
  once = true,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    quick: staggerContainerQuick,
    normal: staggerContainer,
    slow: staggerContainerSlow,
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={variants[speed]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * Child component for StaggerContainer
 * Automatically inherits stagger timing from parent
 */
export function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Animated container that triggers on mount (not scroll)
 * Good for hero sections that should animate immediately
 */
export function AnimateOnMount({
  children,
  className,
  speed = 'normal',
  delay = 0,
}: Omit<StaggerContainerProps, 'once'>) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    quick: staggerContainerQuick,
    normal: staggerContainer,
    slow: staggerContainerSlow,
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={variants[speed]}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated list - wraps multiple items with automatic staggering
 */
interface AnimatedListProps {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
  speed?: 'quick' | 'normal' | 'slow';
}

export function AnimatedList({
  items,
  className,
  itemClassName,
  speed = 'normal',
}: AnimatedListProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {items.map((item, index) => (
          <div key={index} className={itemClassName}>
            {item}
          </div>
        ))}
      </div>
    );
  }

  const variants = {
    quick: staggerContainerQuick,
    normal: staggerContainer,
    slow: staggerContainerSlow,
  };

  return (
    <motion.div
      variants={variants[speed]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {items.map((item, index) => (
        <motion.div key={index} variants={fadeInUp} className={itemClassName}>
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}
