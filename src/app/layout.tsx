import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

// Display font for headings - more distinctive than Geist
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mikeyoung.ai'),
  title: {
    default: 'Mike Young | Custom Software & AI Systems',
    template: '%s | Mike Young',
  },
  description:
    'I build custom software and AI systems for companies that need it done right. 20 years in service businesses. Built products used by thousands.',
  keywords: [
    'custom software development',
    'AI systems',
    'technical consulting',
    'web development',
    'enterprise software',
  ],
  authors: [{ name: 'Mike Young' }],
  creator: 'Mike Young',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mikeyoung.ai',
    siteName: 'Mike Young',
    title: 'Mike Young | Custom Software & AI Systems',
    description:
      'I build custom software and AI systems for companies that need it done right. 20 years in service businesses. Built products used by thousands.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mike Young - Custom Software & AI Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mike Young | Custom Software & AI Systems',
    description:
      'I build custom software and AI systems for companies that need it done right.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
