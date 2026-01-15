// ============================================================================
// CONTENT CONFIGURATION
// All site copy, case studies, and data in one place.
// Story-driven, personal narrative style.
// ============================================================================

export const siteConfig = {
  name: 'Mike Young',
  title: 'Mike Young | Software That Understands Operations',
  description:
    'Twenty years in the trenches running service businesses. Now I build the software I wish existed.',
  url: 'https://mikeyoung.ai',
  email: 'hello@mikeyoung.ai',
  location: 'United States',
};

// ============================================================================
// HERO SECTION
// Story-driven, personal narrative
// ============================================================================

export const hero = {
  headline: 'Twenty years in the trenches. Now I build the software I wish existed.',
  subheadline:
    'I ran restaurants and photography studios for two decades. I learned to code because existing software never understood how real businesses actually work. Now I build custom systems for people like me.',
  selectedWorkTagline: 'Software born from real problems, not spec documents.',
  primaryCta: {
    text: "Let's talk",
    href: '#contact',
  },
  secondaryCta: {
    text: 'See my work',
    href: '#work',
  },
  trustMetrics: [
    { value: '20+', label: 'Years in Operations' },
    { value: '3', label: 'Products Shipped' },
    { value: '500+', label: 'Businesses Served' },
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
      "Mike didn't just build our system—he understood our business in a way other developers never did. Because he's lived it.",
    author: 'Client Name', // TODO: Replace with real testimonial
    title: 'Title',
    company: 'Company',
    rating: 5,
  },

  // Metrics variant (alternative)
  metrics: [
    { value: '20+', label: 'Years running service businesses' },
    { value: '3', label: 'Production products shipped' },
    { value: '500+', label: 'Businesses served' },
  ],

  // Logos variant (alternative)
  logos: {
    headline: 'Trusted by operators who need software that works',
    items: [] as { name: string; src: string }[],
  },
};

// ============================================================================
// SERVICES SECTION
// ============================================================================

