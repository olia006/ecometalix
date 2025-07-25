import React from 'react';
import EnglishWhyUsPage from '../../../pages/EnglishWhyUsPage';

// Metadata for the English Why Us page
export const metadata = {
  title: 'Why Choose Us - Fair Prices and Professional Service',
  description: 'Discover why Ecometalix is the best choice for scrap metal sales in Santiago. Certified weighing, immediate payment and transparent process.',
  keywords: 'why choose us, scrap metal, fair prices, professional service, certified weighing',
  openGraph: {
    title: 'Why Choose Us - Fair Prices and Professional Service',
    description: 'Discover why Ecometalix is the best choice for scrap metal sales in Santiago. Certified weighing, immediate payment and transparent process.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ecometalix.cl/en/why-us',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'Why Choose Us - Fair Prices and Professional Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Why Choose Us - Fair Prices and Professional Service',
    description: 'Discover why Ecometalix is the best choice for scrap metal sales in Santiago. Certified weighing, immediate payment and transparent process.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishWhyUs() {
  return <EnglishWhyUsPage />;
} 