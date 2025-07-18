"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import Background from '../components/Background';
import SectionCardsGrid from '../components/SectionCardsGrid';

export default function EnglishWhyUsPage() {
  return (
    <>
      <PageHeader 
        title="Why Choose Ecometalix?"
        subtitle="Transparent, safe and profitable scrap metal sales in Santiago"
      />

      <Background>
        <SectionCardsGrid isEnglish={true} />
      </Background>
    </>
  );
} 