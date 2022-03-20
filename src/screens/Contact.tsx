import React from 'react';
import Icon from '../components/Icon';

function Contact() {
  return (
    <section className="w-screen pb-56 relative" id="contacto">
      <div className="flex flex-col items-center text-primary-600 mb-10">
        <h1 className="text-lg text-primary-600 font-bold">CONTACTO</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between w-11/12 py-3 px-2 rounded-sm border mb-3">
          <div className="flex">
            <Icon icon="phone" size="1.5rem" className="text-primary-600 mx-2" />
            <span className="text-sm">+22 699 08 45</span>
          </div>
          <a
            href="tel:226990845"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-center items-center bg-primary-600 text-white font-bold py-2 px-5 rounded-sm text-xs"
          >
            LLAMAR
          </a>
        </div>
        <div className="flex items-center justify-between w-11/12 py-3 px-2 rounded-sm border mb-3">
          <div className="flex">
            <Icon icon="whatsapp" size="1.5rem" className="text-primary-600 mx-2" />
            <span className="text-sm">WhatsApp</span>
          </div>
          <a
            href={`https://wa.me/${process.env.GATSBY_WHATSAPP_NUMBER}`}
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-center items-center bg-primary-600 text-white font-bold py-2 px-5 rounded-sm text-xs"
          >
            ENVIAR MENSAJE
          </a>
        </div>
        <div className="flex items-center justify-between w-11/12 py-3 px-2 rounded-sm border mb-3">
          <div className="flex">
            <Icon icon="mail" size="1.5rem" className="text-primary-600 mx-2" />
            <span className="text-sm">consulta@magnasalud.cl</span>
          </div>
          <a
            href="mailto:consulta@magnasalud.cl"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-center items-center bg-primary-600 text-white font-bold py-2 px-5 rounded-sm text-xs"
          >
            ENVIAR MAIL
          </a>
        </div>
        <div className="flex items-center justify-between w-11/12 py-3 px-2 rounded-sm border">
          <div className="flex">
            <Icon icon="instagram" size="1.5rem" className="text-primary-600 mx-2" />
            <span className="text-sm">Instagram</span>
          </div>
          <a
            href="http://instagram.com/magnasaludcl"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-center items-center bg-primary-600 text-white font-bold py-2 px-5 rounded-sm text-xs"
          >
            VISITAR
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
