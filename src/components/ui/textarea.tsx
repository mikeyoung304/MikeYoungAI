import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          // Base styles for dark mode
          'flex min-h-[140px] w-full rounded-xl px-4 py-3',
          'text-body text-text-primary',
          'transition-all duration-300 resize-y',
          // Glass input effect
          'glass-input',
          // Placeholder
          'placeholder:text-text-muted',
          // Focus states with glow
          'focus:outline-none focus:bg-surface-3',
          'focus:border-accent-500/50 focus:shadow-glow-sm',
          // Disabled
          'disabled:cursor-not-allowed disabled:opacity-50',
          // Error state
          error && 'border-error focus:border-error focus:shadow-[0_0_20px_rgba(239,68,68,0.2)]',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
