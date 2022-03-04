import React, { useState } from 'react';
import Icon from './Icon';

interface WhatsappChatProps {}

interface State {
  isOpen: boolean;
  message: string | undefined;
  onOpen: (() => void) | undefined;
}

const initialState = {
  isOpen: false,
  onOpen: undefined,
  message: undefined,
};

function WhatsappChat(props: WhatsappChatProps) {
  const [state, setState] = useState<State>(initialState);

  const { isOpen, message, onOpen } = state;

  const toggleOpen = () => {
    setState((prevState) => ({ ...prevState, isOpen: !isOpen }));
  };

  const imageClasses = `
         rounded-full
         w-24
         h-24
         p-5
         absolute
         -right-3
         -top-2
         bg-chat-image
         bg-cover
         bg-center
        ${isOpen ? 'scale-50 ' : 'scale-100'}
        ease-in-out
        duration-300
        cursor-pointer
        z-40
  `;

  const textTagClasses = `
        flex
        flex-col
        justify-center
        bg-white
        w-full
        h-20
        rounded-l-sm
        rounded-r-xl
        pl-4
        border
        border-primary-600
        ${isOpen ? 'scale-0 ' : 'scale-100'}
        ease-in-out
        duration-300
  `;

  const chatClasses = `
        ${isOpen ? 'scale-100 ' : 'scale-0'}
        ease-in-out
        duration-300
        absolute
        -top-[31rem]
        left-0
        z-30
        w-full
        rounded-t-md
  `;

  return (
    <div className="flex absolute bottom-20 right-5 top rounded">
      <div className="flex w-80">
        <div className={textTagClasses}>
          <div className="flex items-center text-emerald-500 mb-1">
            <span className="text-xs font-bold text-primary-600 mb-1 mr-2">
              ¿Tienes una consulta?
            </span>
            <Icon icon="whatsapp" size="1.3rem" />
          </div>
          <p className="text-[10px] text-primary-600 w-48">
            ¡Haz click en la foto para abrir un chat <br /> con la doctora via WhatsApp!
          </p>
        </div>
        <div className={imageClasses} onClick={toggleOpen} />
        <div className={chatClasses}>
          <div className="flex justify-between items-center w-full bg-primary-600 py-3 px-2 rounded-t-md border border-primary-300">
            <div className="flex items-center">
              <div className="rounded-full w-3 h-3 bg-green-500 mr-3 ml-2" />
              <div className="flex flex-col text-white">
                <span className="font-bold text-sm">Dra. Margarita Buchelli</span>
                <span className="text-xs">Cirujano Dentista</span>
              </div>
            </div>
            <Icon
              icon="close"
              color="white"
              size="1.2rem"
              style={{ marginRight: '1rem' }}
              onClick={toggleOpen}
            />
          </div>
          <div className="flex flex-col content-between h-96 bg-white border border-primary-300 p-3">
            <span className="flex-1 bg-slate-200">Content</span>
            <span className="bg-slate-400">Content</span>
          </div>
          <div className="bg-white flex items-center border border-primary-500 p-2">
            <input
              className="flex-1 bg-slate-100 py-1 px-3 rounded-full border border-slate-500 mr-2"
              placeholder="Escribe tu mensaje aquí..."
            />
            <div className="flex justify-center items-center bg-primary-500 text-white p-2 rounded-full">
              <Icon icon="send" size="1.3rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsappChat;
