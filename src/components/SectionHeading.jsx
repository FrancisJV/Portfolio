import React from 'react';
import { cn } from '../utils/cn';

/**
 * Reusable Section Heading component
 * Features an elegant pill eyebrow, bold section title, and scannable description.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center', // 'left' | 'center'
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={cn('mb-12 md:mb-16', isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl', className)}>
      {eyebrow && (
        <div className={cn('inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-500/10 text-brand-300 border border-brand-500/20 mb-3.5', isCenter ? 'mx-auto' : '')}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
          {eyebrow}
        </div>
      )}
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
