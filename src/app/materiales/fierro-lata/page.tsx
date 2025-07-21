import React from 'react';
import FierroLataPage from '../../../components/pages/FierroLataPage';

// Metadata for the tin iron page
export const metadata = {
  title: 'Fierro Lata - Reciclaje de Envases Metálicos',
  description: 'Fierro lata: reciclaje de envases metálicos y hojalata. Descubre el proceso de recuperación, beneficios ambientales y precios actualizados.',
  keywords: 'fierro lata, hojalata, envases metálicos, reciclaje latas, chatarra lata, precio fierro lata',
  alternates: {
    canonical: '/materiales/fierro-lata',
  },
  openGraph: {
    title: 'Fierro Lata - Reciclaje de Envases | Ecometalix',
    description: 'Fierro lata: reciclaje responsable de envases metálicos y hojalata. Beneficios ambientales.',
    type: 'article',
    locale: 'es_CL',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FierroLata() {
  return <FierroLataPage />;
} 