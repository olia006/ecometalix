"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import FAQManagerContact from '../components/FAQManagerContact';
import styles from './EnglishFAQPage.module.css';

export default function EnglishFAQPage() {
  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about selling scrap metal"
        backgroundImage="/images/faqpreviewpage.jpg"
      />

      <section className={styles.pageSection}>
        <div className={styles.container}>
          <h2 className={styles.mainTitle}>Common Questions About Selling Scrap Metal</h2>
          
          <ol className={styles.faqList}>
            <li className={styles.faqItem}>
              <h3 className={styles.sectionTitle}>
                What types of scrap metal do you buy?
              </h3>
              <p className={styles.sectionContent}>
                We buy all types of metals: copper (cables, pipes, sheets), aluminum (profiles, cans, radiators), 
                iron and steel (structures, machinery), bronze, brass, and electronic materials. If you&apos;re not 
                sure about your material, send us a photo via WhatsApp.
              </p>
            </li>

            <li className={styles.faqItem}>
              <h3 className={styles.sectionTitle}>
                How do you determine the price of materials?
              </h3>
              <p className={styles.sectionContent}>
                Our prices are based on international market quotations updated daily. We consider factors 
                such as material type, quality, purity, and quantity. All evaluations are done transparently 
                with certified scales.
              </p>
            </li>

            <li className={styles.faqItem}>
              <h3 className={styles.sectionTitle}>
                Do you provide immediate payment?
              </h3>
              <p className={styles.sectionContent}>
                Yes! We offer immediate cash payment or bank transfer within 24 business hours. We also 
                provide all necessary tax documentation for your transaction.
              </p>
            </li>
            
            <li className={styles.faqItem}>
              <h3 className={styles.sectionTitle}>
                What documentation do I need to sell scrap metal?
              </h3>
              <p className={styles.sectionContent}>
                You need a valid ID (Chilean ID card or passport). For business transactions, we may require 
                additional documentation. All transactions are recorded according to Chilean regulations.
              </p>
            </li>
            
            <li className={styles.faqItem}>
              <h3 className={styles.sectionTitle}>
                Do you offer pickup services?
              </h3>
              <p className={styles.sectionContent}>
                Yes, we provide pickup services for large quantities. Contact us via WhatsApp to arrange 
                collection and get a quote for transportation costs.
              </p>
            </li>
          </ol>

          <div className={styles.faqSection}>
            <h3 className={styles.sectionTitle}>
              How can I get a quote?
            </h3>
            <p className={styles.sectionContent}>
              Send us a photo and description of your materials via WhatsApp to{' '}
              <a href="https://wa.me/56940244042" className={styles.contactLink}>
                +56 9 4024 4042
              </a>{' '}
              for immediate assistance and pricing information.
            </p>
          </div>
        </div>
      </section>

      <FAQManagerContact isEnglish={true} />
    </>
  );
} 