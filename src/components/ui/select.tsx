import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          // Base styles for dark mode
          'flex h-12 w-full rounded-xl px-4 py-3',
          'text-body text-text-primary',
          'transition-all duration-300',
          'appearance-none cursor-pointer',
          // Glass input effect
          'glass-input',
          // Focus states with glow
          'focus:outline-none focus:bg-surface-3',
          'focus:border-accent-500/50 focus:shadow-glow-sm',
          // Disabled
          'disabled:cursor-not-allowed disabled:opacity-50',
          // Error state
          error && 'border-error focus:border-error focus:shadow-[0_0_20px_rgba(239,68,68,0.2)]',
          // Custom dropdown arrow (light for dark mode)
          'bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%23A1A1AA\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3E%3C/svg%3E")]',
          'bg-[length:20px] bg-[right_12px_center] bg-no-repeat',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = 'Select';

export { Select };
