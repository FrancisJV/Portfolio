import React from 'react';
import {
  LayoutTemplate,
  PieChart,
  ShieldCheck,
  FileText,
  Sparkles,
  Check,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import { servicesData } from '../data/services';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { Tag } from './Tag';

const serviceIcons = {
  LayoutTemplate,
  PieChart,
  ShieldCheck,
  FileText,
  Sparkles,
};

export function Services({ onSelectService }) {
  const handleServiceCTA = (serviceValue) => {
    if (onSelectService) {
      onSelectService(serviceValue);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="pt-8 pb-20 md:pt-10 md:pb-28 bg-dark-900/60 relative border-t border-dark-800/80">
      <Container>
        <SectionHeading
          eyebrow="Freelance Services"
          title="How I Can Help Your Project"
          subtitle="Available for selected freelance collaborations, technology solutions, analytical dashboards, and structured digital deliverables."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = serviceIcons[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="bg-dark-900 border border-dark-800 hover:border-brand-500/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5 group"
              >
                <div>
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-300 group-hover:scale-105 group-hover:bg-brand-500/15 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Tag variant="brand" size="sm">
                      {service.badge}
                    </Tag>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[12px] font-bold uppercase tracking-wider text-slate-400">
                      Deliverables Include:
                    </div>
                    <ul className="space-y-1.5 text-sm text-slate-300">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Service CTA */}
                <div className="pt-5 border-t border-dark-800">
                  <Button
                    onClick={() => handleServiceCTA(service.serviceSelectValue)}
                    variant="secondary"
                    size="sm"
                    icon={ArrowRight}
                    className="w-full justify-center group-hover:border-brand-500/40 group-hover:bg-brand-500/10 group-hover:text-brand-200"
                  >
                    {service.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