export const services = {
  headline: 'What I Build',
  subheadline: 'Software for people who can\'t afford to fight their tools.',
  items: [
    {
      id: 'ai-applications',
      title: 'Custom AI Applications',
      description:
        'AI that actually helps—not AI for AI\'s sake. I build automation and intelligence into systems where it creates real leverage.',
      features: [
        'Built for your specific workflow',
        'Integrates with what you already use',
        'Production-grade from day one',
      ],
      cta: {
        text: "Let's build something",
        href: '#contact',
      },
    },
    {
      id: 'web-development',
      title: 'Operational Web Apps',
      description:
        'The kind of software that runs your business—not the kind that runs your patience. Built by someone who knows the difference.',
      features: [
        'React, Next.js, TypeScript',
        'Designed for real operators',
        'Fast, reliable, maintainable',
      ],
      cta: {
        text: "Let's build something",
        href: '#contact',
      },
    },
    {
      id: 'consulting',
      title: 'Technical Strategy',
      description:
        'You need an expert who understands both the technology AND your operation. I\'ve been on your side of the table.',
      features: [
        'AI implementation guidance',
        'Architecture decisions',
        'No-BS technical advice',
      ],
      cta: {
        text: "Let's talk",
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
  subheadline: 'No mystery. No surprises. Just clear progress toward software that works.',
  steps: [
    {
      number: '01',
      title: 'Understand',
      description:
        'I dig into your operation—not just your requirements doc. The context matters as much as the spec.',
    },
    {
      number: '02',
      title: 'Design',
      description:
        'Architecture and approach that fits how you actually work, not how software thinks you should.',
    },
    {
      number: '03',
      title: 'Build',
      description:
        'Iterative development with real demos. You see progress weekly, not monthly.',
    },
    {
      number: '04',
      title: 'Ship',
      description:
        'Launch, monitor, and refine. I stick around until it works like it should.',
    },
  ],
};

// ============================================================================
// WORK / CASE STUDIES SECTION
// ============================================================================

export const work = {
  headline: "What I've Built",
  subheadline: 'Software born from real problems, not spec documents.',
  projects: [
    {
      id: 'restaurant-os',
      title: 'Restaurant OS',
      tag: 'Product',
      description:
        'A point-of-sale system designed by someone who has actually worked a dinner rush. Built for operators who need their tech to disappear, not demand attention.',
      story: '3,000+ dinner rushes informed every design decision.',
      link: {
        text: 'Learn more',
        href: '#contact',
      },
    },
    {
      id: 'get-handled',
      title: 'Get Handled',
      tag: 'Product',
      description:
        'Technology support for service professionals who need help without becoming IT admins. Membership-based, human-first.',
      story: 'Built because I watched talented people lose hours to IT busywork.',
      link: {
        text: 'Visit gethandled.ai',
        href: 'https://gethandled.ai',
      },
    },
    {
      id: 'client-work',
      title: 'Client Projects',
      tag: 'Services',
      description:
        'Operational web apps and internal tools for clients who need software that works on a Friday at 7pm—not just in demos.',
      story: '',
      link: {
        text: 'Start a conversation',
        href: '#contact',
      },
    },
  ],
};

// ============================================================================
// ABOUT SECTION
// Story-driven, founder energy
// ============================================================================

export const about = {
  headline: 'The Origin Story',
  content: [
    'I still remember the night our POS system crashed during a 200-cover dinner service. We hand-wrote tickets for three hours while customers waited. The software company said we were "using it wrong."',
    "That was the night I decided to learn to code.",
    "Twenty years of running service businesses taught me something most developers never learn: the software you use is either a multiplier or a tax. There is no neutral.",
    "Now I build systems for people who can't afford to fight their tools. Restaurant OS was born from 3,000 dinner rushes. Get Handled came from watching talented professionals lose hours to IT busywork.",
  ],
  emphasis:
    "I don't build software that works in demos. I build software that works at 7pm on a Friday when everything else is breaking.",
  specifics: [
    '20+ years running service businesses',
    '3 production software products shipped',
    'Thousands of users across platforms',
    'Full-stack: React, Node, TypeScript, AI/ML',
  ],
  links: [
    { text: 'Connect on LinkedIn', href: 'https://linkedin.com/in/mikeyoung' }, // TODO: Update URL
  ],
};

// ============================================================================
// THINKING / ESSAYS SECTION
// ============================================================================

export const thinking = {
  headline: 'Thinking',
  subheadline: 'Perspectives on building software that actually works.',
  essays: [
    {
      id: 'insider-perspective',
      title: 'What I Learned Building Software After 20 Years in Service Businesses',
      summary:
        'What most software gets wrong about service businesses—and how living on both sides changed how I build.',
      href: '#',
      published: false,
    },
    {
      id: 'contrarian-take',
      title: 'Why Most Business Software Fails Service Professionals',
      summary:
        'The fundamental misunderstanding in enterprise software, and what good software for operators actually looks like.',
      href: '#',
      published: false,
    },
    {
      id: 'vertical-software',
      title: 'The Case for Vertical Software',
      summary:
        'Why specialized tools built by industry insiders outperform generic solutions.',
      href: '#',
      published: false,
    },
  ],
};

// ============================================================================
// CONTACT SECTION
// ============================================================================

export const contact = {
  headline: "Let's Build Something",
  description:
    "If you're building something that needs to work in the real world—not just in demos—I'd like to hear about it.",
  emphasis: 'I respond to every message personally.',
  form: {
    projectTypes: [
      { value: 'website', label: 'Website' },
      { value: 'web-application', label: 'Web Application' },
      { value: 'ai-system', label: 'AI System' },
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
  responseTime: 'Usually within 24 hours.',
};

// ============================================================================
// NAVIGATION
// ============================================================================

export const navigation = {
  links: [
    { text: 'Work', href: '#work' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' },
  ],
};

// ============================================================================
// FOOTER
// ============================================================================

export const footer = {
  copyright: `© ${new Date().getFullYear()} Mike Young. All rights reserved.`,
  tagline: 'Software that understands operations.',
  links: [
    { text: 'LinkedIn', href: 'https://linkedin.com/in/mikeyoung' }, // TODO: Update
    { text: 'GitHub', href: 'https://github.com/mikeyoung' }, // TODO: Update
    { text: 'Email', href: 'mailto:hello@mikeyoung.ai' },
  ],
};
