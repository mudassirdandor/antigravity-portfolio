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

        {/* Expressive Split-Card Layout with Alternating Visual Rhythm */}
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-16">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="group p-6 sm:p-8 lg:p-10 rounded-2xl md:rounded-[28px] border border-border-subtle bg-surface hover:border-accent/30 transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-8 lg:gap-12`}
                >
                  {/* Project Information Side */}
                  <div className="flex-1 w-full flex flex-col justify-between">
                    <div>
                      {/* Category & Featured Badge */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs text-accent uppercase tracking-wider">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="font-mono text-[10px] text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                            Featured Project
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-text-primary tracking-tight mb-4 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>

                      {/* Project Description */}
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Capabilities / Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="px-2.5 py-1 text-xs font-mono rounded bg-surface-elevated text-text-secondary border border-border-subtle"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center gap-4 text-sm">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium text-white bg-accent hover:bg-accent-hover transition-colors focus-visible:outline-2 focus-visible:outline-focus"
                          aria-label={`View live project for ${project.title}`}
                        >
                          <span>Live Project</span>
                          <ExternalLink className="w-4 h-4 ml-1.5" aria-hidden="true" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium text-text-secondary hover:text-text-primary border border-border-subtle bg-surface-elevated hover:bg-surface-elevated/80 transition-colors focus-visible:outline-2 focus-visible:outline-focus"
                          aria-label={`View GitHub repository for ${project.title}`}
                        >
                          <GithubIcon className="w-4 h-4 mr-2 text-text-tertiary" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Screenshot / Visual Window Side */}
                  <div className="flex-1 w-full">
                    <div className="rounded-xl overflow-hidden border border-border-subtle/80 bg-surface-elevated shadow-2xl transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-accent/5">
                      {/* Window Header Frame */}
                      <div className="px-4 py-2.5 bg-background/80 border-b border-border-subtle flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-border-base" />
                          <span className="w-2.5 h-2.5 rounded-full bg-border-base" />
                          <span className="w-2.5 h-2.5 rounded-full bg-border-base" />
                        </div>
                        <span className="font-mono text-[10px] text-text-tertiary truncate max-w-[200px]">
                          {project.liveUrl ? new URL(project.liveUrl).hostname : project.title}
                        </span>
                      </div>

                      {/* Actual Project Screenshot */}
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={-1}
                          aria-hidden="true"
                          className="block relative overflow-hidden aspect-[16/10] bg-surface"
                        >
                          <img
                            src={project.image}
                            alt={project.imageAlt}
                            className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                            loading="lazy"
                          />
                        </a>
                      ) : (
                        <div className="relative overflow-hidden aspect-[16/10] bg-surface">
                          <img
                            src={project.image}
                            alt={project.imageAlt}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </SectionFrame>
  );
}

export default Projects;
