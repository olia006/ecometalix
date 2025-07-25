import React from 'react';
import ElectricoPage from '../../../components/pages/ElectricoPage';

// Metadata for the electronic waste page
export const metadata = {
  title: 'Residuos Electrónicos - Reciclaje RAEE',
  description: 'Reciclaje de residuos electrónicos (RAEE): computadores, celulares, electrodomésticos. Proceso seguro, certificado y responsable con el medio ambiente.',
  keywords: 'residuos electrónicos, RAEE, reciclaje electrónicos, chatarra electrónica, computadores, celulares, electrodomésticos',
  alternates: {
    canonical: '/materiales/electrico',
  },
  openGraph: {
    title: 'Residuos Electrónicos - Reciclaje RAEE | Ecometalix',
    description: 'Reciclaje responsable de residuos electrónicos. Proceso certificado y seguro para el medio ambiente.',
    type: 'article',
    locale: 'es_CL',
    url: 'https://ecometalix.cl/materiales/electrico',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/materials/electrico.webp',
        width: 1200,
        height: 630,
        alt: 'Residuos Electrónicos - Reciclaje RAEE | Ecometalix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Residuos Electrónicos - Reciclaje RAEE | Ecometalix',
    description: 'Reciclaje responsable de residuos electrónicos. Proceso certificado y seguro para el medio ambiente.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Electrico() {
  return <ElectricoPage />;
} 