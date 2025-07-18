"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './EnglishPages.module.css';
import MetalPriceTableSection from '../components/home/MetalPriceTableSection';

export default function EnglishPricesPage() {
  return (
    <>
      <PageHeader 
        title="Metal Prices"
        subtitle="Current market rates updated daily — Get your quote via WhatsApp"
      />

      <section className={styles.pageSection}>
        <MetalPriceTableSection />
      </section>
    </>
  );
} 