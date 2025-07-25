import React from 'react';
import EnglishMaterialsPage from '../../../pages/EnglishMaterialsPage';

// Metadata for the English Materials page
export const metadata = {
  title: 'Scrap Metal Materials - Types and Current Prices',
  description: 'Discover all the scrap metal materials we buy: copper, aluminum, iron, bronze and more. Check current market prices.',
  keywords: 'scrap materials, metal types, copper, aluminum, iron, bronze, materials we buy',
  openGraph: {
    title: 'Scrap Metal Materials - Types and Current Prices',
    description: 'Discover all the scrap metal materials we buy: copper, aluminum, iron, bronze and more. Check current market prices.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ecometalix.cl/en/materials',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'Scrap Metal Materials - Types and Current Prices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Scrap Metal Materials - Types and Current Prices',
    description: 'Discover all the scrap metal materials we buy: copper, aluminum, iron, bronze and more. Check current market prices.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishMaterials() {
  return <EnglishMaterialsPage />;
} 