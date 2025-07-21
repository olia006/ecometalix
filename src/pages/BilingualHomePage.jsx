"use client";

import React from "react";
// SEO now handled by App Router metadata
import LocalBusinessSchema from "../components/seo/LocalBusinessSchema";
import ServiceSchema from "../components/seo/ServiceSchema";
import FloatingCTA from "../components/FloatingCTA";

// Language utilities
import { getContent } from "../utils/languageUtils";

// Home Sections
import HeroSection from "../components/home/HeroSection";
import SectionCardsGrid from "../components/SectionCardsGrid";
import StatsSection from "../components/home/StatsSection";
import PricesPreviewSection from "../components/home/PricesPreviewSection";
import FAQPreviewSection from "../components/home/FAQPreviewSection";
import MapSection from "../components/home/MapSection";
import TrustCues from "../components/TrustCues";

export default function BilingualHomePage({ 
  pathname = "/", 
  lang = "es" 
}) {
  // Detect language (simplified for initial migration)
  const isEnglish = lang === 'en' || pathname.startsWith('/en');
  const currentLang = isEnglish ? 'en' : 'es';
  
  // Get content for current language
  const pageContent = getContent('home', currentLang) || {};
  
  // Generate proper canonical URL
  const canonicalUrl = isEnglish ? '/en/' : '/';
  
  return (
    <>
      {/* SEO is now handled by App Router metadata in /app/page.tsx and /app/en/page.tsx */}
      
      {/* Structured data (same for both languages) */}
      <LocalBusinessSchema />
      <ServiceSchema />

      {/* Floating WhatsApp CTA */}
      <FloatingCTA />

      {/* 1. Hero Section with dynamic content */}
      <HeroSection
        subtitle={pageContent.hero?.subtitle || "Compra y reciclaje de chatarra y metales en Santiago"}
        lastUpdated={pageContent.hero?.lastUpdated || "8 de julio 2025"}
        isEnglish={isEnglish}
      />

      {/* 2. Trust/Certification Badges */}
      <TrustCues isEnglish={isEnglish} />

      {/* 3. Prices Preview Section */}
      <PricesPreviewSection isEnglish={isEnglish} />

      {/* 4. Section Cards Grid - replaces long scrollable sections */}
      <SectionCardsGrid 
        isEnglish={isEnglish}
      />

      {/* 5. Stats Section (compact, inline) */}
      <StatsSection isEnglish={isEnglish} />

      {/* 6. FAQ Preview Section */}
      <FAQPreviewSection />

      {/* 7. Google Business Profile & Location */}
      <MapSection isEnglish={isEnglish} />

      {/* Footer is handled in layout.tsx globally */}
    </>
  );
} 