import React from 'react';
import WhyUsPage from '../../pages/WhyUsPage';

// Enhanced metadata for the why us page
export const metadata = {
  title: '¿Por Qué Elegir Ecometalix? - Líder en Compra de Chatarra Santiago',
  description: 'Empresa líder en compra de chatarra en Santiago: pago inmediato, horario extendido 8-20h, balanza certificada INN, 10 años experiencia. ¡Mejor precio garantizado!',
  keywords: 'compra chatarra santiago, venta chatarra, pago inmediato, balanza certificada, ecometalix, reciclaje metales, aluminio cobre fierro, mejor precio',
  alternates: {
    canonical: '/por-que-nosotros',
  },
  openGraph: {
    title: 'Ecometalix - Líder en Compra de Chatarra Santiago | Ventajas',
    description: 'Pago inmediato, balanza certificada INN, horario 8-20h, 10 años experiencia. La mejor opción para vender tu chatarra en Santiago.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://ecometalix.cl/por-que-nosotros',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'Ecometalix - Líder en Compra de Chatarra Santiago | Ventajas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Ecometalix - Líder en Compra de Chatarra Santiago',
    description: 'Pago inmediato, balanza certificada, mejor precio del mercado.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

export default function PorQueNosotros() {
  return <WhyUsPage />;
} 