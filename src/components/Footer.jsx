import React from 'react';
import { ArrowUp, Mail, Linkedin, Github, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { socialLinks } from '../data/socialLinks';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasLinkedin = Boolean(socialLinks.linkedin && socialLinks.linkedin.url && socialLinks.linkedin.url.trim() !== '');
  const hasGithub = Boolean(socialLinks.github && socialLinks.github.url && socialLinks.github.url.trim() !== '');

  return (
    <footer className="bg-dark-950 border-t border-dark-800/80 py-12 relative">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-dark-850">
          
          {/* Left Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-bold text-white text-xs">
                VF
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Data • Technology • Digital Solutions
            </p>
          </div>

          {/* Social Icons & Email */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2.5 rounded-xl bg-dark-900 border border-dark-750 text-slate-300 hover:text-white hover:border-brand-500/40 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {hasLinkedin && (
              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 border border-dark-750 text-slate-300 hover:text-white hover:border-brand-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}

            {hasGithub && (
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 border border-dark-750 text-slate-300 hover:text-white hover:border-brand-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-dark-900 border border-dark-750 text-slate-300 hover:text-brand-300 hover:border-brand-500/40 transition-colors ml-2"
              aria-label="Back to Top of Page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Built with modern web standards in Sri Lanka
          </p>
        </div>
      </Container>
    </footer>
  );
}
