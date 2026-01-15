'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { hero } from '@/lib/content';
import {
  heroReveal,
  heroSubReveal,
  ctaReveal,
  metricsReveal,
  heroStagger,
  viewportHero,
} from '@/lib/motion';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-mesh-hero">
        {/* Floating gradient orbs */}
        {!shouldReduceMotion && (
          <>
            <div
              className="bg-orb-1"
              style={{ top: '10%', left: '20%' }}
            />
            <div
              className="bg-orb-2"
              style={{ bottom: '20%', right: '15%' }}
            />
            <div
              className="bg-orb-3"
              style={{ top: '60%', left: '60%' }}
            />
          </>
        )}
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        viewport={viewportHero}
        className="relative z-10 container-content pt-32 pb-24"
      >
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.div
            variants={heroReveal}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-accent-500/50" />
            <span className="text-overline text-accent-400 uppercase tracking-widest">
              Software Engineer
            </span>
          </motion.div>

          {/* Headline - Statement typography */}
          <motion.h1
            variants={heroReveal}
            className="text-display-sm md:text-display lg:text-display-xl text-text-primary text-balance mb-8"
          >
            {hero.headline}
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={heroSubReveal}
            className="text-body-lg md:text-h4 text-text-secondary font-normal max-w-2xl mb-12 leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs with glow */}
          <motion.div
            variants={ctaReveal}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button variant="glow" size="xl" asChild>
              <a href={hero.primaryCta.href}>{hero.primaryCta.text}</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.text}</a>
            </Button>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            variants={metricsReveal}
            className="flex flex-wrap gap-8 md:gap-12"
          >
            {hero.trustMetrics?.map((metric, index) => (
              <div key={index} className="group">
                <div className="text-h2 md:text-h1 font-bold text-text-primary mb-1 transition-colors group-hover:text-accent-400">
                  {metric.value}
                </div>
                <div className="text-body-sm text-text-muted">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-accent-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
