'use client';

import { motion } from 'framer-motion';
import { about } from '@/lib/content';
import { sectionReveal, fadeInUp, viewportStandard, staggerContainer } from '@/lib/motion';

export function AboutSection() {
  return (
    <section id="about" className="section-padding section-divider">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Main content */}
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportStandard}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent-500/50" />
              <span className="text-overline text-accent-400 uppercase tracking-widest">
                About
              </span>
            </div>

            <h2 className="text-h1 md:text-display-sm text-text-primary mb-10">
              {about.headline}
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportStandard}
              className="space-y-6 mb-10"
            >
              {about.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeInUp}
                  className="text-body-lg text-text-secondary leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Emphasis quote */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportStandard}
              className="relative pl-6 border-l-2 border-accent-500/50"
            >
              <p className="text-h4 text-text-primary font-medium leading-relaxed">
                {about.emphasis}
              </p>
            </motion.div>
          </motion.div>

          {/* Specifics sidebar */}
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportStandard}
            className="lg:pt-20"
          >
            <div className="glass-card rounded-2xl p-8 glow-ring">
              <h3 className="text-h4 text-text-primary mb-8">Specifics</h3>

              <ul className="space-y-5 mb-10">
                {about.specifics.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-body text-text-secondary"
                  >
                    <span className="text-accent-400 mt-1 flex-shrink-0">
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {about.links.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                  {about.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body font-medium text-text-secondary hover:text-accent-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      {link.text}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
