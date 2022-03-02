import * as React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import WhatsappChat from '../components/WhatsappChat';

import '../styles/global.css';

const IndexPage = () => {
  return (
    <main className="w-full overflow-x-hidden relative h-screen">
      <Header />
      <div className="flex flex-col items-center w-full mt-10 py-7">
        <div className="w-3/4">
          <h1 className="text-4xl font-medium text-primary-600">
            Atención dental de calidad y personalizada
          </h1>
          <h2 className="text-md text-primary-400 mt-2">a precios accesibles para todos.</h2>
          <button className="bg-primary-600 text-white py-3 px-4 text-xs rounded mt-4">
            Agenda una hora
          </button>
        </div>
      </div>
      <section className="w-full h-screen -z-50 opacity-10 absolute top-0 left-0 right-0 bottom-0">
        <img src="background-woman.png" className="object-cover w-full h-full" />
      </section>
      <WhatsappChat />
      <Footer />
    </main>
  );
};

export default IndexPage;
