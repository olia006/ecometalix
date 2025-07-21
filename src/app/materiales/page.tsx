import React from 'react';
import MaterialsIndexPage from '../../pages/MaterialsIndexPage';

// Metadata for the materials index page
export const metadata = {
  title: 'Materiales que Compramos - Tipos de Chatarra y Metales',
  description: 'Conoce todos los materiales que compramos: cobre, aluminio, hierro, bronce, residuos electrónicos y más. Precios actualizados y proceso transparente.',
  keywords: 'materiales chatarra, tipos metales, cobre, aluminio, hierro, bronce, residuos electrónicos, reciclaje metales',
  alternates: {
    canonical: '/materiales',
  },
  openGraph: {
    title: 'Materiales que Compramos | Ecometalix',
    description: 'Todos los materiales que compramos: cobre, aluminio, hierro, bronce y más. Precios actualizados.',
    type: 'website',
    locale: 'es_CL',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Materiales() {
  return <MaterialsIndexPage />;
} 