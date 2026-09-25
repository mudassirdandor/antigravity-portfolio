import { Container } from '../layout/Container';
import { SectionFrame } from '../layout/SectionFrame';
import { PHILOSOPHY_PRINCIPLES } from '../../data/philosophy';

export function ProfessionalPhilosophy() {
  return (
    <SectionFrame id="approach" className="border-t border-border-subtle py-16 sm:py-20 md:py-24 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent tracking-wider uppercase mb-3">
            // Professional Philosophy
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight leading-snug mb-4">
            How I Approach Data
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Data analysis is not simply about generating charts or calculating numbers. It begins with understanding the problem, examining the evidence, and communicating what the data actually supports.
          </p>
        </div>

        {/* Three Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PHILOSOPHY_PRINCIPLES.map((principle) => (
            <article
              key={principle.id}
              className="p-6 sm:p-8 rounded-xl border border-border-subtle bg-surface hover:border-border-base transition-colors flex flex-col justify-between group"
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-semibold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    {principle.principleNumber}
                  </span>
                  <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider">
                    {principle.tag}
                  </span>
                </div>

                {/* Principle Title */}
                <h3 className="font-display font-bold text-xl text-text-primary tracking-tight mb-3 group-hover:text-accent transition-colors">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {principle.description}
                </p>
              </div>

              {/* Core Takeaway */}
              <div className="pt-4 border-t border-border-subtle">
                <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider block mb-1.5">
                  Analytical Standard
                </span>
                <p className="font-mono text-xs text-text-primary font-medium">
                  {principle.takeaway}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SectionFrame>
  );
}

export default ProfessionalPhilosophy;
