'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { about } from '@/lib/content';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background-alt">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Main content */}
          <AnimatedSection animation="fade-up">
            <h2 className="text-h2 text-text-primary mb-8">{about.headline}</h2>
            <div className="space-y-4 mb-8">
              {about.content.map((paragraph, index) => (
                <p key={index} className="text-body-lg text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="text-body-lg text-text-primary font-medium">
              {about.emphasis}
            </p>
          </AnimatedSection>

          {/* Specifics */}
          <AnimatedSection animation="fade-up" delay={100} className="lg:pt-16">
            <div className="bg-white rounded-2xl border border-border p-8 hover:shadow-medium transition-shadow">
              <h3 className="text-h4 text-text-primary mb-6">Specifics</h3>
              <ul className="space-y-4 mb-8">
                {about.specifics.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-body text-text-secondary"
                  >
                    <span className="text-accent-500 mt-1">
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {about.links.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {about.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body font-medium text-text-primary hover:text-accent-600 transition-colors inline-flex items-center gap-2 link-underline"
                    >
                      {link.text}
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
