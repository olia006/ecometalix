import React from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/seo/Seo";
import LocalBusinessSchema from "../components/seo/LocalBusinessSchema";
import ServiceSchema from "../components/seo/ServiceSchema";
import FloatingCTA from "../components/FloatingCTA";

// Language utilities
import { detectLanguage, generateBilingualHreflangs, getContent } from "../utils/languageUtils";

// Home Sections
import HeroSection from "../components/home/HeroSection";
import SectionCardsGrid from "../components/SectionCardsGrid";
import StatsSection from "../components/home/StatsSection";
import PricesPreviewSection from "../components/home/PricesPreviewSection";
import TestimonialSection from "../components/home/TestimonialSection";
import FAQPreviewSection from "../components/home/FAQPreviewSection";
import MapSection from "../components/home/MapSection";
import TrustCues from "../components/TrustCues";

export default function BilingualHomePage() {
  const location = useLocation();
  
  // Detect current language from URL
  const lang = detectLanguage(location.pathname);
  const isEnglish = lang === 'en';
  
  // Get content for current language
  const pageContent = getContent('home', lang);
  
  // Generate proper canonical URL
  const canonicalUrl = isEnglish ? '/en/' : '/';
  
  return (
    <>
      {/* SEO with dynamic content based on language */}
      <Seo
        title={pageContent.title}
        description={pageContent.description}
        canonical={canonicalUrl}
        hreflangs={generateBilingualHreflangs(location.pathname)}
      />
      
      {/* Structured data (same for both languages) */}
      <LocalBusinessSchema />
      <ServiceSchema />

      {/* Floating WhatsApp CTA */}
      <FloatingCTA />

      {/* 1. Hero Section with dynamic content */}
      <HeroSection
        title={pageContent.hero.title}
        subtitle={pageContent.hero.subtitle}
        showCTAs={true}
        lastUpdated={pageContent.hero.lastUpdated}
      />

      {/* 2. Trust/Certification Badges */}
      <TrustCues />

      {/* 3. Prices Preview Section */}
      <PricesPreviewSection />

      {/* 4. Section Cards Grid - replaces long scrollable sections */}
      <SectionCardsGrid 
        isEnglish={isEnglish}
      />

      {/* 5. Stats Section (compact, inline) */}
      <StatsSection />

      {/* 6. Testimonials Section */}
      <TestimonialSection />

      {/* 7. FAQ Preview Section */}
      <FAQPreviewSection />

      {/* 8. Map Section - Location and contact information */}
      <MapSection />

      {/* Removed Footer - it's already in App.jsx globally */}
    </>
  );
} 