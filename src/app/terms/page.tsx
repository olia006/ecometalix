import React from 'react';
import TermsConditionsPage from '../../pages/TermsConditionsPage';

// Metadata for the terms page
export const metadata = {
  title: 'Términos y Condiciones - Compra y Venta de Chatarra',
  description: 'Conoce los términos y condiciones de Ecometalix para la compra y venta de chatarra y metales reciclables en Santiago.',
  keywords: 'términos condiciones, compra chatarra, venta metales, ecometalix, santiago',
  openGraph: {
    title: 'Términos y Condiciones | Ecometalix',
    description: 'Conoce los términos y condiciones de Ecometalix para la compra y venta de chatarra y metales reciclables en Santiago.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://ecometalix.cl/terms',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'Términos y Condiciones | Ecometalix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Términos y Condiciones | Ecometalix',
    description: 'Conoce los términos y condiciones de Ecometalix para la compra y venta de chatarra y metales reciclables en Santiago.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsConditionsPage />;
} 