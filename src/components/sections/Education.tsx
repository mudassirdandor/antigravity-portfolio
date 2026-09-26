import { Container } from '../layout/Container';
import { SectionFrame } from '../layout/SectionFrame';
import { EDUCATION_ITEMS } from '../../data/education';
import { Chip } from '../ui/Chip';

export function Education() {
  const msc = EDUCATION_ITEMS.find((item) => item.id === 'msc-statistics');
  const bsc = EDUCATION_ITEMS.find((item) => item.id === 'bsc-statistics');

  return (
    <SectionFrame id="education" className="border-t border-border-subtle py-16 sm:py-20 md:py-24 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs text-pine tracking-wider uppercase mb-3">
            // Education
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-pine tracking-tight leading-snug mb-4">
            A quantitative academic foundation.
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Formal statistical education provides the mathematical rigor, analytical reasoning, and empirical mindset behind my data analytics work.
          </p>
        </div>

        {/* Education Grid: MSc prominently featured alongside BSc */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Prominent MSc Card */}
          {msc && (
            <article className="lg:col-span-7 xl:col-span-8 relative p-6 sm:p-8 rounded-xl border border-border-subtle bg-surface hover:border-soft-green transition-all shadow-xs flex flex-col justify-between">
              {/* Subtle top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-pine rounded-t-xl"
                aria-hidden="true"
              />

              <div>
                {/* Meta Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-semibold text-pine px-2.5 py-0.5 rounded bg-eucalyptus border border-border-subtle">
                    Primary Academic Credential
                  </span>
                  <span className="font-mono text-xs text-text-tertiary">
                    {msc.year}
                  </span>
                </div>

                {/* Degree Title & Institution */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-pine tracking-tight mb-1">
                  {msc.degree}
                </h3>
                {msc.institution && (
                  <p className="text-sm font-medium text-text-secondary mb-1">
                    {msc.institution}
                  </p>
                )}
                {msc.grade && (
                  <p className="font-mono text-xs text-pine font-medium mb-4">
                    {msc.grade}
                  </p>
                )}

                {/* Summary */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {msc.summary}
                </p>
              </div>

              {/* Core Competencies */}
              <div className="pt-4 border-t border-border-subtle">
                <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider block mb-2.5">
                  Core Quantitative Competencies
                </span>
                <div className="flex flex-wrap gap-2">
                  {msc.highlights.map((h) => (
                    <Chip key={h} variant="eucalyptus">
                      {h}
                    </Chip>
                  ))}
                </div>
              </div>
            </article>
          )}

          {/* BSc Card */}
          {bsc && (
            <article className="lg:col-span-5 xl:col-span-4 p-6 sm:p-8 rounded-xl border border-border-subtle bg-surface hover:border-soft-green transition-all shadow-xs flex flex-col justify-between">
              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-semibold text-text-tertiary px-2 py-0.5 rounded bg-eucalyptus/50 border border-border-subtle">
                    Undergraduate
                  </span>
                  <span className="font-mono text-xs text-text-tertiary">
                    {bsc.year}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-pine tracking-tight mb-3">
                  {bsc.degree}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {bsc.summary}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-border-subtle">
                <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider block mb-2.5">
                  Foundational Knowledge
                </span>
                <div className="flex flex-wrap gap-2">
                  {bsc.highlights.map((h) => (
                    <Chip key={h} variant="eucalyptus">
                      {h}
                    </Chip>
                  ))}
                </div>
              </div>
            </article>
          )}
        </div>
      </Container>
    </SectionFrame>
  );
}

export default Education;
