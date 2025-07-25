import React from 'react';
import PrivacyPolicyPage from '../../pages/PrivacyPolicyPage';

// Metadata for the privacy page
export const metadata = {
  title: 'Política de Privacidad - Protección de Datos Personales',
  description: 'Conoce cómo Ecometalix protege tu información personal y privacidad en nuestros servicios de compra y venta de chatarra.',
  keywords: 'política privacidad, protección datos, información personal, ecometalix, chatarra',
  openGraph: {
    title: 'Política de Privacidad | Ecometalix',
    description: 'Conoce cómo Ecometalix protege tu información personal y privacidad en nuestros servicios de compra y venta de chatarra.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://ecometalix.cl/privacy',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'Política de Privacidad | Ecometalix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Política de Privacidad | Ecometalix',
    description: 'Conoce cómo Ecometalix protege tu información personal y privacidad en nuestros servicios de compra y venta de chatarra.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicyPage />;
} 