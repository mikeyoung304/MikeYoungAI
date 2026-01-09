import { footer } from '@/lib/content';

export function Footer() {
  return (
    <footer className="py-8 md:py-12 border-t border-border">
      <div className="container-content">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-text-muted">{footer.copyright}</p>
          <div className="flex items-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.text}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-body-sm text-text-muted hover:text-text-primary transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
