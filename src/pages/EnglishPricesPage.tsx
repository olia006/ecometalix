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
        <div className={styles.container}>
          <div className={styles.introSection}>
            <h2 className={styles.sectionTitle}>What Makes Our Prices Competitive?</h2>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                <strong>Daily Updates:</strong> Our prices reflect current international market rates
              </li>
              <li className={styles.benefitItem}>
                <strong>Transparent Process:</strong> No hidden fees or surprise deductions
              </li>
              <li className={styles.benefitItem}>
                <strong>Certified Weighing:</strong> INN certified scales for accurate measurements
              </li>
              <li className={styles.benefitItem}>
                <strong>Immediate Payment:</strong> Cash or bank transfer on the spot
              </li>
              <li className={styles.benefitItem}>
                <strong>Volume Discounts:</strong> Better rates for larger quantities
              </li>
            </ul>
          </div>
        </div>
        <MetalPriceTableSection />
      </section>
    </>
  );
} 