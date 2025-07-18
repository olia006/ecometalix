"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import HowItWorksSection from '../components/home/HowItWorksSection';

export default function EnglishHowItWorksPage() {
  return (
    <>
      <PageHeader 
        title="How It Works"
        subtitle="Simple and transparent process for selling your scrap metal"
      />

      <section style={{ backgroundColor: 'var(--background-page)', minHeight: '100vh', padding: '2rem 0' }}>
        <HowItWorksSection />
      </section>
    </>
  );
} 