import React from 'react';
import { Download, Brain, MessageSquareCode, Target, Rocket, GraduationCap, MapPin, Sparkles, Briefcase } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

export function About() {
  const pillars = [
    {
      icon: Brain,
      title: "Analytical Rigor",
      description: "Trained in data science fundamentals to extract patterns from raw information, test hypotheses, and build data-backed models."
    },
    {
      icon: MessageSquareCode,
      title: "Business-to-Tech Bridge",
      description: "Skilled in facilitating stakeholder discovery sessions, translating non-technical needs into structured requirements and user stories."
    },
    {
      icon: Target,
      title: "Practical Solution Focus",
      description: "Dedicated to building practical, maintainable solutions—from automated ETL pipelines and dashboards to responsive web apps."
    },
    {
      icon: Rocket,
      title: "Growth & Continuous Learning",
      description: "Constantly expanding capabilities across modern web frameworks, cloud environments, and emerging AI automation tooling."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-dark-950 relative">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Analytical Mindset. Technical Execution. Practical Solutions."
          subtitle="Combining data science training with business analysis exposure to help teams and clients turn ideas and raw data into reliable digital products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative Bio */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am an <strong className="text-white font-semibold">Information Technology graduate specializing in Data Science</strong> from the Sri Lanka Institute of Information Technology (SLIIT). My professional journey involves hands-on experience in data analytics, AI automation, business analysis, and technology solutions.
            </p>

            <p>
              During my roles as an <span className="text-brand-300 font-medium">Associate Software Engineer in AI Automation</span> and <span className="text-brand-300 font-medium">Remote Data Associate</span>, I discovered a genuine passion for bridging the gap between business stakeholders and technical implementations. I enjoy gathering requirements, mapping out process efficiencies, writing clean SQL/Python scripts, creating Power BI visual dashboards, and supporting user testing.
            </p>

            <p>
              Whether collaborating within an Agile development team, executing a freelance project for a small business, or mentoring a university student on technical project design, my approach centers on <strong className="text-white font-semibold">clarity, analytical rigor, and honest collaboration</strong>.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                href={`/${siteConfig.cv.fileName}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="glow"
                size="md"
                icon={Download}
              >
                {siteConfig.cv.label}
              </Button>
              <Button
                href="#experience"
                variant="secondary"
                size="md"
                icon={Briefcase}
              >
                View Career Timeline
              </Button>
            </div>
          </div>

          {/* Right Column: Quick Facts & Highlights Card */}
          <div className="lg:col-span-5">
            <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-300 mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-400" />
                <span>At a Glance</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 pb-3.5 border-b border-dark-800">
                  <div className="p-2 rounded-lg bg-dark-800 border border-dark-700 text-brand-300">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Education</div>
                    <div className="text-sm font-semibold text-slate-200 mt-0.5">BSc (Hons) in IT – Data Science</div>
                    <div className="text-xs text-slate-400">SLIIT • Dean's List Award (Final Semester)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pb-3.5 border-b border-dark-800">
                  <div className="p-2 rounded-lg bg-dark-800 border border-dark-700 text-indigo-300">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Experience Areas</div>
                    <div className="text-sm font-semibold text-slate-200 mt-0.5">AI Automation, Data Analytics & BA</div>
                    <div className="text-xs text-slate-400">Industry & Remote International Teams</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pb-3.5 border-b border-dark-800">
                  <div className="p-2 rounded-lg bg-dark-800 border border-dark-700 text-purple-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Location & Mobility</div>
                    <div className="text-sm font-semibold text-slate-200 mt-0.5">Sri Lanka (Colombo / Kandy)</div>
                    <div className="text-xs text-slate-400">Available for Global Remote & Hybrid Roles</div>
                  </div>
                </div>
              </div>

              {/* Four Focus Pillars Mini Grid */}
              <div className="mt-6 pt-5 border-t border-dark-800 grid grid-cols-2 gap-3">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.title} className="p-3 rounded-xl bg-dark-950/60 border border-dark-800/80">
                      <Icon className="w-4 h-4 text-brand-400 mb-1.5" />
                      <div className="text-xs font-bold text-slate-200">{pillar.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 leading-snug line-clamp-2">{pillar.description}</div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
