'use client';

import { motion } from 'framer-motion';
import { work } from '@/lib/content';

function ProjectCard({
  project,
  index,
}: {
  project: (typeof work.projects)[0];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1,
      }}
      // System card: lifts on hover for depth
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      {/* System card motif: light border, soft radius, slight shadow */}
      <div className="h-full p-6 bg-white border border-border rounded-xl shadow-soft transition-shadow duration-400 hover:shadow-medium">
        <h3 className="text-h4 text-text-primary mb-3 group-hover:text-accent-700 transition-colors duration-400">
          {project.title}
        </h3>

        <p className="text-body text-text-secondary mb-6">
          {project.description}
        </p>

        <a
          href={project.link.href}
          className="inline-flex items-center gap-2 text-body-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-400"
        >
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
        </a>
      </div>
    </motion.article>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="section-padding">
      <div className="container-content">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <h2 className="text-h2 text-text-primary">{work.headline}</h2>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {work.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
