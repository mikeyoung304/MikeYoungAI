'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { hero } from '@/lib/content';

export function HeroSection() {
  // Deliberate, unhurried reveal - 8px movement, 200ms stagger
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay,
    },
  });

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-mesh-gradient" />

      {/* Content - left aligned, considered */}
      <div className="relative z-10 container-content pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Headline - first */}
          <motion.h1
            {...fadeUp(0)}
            className="text-h1 md:text-display text-text-primary text-balance mb-6"
          >
            {hero.headline}
          </motion.h1>

          {/* Subhead - 200ms later */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-body-lg text-text-secondary max-w-2xl mb-10"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs - 400ms later */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg">
              <a href={hero.primaryCta.href}>{hero.primaryCta.text}</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.text}</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
