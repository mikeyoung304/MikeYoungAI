'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { work } from '@/lib/content';
import { sectionReveal, viewportStandard, cardReveal3D } from '@/lib/motion';

// Browser window chrome for screenshot framing
function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden bg-[#1a1a1a] shadow-2xl">
      {/* Browser toolbar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2a2a2a] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="h-6 bg-[#1a1a1a] rounded-md" />
        </div>
      </div>
      {/* Content */}
      {children}
    </div>
  );
}

// Featured hero card for flagship product
function FeaturedCard() {
  const project = work.featured;

  return (
    <motion.article
      variants={cardReveal3D}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="group"
    >
      <a
        href={project.link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative p-6 lg:p-8 bg-gradient-to-br from-surface-elevated to-surface-card">
              <BrowserChrome>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </BrowserChrome>
            </div>

            {/* Content side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Tag with accent */}
              <span className="inline-flex items-center gap-2 text-overline uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                <span className="text-accent-400">{project.tag}</span>
              </span>

              {/* Title */}
              <h3 className="text-h2 md:text-h1 text-text-primary mb-4 group-hover:text-accent-400 transition-colors duration-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-body-lg text-text-secondary mb-6">
                {project.description}
              </p>

              {/* Story */}
              {project.story && (
                <p className="text-body text-text-muted italic mb-8 border-l-2 border-accent-500/30 pl-4">
                  {project.story}
                </p>
              )}

              {/* CTA */}
              <span className="inline-flex items-center gap-3 text-body font-medium text-accent-400 group-hover:gap-4 transition-all duration-400">
                {project.link.text}
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
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

// Standard project card
function ProjectCard({
  project,
}: {
  project: (typeof work.projects)[0];
}) {
  const isExternal = project.link.href.startsWith('http');
  const isComingSoon = 'status' in project && project.status === 'coming-soon';

  return (
    <motion.article
      variants={cardReveal3D}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.98 }}
      className="group h-full"
    >
      <a
        href={project.link.href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="block h-full"
      >
        <div className="h-full glass-card rounded-2xl overflow-hidden flex flex-col">
          {/* Image with browser chrome */}
          {'image' in project && project.image ? (
            <div className="p-5 bg-gradient-to-br from-surface-elevated to-surface-card">
              <BrowserChrome>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Coming soon overlay */}
                  {isComingSoon && (
                    <div className="absolute inset-0 bg-surface-base/60 backdrop-blur-[2px] flex items-center justify-center">
                      <span className="px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-full text-accent-400 text-sm font-medium">
                        In Development
                      </span>
                    </div>
                  )}
                </div>
              </BrowserChrome>
            </div>
          ) : (
            /* Placeholder for items without images */
            <div className="p-5 bg-gradient-to-br from-surface-elevated to-surface-card">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-accent-500/10 to-accent-500/5 flex items-center justify-center border border-accent-500/10">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent-400/30 mb-2">
                    {project.title.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div className="text-xs text-text-muted uppercase tracking-wider">
                    {project.tag}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="p-6 flex flex-col flex-grow">
            {/* Tag */}
            <span className={`text-overline uppercase tracking-widest mb-3 ${
              isComingSoon ? 'text-amber-400' : 'text-accent-400'
            }`}>
              {project.tag}
            </span>

            {/* Title */}
            <h3 className="text-h3 text-text-primary mb-3 group-hover:text-accent-400 transition-colors duration-400">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-body text-text-secondary mb-4 flex-grow line-clamp-3">
              {project.description}
            </p>

            {/* Story */}
            {project.story && (
              <p className="text-body-sm text-text-muted italic mb-4 border-l-2 border-accent-500/30 pl-4 line-clamp-2">
                {project.story}
              </p>
            )}

            {/* Link */}
            <span className="inline-flex items-center gap-2 text-body-sm font-medium text-text-secondary group-hover:text-accent-400 transition-colors duration-400">
              {project.link.text}
              <svg
                className="w-4 h-4 transition-transform duration-400 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="section-padding section-divider">
      <div className="container-content">
        {/* Section header */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportStandard}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500/50" />
            <span className="text-overline text-accent-400 uppercase tracking-widest">
              Portfolio
            </span>
          </div>
          <h2 className="text-h1 md:text-display-sm text-text-primary mb-4">
            {work.headline}
          </h2>
          {work.subheadline && (
            <p className="text-body-lg text-text-secondary max-w-2xl">
              {work.subheadline}
            </p>
          )}
        </motion.div>

        {/* Featured flagship product */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportStandard}
          className="mb-8"
        >
          <FeaturedCard />
        </motion.div>

        {/* Secondary projects grid */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportStandard}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {work.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
