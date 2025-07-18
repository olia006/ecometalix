"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import MetalPriceTableSection from '../components/home/MetalPriceTableSection';

export default function EnglishPricesPage() {
  return (
    <>
      <PageHeader 
        title="Metal Prices"
        subtitle="Current market rates updated daily — Get your quote via WhatsApp"
      />

      <section style={{ backgroundColor: 'var(--background-page)', minHeight: '100vh', padding: '2rem 0' }}>
        <MetalPriceTableSection />
      </section>
    </>
  );
} 