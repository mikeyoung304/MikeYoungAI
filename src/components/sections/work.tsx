'use client';

import { motion } from 'framer-motion';
import { work } from '@/lib/content';
import { BentoGrid } from '@/components/ui/bento-grid';
import { sectionReveal, viewportStandard, cardReveal3D } from '@/lib/motion';

function ProjectCard({
  project,
  size = 'default',
}: {
  project: (typeof work.projects)[0];
  size?: 'default' | 'wide' | 'tall' | 'large';
}) {
  const sizeClasses = {
    default: '',
    wide: 'md:col-span-2',
    tall: 'md:row-span-2',
    large: 'md:col-span-2 md:row-span-2',
  };

  return (
    <motion.article
      variants={cardReveal3D}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.98 }}
      className={`group h-full ${sizeClasses[size]}`}
    >
      <div className="h-full glass-card rounded-2xl p-6 md:p-8 flex flex-col">
        {/* Tag */}
        {project.tag && (
          <span className="text-overline text-accent-400 uppercase tracking-widest mb-3">
            {project.tag}
          </span>
        )}

        {/* Title */}
        <h3 className="text-h3 text-text-primary mb-3 group-hover:text-accent-400 transition-colors duration-400">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-body text-text-secondary mb-6 flex-grow">
          {project.description}
        </p>

        {/* Story hook (if available) */}
        {project.story && (
          <p className="text-body-sm text-text-muted italic mb-6 border-l-2 border-accent-500/30 pl-4">
            {project.story}
          </p>
        )}

        {/* Link */}
        <a
          href={project.link.href}
          className="inline-flex items-center gap-2 text-body-sm font-medium text-text-secondary hover:text-accent-400 transition-colors duration-400 group/link"
        >
          {project.link.text}
          <svg
            className="w-4 h-4 transition-transform duration-400 group-hover/link:translate-x-1"
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
        </a>
      </div>
    </motion.article>
  );
}

export function WorkSection() {
  // Determine card sizes for bento layout
  const cardSizes: ('default' | 'wide' | 'tall' | 'large')[] = ['large', 'default', 'default'];

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

        {/* Bento Grid Layout */}
        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {work.projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              size={cardSizes[idx] || 'default'}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
