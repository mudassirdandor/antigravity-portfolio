import { Container } from '../layout/Container';
import { SectionFrame } from '../layout/SectionFrame';
import { EXPERIENCES } from '../../data/experience';

export function Experience() {
  return (
    <SectionFrame id="experience" className="border-t border-border-subtle py-16 sm:py-20 md:py-24 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent tracking-wider uppercase mb-3">
            // Experience
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight leading-snug mb-4">
            Experience shaped by data, systems, and practical problem solving.
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            A concise timeline of practical experience across field data collection, structured information management, and applied technical systems.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-border-subtle/80 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10 sm:space-y-12">
          {EXPERIENCES.map((exp) => (
            <article key={exp.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-surface border-2 border-accent group-hover:bg-accent transition-colors"
                aria-hidden="true"
              />

              <div className="p-6 sm:p-7 rounded-xl border border-border-subtle bg-surface hover:border-border-base transition-colors">
                {/* Meta Row: Period & Location */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    {exp.period}
                  </span>
                  <span className="font-mono text-[11px] text-text-tertiary">
                    {exp.location}
                  </span>
                </div>

                {/* Role & Organization */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary tracking-tight mt-3 mb-1 group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <div className="text-xs sm:text-sm font-medium text-text-secondary mb-4">
                  {exp.organization}
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                  {exp.summary}
                </p>

                {/* Highlights / Skills */}
                <div className="pt-3 border-t border-border-subtle flex flex-wrap gap-1.5">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-surface-elevated text-text-secondary border border-border-subtle"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SectionFrame>
  );
}

export default Experience;
