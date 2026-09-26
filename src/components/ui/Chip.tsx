import React from 'react';

export type ChipVariant = 'surface' | 'eucalyptus';
export type ChipSize = 'md';

export interface ChipProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
  as?: 'span' | 'div' | 'a' | 'button' | 'li';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

/**
 * Unified Portfolio Chip Component (Milestone 21 - Option A Minimal / Medium)
 * Softly rounded rectangular tag with consistent height, typography, and subtle micro-interaction.
 */
export function Chip({
  children,
  variant = 'eucalyptus',
  size = 'md',
  as: Component = 'span',
  href,
  className = '',
  ...rest
}: ChipProps) {
  // If an href is provided and no specific tag was given, render as an anchor
  const Tag = (href ? 'a' : Component) as React.ElementType;
  const isInteractive = Tag === 'a' || Tag === 'button';

  const sizeStyles: Record<ChipSize, string> = {
    md: 'h-[30px] px-3 text-xs',
  };

  const baseStyles = [
    'inline-flex items-center justify-center',
    sizeStyles[size],
    'rounded-md border',
    'font-mono font-medium leading-none',
    'transition-all duration-200 ease-out',
    'hover:-translate-y-0.5 hover:shadow-2xs',
    'motion-reduce:hover:translate-y-0 motion-reduce:transition-none',
    isInteractive
      ? 'cursor-pointer focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2'
      : 'cursor-default select-none',
  ].join(' ');

  const variantStyles: Record<ChipVariant, string> = {
    surface:
      'bg-surface border-border-subtle text-text-secondary hover:border-soft-green hover:text-pine hover:bg-surface',
    eucalyptus:
      'bg-eucalyptus/35 border-border-subtle text-text-secondary hover:bg-eucalyptus/60 hover:border-soft-green hover:text-pine',
  };

  return (
    <Tag
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Chip;
