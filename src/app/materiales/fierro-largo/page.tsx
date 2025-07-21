import React from 'react';
import FierroLargoPage from '../../../components/pages/FierroLargoPage';

// Metadata for the long iron page
export const metadata = {
  title: 'Fierro Largo - Estructuras Metálicas y Reciclaje',
  description: 'Fierro largo: barras, vigas y estructuras metálicas para reciclaje. Conoce sus aplicaciones, ventajas estructurales y nuestros precios.',
  keywords: 'fierro largo, estructuras metálicas, barras hierro, vigas metálicas, reciclaje estructural, precio fierro largo',
  alternates: {
    canonical: '/materiales/fierro-largo',
  },
  openGraph: {
    title: 'Fierro Largo - Estructuras Metálicas | Ecometalix',
    description: 'Fierro largo: barras, vigas y estructuras metálicas para reciclaje responsable.',
    type: 'article',
    locale: 'es_CL',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FierroLargo() {
  return <FierroLargoPage />;
} 