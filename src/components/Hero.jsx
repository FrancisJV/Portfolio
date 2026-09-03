import React from 'react';
import { ArrowDown, ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Container } from './Container';
import { Button } from './Button';

export function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-22 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-8 overflow-hidden bg-radial-glow-hero scroll-mt-20">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Headline, Positioning, Bio, CTAs (Hierarchy #1, #2, #3) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">

            {/* Availability Badge (Increased typography to 14px and refined padding) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-dark-900/90 border border-dark-700/80 shadow-inner mb-5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-200">
                {siteConfig.availability.status}
              </span>
            </div>

            {/* Positioning Eyebrow */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-400 mb-5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>{siteConfig.hero.eyebrow}</span>
            </p>

            {/* Main Headline (#1 Dominant Visual Hierarchy - Preserved Exactly) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-200 to-indigo-200">ideas</span>,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-brand-400"> data </span>
              and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-brand-300">technology</span> into practical digital solutions.
            </h1>

            {/* Supporting Bio Paragraph (#2 Value Proposition) */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-6 max-w-xl">
              {siteConfig.hero.bio}
            </p>

            {/* CTA Hierarchy: Primary (Glow), Secondary (Outlined Dark), Tertiary (Quiet Ghost) */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button
                onClick={() => scrollTo('projects')}
                variant="glow"
                size="lg"
                icon={ArrowDown}
                className="w-full sm:w-auto whitespace-nowrap"
              >
                View My Work
              </Button>

              <Button
                onClick={() => scrollTo('contact')}
                variant="secondary"
                size="lg"
                icon={ArrowUpRight}
                className="w-full sm:w-auto whitespace-nowrap"
              >
                Work With Me
              </Button>

              <Button
                href={`/${siteConfig.cv.fileName}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="lg"
                icon={Download}
                className="w-full sm:w-auto text-slate-400 hover:text-white hover:bg-dark-800/80 border border-transparent hover:border-dark-700/60 whitespace-nowrap"
              >
                {siteConfig.cv.label}
              </Button>
            </div>
          </div>

          {/* Right Column: Refined Portrait Composition (#4 Personal Brand Identity) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-center lg:-translate-x-4 xl:-translate-x-8 order-1 lg:order-2">
            <div className="relative flex flex-col items-center">

              {/* Subtle ambient backglow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-tr from-brand-600/25 via-indigo-500/20 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

              {/* Subtle background tech dot pattern behind portrait */}
              <div className="absolute -inset-4 bg-[radial-gradient(#a855f718_1px,transparent_1px)] [background-size:12px_12px] rounded-full pointer-events-none -z-10" />

              {/* Portrait Frame Container */}
              <div className="relative p-2 rounded-[28px] bg-gradient-to-b from-white/15 via-dark-800/80 to-dark-900 border border-white/10 shadow-2xl shadow-brand-950/60 backdrop-blur-sm group">

                {/* Inner portrait viewport */}
                <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[260px] xl:h-[260px] rounded-[22px] overflow-hidden bg-dark-950 ring-1 ring-white/10">
                  {siteConfig.profileImage ? (
                    <img
                      src={siteConfig.profileImage}
                      alt={siteConfig.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}

                  {/* Fallback monogram */}
                  <div
                    className={`w-full h-full bg-dark-950 rounded-[22px] flex items-center justify-center font-extrabold text-white text-3xl ${siteConfig.profileImage ? 'hidden' : 'flex'
                      }`}
                  >
                    {siteConfig.monogram}
                  </div>
                </div>

                {/* Minimalist corner line accents */}
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-brand-400/40 rounded-tr" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-brand-400/40 rounded-bl" />
              </div>

              {/* Concise Professional Identity Details */}
              <div className="mt-3 text-center">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {siteConfig.name}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-brand-300 mt-0.5">
                  Data & Technology Professional
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 tracking-wide">
                  Data Science • Analytics • Digital Solutions
                </p>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
