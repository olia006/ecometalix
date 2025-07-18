"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './EnglishFAQPage.module.css';

export default function EnglishFAQPage() {
  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about selling scrap metal"
      />

      <section className={styles.pageSection}>
        <div className={styles.container}>
          
          <div className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>
              What types of scrap metal do you buy?
            </h2>
            <p className={styles.sectionContent}>
              We buy all types of metals: copper (cables, pipes, sheets), aluminum (profiles, cans, radiators), 
              iron and steel (structures, machinery), bronze, brass, and electronic materials. If you&apos;re not 
              sure about your material, send us a photo via WhatsApp.
            </p>
          </div>

          <div className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>
              How do you determine the price of materials?
            </h2>
            <p className={styles.sectionContent}>
              Our prices are based on international market quotations updated daily. We consider factors 
              such as material type, quality, purity, and quantity. All evaluations are done transparently 
              with certified scales.
            </p>
          </div>

          <div className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>
              Do you provide immediate payment?
            </h2>
            <p className={styles.sectionContent}>
              Yes! We offer immediate cash payment or bank transfer within 24 business hours. We also 
              provide all necessary tax documentation for your transaction.
            </p>
          </div>

          <div className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>
              How can I get a quote?
            </h2>
            <p className={styles.sectionContent}>
              Send us a photo and description of your materials via WhatsApp to{' '}
              <a href="https://wa.me/56940244042" className={styles.contactLink}>
                +56 9 4024 4042
              </a>. We&apos;ll provide a preliminary quote and can schedule an evaluation at our facilities.
            </p>
          </div>

          <div className={styles.contactSection}>
            <h2 className={styles.contactTitle}>
              Have More Questions?
            </h2>
            <p className={styles.contactContent}>
              Contact us directly via WhatsApp for personalized assistance and quick responses.
            </p>
            <a 
              href="https://wa.me/56940244042" 
              className={styles.contactButton}
            >
              Contact us on WhatsApp
            </a>
          </div>

        </div>
      </section>
    </>
  );
} 