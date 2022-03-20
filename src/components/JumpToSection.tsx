import React, { ReactNode } from 'react';

interface JumpToSectionProps {
  section: HTMLElement | null;
  text?: string;
  classes?: string;
  children?: ReactNode | ReactNode[];
  onClick?: () => void;
}

function JumpToSection({
  section,
  text = 'SALTAR A SECCIÓN',
  classes = 'py-2 px-3 border-2 border-primary-600 text-primary-600 font-bold rounded-sm focus:bg-primary-600 focus:text-white focus:outline-primary-700 text-sm',
  children,
  onClick,
}: JumpToSectionProps) {
  return (
    <button
      className={children ? undefined : classes}
      onClick={() => {
        if (onClick) {
          onClick();
        }

        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {children ? children : text}
    </button>
  );
}

export default JumpToSection;
