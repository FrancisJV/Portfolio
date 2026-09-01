import React from 'react';
import { 
  BarChart3, 
  FileSpreadsheet, 
  CheckCircle2, 
  Cpu, 
  Layout, 
  Database, 
  Wrench,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { Tag } from './Tag';

const iconMap = {
  BarChart3,
  FileSpreadsheet,
  CheckCircle2,
  Cpu,
  Layout,
  Database,
  Wrench,
  Layers
};

export function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-dark-900/60 relative border-t border-dark-800/80">
      <Container>
        <SectionHeading
          eyebrow="Skills & Capabilities"
          title="Technical Capabilities & Domain Knowledge"
          subtitle="Grouped capabilities spanning data analytics, requirements engineering, quality assurance, and modern digital development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Layers;
            return (
              <div
                key={category.id}
                className="bg-dark-900 border border-dark-800/90 hover:border-brand-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/5 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-300 group-hover:scale-105 group-hover:bg-brand-500/15 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-100 group-hover:text-brand-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-medium text-slate-400">
                        {category.skills.length} Capabilities
                      </span>
                    </div>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-dark-950/70 border border-dark-750 text-[11px] font-medium text-slate-300 group-hover:border-dark-700 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-dark-800/80 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Verified Domain</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500/40"></span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
