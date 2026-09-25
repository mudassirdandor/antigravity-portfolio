import { ExternalLink } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionFrame } from '../layout/SectionFrame';
import { PROJECTS } from '../../data/projects';

function GithubIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Projects() {
  return (
    <SectionFrame id="work" className="border-t border-border-subtle py-16 sm:py-20 md:py-24 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent tracking-wider uppercase mb-3">
            // Selected Work
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight leading-snug mb-4">
            Projects built around data, systems, and practical problems.
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            My projects demonstrate how I apply analytical thinking and technical skills to real-world data workflows, structured collection, and applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-xl border border-border-subtle bg-surface hover:border-border-base transition-colors"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="font-mono text-[10px] text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary tracking-tight mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Capabilities Pills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-surface-elevated text-text-tertiary border border-border-subtle"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-border-subtle flex items-center justify-between gap-4 text-xs sm:text-sm">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-accent hover:text-accent-hover transition-colors focus-visible:outline-2 focus-visible:outline-focus rounded-sm py-1"
                    aria-label={`View live project for ${project.title}`}
                  >
                    <span>Live Project</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="font-mono text-[11px] text-text-tertiary">
                    Architecture &amp; Workflow
                  </span>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-focus rounded-sm py-1"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <GithubIcon className="w-3.5 h-3.5 mr-1.5 text-text-tertiary" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SectionFrame>
  );
}

export default Projects;
