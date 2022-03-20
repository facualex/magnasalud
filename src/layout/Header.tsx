import React from 'react';
import AccessibilityTools from '../components/AccessibilityTools';
import JumpToSection from '../components/JumpToSection';
import SideNavigation from '../components/SideNavigation';
import { NavigationLink } from '../pages/index';

interface HeaderProps {
  scrollOffset?: number;
  navigationLinks: Record<number, NavigationLink>;
  navigationLinksById: number[];
}

function Header({ navigationLinks, navigationLinksById, scrollOffset = 100 }: HeaderProps) {
  return (
    <div
      className={`flex items-center h-20 justify-around bg-white shadow-md z-50 fixed top-0 left-0 right-0`}
    >
      <div className="flex items-center">
        <img src="logo.png" width={130} className="mr-5" />
        <AccessibilityTools />
      </div>

      <nav className="hidden lg:flex">
        <ul className="flex items-center">
          {navigationLinksById.map((index) => {
            const { section, name } = navigationLinks[index];
            return (
              <JumpToSection key={name} section={section}>
                <li className="mr-4 cursor-pointer text-xs text-primary-600 hover:font-bold ease-in-out duration-600">
                  {name.toUpperCase()}
                </li>
              </JumpToSection>
            );
          })}
        </ul>
      </nav>
      <SideNavigation navigationLinks={navigationLinks} navigationLinksById={navigationLinksById} />
    </div>
  );
}

export default Header;
