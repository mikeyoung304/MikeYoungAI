'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { AnimatedSection } from '@/components/ui/animated-section';
import { contact } from '@/lib/content';
import { cn } from '@/lib/utils';

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
  return (
    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
      <svg
        className="w-8 h-8 text-accent-600 animate-check"
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
    </div>
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

    // TODO: Track form submission event
    console.log('[Analytics] Form submitted:', {
      projectType: data.projectType,
      timeline: data.timeline,
    });

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
          <div className="max-w-2xl mx-auto text-center">
            <SuccessCheckmark />
            <h2 className="text-h2 text-text-primary mb-4 animate-fade-in-up-2">
              Message sent
            </h2>
            <p className="text-body-lg text-text-secondary animate-fade-in-up-3">
              {contact.responseTime}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-background-alt">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Intro */}
          <AnimatedSection animation="fade-up">
            <h2 className="text-h2 text-text-primary mb-6">
              {contact.headline}
            </h2>
            <p className="text-body-lg text-text-secondary mb-4">
              {contact.description}
            </p>
            <p className="text-body-lg text-text-primary font-medium mb-8">
              {contact.emphasis}
            </p>
            <div className="space-y-4 text-body text-text-secondary">
              <p>
                {contact.fallback.text}{' '}
                <a
                  href={`mailto:${contact.fallback.email}`}
                  className="text-text-primary hover:text-accent-600 transition-colors link-underline"
                >
                  {contact.fallback.email}
                </a>
              </p>
              <p>{contact.location}</p>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="bg-white rounded-2xl border border-border p-6 md:p-8 hover:shadow-medium transition-shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-body-sm font-medium text-text-primary mb-2"
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
                      className="block text-body-sm font-medium text-text-primary mb-2"
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
                    className="block text-body-sm font-medium text-text-primary mb-2"
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
                    className="block text-body-sm font-medium text-text-primary mb-2"
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
                    className="block text-body-sm font-medium text-text-primary mb-2"
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
                      className="block text-body-sm font-medium text-text-primary mb-2"
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
                      className="block text-body-sm font-medium text-text-primary mb-2"
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

                {formState === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
                    <p className="text-body-sm text-red-600">{errorMessage}</p>
                  </div>
                )}

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
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
