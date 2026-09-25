import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export interface SectionFrameProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  id?: string;
  children?: ReactNode;
  className?: string;
}

export function SectionFrame({
  as: Component = 'section',
  id,
  children,
  className = '',
  ...props
}: SectionFrameProps) {
  return (
    <Component
      id={id}
      className={`w-full py-16 sm:py-20 md:py-24 lg:py-32 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

export default SectionFrame;
