import React from 'react';
import EnglishPricesPage from '../../../pages/EnglishPricesPage';

// Metadata for the English Prices page
export const metadata = {
  title: 'Metal Prices - Current Market Rates Updated Daily',
  description: 'Check current scrap metal prices in Santiago. Copper, aluminum, iron, bronze and more. Immediate quotes via WhatsApp.',
  keywords: 'metal prices, scrap metal rates, copper price, aluminum price, market rates',
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishPrices() {
  return <EnglishPricesPage />;
} 