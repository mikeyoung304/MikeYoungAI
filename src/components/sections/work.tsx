'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { work } from '@/lib/content';
import { FadeIn } from '@/components/ui/motion-fade';
import {
  staggerContainer,
  fadeInUp,
  cardHover,
  cardTap,
  SPRING_SNAPPY,
} from '@/lib/motion';

function ProjectCard({
  project,
  index,
}: {
  project: (typeof work.projects)[0];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={shouldReduceMotion ? undefined : cardHover}
      whileTap={shouldReduceMotion ? undefined : cardTap}
      className="h-full glass rounded-2xl overflow-hidden cursor-pointer group shadow-card hover:shadow-elevated transition-shadow"
    >
      <div className="h-full p-6 flex flex-col">
        {/* Project Number Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-light text-primary text-sm font-semibold">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-h4 text-ink mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-body text-ink-muted mb-6 flex-grow">
          {project.description}
        </p>

        {/* Link with animated arrow */}
        <a
          href={project.link.href}
          className="inline-flex items-center gap-2 text-body-sm font-medium text-ink hover:text-primary transition-colors group/link"
        >
          {project.link.text}
          <motion.svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            whileHover={shouldReduceMotion ? undefined : { x: 4 }}
            transition={SPRING_SNAPPY}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        </a>

        {/* Animated gradient bar at bottom */}
        <div className="h-1 mt-4 rounded-full bg-gradient-to-r from-border via-border to-border group-hover:from-primary/40 group-hover:via-accent group-hover:to-primary/40 transition-all duration-500" />
      </div>
    </motion.div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="section-padding section-divider">
      <div className="container-content">
        {/* Section Header */}
        <FadeIn direction="left" className="mb-12">
          <h2 className="heading-ruled text-h2 text-ink">{work.headline}</h2>
          {work.subheadline && (
            <p className="mt-4 text-body-lg text-ink-muted max-w-2xl">
              {work.subheadline}
            </p>
          )}
        </FadeIn>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {work.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
