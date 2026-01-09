'use client';

import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { services } from '@/lib/content';

export function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container-content">
        <AnimatedSection>
          <h2 className="text-h2 text-text-primary mb-12 md:mb-16">
            {services.headline}
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.items.map((service, index) => (
            <AnimatedSection
              key={service.id}
              delay={(index * 100) as 0 | 100 | 200}
              animation="fade-up"
            >
              <Card hover className="flex flex-col h-full">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mb-6">
                  {service.description}
                </CardDescription>
                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.cta.href}
                  className="text-body font-medium text-text-primary hover:text-accent-600 transition-colors inline-flex items-center gap-2 link-underline"
                >
                  {service.cta.text}
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
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
