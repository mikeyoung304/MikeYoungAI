'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base: premium transitions, glow-ready focus states
  'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-400 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary: electric blue with glow on hover
        primary: [
          'bg-accent-500 text-white',
          'hover:bg-accent-400 hover:-translate-y-0.5',
          'hover:shadow-glow-button',
          'active:translate-y-0 active:shadow-glow-sm',
        ].join(' '),

        // Secondary: glass effect, subtle glow on hover
        secondary: [
          'bg-surface-2 text-text-primary border border-border',
          'hover:bg-surface-3 hover:border-border-strong',
          'hover:-translate-y-0.5 hover:shadow-card',
          'active:translate-y-0',
        ].join(' '),

        // Ghost: minimal, surface highlight on hover
        ghost: [
          'text-text-secondary',
          'hover:text-text-primary hover:bg-surface-2',
          'active:bg-surface-3',
        ].join(' '),

        // Outline: bordered with glow
        outline: [
          'border border-accent-500/50 text-accent-400 bg-transparent',
          'hover:border-accent-400 hover:bg-accent-500/10',
          'hover:shadow-glow-sm hover:-translate-y-0.5',
          'active:translate-y-0',
        ].join(' '),

        // Glow: always-on glow effect for hero CTAs
        glow: [
          'bg-accent-500 text-white',
          'shadow-glow-button animate-glow-pulse',
          'hover:bg-accent-400 hover:-translate-y-0.5',
          'hover:shadow-glow',
          'active:translate-y-0',
        ].join(' '),

        // Warm: orange accent for special CTAs
        warm: [
          'bg-warm text-white',
          'hover:bg-warm-hover hover:-translate-y-0.5',
          'hover:shadow-glow-warm-button',
          'active:translate-y-0',
        ].join(' '),

        // Link: text only with glow hover
        link: [
          'text-text-secondary underline-offset-4',
          'hover:text-accent-400 hover:underline',
        ].join(' '),
      },
      size: {
        sm: 'h-10 px-5 text-sm',
        md: 'h-12 px-6 text-base',
        lg: 'h-14 px-8 text-base',
        xl: 'h-16 px-10 text-lg', // Hero CTAs
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, children, ...props }, ref) => {
    if (asChild) {
      return (
        <span className={cn(buttonVariants({ variant, size, className }))}>
          {children}
        </span>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
