'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base: taller, slower transitions (400ms), proper focus states
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-400 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary: solid, lifts on hover with shadow
        primary:
          'bg-text-primary text-white hover:-translate-y-0.5 hover:shadow-medium active:translate-y-0 active:shadow-none',
        // Secondary: bordered, lifts on hover
        secondary:
          'bg-white text-text-primary border border-border hover:-translate-y-0.5 hover:shadow-soft hover:border-border-strong active:translate-y-0 active:shadow-none',
        // Ghost: minimal, subtle background on hover
        ghost:
          'text-text-primary hover:bg-background-muted active:bg-background-alt',
        // Link: text only
        link: 'text-text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-10 px-5 text-sm',
        md: 'h-12 px-6 text-base',
        lg: 'h-14 px-8 text-base', // Taller for trust
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
