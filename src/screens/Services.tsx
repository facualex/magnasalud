import React, { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

function Services() {
  const servicesTitleRef = useRef<HTMLDivElement | null>(null);

  const servicesTitleEntry = useIntersectionObserver(servicesTitleRef, {
    threshold: 0.7,
    freezeOnceVisible: true,
  });

  const isServicesTitleVisible = !!servicesTitleEntry?.isIntersecting;

  return (
    <section id="servicios" className="w-screen mb-36">
      <div className="flex flex-col justify-center items-center w-full h-80 bg-slate-600 bg-services-image bg-cover bg-center relative ease-in-out duration-600">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
        <h1 className="flex justify-center border-2 border-primary-600 p-5 w-10/12 bg-white text-primary-600 font-bold opacity-90">
          SERVICIOS
        </h1>
      </div>
      <div className="flex flex-col items-center font-bold text-sm text-primary-600">
        <div className="w-10/12 bg-white relative px-6 py-4 mt-10 mb-5 rounded-sm shadow-sm">
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary-600"></div>
          <span>Odontología general</span>
        </div>
        <div className="w-10/12 bg-white relative px-6 py-4 mb-5 rounded-sm shadow-sm">
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary-600"></div>
          <span>Odontología estética</span>
        </div>
        <div className="w-10/12 bg-white relative px-6 py-4 mb-5 rounded-sm shadow-sm">
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary-600"></div>
          <span>Endodoncias</span>
        </div>
        <div className="w-10/12 bg-white relative px-6 py-4 mb-5 rounded-sm shadow-sm">
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary-600"></div>
          <span>Blanqueamientos dentales</span>
        </div>
        <div className="w-10/12 bg-white relative px-6 py-4 mb-5 rounded-sm shadow-sm">
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary-600"></div>
          <span>Prótesis removibles</span>
        </div>
        <div className="w-10/12 bg-white relative px-6 py-4 mb-5 rounded-sm shadow-sm">
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary-600"></div>
          <span>Prótesis fijas</span>
        </div>
      </div>
    </section>
  );
}

export default Services;
