import React from 'react';
import EnglishFAQPage from '../../../pages/EnglishFAQPage';

// Metadata for the English FAQ page
export const metadata = {
  title: 'Frequently Asked Questions - Scrap Metal Sales Guide',
  description: 'Get answers to common questions about selling scrap metal. Process, prices, requirements and more information.',
  keywords: 'FAQ, scrap metal, questions, selling, process, ecometalix',
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishFAQ() {
  return <EnglishFAQPage />;
} 