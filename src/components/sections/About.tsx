import { Container } from '../layout/Container';
import { SectionFrame } from '../layout/SectionFrame';

const JOURNEY_STEPS = [
  { step: '01', title: 'Statistics', desc: 'Quantitative foundation, research methods, and rigorous reasoning.' },
  { step: '02', title: 'Data Analysis', desc: 'Exploration, structured data cleaning, and pattern identification.' },
  { step: '03', title: 'Business Intelligence', desc: 'KPI tracking, dashboard development, and analytical reporting.' },
  { step: '04', title: 'Insights & Decisions', desc: 'Communicating findings that support practical, executive decisions.' },
];

export function About() {
  return (
    <SectionFrame id="about" className="border-t border-border-subtle py-16 sm:py-20 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Section Label */}
            <span className="font-mono text-xs text-accent tracking-wider uppercase mb-3">
              // About
            </span>

            {/* Section Heading */}
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight leading-snug mb-6">
              A statistical foundation with a practical approach to data.
            </h2>

            {/* Narrative Body */}
            <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
              <p>
                My foundation in Statistics shapes the way I approach data: understand the problem, examine the evidence, identify meaningful patterns, and communicate what the data is saying clearly.
              </p>
              <p>
                I have developed practical experience across data collection, structured data workflows, analysis-oriented applications, visualization, automation, and technical projects. My goal is to bring these capabilities together through a focused career in Data Analytics and Business Intelligence.
              </p>
              <p>
                With a combination of statistical education and technical skills, I can work across the journey from raw information to structured data, analysis, visualization, and decision support.
              </p>
            </div>

            {/* Supporting Statement / Callout */}
            <div className="border-l-2 border-accent pl-4 sm:pl-5 py-2 my-2 bg-surface/40 rounded-r-md">
              <p className="text-sm sm:text-base italic text-text-primary font-medium leading-relaxed">
                "Statistics gives me the analytical foundation. Technology gives me the ability to build practical solutions around it."
              </p>
            </div>
          </div>

          {/* Analytical Journey & Academic Background Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            {/* Academic Credential Card */}
            <div className="p-5 sm:p-6 rounded-xl border border-border-subtle bg-surface flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-accent uppercase tracking-wider">
                  Academic Foundation
                </span>
                <span className="font-mono text-xs text-text-tertiary">
                  2023
                </span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-text-primary">
                MSc in Statistics
              </h3>
              <p className="text-xs text-text-tertiary">
                University of Balochistan
              </p>
              <p className="text-xs text-text-secondary leading-relaxed pt-2 border-t border-border-subtle mt-1">
                Advanced statistical reasoning, quantitative research methods, and interpretation of structured data.
              </p>
            </div>

            {/* Analytical Journey Stepper */}
            <div className="p-5 sm:p-6 rounded-xl border border-border-subtle bg-surface flex flex-col gap-4">
              <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider">
                Analytical Journey
              </span>

              <div className="space-y-3.5">
                {JOURNEY_STEPS.map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-accent font-semibold pt-0.5">
                      {item.step}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-medium text-text-primary">
                        {item.title}
                      </span>
                      <span className="text-xs text-text-secondary leading-normal">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}

export default About;
