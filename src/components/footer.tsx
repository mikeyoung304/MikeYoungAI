'use client';

import { motion } from 'framer-motion';
import { footer, siteConfig } from '@/lib/content';
import { fadeInUp, viewportStandard } from '@/lib/motion';

export function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-border">
      <div className="container-content">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportStandard}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Left side - copyright and tagline */}
          <div className="text-center md:text-left">
            <p className="text-body-sm text-text-muted mb-1">
              {footer.copyright}
            </p>
            {footer.tagline && (
              <p className="text-caption text-text-subtle">
                {footer.tagline}
              </p>
            )}
          </div>

          {/* Right side - links */}
          <div className="flex items-center gap-8">
            {footer.links.map((link) => (
              <a
                key={link.text}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-body-sm text-text-muted hover:text-accent-400 transition-colors link-underline"
              >
                {link.text}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Optional: Decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"
        />

        {/* Brand mark */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <span className="text-caption text-text-subtle/50">
            {siteConfig.name}
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
