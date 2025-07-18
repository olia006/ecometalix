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
        <SectionCardsGrid isEnglish={true} />
      </section>
    </>
  );
} 