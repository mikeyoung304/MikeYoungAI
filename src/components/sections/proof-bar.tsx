'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { proofBar } from '@/lib/content';

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TestimonialVariant() {
  const { testimonial } = proofBar;
  return (
    <AnimatedSection animation="scale">
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} filled={star <= testimonial.rating} />
          ))}
        </div>
        <blockquote className="text-body-lg md:text-h4 text-text-primary font-normal italic mb-4">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <p className="text-body text-text-muted">
          — {testimonial.author}, {testimonial.title}, {testimonial.company}
        </p>
      </div>
    </AnimatedSection>
  );
}

function MetricsVariant() {
  const { metrics } = proofBar;
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16">
      {metrics.map((metric, index) => (
        <AnimatedSection
          key={index}
          animation="fade-up"
          delay={(index * 100) as 0 | 100 | 200}
        >
          <div className="text-center">
            <p className="text-h2 md:text-display text-text-primary font-bold">
              {metric.value}
            </p>
            <p className="text-body text-text-muted">{metric.label}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

function LogosVariant() {
  const { logos } = proofBar;
  return (
    <AnimatedSection animation="fade-in">
      <div className="text-center">
        <p className="text-body-sm text-text-muted mb-6 uppercase tracking-wider">
          {logos.headline}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.items.map((logo, index) => (
            <div
              key={index}
              className="h-8 opacity-60 hover:opacity-100 transition-opacity"
            >
              {/* TODO: Add logo images */}
              <span className="text-text-muted">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function ProofBarSection() {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-background-alt">
      <div className="container-content">
        {proofBar.variant === 'testimonial' && <TestimonialVariant />}
        {proofBar.variant === 'metrics' && <MetricsVariant />}
        {proofBar.variant === 'logos' && <LogosVariant />}
      </div>
    </section>
  );
}
