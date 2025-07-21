import React from 'react';
import FierroCortoPage from '../../../components/pages/FierroCortoPage';

// Metadata for the short iron page
export const metadata = {
  title: 'Fierro Corto - Chatarra de Hierro Industrial',
  description: 'Fierro corto: chatarra de hierro de alta calidad para reciclaje industrial. Especificaciones técnicas, usos y precios competitivos actualizados.',
  keywords: 'fierro corto, chatarra hierro, reciclaje hierro, metal ferroso, precio fierro, hierro industrial',
  alternates: {
    canonical: '/materiales/fierro-corto',
  },
  openGraph: {
    title: 'Fierro Corto - Chatarra Industrial | Ecometalix',
    description: 'Fierro corto: chatarra de hierro de alta calidad para reciclaje industrial. Precios competitivos.',
    type: 'article',
    locale: 'es_CL',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FierroCorto() {
  return <FierroCortoPage />;
} 