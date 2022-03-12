import * as React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import WhatsappChat from '../components/WhatsappChat';

import '../styles/global.css';
import Icon from '../components/Icon';
import ImageViewer from '../components/ImageViewer';

const images = [
  {
    src: 'https://picsum.photos/500',
  },
  {
    src: 'https://picsum.photos/500',
  },
  {
    src: 'https://picsum.photos/500',
  },
  {
    src: 'https://picsum.photos/500',
  },
  {
    src: 'https://picsum.photos/500',
  },
];

const IndexPage = () => {
  return (
    <main className="w-full overflow-x-hidden relative h-screen">
      <Header />
      <div className="flex flex-col items-center w-full h-screen mt-6 py-1">
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
              <div className="flex flex-2 justify-center items-center rounded-full border text-primary-400 border-primary-400 bg-white w-16 h-16">
                <Icon icon="tooth" size="1.3rem" />
              </div>
              <div className="flex flex-1 flex-col ml-2">
                <div className="font-bold text-[13px] text-primary-600">GRATIS</div>
                <div className="text-[12px] text-primary-500 w-10/12">
                  Evaluación y presupuesto dental sin costo.
                </div>
              </div>
            </div>
            <div className="flex items-center mb-2 p-2">
              <div className="flex flex-2 justify-center items-center rounded-full border text-primary-400 border-primary-400 bg-white w-16 h-16">
                <Icon icon="offer" size="1.5rem" />
              </div>
              <div className="flex flex-1 flex-col ml-2">
                <div className="font-bold text-[13px] text-primary-600">20% DESCUENTO</div>
                <div className="text-[12px] text-primary-500 w-10/12">
                  ¡En tu primer tratamiento con nosotros!
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-2 p-2">
            <div className="flex flex-2 justify-center items-center rounded-full border text-primary-400 border-primary-400 bg-white w-16 h-16">
              <Icon icon="price" size="1.8rem" />
            </div>
            <div className="flex flex-1 flex-col ml-2">
              <div className="font-bold text-[13px] text-primary-600">MEJORES PRECIOS</div>
              <div className="text-[12px] text-primary-500 w-10/12">
                Entregamos tratamientos dentales a los precios más accesibles para todos.
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full h-screen -z-50 opacity-5 absolute top-0 left-0 right-0 bottom-0">
        <img src="background-woman.png" className="object-cover w-full h-full" />
      </section>
      <section className="w-full mt-16">
        <h1 className="text-xl text-primary-500 font-bold pb-10 text-center">NOSOTROS</h1>
        <ImageViewer images={images} />

        <div className="w-screen text-primary-600 p-8 shadow-sm relative">
          <div className="flex justify-center items-center">
            <Icon icon="instagram" size="2rem" />
            <div className="flex flex-col ml-3">
              <h3 className="text-md font-bold">Síguenos en Instagram</h3>
              <span className="text-sm text-slate-400">
                ¡Vamos publicando ofertas y descuentos!
              </span>
            </div>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute bottom-0 right-0 left-0"></div>
        </div>
        <div className="w-screen flex justify-center items-center pt-8">
          <h2 className="text-[1.5rem] w-3/4 text-center text-primary-600 italic">
            Nuesta misión es tanto tanto, para tanto tanto...
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="min-h-[96] flex flex-col items-center w-9/12 rounded-md mt-10 border border-slate-300 shadow-md shadow-slate-100 relative">
            <div className="flex items-center justify-center border rounded-full border-slate-300 p-12 my-5">
              <Icon icon="tooth" size="3rem" className="text-primary-400" />
            </div>
            <h4 className="font-bold text-primary-500 mb-4">COMPROMISO</h4>
            <div className="flex flex-col w-10/12">
              <p className="text-sm text-slate-400 tracking-wider pb-10">
                Estamos comprometidos con entregar el mejor servicio dental a precios accesibles
                para todos. Por esto contamos con profesionales de alto nivel con más de 30 años de
                experiencia y compromiso con la salud dental.
              </p>
            </div>
            <div className="w-full h-2 bg-primary-300 absolute bottom-0 right-0 left-0"></div>
          </div>
          <div className="min-h-[96] flex flex-col items-center w-9/12 rounded-md mt-10 border border-slate-300 shadow-md shadow-slate-100 relative">
            <div className="flex items-center justify-center border rounded-full border-slate-300 p-12 my-5">
              <Icon icon="health" size="3rem" className="text-primary-400" />
            </div>
            <h4 className="font-bold text-primary-500 mb-4">ATENCIÓN PERZONALIZADA</h4>
            <div className="flex flex-col w-10/12">
              <p className="text-sm text-slate-400 tracking-wider pb-3">
                Sabemos que ir al dentista puede ser difícil para muchos.
              </p>
              <p className="text-sm text-slate-400 tracking-wider pb-10">
                Es fundamental para nosotros entregar un servicio humano y cercano con enfoque en
                cada persona. Atender a tu salud no tiene que ser un trámite pesado más.
              </p>
            </div>
            <div className="w-full h-2 bg-primary-300 absolute bottom-0 right-0 left-0"></div>
          </div>
          <div className="min-h-[96] flex flex-col items-center w-9/12 rounded-md mt-10 border border-slate-300 shadow-md shadow-slate-100 relative mb-56">
            <div className="flex items-center justify-center border rounded-full border-slate-300 p-12 my-5">
              <Icon icon="price" size="4rem" className="text-primary-400" />
            </div>
            <h4 className="font-bold text-primary-500 mb-4">PRECIOS ACCESIBLES</h4>
            <div className="flex flex-col w-10/12">
              <p className="text-sm text-slate-400 tracking-wider pb-3">
                Hemos visto a lo largo de los años que muchas personas dejan de cuidar su salud
                dental por el simple hecho de que los precios son un dolor de muelas.
              </p>
              <p className="text-sm text-slate-400 tracking-wider pb-10">
                Estamos al tanto de esta situación, por ello, ofrecemos tratamientos dentales de
                calidad a precios accesibles para todo el mundo.
              </p>
            </div>
            <div className="w-full h-2 bg-primary-300 absolute bottom-0 right-0 left-0"></div>
          </div>
        </div>
      </section>
      <section className="w-screen mb-56">
        <div className="flex flex-col justify-center items-center w-full h-80 bg-slate-600 bg-services-image bg-cover bg-center relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
          <h1 className="flex justify-center border-2 border-primary-500 p-5 w-10/12 bg-white text-primary-500 font-bold opacity-90">
            SERVICIOS
          </h1>
        </div>
        <div className="flex flex-col items-center font-bold text-sm text-primary-600">
          <div className="w-10/12 bg-slate-100 relative px-6 py-4 mt-10 mb-5 rounded-sm shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary-600"></div>
            <span>Odontología general</span>
          </div>
          <div className="w-10/12 bg-slate-100 relative px-6 py-4 mb-5 rounded-sm shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary-600"></div>
            <span>Odontología estética</span>
          </div>
          <div className="w-10/12 bg-slate-100 relative px-6 py-4 mb-5 rounded-sm shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary-600"></div>
            <span>Endodoncias</span>
          </div>
          <div className="w-10/12 bg-slate-100 relative px-6 py-4 mb-5 rounded-sm shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary-600"></div>
            <span>Blanqueamientos dentales</span>
          </div>
          <div className="w-10/12 bg-slate-100 relative px-6 py-4 mb-5 rounded-sm shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary-600"></div>
            <span>Prótesis removibles</span>
          </div>
          <div className="w-10/12 bg-slate-100 relative px-6 py-4 mb-5 rounded-sm shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary-600"></div>
            <span>Prótesis fijas</span>
          </div>
        </div>
      </section>
      <WhatsappChat />
      <Footer />
    </main>
  );
};

export default IndexPage;
