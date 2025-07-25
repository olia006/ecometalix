import React from 'react';
import CobrePage from '../../../components/pages/CobrePage';

// Metadata for the copper page
export const metadata = {
  title: 'Cobre - Propiedades, Historia y Reciclaje',
  description: 'Descubre todo sobre el cobre: propiedades únicas, historia fascinante, importancia para Chile y reciclaje. Precios actualizados y datos científicos.',
  keywords: 'cobre, reciclaje cobre, propiedades cobre, historia cobre, chile cobre, chatarra cobre, precio cobre',
  alternates: {
    canonical: '/materiales/cobre',
  },
  openGraph: {
    title: 'Cobre - Historia y Reciclaje | Ecometalix',
    description: 'Todo sobre el cobre: propiedades, historia, importancia para Chile y reciclaje responsable.',
    type: 'article',
    locale: 'es_CL',
    url: 'https://ecometalix.cl/materiales/cobre',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/materials/cobre.webp',
        width: 1200,
        height: 630,
        alt: 'Cobre - Historia y Reciclaje | Ecometalix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Cobre - Historia y Reciclaje | Ecometalix',
    description: 'Todo sobre el cobre: propiedades, historia, importancia para Chile y reciclaje responsable.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Cobre() {
  return <CobrePage />;
} 