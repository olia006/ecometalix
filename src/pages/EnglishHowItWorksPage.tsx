"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './EnglishPages.module.css';
import HowItWorksSection from '../components/home/HowItWorksSection';

export default function EnglishHowItWorksPage() {
  return (
    <>
      <PageHeader 
        title="How It Works"
        subtitle="Simple and transparent process for selling your scrap metal"
      />

      <section className={styles.pageSection}>
        <HowItWorksSection />
      </section>
    </>
  );
} 