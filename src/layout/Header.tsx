import React from 'react';
import AccessibilityTools from '../components/AccessibilityTools';
import SideNavigation from '../components/SideNavigation';

function Header() {
  return (
    <div className="flex items-center py-3 justify-around pt-6">
      <div className="flex items-center">
        <img src="logo.png" width={120} className="mr-5" />
        <AccessibilityTools />
      </div>

      <SideNavigation />
    </div>
  );
}

export default Header;
