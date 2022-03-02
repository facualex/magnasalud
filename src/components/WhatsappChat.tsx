import React, { useState } from 'react';

interface State {
  isOpen: boolean;
  simple: boolean; // if false show chat thumb with label version, else simple thumb version
}

const initialState = {
  isOpen: false,
  simple: false,
};

function WhatsappChat() {
  const [state, setState] = useState<State>(initialState);

  const { isOpen, simple } = state;

  return (
    <div className="flex absolute bottom-20 right-5 cursor-pointer">
      <div className="flex w-80">
        <div className="flex flex-col justify-center bg-white w-full h-20 rounded-l-sm rounded-r-xl pl-4 border border-primary-600">
          <span className="text-xs font-bold text-primary-600 mb-1">¿Tienes una consulta?</span>
          <p className="text-[10px] text-primary-600 w-48">
            ¡Haz click aquí y ponte en contacto <br /> con la doctora via WhatsApp!
          </p>
        </div>
        <div className="rounded-full w-24 h-24 p-5 absolute -right-3 -top-2 bg-chat-image bg-cover bg-center" />
      </div>
    </div>
  );
}

export default WhatsappChat;
