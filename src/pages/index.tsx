import React, { useEffect, useState } from 'react';
import '../styles/global.css';

import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
import Services from '../screens/Services';
import Contact from '../screens/Contact';
import Location from '../screens/Location';

import Footer from '../layout/Footer';
import Header from '../layout/Header';
import WhatsappChat from '../components/WhatsappChat';
import FullScreenLoader from '../components/FullScreenLoader';
import { AvailableIcons } from '../components/Icon';

export type NavigationLink = {
  section: HTMLElement | null;
  name: string;
  icon: AvailableIcons;
};

interface State {
  homeSection: HTMLElement | null;
  aboutUsSection: HTMLElement | null;
  servicesSection: HTMLElement | null;
  locationSection: HTMLElement | null;
  contactSection: HTMLElement | null;
  isLoading: boolean;
}

const initialState: State = {
  homeSection: null,
  aboutUsSection: null,
  servicesSection: null,
  locationSection: null,
  contactSection: null,
  isLoading: false,
};

function App() {
  const [state, setState] = useState<State>(initialState);

  const setLoading = (loadingState: boolean) => {
    setState((previousState) => ({
      ...previousState,
      isLoading: loadingState,
    }));
  };

  const {
    isLoading,
    aboutUsSection,
    servicesSection,
    locationSection,
    contactSection,
    homeSection,
  } = state;

  useEffect(() => {
    setLoading(true);

    const homeSection = document.getElementById('mainContainer');
    const aboutUsSection = document.getElementById('nosotros');
    const servicesSection = document.getElementById('servicios');
    const locationSection = document.getElementById('ubicacion');
    const contactSection = document.getElementById('contacto');

    setState((previousState) => ({
      ...previousState,
      homeSection,
      aboutUsSection,
      servicesSection,
      locationSection,
      contactSection,
    }));

    setLoading(false);
  }, []);

  return isLoading ? (
    <FullScreenLoader />
  ) : (
    <main className="w-full overflow-x-hidden relative h-screen" id="mainContainer">
      <Header
        navigationLinks={{
          0: {
            section: homeSection,
            name: 'Inicio',
            icon: 'home',
          },
          1: {
            section: aboutUsSection,
            name: 'Nosotros',
            icon: 'team',
          },
          2: {
            section: servicesSection,
            name: 'Servicios',
            icon: 'work',
          },
          3: {
            section: locationSection,
            name: 'Ubicación',
            icon: 'locationOutline',
          },
          4: {
            section: contactSection,
            name: 'Contacto',
            icon: 'phone',
          },
        }}
        navigationLinksById={[0, 1, 2, 3, 4]}
      />
      <Home />
      <AboutUs />
      <Services />
      <Location />
      <Contact />

      <WhatsappChat />
      <Footer />
    </main>
  );
}

export default App;
