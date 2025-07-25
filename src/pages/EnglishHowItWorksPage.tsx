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
        backgroundImage="/images/materials/materialhero.jpg"
      />

      <section className={styles.pageSection}>
        <div className={styles.container}>
          <div className={styles.introSection}>
            <h2 className={styles.sectionTitle}>Our 4-Step Process</h2>
            <p className={styles.sectionDescription}>
              Selling your scrap metal with Ecometalix is simple, transparent, and fast. Here&apos;s exactly how it works:
            </p>
            
            <ol className={styles.processList}>
              <li className={styles.processStep}>
                <h3 className={styles.stepTitle}>1. Contact Us</h3>
                <ul className={styles.stepDetails}>
                  <li>Send us a WhatsApp message or visit our facility</li>
                  <li>Send photos of your materials for initial evaluation</li>
                  <li>Get immediate response during business hours (8 AM - 8 PM)</li>
                  <li>No appointment necessary for walk-ins</li>
                </ul>
              </li>
              
              <li className={styles.processStep}>
                <h3 className={styles.stepTitle}>2. Professional Evaluation</h3>
                <ul className={styles.stepDetails}>
                  <li>Our experts examine your materials</li>
                  <li>We explain the grading process transparently</li>
                  <li>Separate materials by type and quality</li>
                  <li>Provide detailed breakdown of pricing</li>
                </ul>
              </li>
              
              <li className={styles.processStep}>
                <h3 className={styles.stepTitle}>3. Certified Weighing</h3>
                <ul className={styles.stepDetails}>
                  <li>Use INN-certified industrial scales</li>
                  <li>You can witness the entire weighing process</li>
                  <li>Digital display visible to all parties</li>
                  <li>Official weight certificate provided</li>
                </ul>
              </li>
              
              <li className={styles.processStep}>
                <h3 className={styles.stepTitle}>4. Immediate Payment</h3>
                <ul className={styles.stepDetails}>
                  <li>Choose cash payment or bank transfer</li>
                  <li>All transactions completed on the spot</li>
                  <li>Official receipt and tax documentation</li>
                  <li>No waiting periods or hidden fees</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
        <HowItWorksSection />
      </section>
    </>
  );
} 