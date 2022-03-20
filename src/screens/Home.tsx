import React from 'react';
import Icon from '../components/Icon';

function Home() {
  return (
    <section id="inicio" className="flex flex-col items-center w-full h-screen">
      <div className="flex flex-col">
        <div className="bg-slate-100/75 w-screen pt-16 h-[40rem] lg:pt-16 lg:pl-56">
          <div className="px-10">
            <h1 className="text-4xl font-medium text-primary-600 lg:text-7xl lg:font-normal w-10/12">
              Atención dental personalizada de calidad.
            </h1>
            <p className="text-md text-primary-600 mt-4 lg:text-2xl">
              Ofrecemos una atención de calidad, con enfoque en el buen trato a cada persona y a
              precios que no se transformen en otro dolor de muelas...
            </p>
            <button className="bg-primary-600 text-white py-3 px-4 text-xs rounded mt-4 lg:py-4 lg:px-5 lg:text-[1rem]">
              Agenda una hora
            </button>
          </div>
          <div className="flex justify-center w-screen">
            <img src="vector-dental.png" className="opacity-60 mt-10 w-80" />
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="flex items-center mb-2 p-2">
            <div className="flex flex-2 justify-center items-center rounded-full border text-primary-600 border-primary-600 bg-white w-16 h-16 text-xl lg:text-2xl">
              <Icon icon="tooth" />
            </div>
            <div className="flex flex-1 flex-col ml-2">
              <div className="font-bold text-[13px] text-primary-600">GRATIS</div>
              <div className="text-[12px] text-primary-600 w-10/12">
                Evaluación y presupuesto dental sin costo.
              </div>
            </div>
          </div>
          <div className="flex items-center mb-2 p-2">
            <div className="flex flex-2 justify-center items-center rounded-full border text-primary-600 border-primary-600 bg-white w-16 h-16 text-xl lg:text-3xl">
              <Icon icon="offer" />
            </div>
            <div className="flex flex-1 flex-col ml-2">
              <div className="font-bold text-[13px] text-primary-600">20% DESCUENTO</div>
              <div className="text-[12px] text-primary-600 w-10/12">
                ¡En tu primer tratamiento con nosotros!
              </div>
            </div>
          </div>
          <div className="flex items-center mb-2 p-2">
            <div className="flex flex-2 justify-center items-center rounded-full border text-primary-600 border-primary-600 bg-white w-16 h-16">
              <Icon icon="price" size="1.8rem" />
            </div>
            <div className="flex flex-1 flex-col ml-2">
              <div className="font-bold text-[13px] text-primary-600">MEJORES PRECIOS</div>
              <div className="text-[12px] text-primary-600 w-10/12">
                Entregamos tratamientos dentales a los precios más accesibles para todos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
