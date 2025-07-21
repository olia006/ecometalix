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
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Aluminio() {
  return <AluminiumPage />;
} 