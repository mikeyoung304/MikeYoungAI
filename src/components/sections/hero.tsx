'use client';

import { Button } from '@/components/ui/button';
import { hero } from '@/lib/content';

export function HeroSection() {
  return (
    <section className="section-padding-sm pt-24 md:pt-32 lg:pt-40 bg-mesh-gradient bg-grain">
      <div className="container-content">
        <div className="max-w-4xl">
          <h1 className="animate-fade-in-up-1 text-h1 md:text-display text-text-primary text-balance mb-6">
            {hero.headline}
          </h1>
          <p className="animate-fade-in-up-2 text-body-lg md:text-h4 text-text-secondary font-normal max-w-2xl mb-10">
            {hero.subheadline}
          </p>
          <div className="animate-fade-in-up-3 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <a href={hero.primaryCta.href}>{hero.primaryCta.text}</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.text}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
