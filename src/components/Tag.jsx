import React from 'react';
import { cn } from '../utils/cn';

/**
 * Reusable Tag / Badge component
 */
export function Tag({
  children,
  variant = 'default', // 'default' | 'brand' | 'success' | 'outline' | 'subtle'
  size = 'md',        // 'sm' | 'md'
  className = '',
}) {
  const variantStyles = {
    default: 'bg-dark-800 text-slate-300 border border-dark-700/80',
    brand: 'bg-brand-500/10 text-brand-300 border border-brand-500/20',
    success: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
    outline: 'bg-transparent text-slate-300 border border-dark-700 hover:border-dark-600',
    subtle: 'bg-dark-900/60 text-slate-400 border border-dark-800/80',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-medium rounded-md',
    md: 'text-xs px-3 py-1 font-medium rounded-lg',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 transition-colors duration-150 select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
