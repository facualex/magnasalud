import React, { useRef } from 'react';
import ImageViewer from '../components/ImageViewer';
import Icon from '../components/Icon';
import { useIntersectionObserver } from 'usehooks-ts';

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

function AboutUs() {
  const firstAboutUsCardRef = useRef<HTMLDivElement | null>(null);
  const secondAboutUsCardRef = useRef<HTMLDivElement | null>(null);
  const thirdAboutUsCardRef = useRef<HTMLDivElement | null>(null);

  const firstCardEntry = useIntersectionObserver(firstAboutUsCardRef, {
    threshold: 0.7,
    freezeOnceVisible: true,
  });
  const secondCardEntry = useIntersectionObserver(secondAboutUsCardRef, {
    threshold: 0.7,
    freezeOnceVisible: true,
  });
  const thirdCardEntry = useIntersectionObserver(thirdAboutUsCardRef, {
    threshold: 0.7,
    freezeOnceVisible: true,
  });

  const isFirstCardVisible = !!firstCardEntry?.isIntersecting;
  const isSecondCardVisible = !!secondCardEntry?.isIntersecting;
  const isThirdCardVisible = !!thirdCardEntry?.isIntersecting;

  return (
    <section id="nosotros" className="w-full mt-16">
      <h1 className="text-xl text-primary-600 font-bold pb-10 text-center after:h-1 after:w-2/12 after:bg-primary-600 after:flex">
        NOSOTROS
      </h1>
      <ImageViewer images={images} />

      <div className="w-screen text-primary-600 p-8 shadow-sm relative">
        <div className="flex justify-center items-center">
          <Icon icon="instagram" size="2rem" />
          <div className="flex flex-col ml-3">
            <h3 className="text-md font-bold">Síguenos en Instagram</h3>
            <span className="text-sm text-slate-600">¡Vamos publicando ofertas y descuentos!</span>
          </div>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-primary-200 to-primary-600 absolute bottom-0 right-0 left-0"></div>
      </div>
      <div className="w-screen flex justify-center items-center pt-8">
        <h2 className="text-[1.5rem] w-3/4 text-center text-primary-600 italic">
          Nuesta misión es tanto tanto, para tanto tanto...
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center pt-8">
        <span className="font-bold text-primary-600 text-lg pb-3">Más de</span>
        <div className="flex justify-center items-center border rounded-full border-primary-600  p-16">
          <span className="font-bold text-primary-600 text-5xl">30</span>
        </div>
        <span className="font-bold text-primary-600 text-lg pt-3">años de experiencia</span>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div
          ref={firstAboutUsCardRef}
          className={`min-h-[96] flex flex-col items-center w-9/12 rounded-md mt-10 border border-slate-600 shadow-md shadow-slate-100 relative ${
            isFirstCardVisible ? 'opacity-100' : 'opacity-0'
          } ease-in-out duration-1000`}
        >
          <div className="flex items-center justify-center border rounded-full border-slate-600 p-12 my-5">
            <Icon icon="tooth" size="3rem" className="text-primary-600" />
          </div>
          <h4 className="font-bold text-primary-600 mb-4">COMPROMISO</h4>
          <div className="flex flex-col w-10/12">
            <p className="text-sm text-slate-600 tracking-wider pb-10">
              Estamos comprometidos con entregar el mejor servicio dental a precios accesibles para
              todos. Por esto contamos con profesionales de alto nivel con más de 30 años de
              experiencia y compromiso con la salud dental.
            </p>
          </div>
          <div className="w-full h-2 bg-primary-600 absolute bottom-0 right-0 left-0"></div>
        </div>
        <div
          ref={secondAboutUsCardRef}
          className={`min-h-[96] flex flex-col items-center w-9/12 rounded-md mt-10 border border-slate-600 shadow-md shadow-slate-100 relative ${
            isSecondCardVisible ? 'opacity-100' : 'opacity-0'
          } ease-in-out duration-1000`}
        >
          <div className="flex items-center justify-center border rounded-full border-slate-600 p-12 my-5">
            <Icon icon="health" size="3rem" className="text-primary-600" />
          </div>
          <h4 className="font-bold text-primary-600 mb-4">ATENCIÓN PERZONALIZADA</h4>
          <div className="flex flex-col w-10/12">
            <p className="text-sm text-slate-600 tracking-wider pb-3">
              Sabemos que ir al dentista puede ser difícil para muchos.
            </p>
            <p className="text-sm text-slate-600 tracking-wider pb-10">
              Es fundamental para nosotros entregar un servicio humano y cercano con enfoque en cada
              persona. Atender a tu salud no tiene que ser un trámite pesado más.
            </p>
          </div>
          <div className="w-full h-2 bg-primary-600 absolute bottom-0 right-0 left-0"></div>
        </div>
        <div
          ref={thirdAboutUsCardRef}
          className={`min-h-[96] flex flex-col items-center w-9/12 rounded-md mt-10 border border-slate-600 shadow-md shadow-slate-100 relative ${
            isThirdCardVisible ? 'opacity-100' : 'opacity-0'
          } ease-in-out duration-1000 mb-56`}
        >
          <div className="flex items-center justify-center border rounded-full border-slate-600 p-12 my-5">
            <Icon icon="price" size="4rem" className="text-primary-600" />
          </div>
          <h4 className="font-bold text-primary-600 mb-4">PRECIOS ACCESIBLES</h4>
          <div className="flex flex-col w-10/12">
            <p className="text-sm text-slate-600 tracking-wider pb-3">
              Hemos visto a lo largo de los años que muchas personas dejan de cuidar su salud dental
              por el simple hecho de que los precios son un dolor de muelas.
            </p>
            <p className="text-sm text-slate-600 tracking-wider pb-10">
              Estamos al tanto de esta situación, por ello, ofrecemos tratamientos dentales de
              calidad a precios accesibles para todo el mundo.
            </p>
          </div>
          <div className="w-full h-2 bg-primary-600 absolute bottom-0 right-0 left-0"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
