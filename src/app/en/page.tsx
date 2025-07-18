import React from 'react';
import BilingualHomePage from '../../pages/BilingualHomePage';

// English homepage metadata
export const metadata = {
  title: 'Ecometalix - Scrap Metal Buying & Selling in Santiago',
  description: 'Scrap metal buying and selling in Santiago. Immediate payment, certified scale and personalized service.',
  keywords: 'scrap metal, metals, recycling, santiago, copper, aluminum, iron, bronze, immediate payment',
  alternates: {
    canonical: '/en/',
    languages: {
      'es': '/',
      'en': '/en/'
    }
  },
};

export default function EnglishHomePage() {
  return <BilingualHomePage lang="en" />;
} 