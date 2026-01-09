'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { work } from '@/lib/content';

export function WorkSection() {
  return (
    <section id="work" className="section-padding">
      <div className="container-content">
        <AnimatedSection>
          <div className="mb-12 md:mb-16">
            <h2 className="text-h2 text-text-primary mb-4">{work.headline}</h2>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              {work.subheadline}
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-16 md:space-y-24">
          {work.caseStudies
            .filter((cs) => cs.featured)
            .map((caseStudy, index) => (
              <article
                key={caseStudy.id}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
              >
                {/* Image placeholder */}
                <AnimatedSection
                  animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}
                  className="order-2 lg:order-1"
                >
                  <div className="aspect-video bg-background-muted rounded-2xl border border-border flex items-center justify-center overflow-hidden group">
                    {/* TODO: Add screenshot */}
                    <span className="text-text-muted text-body-sm group-hover:scale-105 transition-transform">
                      Screenshot placeholder
                    </span>
                  </div>
                </AnimatedSection>

                {/* Content */}
                <AnimatedSection
                  animation="fade-up"
                  className="order-1 lg:order-2"
                >
                  <h3 className="text-h3 text-text-primary mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-body-lg text-text-secondary mb-6">
                    {caseStudy.subtitle}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-body font-semibold text-text-primary uppercase tracking-wider mb-2">
                        The Challenge
                      </h4>
                      <p className="text-body text-text-secondary">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-body font-semibold text-text-primary uppercase tracking-wider mb-2">
                        The Approach
                      </h4>
                      <p className="text-body text-text-secondary">
                        {caseStudy.approach}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-body font-semibold text-text-primary uppercase tracking-wider mb-2">
                        The Outcome
                      </h4>
                      <ul className="space-y-1">
                        {caseStudy.outcomes.map((outcome, outcomeIndex) => (
                          <li
                            key={outcomeIndex}
                            className="text-body text-text-secondary flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-body font-semibold text-text-primary uppercase tracking-wider mb-2">
                        Technology
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technology.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-background-muted text-text-secondary text-body-sm rounded-full hover:bg-accent-50 hover:text-accent-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {caseStudy.backstory && (
                      <div className="pt-4 border-t border-border">
                        <p className="text-body text-text-muted italic">
                          {caseStudy.backstory}
                        </p>
                      </div>
                    )}

                    <a
                      href={caseStudy.link.href}
                      className="inline-flex items-center gap-2 text-body font-medium text-text-primary hover:text-accent-600 transition-colors link-underline"
                    >
                      {caseStudy.link.text}
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
                  </div>
                </AnimatedSection>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
