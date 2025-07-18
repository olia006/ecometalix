"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import MaterialGrid from '../components/MaterialGrid';

export default function EnglishMaterialsPage() {
  return (
    <>
      <PageHeader 
        title="Scrap Metal Materials"
        subtitle="Discover all the materials we buy and their current market prices"
      />

      <section style={{ backgroundColor: 'var(--background-page)', minHeight: '100vh', padding: '2rem 0' }}>
        <MaterialGrid />
      </section>
    </>
  );
} 