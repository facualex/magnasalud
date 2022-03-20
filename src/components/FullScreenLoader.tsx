import React from 'react';
import Icon from './Icon';

function FullScreenLoader() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-primary-600">
      <div className="flex flex-col items-center">
        <span className="font-bold text-white text-lg">Cargando...</span>
        <Icon icon="contrast" size="3rem" className="text-white pt-3" />
      </div>
    </div>
  );
}

export default FullScreenLoader;
