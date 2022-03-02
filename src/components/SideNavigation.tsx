import React, { useState } from 'react';
import { useLockedBody } from 'usehooks-ts';
import Icon from './Icon';
import classNames from 'classnames';
import AccessibilityTools from './AccessibilityTools';

function SideNavigation() {
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
    'ease-in-out': true,
    'duration-300': true,
    border: true,
    'border-slate-300': true,
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
    <div className="flex overflow-x-hidden z-50">
      <Icon
        icon="menu"
        color="#2e9fb8e1"
        size="1.6rem"
        style={{ cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={overlayClass} onClick={() => setIsOpen(false)} />
      <div className={sidenavClass}>
        <div className="flex justify-around mt-5">
          <button onClick={() => setIsOpen(false)}>Close</button>
          <AccessibilityTools />
        </div>
      </div>
    </div>
  );
}

export default SideNavigation;
