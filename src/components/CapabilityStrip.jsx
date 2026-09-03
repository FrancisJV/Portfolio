import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Container } from './Container';

export function CapabilityStrip() {
  return (
    <section className="py-4.5 sm:py-5 bg-dark-900/70 border-y border-dark-800/80 relative overflow-hidden" aria-label="Core Capabilities">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3.5 lg:gap-4 xl:gap-6 w-full">
          {/* Label */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-400 shadow-sm shadow-brand-400/50 flex-shrink-0"></span>
            <span className="text-sm sm:text-[14.5px] font-semibold uppercase tracking-wider text-slate-300 whitespace-nowrap">
              Core Capabilities
            </span>
          </div>

          {/* Chips Row: Single line on desktop (lg/xl/2xl), clean wrap on tablet/mobile */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-end gap-2 xl:gap-2.5 2xl:gap-3 w-full lg:w-auto">
            {siteConfig.capabilityStrip.map((capability) => (
              <span
                key={capability}
                className="px-3.5 xl:px-4 py-2 rounded-xl bg-dark-950/80 border border-dark-750/90 text-[13.5px] xl:text-[14px] 2xl:text-[14.5px] font-medium text-slate-200 hover:text-brand-300 hover:border-brand-500/40 transition-colors shadow-sm whitespace-nowrap flex-shrink-0"
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
