import React from 'react';
import EnglishHowItWorksPage from '../../../pages/EnglishHowItWorksPage';

// Metadata for the English How It Works page
export const metadata = {
  title: 'How It Works - Simple Scrap Metal Selling Process',
  description: 'Learn our simple and transparent process for selling scrap metal. From evaluation to payment in just a few steps.',
  keywords: 'how it works, selling process, scrap metal, steps, transparent process',
  openGraph: {
    title: 'How It Works - Simple Scrap Metal Selling Process',
    description: 'Learn our simple and transparent process for selling scrap metal. From evaluation to payment in just a few steps.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ecometalix.cl/en/how-it-works',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'How It Works - Simple Scrap Metal Selling Process',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'How It Works - Simple Scrap Metal Selling Process',
    description: 'Learn our simple and transparent process for selling scrap metal. From evaluation to payment in just a few steps.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishHowItWorks() {
  return <EnglishHowItWorksPage />;
} 