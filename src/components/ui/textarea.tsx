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
          'flex min-h-[120px] w-full rounded-lg border bg-white px-4 py-3 text-body text-text-primary transition-all duration-200 resize-y',
          'placeholder:text-text-muted',
          'focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error ? 'border-red-500' : 'border-border hover:border-border-strong',
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
