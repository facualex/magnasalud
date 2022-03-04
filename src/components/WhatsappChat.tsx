import React, { useState } from 'react';

interface WhatsappChatProps {}

interface State {
  isOpen: boolean;
}

const initialState = {
  isOpen: false,
};

function WhatsappChat(props: WhatsappChatProps) {
  const [state, setState] = useState<State>(initialState);

  const { isOpen, simple } = state;

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

  return (
    <div className="flex absolute bottom-20 right-5">
      <div className="flex w-80">
        <div className={textTagClasses}>
          <span className="text-xs font-bold text-primary-600 mb-1">¿Tienes una consulta?</span>
          <p className="text-[10px] text-primary-600 w-48">
            ¡Haz click en la foto para abrir un chat <br /> con la doctora via WhatsApp!
          </p>
        </div>
        <div className={imageClasses} onClick={toggleOpen} />
      </div>
    </div>
  );
}

export default WhatsappChat;
