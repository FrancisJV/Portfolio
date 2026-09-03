import React from 'react';
import {
  GraduationCap,
  Compass,
  Lightbulb,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Users
} from 'lucide-react';
import { guidanceData } from '../data/guidance';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

export function ProjectGuidance({ onSelectService }) {
  const handleGuidanceCTA = () => {
    if (onSelectService) {
      onSelectService('Project Guidance');
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="guidance" className="pt-8 pb-20 md:pt-10 md:pb-28 bg-dark-950 relative border-t border-dark-800/80">
      <Container>
        <SectionHeading
          eyebrow="Educational Mentoring"
          title={guidanceData.sectionTitle}
          subtitle={guidanceData.sectionSubtitle}
        />

        {/* Philosophy Banner */}
        <div className="mb-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-brand-900/30 via-dark-900 to-indigo-950/30 border border-brand-500/25 text-center max-w-4xl mx-auto shadow-lg">
          <div className="w-10 h-10 rounded-full bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-brand-300 mx-auto mb-3">
            <Compass className="w-5 h-5" />
          </div>
          <blockquote className="text-base sm:text-lg font-semibold text-white italic">
            "{guidanceData.corePhilosophy}"
          </blockquote>
          <p className="text-sm text-slate-400 mt-2">
            Tailored mentoring for university students, self-taught developers, and project builders.
          </p>
        </div>

        {/* Mentoring Offerings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {guidanceData.offerings.map((item, idx) => (
            <div
              key={item.title}
              className="bg-dark-900 border border-dark-800 rounded-xl p-5 flex flex-col justify-between hover:border-brand-500/30 transition-all duration-200"
            >
              <div>
                <div className="text-[10px] font-mono text-brand-300 mb-2 font-bold">
                  0{idx + 1}
                </div>
                <h4 className="text-[14px] font-bold text-slate-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Integrity Box */}
        <div className="p-6 rounded-2xl bg-dark-900/90 border border-amber-500/25 max-w-4xl mx-auto shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300 flex-shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-amber-200 mb-1.5">
                {guidanceData.academicIntegrity.heading}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {guidanceData.academicIntegrity.statement}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button
            onClick={handleGuidanceCTA}
            variant="glow"
            size="lg"
            icon={ArrowRight}
          >
            Get Project Guidance
          </Button>
        </div>
      </Container>
    </section>
  );
}
