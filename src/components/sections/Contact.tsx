import { Mail, FileText, ExternalLink } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionFrame } from '../layout/SectionFrame';

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
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

export function Contact() {
  return (
    <SectionFrame id="contact" className="border-t border-border-subtle py-16 sm:py-20 md:py-24 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent tracking-wider uppercase mb-3">
            // Contact
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight leading-snug mb-4">
            Let's Work With Data
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            I am open to Data Analyst, Business Intelligence, and Data Analytics opportunities, as well as meaningful projects involving data-driven problem solving. If you're working on a data challenge or exploring collaboration, let's connect.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Email */}
          <a
            href="mailto:mudassirdandor@gmail.com"
            className="p-6 rounded-xl border border-border-subtle bg-surface hover:border-accent transition-colors flex flex-col justify-between group focus-visible:outline-2 focus-visible:outline-focus"
            aria-label="Send email to mudassirdandor@gmail.com"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center text-accent mb-4 group-hover:bg-accent/10 transition-colors">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider block mb-1">
                Direct Email
              </span>
              <h3 className="font-display font-bold text-base text-text-primary tracking-tight group-hover:text-accent transition-colors mb-2 break-all">
                mudassirdandor@gmail.com
              </h3>
            </div>
            <span className="text-xs text-text-secondary flex items-center gap-1.5 pt-3 border-t border-border-subtle">
              <span>Send Message</span>
              <ExternalLink className="w-3.5 h-3.5 text-text-tertiary" aria-hidden="true" />
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mudassirdandor"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-border-subtle bg-surface hover:border-accent transition-colors flex flex-col justify-between group focus-visible:outline-2 focus-visible:outline-focus"
            aria-label="Visit LinkedIn profile of Mudassir Javed"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center text-accent mb-4 group-hover:bg-accent/10 transition-colors">
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider block mb-1">
                Professional Network
              </span>
              <h3 className="font-display font-bold text-base text-text-primary tracking-tight group-hover:text-accent transition-colors mb-2">
                LinkedIn Profile
              </h3>
            </div>
            <span className="text-xs text-text-secondary flex items-center gap-1.5 pt-3 border-t border-border-subtle">
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-text-tertiary" aria-hidden="true" />
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mudassirdandor"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-border-subtle bg-surface hover:border-accent transition-colors flex flex-col justify-between group focus-visible:outline-2 focus-visible:outline-focus"
            aria-label="Visit GitHub repositories of Mudassir Javed"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center text-accent mb-4 group-hover:bg-accent/10 transition-colors">
                <GithubIcon className="w-5 h-5" />
              </div>
              <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider block mb-1">
                Source Code &amp; Repositories
              </span>
              <h3 className="font-display font-bold text-base text-text-primary tracking-tight group-hover:text-accent transition-colors mb-2">
                GitHub Portfolio
              </h3>
            </div>
            <span className="text-xs text-text-secondary flex items-center gap-1.5 pt-3 border-t border-border-subtle">
              <span>View Repositories</span>
              <ExternalLink className="w-3.5 h-3.5 text-text-tertiary" aria-hidden="true" />
            </span>
          </a>

          {/* CV Request */}
          <a
            href="mailto:mudassirdandor@gmail.com?subject=CV%20Request%20-%20Mudassir%20Javed"
            className="p-6 rounded-xl border border-border-subtle bg-surface hover:border-accent transition-colors flex flex-col justify-between group focus-visible:outline-2 focus-visible:outline-focus"
            aria-label="Request CV from Mudassir Javed via email"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center text-accent mb-4 group-hover:bg-accent/10 transition-colors">
                <FileText className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider block mb-1">
                Curriculum Vitae
              </span>
              <h3 className="font-display font-bold text-base text-text-primary tracking-tight group-hover:text-accent transition-colors mb-2">
                CV / Resume
              </h3>
            </div>
            <span className="text-xs text-accent flex items-center gap-1.5 pt-3 border-t border-border-subtle font-medium">
              <span>Available on Request</span>
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </Container>
    </SectionFrame>
  );
}

export default Contact;
