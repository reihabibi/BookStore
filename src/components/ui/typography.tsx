import React, { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  variant: 'heading' | 'subheading' | 'body' | 'caption';
  className?: string;
  onClick?: any,
}

const Typography: React.FC<TypographyProps> = ({ children, variant, className, onClick }) => {
  const baseClasses = 'font-sans';

  let Element: keyof JSX.IntrinsicElements = 'p';
  let styleClasses = '';

  switch (variant) {
    case 'heading':
      Element = 'h1';
      styleClasses = 'text-4xl font-bold text-white';
      break;
    case 'subheading':
      Element = 'h2';
      styleClasses = 'text-2xl font-bold text-white';
      break;
    case 'body':
      Element = 'p';
      styleClasses = 'text-base font-normal text-white';
      break;
    case 'caption':
      Element = 'span';
      styleClasses = 'text-sm font-light text-white';
      break;
    default:
      Element = 'p';
      styleClasses = 'text-base font-normal';
  }

  // eslint-disable-next-line react/no-children-prop
  return React.createElement(Element, { className: `${baseClasses} ${styleClasses} ${className}`, children, onClick });
};

export default Typography;
