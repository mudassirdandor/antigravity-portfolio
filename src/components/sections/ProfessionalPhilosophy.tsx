import { Container } from '../layout/Container';
import { SectionFrame } from '../layout/SectionFrame';
import { PHILOSOPHY_PRINCIPLES } from '../../data/philosophy';

// Methodology visual artifacts for the 3 core principles
function PrincipleArtifact({ id }: { id: string }) {
  switch (id) {
    case 'right-question':
      return (
        <div className="w-full lg:w-72 p-4 rounded-xl bg-surface border border-border-subtle/80 flex flex-col gap-2 font-mono text-[11px] shrink-0">
          <div className="text-[10px] text-text-tertiary uppercase tracking-wider pb-1.5 border-b border-border-subtle/60 flex items-center justify-between">
            <span>Framework</span>
            <span className="text-accent">Step 01</span>
          </div>
          <div className="space-y-2 mt-1">
            <div className="flex items-center gap-2 p-1.5 rounded bg-surface-elevated/70 border border-border-subtle/50 text-text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>1. Define Business Problem</span>
            </div>
            <div className="flex items-center gap-2 p-1.5 rounded bg-surface-elevated/70 border border-border-subtle/50 text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-border-base" />
              <span>2. Anchor Decision Metric</span>
            </div>
            <div className="flex items-center gap-2 p-1.5 rounded bg-surface-elevated/70 border border-border-subtle/50 text-text-tertiary">
              <span className="w-1.5 h-1.5 rounded-full bg-border-base" />
              <span>3. Target Specific Insights</span>
            </div>
          </div>
        </div>
      );

    case 'trust-process':
      return (
        <div className="w-full lg:w-72 p-4 rounded-xl bg-surface border border-border-subtle/80 flex flex-col gap-2 font-mono text-[11px] shrink-0">
          <div className="text-[10px] text-text-tertiary uppercase tracking-wider pb-1.5 border-b border-border-subtle/60 flex items-center justify-between">
            <span>Validation Flow</span>
            <span className="text-accent">Step 02</span>
          </div>
          <div className="space-y-2 mt-1">
            <div className="flex items-center justify-between p-1.5 rounded bg-surface-elevated/70 border border-border-subtle/50">
              <span className="text-text-secondary">Data Hygiene</span>
              <span className="text-emerald-400 font-semibold text-[10px]">VERIFIED</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-surface-elevated/70 border border-border-subtle/50">
              <span className="text-text-secondary">Model Assumptions</span>
              <span className="text-emerald-400 font-semibold text-[10px]">TESTED</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-surface-elevated/70 border border-accent/30 bg-accent/5">
              <span className="text-accent">Empirical Evidence</span>
              <span className="text-accent font-semibold text-[10px]">SOUND</span>
            </div>
          </div>
        </div>
      );

    case 'make-insights-useful':
      return (
        <div className="w-full lg:w-72 p-4 rounded-xl bg-surface border border-border-subtle/80 flex flex-col gap-2 font-mono text-[11px] shrink-0">
          <div className="text-[10px] text-text-tertiary uppercase tracking-wider pb-1.5 border-b border-border-subtle/60 flex items-center justify-between">
            <span>Impact Translation</span>
            <span className="text-accent">Step 03</span>
          </div>
          <div className="space-y-2 mt-1">
            <div className="p-2 rounded bg-surface-elevated/70 border border-border-subtle/50">
              <span className="text-[10px] text-text-tertiary block">COMPLEX FINDING</span>
              <span className="text-xs text-text-secondary block mt-0.5">Statistical distributions &amp; multi-variate correlations</span>
            </div>
            <div className="text-center text-accent text-xs">↓ Translated To ↓</div>
            <div className="p-2 rounded bg-surface-elevated/70 border border-accent/40 bg-accent/5">
              <span className="text-[10px] text-accent block">DECISION ACTION</span>
              <span className="text-xs text-text-primary font-medium block mt-0.5">Clear visual priority &amp; executive next steps</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export function ProfessionalPhilosophy() {
  // Sticky top offsets for the desktop stacking sequence
  const stickyTopOffsets = [
    'md:top-24 lg:top-28',
    'md:top-32 lg:top-36',
    'md:top-40 lg:top-44',
  ];

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

        {/* Sticky Stacking Cards Sequence - Inspired by Reference Stacking Mechanism */}
        <div className="relative flex flex-col gap-6 md:gap-8 pb-8">
          {PHILOSOPHY_PRINCIPLES.map((principle, index) => (
            <article
              key={principle.id}
              className={`w-full p-6 sm:p-8 lg:p-10 rounded-2xl md:rounded-[28px] border border-border-subtle bg-surface/95 backdrop-blur-md shadow-2xl transition-all duration-300 md:sticky ${stickyTopOffsets[index]} motion-reduce:static motion-reduce:transform-none`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                {/* Text Content */}
                <div className="flex-1 max-w-2xl">
                  {/* Ordinal Pill & Category */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-semibold text-accent px-2.5 py-1 rounded bg-accent/10 border border-accent/20">
                      {principle.principleNumber}
                    </span>
                    <span className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                      {principle.tag}
                    </span>
                  </div>

                  {/* Principle Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-text-primary tracking-tight mb-4">
                    {principle.title}
                  </h3>

                  {/* Principle Description */}
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                    {principle.description}
                  </p>

                  {/* Analytical Standard Callout */}
                  <div className="inline-flex items-center gap-2 pt-3 border-t border-border-subtle/70 font-mono text-xs text-text-primary">
                    <span className="text-text-tertiary uppercase text-[10px] tracking-wider">
                      Analytical Standard:
                    </span>
                    <span className="text-accent font-medium">
                      {principle.takeaway}
                    </span>
                  </div>
                </div>

                {/* Right-Side Structured Visual Methodology Artifact */}
                <PrincipleArtifact id={principle.id} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SectionFrame>
  );
}

export default ProfessionalPhilosophy;
