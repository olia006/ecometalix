import React from 'react';
import EnglishMaterialsPage from '../../../pages/EnglishMaterialsPage';

// Metadata for the English Materials page
export const metadata = {
  title: 'Scrap Metal Materials - Types and Current Prices',
  description: 'Discover all the scrap metal materials we buy: copper, aluminum, iron, bronze and more. Check current market prices.',
  keywords: 'scrap materials, metal types, copper, aluminum, iron, bronze, materials we buy',
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishMaterials() {
  return <EnglishMaterialsPage />;
} 