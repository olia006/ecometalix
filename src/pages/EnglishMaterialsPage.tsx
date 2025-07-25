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
        <div className={styles.container}>
          <div className={styles.introSection}>
            <h2 className={styles.sectionTitle}>Materials We Accept</h2>
            <p className={styles.sectionDescription}>
              We purchase a wide variety of scrap metals and electronic materials. All materials are evaluated fairly using certified scales.
            </p>
            
            <div className={styles.materialCategories}>
              <div className={styles.categoryColumn}>
                <h3 className={styles.categoryTitle}>Ferrous Metals</h3>
                <ul className={styles.materialList}>
                  <li>Short Iron (HMS 1&2)</li>
                  <li>Long Iron (Structural steel)</li>
                  <li>Mixed Iron (Various grades)</li>
                  <li>Tin-plated Steel (Cans)</li>
                  <li>Cast Iron</li>
                </ul>
              </div>
              
              <div className={styles.categoryColumn}>
                <h3 className={styles.categoryTitle}>Non-Ferrous Metals</h3>
                <ul className={styles.materialList}>
                  <li>Copper (cables, pipes, sheets)</li>
                  <li>Aluminum (profiles, cans, radiators)</li>
                  <li>Bronze (fittings, statues)</li>
                  <li>Brass (valves, decorative items)</li>
                  <li>Lead (batteries, sheets)</li>
                </ul>
              </div>
              
              <div className={styles.categoryColumn}>
                <h3 className={styles.categoryTitle}>Electronic Materials</h3>
                <ul className={styles.materialList}>
                  <li>Computer equipment</li>
                  <li>Mobile phones</li>
                  <li>Electronic components</li>
                  <li>Cables and wiring</li>
                  <li>Metal shavings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <MaterialGrid />
      </section>
    </>
  );
} 