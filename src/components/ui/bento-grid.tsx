'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { bentoStagger, cardReveal3D } from '@/lib/motion';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <motion.div
      variants={bentoStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'tall' | 'large';
  glow?: boolean;
  hover?: boolean;
}

export function BentoCard({
  children,
  className,
  size = 'default',
  glow = false,
  hover = true,
}: BentoCardProps) {
  const sizeClasses = {
    default: '',
    wide: 'md:col-span-2',
    tall: 'md:row-span-2',
    large: 'md:col-span-2 md:row-span-2',
  };

  return (
    <motion.div
      variants={cardReveal3D}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
      whileTap={hover ? { scale: 0.98 } : undefined}
      className={cn(
        'glass-card rounded-2xl p-6 md:p-8',
        'transition-all duration-400',
        hover && 'cursor-pointer',
        glow && 'glow-ring',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </motion.div>
  );
}

// Feature card with icon, title, and description
interface BentoFeatureProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  size?: 'default' | 'wide' | 'tall' | 'large';
  glow?: boolean;
}

export function BentoFeature({
  icon,
  title,
  description,
  className,
  size = 'default',
  glow = false,
}: BentoFeatureProps) {
  return (
    <BentoCard size={size} glow={glow} className={className}>
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4 text-accent-400">
          {icon}
        </div>
      )}
      <h3 className="text-h4 text-text-primary mb-2">{title}</h3>
      <p className="text-body text-text-secondary">{description}</p>
    </BentoCard>
  );
}

// Stat/metric card for hero section
interface BentoStatProps {
  value: string;
  label: string;
  className?: string;
}

export function BentoStat({ value, label, className }: BentoStatProps) {
  return (
    <motion.div
      variants={cardReveal3D}
      className={cn(
        'glass-card rounded-xl p-4 md:p-5 text-center',
        className
      )}
    >
      <div className="text-h2 font-bold text-text-primary mb-1">{value}</div>
      <div className="text-body-sm text-text-secondary">{label}</div>
    </motion.div>
  );
}

// Showcase card for case studies
interface BentoShowcaseProps {
  title: string;
  description: string;
  tag?: string;
  image?: string;
  className?: string;
  size?: 'default' | 'wide' | 'tall' | 'large';
  href?: string;
}

export function BentoShowcase({
  title,
  description,
  tag,
  image,
  className,
  size = 'default',
  href,
}: BentoShowcaseProps) {
  const Content = (
    <>
      {image && (
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-surface-2">
          {/* Image placeholder - implement with Next Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-elevated/80 to-transparent" />
        </div>
      )}
      {tag && (
        <span className="inline-block text-overline text-accent-400 uppercase mb-2">
          {tag}
        </span>
      )}
      <h3 className="text-h3 text-text-primary mb-2">{title}</h3>
      <p className="text-body text-text-secondary">{description}</p>
    </>
  );

  if (href) {
    return (
      <BentoCard size={size} glow className={className}>
        <a href={href} className="block">
          {Content}
        </a>
      </BentoCard>
    );
  }

  return (
    <BentoCard size={size} className={className}>
      {Content}
    </BentoCard>
  );
}
