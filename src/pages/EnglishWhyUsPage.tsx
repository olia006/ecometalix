"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionCardsGrid from '../components/SectionCardsGrid';

export default function EnglishWhyUsPage() {
  return (
    <>
      <PageHeader 
        title="Why Choose Ecometalix?"
        subtitle="Transparent, safe and profitable scrap metal sales in Santiago"
      />

      <section style={{ backgroundColor: 'var(--background-page)', minHeight: '100vh', padding: '2rem 0' }}>
        <SectionCardsGrid isEnglish={true} />
      </section>
    </>
  );
} 