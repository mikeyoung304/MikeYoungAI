'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { contact } from '@/lib/content';
import { cn } from '@/lib/utils';
import { sectionReveal, fadeInUp, viewportStandard } from '@/lib/motion';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-5 w-5"
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

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

      if (!response.ok) throw new Error('Failed to send message');
      setFormState('success');
    } catch {
      setFormState('error');
      setErrorMessage('Something went wrong. Please try again or email directly.');
    }
  }

  if (formState === 'success') {
    return (
      <section id="contact" className="section-padding section-divider">
        <div className="container-content">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto text-center"
          >
            {/* Success icon with glow */}
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow-success">
              <svg
                className="w-10 h-10 text-success animate-check"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-h1 text-text-primary mb-4">Message sent</h2>
            <p className="text-body-lg text-text-secondary">
              I&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding section-divider">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Intro */}
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
                Contact
              </span>
            </div>

            <h2 className="text-h1 md:text-display-sm text-text-primary mb-6">
              {contact.headline}
            </h2>
            <p className="text-body-lg text-text-secondary mb-8 leading-relaxed">
              {contact.description}
            </p>

            {contact.emphasis && (
              <p className="text-body text-accent-400 mb-8 font-medium">
                {contact.emphasis}
              </p>
            )}

            <div className="pt-6 border-t border-border">
              <p className="text-body text-text-muted">
                {contact.fallback.text}{' '}
                <a
                  href={`mailto:${contact.fallback.email}`}
                  className="text-text-secondary hover:text-accent-400 transition-colors"
                >
                  {contact.fallback.email}
                </a>
              </p>
              {contact.responseTime && (
                <p className="text-body-sm text-text-subtle mt-2">
                  {contact.responseTime}
                </p>
              )}
            </div>
          </motion.div>

          {/* Form - glass card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportStandard}
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 glow-ring">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-body-sm font-medium text-text-primary mb-2">
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
                    <label htmlFor="company" className="block text-body-sm font-medium text-text-primary mb-2">
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
                  <label htmlFor="email" className="block text-body-sm font-medium text-text-primary mb-2">
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
                  <label htmlFor="projectType" className="block text-body-sm font-medium text-text-primary mb-2">
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
                  <label htmlFor="description" className="block text-body-sm font-medium text-text-primary mb-2">
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
                    <label htmlFor="timeline" className="block text-body-sm font-medium text-text-primary mb-2">
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
                    <label htmlFor="budget" className="block text-body-sm font-medium text-text-primary mb-2">
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

                {formState === 'error' && (
                  <div className="p-4 bg-error/10 border border-error/30 rounded-xl">
                    <p className="text-body-sm text-error">{errorMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  className={cn('w-full', formState === 'submitting' && 'opacity-70')}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
