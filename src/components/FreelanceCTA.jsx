import React from 'react';
import { ArrowRight, Sparkles, Send, Mail } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';

export function FreelanceCTA() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const top = contactSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-dark-950 relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-brand-950/60 via-dark-900 to-indigo-950/60 border border-brand-500/30 text-center shadow-2xl overflow-hidden">
          
          {/* Subtle ambient blur bubbles */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Let's Collaborate
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have an idea? <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-200 to-indigo-200">
                Let's build it.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
              Whether you need a custom portfolio, a Power BI analytical dashboard, manual testing verification, or structured requirements for your next digital product—I'm ready to help.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <Button
                onClick={scrollToContact}
                variant="glow"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Start a Project
              </Button>
              <Button
                onClick={scrollToContact}
                variant="secondary"
                size="lg"
                icon={Mail}
                className="w-full sm:w-auto"
              >
                Send Direct Inquiry
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
