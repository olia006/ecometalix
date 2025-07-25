"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './EnglishPages.module.css';
import SectionCardsGrid from '../components/SectionCardsGrid';

export default function EnglishWhyUsPage() {
  return (
    <>
      <PageHeader 
        title="Why Choose Ecometalix?"
        subtitle="Transparent, safe and profitable scrap metal sales in Santiago"
      />

      <section className={styles.pageSection}>
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Key Services</h2>
            <p className={styles.sectionDescription}>
              Discover why Ecometalix is Santiago&apos;s most trusted scrap metal buyer. From our transparent 4-step process to immediate payments and certified weighing.
            </p>
          </header>
          
          <SectionCardsGrid isEnglish={true} />
        </div>
      </section>
    </>
  );
} 