'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { process } from '@/lib/content';

export function ProcessSection() {
  return (
    <section className="section-padding-sm bg-background-alt">
      <div className="container-content">
        <AnimatedSection>
          <h2 className="text-h2 text-text-primary mb-12 md:mb-16">
            {process.headline}
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              delay={(index * 100) as 0 | 100 | 200 | 300}
              animation="fade-up"
            >
              <div className="relative">
                {/* Connector line (hidden on mobile, shown on larger screens) */}
                {index < process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border -translate-x-1/2" />
                )}
                <div className="relative">
                  <span className="text-h1 font-bold text-accent-100">
                    {step.number}
                  </span>
                  <h3 className="text-h4 text-text-primary mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
