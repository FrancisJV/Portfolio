import React from 'react';
import { ArrowDown, ArrowUpRight, Download, Sparkles, Database, Code, CheckCircle, BarChart3 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Container } from './Container';
import { Button } from './Button';

export function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow-hero">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-dark-700/80 shadow-inner mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {siteConfig.availability.status}
              </span>
            </div>

            {/* Positioning Eyebrow */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>{siteConfig.hero.eyebrow}</span>
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-200 to-indigo-200">ideas</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-brand-400">data</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-brand-300">technology</span> into practical digital solutions.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
              {siteConfig.hero.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <Button
                onClick={() => scrollTo('projects')}
                variant="glow"
                size="lg"
                icon={ArrowDown}
                className="w-full sm:w-auto"
              >
                View My Work
              </Button>

              <Button
                onClick={() => scrollTo('contact')}
                variant="secondary"
                size="lg"
                icon={ArrowUpRight}
                className="w-full sm:w-auto"
              >
                Work With Me
              </Button>

              <Button
                href={`/${siteConfig.cv.fileName}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                icon={Download}
                className="w-full sm:w-auto"
              >
                {siteConfig.cv.label}
              </Button>
            </div>
          </div>

          {/* Right Column: Refined Abstract System Visual + Profile Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Subtle ambient backglow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-60"></div>
              
              {/* Main Card Shell */}
              <div className="relative bg-dark-900/90 border border-dark-750/90 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Visual Header / System Meta */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-dark-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/30 border border-amber-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/30 border border-emerald-500/50"></div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-dark-950/80 px-2 py-0.5 rounded border border-dark-800">
                    VF.Profile.System
                  </span>
                </div>

                {/* Profile Identity Card */}
                <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-dark-950/60 border border-dark-800/80">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-purple-400 p-0.5 shadow-lg shadow-brand-500/25 overflow-hidden">
                      {siteConfig.profileImage ? (
                        <img
                          src={siteConfig.profileImage}
                          alt={siteConfig.name}
                          className="w-full h-full object-cover rounded-[14px]"
                          onError={(e) => {
                            // Fallback to monogram if image fails to load
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div
                        className={`w-full h-full bg-dark-950 rounded-[14px] flex items-center justify-center font-extrabold text-white text-xl ${
                          siteConfig.profileImage ? 'hidden' : 'flex'
                        }`}
                      >
                        {siteConfig.monogram}
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-dark-950 flex items-center justify-center border border-dark-800">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white truncate">
                      {siteConfig.name}
                    </h3>
                    <p className="text-xs text-brand-300 font-medium truncate">
                      Data Science & IT Specialist
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      SLIIT Graduate • Colombo, Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Analytical Capability Matrix Nodes */}
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-dark-950/40 border border-dark-800/60 flex items-center justify-between hover:border-brand-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-300">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Data Analytics & BI</div>
                        <div className="text-[10px] text-slate-400">Power BI • SQL • Python • ETL</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-brand-300 bg-brand-500/10 px-2 py-0.5 rounded">Active</span>
                  </div>

                  <div className="p-3 rounded-xl bg-dark-950/40 border border-dark-800/60 flex items-center justify-between hover:border-brand-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Business & QA Analysis</div>
                        <div className="text-[10px] text-slate-400">Requirements • User Stories • UAT</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">Active</span>
                  </div>

                  <div className="p-3 rounded-xl bg-dark-950/40 border border-dark-800/60 flex items-center justify-between hover:border-brand-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                        <Code className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Digital Solutions</div>
                        <div className="text-[10px] text-slate-400">React • Web Apps • AI Automation</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded">Active</span>
                  </div>
                </div>

                {/* Footer System Status */}
                <div className="mt-5 pt-3.5 border-t border-dark-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                    Verified Profile
                  </span>
                  <span>MERCon 2024 Author</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
