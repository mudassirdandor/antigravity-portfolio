import { Container } from '../layout/Container';
import { SectionFrame } from '../layout/SectionFrame';
import { EXPERTISE_PILLARS, type ExpertisePillar } from '../../data/expertise';
import { Chip } from '../ui/Chip';

// Meaningful visual artifacts for each analytical pillar
function PillarArtifact({ pillarId }: { pillarId: string }) {
  switch (pillarId) {
    case 'data-analysis':
      return (
        <div className="mt-6 pt-5 border-t border-border-subtle bg-eucalyptus/30 rounded-xl p-4 border border-border-subtle">
          <div className="flex items-center justify-between text-[11px] font-mono text-text-tertiary mb-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-soft-green" />
              Pipeline: Ingestion → Validation → Transformation
            </span>
            <span className="text-pine font-medium">Status: Verified</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center font-mono">
            <div className="p-2 rounded bg-surface border border-border-subtle">
              <span className="text-[10px] text-text-tertiary block">STAGE 01</span>
              <span className="text-xs font-semibold text-text-secondary mt-0.5 block">Raw Input</span>
              <span className="text-[10px] text-text-tertiary block mt-1">Schema Check</span>
            </div>
            <div className="p-2 rounded bg-surface border border-border-subtle">
              <span className="text-[10px] text-pine block">STAGE 02</span>
              <span className="text-xs font-semibold text-pine mt-0.5 block">Clean &amp; Cast</span>
              <span className="text-[10px] text-text-tertiary block mt-1">Imputation</span>
            </div>
            <div className="p-2 rounded bg-surface border border-soft-green bg-soft-green/10">
              <span className="text-[10px] text-pine block">STAGE 03</span>
              <span className="text-xs font-semibold text-pine mt-0.5 block">Analytics DB</span>
              <span className="text-[10px] text-text-tertiary block mt-1">Clean &amp; Ready</span>
            </div>
          </div>
        </div>
      );

    case 'business-intelligence':
      return (
        <div className="mt-6 pt-5 border-t border-border-subtle bg-eucalyptus/30 rounded-xl p-4 border border-border-subtle">
          <div className="flex items-center justify-between text-[11px] font-mono text-text-tertiary mb-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-soft-green" />
              KPI Horizon &amp; Performance View
            </span>
            <span className="text-pine font-medium text-[10px]">Active Tracking</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-2.5">
            <div className="p-2.5 rounded bg-surface border border-border-subtle">
              <span className="text-[10px] font-mono text-text-tertiary block">REPORTING CADENCE</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-sm font-bold font-display text-pine">Continuous Feed</span>
              </div>
              <div className="w-full h-1.5 bg-eucalyptus rounded-full mt-2 overflow-hidden">
                <div className="w-4/5 h-full bg-pine rounded-full" />
              </div>
            </div>
            <div className="p-2.5 rounded bg-surface border border-border-subtle">
              <span className="text-[10px] font-mono text-text-tertiary block">DATA VALIDATION</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-sm font-bold font-display text-pine">Quality Checked</span>
              </div>
              <div className="w-full h-1.5 bg-eucalyptus rounded-full mt-2 overflow-hidden">
                <div className="w-full h-full bg-soft-green rounded-full" />
              </div>
            </div>
          </div>
        </div>
      );

    case 'data-visualization':
      return (
        <div className="mt-6 pt-5 border-t border-border-subtle bg-eucalyptus/30 rounded-xl p-4 border border-border-subtle">
          <div className="flex items-center justify-between text-[11px] font-mono text-text-tertiary mb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-soft-green" />
              Signal Distribution &amp; Trend Modeling
            </span>
            <span className="text-text-tertiary text-[10px]">Fitted Curve</span>
          </div>
          <div className="h-20 w-full relative flex items-end pt-2">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 300 70"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="visGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7DAA91" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#7DAA91" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0 65 L0 52 C30 48, 60 58, 90 40 C120 22, 150 45, 180 30 C210 15, 240 28, 270 12 L300 8 L300 65 Z"
                fill="url(#visGradient)"
              />
              <path
                d="M0 52 C30 48, 60 58, 90 40 C120 22, 150 45, 180 30 C210 15, 240 28, 270 12 L300 8"
                stroke="#25483C"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="270" cy="12" r="3.5" fill="#7DAA91" />
              <line x1="270" y1="12" x2="270" y2="65" stroke="#7DAA91" strokeDasharray="2 2" strokeWidth="1" />
            </svg>
            <div className="absolute right-3 top-1 px-1.5 py-0.5 rounded bg-surface border border-soft-border font-mono text-[9px] text-pine font-medium shadow-xs">
              Observed Peak
            </div>
          </div>
        </div>
      );

    case 'statistical-analytics':
      return (
        <div className="mt-6 pt-5 border-t border-border-subtle bg-eucalyptus/30 rounded-xl p-4 border border-border-subtle">
          <div className="flex items-center justify-between text-[11px] font-mono text-text-tertiary mb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-soft-green" />
              Gaussian Distribution &amp; Confidence Interval
            </span>
            <span className="text-pine font-medium text-[10px]">Two-Tailed (95% CI)</span>
          </div>
          <div className="h-20 w-full relative flex items-center justify-center">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 280 70"
              fill="none"
              aria-hidden="true"
            >
              {/* Shaded 95% Confidence Interval */}
              <path
                d="M60 62 C80 60, 100 45, 120 25 C130 15, 140 10, 140 10 C140 10, 150 15, 160 25 C180 45, 200 60, 220 62 Z"
                fill="#7DAA91"
                fillOpacity="0.25"
              />
              {/* Normal Distribution Curve */}
              <path
                d="M10 63 C40 63, 70 61, 95 48 C115 37, 130 10, 140 10 C150 10, 165 37, 185 48 C210 61, 240 63, 270 63"
                stroke="#25483C"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Mean Line */}
              <line x1="140" y1="10" x2="140" y2="65" stroke="#25483C" strokeDasharray="2 2" strokeWidth="1" />
              {/* Baseline */}
              <line x1="10" y1="64" x2="270" y2="64" stroke="#D6DFD7" strokeWidth="1" />
            </svg>
            <div className="absolute font-mono text-[9px] text-text-tertiary bottom-0.5 flex justify-between w-full px-8">
              <span>-2σ</span>
              <span>-1σ</span>
              <span className="text-pine font-semibold">μ</span>
              <span>+1σ</span>
              <span>+2σ</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

// Helper to render two-tone headings inspired by the reference site
function TwoToneHeading({ title }: { title: string }) {
  const parts = title.split(' ');
  if (parts.length <= 1) {
    return <span className="text-pine">{title}</span>;
  }
  const main = parts.slice(0, -1).join(' ');
  const accent = parts[parts.length - 1];

  return (
    <>
      <span className="text-pine">{main} </span>
      <span className="text-pine/70">{accent}</span>
    </>
  );
}

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

        {/* Four Analytical Pillars Grid - Inspired by Reference Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {EXPERTISE_PILLARS.map((pillar: ExpertisePillar) => (
            <article
              key={pillar.id}
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl md:rounded-[24px] border border-border-subtle bg-surface hover:border-soft-green transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 overflow-hidden"
            >
              <div>
                {/* Meta Row: Pillar Index & Focus Area */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xs font-semibold text-pine px-2.5 py-1 rounded-md bg-eucalyptus border border-border-subtle">
                    {pillar.pillarNumber}
                  </span>
                  <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider text-right">
                    {pillar.focus}
                  </span>
                </div>

                {/* Pillar Two-Tone Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight mb-3">
                  <TwoToneHeading title={pillar.title} />
                </h3>

                {/* Pillar Summary */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                  {pillar.summary}
                </p>

                {/* Core Competencies Badges */}
                <ul
                  className="flex flex-wrap gap-2 list-none p-0 m-0 mb-2"
                  aria-label={`Core competencies for ${pillar.title}`}
                >
                  {pillar.capabilities.map((cap) => (
                    <li key={cap}>
                      <Chip variant="eucalyptus">
                        {cap}
                      </Chip>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Analytical Visual Artifact */}
              <PillarArtifact pillarId={pillar.id} />
            </article>
          ))}
        </div>
      </Container>
    </SectionFrame>
  );
}

export default Expertise;
