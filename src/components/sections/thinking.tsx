'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { thinking } from '@/lib/content';

export function ThinkingSection() {
  return (
    <section id="thinking" className="section-padding">
      <div className="container-content">
        <AnimatedSection>
          <div className="mb-12 md:mb-16">
            <h2 className="text-h2 text-text-primary mb-4">{thinking.headline}</h2>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              {thinking.subheadline}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {thinking.essays.map((essay, index) => (
            <AnimatedSection
              key={essay.id}
              animation="fade-up"
              delay={(Math.min(index, 2) * 100) as 0 | 100 | 200}
            >
              <article className="group p-6 md:p-8 rounded-2xl border border-border hover:border-accent-200 hover:shadow-medium transition-all duration-300 h-full flex flex-col">
                <h3 className="text-h4 text-text-primary mb-3 group-hover:text-accent-600 transition-colors">
                  {essay.href !== '#' ? (
                    <a href={essay.href}>{essay.title}</a>
                  ) : (
                    <span>{essay.title}</span>
                  )}
                </h3>
                <p className="text-body text-text-secondary mb-4 flex-1">
                  {essay.summary}
                </p>
                {essay.href !== '#' ? (
                  <a
                    href={essay.href}
                    className="text-body font-medium text-text-primary hover:text-accent-600 transition-colors inline-flex items-center gap-2 link-underline"
                  >
                    Read essay
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="text-body-sm text-text-muted">
                    Coming soon
                  </span>
                )}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
