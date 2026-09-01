import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Container } from './Container';

export function CapabilityStrip() {
  return (
    <section className="py-6 bg-dark-900/70 border-y border-dark-800/80 relative overflow-hidden" aria-label="Core Capabilities">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-brand-400"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Core Capabilities
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-2.5">
            {siteConfig.capabilityStrip.map((capability) => (
              <span
                key={capability}
                className="px-3 py-1.5 rounded-lg bg-dark-950/80 border border-dark-750 text-xs font-medium text-slate-300 hover:text-brand-300 hover:border-brand-500/30 transition-colors shadow-sm"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
