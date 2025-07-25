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
    url: 'https://ecometalix.cl/materiales/fierro-corto',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/materials/FierroCorto.webp',
        width: 1200,
        height: 630,
        alt: 'Fierro Corto - Chatarra Industrial | Ecometalix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Fierro Corto - Chatarra Industrial | Ecometalix',
    description: 'Fierro corto: chatarra de hierro de alta calidad para reciclaje industrial. Precios competitivos.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FierroCorto() {
  return <FierroCortoPage />;
} 