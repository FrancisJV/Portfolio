import React from 'react';
import { GraduationCap, Award, BookCheck, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { Tag } from './Tag';

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-dark-950 relative border-t border-dark-800/80">
      <Container>
        <SectionHeading
          eyebrow="Academic Background"
          title="Education & Qualifications"
          subtitle="Foundational education in data science, complemented by accounting credentials and leadership engagement."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Primary Degree Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-dark-900 border border-brand-500/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
              
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                    Primary Degree
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-dark-950 px-2.5 py-1 rounded-md border border-dark-750">
                    {educationData.primary.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-1">
                  {educationData.primary.degree}
                </h3>

                <p className="text-sm font-semibold text-brand-300 mb-2">
                  Specialization: {educationData.primary.specialization}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 mb-5">
                  {educationData.primary.institution} • {educationData.primary.location}
                </p>

                {/* Dean's List Award Badge */}
                {educationData.primary.honors && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold mb-6">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>{educationData.primary.honors}</span>
                  </div>
                )}

                {/* Relevant Academic Focus Areas */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Core Academic Focus:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {educationData.primary.relevantFocus.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Accounting Qualifications */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">
                Additional Qualifications
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {educationData.additionalQualifications.map((item) => (
                  <div key={item.qualification} className="p-5 rounded-xl bg-dark-900 border border-dark-800 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-brand-300 bg-brand-500/10 px-2 py-0.5 rounded">
                        {item.period}
                      </span>
                      <h5 className="text-sm font-bold text-white mt-2.5 mb-1">
                        {item.qualification}
                      </h5>
                      <div className="text-xs font-medium text-slate-400 mb-2">
                        {item.institution}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Leadership & Community (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">
              Leadership & Community Engagement
            </h4>

            <div className="space-y-3.5">
              {educationData.leadershipCommunity.map((item) => (
                <div
                  key={item.organization}
                  className="p-5 rounded-xl bg-dark-900 border border-dark-800 hover:border-brand-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="text-brand-300 font-semibold">{item.role}</span>
                    <span className="font-mono text-[11px]">{item.period}</span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-200 mb-1.5">
                    {item.organization}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
