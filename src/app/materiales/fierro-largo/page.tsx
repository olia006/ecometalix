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
    url: 'https://ecometalix.cl/materiales/fierro-largo',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/materials/FierroLargo.webp',
        width: 1200,
        height: 630,
        alt: 'Fierro Largo - Estructuras Metálicas | Ecometalix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Fierro Largo - Estructuras Metálicas | Ecometalix',
    description: 'Fierro largo: barras, vigas y estructuras metálicas para reciclaje responsable.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FierroLargo() {
  return <FierroLargoPage />;
} 