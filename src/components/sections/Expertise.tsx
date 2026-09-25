import { Container } from '../layout/Container';
import { SectionFrame } from '../layout/SectionFrame';
import { EXPERTISE_PILLARS } from '../../data/expertise';

export function Expertise() {
  return (
    <SectionFrame id="expertise" className="border-t border-border-subtle py-16 sm:py-20 md:py-24 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent tracking-wider uppercase mb-3">
            // Expertise
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight leading-snug mb-4">
            Where statistics meets technology.
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            My work sits at the intersection of statistical reasoning, business intelligence, data analysis, and practical visual communication.
          </p>
        </div>

        {/* Four Analytical Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {EXPERTISE_PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              className="group flex flex-col justify-between p-6 sm:p-7 md:p-8 rounded-xl border border-border-subtle bg-surface hover:border-border-base transition-colors"
            >
              <div>
                {/* Pillar Index & Focus Area */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xs font-semibold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    {pillar.pillarNumber}
                  </span>
                  <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider text-right">
                    {pillar.focus}
                  </span>
                </div>

                {/* Pillar Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary tracking-tight mb-3 group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>

                {/* Pillar Summary */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {pillar.summary}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="pt-4 border-t border-border-subtle">
                <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider block mb-2.5">
                  Core Competencies
                </span>
                <ul
                  className="flex flex-wrap gap-1.5 list-none p-0 m-0"
                  aria-label={`Core competencies for ${pillar.title}`}
                >
                  {pillar.capabilities.map((cap) => (
                    <li key={cap}>
                      <span className="inline-block px-2.5 py-1 text-[11px] font-mono rounded bg-surface-elevated text-text-secondary border border-border-subtle">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SectionFrame>
  );
}

export default Expertise;
