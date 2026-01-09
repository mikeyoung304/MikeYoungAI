// ============================================================================
// CONTENT CONFIGURATION
// All site copy, case studies, and data in one place.
// Update this file to change content without touching components.
// ============================================================================

export const siteConfig = {
  name: 'Mike Young',
  title: 'Mike Young | Custom Software & AI Systems',
  description:
    'I build custom software and AI systems for companies that need it done right. 20 years in service businesses. Built products used by thousands.',
  url: 'https://mikeyoung.ai',
  email: 'hello@mikeyoung.ai',
  location: 'United States', // TODO: Update with your actual location
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const hero = {
  headline: 'I build custom software and AI systems for companies that need it done right.',
  subheadline:
    '20 years in service businesses. Built products used by thousands. Now I build for clients who can\'t afford to get it wrong.',
  primaryCta: {
    text: 'See the work',
    href: '#work',
  },
  secondaryCta: {
    text: 'Start a conversation',
    href: '#contact',
  },
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
  headline: 'Work',
  subheadline: 'Evidence of execution at the level you need.',
  caseStudies: [
    {
      id: 'get-handled',
      title: 'Get Handled',
      subtitle: 'Membership platform for service professionals',
      challenge:
        'Service professionals—photographers, consultants, coaches—are great at their craft but drowning in admin work. They need technology support but can\'t afford (or manage) enterprise solutions.',
      approach:
        'Built a membership platform that handles the tech side for solopreneurs. Revenue-share model aligns incentives. Members get done-for-you tech without becoming IT admins.',
      outcomes: [
        'X active members', // TODO: Add real metrics
        'Y in GMV processed',
        'Z hours of admin work eliminated monthly',
      ],
      technology: ['React', 'Express', 'Supabase', 'Stripe'],
      backstory:
        'I built Get Handled because I lived this problem. 20 years running photography and restaurant businesses taught me exactly what operators need—and what existing solutions get wrong.',
      link: {
        text: 'Visit gethandled.ai',
        href: 'https://gethandled.ai',
      },
      featured: true,
      // TODO: Add screenshot
      // image: '/work/get-handled.png',
    },
    {
      id: 'restaurant-os',
      title: 'Restaurant OS',
      subtitle: 'AI-powered point-of-sale for independent restaurants',
      challenge:
        'Independent restaurants fight with POS systems designed by people who\'ve never worked a dinner rush. They need modern technology that understands restaurant operations.',
      approach:
        'Building an AI-native POS system designed from the ground up for how restaurants actually work. Voice ordering, intelligent suggestions, operational insights.',
      outcomes: [
        'Currently piloting with X restaurants', // TODO: Add real metrics
        'Designed with decades of restaurant experience',
      ],
      technology: ['React', 'Next.js', 'Prisma', 'AI integrations'],
      backstory:
        'Years in restaurant kitchens taught me what operators actually need. This isn\'t software built by tech people guessing at restaurant problems—it\'s built by someone who\'s lived them.',
      link: {
        text: 'Learn more',
        href: '#contact',
      },
      featured: true,
      // TODO: Add screenshot
      // image: '/work/restaurant-os.png',
    },
    // TODO: Add client projects
    // {
    //   id: 'client-project-1',
    //   title: 'Client Project',
    //   subtitle: 'One-line description',
    //   challenge: 'What the client needed',
    //   approach: 'How you solved it',
    //   outcomes: ['Specific results'],
    //   technology: ['Stack'],
    //   link: { text: 'View the site', href: '#' },
    //   featured: false,
    // },
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
  headline: 'Let\'s Talk About Your Project',
  description:
    'I work with companies building custom applications, AI systems, and technical infrastructure. Typical engagements range from focused consulting sprints to full application development.',
  emphasis: 'If you\'re building something that needs to work, let\'s talk.',
  form: {
    projectTypes: [
      { value: 'ai-application', label: 'Custom AI Application' },
      { value: 'web-development', label: 'Web Development' },
      { value: 'consulting', label: 'Technical Consulting' },
      { value: 'other', label: 'Something else' },
    ],
    timelines: [
      { value: 'asap', label: 'ASAP (within 30 days)' },
      { value: '1-3-months', label: '1-3 months' },
      { value: '3-6-months', label: '3-6 months' },
      { value: 'exploring', label: 'Just exploring' },
    ],
    budgets: [
      { value: 'under-10k', label: 'Under $10k' },
      { value: '10k-25k', label: '$10k - $25k' },
      { value: '25k-50k', label: '$25k - $50k' },
      { value: '50k-100k', label: '$50k - $100k' },
      { value: '100k-plus', label: '$100k+' },
      { value: 'not-sure', label: 'Not sure yet' },
    ],
  },
  fallback: {
    text: 'Prefer email?',
    email: 'hello@mikeyoung.ai',
  },
  location: 'Based in the United States. Available for remote work worldwide.', // TODO: Update
  responseTime: 'I respond to all inquiries within 24-48 hours.',
};

// ============================================================================
// NAVIGATION
// ============================================================================

export const navigation = {
  links: [
    { text: 'Services', href: '#services' },
    { text: 'Work', href: '#work' },
    { text: 'About', href: '#about' },
    { text: 'Thinking', href: '#thinking' },
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
