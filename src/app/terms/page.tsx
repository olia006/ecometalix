import React from 'react';
import TermsConditionsPage from '../../pages/TermsConditionsPage';

// Metadata for the terms page
export const metadata = {
  title: 'Términos y Condiciones - Compra y Venta de Chatarra',
  description: 'Conoce los términos y condiciones de Ecometalix para la compra y venta de chatarra y metales reciclables en Santiago.',
  keywords: 'términos condiciones, compra chatarra, venta metales, ecometalix, santiago',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsConditionsPage />;
} 