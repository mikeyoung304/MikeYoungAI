// ============================================================================
// CONTENT CONFIGURATION
// All site copy, case studies, and data in one place.
// Update this file to change content without touching components.
// ============================================================================

export const siteConfig = {
  name: 'Mike Young',
  title: 'Mike Young | Builder of Calm, Reliable Web Systems',
  description:
    'I design and build websites and applications for organizations that need clarity, credibility, and stability — not noise.',
  url: 'https://mikeyoung.ai',
  email: 'hello@mikeyoung.ai',
  location: 'United States',
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const hero = {
  headline: 'Builder of calm, reliable web systems.',
  subheadline:
    'I design and build websites and applications for organizations that need clarity, credibility, and stability — not noise.',
  selectedWorkTagline: 'Selected work in infrastructure, advocacy, and operational systems.',
  primaryCta: {
    text: 'Book a call',
    href: '#contact',
  },
  secondaryCta: {
    text: 'View work',
    href: '#work',
  },
  trustMetrics: [
    { value: 20, suffix: '+', label: 'Years Experience' },
    { value: 3, suffix: '', label: 'Products Shipped' },
    { value: 500, suffix: '+', label: 'Businesses Served' },
  ],
};

// ============================================================================
// PROOF BAR / CREDIBILITY SECTION
// Supports three variants: 'testimonial' | 'metrics' | 'logos'
// ============================================================================

export const proofBar = {
  variant: 'testimonial' as 'testimonial' | 'metrics' | 'logos',

  // Testimonial variant
  testimonial: {
    quote:
      'Mike didn\'t just build our system—he understood our business in a way other developers never did.',
    author: 'Client Name', // TODO: Replace with real testimonial
    title: 'Title',
    company: 'Company',
    rating: 5,
  },

  // Metrics variant (alternative)
  metrics: [
    { value: '20+', label: 'Years in service businesses' },
    { value: '3', label: 'Products shipped' },
    { value: '500+', label: 'Businesses served' }, // TODO: Update with real numbers
  ],

  // Logos variant (alternative)
  logos: {
    headline: 'Trusted by companies building serious software',
    items: [] as { name: string; src: string }[],
    // TODO: Add client logos
    // items: [
    //   { name: 'Company Name', src: '/logos/company.svg' },
    // ],
  },
};

// ============================================================================
// SERVICES SECTION
// ============================================================================

export const services = {
  headline: 'What I Build',
  items: [
    {
      id: 'ai-applications',
      title: 'Custom AI Applications',
      description:
        'End-to-end development of AI-powered tools and automation systems. From concept to production.',
      features: [
        'Bespoke AI solutions (not off-the-shelf)',
        'Integration with existing systems',
        'Production-grade reliability',
      ],
      cta: {
        text: 'Discuss a project',
        href: '#contact',
      },
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description:
        'Modern web applications and sites built with a production-first mindset. React, Next.js, TypeScript, and the stack that fits your needs.',
      features: [
        'Professional web presence',
        'Complex web applications',
        'Performance and reliability at scale',
      ],
      cta: {
        text: 'Discuss a project',
        href: '#contact',
      },
    },
    {
      id: 'consulting',
      title: 'Technical Consulting',
      description:
        'Strategy, architecture review, and implementation guidance. Bring in expertise without the agency overhead.',
      features: [
        'AI implementation strategy',
        'Technical architecture decisions',
        'Hands-on expert guidance',
      ],
      cta: {
        text: 'Discuss a project',
        href: '#contact',
      },
    },
  ],
};

// ============================================================================
// HOW I WORK SECTION
// ============================================================================

export const process = {
  headline: 'How I Work',
  steps: [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understand your business, goals, and technical requirements.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Define the approach, architecture, and timeline.',
    },
    {
      number: '03',
      title: 'Build',
      description: 'Develop iteratively with regular check-ins and demos.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Deploy, monitor, and refine until it works perfectly.',
    },
  ],
};

// ============================================================================
// WORK / CASE STUDIES SECTION
// ============================================================================

