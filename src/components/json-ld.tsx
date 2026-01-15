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

function ProjectSchemas() {
  return work.projects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    url: project.link.href.startsWith('http')
      ? project.link.href
      : `${siteConfig.url}${project.link.href}`,
  }));
}

export function JsonLd() {
  const schemas = [
    PersonSchema(),
    OrganizationSchema(),
    WebSiteSchema(),
    ...ProjectSchemas(),
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
