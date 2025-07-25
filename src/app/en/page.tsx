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
  openGraph: {
    title: 'Ecometalix - Scrap Metal Buying & Selling in Santiago',
    description: 'Scrap metal buying and selling in Santiago. Immediate payment, certified scale and personalized service.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ecometalix.cl/en/',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'Ecometalix - Scrap Metal Buying & Selling in Santiago',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Ecometalix - Scrap Metal Buying & Selling in Santiago',
    description: 'Scrap metal buying and selling in Santiago. Immediate payment, certified scale and personalized service.',
    images: ['/images/logoecometalix.webp'],
  },
};

export default function EnglishHomePage() {
  return <BilingualHomePage lang="en" />;
} 