'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { work } from '@/lib/content';

export function WorkSection() {
  return (
    <section id="work" className="section-padding">
      <div className="container-content">
        <AnimatedSection>
          <h2 className="text-h2 text-text-primary mb-12">{work.headline}</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {work.projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-up"
              className="h-full"
              delay={(index * 100) as 0 | 100 | 200}
            >
              <div className="h-full p-6 bg-background-muted rounded-2xl border border-border hover:border-accent-200 transition-colors">
                <h3 className="text-h4 text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link.href}
                  className="inline-flex items-center gap-2 text-body-sm font-medium text-text-primary hover:text-accent-600 transition-colors"
                >
                  {project.link.text}
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
          ))}
        </div>
      </div>
    </section>
  );
}
