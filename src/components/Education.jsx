import React from 'react';
import { GraduationCap, Award, BookOpen, FileCheck } from 'lucide-react';
import { educationData } from '../data/education';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

export function Education() {
  return (
    <section id="education" className="pt-8 pb-16 md:pt-10 md:pb-24 bg-dark-950 relative border-t border-dark-800/80">
      <Container>
        <SectionHeading
          eyebrow="Academic Background"
          title="Education & Qualifications"
          subtitle="Formal academic degree in data science and recognized professional qualifications."
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

            {/* Primary Degree Card (Dominant - 7 cols) */}
            <div className="lg:col-span-7 bg-dark-900 border border-brand-500/30 rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between hover:border-brand-500/50 transition-all duration-200 hover:shadow-xl hover:shadow-brand-500/5 group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/10 rounded-full blur-2xl pointer-events-none -mr-8 -mt-8"></div>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-300 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                    <GraduationCap className="w-3.5 h-3.5 text-brand-400" />
                    Primary Degree
                  </span>
                  <span className="text-xs font-mono text-slate-300 bg-dark-950 px-2.5 py-1 rounded-md border border-dark-750">
                    {educationData.primary.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-brand-300 transition-colors leading-snug mb-1">
                  {educationData.primary.degree}
                </h3>

                <p className="text-sm font-semibold text-brand-300/90 mb-1.5">
                  Specialization: {educationData.primary.specialization}
                </p>

                <p className="text-sm text-slate-400">
                  {educationData.primary.institution}
                </p>
              </div>

              {/* Honors Badge */}
              {educationData.primary.honors && (
                <div className="relative z-10 mt-5 pt-4 border-t border-dark-800 flex items-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{educationData.primary.honors}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Supporting Qualifications (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {educationData.additionalQualifications.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="bg-dark-900 border border-dark-800 rounded-xl p-5 hover:border-brand-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/5 flex-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        {idx === 0 ? (
                          <BookOpen className="w-3.5 h-3.5 text-brand-400" />
                        ) : (
                          <FileCheck className="w-3.5 h-3.5 text-brand-400" />
                        )}
                        <span>Professional</span>
                      </div>
                      <span className="text-xs font-mono text-slate-300 bg-dark-950 px-2.5 py-0.5 rounded-md border border-dark-750">
                        {item.period}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-300 transition-colors leading-snug mb-1">
                      {item.qualification}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400">
                      {item.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
