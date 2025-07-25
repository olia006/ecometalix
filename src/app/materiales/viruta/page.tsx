import React from 'react';
import VirutaPage from '../../../components/pages/VirutaPage';

// Metadata for the metal shavings page
export const metadata = {
  title: 'Viruta Metálica - Residuos de Mecanizado',
  description: 'Viruta metálica: residuos de procesos de mecanizado y torneado. Reciclaje especializado, clasificación por tipo de metal y precios competitivos.',
  keywords: 'viruta metálica, residuos mecanizado, torneado, viruta hierro, viruta aluminio, reciclaje viruta',
  alternates: {
    canonical: '/materiales/viruta',
  },
  openGraph: {
    title: 'Viruta Metálica - Residuos Industriales | Ecometalix',
    description: 'Viruta metálica: reciclaje especializado de residuos de mecanizado y torneado industrial.',
    type: 'article',
    locale: 'es_CL',
    url: 'https://ecometalix.cl/materiales/viruta',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/materials/viruta.webp',
        width: 1200,
        height: 630,
        alt: 'Viruta Metálica - Residuos Industriales | Ecometalix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Viruta Metálica - Residuos Industriales | Ecometalix',
    description: 'Viruta metálica: reciclaje especializado de residuos de mecanizado y torneado industrial.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Viruta() {
  return <VirutaPage />;
} 