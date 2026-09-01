import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/experience';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { Tag } from './Tag';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-dark-900/60 relative border-t border-dark-800/80">
      <Container>
        <SectionHeading
          eyebrow="Career Timeline"
          title="Professional Experience"
          subtitle="A track record of technical delivery across AI automation, data analytics, process improvement, and requirements engineering."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-dark-750 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-12">
            {experienceData.map((item, index) => (
              <div key={item.id} className="relative group">
                
                {/* Timeline node marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-dark-950 border-2 border-brand-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400"></div>
                </div>

                {/* Experience Card */}
                <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 sm:p-7 hover:border-brand-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5">
                  
                  {/* Top Header: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Company & Location */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mb-4">
                    <span className="font-semibold text-slate-200 flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-brand-400" />
                      {item.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                    {item.previousRole && (
                      <span className="text-brand-300/90 font-medium">
                        (Prev: {item.previousRole})
                      </span>
                    )}
                  </div>

                  {/* Narrative Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                    {item.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="space-y-2 mb-5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Responsibilities & Impact:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills / Tech Used in Role */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="pt-4 border-t border-dark-800 flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-md bg-dark-950 border border-dark-750 text-[11px] font-medium text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
