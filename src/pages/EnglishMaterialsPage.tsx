"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './EnglishPages.module.css';
import MaterialGrid from '../components/MaterialGrid';

export default function EnglishMaterialsPage() {
  return (
    <>
      <PageHeader 
        title="Scrap Metal Materials"
        subtitle="Discover all the materials we buy and their current market prices"
      />

      <section className={styles.pageSection}>
        <MaterialGrid />
      </section>
    </>
  );
} 