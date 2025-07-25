import React from 'react';
import PricesPage from '../../pages/PricesPage';

// Metadata for the prices page
export const metadata = {
  title: 'Precios de Chatarra Actualizados - Cobre, Aluminio, Hierro',
  description: 'Consulta nuestros precios actualizados de chatarra: cobre, aluminio, hierro, bronce y más. Pago inmediato, pesaje certificado. Cotiza por WhatsApp.',
  keywords: 'precios chatarra, precio cobre, precio aluminio, precio hierro, cotización metales, precios actualizados',
  alternates: {
    canonical: '/precios',
  },
  openGraph: {
    title: 'Precios de Chatarra Actualizados | Ecometalix',
    description: 'Precios actualizados de chatarra: cobre, aluminio, hierro, bronce. Pago inmediato y cotización por WhatsApp.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://ecometalix.cl/precios',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'Precios de Chatarra Actualizados | Ecometalix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Precios de Chatarra Actualizados | Ecometalix',
    description: 'Precios actualizados de chatarra: cobre, aluminio, hierro, bronce. Pago inmediato y cotización por WhatsApp.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Precios() {
  return <PricesPage />;
} 