import React from 'react';
import BilingualHomePage from '../pages/BilingualHomePage';

// Metadata for the homepage
export const metadata = {
  title: 'Compra y Venta de Chatarra en Santiago | Ecometalix Spa',
  description: 'Ecometalix Spa: Compra y venta de chatarra, pago inmediato, horario extendido, balanza certificada. Santiago. Recibe tu dinero al instante. ¡Contáctanos por WhatsApp!',
  keywords: 'chatarra, metales, reciclaje, santiago, cobre, aluminio, hierro, bronce, pago inmediato',
  openGraph: {
    title: 'Compra y Venta de Chatarra en Santiago | Ecometalix Spa',
    description: 'Ecometalix Spa: Compra y venta de chatarra, pago inmediato, horario extendido, balanza certificada. Santiago. Recibe tu dinero al instante.',
    type: 'website',
    locale: 'es_CL',
    siteName: 'Ecometalix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compra y Venta de Chatarra en Santiago | Ecometalix Spa',
    description: 'Ecometalix Spa: Compra y venta de chatarra, pago inmediato, horario extendido, balanza certificada.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <BilingualHomePage pathname="/" lang="es" />;
} 