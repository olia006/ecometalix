import React from 'react';
import EnglishFAQPage from '../../../pages/EnglishFAQPage';

// Metadata for the English FAQ page
export const metadata = {
  title: 'Frequently Asked Questions - Scrap Metal Sales Guide',
  description: 'Get answers to common questions about selling scrap metal. Process, prices, requirements and more information.',
  keywords: 'FAQ, scrap metal, questions, selling, process, ecometalix',
  openGraph: {
    title: 'Frequently Asked Questions - Scrap Metal Sales Guide',
    description: 'Get answers to common questions about selling scrap metal. Process, prices, requirements and more information.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ecometalix.cl/en/faq',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'Frequently Asked Questions - Scrap Metal Sales Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Frequently Asked Questions - Scrap Metal Sales Guide',
    description: 'Get answers to common questions about selling scrap metal. Process, prices, requirements and more information.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishFAQ() {
  return <EnglishFAQPage />;
} 