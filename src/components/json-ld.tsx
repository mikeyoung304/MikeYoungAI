import { siteConfig, work } from '@/lib/content';

function PersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: 'Software Engineer & Technical Consultant',
    description: siteConfig.description,
    knowsAbout: [
      'Custom Software Development',
      'AI Applications',
      'Web Development',
      'Technical Consulting',
      'React',
      'Next.js',
      'TypeScript',
    ],
    sameAs: [
      // TODO: Add social profile URLs
      // 'https://linkedin.com/in/mikeyoung',
      // 'https://github.com/mikeyoung',
    ],
  };
}

function OrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    founder: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Custom AI Application Development',
      'Web Development',
      'Technical Consulting',
    ],
  };
}

function WebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  };
}

function CaseStudySchemas() {
  return work.caseStudies
    .filter((cs) => cs.featured)
    .map((caseStudy) => ({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: caseStudy.title,
      description: caseStudy.subtitle,
      author: {
        '@type': 'Person',
        name: siteConfig.name,
      },
      about: caseStudy.challenge,
      abstract: caseStudy.approach,
      keywords: caseStudy.technology.join(', '),
      url: caseStudy.link.href.startsWith('http')
        ? caseStudy.link.href
        : `${siteConfig.url}${caseStudy.link.href}`,
    }));
}

export function JsonLd() {
  const schemas = [
    PersonSchema(),
    OrganizationSchema(),
    WebSiteSchema(),
    ...CaseStudySchemas(),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
