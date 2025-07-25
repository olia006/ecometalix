import React from 'react';
import FierroMixtoPage from '../../../components/pages/FierroMixtoPage';

// Metadata for the mixed iron page
export const metadata = {
  title: 'Fierro Mixto - Chatarra Variada y Reciclaje',
  description: 'Fierro mixto: chatarra de hierro con composición variada. Conoce sus características, procesos de separación y valorización de materiales mixtos.',
  keywords: 'fierro mixto, chatarra variada, composición mixta, separación metales, reciclaje mixto, precio fierro mixto',
  alternates: {
    canonical: '/materiales/fierro-mixto',
  },
  openGraph: {
    title: 'Fierro Mixto - Chatarra Variada | Ecometalix',
    description: 'Fierro mixto: chatarra de hierro con composición variada. Procesos de separación y valorización.',
    type: 'article',
    locale: 'es_CL',
    url: 'https://ecometalix.cl/materiales/fierro-mixto',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/materials/fierromixto.webp',
        width: 1200,
        height: 630,
        alt: 'Fierro Mixto - Chatarra Variada | Ecometalix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Fierro Mixto - Chatarra Variada | Ecometalix',
    description: 'Fierro mixto: chatarra de hierro con composición variada. Procesos de separación y valorización.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FierroMixto() {
  return <FierroMixtoPage />;
} 