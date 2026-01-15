'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrustMetrics, ScrollIndicator } from '@/components/ui/trust-metrics';
import { hero } from '@/lib/content';
import { staggerContainerSlow, SPRING } from '@/lib/motion';

export function HeroSection() {

  // Item variant for stagger children
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: SPRING,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-mesh-gradient" />
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-content text-center pt-20 pb-32"
      >
        <div className="max-w-4xl mx-auto">
          {/* Animated Headline */}
          <motion.h1
            variants={itemVariant}
            className="text-h1 md:text-display text-ink text-balance mb-6"
          >
            <span className="gradient-text">{hero.headline.split(',')[0]}</span>
            {hero.headline.includes(',') && (
              <>
                ,
                <br className="hidden md:block" />
                <span className="text-ink">{hero.headline.split(',').slice(1).join(',')}</span>
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariant}
            className="text-body-lg md:text-h4 text-ink-muted font-normal max-w-2xl mx-auto mb-10"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariant}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <Button asChild size="lg" className="glow-accent-hover">
              <a href={hero.primaryCta.href}>{hero.primaryCta.text}</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.text}</a>
            </Button>
          </motion.div>

          {/* Selected work tagline */}
          <motion.p
            variants={itemVariant}
            className="text-body text-ink-subtle text-emphasis"
          >
            {hero.selectedWorkTagline}
          </motion.p>
        </div>
      </motion.div>

      {/* Trust Bar - positioned at bottom */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:block">
        <TrustMetrics />
      </div>

      {/* Mobile Trust Bar - inline */}
      <div className="md:hidden absolute bottom-8 left-4 right-4">
        <TrustMetrics />
      </div>

      {/* Scroll Indicator - desktop only */}
      <div className="hidden lg:block">
        <ScrollIndicator />
      </div>
    </section>
  );
}
