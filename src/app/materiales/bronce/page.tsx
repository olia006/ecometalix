import React from 'react';
import BroncePage from '../../../components/pages/BroncePage';

// Metadata for the bronze page
export const metadata = {
  title: 'Bronce - Aleación Histórica y Reciclaje',
  description: 'Bronce: aleación de cobre y estaño con historia milenaria. Descubre sus propiedades, usos artísticos e industriales y reciclaje responsable.',
  keywords: 'bronce, reciclaje bronce, aleación cobre estaño, chatarra bronce, precio bronce, metal histórico',
  alternates: {
    canonical: '/materiales/bronce',
  },
  openGraph: {
    title: 'Bronce - Aleación Histórica | Ecometalix',
    description: 'Bronce: aleación de cobre y estaño con historia milenaria. Propiedades y reciclaje responsable.',
    type: 'article',
    locale: 'es_CL',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Bronce() {
  return <BroncePage />;
} 