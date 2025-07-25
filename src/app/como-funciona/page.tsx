import React from 'react';
import ComoFuncionaPage from '../../pages/ComoFuncionaPage';

// Metadata for the how it works page
export const metadata = {
  title: 'Cómo Funciona - Proceso de Venta de Chatarra en 4 Pasos',
  description: 'Descubre nuestro proceso simple y transparente para vender chatarra: contacto, evaluación, pesaje certificado y pago inmediato. ¡Solo 4 pasos!',
  keywords: 'como funciona, proceso venta chatarra, pasos vender, contacto, evaluación, pesaje, pago inmediato',
  alternates: {
    canonical: '/como-funciona',
  },
  openGraph: {
    title: 'Cómo Funciona Nuestro Proceso | Ecometalix',
    description: 'Proceso simple y transparente: contacto, evaluación, pesaje certificado y pago inmediato en 4 pasos.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://ecometalix.cl/como-funciona',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'Cómo Funciona Nuestro Proceso | Ecometalix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Cómo Funciona Nuestro Proceso | Ecometalix',
    description: 'Proceso simple y transparente: contacto, evaluación, pesaje certificado y pago inmediato en 4 pasos.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ComoFunciona() {
  return <ComoFuncionaPage />;
} 