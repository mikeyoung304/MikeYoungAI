'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { FadeIn } from '@/components/ui/motion-fade';
import { contact } from '@/lib/content';
import { cn } from '@/lib/utils';
import { SPRING } from '@/lib/motion';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function SuccessCheckmark() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { scale: 0, opacity: 0 }}
      animate={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
      transition={SPRING}
      className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-sm"
    >
      <motion.svg
        className="w-10 h-10 text-accent-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        initial={shouldReduceMotion ? {} : { pathLength: 0 }}
        animate={shouldReduceMotion ? {} : { pathLength: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </motion.svg>
    </motion.div>
  );
}

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const shouldReduceMotion = useReducedMotion();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      description: formData.get('description'),
      timeline: formData.get('timeline'),
      budget: formData.get('budget'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormState('success');
    } catch {
      setFormState('error');
      setErrorMessage(
        'Something went wrong. Please try again or email directly.'
      );
    }
  }

  if (formState === 'success') {
    return (
      <section id="contact" className="section-padding bg-background-alt">
        <div className="container-content">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={SPRING}
            className="max-w-2xl mx-auto text-center"
          >
            <SuccessCheckmark />
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.3 }}
              className="text-h2 text-ink mb-4"
            >
              Message sent
            </motion.h2>
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.4 }}
              className="text-body-lg text-ink-muted"
            >
              I&apos;ll get back to you within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding section-divider bg-background-alt">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Intro */}
          <FadeIn direction="up">
            <h2 className="heading-ruled text-h2 text-ink mb-6">
              {contact.headline}
            </h2>
            <p className="text-body-lg text-ink-muted mb-4">
              {contact.description}
            </p>
            {contact.emphasis && (
              <p className="text-body-lg text-ink font-medium mb-8">
                {contact.emphasis}
              </p>
            )}
            <div className="space-y-4 text-body text-ink-muted">
              <p>
                {contact.fallback.text}{' '}
                <a
                  href={`mailto:${contact.fallback.email}`}
                  className="text-ink hover:text-primary transition-colors link-underline"
                >
                  {contact.fallback.email}
                </a>
              </p>
              {contact.location && <p>{contact.location}</p>}
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="up" delay={0.1}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={SPRING}
              className="glass rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-shadow"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-body-sm font-medium text-ink mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      disabled={formState === 'submitting'}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-body-sm font-medium text-ink mb-2"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Company name"
                      disabled={formState === 'submitting'}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-body-sm font-medium text-ink mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    disabled={formState === 'submitting'}
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-body-sm font-medium text-ink mb-2"
                  >
                    What do you need?
                  </label>
                  <Select
                    id="projectType"
                    name="projectType"
                    required
                    disabled={formState === 'submitting'}
                  >
                    <option value="">Select an option</option>
                    {contact.form.projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-body-sm font-medium text-ink mb-2"
                  >
                    Tell me about your project
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    placeholder="What are you building? What problem are you solving?"
                    rows={4}
                    disabled={formState === 'submitting'}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-body-sm font-medium text-ink mb-2"
                    >
                      Timeline
                    </label>
                    <Select
                      id="timeline"
                      name="timeline"
                      disabled={formState === 'submitting'}
                    >
                      <option value="">Select timeline</option>
                      {contact.form.timelines.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-body-sm font-medium text-ink mb-2"
                    >
                      Budget range
                    </label>
                    <Select
                      id="budget"
                      name="budget"
                      disabled={formState === 'submitting'}
                    >
                      <option value="">Select budget</option>
                      {contact.form.budgets.map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>

                {/* Error state */}
                <AnimatePresence>
                  {formState === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <p className="text-body-sm text-red-600">{errorMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  type="submit"
                  size="lg"
                  className={cn(
                    'w-full',
                    formState === 'submitting' && 'opacity-80'
                  )}
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                      <LoadingSpinner />
                      Sending...
                    </span>
                  ) : (
                    'Send message'
                  )}
                </Button>
              </form>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
