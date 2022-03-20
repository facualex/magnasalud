import React, { useState } from 'react';
import { useLockedBody } from 'usehooks-ts';
import Icon from './Icon';
import classNames from 'classnames';
import AccessibilityTools from './AccessibilityTools';
import JumpToSection from './JumpToSection';
import { NavigationLink } from '../pages';

interface SideNavigationProps {
  navigationLinks: Record<number, NavigationLink>;
  navigationLinksById: number[];
}

function SideNavigation({ navigationLinks, navigationLinksById }: SideNavigationProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useLockedBody(isOpen);

  const sidenavClass = classNames({
    flex: true,
    'flex-col': true,
    'w-2/3': true,
    'bg-white': true,
    fixed: true,
    'right-0': true,
    'top-0': true,
    'bottom-0': true,
    'translate-x-0': isOpen,
    'translate-x-full': !isOpen,
    'opacity-100': isOpen,
    'opacity-0': !isOpen,
    'ease-in-out': true,
    'duration-300': true,
    border: true,
    'border-slate-600': true,
  });

  const overlayClass = classNames({
    'bg-black': true,
    'opacity-20': true,
    fixed: true,
    'right-0': true,
    'top-0': true,
    'bottom-0': true,
    'left-0': true,
    hidden: !isOpen,
  });

  return (
    <div className="flex overflow-x-hidden z-50 lg:hidden">
      <Icon
        icon="menu"
        color="#2e9fb8e1"
        size="1.6rem"
        style={{ cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={overlayClass} onClick={() => setIsOpen(false)} />
      <div className={sidenavClass}>
        <div className="flex justify-around mt-10">
          <button onClick={() => setIsOpen(false)}>
            <Icon icon="close" className="text-primary-600" size="1.8rem" />
          </button>
          <AccessibilityTools />
        </div>
        <ul className="flex flex-col ml-10 mt-16">
          {navigationLinksById.map((index) => {
            const { section, name, icon } = navigationLinks[index];

            return (
              <li key={index}>
                <JumpToSection section={section} onClick={() => setIsOpen(false)}>
                  <div className="flex items-center mb-10">
                    <Icon icon={icon} size="1.5rem" className="mr-2 text-primary-600" />
                    <span className="text-md">{name}</span>
                  </div>
                </JumpToSection>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideNavigation;
