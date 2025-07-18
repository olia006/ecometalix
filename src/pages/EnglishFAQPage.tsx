"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import Background from '../components/Background';

export default function EnglishFAQPage() {
  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about selling scrap metal"
      />

      <Background>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              What types of scrap metal do you buy?
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              We buy all types of metals: copper (cables, pipes, sheets), aluminum (profiles, cans, radiators), 
              iron and steel (structures, machinery), bronze, brass, and electronic materials. If you&apos;re not 
              sure about your material, send us a photo via WhatsApp.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              How do you determine the price of materials?
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Our prices are based on international market quotations updated daily. We consider factors 
              such as material type, quality, purity, and quantity. All evaluations are done transparently 
              with certified scales.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Do you provide immediate payment?
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Yes! We offer immediate cash payment or bank transfer within 24 business hours. We also 
              provide all necessary tax documentation for your transaction.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              How can I get a quote?
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Send us a photo and description of your materials via WhatsApp to{' '}
              <a href="https://wa.me/56940244042" style={{ color: 'var(--color-primary)' }}>
                +56 9 4024 4042
              </a>. We&apos;ll provide a preliminary quote and can schedule an evaluation at our facilities.
            </p>
          </div>

          <div style={{ 
            background: 'var(--glass-light)', 
            padding: '2rem', 
            borderRadius: 'var(--radius-lg)', 
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Have More Questions?
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Contact us directly via WhatsApp for personalized assistance and quick responses.
            </p>
            <a 
              href="https://wa.me/56940244042" 
              style={{ 
                display: 'inline-block',
                background: 'var(--color-primary)',
                color: 'var(--color-white)',
                padding: '1rem 2rem',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Contact us on WhatsApp
            </a>
          </div>

        </div>
      </Background>
    </>
  );
} 