import { ArrowDown, MessageSquare } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionFrame } from '../layout/SectionFrame';

export function Hero() {
  return (
    <SectionFrame id="home" className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
      {/* Subtle analytical radial glow motif (pure CSS, lightweight) */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-[340px] sm:max-w-[500px] md:max-w-[700px] h-[300px] md:h-[400px] bg-accent/8 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="flex flex-col items-start max-w-3xl lg:max-w-4xl">
          {/* Eyebrow / Professional Category */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface text-xs font-mono text-text-secondary mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span>DATA ANALYST · BUSINESS INTELLIGENCE &amp; DATA ANALYTICS</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-text-primary leading-[1.15] sm:leading-[1.1] mb-6">
            Turning Data Into Clear,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">
              Actionable Insight.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl lg:max-w-3xl mb-8 sm:mb-10">
            I’m Mudassir Javed, a Data Analyst with an MSc in Statistics, specializing in Business Intelligence and Data Analytics. I combine statistical thinking, analytical tools, and strong technical capabilities to turn structured data into useful insights and practical solutions.
          </p>

          {/* Calls to Action */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-16">
            <a
              href="#work"
              className="group inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-accent hover:bg-accent-hover rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-focus"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-text-primary bg-surface/80 hover:bg-surface border border-border-base hover:border-border-hover rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-focus"
            >
              <MessageSquare className="w-4 h-4 mr-2 text-text-tertiary" aria-hidden="true" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Supporting Metadata / Academic & Technical Focus */}
          <div className="w-full pt-8 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-text-tertiary">
            <span className="font-mono text-text-secondary uppercase tracking-wider text-[11px]">
              Key Competencies
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-surface border border-border-subtle font-mono text-text-secondary">
                MSc Statistics
              </span>
              <span className="px-2.5 py-1 rounded bg-surface border border-border-subtle font-mono text-text-secondary">
                Business Intelligence
              </span>
              <span className="px-2.5 py-1 rounded bg-surface border border-border-subtle font-mono text-text-secondary">
                Data Analytics
              </span>
              <span className="px-2.5 py-1 rounded bg-surface border border-border-subtle font-mono text-text-secondary">
                Python · SQL · Power BI
              </span>
            </div>
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}

export default Hero;
