'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { cardReveal3D } from '@/lib/motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
  glass?: boolean;
  gradient?: boolean;
}

export function Card({
  className,
  hover = false,
  glow = false,
  glass = true,
  gradient = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 md:p-8',
        // Glass effect (default for dark mode)
        glass && 'glass-card',
        // Non-glass fallback
        !glass && 'bg-background-elevated border border-border',
        // Hover effects
        hover && 'transition-all duration-400 hover:-translate-y-1 hover:border-border-strong',
        // Glow ring on hover
        glow && 'glow-ring',
        // Animated gradient border
        gradient && 'gradient-border',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Animated card with Framer Motion
interface MotionCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
  glass?: boolean;
  index?: number;
}

export const MotionCard = forwardRef<HTMLDivElement, MotionCardProps>(
  ({ className, hover = true, glow = false, glass = true, index = 0, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={cardReveal3D}
        whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
        whileTap={hover ? { scale: 0.98 } : undefined}
        className={cn(
          'rounded-2xl p-6 md:p-8',
          glass && 'glass-card',
          !glass && 'bg-background-elevated border border-border',
          hover && 'cursor-pointer',
          glow && 'glow-ring',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
MotionCard.displayName = 'MotionCard';

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('text-h4 text-text-primary mb-3', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-body text-text-secondary', className)} {...props}>
      {children}
    </p>
  );
}

// Icon wrapper for cards
export function CardIcon({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4',
        'text-accent-400',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
