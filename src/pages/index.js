import * as React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import WhatsappChat from '../components/WhatsappChat';

import '../styles/global.css';
import Icon from '../components/Icon';

const IndexPage = () => {
  return (
    <main className="w-full overflow-x-hidden relative h-screen">
      <Header />
      <div className="flex flex-col items-center w-full mt-6 py-1">
        <div className="w-3/4">
          <h1 className="text-4xl font-medium text-primary-600">
            Atención dental de calidad y personalizada
          </h1>
          <h2 className="text-md text-primary-400 mt-2">a precios accesibles para todos.</h2>
          <button className="bg-primary-600 text-white py-3 px-4 text-xs rounded mt-4">
            Agenda una hora
          </button>
          <div className="flex flex-col mt-10">
            <div className="flex items-center mb-2 p-2">
              <div className="flex flex-2 justify-center items-center rounded-full border text-primary-400 border-primary-400 bg-white w-14 h-14">
                <Icon icon="tooth" size="1.3rem" />
              </div>
              <div className="flex flex-1 flex-col ml-2">
                <div className="font-bold text-[11px] text-primary-600">GRATIS</div>
                <div className="text-[11px] text-primary-500 w-2/3">
                  Evaluación y presupuesto dental sin costo.
                </div>
              </div>
            </div>
            <div className="flex items-center mb-2 p-2">
              <div className="flex flex-2 justify-center items-center rounded-full border text-primary-400 border-primary-400 bg-white w-14 h-14">
                <Icon icon="offer" size="1.5rem" />
              </div>
              <div className="flex flex-1 flex-col ml-2">
                <div className="font-bold text-[11px] text-primary-600">20% DESCUENTO</div>
                <div className="text-[11px] text-primary-500 w-2/3">
                  ¡En tu primer tratamiento con nosotros!
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-2 p-2">
            <div className="flex flex-2 justify-center items-center rounded-full border text-primary-400 border-primary-400 bg-white w-14 h-14">
              <Icon icon="price" size="1.8rem" />
            </div>
            <div className="flex flex-1 flex-col ml-2">
              <div className="font-bold text-[11px] text-primary-600">MEJORES PRECIOS</div>
              <div className="text-[11px] text-primary-500 w-2/3">
                Entregamos tratamientos dentales a los precios más accesibles para todos.
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full h-screen -z-50 opacity-5 absolute top-0 left-0 right-0 bottom-0">
        <img src="background-woman.png" className="object-cover w-full h-full" />
      </section>
      <WhatsappChat />
      <Footer />
    </main>
  );
};

export default IndexPage;
