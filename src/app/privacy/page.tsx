import React from 'react';
import PrivacyPolicyPage from '../../pages/PrivacyPolicyPage';

// Metadata for the privacy page
export const metadata = {
  title: 'Política de Privacidad - Protección de Datos Personales',
  description: 'Conoce cómo Ecometalix protege tu información personal y privacidad en nuestros servicios de compra y venta de chatarra.',
  keywords: 'política privacidad, protección datos, información personal, ecometalix, chatarra',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicyPage />;
} 