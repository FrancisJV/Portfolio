import React from 'react';
import { cn } from '../utils/cn';

/**
 * Standard Layout Container with max width and responsive gutters
 */
export function Container({ children, className = '', id, ...props }) {
  return (
    <div
      id={id}
      className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full', className)}
      {...props}
    >
      {children}
    </div>
  );
}
