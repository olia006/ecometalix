import React from 'react';
import FloatingCTA from '../components/FloatingCTA';
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import ServiceSchema from '../components/seo/ServiceSchema';

// Language utilities
import { getContent } from '../utils/languageUtils';

// Home Sections
import HeroSection from '../components/home/HeroSection';
import SectionCardsGrid from '../components/SectionCardsGrid';
import PricesPreviewSection from '../components/home/PricesPreviewSection';
import FAQPreviewSection from '../components/home/FAQPreviewSection';
import MapSection from '../components/home/MapSection';

// Metadata for the homepage
export const metadata = {
  title: 'Compra y Venta de Chatarra en Santiago | Ecometalix Spa',
  description: 'Ecometalix Spa: Compra y venta de chatarra, pago inmediato, horario extendido, balanza certificada. Santiago. Recibe tu dinero al instante. ¡Contáctanos por WhatsApp!',
  keywords: 'chatarra, metales, reciclaje, santiago, cobre, aluminio, hierro, bronce, pago inmediato',
  openGraph: {
    title: 'Compra y Venta de Chatarra en Santiago | Ecometalix Spa',
    description: 'Ecometalix Spa: Compra y venta de chatarra, pago inmediato, horario extendido, balanza certificada. Santiago. Recibe tu dinero al instante.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://ecometalix.cl/',
    siteName: 'Ecometalix',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'Compra y Venta de Chatarra en Santiago | Ecometalix Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecometalix_spa',
    creator: '@ecometalix_spa',
    title: 'Compra y Venta de Chatarra en Santiago | Ecometalix Spa',
    description: 'Ecometalix Spa: Compra y venta de chatarra, pago inmediato, horario extendido, balanza certificada.',
    images: ['/images/logoecometalix.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  // Detect language (simplified for initial migration)
  const pathname = "/";
  const lang: string = "es";
  const isEnglish = lang === 'en' || pathname.startsWith('/en');
  const currentLang = isEnglish ? 'en' : 'es';
  
  // Get content for current language
  const pageContent = getContent('home', currentLang) || {};
  
  return (
    <>
      {/* Structured data (same for both languages) */}
      <LocalBusinessSchema />
      <ServiceSchema />

      {/* Floating WhatsApp CTA */}
      <FloatingCTA />

      {/* 1. Hero Section with dynamic content */}
      <HeroSection
        subtitle={(pageContent as any).hero?.subtitle || "Compra y reciclaje de chatarra y metales en Santiago"}
                  lastUpdated={(pageContent as any).hero?.lastUpdated}
      />

      {/* 2. Prices Preview Section */}
      <PricesPreviewSection />

      {/* 3. Section Cards Grid - replaces long scrollable sections */}
      <SectionCardsGrid 
        isEnglish={isEnglish}
      />

      {/* 4. FAQ Preview Section */}
      <FAQPreviewSection />

      {/* 5. Google Business Profile & Location */}
      <MapSection isEnglish={isEnglish} />

      {/* Footer is handled in layout.tsx globally */}
    </>
  );
} 