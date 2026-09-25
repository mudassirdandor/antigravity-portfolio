import { Container } from './Container';
import { FOOTER_NAV_ITEMS, BRAND_INFO, NAV_CTA } from '../../data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface border-t border-border-subtle py-12 md:py-16 mt-auto">
      <Container>
        <div className="flex flex-col gap-10">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            {/* Identity & Career Positioning */}
            <div className="flex flex-col gap-2.5 max-w-md">
              <span className="font-display font-bold text-lg text-text-primary tracking-tight">
                {BRAND_INFO.name}
              </span>
              <p className="text-sm text-text-secondary leading-relaxed">
                {BRAND_INFO.statement}
              </p>
              <p className="font-mono text-xs text-text-tertiary tracking-wide">
                {BRAND_INFO.narrative}
              </p>
            </div>

            {/* Navigation & CTA Group */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <nav
                aria-label="Footer Navigation"
                className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary"
              >
                {FOOTER_NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-focus rounded-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href={NAV_CTA.href}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-focus self-start sm:self-auto"
              >
                {NAV_CTA.label}
              </a>
            </div>
          </div>

          {/* Bottom Bar / Copyright */}
          <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-tertiary">
            <p>© {currentYear} Mudassir Javed. All rights reserved.</p>
            <p className="font-mono">Analytical Precision · Technical Execution</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
