'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './use-reduced-motion';

interface UseInViewOptions {
  /** Percentage of element that must be visible (0-1) */
  threshold?: number;
  /** Margin around root element for triggering */
  rootMargin?: string;
  /** If true, animation only triggers once */
  triggerOnce?: boolean;
}

interface UseInViewReturn<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  isInView: boolean;
}

/**
 * Hook to detect when an element enters the viewport
 * Respects user's reduced motion preference
 *
 * Usage:
 * const { ref, isInView } = useInView({ threshold: 0.1 });
 * return <div ref={ref} className={isInView ? 'visible' : 'hidden'}>...</div>
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
}: UseInViewOptions = {}): UseInViewReturn<T> {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If user prefers reduced motion, immediately show content
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, prefersReducedMotion]);

  return { ref, isInView };
}
