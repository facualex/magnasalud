import React, { useEffect, useRef, useState } from 'react';
import { GiClosedBarbute } from 'react-icons/gi';
import Icon from './Icon';

interface WhatsappChatProps {}

interface State {
  isOpen: boolean;
  message: string;
  onOpen: (() => void) | undefined;
}

const initialState = {
  isOpen: false,
  onOpen: undefined,
  message: '',
};

function WhatsappChat(props: WhatsappChatProps) {
  const [state, setState] = useState<State>(initialState);
  const { isOpen, message, onOpen } = state;

  const sendButtonRef = useRef<null | HTMLAnchorElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const toggleOpen = () => {
    setState((prevState) => ({ ...prevState, isOpen: !isOpen }));
  };

  const setMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, message: event.target.value }));
  };

  const listenToEnterPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && message !== '') {
      if (isOpen) {
        sendButtonRef.current?.click();
      }
    }
  };

  useEffect(() => {
    if (!window) {
      return;
    }

    if (inputRef?.current && isOpen) {
      inputRef.current.focus();
    }

    window.addEventListener('keypress', listenToEnterPress);

    return () => window.removeEventListener('keypress', listenToEnterPress);
  }, [isOpen]);

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
        bg-white/95
        w-full
        h-20
        rounded-l-sm
        rounded-r-xl
        pl-4
        border
        border-primary-300
        ${isOpen ? 'scale-0 ' : 'scale-100'}
        ease-in-out
        duration-300
  `;

  const chatClasses = `
        ${isOpen ? 'scale-100 ' : 'scale-0'}
        ${isOpen ? 'opacity-100 ' : 'opacity-0'}
        ease-in-out
        duration-300
        fixed
        bottom-32
        right-3
        z-30
        w-11/12
        rounded-t-md
        border
  `;

  return (
    <div className="flex fixed bottom-20 right-5 top rounded bottom w-">
      <div className="flex w-80">
        <div className={textTagClasses}>
          <div className="flex items-center text-emerald-600 mb-1">
            <span className="text-xs font-bold text-primary-600 mb-1 mr-2">
              ¿Tienes una consulta?
            </span>
            <Icon icon="whatsapp" size="1.3rem" />
          </div>
          <p className="text-[10px] text-primary-600 w-48">
            ¡Haz click en la foto para escribirnos a Whatsapp!
          </p>
        </div>
        <div className={imageClasses} onClick={toggleOpen} />
        <div className={chatClasses}>
          <div className="flex justify-between items-center w-full bg-primary-600 py-3 px-2 rounded-t-md border border-primary-600">
            <div className="flex items-center">
              <div className="rounded-full w-3 h-3 bg-green-400 mr-3 ml-2" />
              <div className="flex flex-col text-white">
                <span className="font-bold text-sm">Dra. Margarita Buchelli</span>
                <span className="text-xs">Cirujano Dentista</span>
              </div>
            </div>
            <Icon
              icon="close"
              color="white"
              size="1.2rem"
              style={{ marginRight: '1rem', cursor: 'pointer' }}
              onClick={toggleOpen}
            />
          </div>
          <div className="flex flex-col content-between h-96 bg-white">
            <div className="flex-1">
              <div className="flex flex-col bg-slate-100 py-8 px-3 items-center">
                <div className="flex items-center justify-center text-primary-600 pl-2">
                  <Icon icon="instagram" size="1.5rem" className="text-primary-600" />
                  <span className="text-xs flex-1 text-slate-600 pl-3">
                    ¡Te invitamos a seguirnos en Instagram para acceder a descuentos y promociones!
                  </span>
                </div>
                <div className="flex justify-center items-center mt-3">
                  <a
                    href="https://instagram.com/magnasaludcl"
                    target="_blank"
                    rel="noopener noreferer noreferrer"
                    className="text-xs text-primary-800 ml-1"
                  >
                    @magnasaludcl
                  </a>
                </div>
              </div>
            </div>
            <span className="text-xs text-slate-600 px-3 mb-2">
              Escribe un mensaje a la doctora para{' '}
              <span className="text-primary-600 font-bold">agendar una hora</span> o si tienes{' '}
              <span className="text-primary-600 font-bold">una consulta</span>.
            </span>
          </div>
          <div className="bg-white flex items-center justify-center p-2 pb-5 relative">
            <input
              className="flex-1 bg-slate-100 py-2 px-3 rounded-full border text-primary-700 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 pr-16"
              placeholder="Escribe tu mensaje aquí..."
              name="message"
              onChange={setMessage}
              ref={inputRef}
            />
            <a
              href={`https://wa.me/${process.env.GATSBY_WHATSAPP_NUMBER}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-primary-600 text-white p-3 rounded-full absolute right-1 cursor-pointer"
              ref={sendButtonRef}
            >
              <Icon icon="send" size="1.3rem" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsappChat;
