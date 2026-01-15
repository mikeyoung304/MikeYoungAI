'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { navigation, siteConfig } from '@/lib/content';
import { cn } from '@/lib/utils';
import { SPRING_SNAPPY } from '@/lib/motion';

// Throttle utility to limit scroll handler calls
function throttle<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): T {
  let lastCall = 0;
  return ((...args: unknown[]) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  }) as T;
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const shouldReduceMotion = useReducedMotion();

  // Throttled scroll handler for performance
  const handleScroll = useCallback(
    throttle(() => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navigation.links
        .map((link) => link.href.replace('#', ''))
        .filter(Boolean);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      // Clear active section if at top
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass border-b border-border shadow-card'
          : 'bg-transparent'
      )}
    >
      <nav className="container-content">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-h4 font-semibold text-ink hover:text-primary transition-colors"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            {siteConfig.name}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.links.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-body transition-colors py-2',
                    isActive
                      ? 'text-ink font-medium'
                      : 'text-ink-muted hover:text-ink'
                  )}
                >
                  {link.text}
                  {/* Animated active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary"
                      transition={SPRING_SNAPPY}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button - Animated Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-ink hover:bg-background-muted rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.2 }}
                className="h-0.5 w-6 rounded-full bg-current origin-left"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="h-0.5 w-6 rounded-full bg-current"
              />
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.2 }}
                className="h-0.5 w-6 rounded-full bg-current origin-left"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="py-4">
                <div className="flex flex-col gap-1">
                  {navigation.links.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      className="text-body text-ink-muted hover:text-ink hover:bg-background-muted transition-all py-3 px-4 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.text}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
