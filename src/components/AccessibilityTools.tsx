import React from 'react';
import Icon from './Icon';

function AccessibilityTools() {
  return (
    <div className="flex">
      <div className="flex justify-center items-center w-6 h-6 border-2 border-primary-500 text-primary-500 cursor-pointer mr-2 bg-white">
        <Icon icon="contrast" size="0.8rem" />
      </div>
      <div className="flex justify-center items-center w-6 h-6 border-2 border-primary-500 text-primary-500 cursor-pointer mr-2 bg-white">
        <Icon icon="fontSizeUp" size="0.8rem" />
      </div>
      <div className="flex justify-center items-center w-6 h-6 border-2 border-primary-500 text-primary-500 cursor-pointer bg-white">
        <Icon icon="fontSizeDown" size="0.8rem" />
      </div>
    </div>
  );
}

export default AccessibilityTools;
