import React from 'react';
import { cn } from '../utils/cn';

/**
 * Standard Layout Container with max width (1440px) and responsive gutters
 */
export function Container({ children, className = '', id, ...props }) {
  return (
    <div
      id={id}
      className={cn('max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full', className)}
      {...props}
    >
      {children}
    </div>
  );
}
