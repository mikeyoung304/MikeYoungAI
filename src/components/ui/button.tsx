'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary-hover hover:shadow-elevated hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] active:bg-primary',
        secondary:
          'bg-background-muted text-ink hover:bg-border hover:shadow-card-hover hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] active:bg-background-muted border border-border',
        ghost:
          'text-ink hover:bg-background-muted active:bg-border hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]',
        link: 'text-ink underline-offset-4 hover:underline hover:text-primary',
        accent:
          'bg-accent text-white hover:bg-accent-600 hover:shadow-glow hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
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
    // Handle asChild prop for link buttons
    if (asChild) {
      // When asChild is true, we render the child directly with button styles
      // This is typically used with Next.js Link component
      const child = children as React.ReactElement<{ className?: string }>;
      if (child && typeof child === 'object' && 'props' in child) {
        return (
          <span className={cn(buttonVariants({ variant, size, className }))}>
            {children}
          </span>
        );
      }
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
