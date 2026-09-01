import React from 'react';
import { cn } from '../utils/cn';

/**
 * Universal Button & Action Link component
 */
export function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow'
  size = 'md',        // 'sm' | 'md' | 'lg'
  href,
  download,
  target,
  rel,
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed select-none group';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 min-h-[36px]',
    md: 'text-sm px-5 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-base px-6 py-3 gap-2.5 min-h-[48px]',
  };

  const variantStyles = {
    primary: 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/25 active:scale-[0.98]',
    glow: 'bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-lg shadow-brand-500/20 hover:shadow-brand-500/35 active:scale-[0.98]',
    secondary: 'bg-dark-800 hover:bg-dark-750 text-slate-200 border border-dark-700 hover:border-dark-600 shadow-sm active:scale-[0.98]',
    outline: 'bg-transparent hover:bg-brand-500/10 text-brand-300 border border-brand-500/30 hover:border-brand-400 active:scale-[0.98]',
    ghost: 'bg-transparent hover:bg-dark-800 text-slate-300 hover:text-white',
  };

  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {loading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : Icon && iconPosition === 'left' ? (
        <Icon className={cn('transition-transform duration-200', size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4', 'group-hover:-translate-x-0.5')} />
      ) : null}

      <span>{children}</span>

      {!loading && Icon && iconPosition === 'right' && (
        <Icon className={cn('transition-transform duration-200', size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4', 'group-hover:translate-x-0.5')} />
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    return (
      <a
        href={href}
        download={download}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      disabled={disabled || loading}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
