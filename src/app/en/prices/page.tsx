import React from 'react';
import EnglishPricesPage from '../../../pages/EnglishPricesPage';

// Metadata for the English Prices page
export const metadata = {
  title: 'Metal Prices - Current Market Rates Updated Daily',
  description: 'Check current scrap metal prices in Santiago. Copper, aluminum, iron, bronze and more. Immediate quotes via WhatsApp.',
  keywords: 'metal prices, scrap metal rates, copper price, aluminum price, market rates',
  openGraph: {
    title: 'Metal Prices - Current Market Rates Updated Daily',
    description: 'Check current scrap metal prices in Santiago. Copper, aluminum, iron, bronze and more. Immediate quotes via WhatsApp.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ecometalix.cl/en/prices',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'Metal Prices - Current Market Rates Updated Daily',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Metal Prices - Current Market Rates Updated Daily',
    description: 'Check current scrap metal prices in Santiago. Copper, aluminum, iron, bronze and more. Immediate quotes via WhatsApp.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishPrices() {
  return <EnglishPricesPage />;
} 