export const work = {
  headline: 'Selected Work',
  subheadline: '',
  projects: [
    {
      id: 'restaurant-os',
      title: 'Restaurant OS',
      description: 'AI-powered point-of-sale designed by someone who\'s actually worked a dinner rush.',
      link: {
        text: 'Learn more',
        href: '#contact',
      },
    },
    {
      id: 'get-handled',
      title: 'Get Handled',
      description: 'Membership platform for service professionals who need technology support without becoming IT admins.',
      link: {
        text: 'gethandled.ai',
        href: 'https://gethandled.ai',
      },
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Operational web apps and internal tools built for people who don\'t have time to fight their software.',
      link: {
        text: 'Discuss a project',
        href: '#contact',
      },
    },
  ],
};

// ============================================================================
// ABOUT SECTION
// ============================================================================

export const about = {
  headline: 'About',
  content: [
    'I spent 20 years running service businesses—photography studios, restaurants, the kind of operations where one bad software decision costs you real money and real customers.',
    'I learned to code because I was tired of software that didn\'t understand how my businesses actually worked.',
    'That\'s why I built Get Handled: a platform for service professionals who need technology support without becoming IT admins. It\'s why I\'m building Restaurant OS: a POS system designed by someone who\'s actually worked a dinner rush.',
    'Now I build custom software and AI systems for clients who need someone who understands both the technology AND the operation.',
  ],
  emphasis: 'The background isn\'t a curiosity. It\'s why the software actually works.',
  specifics: [
    '20+ years running service businesses',
    'Built and shipped 3 production software products',
    'Thousands of users served across platforms',
    'Full-stack: React, Node, TypeScript, AI/ML integrations',
  ],
  links: [
    // { text: 'Download resume', href: '/resume.pdf' },
    { text: 'Connect on LinkedIn', href: 'https://linkedin.com/in/mikeyoung' }, // TODO: Update URL
  ],
};

// ============================================================================
// THINKING / ESSAYS SECTION
// ============================================================================

export const thinking = {
  headline: 'Thinking',
  subheadline: 'Perspectives on building software that works.',
  essays: [
    {
      id: 'insider-perspective',
      title: 'What I Learned Building Software After 20 Years in Service Businesses',
      summary:
        'What most software gets wrong about service businesses—and how living on both sides changed how I build.',
      // TODO: Write full essay
      // href: '/thinking/insider-perspective',
      href: '#',
      published: false,
    },
    {
      id: 'contrarian-take',
      title: 'Why Most Business Software Fails Service Professionals',
      summary:
        'The fundamental misunderstanding in enterprise software, and what good software for operators actually looks like.',
      // TODO: Write full essay
      // href: '/thinking/contrarian-take',
      href: '#',
      published: false,
    },
    {
      id: 'vertical-software',
      title: 'The Case for Vertical Software',
      summary:
        'Why specialized tools built by industry insiders outperform generic solutions.',
      // TODO: Write full essay
      // href: '/thinking/vertical-software',
      href: '#',
      published: false,
    },
  ],
};

// ============================================================================
// CONTACT SECTION
// ============================================================================

export const contact = {
  headline: 'Let\'s Talk',
  description:
    'If you\'re responsible for something that needs to be communicated clearly — and maintained calmly — we should talk.',
  emphasis: '',
  form: {
    projectTypes: [
      { value: 'website', label: 'Website' },
      { value: 'web-application', label: 'Web Application' },
      { value: 'other', label: 'Something else' },
    ],
    timelines: [
      { value: 'asap', label: 'ASAP' },
      { value: '1-3-months', label: '1-3 months' },
      { value: 'exploring', label: 'Just exploring' },
    ],
    budgets: [
      { value: '10k-25k', label: '$10k - $25k' },
      { value: '25k-50k', label: '$25k - $50k' },
      { value: '50k-plus', label: '$50k+' },
      { value: 'not-sure', label: 'Not sure yet' },
    ],
  },
  fallback: {
    text: 'Prefer email?',
    email: 'hello@mikeyoung.ai',
  },
  location: '',
  responseTime: '',
};

// ============================================================================
// NAVIGATION
// ============================================================================

export const navigation = {
  links: [
    { text: 'Work', href: '#work' },
    { text: 'Contact', href: '#contact' },
  ],
};

// ============================================================================
// FOOTER
// ============================================================================

export const footer = {
  copyright: `© ${new Date().getFullYear()} Mike Young. All rights reserved.`,
  links: [
    { text: 'LinkedIn', href: 'https://linkedin.com/in/mikeyoung' }, // TODO: Update
    { text: 'GitHub', href: 'https://github.com/mikeyoung' }, // TODO: Update
    { text: 'Email', href: 'mailto:hello@mikeyoung.ai' },
  ],
};
