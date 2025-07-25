import React from 'react';
import AluminiumPage from '../../../components/pages/AluminiumPage';

// Metadata for the aluminum page
export const metadata = {
  title: 'Aluminio - Reciclaje y Propiedades Técnicas',
  description: 'Aluminio: metal ligero, resistente y 100% reciclable. Conoce sus propiedades, usos industriales y nuestros precios de compra actualizados.',
  keywords: 'aluminio, reciclaje aluminio, propiedades aluminio, chatarra aluminio, precio aluminio, metal ligero',
  alternates: {
    canonical: '/materiales/aluminio',
  },
  openGraph: {
    title: 'Aluminio - Reciclaje y Propiedades | Ecometalix',
    description: 'Aluminio: metal ligero, resistente y 100% reciclable. Propiedades técnicas y precios actualizados.',
    type: 'article',
    locale: 'es_CL',
    url: 'https://ecometalix.cl/materiales/aluminio',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/materials/aluminium.webp',
        width: 1200,
        height: 630,
        alt: 'Aluminio - Reciclaje y Propiedades | Ecometalix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Aluminio - Reciclaje y Propiedades | Ecometalix',
    description: 'Aluminio: metal ligero, resistente y 100% reciclable. Propiedades técnicas y precios actualizados.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Aluminio() {
  return <AluminiumPage />;
} 