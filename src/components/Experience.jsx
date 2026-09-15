import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '../data/experience';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="pt-8 pb-16 md:pt-10 md:pb-24 bg-dark-900/60 relative border-t border-dark-800/80">
      <Container>
        <SectionHeading
          eyebrow="Career Timeline"
          title="Professional Experience"
          subtitle="Experience across technology, data, business operations and education."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-dark-750 pl-5 sm:pl-7 ml-3 sm:ml-4 space-y-4 sm:space-y-4.5">
            {experienceData.map((item) => (
              <div key={item.id} className="relative group">

                {/* Timeline node marker */}
                <div className="absolute -left-[27px] sm:-left-[35px] top-4 w-3.5 h-3.5 rounded-full bg-dark-950 border-2 border-brand-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400"></div>
                </div>

                {/* Experience Compact Card */}
                <div className="bg-dark-900 border border-dark-800 rounded-xl p-4 sm:p-5 hover:border-brand-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    
                    {/* Left: Job Title & Company */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-300 transition-colors leading-snug">
                        {item.role}
                      </h3>
                      {item.company && (
                        <div className="text-sm font-medium text-slate-300 mt-1 flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                          <span>{item.company}</span>
                        </div>
                      )}
                    </div>

                    {/* Right: Employment Period */}
                    <div className="self-start sm:self-center shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20 whitespace-nowrap">
                        <Calendar className="w-3.5 h-3.5 text-brand-400" />
                        {item.period}
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
