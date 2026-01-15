'use client';

import { useState, useEffect } from 'react';
import { navigation, siteConfig } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-border shadow-soft'
          : 'bg-transparent'
      )}
    >
      <nav className="container-content">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="text-h4 font-semibold text-text-primary hover:text-accent-600 transition-colors duration-400"
          >
            {siteConfig.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body text-text-secondary hover:text-text-primary transition-colors duration-400"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-1">
              {navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-body text-text-secondary hover:text-text-primary py-3 px-4 rounded-lg hover:bg-background-muted transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
