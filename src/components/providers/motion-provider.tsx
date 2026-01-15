'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

interface MotionProviderProps {
  children: ReactNode;
}

/**
 * Wraps the app with MotionConfig to respect user's reduced motion preferences
 * reducedMotion="user" means animations are disabled when prefers-reduced-motion is set
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
