'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { SPRING } from '@/lib/motion';
import { hero } from '@/lib/content';

interface CountingNumberProps {
  value: number;
  suffix: string;
  duration?: number;
}

function CountingNumber({ value, suffix, duration = 1.5 }: CountingNumberProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    // If user prefers reduced motion, show final value immediately
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    // Animate the count
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);

      // Ease out cubic for natural feeling
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (now < endTime) {
        requestAnimationFrame(tick);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function TrustMetrics() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ ...SPRING, delay: 0.6 }}
      className="glass rounded-2xl px-8 py-6 shadow-card"
    >
      <div className="flex items-center divide-x divide-border">
        {hero.trustMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.8 + index * 0.1 }}
            className="px-6 first:pl-0 last:pr-0 text-center"
          >
            <div className="text-2xl md:text-3xl font-bold text-ink">
              <CountingNumber value={metric.value} suffix={metric.suffix} />
            </div>
            <div className="text-sm text-ink-muted mt-1">{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Scroll indicator - pulses to draw attention
 */
export function ScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0.6 } : { opacity: 0 }}
      animate={shouldReduceMotion ? {} : { opacity: 0.6 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="flex flex-col items-center gap-2 text-ink-muted"
      >
        <span className="text-sm font-medium">Scroll</span>
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
