import React from 'react';
import Icon from '../components/Icon';

function Location() {
  return (
    <section id="ubicacion" className="w-screen mb-10 bg-slate-50 pt-16 pb-2">
      <div className="flex flex-col items-center text-primary-600">
        <h1 className="text-lg text-primary-600 font-bold">UBICACIÓN</h1>
        <Icon icon="location" size="2rem" className="text-primary-600 mt-2" />
      </div>
      <div className="w-screen">
        <div className="flex justify-center">
          <p className="text-slate-600 text-md w-10/12 text-center mb-10 mt-5">
            Estamos a pasos del metro Plaza de Armas por la salida Estado
          </p>
        </div>
        <div className="flex w-full justify-evenly text-slate-600">
          <div className="flex">
            <Icon icon="mapPin" size="1.3rem" className="text-primary-600 mr-2" />
            <span>Paseo Philips 451</span>
          </div>
          <div className="flex">
            <Icon icon="building" size="1.3rem" className="text-primary-600 mr-2" />
            <span>Piso 7, Oficina 708</span>
          </div>
        </div>
        <div className="flex justify-center items-center text-white w-full h-96 bg-slate-600 my-10">
          MAP
        </div>
      </div>
    </section>
  );
}

export default Location;
