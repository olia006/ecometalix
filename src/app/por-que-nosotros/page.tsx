import React from 'react';
import WhyUsPage from '../../pages/WhyUsPage';

// Metadata for the why us page
export const metadata = {
  title: '¿Por Qué Elegir Ecometalix? - Ventajas y Diferencias',
  description: 'Descubre por qué somos la mejor opción: pago inmediato, horario extendido, balanza certificada, trato personalizado y años de experiencia en Santiago.',
  keywords: 'por que elegir, ventajas ecometalix, pago inmediato, balanza certificada, experiencia, confianza, santiago',
  alternates: {
    canonical: '/por-que-nosotros',
  },
  openGraph: {
    title: '¿Por Qué Elegir Ecometalix? | Ventajas',
    description: 'Pago inmediato, balanza certificada, trato personalizado y años de experiencia en Santiago.',
    type: 'website',
    locale: 'es_CL',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PorQueNosotros() {
  return <WhyUsPage />;
} 